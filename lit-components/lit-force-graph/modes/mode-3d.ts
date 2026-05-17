import ForceGraph from "3d-force-graph";
import { RenderContext } from "../classes/context.js";

export function render(context: RenderContext) {
  const graph = context.instance || ForceGraph({
    controlType: "trackball",
    rendererConfig: { antialias: true, alpha: true },
  });
  const style = getComputedStyle(context.element);
  const lineColor = style.getPropertyValue("--graph-line-color").trim() || "#555";
  const bgColor = style.getPropertyValue("--graph-background-color").trim() || "#000011";
  const nodeColor = style.getPropertyValue("--graph-node-color").trim() || "#999";
  const width = context.element.clientWidth || Number(style.width.slice(0, -2)) || window.innerWidth;
  const height = context.element.clientHeight || Number(style.height.slice(0, -2)) || window.innerHeight;
  
  if (!context.instance) {
    graph(context.element);
  }

  graph
    .graphData(context.data)
    .width(width)
    .height(height)
    .showNavInfo(false)
    .linkColor(() => lineColor)
    .backgroundColor(bgColor)
    .nodeThreeObject((node: any) => {
      const color = node.color ?? nodeColor;
      node.color = color;
      return false as any;
    })
    .nodeThreeObjectExtend(true)
    .onNodeHover((node: any, prev: any) => {
      if (node) {
        const graphNode = context.data.nodes.find((n) => n.id === node.id);
        context.onHover(graphNode);
      }
      if (prev) {
        context.onHover(undefined);
      }
    })
    .cooldownTicks(100);

  return graph;
}
