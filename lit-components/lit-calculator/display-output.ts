import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("display-output")
export class CalcDisplay extends LitElement {
  @property()
  color = "black";

  @property()
  textColor = "white";

  @property()
  value = "";

  static styles = css`
    @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');

    #base {
      text-align: end;
      display: block;
      padding: 16px 20px;
      border: 3px solid #1a1b1f;
      border-radius: 8px;
      box-shadow: 
        inset 0 4px 10px rgba(0, 0, 0, 0.4), 
        0 1px 0 rgba(255, 255, 255, 0.08);
      position: relative;
      overflow: hidden;
      box-sizing: border-box;
      width: 100%;
    }

    /* Glossy vintage glass glare */
    #base::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 50%;
      background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.12),
        rgba(255, 255, 255, 0)
      );
      pointer-events: none;
    }

    #text-display {
      font-family: 'Share Tech Mono', 'Courier New', monospace;
      font-weight: 700;
      font-size: 40px;
      letter-spacing: 2px;
      text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.12);
      margin: 0;
      line-height: 1.1;
      word-wrap: break-word;
      word-break: break-all;
    }
  `;

  // Render element DOM by returning a `lit-html` template.
  render() {
    return html`<div id="base" style="background-color: ${this.color};">
      <div id="text-display" style="color: ${this.textColor};">
        ${this.value || "0"}
      </div>
    </div>`;
  }
}
