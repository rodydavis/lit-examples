import"./modulepreload-polyfill-B5Qt9EMX.js";import{i as m,a as p,b as d}from"./lit-element-BUNo9pnf.js";import{t as u}from"./custom-element-BhZVzxrc.js";import{n as c}from"./property-MreHcJY-.js";var h=Object.defineProperty,b=Object.getOwnPropertyDescriptor,l=(o,n,i,r)=>{for(var e=r>1?void 0:r?b(n,i):n,s=o.length-1,a;s>=0;s--)(a=o[s])&&(e=(r?a(n,i,e):a(e))||e);return r&&e&&h(n,i,e),e};let t=class extends p{constructor(){super(...arguments),this.name="World",this.count=0}render(){return d`
      <main>
        <h1>Hello, ${this.name}!</h1>
        <button @click=${this._onClick} part="button">
          Click Count: ${this.count}
        </button>
        <slot></slot>
      </main>
    `}_onClick(){this.count++,document.dispatchEvent(new CustomEvent("native",{bubbles:!0,cancelable:!0,detail:{type:"dialog",title:"Alert",message:"Hello from Web!"}}))}async firstUpdated(){this.addEventListener("response",o=>{console.log("event",o),this.name="WebKit",this.requestUpdate()},!1),window.addEventListener("resize",()=>{this.name=`${window.innerWidth}x${window.innerHeight}`,this.requestUpdate()},!1)}};t.styles=m`
    main {
      display: block;
      border: solid 1px gray;
      margin: 10px;
      padding: 16px;
      max-width: 800px;
    }
    button {
      touch-action: manipulation;
    }

    @media (prefers-color-scheme: dark) {
      main {
        /* background-color: black; */
        color: white;
        border-color: white;
      }
    }
  `;l([c()],t.prototype,"name",2);l([c({type:Number})],t.prototype,"count",2);t=l([u("my-element")],t);
