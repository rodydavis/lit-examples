import{i as b,a as h,b as x}from"./lit-element-BUNo9pnf.js";import{t as g}from"./custom-element-BhZVzxrc.js";import{n as l}from"./property-MreHcJY-.js";var y=Object.defineProperty,C=Object.getOwnPropertyDescriptor,f=(o,t,r,a)=>{for(var e=a>1?void 0:a?C(t,r):t,i=o.length-1,s;i>=0;i--)(s=o[i])&&(e=(a?s(t,r,e):s(e))||e);return a&&e&&y(t,r,e),e};let p=class extends h{constructor(){super(...arguments),this.number="0",this.color="black",this.textColor="white"}_onTap(o){o.preventDefault();const t=new CustomEvent("select-number",{detail:{value:this.number},bubbles:!0,cancelable:!0});window.dispatchEvent(t)}render(){return x` <button
      @click="${this._onTap}"
      id="base"
      style="background-color: ${this.color}; color: ${this.textColor};"
    >
      ${this.number}
    </button>`}};p.styles=b`
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
  `;f([l()],p.prototype,"number",2);f([l()],p.prototype,"color",2);f([l()],p.prototype,"textColor",2);p=f([g("keypad-input")],p);var _=Object.defineProperty,w=Object.getOwnPropertyDescriptor,u=(o,t,r,a)=>{for(var e=a>1?void 0:a?w(t,r):t,i=o.length-1,s;i>=0;i--)(s=o[i])&&(e=(a?s(t,r,e):s(e))||e);return a&&e&&_(t,r,e),e};let n=class extends h{constructor(){super(...arguments),this.accentColor="blue",this.textColor="white",this.actionColor="black",this.actionTextColor="white"}render(){return x` <div id="base">
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
    </div>`}};n.styles=b`
    #base {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
      padding: 0 5px;
    }

    keypad-input {
      display: flex;
    }
  `;u([l()],n.prototype,"accentColor",2);u([l()],n.prototype,"textColor",2);u([l()],n.prototype,"actionColor",2);u([l()],n.prototype,"actionTextColor",2);n=u([g("key-pad")],n);var $=Object.defineProperty,k=Object.getOwnPropertyDescriptor,m=(o,t,r,a)=>{for(var e=a>1?void 0:a?k(t,r):t,i=o.length-1,s;i>=0;i--)(s=o[i])&&(e=(a?s(t,r,e):s(e))||e);return a&&e&&$(t,r,e),e};let c=class extends h{constructor(){super(...arguments),this.color="black",this.textColor="white",this.value=""}render(){return x`<div id="base" style="background-color: ${this.color};">
      <div id="text-display" style="color: ${this.textColor};">
        ${this.value||"0"}
      </div>
    </div>`}};c.styles=b`
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
  `;m([l()],c.prototype,"color",2);m([l()],c.prototype,"textColor",2);m([l()],c.prototype,"value",2);c=m([g("display-output")],c);var P=Object.defineProperty,O=Object.getOwnPropertyDescriptor,v=(o,t,r,a)=>{for(var e=a>1?void 0:a?O(t,r):t,i=o.length-1,s;i>=0;i--)(s=o[i])&&(e=(a?s(t,r,e):s(e))||e);return a&&e&&P(t,r,e),e};let d=class extends h{constructor(){super(...arguments),this.width="500px",this.primaryColor="#1a1f2c",this.accentColor="black",this._staging="",this._value="",this._mode="",this._handleNumber=o=>{const t=o.detail.value;if(o.stopPropagation(),t==="="){this.calculate();return}this.value==="0"&&(this.value=""),!(t==="."&&this.value.includes("."))&&(this.value+=t)},this.clear=()=>{this.value="",this._staging="",this._value="",this.mode=""},this.calculate=()=>{if(console.log("DEBUG: calculate entered! mode =",this.mode,"_value =",this._value,"_staging =",this._staging),this.mode==="")return;const o=Number(this._value||"0"),t=Number(this._staging||"0");let r=0;switch(this.mode){case"+":r=o+t;break;case"-":r=o-t;break;case"/":r=t===0?0:o/t;break;case"*":r=o*t;break}const a=r.toString();console.log("DEBUG: calculation result =",r,"output =",a),this._value=a,this._staging="",this.mode=""}}connectedCallback(){super.connectedCallback(),window.addEventListener("select-number",this._handleNumber)}disconnectedCallback(){window.removeEventListener("select-number",this._handleNumber),super.disconnectedCallback()}get mode(){return this._mode}set mode(o){const t=this._mode,r=this.value;this._mode=o,this.requestUpdate("mode",t),this.requestUpdate("value",r)}get value(){return this.mode===""?this._value:this._staging}set value(o){var t="";this.mode===""?(t=this._value,this._value=o):(t=this._staging,this._staging=o),this.requestUpdate("value",t)}get displayValue(){return this.mode!==""&&this._staging===""?this._value||"0":this.value||"0"}render(){return x`<div
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
          ?disabled=${this._value===""&&this._staging===""&&this.mode===""}
        >
          C
        </button>
        <button class="operator" @click="${()=>this.mode="+"}">+</button>
        <button class="operator" @click="${()=>this.mode="-"}">-</button>
        <button class="operator" @click="${()=>this.mode="/"}">/</button>
        <button class="operator" @click="${()=>this.mode="*"}">*</button>
      </div>
      <key-pad accentColor="#1b1c20" textColor="#f0eedb" actionColor="#f4a261" actionTextColor="#ffffff"></key-pad>
    </div>`}};d.styles=b`
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
  `;v([l()],d.prototype,"width",2);v([l()],d.prototype,"primaryColor",2);v([l()],d.prototype,"accentColor",2);d=v([g("app-calculator")],d);export{d as AppCalculator};
