import ForceGraph from "force-graph";
import { RenderContext } from "../classes/context";

export function render(context: RenderContext) {
  const graph = context.instance || ForceGraph();
  const style = getComputedStyle(context.element);
  const lineColor = style.getPropertyValue("--graph-line-color").trim() || "#555";
  const bgColor = style.getPropertyValue("--graph-background-color").trim() || "#000011";
  const fgColor = style.getPropertyValue("--graph-foreground-color").trim() || "#ffffff";
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
    .cooldownTicks(100)
    .backgroundColor(bgColor)
    .linkColor(() => lineColor)
    .linkWidth(0.2)
    .nodeCanvasObject((node: any, ctx, globalScale) => {
      // Draw a circle
      ctx.beginPath();
      const size = 5 / globalScale;
      ctx.arc(node.x, node.y, size, 0, 2 * Math.PI);
      ctx.fillStyle = nodeColor;
      ctx.fill();
      ctx.lineWidth = 1 / globalScale;
      ctx.strokeStyle = lineColor;
      ctx.stroke();

      if (globalScale >= 4) {
        const label = node.name ?? node.id;
        const fontSize = 12 / globalScale;
        ctx.font = `${fontSize}px Sans-Serif`;
        const textWidth = ctx.measureText(label).width;
        const bckgDimensions = [textWidth, fontSize].map(
          (n) => n + fontSize * 0.2
        ); // some padding

        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = fgColor;
        // Measure text
        ctx.fillText(label, node.x + size * 2 + textWidth / 2, node.y);

        node.__bckgDimensions = bckgDimensions;
      }
    })
    .onNodeHover((node: any, prev: any) => {
      if (node) {
        const graphNode = context.data.nodes.find((n) => n.id === node.id);
        context.onHover(graphNode);
      }
      if (prev) {
        context.onHover(undefined);
      }
    });

  return graph;
}
