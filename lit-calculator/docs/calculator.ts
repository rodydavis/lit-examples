import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./keypad-input.js";
import "./key-pad.js";
import "./display-output.js";

@customElement("app-calculator")
export class AppCalculator extends LitElement {
  @property()
  width = "500px";

  @property()
  primaryColor = "red";

  @property()
  accentColor = "black";

  static styles = css`
    #base {
      border: 2px solid black;
      padding-bottom: 20px;
      --base-padding: 10px;
    }

    #actions {
      padding-top: var(--base-padding);
      padding-left: var(--base-padding);
    }

    button {
      font-size: 17px;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    // @ts-ignore
    window.addEventListener("select-number", this._handleNumber);
  }
  disconnectedCallback() {
    // @ts-ignore
    window.removeEventListener("select-number", this._handleNumber);
    super.disconnectedCallback();
  }

  _staging: string = "";
  _value: string = "";
  _mode: string = "";

  public get mode(): string {
    return this._mode;
  }

  public set mode(v: string) {
    const oldMode = this._mode;
    const oldVal = this.value;
    this._mode = v;

    // @ts-ignore
    this.requestUpdate("mode", oldMode);
    // @ts-ignore
    this.requestUpdate("value", oldVal);
  }

  private get value(): string {
    if (this.mode == "") return this._value;
    return this._staging;
  }

  private set value(v: string) {
    var oldVal = "";
    if (this.mode == "") {
      oldVal = this._value;
      this._value = v;
    } else {
      oldVal = this._staging;
      this._staging = v;
    }
    // @ts-ignore
    this.requestUpdate("value", oldVal);
  }

  _handleNumber = (event: CustomEvent) => {
    const num = event.detail.value;
    event.stopPropagation();
    if (num === "=") {
      this.calculate();
      return;
    }
    if (this.value === "0") {
      this.value = "";
    }
    if (num === "." && this.value.includes(".")) {
      return;
    }
    this.value += num;
  };

  clear = () => {
    this.value = "";
    this._staging = "";
    this._value = "";
    this.mode = "";
  };

  calculate = () => {
    const staging = Number(this._staging || "0");
    const current = Number(this._value || "0");
    var result: number = 0;
    // Calculate
    switch (this.mode) {
      case "+":
        result = staging + current;
        break;
      case "-":
        result = staging - current;
        break;
      case "/":
        result = staging / current;
        break;
      case "*":
        result = staging * current;
        break;
      default:
        break;
    }
    const output = result.toString();
    this.value = output;
    this._staging = output;
  };

  // Render element DOM by returning a `lit-html` template.
  render() {
    return html`<div
      id="base"
      style="width: ${this.width}; background-color: ${this.primaryColor};"
    >
      <display-output
        value="${this.value}"
        color="black"
        textColor="white"
      ></display-output>
      <div id="actions">
        <button
          @click=${this.clear}
          ?disabled=${this.value === "" && this.mode === ""}
        >
          Clear
        </button>
        <button @click="${() => (this.mode = "+")}">+</button>
        <button @click="${() => (this.mode = "-")}">-</button>
        <button @click="${() => (this.mode = "/")}">/</button>
        <button @click="${() => (this.mode = "*")}">*</button>
      </div>
      <key-pad></key-pad>
    </div>`;
  }
}
