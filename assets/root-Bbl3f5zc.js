import{a as n,b as d,i as f}from"./lit-element-BUNo9pnf.js";import{t as c}from"./custom-element-BhZVzxrc.js";var h=Object.getOwnPropertyDescriptor,m=(t,a,l,s)=>{for(var e=s>1?void 0:s?h(a,l):a,o=t.length-1,i;o>=0;o--)(i=t[o])&&(e=i(e)||e);return e};let r=class extends n{render(){return d`
      <main>
        <aside>
          <a href="#/">Home</a>
          <a href="#/dashboard">Dashboard</a>
          <a href="#/settings">Settings</a>
        </aside>
        <section><slot></slot></section>
      </main>
    `}};r.styles=f`
    main {
      display: flex;
      flex-direction: row;
      height: 100vh;
      width: 100%;
    }
    aside {
      display: flex;
      flex-direction: column;
      background-color: whitesmoke;
      padding: 8px;
    }
    section {
      flex: 1;
    }
  `;r=m([c("root-module")],r);export{r as RootModule};
