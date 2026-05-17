import { GraphData, GraphNode } from "./graph";

export interface RenderContext {
  data: GraphData;
  element: HTMLElement;
  onHover: (node?: GraphNode) => void;
  instance?: any;
}

export type Renderer = (context: RenderContext) => any;
