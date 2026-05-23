import{b as f,i as D,a as L}from"./lit-element-BUNo9pnf.js";import{t as R}from"./custom-element-BhZVzxrc.js";import{e as F}from"./query-BApjzB0v.js";import{n as q}from"./property-MreHcJY-.js";import{r as X}from"./state-C9toMb2g.js";class v{constructor(){this.nodes=[],this.edges=[]}static fromJson(t){const{nodes:e,edges:s}=JSON.parse(t),i=new v;return e&&(i.nodes=e),s&&(i.edges=s),i}toJson(){const t={nodes:this.nodes,edges:this.edges};return JSON.stringify(t,null,2)}getNodeIndex(t){return this.nodes.findIndex(e=>e.id===t)}createNode(t){const e=this.getNodeIndex(t.id);e===-1?this.nodes.push(t):this.nodes[e]=t}retrieveNode(t){return this.nodes.find(e=>e.id===t)}retrieveEdgesForNode(t){return this.edges.filter(e=>e.startNode===t||e.endNode===t)}updateNode(t){const e=this.getNodeIndex(t.id);e!==-1&&(this.nodes[e]=t)}deleteNode(t){const e=this.getNodeIndex(t);if(e===-1)return;this.nodes.splice(e,1);const s=this.retrieveEdgesForNode(t);for(const i of s)this.deleteEdge(i.id)}getEdgeIndex(t){return this.edges.findIndex(e=>e.id===t)}createEdge(t){const e=this.getEdgeIndex(t.id);e===-1?this.edges.push(t):this.edges[e]=t}retrieveEdge(t){return this.edges.find(e=>e.id===t)}updateEdge(t){const e=this.getEdgeIndex(t.id);e!==-1&&(this.edges[e]=t)}deleteEdge(t){const e=this.getEdgeIndex(t);e!==-1&&this.edges.splice(e,1)}linkNodes(t,e,s){const i=Y();this.createEdge({id:i,startNode:t.id,endNode:e.id,name:s,type:"edge"})}}function Y(){return Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15)}const z=8;function S(o,t){const{x:e=0,y:s=0,maxWidth:i,fontFamily:n="Roboto",fontSize:r=z,fontStyle:a="normal",fontWeight:d="normal",textAlign:l="left",textBaseline:h="alphabetic",lineHeight:p=1.2,text:E,fillColor:M,strokeColor:k}=t;o.save(),o.font=`${a} ${d} ${r}px ${p}em ${n}`,o.textAlign=l,o.textBaseline=h,M&&(o.fillStyle=M,o.fillText(E,e,s,i)),k&&(o.strokeStyle=k,o.strokeText(E,e,s,i)),o.restore();const A=o.measureText(t.text);return{height:r*p,width:A.width}}function $(o,t){const{start:e,end:s,fillColor:i,strokeColor:n}=t;o.save(),o.beginPath(),o.moveTo(e.x,e.y),o.lineTo(s.x,s.y),i&&(o.fillStyle=i,o.fill()),n&&(o.strokeStyle=n,o.stroke()),o.restore()}function O(o,t,e,s=1){if(o.x===t.x)return Math.abs(e.x-o.x)<=s;if(o.y===t.y)return Math.abs(e.y-o.y)<=s;const i=(t.y-o.y)/(t.x-o.x),n=o.y-i*o.x,r=i*e.x+n;return Math.abs(r-e.y)<=s}function j(o,t){return{x:(o.x+t.x)/2,y:(o.y+t.y)/2}}const U=[1,0,0,1,0,0],K=[1,0,0,1],W=g({x:0,y:0},1,0);function g(o,t,e){const s=[...U],i=[...K];s[3]=s[0]=Math.cos(e)*t,s[2]=-(s[1]=Math.sin(e)*t),s[4]=o.x,s[5]=o.y;const n=s[0]*s[3]-s[1]*s[2];return i[0]=s[3]/n,i[1]=-s[1]/n,i[2]=-s[2]/n,i[3]=s[0]/n,{matrix:s,inverseMatrix:i}}function u(o,t){let e,s,i;i=o.inverseMatrix,e=t.x-o.matrix[4],s=t.y-o.matrix[5];const n=e*i[0]+s*i[2],r=e*i[1]+s*i[3];return{x:n,y:r}}function c(o){const t=J(o),{scale:e}=G(o),s=H(o);return{rotation:t,scale:e,offset:s}}function J(o){const t=o.matrix;return Math.atan2(t[1],t[0])}function G(o){const t=o.matrix,e=Math.sqrt(t[0]*t[0]+t[1]*t[1]),s=Math.sqrt(t[2]*t[2]+t[3]*t[3]);return{scaleX:e,scaleY:s,scale:Math.max(e,s)}}function H(o){const t=o.matrix;return{x:t[4],y:t[5]}}function C(o,t){const e=t.matrix;o.setTransform(e[0],e[1],e[2],e[3],e[4],e[5])}function B(o){const t=U;o.setTransform(t[0],t[1],t[2],t[3],t[4],t[5])}function x(o,t){const{x:e=0,y:s=0,width:i=0,height:n=0,fillColor:r,strokeColor:a}=t;o.rect(e,s,i,n),r&&(o.fillStyle=r,o.fillRect(e,s,i,n)),a&&(o.strokeStyle=a,o.strokeRect(e,s,i,n))}class V{constructor(t,e){this.host=t,this.store=new v,this.action=0,this.selection=new Array,this.pointers=new Map,this.mouse={x:0,y:0},this.minScale=.1,this.maxScale=4,this.gestureEvents=!1,this.lastScale=-1,this.lastRotation=-1,this.lastOffset={x:0,y:0},this.rotationEnabled=!0,this.zoomEnabled=!0,this.panEnabled=!0,this.context=W,this._keydownListener=s=>this.onKeyDown(s),this._preventDefault=s=>s.preventDefault(),this.host.addController(this),this.canvas=(e==null?void 0:e.canvas)??document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.ctx.imageSmoothingEnabled=!0,this.resize(e==null?void 0:e.size),this.init()}hostConnected(){}hostDisconnected(){window.removeEventListener("keydown",this._keydownListener),window.removeEventListener("DOMMouseScroll",this._preventDefault)}nodeTree(){return{children:this.store.nodes.map(t=>b(t,this.store,!this.selection.includes(t.id)))}}get size(){return{width:this.canvas.width,height:this.canvas.height}}init(){this.canvas.addEventListener("contextmenu",t=>t.preventDefault(),!1),this.canvas.addEventListener("wheel",t=>this.onWheel(t),!1),this.canvas.addEventListener("pointerdown",t=>this.onPointerDown(t),!1),this.canvas.addEventListener("pointerover",t=>this.onPointerMove(t),!1),this.canvas.addEventListener("pointermove",t=>this.onPointerMove(t),!1),this.canvas.addEventListener("pointerup",t=>this.onPointerUp(t),!1),this.canvas.addEventListener("pointerleave",t=>this.onPointerUp(t),!1),this.canvas.addEventListener("pointercancel",t=>this.onPointerUp(t),!1),this.canvas.addEventListener("mousemove",t=>this.onMouseMove(t),!1),this.canvas.addEventListener("mousedown",t=>this.onMouseDown(t),!1),this.canvas.addEventListener("mouseup",t=>this.onMouseUp(t),!1),this.canvas.addEventListener("gesturestart",t=>this.onGestureStart(t),!1),this.canvas.addEventListener("gesturechange",t=>this.onGestureChange(t),!1),this.canvas.addEventListener("gestureend",t=>this.onGestureEnd(t),!1),window.addEventListener("keydown",this._keydownListener),window.addEventListener("DOMMouseScroll",this._preventDefault,{passive:!1}),this.render(),this.host.requestUpdate()}render(){this.paint(),requestAnimationFrame(()=>this.render())}onWheel(t){if(t.preventDefault(),!this.gestureEvents){if(t.ctrlKey){this.action=1;const e=-t.deltaY*.01;this.zoom(e)}else{this.action=2;const e={x:-t.deltaX*2,y:-t.deltaY*2};this.pan(e)}this.host.requestUpdate(),this.action=0}}onGestureStart(t){t.preventDefault(),this.gestureEvents=!0,this.lastScale=t.scale,this.lastRotation=t.rotation,this.lastOffset={x:t.clientX,y:t.clientY}}onGestureChange(t){t.preventDefault(),this.gestureEvents=!0;const{scale:e,offset:s,rotation:i}=c(this.context);let n=i,r=e,a=s;const d=(this.lastRotation-t.rotation)*.01;n-=d,this.lastRotation=t.rotation;const l=(this.lastScale-t.scale)*1;r-=l,this.lastScale=t.scale;const h={x:(this.lastOffset.x-t.clientX)*.01,y:(this.lastOffset.y-t.clientY)*.01};a.x-=h.x*r,a.y-=h.y*r,this.lastOffset={x:t.clientX,y:t.clientY},this.context=g(a,r,n),this.host.requestUpdate(),C(this.ctx,this.context)}onGestureEnd(t){t.preventDefault(),this.gestureEvents=!1}onMouseUp(t){this.mouse={x:t.offsetX,y:t.offsetY}}onMouseDown(t){this.mouse={x:t.offsetX,y:t.offsetY}}onMouseMove(t){this.mouse={x:t.offsetX,y:t.offsetY}}onPointerDown(t){const e={x:t.offsetX,y:t.offsetY};this.pointers.set(t.pointerId,e),this.canvas.setPointerCapture(t.pointerId),this.start=e,this.end=e;const s=u(this.context,e);if(this.selection.length>1){this.action=3;return}const i=this.selectOffset(s,this.selection,t.shiftKey);if(i.length===0&&(this.selection=[],this.host.requestUpdate()),this.action=i.length>0?t.shiftKey?4:3:5,i.length>0){const n=i[i.length-1];this.action===3&&(this.selection=[n])}}onPointerMove(t){const e={x:t.offsetX,y:t.offsetY},s=t.pointerId,i=this.pointers.get(s);if(i){const n={x:e.x-i.x,y:e.y-i.y};if(this.end=e,this.action===3)for(const r of this.selection){const a=this.store.retrieveNode(r);a&&this.moveNode(a,n)}this.pointers.set(s,e)}}onPointerUp(t){if(this.canvas.releasePointerCapture(t.pointerId),this.pointers.delete(t.pointerId),this.start&&this.end){const e=u(this.context,this.start),s=u(this.context,this.end),i={x:Math.min(e.x,s.x),y:Math.min(e.y,s.y)},n={x:Math.max(e.x,s.x),y:Math.max(e.y,s.y)};if(this.action===4){const r=t.shiftKey,a=this.checkOffsetType(e,r),d=this.checkOffsetType(s,r);if(a==="node"&&d==="node"){const l=this.getOffset(e,r),h=this.getOffset(s,r);this.store.linkNodes(l,h,"simple")}}else if(this.action===5){t.shiftKey&&(this.selection=[]);const r={x:i.x,y:i.y,width:n.x-i.x,height:n.y-i.y},a=this.store.nodes,d=[];for(const l of a){const h={x:l.x,y:l.y,width:l.width,height:l.height};h.x<r.x+r.width&&h.x+h.width>r.x&&h.y<r.y+r.height&&h.y+h.height>r.y&&d.push(l)}for(const l of d)this.selection.push(l.id)}else this.selection=this.selectOffset(s,this.selection,t.shiftKey),this.host.requestUpdate()}this.start=void 0,this.end=void 0,this.action=0,this.host.requestUpdate()}getOffset(t,e){const s=this.selectOffset(t,this.selection,e);if(s.length>1){const i=this.store.retrieveNode(s[s.length-1]);if(i)return i}}checkOffsetType(t,e){const s=this.getOffset(t,e);return s?s.type:"none"}onKeyDown(t){(t.key==="Backspace"||t.key==="Delete")&&this.deleteSelection();const e=.1;(t.key==="+"||t.key==="=")&&this.zoom(e),t.key==="-"&&this.zoom(-e);const s=10;t.key==="ArrowUp"&&this.pan({x:0,y:-s}),t.key==="ArrowDown"&&this.pan({x:0,y:s}),t.key==="ArrowLeft"&&this.pan({x:-s,y:0}),t.key==="ArrowRight"&&this.pan({x:s,y:0}),t.key==="a"&&t.metaKey&&(this.selection=this.store.nodes.map(i=>i.id),this.host.requestUpdate())}zoom(t){const{scale:e,offset:s,rotation:i}=c(this.context);let n=e;n+=t,this.context=g(s,n,i)}pan(t){const{offset:e,scale:s,rotation:i}=c(this.context);let n=e;n.x+=t.x/s,n.y+=t.y/s,this.context=g(n,s,i)}rotate(t){const{rotation:e,offset:s,scale:i}=c(this.context);let n=e;n+=t,this.context=g(s,i,n)}import(t){this.store=v.fromJson(t)}deleteNode(t){this.store.deleteNode(t.id),this.clear(),this.host.requestUpdate()}deleteEdge(t){this.store.deleteEdge(t.id),this.clear(),this.host.requestUpdate()}resize(t){const e=(t==null?void 0:t.width)??window.innerWidth,s=(t==null?void 0:t.height)??window.innerHeight;this.canvas.setAttribute("width",`${e}`),this.canvas.setAttribute("height",`${s}`),this.canvas.width=e,this.canvas.height=s}deleteSelection(){console.log("delete selection",this.selection);for(const t of this.selection){const e=this.store.retrieveNode(t);e&&this.store.deleteNode(e.id);const s=this.store.retrieveEdge(t);s&&this.store.deleteEdge(s.id)}this.selection=[],this.host.requestUpdate()}selectOffset(t,e,s){let i=[...e];s||(i=[]);const n=this.store.nodes.filter(a=>t.x>=a.x&&t.x<=a.x+a.width&&t.y>=a.y&&t.y<=a.y+a.height);if(n.length>0){const a=n[n.length-1];i.push(a.id)}if(!s&&i.length>0)return i;const r=this.store.edges.filter(a=>{const{start:d,end:l}=this.getEdgePoints(a);return O(d,l,t)});if(r.length>0){const a=r[r.length-1];i.push(a.id)}return i}get scale(){const{scale:t}=c(this.context);return t}get rotation(){const{rotation:t}=c(this.context);return t}get offset(){const{offset:t}=c(this.context);return t}moveNode(t,e){const{scale:s}=c(this.context);t.x+=e.x/s,t.y+=e.y/s,this.store.updateNode(t)}clear(){this.selection=[],this.host.requestUpdate()}paint(){B(this.ctx),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),x(this.ctx,{x:0,y:0,width:this.canvas.width,height:this.canvas.height,fillColor:"whitesmoke"}),C(this.ctx,this.context);const t=this.mouse,e=u(this.context,t);for(const s of this.store.edges){const i=this.selection.includes(s.id),{start:n,end:r,mid:a}=this.getEdgePoints(s),d=this.ctx;$(d,{start:n,end:r,strokeColor:i?"red":"black"}),O(n,r,e)&&!i&&(d.strokeStyle="blue",d.stroke()),S(this.ctx,{text:s.name,textAlign:"center",x:a.x,y:a.y,fillColor:"black"})}for(const s of this.store.nodes){const i=this.selection.includes(s.id),n=this.ctx;S(n,{text:s.name,x:s.x,y:s.y-5,fillColor:"black"}),x(n,{x:s.x,y:s.y,width:s.width,height:s.height,strokeColor:i?"red":"black",fillColor:"white"}),e.x>=s.x&&e.x<=s.x+s.width&&e.y>=s.y&&e.y<=s.y+s.height&&!i&&(n.strokeStyle="blue",n.strokeRect(s.x,s.y,s.width,s.height))}if(this.start&&this.end){const s=u(this.context,this.start),i=u(this.context,this.end);this.action==4&&$(this.ctx,{start:s,end:i,strokeColor:"red"}),this.action==5&&x(this.ctx,{x:Math.min(s.x,i.x),y:Math.min(s.y,i.y),width:Math.abs(s.x-i.x),height:Math.abs(s.y-i.y),fillColor:"rgba(135, 206, 235, 0.2)",strokeColor:"rgba(135, 206, 235, 0.5)"})}if(this.selection.length>1){const s=this.store.nodes.filter(h=>this.selection.includes(h.id)),i=Math.min(...s.map(h=>h.y)),n=Math.min(...s.map(h=>h.x)),r=Math.max(...s.map(h=>h.y+h.height)),a=Math.max(...s.map(h=>h.x+h.width)),d={x:n,y:i},l={x:a,y:r};d&&l&&x(this.ctx,{x:d.x,y:d.y,width:l.x-d.x,height:l.y-d.y,fillColor:"transparent",strokeColor:"blue"})}}getEdgePoints(t){const e=this.store.retrieveNode(t.startNode),s=this.store.retrieveNode(t.endNode),i=d=>({x:d.x+d.width/2,y:d.y+d.height/2,width:d.width,height:d.height}),n=i(e),r=i(s),a=j(n,r);return{start:n,end:r,mid:a}}}function b(o,t,e=!1,s=new Map){if(s.has(o.id))return null;s.set(o.id,!0);const i=[],n=t.retrieveEdgesForNode(o.id);for(const r of n){const a=[],d=t.retrieveNode(r.endNode),l=b(d,t,e,s);l&&a.push(l);const h=t.retrieveNode(r.startNode),p=b(h,t,e,s);p&&a.push(p),i.push({id:r.id,name:r.name,children:a,collapsed:!1})}return{id:o.id,name:o.name,children:i,collapsed:e}}var Q=Object.defineProperty,Z=Object.getOwnPropertyDescriptor,N=(o,t,e,s)=>{for(var i=s>1?void 0:s?Z(t,e):t,n=o.length-1,r;n>=0;n--)(r=o[n])&&(i=(s?r(t,e,i):r(i))||i);return s&&i&&Q(t,e,i),i};const P=D`
  ul.tree {
    width: 100%;
    height: 100%;
    overflow-x: scroll;
    white-space: nowrap;
  }
  ul.tree,
  ul.tree ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  ul.tree ul {
    margin-left: 10px;
  }
  ul.tree li {
    margin: 0;
    padding: 0 7px;
    line-height: 20px;
    color: #369;
    font-weight: bold;
    border-left: 1px solid rgb(100, 100, 100);
  }
  ul.tree li:last-child {
    border-left: none;
  }
  ul.tree li:before {
    position: relative;
    top: -0.3em;
    height: 1em;
    width: 12px;
    color: white;
    border-bottom: 1px solid rgb(100, 100, 100);
    content: "";
    display: inline-block;
    left: -7px;
  }
  ul.tree li:last-child:before {
    border-left: 1px solid rgb(100, 100, 100);
  }
`;let y=class extends L{constructor(){super(...arguments),this.tree={children:[]},this.selectedNode=null}static get styles(){return[P]}render(){return T({tree:this.tree,onSelect:o=>{this.selectedNode=o},onUpdate:()=>{this.requestUpdate()}})}};N([q({type:Object})],y.prototype,"tree",2);N([X()],y.prototype,"selectedNode",2);y=N([R("tree-view")],y);function T(o){return f`
    <ul class="tree">
      ${o.tree.children.map(t=>I(t,o))}
    </ul>
  `}function I(o,t){return f`
    <li
      @click=${()=>{t.onSelect(o)}}
      @dblclick=${()=>{o.collapsed=!o.collapsed,t.onUpdate()}}
    >
      ${o.name}
      ${o.collapsed||o.children.length===0?f``:f`
            <ul class="nested">
              ${o.children.map(e=>I(e,t))}
            </ul>
          `}
    </li>
  `}var tt=Object.defineProperty,et=Object.getOwnPropertyDescriptor,_=(o,t,e,s)=>{for(var i=s>1?void 0:s?et(t,e):t,n=o.length-1,r;n>=0;n--)(r=o[n])&&(i=(s?r(t,e,i):r(i))||i);return s&&i&&tt(t,e,i),i};const w=200;let m=class extends L{constructor(){super(...arguments),this.editor=new V(this,{size:{width:window.innerWidth-w*2,height:window.innerHeight}}),this._resizeObserver=new ResizeObserver(o=>{for(const t of o){const{width:e,height:s}=t.contentRect;this.editor.resize({width:e,height:s})}})}render(){return f`<main>
      <div class="sidebar">
        ${T({tree:this.editor.nodeTree(),onUpdate:()=>this.requestUpdate(),onSelect:o=>{this.editor.selection.push(o.id)}})}
      </div>
      <div id="output">${this.editor.canvas}</div>
      <div id="properties">${this.renderProperties()}</div>
    </main>`}renderProperties(){const o=this.editor.selection[this.editor.selection.length-1],t=this.editor.store.retrieveNode(o)??this.editor.store.retrieveEdge(o);return(t==null?void 0:t.type)==="node"?f`
        <span class="title">Node</span>
        <div class="property">
          <label>Name</label>
          <input
            type="text"
            .value=${t.name}
            @change=${e=>{t.name=e.target.value,this.editor.store.updateNode(t)}}
          />
        </div>
        <div class="property">
          <label>Background Color</label>
          <input
            type="color"
            .value=${t.backgroundColor??"#FFFFFF"}
            @change=${e=>{t.backgroundColor=e.target.value,this.editor.store.updateNode(t)}}
          />
        </div>
        <div class="property">
          <label>Width</label>
          <input
            type="number"
            .value=${t.width.toString()}
            @change=${e=>{t.width=Number(e.target.value),this.editor.store.updateNode(t)}}
          />
        </div>
        <div class="property">
          <label>Height</label>
          <input
            type="number"
            .value=${t.height.toString()}
            @change=${e=>{t.height=Number(e.target.value),this.editor.store.updateNode(t)}}
          />
        </div>
        <div class="property">
          <button
            class="destructive"
            @click=${()=>{confirm("Are you sure?")&&this.editor.deleteNode(t)}}
          >
            Delete node
          </button>
        </div>
      `:(t==null?void 0:t.type)==="edge"?f` <span class="title">Edge</span>
        <div class="property">
          <label>Name</label>
          <input
            type="text"
            .value=${t.name}
            @change=${e=>{t.name=e.target.value,this.editor.store.updateEdge(t)}}
          />
        </div>
        <div class="property">
          <button
            class="destructive"
            @click=${()=>{confirm("Are you sure?")&&this.editor.deleteEdge(t)}}
          >
            Delete node
          </button>
        </div>`:f` <span class="title">Editor</span>
      <div>
        <div class="property">
          <label>Import JSON</label>
          <input
            type="file"
            accept=".json"
            @change=${e=>{const s=e.target.files;if(s.length){this.editor.clear();const i=new FileReader;i.onload=n=>{const r=n.target.result;this.editor.import(r)},i.readAsText(s[0])}}}
          />
        </div>
        <div class="property">
          <label>Scale</label>
          <input
            type="number"
            .value=${this.editor.scale.toString()}
            step=".1"
            @change=${e=>{this.editor.zoom(Number(e.target.value))}}
          />
        </div>
        <div class="property">
          <label>Rotation</label>
          <input
            type="number"
            .value=${this.editor.rotation.toString()}
            step=".1"
            @change=${e=>{this.editor.rotate(Number(e.target.value))}}
          />
        </div>
        <div class="property">
          <label>Offset x</label>
          <input
            type="number"
            .value=${this.editor.offset.x.toString()}
            step=".1"
            @change=${e=>{this.editor.pan({x:Number(e.target.value),y:this.editor.offset.y})}}
          />
        </div>
        <div class="property">
          <label>Offset x</label>
          <input
            type="number"
            .value=${this.editor.offset.y.toString()}
            step=".1"
            @change=${e=>{this.editor.pan({x:this.editor.offset.x,y:Number(e.target.value)})}}
          />
        </div>
        <div class="property">
          <button
            @click=${()=>{const e=this.addRandomNode();this.editor.selection.push(e.id),this.requestUpdate()}}
          >
            Add new node
          </button>
        </div>
        <div class="property">
          <button
            @click=${()=>{const e=window.document.createElement("a"),s=this.editor.store.toJson();e.href=window.URL.createObjectURL(new Blob([s],{type:"application/json"})),e.download="editor.json",document.body.appendChild(e),e.click()}}
          >
            Export JSON
          </button>
        </div>
      </div>`}firstUpdated(){this._resizeObserver.observe(this.outputContainer);const o=10;for(let t=0;t<o;t++)this.addRandomNode(t);for(let t=0;t<o/2;t++){const e=this.editor.store.nodes[t],s=this.editor.store.nodes[t+o/2];this.editor.store.linkNodes(e,s,"simple")}}disconnectedCallback(){super.disconnectedCallback(),this._resizeObserver.disconnect()}addRandomNode(o=this.editor.store.nodes.length){const t={id:`node${o}`,name:"Node "+o,x:Math.random()*this.editor.canvas.width,y:Math.random()*this.editor.canvas.height,width:100,height:100,type:"node"};return this.editor.store.createNode(t),t}};m.styles=[P,D`
      :host {
        display: block;
        width: 100%;
        height: 100%;
      }
      main {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: row;
      }
      #output {
        flex: 1;
        overflow: hidden;
      }
      .sidebar {
        width: ${w}px;
        overflow-y: auto;
        background-color: #f5f5f5;
        border-right: 1px solid #ddd;
      }
      #properties {
        width: ${w}px;
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        background-color: #eee;
        border-left: 1px solid #ddd;
      }
      .property {
        display: flex;
        flex-direction: column;
        padding: 10px;
      }
      .title {
        font-size: 1.5em;
        font-weight: bold;
        padding: 10px;
      }
      .destructive {
        background-color: red;
        color: white;
      }
      #links > span {
        padding-left: 10px;
        font-size: 0.9em;
        font-weight: bold;
      }
    `];_([F("#output")],m.prototype,"outputContainer",2);m=_([R("node-editor")],m);export{m as NodeEditor};
