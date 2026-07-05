import{a as l,b as c,i as h}from"./lit-element-BUNo9pnf.js";import{t as f}from"./custom-element-BhZVzxrc.js";import{e as d}from"./query-BApjzB0v.js";var y=Object.defineProperty,g=Object.getOwnPropertyDescriptor,p=(t,e,o,r)=>{for(var s=r>1?void 0:r?g(e,o):e,i=t.length-1,n;i>=0;i--)(n=t[i])&&(s=(r?n(e,o,s):n(s))||s);return r&&s&&y(e,o,s),s};let a=class extends l{constructor(){super(...arguments),this.dragType="none",this.offset={x:0,y:0},this.pointerMap=new Map}render(){return c`
      <main
        @pointerdown=${t=>this.handleDown(t,"canvas")}
        @pointermove=${t=>this.handleMove(t,"canvas",e=>this.moveCanvas(e))}
        @pointerup=${t=>this.handleUp(t)}
        @pointercancel=${t=>this.handleUp(t)}
      >
        <canvas></canvas>
        <div id="children">
          <slot
            class="child"
            @pointerdown=${t=>this.handleDown(t,"element")}
            @pointermove=${t=>this.handleMove(t,"element",e=>{const o=t.target,r=o.assignedSlot?o:o.closest("[slot]")||o;this.moveElement(r,e)})}
          ></slot>
        </div>
      </main>
    `}handleDown(t,e){this.dragType==="none"&&(t.preventDefault(),this.dragType=e,t.target.setPointerCapture(t.pointerId),this.pointerMap.set(t.pointerId,{id:t.pointerId,startPos:{x:t.clientX,y:t.clientY},currentPos:{x:t.clientX,y:t.clientY}}))}handleMove(t,e,o){if(this.dragType===e){t.preventDefault();const r=this.pointerMap.get(t.pointerId),s={...r.currentPos};r.currentPos={x:t.clientX,y:t.clientY};const i={x:r.currentPos.x-s.x,y:r.currentPos.y-s.y};o(i)}}handleUp(t){this.dragType="none",t.target.releasePointerCapture(t.pointerId)}moveCanvas(t){this.offset.x+=t.x,this.offset.y+=t.y,this.style.setProperty("--offset-x",`${this.offset.x}px`),this.style.setProperty("--offset-y",`${this.offset.y}px`),this.container.style.setProperty("--pan-x",`${this.offset.x}px`),this.container.style.setProperty("--pan-y",`${this.offset.y}px`)}moveElement(t,e){const o=i=>{const n=t.style.getPropertyValue(i);return n.length>0?parseFloat(n.replace("px","")):0},r=o("--dx")+e.x,s=o("--dy")+e.y;t.style.setProperty("--dx",`${r}px`),t.style.setProperty("--dy",`${s}px`)}};a.styles=h`
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
  `;p([d("main")],a.prototype,"root",2);p([d("#children")],a.prototype,"container",2);p([d("canvas")],a.prototype,"canvas",2);a=p([f("draggable-dom")],a);export{a as DraggableDOM};
