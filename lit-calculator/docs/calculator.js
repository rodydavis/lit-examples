var at=Object.defineProperty;var St=Object.getOwnPropertyDescriptor;var Ct=(o,t,e)=>t in o?at(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var c=(o,t,e,s)=>{for(var i=s>1?void 0:s?St(t,e):t,r=o.length-1,n;r>=0;r--)(n=o[r])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&at(t,e,i),i};var v=(o,t,e)=>(Ct(o,typeof t!="symbol"?t+"":t,e),e);var I=globalThis,V=I.ShadowRoot&&(I.ShadyCSS===void 0||I.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,G=Symbol(),lt=new WeakMap,R=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==G)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(V&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=lt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&lt.set(e,t))}return t}toString(){return this.cssText}},ht=o=>new R(typeof o=="string"?o:o+"",void 0,G),g=(o,...t)=>{let e=o.length===1?o[0]:t.reduce((s,i,r)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[r+1],o[0]);return new R(e,o,G)},ct=(o,t)=>{if(V)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),i=I.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,o.appendChild(s)}},Q=V?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return ht(e)})(o):o;var{is:wt,defineProperty:kt,getOwnPropertyDescriptor:Pt,getOwnPropertyNames:Ut,getOwnPropertySymbols:Ot,getPrototypeOf:Tt}=Object,W=globalThis,dt=W.trustedTypes,Mt=dt?dt.emptyScript:"",Rt=W.reactiveElementPolyfillSupport,H=(o,t)=>o,N={toAttribute(o,t){switch(t){case Boolean:o=o?Mt:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},F=(o,t)=>!wt(o,t),pt={attribute:!0,type:String,converter:N,reflect:!1,useDefault:!1,hasChanged:F};Symbol.metadata??=Symbol("metadata"),W.litPropertyMetadata??=new WeakMap;var _=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=pt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&kt(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){let{get:i,set:r}=Pt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:i,set(n){let l=i?.call(this);r?.call(this,n),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??pt}static _$Ei(){if(this.hasOwnProperty(H("elementProperties")))return;let t=Tt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(H("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(H("properties"))){let e=this.properties,s=[...Ut(e),...Ot(e)];for(let i of s)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let i of s)e.unshift(Q(i))}else t!==void 0&&e.push(Q(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ct(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){let s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){let r=(s.converter?.toAttribute!==void 0?s.converter:N).toAttribute(e,s.type);this._$Em=t,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){let s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let r=s.getPropertyOptions(i),n=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:N;this._$Em=i;let l=n.fromAttribute(e,r.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(t,e,s,i=!1,r){if(t!==void 0){let n=this.constructor;if(i===!1&&(r=this[t]),s??=n.getPropertyOptions(t),!((s.hasChanged??F)(r,e)||s.useDefault&&s.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:r},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),r!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,r]of this._$Ep)this[i]=r;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[i,r]of s){let{wrapped:n}=r,l=this[i];n!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,r,l)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};_.elementStyles=[],_.shadowRootOptions={mode:"open"},_[H("elementProperties")]=new Map,_[H("finalized")]=new Map,Rt?.({ReactiveElement:_}),(W.reactiveElementVersions??=[]).push("2.1.2");var it=globalThis,ut=o=>o,J=it.trustedTypes,mt=J?J.createPolicy("lit-html",{createHTML:o=>o}):void 0,bt="$lit$",A=`lit$${Math.random().toFixed(9).slice(2)}$`,vt="?"+A,Ht=`<${vt}>`,U=document,q=()=>U.createComment(""),j=o=>o===null||typeof o!="object"&&typeof o!="function",ot=Array.isArray,Nt=o=>ot(o)||typeof o?.[Symbol.iterator]=="function",X=`[ 	
\f\r]`,L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$t=/-->/g,ft=/>/g,k=RegExp(`>|${X}(?:([^\\s"'>=/]+)(${X}*=${X}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),gt=/'/g,_t=/"/g,At=/^(?:script|style|textarea|title)$/i,rt=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),x=rt(1),Jt=rt(2),Zt=rt(3),O=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),yt=new WeakMap,P=U.createTreeWalker(U,129);function xt(o,t){if(!ot(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return mt!==void 0?mt.createHTML(t):t}var Lt=(o,t)=>{let e=o.length-1,s=[],i,r=t===2?"<svg>":t===3?"<math>":"",n=L;for(let l=0;l<e;l++){let a=o[l],d,m,h=-1,f=0;for(;f<a.length&&(n.lastIndex=f,m=n.exec(a),m!==null);)f=n.lastIndex,n===L?m[1]==="!--"?n=$t:m[1]!==void 0?n=ft:m[2]!==void 0?(At.test(m[2])&&(i=RegExp("</"+m[2],"g")),n=k):m[3]!==void 0&&(n=k):n===k?m[0]===">"?(n=i??L,h=-1):m[1]===void 0?h=-2:(h=n.lastIndex-m[2].length,d=m[1],n=m[3]===void 0?k:m[3]==='"'?_t:gt):n===_t||n===gt?n=k:n===$t||n===ft?n=L:(n=k,i=void 0);let b=n===k&&o[l+1].startsWith("/>")?" ":"";r+=n===L?a+Ht:h>=0?(s.push(d),a.slice(0,h)+bt+a.slice(h)+A+b):a+A+(h===-2?l:b)}return[xt(o,r+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]},z=class o{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,n=0,l=t.length-1,a=this.parts,[d,m]=Lt(t,e);if(this.el=o.createElement(d,s),P.currentNode=this.el.content,e===2||e===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=P.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(let h of i.getAttributeNames())if(h.endsWith(bt)){let f=m[n++],b=i.getAttribute(h).split(A),D=/([.?@])?(.*)/.exec(f);a.push({type:1,index:r,name:D[2],strings:b,ctor:D[1]==="."?K:D[1]==="?"?tt:D[1]==="@"?et:M}),i.removeAttribute(h)}else h.startsWith(A)&&(a.push({type:6,index:r}),i.removeAttribute(h));if(At.test(i.tagName)){let h=i.textContent.split(A),f=h.length-1;if(f>0){i.textContent=J?J.emptyScript:"";for(let b=0;b<f;b++)i.append(h[b],q()),P.nextNode(),a.push({type:2,index:++r});i.append(h[f],q())}}}else if(i.nodeType===8)if(i.data===vt)a.push({type:2,index:r});else{let h=-1;for(;(h=i.data.indexOf(A,h+1))!==-1;)a.push({type:7,index:r}),h+=A.length-1}r++}}static createElement(t,e){let s=U.createElement("template");return s.innerHTML=t,s}};function T(o,t,e=o,s){if(t===O)return t;let i=s!==void 0?e._$Co?.[s]:e._$Cl,r=j(t)?void 0:t._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),r===void 0?i=void 0:(i=new r(o),i._$AT(o,e,s)),s!==void 0?(e._$Co??=[])[s]=i:e._$Cl=i),i!==void 0&&(t=T(o,i._$AS(o,t.values),i,s)),t}var Y=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??U).importNode(e,!0);P.currentNode=i;let r=P.nextNode(),n=0,l=0,a=s[0];for(;a!==void 0;){if(n===a.index){let d;a.type===2?d=new B(r,r.nextSibling,this,t):a.type===1?d=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(d=new st(r,this,t)),this._$AV.push(d),a=s[++l]}n!==a?.index&&(r=P.nextNode(),n++)}return P.currentNode=U,i}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},B=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=T(this,t,e),j(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==O&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Nt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&j(this._$AH)?this._$AA.nextSibling.data=t:this.T(U.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=z.createElement(xt(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{let r=new Y(i,this),n=r.u(this.options);r.p(e),this.T(n),this._$AH=r}}_$AC(t){let e=yt.get(t.strings);return e===void 0&&yt.set(t.strings,e=new z(t)),e}k(t){ot(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,i=0;for(let r of t)i===e.length?e.push(s=new o(this.O(q()),this.O(q()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let s=ut(t).nextSibling;ut(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},M=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=p}_$AI(t,e=this,s,i){let r=this.strings,n=!1;if(r===void 0)t=T(this,t,e,0),n=!j(t)||t!==this._$AH&&t!==O,n&&(this._$AH=t);else{let l=t,a,d;for(t=r[0],a=0;a<r.length-1;a++)d=T(this,l[s+a],e,a),d===O&&(d=this._$AH[a]),n||=!j(d)||d!==this._$AH[a],d===p?t=p:t!==p&&(t+=(d??"")+r[a+1]),this._$AH[a]=d}n&&!i&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},K=class extends M{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}},tt=class extends M{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}},et=class extends M{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=T(this,t,e,0)??p)===O)return;let s=this._$AH,i=t===p&&s!==p||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==p&&(s===p||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},st=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){T(this,t)}};var qt=it.litHtmlPolyfillSupport;qt?.(z,B),(it.litHtmlVersions??=[]).push("3.3.3");var Et=(o,t,e)=>{let s=e?.renderBefore??t,i=s._$litPart$;if(i===void 0){let r=e?.renderBefore??null;s._$litPart$=i=new B(t.insertBefore(q(),r),r,void 0,e??{})}return i._$AI(o),i};var nt=globalThis,$=class extends _{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Et(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return O}};$._$litElement$=!0,$.finalized=!0,nt.litElementHydrateSupport?.({LitElement:$});var jt=nt.litElementPolyfillSupport;jt?.({LitElement:$});(nt.litElementVersions??=[]).push("4.2.2");var E=o=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(o,t)}):customElements.define(o,t)};var zt={attribute:!0,type:String,converter:N,reflect:!1,hasChanged:F},Bt=(o=zt,t,e)=>{let{kind:s,metadata:i}=e,r=globalThis.litPropertyMetadata.get(i);if(r===void 0&&globalThis.litPropertyMetadata.set(i,r=new Map),s==="setter"&&((o=Object.create(o)).wrapped=!0),r.set(e.name,o),s==="accessor"){let{name:n}=e;return{set(l){let a=t.get.call(this);t.set.call(this,l),this.requestUpdate(n,a,o,!0,l)},init(l){return l!==void 0&&this.C(n,void 0,o,l),l}}}if(s==="setter"){let{name:n}=e;return function(l){let a=this[n];t.call(this,l),this.requestUpdate(n,a,o,!0,l)}}throw Error("Unsupported decorator location: "+s)};function u(o){return(t,e)=>typeof e=="object"?Bt(o,t,e):((s,i,r)=>{let n=i.hasOwnProperty(r);return i.constructor.createProperty(r,s),n?Object.getOwnPropertyDescriptor(i,r):void 0})(o,t,e)}var S=class extends ${number="0";color="black";textColor="white";_onTap(t){t.preventDefault();let e=new CustomEvent("select-number",{detail:{value:this.number},bubbles:!0,cancelable:!0});window.dispatchEvent(e)}render(){return x` <button
      @click="${this._onTap}"
      id="base"
      style="background-color: ${this.color}; color: ${this.textColor};"
    >
      ${this.number}
    </button>`}};v(S,"styles",g`
    #base {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      text-align: center;
      float: left;
    }

    #base:hover {
      box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
    }

    #base:active {
      background-color: lightgrey;
    }

    button {
      outline: 0 none;
      color: white;
      margin-top: 10px;
      margin-bottom: 10px;
      font-size: 20px;
    }
  `),c([u()],S.prototype,"number",2),c([u()],S.prototype,"color",2),c([u()],S.prototype,"textColor",2),S=c([E("keypad-input")],S);var y=class extends ${accentColor="blue";textColor="white";actionColor="black";actionTextColor="white";render(){return x` <div id="base">
      <keypad-input
        number="7"
        color="${this.accentColor}"
        textColor="${this.textColor}"
      ></keypad-input>
      <keypad-input
        number="8"
        color="${this.accentColor}"
        textColor="${this.textColor}"
      ></keypad-input>
      <keypad-input
        number="9"
        color="${this.accentColor}"
        textColor="${this.textColor}"
      ></keypad-input>
      <keypad-input
        number="4"
        color="${this.accentColor}"
        textColor="${this.textColor}"
      ></keypad-input>
      <keypad-input
        number="5"
        color="${this.accentColor}"
        textColor="${this.textColor}"
      ></keypad-input>
      <keypad-input
        number="6"
        color="${this.accentColor}"
        textColor="${this.textColor}"
      ></keypad-input>
      <keypad-input
        number="1"
        color="${this.accentColor}"
        textColor="${this.textColor}"
      ></keypad-input>
      <keypad-input
        number="2"
        color="${this.accentColor}"
        textColor="${this.textColor}"
      ></keypad-input>
      <keypad-input
        number="3"
        color="${this.accentColor}"
        textColor="${this.textColor}"
      ></keypad-input>
      <keypad-input
        number="0"
        color="${this.accentColor}"
        textColor="${this.textColor}"
      ></keypad-input>
      <keypad-input
        number="."
        color="${this.accentColor}"
        textColor="${this.textColor}"
      ></keypad-input>
      <keypad-input
        number="="
        color="${this.actionColor}"
        textColor="${this.actionTextColor}"
      ></keypad-input>
    </div>`}};v(y,"styles",g`
    #base {
      display: grid;
      grid-template-columns: 33% 33% 33%;
      padding-left: calc(var(--base-padding) / 2);
      padding-right: calc(var(--base-padding) / 2);
    }

    keypad-input {
      display: inline-grid;
      margin: 5px;
    }
  `),c([u()],y.prototype,"accentColor",2),c([u()],y.prototype,"textColor",2),c([u()],y.prototype,"actionColor",2),c([u()],y.prototype,"actionTextColor",2),y=c([E("key-pad")],y);var C=class extends ${color="black";textColor="white";value="";render(){return x`<div id="base" style="background-color: ${this.color};">
      <div id="text-display" style="color: ${this.textColor};">
        ${this.value||"0"}
      </div>
    </div>`}};v(C,"styles",g`
    #base {
      background-color: black;
      text-align: end;
      display: inline-block;
      margin: var(--base-padding);
      width: calc(100% - calc(var(--base-padding) * 2));
      border-bottom: 2px solid black;
    }

    #text-display {
      color: white;
      margin: 0px;
      padding-top: 40px;
      padding-right: 10px;
      padding-bottom: 10px;
      font-size: 36px;
    }
  `),c([u()],C.prototype,"color",2),c([u()],C.prototype,"textColor",2),c([u()],C.prototype,"value",2),C=c([E("display-output")],C);var w=class extends ${width="500px";primaryColor="red";accentColor="black";connectedCallback(){super.connectedCallback(),window.addEventListener("select-number",this._handleNumber)}disconnectedCallback(){window.removeEventListener("select-number",this._handleNumber),super.disconnectedCallback()}_staging="";_value="";_mode="";get mode(){return this._mode}set mode(t){let e=this._mode,s=this.value;this._mode=t,this.requestUpdate("mode",e),this.requestUpdate("value",s)}get value(){return this.mode==""?this._value:this._staging}set value(t){var e="";this.mode==""?(e=this._value,this._value=t):(e=this._staging,this._staging=t),this.requestUpdate("value",e)}_handleNumber=t=>{let e=t.detail.value;if(t.stopPropagation(),e==="="){this.calculate();return}this.value==="0"&&(this.value=""),!(e==="."&&this.value.includes("."))&&(this.value+=e)};clear=()=>{this.value="",this._staging="",this._value="",this.mode=""};calculate=()=>{let t=Number(this._staging||"0"),e=Number(this._value||"0");var s=0;switch(this.mode){case"+":s=t+e;break;case"-":s=t-e;break;case"/":s=t/e;break;case"*":s=t*e;break;default:break}let i=s.toString();this.value=i,this._staging=i};render(){return x`<div
      id="base"
      style="width: ${this.width}; background-color: ${this.primaryColor};"
    >
      <display-output
        value="${this.value}"
        color="black"
        textColor="white"
      ></display-output>
      <div id="actions">
        <button
          @click=${this.clear}
          ?disabled=${this.value===""&&this.mode===""}
        >
          Clear
        </button>
        <button @click="${()=>this.mode="+"}">+</button>
        <button @click="${()=>this.mode="-"}">-</button>
        <button @click="${()=>this.mode="/"}">/</button>
        <button @click="${()=>this.mode="*"}">*</button>
      </div>
      <key-pad></key-pad>
    </div>`}};v(w,"styles",g`
    #base {
      border: 2px solid black;
      padding-bottom: 20px;
      --base-padding: 10px;
    }

    #actions {
      padding-top: var(--base-padding);
      padding-left: var(--base-padding);
    }

    button {
      font-size: 17px;
    }
  `),c([u()],w.prototype,"width",2),c([u()],w.prototype,"primaryColor",2),c([u()],w.prototype,"accentColor",2),w=c([E("app-calculator")],w);export{w as AppCalculator};
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
