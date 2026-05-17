import { html, css, LitElement } from "lit";
import { customElement, query } from "lit/decorators.js";

type DragType = "none" | "canvas" | "element";
type SupportedNode = HTMLElement | SVGElement;

@customElement("draggable-dom")
export class DraggableDOM extends LitElement {
  @query("main") root!: HTMLElement;
  @query("#children") container!: HTMLElement;
  @query("canvas") canvas!: HTMLCanvasElement;
  dragType: DragType = "none";
  offset: Offset = { x: 0, y: 0 };
  pointerMap: Map<number, PointerData> = new Map();

  static styles = css`
    :host {
      display: block;
      width: 100%;
      height: 100%;
      position: relative;
      overflow: hidden;
      --offset-x: 0;
      --offset-y: 0;
      --grid-background-color: white;
      --grid-color: rgba(0, 0, 0, 0.1);
      --grid-size: 40px;
      --grid-dot-size: 2px;
    }
    main {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      overflow: hidden;
      touch-action: none;
    }
    canvas {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-size: var(--grid-size) var(--grid-size);
      background-image: radial-gradient(
        circle,
        var(--grid-color) var(--grid-dot-size),
        var(--grid-background-color) var(--grid-dot-size)
      );
      background-position: var(--offset-x) var(--offset-y);
      z-index: 0;
      pointer-events: none;
    }
    #children {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      transform: translate(var(--pan-x, 0), var(--pan-y, 0));
      pointer-events: none;
    }
    .child {
      display: block;
      pointer-events: auto;
    }
    ::slotted(*) {
      position: absolute !important;
      top: 0;
      left: 0;
      transform: translate(var(--dx, 0), var(--dy, 0));
      pointer-events: auto;
      touch-action: none;
    }
    @media (prefers-color-scheme: dark) {
      :host {
        --grid-background-color: #0d1117;
        --grid-color: rgba(255, 255, 255, 0.1);
      }
    }
  `;

  render() {
    return html`
      <main
        @pointerdown=${(e: any) => this.handleDown(e, "canvas")}
        @pointermove=${(e: any) =>
          this.handleMove(e, "canvas", (delta) => this.moveCanvas(delta))}
        @pointerup=${(e: any) => this.handleUp(e)}
        @pointercancel=${(e: any) => this.handleUp(e)}
      >
        <canvas></canvas>
        <div id="children">
          <slot
            class="child"
            @pointerdown=${(e: any) => this.handleDown(e, "element")}
            @pointermove=${(e: any) =>
              this.handleMove(e, "element", (delta) => {
                const target = e.target as HTMLElement;
                const child = target.assignedSlot ? target : target.closest('[slot]') || target;
                this.moveElement(child as SupportedNode, delta);
              })}
          ></slot>
        </div>
      </main>
    `;
  }

  handleDown(event: PointerEvent, type: DragType) {
    if (this.dragType === "none") {
      event.preventDefault();
      this.dragType = type;
      (event.target as Element).setPointerCapture(event.pointerId);
      this.pointerMap.set(event.pointerId, {
        id: event.pointerId,
        startPos: { x: event.clientX, y: event.clientY },
        currentPos: { x: event.clientX, y: event.clientY },
      });
    }
  }

  handleMove(
    event: PointerEvent,
    type: DragType,
    onMove: (delta: Offset) => void
  ) {
    if (this.dragType === type) {
      event.preventDefault();
      const saved = this.pointerMap.get(event.pointerId)!;
      const current = { ...saved.currentPos };
      saved.currentPos = { x: event.clientX, y: event.clientY };
      const delta = {
        x: saved.currentPos.x - current.x,
        y: saved.currentPos.y - current.y,
      };
      onMove(delta);
    }
  }

  handleUp(event: PointerEvent) {
    this.dragType = "none";
    (event.target as Element).releasePointerCapture(event.pointerId);
  }

  moveCanvas(delta: Offset) {
    this.offset.x += delta.x;
    this.offset.y += delta.y;
    this.style.setProperty("--offset-x", `${this.offset.x}px`);
    this.style.setProperty("--offset-y", `${this.offset.y}px`);
    this.container.style.setProperty("--pan-x", `${this.offset.x}px`);
    this.container.style.setProperty("--pan-y", `${this.offset.y}px`);
  }

  moveElement(child: SupportedNode, delta: Offset) {
    const getNumber = (key: string) => {
      const saved = (child as HTMLElement).style.getPropertyValue(key);
      if (saved.length > 0) {
        return parseFloat(saved.replace("px", ""));
      }
      return 0;
    };
    const dx = getNumber("--dx") + delta.x;
    const dy = getNumber("--dy") + delta.y;
    (child as HTMLElement).style.setProperty("--dx", `${dx}px`);
    (child as HTMLElement).style.setProperty("--dy", `${dy}px`);
  }
}

interface Offset {
  x: number;
  y: number;
}

interface PointerData {
  id: number;
  startPos: Offset;
  currentPos: Offset;
}
