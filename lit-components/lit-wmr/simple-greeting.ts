import { html, css, LitElement } from "lit";

export class SimpleGreeting extends LitElement {
  static styles = css`
    p {
      color: blue;
    }
  `;

  static properties = {
    name: { type: String },
  };

  constructor(public name: string = "Somebody") {
    super();
  }

  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}

if (!customElements.get("simple-greeting")) {
  customElements.define("simple-greeting", SimpleGreeting);
}
