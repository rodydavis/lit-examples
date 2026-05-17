import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("key-pad")
export class CalcKeyPad extends LitElement {
  @property()
  accentColor = "blue";

  @property()
  textColor = "white";

  @property()
  actionColor = "black";

  @property()
  actionTextColor = "white";

  static styles = css`
    #base {
      display: grid;
      grid-template-columns: 33% 33% 33%;
      padding-left: calc(var(--base-padding) / 2);
      padding-right: calc(var(--base-padding) / 2);
    }

    keypad-input {
      display: inline-grid;
      margin: 5px;
    }
  `;

  // Render element DOM by returning a `lit-html` template.
  render() {
    return html` <div id="base">
      <keypad-input
        number="7"
        color="${this.accentColor}"
        textColor="${this.textColor}"
      ></keypad-input>
      <keypad-input
        number="8"
        color="${this.accentColor}"
        textColor="${this.textColor}"
      ></keypad-input>
      <keypad-input
        number="9"
        color="${this.accentColor}"
        textColor="${this.textColor}"
      ></keypad-input>
      <keypad-input
        number="4"
        color="${this.accentColor}"
        textColor="${this.textColor}"
      ></keypad-input>
      <keypad-input
        number="5"
        color="${this.accentColor}"
        textColor="${this.textColor}"
      ></keypad-input>
      <keypad-input
        number="6"
        color="${this.accentColor}"
        textColor="${this.textColor}"
      ></keypad-input>
      <keypad-input
        number="1"
        color="${this.accentColor}"
        textColor="${this.textColor}"
      ></keypad-input>
      <keypad-input
        number="2"
        color="${this.accentColor}"
        textColor="${this.textColor}"
      ></keypad-input>
      <keypad-input
        number="3"
        color="${this.accentColor}"
        textColor="${this.textColor}"
      ></keypad-input>
      <keypad-input
        number="0"
        color="${this.accentColor}"
        textColor="${this.textColor}"
      ></keypad-input>
      <keypad-input
        number="."
        color="${this.accentColor}"
        textColor="${this.textColor}"
      ></keypad-input>
      <keypad-input
        number="="
        color="${this.actionColor}"
        textColor="${this.actionTextColor}"
      ></keypad-input>
    </div>`;
  }
}
