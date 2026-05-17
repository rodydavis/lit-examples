import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

type ObjectData = { [key: string]: any };

@customElement("lit-html-table")
export class LitHtmlTable extends LitElement {
  @property() src = "";
  @property({ type: Boolean }) editable = false;

  values?: ObjectData[];

  static styles = css`
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
  `;

  render() {
    // Check if data is loaded
    if (!this.values) {
      return html`<div class="loading"><slot name="loading">Loading data...</slot></div>`;
    }
    // Check if items are not empty
    if (this.values.length === 0) {
      return html`<div class="empty"><slot name="empty">No items found.</slot></div>`;
    }
    // Convert JSON to HTML Table
    return html`
      <table>
        <thead>
          <tr>
            ${Object.keys(this.values[0]).map((key) => {
              const name = key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase());
              return html`<th>
                <slot name="${key}">${name}</slot>
              </th>`;
            })}
          </tr>
        </thead>
        <tbody>
          ${this.values.map((item, index) => {
            return html`
              <tr>
                ${Object.entries(item).map(([key, value]) => {
                  return html`<td>
                    ${this.editable
                      ? html`<input
                          .value="${value}"
                          type="text"
                          @input=${(e: any) => {
                            const newValue = e.target.value;
                            const current = { ...this.values![index] };
                            current[key] = newValue;
                            this.values![index] = current;
                            this.requestUpdate();
                            this.dispatchEvent(
                              new CustomEvent("input-cell", {
                                detail: {
                                  index: index,
                                  data: current,
                                },
                              })
                            );
                          }}
                        />`
                      : html`${value}`}
                  </td>`;
                })}
              </tr>
            `;
          })}
        </tbody>
      </table>
    `;
  }

  async firstUpdated() {
    await this.fetchData();
  }

  async fetchData() {
    if (this.values && this.values.length > 0) return;
    let _data: any;
    if (this.src.length > 0) {
      _data = await fetch(this.src).then((res) => res.json());
    } else {
      const elem = this.parentElement?.querySelector(
        'script[type="application/json"]'
      ) as HTMLScriptElement;
      if (elem) _data = JSON.parse(elem.innerHTML);
    }
    _data ??= [];
    this.values = this.transform(_data);
    this.requestUpdate();
  }

  transform(data: any) {
    return data;
  }
}
