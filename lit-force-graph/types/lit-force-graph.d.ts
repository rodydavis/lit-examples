import { LitElement } from "lit";
import { Renderer } from "./classes/context";
import { GraphData, GraphNode } from "./classes/graph";
export declare const tagName = "lit-force-graph";
export declare class LitForceGraph extends LitElement {
    static styles: import("lit").CSSResult;
    graph: HTMLElement;
    src: string;
    mode: string;
    data?: GraphData;
    hovered?: GraphNode;
    renderers: Map<string, Renderer>;
    render(): import("lit").TemplateResult<1>;
    firstUpdated(): Promise<void>;
    /**
     * Set the graph data and update the renderer
     *
     * @param data Graph JSON
     */
    setData(data: GraphData): void;
    private refresh;
    private onChangeMode;
    private onDrop;
    attributeChangedCallback(name: string, _old: string | null, value: string | null): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "lit-force-graph": LitForceGraph;
    }
}
