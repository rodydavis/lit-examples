import{a as l,b as p,i as d}from"./lit-element-BUNo9pnf.js";import{t as c}from"./custom-element-BhZVzxrc.js";import"./menu-button-ufD_SbyE.js";var m=Object.getOwnPropertyDescriptor,u=(n,s,a,i)=>{for(var e=i>1?void 0:i?m(s,a):s,t=n.length-1,o;t>=0;t--)(o=n[t])&&(e=o(e)||e);return e};let r=class extends l{render(){return p` <main>
      <header>
        <menu-button></menu-button>
        <span class="title">Settings</span>
        <div></div>
      </header>
      <slot></slot>
    </main>`}};r.styles=d`
    header {
      height: 40px;
      background-color: black;
      color: white;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding-left: 10px;
      justify-content: space-between;
    }
  `;r=u([c("settings-module")],r);export{r as SettingsModule};
