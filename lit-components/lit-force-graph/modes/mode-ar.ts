import "aframe";
import "@ar-js-org/ar.js";
import ForceGraph from "3d-force-graph-ar";
import { RenderContext } from "../classes/context.js";

export function render(context: RenderContext) {
  const graph = context.instance || ForceGraph();
  const style = getComputedStyle(context.element);
  
  if (!context.instance) {
    graph(context.element);
  }

  graph
    .graphData(context.data)
    .width(Number(style.width.slice(0, -2)) || window.innerWidth)
    .height(Number(style.height.slice(0, -2)) || window.innerHeight)
    .cooldownTicks(100);

  return graph;
}
