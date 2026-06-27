const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/mode-2d-Cj2m1IPs.js","assets/Paired-C4wB-ooD.js","assets/float-tooltip-COGhpFke.js","assets/mode-3d-8wJSRO0B.js","assets/data-bind-mapper-D9QKwI5o.js","assets/_commonjsHelpers-Cpj98o6Y.js","assets/polished.esm-BeKV07fA.js","assets/mode-ar-e_XGWu4S.js","assets/aframe-forcegraph-component-B3vzsuem.js","assets/three.module-Unazwo7z.js","assets/mode-vr-C6IEbqHj.js"])))=>i.map(i=>d[i]);
import{_ as d}from"./main-Dy7OaPgN.js";import{a as f,b as h,i as m}from"./lit-element-BUNo9pnf.js";import{t as v}from"./custom-element-BhZVzxrc.js";import{n as c}from"./property-MreHcJY-.js";import{r as l}from"./state-C9toMb2g.js";import{e as g}from"./query-BApjzB0v.js";import"./modulepreload-polyfill-B5Qt9EMX.js";var u=Object.defineProperty,_=Object.getOwnPropertyDescriptor,n=(e,r,t,i)=>{for(var o=i>1?void 0:i?_(r,t):r,s=e.length-1,p;s>=0;s--)(p=e[s])&&(o=(i?p(r,t,o):p(o))||o);return i&&o&&u(r,t,o),o};const y="lit-force-graph";let a=class extends f{constructor(){super(...arguments),this.src="",this.mode="2D",this.renderers=new Map([["2D",()=>d(()=>import("./mode-2d-Cj2m1IPs.js"),__vite__mapDeps([0,1,2])).then(e=>e.render)],["3D",()=>d(()=>import("./mode-3d-8wJSRO0B.js"),__vite__mapDeps([3,4,5,1,6,2])).then(e=>e.render)],["AR",()=>d(()=>import("./mode-ar-e_XGWu4S.js"),__vite__mapDeps([7,8,9,4,5,1])).then(e=>e.render)],["VR",()=>d(()=>import("./mode-vr-C6IEbqHj.js"),__vite__mapDeps([10,8,9,4,5,1,6])).then(e=>e.render)]])}render(){var e,r,t,i;return h` <main
      @drop="${this.onDrop}"
      @dragover="${o=>o.preventDefault()}"
    >
      <div id="graph"></div>
      <div id="controls">
        <div>
          <label for="render-mode">Render mode</label>
          <select id="render-mode" .value=${this.mode} @change=${this.onChangeMode}>
            ${Array.from(this.renderers.keys()).map(o=>h` <option value="${o}" ?selected=${this.mode===o}>${o}</option> `)}
          </select>
        </div>
      </div>
      <div id="info">
        <h2 id="graph-name">${(e=this.data)==null?void 0:e.name}</h2>
        <div id="graph-description">${(r=this.data)==null?void 0:r.description}</div>
      </div>
      <div id="tooltips">
        ${this.hovered?h` <div class="node-tooltip">
              ${((t=this.hovered)==null?void 0:t.name)??((i=this.hovered)==null?void 0:i.id)}
            </div>`:h``}
      </div>
    </main>`}async firstUpdated(){await this.refresh(),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{this._updateGraph()})}updated(e){e.has("mode")&&this._instance&&(this.graph.innerHTML="",this._instance=void 0),(e.has("data")||e.has("mode"))&&this._updateGraph(),e.has("src")&&this.src&&this.refresh()}setData(e){this.data=e}async _updateGraph(){if(!this.data||!this.graph)return;const e=this.renderers.get(this.mode);if(e)try{const r=await e();this._instance=r({element:this.graph,data:this.data,onHover:t=>this.hovered=t,instance:this._instance})}catch(r){console.error("Failed to load or run renderer for mode",this.mode,r)}}async refresh(){const r=Array.from(this.children).find(t=>t.tagName==="SCRIPT");if(r){if(r.textContent)try{const t=JSON.parse(r.textContent);t&&this.setData(t)}catch(t){console.error("Failed to parse graph data from script tag",t)}else if(r.hasAttribute("src")){const t=r.getAttribute("src");try{const i=await fetch(t).then(o=>o.json());i&&this.setData(i)}catch(i){console.error("Failed to fetch graph data from script src",t,i)}}}else if(this.src)try{const t=await fetch(this.src).then(i=>i.json());t&&this.setData(t)}catch(t){console.error("Failed to fetch graph data from src property",this.src,t)}}onChangeMode(e){this.mode=e.target.value}onDrop(e){var t;e.preventDefault();const r=(t=e.dataTransfer)==null?void 0:t.files;if(r&&r.length>0){const i=r[0],o=new FileReader;o.onload=()=>{try{const s=JSON.parse(o.result);this.setData(s)}catch(s){console.error("Failed to parse dropped graph data",s)}},o.readAsText(i)}return!1}};a.styles=m`
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
  `;n([g("#graph")],a.prototype,"graph",2);n([c()],a.prototype,"src",2);n([c()],a.prototype,"mode",2);n([c({type:Object})],a.prototype,"data",2);n([l()],a.prototype,"hovered",2);n([l()],a.prototype,"_instance",2);a=n([v(y)],a);export{a as LitForceGraph,y as tagName};
