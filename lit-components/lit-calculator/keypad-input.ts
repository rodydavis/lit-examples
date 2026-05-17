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
      border-radius: 50%;
      text-align: center;
      border: none;
      border-bottom: 3px solid rgba(0, 0, 0, 0.45);
      font-weight: 700;
      font-size: 20px;
      cursor: pointer;
      aspect-ratio: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.08s ease;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.25);
      outline: none;
      box-sizing: border-box;
      padding: 0;
    }

    #base:hover {
      filter: brightness(1.1);
    }

    #base:active {
      transform: translateY(2px);
      border-bottom-width: 1px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
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
