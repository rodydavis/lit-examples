import{a as i,b as n,i as d}from"./lit-element-BUNo9pnf.js";import{t as c}from"./custom-element-BhZVzxrc.js";var m=Object.getOwnPropertyDescriptor,f=(a,o,s,l)=>{for(var e=l>1?void 0:l?m(o,s):o,r=a.length-1,p;r>=0;r--)(p=a[r])&&(e=p(e)||e);return e};let t=class extends i{render(){return n` <main>
      <header>App Base</header>
      <slot></slot>
    </main>`}};t.styles=d`
    header {
      height: 40px;
      background-color: navy;
      color: white;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding-left: 10px;
    }
  `;t=f([c("app-module")],t);export{t as AppModule};
