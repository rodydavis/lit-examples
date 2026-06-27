import{a as o,i as r,b as i}from"./lit-element-BUNo9pnf.js";const s=class s extends o{constructor(e="Somebody"){super(),this.name=e}render(){return i`<p>Hello, ${this.name}!</p>`}};s.styles=r`
    p {
      color: blue;
    }
  `,s.properties={name:{type:String}};let t=s;customElements.get("simple-greeting")||customElements.define("simple-greeting",t);export{t as SimpleGreeting};
