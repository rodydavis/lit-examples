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
  primaryColor = "#1a1f2c";

  @property()
  accentColor = "black";

  static styles = css`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      min-height: 500px;
      box-sizing: border-box;
    }

    #base {
      border: 3px solid #1a1b1f;
      border-radius: 20px;
      padding: 24px;
      background: #2a2c33;
      box-shadow: 
        0 25px 50px -12px rgba(0, 0, 0, 0.7),
        inset 0 1px 0 rgba(255, 255, 255, 0.15);
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: 18px;
    }

    #actions {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 12px;
      padding: 0 5px;
    }

    button {
      background: #3e424b;
      border: none;
      border-bottom: 3px solid #1a1b1f;
      color: #fff;
      padding: 12px;
      font-size: 18px;
      font-weight: 700;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.08s ease;
      box-shadow: 0 4px 6px rgba(0,0,0,0.3);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    button:hover {
      background: #4a4f59;
    }

    button:active {
      transform: translateY(2px);
      border-bottom-width: 1px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    }

    button.operator {
      background: #e76f51;
      border-bottom-color: #9d3f27;
      color: #ffffff;
    }

    button.operator:hover {
      background: #f4a261;
    }

    button.clear-btn {
      background: #d62828;
      border-bottom-color: #7a1212;
      color: #ffffff;
    }

    button.clear-btn:hover {
      background: #e63946;
    }

    button:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      transform: none !important;
      border-bottom-width: 3px !important;
      box-shadow: 0 4px 6px rgba(0,0,0,0.3) !important;
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

  public get value(): string {
    if (this.mode === "") return this._value;
    return this._staging;
  }

  public set value(v: string) {
    var oldVal = "";
    if (this.mode === "") {
      oldVal = this._value;
      this._value = v;
    } else {
      oldVal = this._staging;
      this._staging = v;
    }
    // @ts-ignore
    this.requestUpdate("value", oldVal);
  }

  public get displayValue(): string {
    if (this.mode !== "" && this._staging === "") {
      return this._value || "0";
    }
    return this.value || "0";
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
    console.log("DEBUG: calculate entered! mode =", this.mode, "_value =", this._value, "_staging =", this._staging);
    if (this.mode === "") return;

    const op1 = Number(this._value || "0");
    const op2 = Number(this._staging || "0");
    let result: number = 0;

    switch (this.mode) {
      case "+":
        result = op1 + op2;
        break;
      case "-":
        result = op1 - op2;
        break;
      case "/":
        result = op2 === 0 ? 0 : op1 / op2;
        break;
      case "*":
        result = op1 * op2;
        break;
      default:
        break;
    }

    const output = result.toString();
    console.log("DEBUG: calculation result =", result, "output =", output);
    this._value = output;
    this._staging = "";
    this.mode = "";
  };

  render() {
    return html`<div
      id="base"
      style="width: ${this.width};"
    >
      <display-output
        value="${this.displayValue}"
        color="#8fa882"
        textColor="#172412"
      ></display-output>
      <div id="actions">
        <button
          class="clear-btn"
          @click=${this.clear}
          ?disabled=${this._value === "" && this._staging === "" && this.mode === ""}
        >
          C
        </button>
        <button class="operator" @click="${() => (this.mode = "+")}">+</button>
        <button class="operator" @click="${() => (this.mode = "-")}">-</button>
        <button class="operator" @click="${() => (this.mode = "/")}">/</button>
        <button class="operator" @click="${() => (this.mode = "*")}">*</button>
      </div>
      <key-pad accentColor="#1b1c20" textColor="#f0eedb" actionColor="#f4a261" actionTextColor="#ffffff"></key-pad>
    </div>`;
  }
}
