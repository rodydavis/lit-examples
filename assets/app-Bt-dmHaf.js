import{i as a,b as d,a as p}from"./lit-element-BUNo9pnf.js";import{t as m}from"./custom-element-BhZVzxrc.js";import{n as h}from"./property-MreHcJY-.js";var M=Object.getOwnPropertyDescriptor,O=(t,r,l,n)=>{for(var e=n>1?void 0:n?M(r,l):r,o=t.length-1,s;o>=0;o--)(s=t[o])&&(e=s(e)||e);return e};const f=[a`
  .counter {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .counter > .actions > * {
    margin: 0.5rem;
  }
  .counter > span {
    font-size: 1.5em;
  }
`];class v{constructor(r){this.host=r,this.value=0,r.addController(this)}hostConnected(){this.value=0}increment(){this.value++,this.host.requestUpdate()}decrement(){this.value--,this.host.requestUpdate()}}function y(t){return d`<div class="counter">
    <span>${t.counter.value}</span>
    <div class="actions">
      <button @click=${()=>t.counter.increment()}>Increment +</button>
      <button @click=${()=>t.counter.decrement()}>Decrement -</button>
    </div>
  </div>`}let i=class extends p{constructor(){super(...arguments),this.counter=new v(this)}render(){return y(this)}};i.styles=f;i=O([m("counter-module")],i);var w=Object.defineProperty,x=Object.getOwnPropertyDescriptor,_=(t,r,l,n)=>{for(var e=n>1?void 0:n?x(r,l):r,o=t.length-1,s;o>=0;o--)(s=t[o])&&(e=(n?s(r,l,e):s(e))||e);return n&&e&&w(r,l,e),e};const g=[a`
  header {
    height: 60px;
    background-color: #f5f5f5;
    color: #333;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`];function $(t){return d`<header>${t.title}</header>`}let u=class extends p{constructor(){super(...arguments),this.title="Lit Modules"}render(){return $(this)}};u.styles=g;_([h({type:String})],u.prototype,"title",2);u=_([m("header-module")],u);var P=Object.defineProperty,C=Object.getOwnPropertyDescriptor,b=(t,r,l,n)=>{for(var e=n>1?void 0:n?C(r,l):r,o=t.length-1,s;o>=0;o--)(s=t[o])&&(e=(n?s(r,l,e):s(e))||e);return n&&e&&P(r,l,e),e};const j=[a`
    main {
      display: flex;
      flex-direction: column;
    }
  `,g,f];function D(t){return d`<main>
    ${$({title:window.document.title})}
    ${y({counter:t.counter})}
  </main> `}let c=class extends p{constructor(){super(...arguments),this.name="World",this.counter=new v(this)}render(){return D(this)}};c.styles=j;b([h({type:String})],c.prototype,"name",2);c=b([m("app-module")],c);export{c as AppModule,j as appModuleStyles,D as appModuleTemplate};
