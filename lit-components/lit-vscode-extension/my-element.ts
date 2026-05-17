import { html, css, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";

@customElement("my-element")
export class MyElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `;

  @property() name = "World";
  @state() count = 0;

  render() {
    return html`
      <h1>Hello, ${this.name}!</h1>
      <button @click=${() => this.modify(1)} part="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>
    `;
  }

  modify(val: number) {
    this.count += val;
  }

  reset() {
    this.count = 0;
  }

  async firstUpdated() {
    window.addEventListener(
      "message",
      (e: any) => {
        const message = e.data;
        const { command } = message;
        if (command === "reset") {
          this.reset();
        }
      },
      false
    );
  }
}
