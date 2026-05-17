import { defineConfig } from "vite";
import { resolve } from "path";

// vite.config.js
export default defineConfig({
  build: {
    outDir: "build",
    rollupOptions: {
      external: /^vscode/,
      input: {
        main: resolve(__dirname, "index.html"),
      },
      output: {
        entryFileNames: "[name].js",
      },
    },
  },
});
