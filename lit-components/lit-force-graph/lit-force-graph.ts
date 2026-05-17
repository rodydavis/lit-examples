import { html, css, LitElement, PropertyValues } from "lit";
import { customElement, property, query, state } from "lit/decorators.js";
import { Renderer } from "./classes/context";
import { GraphData, GraphNode } from "./classes/graph";

export const tagName = "lit-force-graph";

@customElement(tagName)
export class LitForceGraph extends LitElement {
  static styles = css`
    :host {
      display: block;
      background-color: var(--graph-background-color, #000011);
      color: var(--graph-foreground-color, #ffffff);
      width: var(--graph-width, 100%);
      height: var(--graph-height, 100vh);
      position: relative;
    }

    #graph {
      width: 100%;
      height: 100%;
    }

    #controls {
      position: absolute;
      top: 20px;
      right: 20px;
      z-index: 100;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
    #controls div {
      padding: 5px;
    }

    #info {
      position: absolute;
      top: 10px;
      left: 10px;
      z-index: 100;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      pointer-events: none;
    }

    #tooltips {
      position: absolute;
      bottom: 10px;
      left: 10px;
      right: 10px;
      display: flex;
      flex-direction: row;
      align-items: center;
      text-align: center;
      justify-content: center;
      pointer-events: none;
    }

    .node-tooltip {
      background-color: var(--graph-foreground-color, #ffffff);
      color: var(--graph-background-color, #000011);
      border-radius: 5px;
      font-size: 12px;
      padding: 5px;
      opacity: 0.8;
    }

    #graph-description {
      opacity: 0.67;
    }
  `;

  @query("#graph") graph!: HTMLElement;
  @property() src = "";
  @property() mode = "2D";
  @property({ type: Object }) data?: GraphData;
  @state() hovered?: GraphNode;
  @state() private _instance?: any;

  renderers = new Map<string, () => Promise<Renderer>>([
    ["2D", () => import("./modes/mode-2d").then((m) => m.render)],
    ["3D", () => import("./modes/mode-3d").then((m) => m.render)],
    ["AR", () => import("./modes/mode-ar").then((m) => m.render)],
    ["VR", () => import("./modes/mode-vr").then((m) => m.render)],
  ]);

  render() {
    return html` <main
      @drop="${this.onDrop}"
      @dragover="${(e: Event) => e.preventDefault()}"
    >
      <div id="graph"></div>
      <div id="controls">
        <div>
          <label for="render-mode">Render mode</label>
          <select id="render-mode" .value=${this.mode} @change=${this.onChangeMode}>
            ${Array.from(this.renderers.keys()).map((mode) => {
              return html` <option value="${mode}" ?selected=${this.mode === mode}>${mode}</option> `;
            })}
          </select>
        </div>
      </div>
      <div id="info">
        <h2 id="graph-name">${this.data?.name}</h2>
        <div id="graph-description">${this.data?.description}</div>
      </div>
      <div id="tooltips">
        ${this.hovered
          ? html` <div class="node-tooltip">
              ${this.hovered?.name ?? this.hovered?.id}
            </div>`
          : html``}
      </div>
    </main>`;
  }

  async firstUpdated() {
    await this.refresh();
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    prefersDark.addEventListener("change", () => {
      this._updateGraph();
    });
  }

  protected updated(changedProperties: PropertyValues<this>) {
    if (changedProperties.has("mode")) {
      if (this._instance) {
        this.graph.innerHTML = "";
        this._instance = undefined;
      }
    }
    if (changedProperties.has("data") || changedProperties.has("mode")) {
      this._updateGraph();
    }
    if (changedProperties.has("src") && this.src) {
      this.refresh();
    }
  }

  /**
   * Set the graph data and update the renderer
   *
   * @param data Graph JSON
   */
  setData(data: GraphData) {
    this.data = data;
  }

  private async _updateGraph() {
    if (!this.data || !this.graph) return;
    const rendererFactory = this.renderers.get(this.mode);
    if (rendererFactory) {
      try {
        const renderer = await rendererFactory();
        this._instance = renderer({
          element: this.graph,
          data: this.data,
          onHover: (node) => (this.hovered = node),
          instance: this._instance,
        });
      } catch (e) {
        console.error("Failed to load or run renderer for mode", this.mode, e);
      }
    }
  }

  private async refresh() {
    // Get json from script tag
    const children = Array.from(this.children);
    const elem = children.find((child) => child.tagName === "SCRIPT");
    if (elem) {
      if (elem.textContent) {
        try {
          const data = JSON.parse(elem.textContent);
          if (data) this.setData(data);
        } catch (e) {
          console.error("Failed to parse graph data from script tag", e);
        }
      } else if (elem.hasAttribute("src")) {
        const url = elem.getAttribute("src")!;
        try {
          const data = await fetch(url).then((res) => res.json());
          if (data) this.setData(data);
        } catch (e) {
          console.error("Failed to fetch graph data from script src", url, e);
        }
      }
    } else if (this.src) {
      try {
        const data = await fetch(this.src).then((res) => res.json());
        if (data) this.setData(data);
      } catch (e) {
        console.error("Failed to fetch graph data from src property", this.src, e);
      }
    }
  }

  private onChangeMode(e: Event) {
    this.mode = (e.target as HTMLSelectElement).value;
  }

  private onDrop(e: DragEvent) {
    e.preventDefault();
    const files = e.dataTransfer?.files;
    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const json = JSON.parse(reader.result as string);
          this.setData(json);
        } catch (e) {
          console.error("Failed to parse dropped graph data", e);
        }
      };
      reader.readAsText(file);
    }
    return false;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "lit-force-graph": LitForceGraph;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "lit-force-graph": LitForceGraph;
  }
}
