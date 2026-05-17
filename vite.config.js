import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

function getHtmlEntries() {
  const entries = {
    main: resolve(__dirname, 'index.html')
  };

  const rootDirs = fs.readdirSync(__dirname);
  for (const dir of rootDirs) {
    if (['.git', '.github', 'node_modules', 'dist'].includes(dir)) continue;

    const fullPath = resolve(__dirname, dir);
    if (!fs.statSync(fullPath).isDirectory()) continue;

    // Check candidate HTML entrypoints
    const candidates = [
      'index.html',
      'docs/index.html',
      'public/index.html',
      'ui.html',
      'web/index.html'
    ];

    for (const cand of candidates) {
      const candPath = resolve(fullPath, cand);
      if (fs.existsSync(candPath)) {
        const entryKey = cand === 'index.html' ? dir : `${dir}_${cand.replace('/', '_').replace('.html', '')}`;
        entries[entryKey] = candPath;
        break; // Use the first found matching entrypoint
      }
    }
  }

  console.log('Vite MPA Detected Entries:', entries);
  return entries;
}

// Vite plugin to rewrite HTML absolute assets to be subfolder-scoped
const mpaHtmlPlugin = () => {
  return {
    name: 'mpa-html-plugin',
    transformIndexHtml: {
      order: 'pre',
      handler(html, ctx) {
        const parts = ctx.path.split('/').filter(Boolean);
        if (parts.length > 1) {
          const subfolder = parts[0];
          
          let transformed = html
            // Rewrite absolute src/href paths like "/src/main.ts" to "/subfolder/src/main.ts"
            .replace(/(src|href)="\/([^"]+)"/g, (match, attr, path) => {
              if (path.startsWith('http://') || path.startsWith('https://')) {
                return match;
              }
              if (path.startsWith(subfolder)) {
                return match;
              }
              return `${attr}="/${subfolder}/${path}"`;
            });
            
          // Clean up platform-specific non-module scripts like capacitor.js which fail Vite build
          transformed = transformed.replace(/<script src="capacitor\.js"><\/script>/g, '<!-- skipped capacitor.js for web showcase -->');
          
          return transformed;
        }
        return html;
      }
    }
  };
};

// Vite resolver to map ESM-compliant imports (e.g. adding .js to missing TS files, inlining css imports)
const tsResolvePlugin = () => {
  return {
    name: 'ts-resolve-plugin',
    enforce: 'pre',
    async resolveId(source, importer) {
      // Force resolve 'lit/decorators' and 'lit-element/decorators' to the root modern packages directly
      if (source.startsWith('lit/decorators')) {
        try {
          const resolved = require.resolve('lit/decorators.js');
          console.log(`[Vite Specifier Fix] Resolved ${source} -> ${resolved}`);
          return resolved;
        } catch (e) {
          // Fall through
        }
      }
      if (source.startsWith('lit-element/decorators')) {
        try {
          const resolved = require.resolve('lit-element/decorators.js');
          console.log(`[Vite Specifier Fix] Resolved ${source} -> ${resolved}`);
          return resolved;
        } catch (e) {
          // Fall through
        }
      }

      // Auto-inline CSS imports to resolve as raw CSS strings for embedding
      if (source.endsWith('.css') && !source.includes('?')) {
        try {
          const resolved = await this.resolve(source, importer, { skipSelf: true });
          if (resolved) {
            const inlineId = `${resolved.id}?inline`;
            console.log(`[Vite CSS Inline Fix] Resolved ${source} -> ${inlineId}`);
            return inlineId;
          }
        } catch (e) {
          // Fall through
        }
      }

      if (source.endsWith('.js') && importer) {
        const importerDir = resolve(importer, '..');
        const resolvedPath = resolve(importerDir, source);
        if (!fs.existsSync(resolvedPath)) {
          const tsPath = resolvedPath.slice(0, -3) + '.ts';
          if (fs.existsSync(tsPath)) {
            console.log(`[Vite TS Resolve] Resolved ${source} -> ${tsPath}`);
            return tsPath;
          }
        }
      }
      return null;
    }
  };
};

// Rollup plugin to gracefully mark unresolved packages as external to prevent build crashes
const externalizeMissingPlugin = () => {
  return {
    name: 'externalize-missing-plugin',
    async resolveId(source, importer) {
      if (source.startsWith('.') || source.startsWith('/') || source.includes(':')) {
        return null;
      }
      
      try {
        const resolved = await this.resolve(source, importer, { skipSelf: true });
        if (resolved) {
          return resolved;
        }
      } catch (e) {
        // Resolve failed, fall through to externalizing
      }
      
      console.log(`[Vite Externalize] Unresolved package marked external: ${source}`);
      return { id: source, external: true };
    }
  };
};

export default defineConfig({
  plugins: [mpaHtmlPlugin(), tsResolvePlugin(), externalizeMissingPlugin()],
  resolve: {
    alias: {
      'lit/decorators': 'lit/decorators.js',
      'lit-element/decorators': 'lit-element/decorators.js'
    }
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: getHtmlEntries(),
      external: ['capacitor.js']
    }
  }
});
