# Lit Examples

A comprehensive collection of modular [Lit](https://lit.dev/) web components, prototypes, and full-stack integration examples.

## ⚡ Lit Showcase
Explore all components natively in the interactive **[Lit Showcase Hub](./lit-showcase/index.html)** or view the **[Live Demo](https://demos.rodydavis.dev/rodydavis/lit-examples)**.

## 📦 Project Structure

### Modular Components (`/lit-components`)
- **[lit-3d-piano](./lit-components/lit-3d-piano)**: 3D interactive musical instrument.
- **[lit-calculator](./lit-components/lit-calculator)**: Fully functional mathematical engine.
- **[lit-code-editor](./lit-components/lit-code-editor)**: Monaco Editor integration.
- **[lit-draggable-dom](./lit-components/lit-draggable-dom)**: Canvas-based layout manager with panning and infinite grid.
- **[lit-file-based-routing](./lit-components/lit-file-based-routing)**: Dynamic application router.
- **[lit-force-graph](./lit-components/lit-force-graph)**: 2D/3D/AR/VR force-directed graph engine.
- **[lit-html-editor](./lit-components/lit-html-editor)**: Native rich-text and markdown editor.
- **[lit-html-table](./lit-components/lit-html-table)**: Modern spreadsheet grid view with editable cells.
- **[lit-modules](./lit-components/lit-modules)**: Harness for testing NPM modules.
- **[lit-node-editor](./lit-components/lit-node-editor)**: Visual shader and node-based logic graph.
- **[lit-sheet-music](./lit-components/lit-sheet-music)**: OSMD-powered sheet music renderer.
- **[lit-starter-ts](./lit-components/lit-starter-ts)**: Minimal TypeScript starter template.
- **[lit-vscode-extension](./lit-components/lit-vscode-extension)**: Webview-based VS Code extension bridge.
- **[lit-wmr](./lit-components/lit-wmr)**: Bundled prototype using WMR.
- **[vite-rxdb-lit](./lit-components/vite-rxdb-lit)**: Offline-first database integration with RxDB.

### Full Applications & Integrations
- **[figma-to-lit](./figma-to-lit)**: Tools for converting Figma designs to Lit components.
- **[lit-native](./lit-native)**: Native mobile app shells for Android and iOS.
- **[vite-lit-capacitor](./vite-lit-capacitor)**: Hybrid mobile/desktop apps using Capacitor.
- **[vite-lit-element-starter](./vite-lit-element-starter)**: standard Vite + Lit boilerplate.

## 🛠️ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+)
- [pnpm](https://pnpm.io/) (recommended)

### Installation
```bash
npm install
```

### Development
Start the interactive showcase:
```bash
npm run dev
```

### Testing
Run the comprehensive test suite (Vitest + Happy DOM):
```bash
npm test
```

### Building
Build all examples as a unified Multi-Page Application (MPA):
```bash
npm run build
```

## ✨ Recent Improvements
- **Performance:** Implemented dynamic imports for heavy dependencies (A-Frame, Three.js) to optimize load times and test execution.
- **Instance Reuse:** Refactored complex components (Force Graph, Draggable DOM) to reuse instances and prevent memory leaks.
- **UI/UX:** Overhauled `lit-html-table` with modern accessibility-focused styling and improved `lit-draggable-dom` coordinate mapping for perfect panning.
- **Consistency:** Unified all subprojects into a single Vite-powered monorepo structure with shared testing and build configurations.
