import{a as c,b as o,i as b}from"./lit-element-BUNo9pnf.js";import{t as f}from"./custom-element-BhZVzxrc.js";import{n as p}from"./property-MreHcJY-.js";var h=Object.defineProperty,u=Object.getOwnPropertyDescriptor,d=(t,e,r,s)=>{for(var a=s>1?void 0:s?u(e,r):e,i=t.length-1,l;i>=0;i--)(l=t[i])&&(a=(s?l(e,r,a):l(a))||a);return s&&a&&h(e,r,a),a};let n=class extends c{constructor(){super(...arguments),this.src="",this.editable=!1}render(){return this.values?this.values.length===0?o`<div class="empty"><slot name="empty">No items found.</slot></div>`:o`
      <table>
        <thead>
          <tr>
            ${Object.keys(this.values[0]).map(t=>{const e=t.replace(/([A-Z])/g," $1").replace(/^./,r=>r.toUpperCase());return o`<th>
                <slot name="${t}">${e}</slot>
              </th>`})}
          </tr>
        </thead>
        <tbody>
          ${this.values.map((t,e)=>o`
              <tr>
                ${Object.entries(t).map(([r,s])=>o`<td>
                    ${this.editable?o`<input
                          .value="${s}"
                          type="text"
                          @input=${a=>{const i=a.target.value,l={...this.values[e]};l[r]=i,this.values[e]=l,this.requestUpdate(),this.dispatchEvent(new CustomEvent("input-cell",{detail:{index:e,data:l}}))}}
                        />`:o`${s}`}
                  </td>`)}
              </tr>
            `)}
        </tbody>
      </table>
    `:o`<div class="loading"><slot name="loading">Loading data...</slot></div>`}async firstUpdated(){await this.fetchData()}async fetchData(){var e;if(this.values&&this.values.length>0)return;let t;if(this.src.length>0)t=await fetch(this.src).then(r=>r.json());else{const r=(e=this.parentElement)==null?void 0:e.querySelector('script[type="application/json"]');r&&(t=JSON.parse(r.innerHTML))}t??(t=[]),this.values=this.transform(t),this.requestUpdate()}transform(t){return t}};n.styles=b`
    :host {
      display: block;
      width: 100%;
      overflow-x: auto;
      font-family: var(--table-font-family, sans-serif);
      background-color: var(--table-background-color, #ffffff);
      color: var(--table-text-color, #1f2937);
      border-radius: var(--table-border-radius, 8px);
      box-shadow: var(--table-box-shadow, 0 1px 3px 0 rgba(0, 0, 0, 0.1));
    }

    table {
      width: 100%;
      border-collapse: collapse;
      text-align: left;
    }

    thead {
      background-color: var(--table-header-bg, #f9fafb);
      border-bottom: 2px solid var(--table-border-color, #e5e7eb);
    }

    th {
      padding: var(--table-padding, 12px 16px);
      font-weight: 600;
      text-transform: uppercase;
      font-size: 0.75rem;
      letter-spacing: 0.05em;
      color: var(--table-header-color, #4b5563);
    }

    tr {
      border-bottom: 1px solid var(--table-border-color, #e5e7eb);
      transition: background-color 0.2s;
    }

    tr:last-child {
      border-bottom: none;
    }

    tbody tr:hover {
      background-color: var(--table-row-hover-bg, #f3f4f6);
    }

    td {
      padding: var(--table-padding, 12px 16px);
      vertical-align: middle;
      font-size: 0.875rem;
    }

    td > input {
      width: 100%;
      padding: 8px;
      border: 1px solid transparent;
      border-radius: 4px;
      background: transparent;
      font-family: inherit;
      font-size: inherit;
      color: inherit;
      transition: all 0.2s;
    }

    td > input:focus {
      outline: none;
      border-color: var(--table-focus-color, #6366f1);
      background-color: #ffffff;
      box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
    }

    .loading, .empty {
      padding: 32px;
      text-align: center;
      color: var(--table-text-secondary, #6b7280);
      font-style: italic;
    }
  `;d([p()],n.prototype,"src",2);d([p({type:Boolean})],n.prototype,"editable",2);n=d([f("lit-html-table")],n);export{n as LitHtmlTable};
