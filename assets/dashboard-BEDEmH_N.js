import{a as d,b as l,i as c}from"./lit-element-BUNo9pnf.js";import{t as p}from"./custom-element-BhZVzxrc.js";import"./menu-button-ufD_SbyE.js";var h=Object.getOwnPropertyDescriptor,u=(t,o,i,n)=>{for(var e=n>1?void 0:n?h(o,i):o,a=t.length-1,s;a>=0;a--)(s=t[a])&&(e=s(e)||e);return e};let r=class extends d{render(){return l`<main>
      <header>
        <menu-button></menu-button>
        <span class="title">Dashboard</span>
        <nav>
          <a href="#/dashboard/overview">Overview</a>
          <a href="#/dashboard/account/">Account</a>
        </nav>
      </header>
      <section><slot></slot></section>
    </main> `}};r.styles=c`
    header {
      height: 40px;
      background-color: orange;
      color: white;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding-left: 10px;
      padding-right: 10px;
      justify-content: space-between;
    }
  `;r=u([p("dashboard-module")],r);export{r as DashboardModule};
