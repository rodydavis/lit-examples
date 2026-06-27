/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const R=typeof window<"u"&&window.customElements!=null&&window.customElements.polyfillWrapFlushCallback!==void 0,L=(s,e,t=null)=>{for(;e!==t;){const n=e.nextSibling;s.removeChild(e),e=n}};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const g=`{{lit-${String(Math.random()).slice(2)}}}`,j=`<!--${g}-->`,B=new RegExp(`${g}|${j}`),N="$lit$";class O{constructor(e,t){this.parts=[],this.element=t;const n=[],i=[],o=document.createTreeWalker(t.content,133,null,!1);let l=0,r=-1,d=0;const{strings:c,values:{length:h}}=e;for(;d<h;){const a=o.nextNode();if(a===null){o.currentNode=i.pop();continue}if(r++,a.nodeType===1){if(a.hasAttributes()){const p=a.attributes,{length:E}=p;let y=0;for(let m=0;m<E;m++)W(p[m].name,N)&&y++;for(;y-- >0;){const m=c[d],x=k.exec(m)[2],v=x.toLowerCase()+N,w=a.getAttribute(v);a.removeAttribute(v);const f=w.split(B);this.parts.push({type:"attribute",index:r,name:x,strings:f}),d+=f.length-1}}a.tagName==="TEMPLATE"&&(i.push(a),o.currentNode=a.content)}else if(a.nodeType===3){const p=a.data;if(p.indexOf(g)>=0){const E=a.parentNode,y=p.split(B),m=y.length-1;for(let x=0;x<m;x++){let v,w=y[x];if(w==="")v=_();else{const f=k.exec(w);f!==null&&W(f[2],N)&&(w=w.slice(0,f.index)+f[1]+f[2].slice(0,-N.length)+f[3]),v=document.createTextNode(w)}E.insertBefore(v,a),this.parts.push({type:"node",index:++r})}y[m]===""?(E.insertBefore(_(),a),n.push(a)):a.data=y[m],d+=m}}else if(a.nodeType===8)if(a.data===g){const p=a.parentNode;(a.previousSibling===null||r===l)&&(r++,p.insertBefore(_(),a)),l=r,this.parts.push({type:"node",index:r}),a.nextSibling===null?a.data="":(n.push(a),r--),d++}else{let p=-1;for(;(p=a.data.indexOf(g,p+1))!==-1;)this.parts.push({type:"node",index:-1}),d++}}for(const a of n)a.parentNode.removeChild(a)}}const W=(s,e)=>{const t=s.length-e.length;return t>=0&&s.slice(t)===e},q=s=>s.index!==-1,_=()=>document.createComment(""),k=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const M=133;function D(s,e){const{element:{content:t},parts:n}=s,i=document.createTreeWalker(t,M,null,!1);let o=T(n),l=n[o],r=-1,d=0;const c=[];let h=null;for(;i.nextNode();){r++;const a=i.currentNode;for(a.previousSibling===h&&(h=null),e.has(a)&&(c.push(a),h===null&&(h=a)),h!==null&&d++;l!==void 0&&l.index===r;)l.index=h!==null?-1:l.index-d,o=T(n,o),l=n[o]}c.forEach(a=>a.parentNode.removeChild(a))}const X=s=>{let e=s.nodeType===11?0:1;const t=document.createTreeWalker(s,M,null,!1);for(;t.nextNode();)e++;return e},T=(s,e=-1)=>{for(let t=e+1;t<s.length;t++){const n=s[t];if(q(n))return t}return-1};function Z(s,e,t=null){const{element:{content:n},parts:i}=s;if(t==null){n.appendChild(e);return}const o=document.createTreeWalker(n,M,null,!1);let l=T(i),r=0,d=-1;for(;o.nextNode();)for(d++,o.currentNode===t&&(r=X(e),t.parentNode.insertBefore(e,t));l!==-1&&i[l].index===d;){if(r>0){for(;l!==-1;)i[l].index+=r,l=T(i,l);return}l=T(i,l)}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const K=new WeakMap,me=s=>(...e)=>{const t=s(...e);return K.set(t,!0),t},b=s=>typeof s=="function"&&K.has(s);/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const u={},$={};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class P{constructor(e,t,n){this.__parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this.__parts)n!==void 0&&n.setValue(e[t]),t++;for(const n of this.__parts)n!==void 0&&n.commit()}_clone(){const e=R?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],n=this.template.parts,i=document.createTreeWalker(e,133,null,!1);let o=0,l=0,r,d=i.nextNode();for(;o<n.length;){if(r=n[o],!q(r)){this.__parts.push(void 0),o++;continue}for(;l<r.index;)l++,d.nodeName==="TEMPLATE"&&(t.push(d),i.currentNode=d.content),(d=i.nextNode())===null&&(i.currentNode=t.pop(),d=i.nextNode());if(r.type==="node"){const c=this.processor.handleTextExpression(this.options);c.insertAfterNode(d.previousSibling),this.__parts.push(c)}else this.__parts.push(...this.processor.handleAttributeExpressions(d,r.name,r.strings,this.options));o++}return R&&(document.adoptNode(e),customElements.upgrade(e)),e}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const H=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:s=>s}),ee=` ${g} `;class Y{constructor(e,t,n,i){this.strings=e,this.values=t,this.type=n,this.processor=i}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let i=0;i<e;i++){const o=this.strings[i],l=o.lastIndexOf("<!--");n=(l>-1||n)&&o.indexOf("-->",l+1)===-1;const r=k.exec(o);r===null?t+=o+(n?ee:j):t+=o.substr(0,r.index)+r[1]+r[2]+N+r[3]+g}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return H!==void 0&&(t=H.createHTML(t)),e.innerHTML=t,e}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const F=s=>s===null||!(typeof s=="object"||typeof s=="function"),I=s=>Array.isArray(s)||!!(s&&s[Symbol.iterator]);class z{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let i=0;i<n.length-1;i++)this.parts[i]=this._createPart()}_createPart(){return new G(this)}_getValue(){const e=this.strings,t=e.length-1,n=this.parts;if(t===1&&e[0]===""&&e[1]===""){const o=n[0].value;if(typeof o=="symbol")return String(o);if(typeof o=="string"||!I(o))return o}let i="";for(let o=0;o<t;o++){i+=e[o];const l=n[o];if(l!==void 0){const r=l.value;if(F(r)||!I(r))i+=typeof r=="string"?r:String(r);else for(const d of r)i+=typeof d=="string"?d:String(d)}}return i+=e[t],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class G{constructor(e){this.value=void 0,this.committer=e}setValue(e){e!==u&&(!F(e)||e!==this.value)&&(this.value=e,b(e)||(this.committer.dirty=!0))}commit(){for(;b(this.value);){const e=this.value;this.value=u,e(this)}this.value!==u&&this.committer.commit()}}class V{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(_()),this.endNode=e.appendChild(_())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=_()),e.__insert(this.endNode=_())}insertAfterPart(e){e.__insert(this.startNode=_()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(this.startNode.parentNode===null)return;for(;b(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=u,t(this)}const e=this.__pendingValue;e!==u&&(F(e)?e!==this.value&&this.__commitText(e):e instanceof Y?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):I(e)?this.__commitIterable(e):e===$?(this.value=$,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling;e=e??"";const n=typeof e=="string"?e:String(e);t===this.endNode.previousSibling&&t.nodeType===3?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof P&&this.value.template===t)this.value.update(e.values);else{const n=new P(t,e.processor,this.options),i=n._clone();n.update(e.values),this.__commitNode(i),this.value=n}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n=0,i;for(const o of e)i=t[n],i===void 0&&(i=new V(this.options),t.push(i),n===0?i.appendIntoPart(this):i.insertAfterPart(t[n-1])),i.setValue(o),i.commit(),n++;n<t.length&&(t.length=n,this.clear(i&&i.endNode))}clear(e=this.startNode){L(this.startNode.parentNode,e.nextSibling,this.endNode)}}class te{constructor(e,t,n){if(this.value=void 0,this.__pendingValue=void 0,n.length!==2||n[0]!==""||n[1]!=="")throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this.__pendingValue=e}commit(){for(;b(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=u,t(this)}if(this.__pendingValue===u)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=u}}class ne extends z{constructor(e,t,n){super(e,t,n),this.single=n.length===2&&n[0]===""&&n[1]===""}_createPart(){return new se(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class se extends G{}let J=!1;(()=>{try{const s={get capture(){return J=!0,!1}};window.addEventListener("test",s,s),window.removeEventListener("test",s,s)}catch{}})();class ie{constructor(e,t,n){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this.__boundHandleEvent=i=>this.handleEvent(i)}setValue(e){this.__pendingValue=e}commit(){for(;b(this.__pendingValue);){const o=this.__pendingValue;this.__pendingValue=u,o(this)}if(this.__pendingValue===u)return;const e=this.__pendingValue,t=this.value,n=e==null||t!=null&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),i=e!=null&&(t==null||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=oe(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=u}handleEvent(e){typeof this.value=="function"?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const oe=s=>s&&(J?{capture:s.capture,passive:s.passive,once:s.once}:s.capture);/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function re(s){let e=C.get(s.type);e===void 0&&(e={stringsArray:new WeakMap,keyString:new Map},C.set(s.type,e));let t=e.stringsArray.get(s.strings);if(t!==void 0)return t;const n=s.strings.join(g);return t=e.keyString.get(n),t===void 0&&(t=new O(s,s.getTemplateElement()),e.keyString.set(n,t)),e.stringsArray.set(s.strings,t),t}const C=new Map;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const S=new WeakMap,le=(s,e,t)=>{let n=S.get(e);n===void 0&&(L(e,e.firstChild),S.set(e,n=new V(Object.assign({templateFactory:re},t))),n.appendInto(e)),n.setValue(s),n.commit()};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class ae{handleAttributeExpressions(e,t,n,i){const o=t[0];return o==="."?new ne(e,t.slice(1),n).parts:o==="@"?[new ie(e,t.slice(1),i.eventContext)]:o==="?"?[new te(e,t.slice(1),n)]:new z(e,t,n).parts}handleTextExpression(e){return new V(e)}}const de=new ae;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */typeof window<"u"&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const fe=(s,...e)=>new Y(s,e,"html",de);/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Q=(s,e)=>`${s}--${e}`;let A=!0;typeof window.ShadyCSS>"u"?A=!1:typeof window.ShadyCSS.prepareTemplateDom>"u"&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),A=!1);const ce=s=>e=>{const t=Q(e.type,s);let n=C.get(t);n===void 0&&(n={stringsArray:new WeakMap,keyString:new Map},C.set(t,n));let i=n.stringsArray.get(e.strings);if(i!==void 0)return i;const o=e.strings.join(g);if(i=n.keyString.get(o),i===void 0){const l=e.getTemplateElement();A&&window.ShadyCSS.prepareTemplateDom(l,s),i=new O(e,l),n.keyString.set(o,i)}return n.stringsArray.set(e.strings,i),i},he=["html","svg"],ue=s=>{he.forEach(e=>{const t=C.get(Q(e,s));t!==void 0&&t.keyString.forEach(n=>{const{element:{content:i}}=n,o=new Set;Array.from(i.querySelectorAll("style")).forEach(l=>{o.add(l)}),D(n,o)})})},U=new Set,pe=(s,e,t)=>{U.add(s);const n=t?t.element:document.createElement("template"),i=e.querySelectorAll("style"),{length:o}=i;if(o===0){window.ShadyCSS.prepareTemplateStyles(n,s);return}const l=document.createElement("style");for(let c=0;c<o;c++){const h=i[c];h.parentNode.removeChild(h),l.textContent+=h.textContent}ue(s);const r=n.content;t?Z(t,l,r.firstChild):r.insertBefore(l,r.firstChild),window.ShadyCSS.prepareTemplateStyles(n,s);const d=r.querySelector("style");if(window.ShadyCSS.nativeShadow&&d!==null)e.insertBefore(d.cloneNode(!0),e.firstChild);else if(t){r.insertBefore(l,r.firstChild);const c=new Set;c.add(l),D(t,c)}},ge=(s,e,t)=>{if(!t||typeof t!="object"||!t.scopeName)throw new Error("The `scopeName` option is required.");const n=t.scopeName,i=S.has(e),o=A&&e.nodeType===11&&!!e.host,l=o&&!U.has(n),r=l?document.createDocumentFragment():e;if(le(s,r,Object.assign({templateFactory:ce(n)},t)),l){const d=S.get(r);S.delete(r);const c=d.value instanceof P?d.value.template:void 0;pe(n,r,c),L(e,e.firstChild),e.appendChild(r),S.set(e,d)}!i&&o&&window.ShadyCSS.styleElement(e.host)};export{G as A,se as P,me as d,fe as h,ge as r};
