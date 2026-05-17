import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("keypad-input")
export class CalcNumber extends LitElement {
  @property()
  number = "0";

  @property()
  color = "black";

  @property()
  textColor = "white";

  static styles = css`
    #base {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      text-align: center;
      float: left;
    }

    #base:hover {
      box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
    }

    #base:active {
      background-color: lightgrey;
    }

    button {
      outline: 0 none;
      color: white;
      margin-top: 10px;
      margin-bottom: 10px;
      font-size: 20px;
    }
  `;

  _onTap(e: Event) {
    e.preventDefault();

    const event = new CustomEvent("select-number", {
      detail: { value: this.number } as any,
      bubbles: true,
      cancelable: true,
    });

    // @ts-ignore
    window.dispatchEvent(event);
  }

  // Render element DOM by returning a `lit-html` template.
  render() {
    return html` <button
      @click="${this._onTap}"
      id="base"
      style="background-color: ${this.color}; color: ${this.textColor};"
    >
      ${this.number}
    </button>`;
  }
}
