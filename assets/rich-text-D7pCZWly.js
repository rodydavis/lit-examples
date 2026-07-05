import{i as J,a as Z,b as E}from"./lit-element-BUNo9pnf.js";import{t as V}from"./custom-element-BhZVzxrc.js";import{n as y}from"./property-MreHcJY-.js";import{r as ht}from"./state-C9toMb2g.js";import{e as $e}from"./query-BApjzB0v.js";import{c as ft,_ as ie,b as l}from"./tslib.es6-h7HTSAm4.js";import{r as mt,d as We,A as Ye,P as Xe,h as fe}from"./shady-render-CorlzxxM.js";const Je=y({type:Object,hasChanged:()=>!0});function vt(){const a=new Set(["Arial","Arial Black","Bahnschrift","Calibri","Cambria","Cambria Math","Candara","Comic Sans MS","Consolas","Constantia","Corbel","Courier New","Ebrima","Franklin Gothic Medium","Gabriola","Gadugi","Georgia","HoloLens MDL2 Assets","Impact","Ink Free","Javanese Text","Leelawadee UI","Lucida Console","Lucida Sans Unicode","Malgun Gothic","Marlett","Microsoft Himalaya","Microsoft JhengHei","Microsoft New Tai Lue","Microsoft PhagsPa","Microsoft Sans Serif","Microsoft Tai Le","Microsoft YaHei","Microsoft Yi Baiti","MingLiU-ExtB","Mongolian Baiti","MS Gothic","MV Boli","Myanmar Text","Nirmala UI","Palatino Linotype","Segoe MDL2 Assets","Segoe Print","Segoe Script","Segoe UI","Segoe UI Historic","Segoe UI Emoji","Segoe UI Symbol","SimSun","Sitka","Sylfaen","Symbol","Tahoma","Times New Roman","Trebuchet MS","Verdana","Webdings","Wingdings","Yu Gothic","American Typewriter","Andale Mono","Arial","Arial Black","Arial Narrow","Arial Rounded MT Bold","Arial Unicode MS","Avenir","Avenir Next","Avenir Next Condensed","Baskerville","Big Caslon","Bodoni 72","Bodoni 72 Oldstyle","Bodoni 72 Smallcaps","Bradley Hand","Brush Script MT","Chalkboard","Chalkboard SE","Chalkduster","Charter","Cochin","Comic Sans MS","Copperplate","Courier","Courier New","Didot","DIN Alternate","DIN Condensed","Futura","Geneva","Georgia","Gill Sans","Helvetica","Helvetica Neue","Herculanum","Hoefler Text","Impact","Lucida Grande","Luminari","Marker Felt","Menlo","Microsoft Sans Serif","Monaco","Noteworthy","Optima","Palatino","Papyrus","Phosphate","Rockwell","Savoye LET","SignPainter","Skia","Snell Roundhand","Tahoma","Times","Times New Roman","Trattatello","Trebuchet MS","Verdana","Zapfino"].sort()),e=new Set;for(const t of a.values())document.fonts.check(`12px "${t}"`)&&e.add(t);return e.values()}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */var Ze;window.JSCompiler_renameProperty=(a,e)=>a;const me={toAttribute(a,e){switch(e){case Boolean:return a?"":null;case Object:case Array:return a==null?a:JSON.stringify(a)}return a},fromAttribute(a,e){switch(e){case Boolean:return a!==null;case Number:return a===null?null:Number(a);case Object:case Array:return JSON.parse(a)}return a}},Ke=(a,e)=>e!==a&&(e===e||a===a),re={attribute:!0,type:String,converter:me,reflect:!1,hasChanged:Ke},ae=1,ne=4,oe=8,se=16,ve="finalized";class Qe extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,i)=>{const r=this._attributeNameForProperty(i,t);r!==void 0&&(this._attributeToPropertyMap.set(r,i),e.push(r))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;e!==void 0&&e.forEach((t,i)=>this._classProperties.set(i,t))}}static createProperty(e,t=re){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const i=typeof e=="symbol"?Symbol():`__${e}`,r=this.getPropertyDescriptor(e,i,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(r){const n=this[e];this[t]=r,this.requestUpdateInternal(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||re}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty(ve)||e.finalize(),this[ve]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...typeof Object.getOwnPropertySymbols=="function"?Object.getOwnPropertySymbols(t):[]];for(const r of i)this.createProperty(r,t[r])}}static _attributeNameForProperty(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}static _valueHasChanged(e,t,i=Ke){return i(e,t)}static _propertyValueFromAttribute(e,t){const i=t.type,r=t.converter||me,n=typeof r=="function"?r:r.fromAttribute;return n?n(e,i):e}static _propertyValueToAttribute(e,t){if(t.reflect===void 0)return;const i=t.type,r=t.converter;return(r&&r.toAttribute||me.toAttribute)(e,i)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const i=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,i)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){this._enableUpdatingResolver!==void 0&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,i){t!==i&&this._attributeToProperty(e,i)}_propertyToAttribute(e,t,i=re){const r=this.constructor,n=r._attributeNameForProperty(e,i);if(n!==void 0){const o=r._propertyValueToAttribute(t,i);if(o===void 0)return;this._updateState=this._updateState|oe,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._updateState=this._updateState&~oe}}_attributeToProperty(e,t){if(this._updateState&oe)return;const i=this.constructor,r=i._attributeToPropertyMap.get(e);if(r!==void 0){const n=i.getPropertyOptions(r);this._updateState=this._updateState|se,this[r]=i._propertyValueFromAttribute(t,n),this._updateState=this._updateState&~se}}requestUpdateInternal(e,t,i){let r=!0;if(e!==void 0){const n=this.constructor;i=i||n.getPropertyOptions(e),n._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),i.reflect===!0&&!(this._updateState&se)&&(this._reflectingProperties===void 0&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):r=!1}!this._hasRequestedUpdate&&r&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=this._updateState|ne;try{await this._updatePromise}catch{}const e=this.performUpdate();return e!=null&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return this._updateState&ne}get hasUpdated(){return this._updateState&ae}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(i){throw e=!1,this._markUpdated(),i}e&&(this._updateState&ae||(this._updateState=this._updateState|ae,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~ne}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){this._reflectingProperties!==void 0&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,i)=>this._propertyToAttribute(i,this[i],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}Ze=ve;Qe[Ze]=!0;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const yt=(a,e)=>(window.customElements.define(a,e),e),gt=(a,e)=>{const{kind:t,elements:i}=e;return{kind:t,elements:i,finisher(r){window.customElements.define(a,r)}}},et=a=>e=>typeof e=="function"?yt(a,e):gt(a,e),_t=(a,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(t){t.createProperty(e.key,a)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,a)}},bt=(a,e,t)=>{e.constructor.createProperty(t,a)};function _(a){return(e,t)=>t!==void 0?bt(a,e,t):_t(a,e)}function g(a){return _({attribute:!1,hasChanged:void 0})}function tt(a,e){return(t,i)=>{const r={get(){return this.renderRoot.querySelector(a)},enumerable:!0,configurable:!0};return i!==void 0?it(r,t,i):rt(r,t)}}function St(a){return(e,t)=>{const i={async get(){return await this.updateComplete,this.renderRoot.querySelector(a)},enumerable:!0,configurable:!0};return t!==void 0?it(i,e,t):rt(i,e)}}const it=(a,e,t)=>{Object.defineProperty(e,t,a)},rt=(a,e)=>({kind:"method",placement:"prototype",key:e.key,descriptor:a}),At=(a,e)=>Object.assign(Object.assign({},e),{finisher(t){Object.assign(t.prototype[e.key],a)}}),wt=(a,e,t)=>{Object.assign(e[t],a)};function at(a){return(e,t)=>t!==void 0?wt(a,e,t):At(a,e)}/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const ye=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ee=Symbol();class Ce{constructor(e,t){if(t!==Ee)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return this._styleSheet===void 0&&(ye?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const $t=a=>new Ce(String(a),Ee),Et=a=>{if(a instanceof Ce)return a.cssText;if(typeof a=="number")return a;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${a}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`)},nt=(a,...e)=>{const t=e.reduce((i,r,n)=>i+Et(r)+a[n+1],a[0]);return new Ce(t,Ee)};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const Re={};class K extends Qe{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(n,o)=>n.reduceRight((c,s)=>Array.isArray(s)?t(s,c):(c.add(s),c),o),i=t(e,new Set),r=[];i.forEach(n=>r.unshift(n)),this._styles=r}else this._styles=e===void 0?[]:[e];this._styles=this._styles.map(t=>{if(t instanceof CSSStyleSheet&&!ye){const i=Array.prototype.slice.call(t.cssRules).reduce((r,n)=>r+n.cssText,"");return $t(i)}return t})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;e.length!==0&&(window.ShadyCSS!==void 0&&!window.ShadyCSS.nativeShadow?window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(t=>t.cssText),this.localName):ye?this.renderRoot.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):this._needsShimAdoptedStyleSheets=!0)}connectedCallback(){super.connectedCallback(),this.hasUpdated&&window.ShadyCSS!==void 0&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==Re&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(i=>{const r=document.createElement("style");r.textContent=i.cssText,this.renderRoot.appendChild(r)}))}render(){return Re}}K.finalized=!0;K.render=mt;/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function Ct(a,e){var t=a.matches||a.webkitMatchesSelector||a.msMatchesSelector;return t.call(a,e)}/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/const ot=()=>{},Pt={get passive(){return!1}};document.addEventListener("x",ot,Pt);document.removeEventListener("x",ot);/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/class Tt extends K{click(){if(this.mdcRoot){this.mdcRoot.focus(),this.mdcRoot.click();return}super.click()}createFoundation(){this.mdcFoundation!==void 0&&this.mdcFoundation.destroy(),this.mdcFoundationClass&&(this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter()),this.mdcFoundation.init())}firstUpdated(){this.createFoundation()}}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Rt=function(){function a(e){e===void 0&&(e={}),this.adapter=e}return Object.defineProperty(a,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(a,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(a,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(a,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),a.prototype.init=function(){},a.prototype.destroy=function(){},a}();/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var xt={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},Ot={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},xe={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};function kt(a,e,t){if(!a)return{x:0,y:0};var i=e.x,r=e.y,n=i+t.left,o=r+t.top,c,s;if(a.type==="touchstart"){var d=a;c=d.changedTouches[0].pageX-n,s=d.changedTouches[0].pageY-o}else{var p=a;c=p.pageX-n,s=p.pageY-o}return{x:c,y:s}}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Oe=["touchstart","pointerdown","mousedown","keydown"],ke=["touchend","pointerup","mouseup","contextmenu"],q=[],Ht=function(a){ft(e,a);function e(t){var i=a.call(this,ie(ie({},e.defaultAdapter),t))||this;return i.activationAnimationHasEnded_=!1,i.activationTimer_=0,i.fgDeactivationRemovalTimer_=0,i.fgScale_="0",i.frame_={width:0,height:0},i.initialSize_=0,i.layoutFrame_=0,i.maxRadius_=0,i.unboundedCoords_={left:0,top:0},i.activationState_=i.defaultActivationState_(),i.activationTimerCallback_=function(){i.activationAnimationHasEnded_=!0,i.runDeactivationUXLogicIfReady_()},i.activateHandler_=function(r){return i.activate_(r)},i.deactivateHandler_=function(){return i.deactivate_()},i.focusHandler_=function(){return i.handleFocus()},i.blurHandler_=function(){return i.handleBlur()},i.resizeHandler_=function(){return i.layout()},i}return Object.defineProperty(e,"cssClasses",{get:function(){return xt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Ot},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return xe},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this,i=this.supportsPressRipple_();if(this.registerRootHandlers_(i),i){var r=e.cssClasses,n=r.ROOT,o=r.UNBOUNDED;requestAnimationFrame(function(){t.adapter.addClass(n),t.adapter.isUnbounded()&&(t.adapter.addClass(o),t.layoutInternal_())})}},e.prototype.destroy=function(){var t=this;if(this.supportsPressRipple_()){this.activationTimer_&&(clearTimeout(this.activationTimer_),this.activationTimer_=0,this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer_&&(clearTimeout(this.fgDeactivationRemovalTimer_),this.fgDeactivationRemovalTimer_=0,this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));var i=e.cssClasses,r=i.ROOT,n=i.UNBOUNDED;requestAnimationFrame(function(){t.adapter.removeClass(r),t.adapter.removeClass(n),t.removeCssVars_()})}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()},e.prototype.activate=function(t){this.activate_(t)},e.prototype.deactivate=function(){this.deactivate_()},e.prototype.layout=function(){var t=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame(function(){t.layoutInternal_(),t.layoutFrame_=0})},e.prototype.setUnbounded=function(t){var i=e.cssClasses.UNBOUNDED;t?this.adapter.addClass(i):this.adapter.removeClass(i)},e.prototype.handleFocus=function(){var t=this;requestAnimationFrame(function(){return t.adapter.addClass(e.cssClasses.BG_FOCUSED)})},e.prototype.handleBlur=function(){var t=this;requestAnimationFrame(function(){return t.adapter.removeClass(e.cssClasses.BG_FOCUSED)})},e.prototype.supportsPressRipple_=function(){return this.adapter.browserSupportsCssVars()},e.prototype.defaultActivationState_=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers_=function(t){var i=this;t&&(Oe.forEach(function(r){i.adapter.registerInteractionHandler(r,i.activateHandler_)}),this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler_)),this.adapter.registerInteractionHandler("focus",this.focusHandler_),this.adapter.registerInteractionHandler("blur",this.blurHandler_)},e.prototype.registerDeactivationHandlers_=function(t){var i=this;t.type==="keydown"?this.adapter.registerInteractionHandler("keyup",this.deactivateHandler_):ke.forEach(function(r){i.adapter.registerDocumentInteractionHandler(r,i.deactivateHandler_)})},e.prototype.deregisterRootHandlers_=function(){var t=this;Oe.forEach(function(i){t.adapter.deregisterInteractionHandler(i,t.activateHandler_)}),this.adapter.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler_)},e.prototype.deregisterDeactivationHandlers_=function(){var t=this;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler_),ke.forEach(function(i){t.adapter.deregisterDocumentInteractionHandler(i,t.deactivateHandler_)})},e.prototype.removeCssVars_=function(){var t=this,i=e.strings,r=Object.keys(i);r.forEach(function(n){n.indexOf("VAR_")===0&&t.adapter.updateCssVariable(i[n],null)})},e.prototype.activate_=function(t){var i=this;if(!this.adapter.isSurfaceDisabled()){var r=this.activationState_;if(!r.isActivated){var n=this.previousActivationEvent_,o=n&&t!==void 0&&n.type!==t.type;if(!o){r.isActivated=!0,r.isProgrammatic=t===void 0,r.activationEvent=t,r.wasActivatedByPointer=r.isProgrammatic?!1:t!==void 0&&(t.type==="mousedown"||t.type==="touchstart"||t.type==="pointerdown");var c=t!==void 0&&q.length>0&&q.some(function(s){return i.adapter.containsEventTarget(s)});if(c){this.resetActivationState_();return}t!==void 0&&(q.push(t.target),this.registerDeactivationHandlers_(t)),r.wasElementMadeActive=this.checkElementMadeActive_(t),r.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame(function(){q=[],!r.wasElementMadeActive&&t!==void 0&&(t.key===" "||t.keyCode===32)&&(r.wasElementMadeActive=i.checkElementMadeActive_(t),r.wasElementMadeActive&&i.animateActivation_()),r.wasElementMadeActive||(i.activationState_=i.defaultActivationState_())})}}}},e.prototype.checkElementMadeActive_=function(t){return t!==void 0&&t.type==="keydown"?this.adapter.isSurfaceActive():!0},e.prototype.animateActivation_=function(){var t=this,i=e.strings,r=i.VAR_FG_TRANSLATE_START,n=i.VAR_FG_TRANSLATE_END,o=e.cssClasses,c=o.FG_DEACTIVATION,s=o.FG_ACTIVATION,d=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal_();var p="",u="";if(!this.adapter.isUnbounded()){var h=this.getFgTranslationCoordinates_(),v=h.startPoint,j=h.endPoint;p=v.x+"px, "+v.y+"px",u=j.x+"px, "+j.y+"px"}this.adapter.updateCssVariable(r,p),this.adapter.updateCssVariable(n,u),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter.removeClass(c),this.adapter.computeBoundingRect(),this.adapter.addClass(s),this.activationTimer_=setTimeout(function(){return t.activationTimerCallback_()},d)},e.prototype.getFgTranslationCoordinates_=function(){var t=this.activationState_,i=t.activationEvent,r=t.wasActivatedByPointer,n;r?n=kt(i,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):n={x:this.frame_.width/2,y:this.frame_.height/2},n={x:n.x-this.initialSize_/2,y:n.y-this.initialSize_/2};var o={x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2};return{startPoint:n,endPoint:o}},e.prototype.runDeactivationUXLogicIfReady_=function(){var t=this,i=e.cssClasses.FG_DEACTIVATION,r=this.activationState_,n=r.hasDeactivationUXRun,o=r.isActivated,c=n||!o;c&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter.addClass(i),this.fgDeactivationRemovalTimer_=setTimeout(function(){t.adapter.removeClass(i)},xe.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses_=function(){var t=e.cssClasses.FG_ACTIVATION;this.adapter.removeClass(t),this.activationAnimationHasEnded_=!1,this.adapter.computeBoundingRect()},e.prototype.resetActivationState_=function(){var t=this;this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout(function(){return t.previousActivationEvent_=void 0},e.numbers.TAP_DELAY_MS)},e.prototype.deactivate_=function(){var t=this,i=this.activationState_;if(i.isActivated){var r=ie({},i);i.isProgrammatic?(requestAnimationFrame(function(){return t.animateDeactivation_(r)}),this.resetActivationState_()):(this.deregisterDeactivationHandlers_(),requestAnimationFrame(function(){t.activationState_.hasDeactivationUXRun=!0,t.animateDeactivation_(r),t.resetActivationState_()}))}},e.prototype.animateDeactivation_=function(t){var i=t.wasActivatedByPointer,r=t.wasElementMadeActive;(i||r)&&this.runDeactivationUXLogicIfReady_()},e.prototype.layoutInternal_=function(){var t=this;this.frame_=this.adapter.computeBoundingRect();var i=Math.max(this.frame_.height,this.frame_.width),r=function(){var o=Math.sqrt(Math.pow(t.frame_.width,2)+Math.pow(t.frame_.height,2));return o+e.numbers.PADDING};this.maxRadius_=this.adapter.isUnbounded()?i:r();var n=Math.floor(i*e.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&n%2!==0?this.initialSize_=n-1:this.initialSize_=n,this.fgScale_=""+this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()},e.prototype.updateLayoutCssVars_=function(){var t=e.strings,i=t.VAR_FG_SIZE,r=t.VAR_LEFT,n=t.VAR_TOP,o=t.VAR_FG_SCALE;this.adapter.updateCssVariable(i,this.initialSize_+"px"),this.adapter.updateCssVariable(o,this.fgScale_),this.adapter.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter.updateCssVariable(r,this.unboundedCoords_.left+"px"),this.adapter.updateCssVariable(n,this.unboundedCoords_.top+"px"))},e}(Rt);/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class Ut{constructor(e){this.classes=new Set,this.changed=!1,this.element=e;const t=(e.getAttribute("class")||"").split(/\s+/);for(const i of t)this.classes.add(i)}add(e){this.classes.add(e),this.changed=!0}remove(e){this.classes.delete(e),this.changed=!0}commit(){if(this.changed){let e="";this.classes.forEach(t=>e+=t+" "),this.element.setAttribute("class",e)}}}const He=new WeakMap,It=We(a=>e=>{if(!(e instanceof Ye)||e instanceof Xe||e.committer.name!=="class"||e.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:t}=e,{element:i}=t;let r=He.get(e);r===void 0&&(i.setAttribute("class",t.strings.join(" ")),He.set(e,r=new Set));const n=i.classList||new Ut(i);r.forEach(o=>{o in a||(n.remove(o),r.delete(o))});for(const o in a){const c=a[o];c!=r.has(o)&&(c?(n.add(o),r.add(o)):(n.remove(o),r.delete(o)))}typeof n.commit=="function"&&n.commit()});/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Ue=new WeakMap,Mt=We(a=>e=>{if(!(e instanceof Ye)||e instanceof Xe||e.committer.name!=="style"||e.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");const{committer:t}=e,{style:i}=t.element;let r=Ue.get(e);r===void 0&&(i.cssText=t.strings.join(" "),Ue.set(e,r=new Set)),r.forEach(n=>{n in a||(r.delete(n),n.indexOf("-")===-1?i[n]=null:i.removeProperty(n))});for(const n in a)r.add(n),n.indexOf("-")===-1?i[n]=a[n]:i.setProperty(n,a[n])});class m extends Tt{constructor(){super(...arguments),this.primary=!1,this.accent=!1,this.unbounded=!1,this.disabled=!1,this.activated=!1,this.selected=!1,this.hovering=!1,this.bgFocused=!1,this.fgActivation=!1,this.fgDeactivation=!1,this.fgScale="",this.fgSize="",this.translateStart="",this.translateEnd="",this.leftPos="",this.topPos="",this.mdcFoundationClass=Ht}get isActive(){return Ct(this.parentElement||this,":active")}createAdapter(){return{browserSupportsCssVars:()=>!0,isUnbounded:()=>this.unbounded,isSurfaceActive:()=>this.isActive,isSurfaceDisabled:()=>this.disabled,addClass:e=>{switch(e){case"mdc-ripple-upgraded--background-focused":this.bgFocused=!0;break;case"mdc-ripple-upgraded--foreground-activation":this.fgActivation=!0;break;case"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation=!0;break}},removeClass:e=>{switch(e){case"mdc-ripple-upgraded--background-focused":this.bgFocused=!1;break;case"mdc-ripple-upgraded--foreground-activation":this.fgActivation=!1;break;case"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation=!1;break}},containsEventTarget:()=>!0,registerInteractionHandler:()=>{},deregisterInteractionHandler:()=>{},registerDocumentInteractionHandler:()=>{},deregisterDocumentInteractionHandler:()=>{},registerResizeHandler:()=>{},deregisterResizeHandler:()=>{},updateCssVariable:(e,t)=>{switch(e){case"--mdc-ripple-fg-scale":this.fgScale=t;break;case"--mdc-ripple-fg-size":this.fgSize=t;break;case"--mdc-ripple-fg-translate-end":this.translateEnd=t;break;case"--mdc-ripple-fg-translate-start":this.translateStart=t;break;case"--mdc-ripple-left":this.leftPos=t;break;case"--mdc-ripple-top":this.topPos=t;break}},computeBoundingRect:()=>(this.parentElement||this).getBoundingClientRect(),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset})}}startPress(e){this.waitForFoundation(()=>{this.mdcFoundation.activate(e)})}endPress(){this.waitForFoundation(()=>{this.mdcFoundation.deactivate()})}startFocus(){this.waitForFoundation(()=>{this.mdcFoundation.handleFocus()})}endFocus(){this.waitForFoundation(()=>{this.mdcFoundation.handleBlur()})}startHover(){this.hovering=!0}endHover(){this.hovering=!1}waitForFoundation(e){this.mdcFoundation?e():this.updateComplete.then(e)}update(e){e.has("disabled")&&this.disabled&&this.endHover(),super.update(e)}render(){const e=this.activated&&(this.primary||!this.accent),t=this.selected&&(this.primary||!this.accent),i={"mdc-ripple-surface--accent":this.accent,"mdc-ripple-surface--primary--activated":e,"mdc-ripple-surface--accent--activated":this.accent&&this.activated,"mdc-ripple-surface--primary--selected":t,"mdc-ripple-surface--accent--selected":this.accent&&this.selected,"mdc-ripple-surface--disabled":this.disabled,"mdc-ripple-surface--hover":this.hovering,"mdc-ripple-surface--primary":this.primary,"mdc-ripple-surface--selected":this.selected,"mdc-ripple-upgraded--background-focused":this.bgFocused,"mdc-ripple-upgraded--foreground-activation":this.fgActivation,"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation,"mdc-ripple-upgraded--unbounded":this.unbounded};return fe`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${It(i)}"
          style="${Mt({"--mdc-ripple-fg-scale":this.fgScale,"--mdc-ripple-fg-size":this.fgSize,"--mdc-ripple-fg-translate-end":this.translateEnd,"--mdc-ripple-fg-translate-start":this.translateStart,"--mdc-ripple-left":this.leftPos,"--mdc-ripple-top":this.topPos})}"></div>`}}l([tt(".mdc-ripple-surface")],m.prototype,"mdcRoot",void 0);l([_({type:Boolean})],m.prototype,"primary",void 0);l([_({type:Boolean})],m.prototype,"accent",void 0);l([_({type:Boolean})],m.prototype,"unbounded",void 0);l([_({type:Boolean})],m.prototype,"disabled",void 0);l([_({type:Boolean})],m.prototype,"activated",void 0);l([_({type:Boolean})],m.prototype,"selected",void 0);l([g()],m.prototype,"hovering",void 0);l([g()],m.prototype,"bgFocused",void 0);l([g()],m.prototype,"fgActivation",void 0);l([g()],m.prototype,"fgDeactivation",void 0);l([g()],m.prototype,"fgScale",void 0);l([g()],m.prototype,"fgSize",void 0);l([g()],m.prototype,"translateStart",void 0);l([g()],m.prototype,"translateEnd",void 0);l([g()],m.prototype,"leftPos",void 0);l([g()],m.prototype,"topPos",void 0);/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/const Dt=nt`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}`;let ge=class extends m{};ge.styles=Dt;ge=l([et("mwc-ripple")],ge);/**
@license
Copyright 2021 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/function Ft(a,e,t){const i=a.constructor;if(!t){const c=`__${e}`;if(t=i.getPropertyDescriptor(e,c),!t)throw new Error("@ariaProperty must be used after a @property decorator")}const r=t;let n="";if(!r.set)throw new Error(`@ariaProperty requires a setter for ${e}`);const o={configurable:!0,enumerable:!0,set(c){n===""&&(n=i.getPropertyOptions(e).attribute),this.hasAttribute(n)&&this.removeAttribute(n),r.set.call(this,c)}};return r.get&&(o.get=function(){return r.get.call(this)}),o}function Nt(a,e,t){if(e!==void 0)return Ft(a,e,t);throw new Error("@ariaProperty only supports TypeScript Decorators")}/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/class zt{constructor(e){this.startPress=t=>{e().then(i=>{i&&i.startPress(t)})},this.endPress=()=>{e().then(t=>{t&&t.endPress()})},this.startFocus=()=>{e().then(t=>{t&&t.startFocus()})},this.endFocus=()=>{e().then(t=>{t&&t.endFocus()})},this.startHover=()=>{e().then(t=>{t&&t.startHover()})},this.endHover=()=>{e().then(t=>{t&&t.endHover()})}}}class b extends K{constructor(){super(...arguments),this.disabled=!1,this.icon="",this.shouldRenderRipple=!1,this.rippleHandlers=new zt(()=>(this.shouldRenderRipple=!0,this.ripple))}renderRipple(){return this.shouldRenderRipple?fe`
            <mwc-ripple
                .disabled="${this.disabled}"
                unbounded>
            </mwc-ripple>`:""}focus(){const e=this.buttonElement;e&&(this.rippleHandlers.startFocus(),e.focus())}blur(){const e=this.buttonElement;e&&(this.rippleHandlers.endFocus(),e.blur())}render(){return fe`<button
        class="mdc-icon-button"
        aria-label="${this.ariaLabel||this.icon}"
        ?disabled="${this.disabled}"
        @focus="${this.handleRippleFocus}"
        @blur="${this.handleRippleBlur}"
        @mousedown="${this.handleRippleMouseDown}"
        @mouseenter="${this.handleRippleMouseEnter}"
        @mouseleave="${this.handleRippleMouseLeave}"
        @touchstart="${this.handleRippleTouchStart}"
        @touchend="${this.handleRippleDeactivate}"
        @touchcancel="${this.handleRippleDeactivate}"
    >${this.renderRipple()}
    <i class="material-icons">${this.icon}</i>
    <span
      ><slot></slot
    ></span>
  </button>`}handleRippleMouseDown(e){const t=()=>{window.removeEventListener("mouseup",t),this.handleRippleDeactivate()};window.addEventListener("mouseup",t),this.rippleHandlers.startPress(e)}handleRippleTouchStart(e){this.rippleHandlers.startPress(e)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}l([_({type:Boolean,reflect:!0})],b.prototype,"disabled",void 0);l([_({type:String})],b.prototype,"icon",void 0);l([Nt,_({type:String,attribute:"aria-label"})],b.prototype,"ariaLabel",void 0);l([tt("button")],b.prototype,"buttonElement",void 0);l([St("mwc-ripple")],b.prototype,"ripple",void 0);l([g()],b.prototype,"shouldRenderRipple",void 0);l([at({passive:!0})],b.prototype,"handleRippleMouseDown",null);l([at({passive:!0})],b.prototype,"handleRippleTouchStart",null);/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/const Lt=nt`.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;font-size:24px;text-decoration:none;cursor:pointer;user-select:none;width:48px;height:48px;padding:12px}.mdc-icon-button svg,.mdc-icon-button img{width:24px;height:24px}.mdc-icon-button:disabled{color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38))}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}:host{display:inline-block;outline:none;--mdc-ripple-color: currentcolor;-webkit-tap-highlight-color:transparent}:host([disabled]){pointer-events:none}:host,.mdc-icon-button{vertical-align:top}.mdc-icon-button{width:var(--mdc-icon-button-size, 48px);height:var(--mdc-icon-button-size, 48px);padding:calc( (var(--mdc-icon-button-size, 48px) - var(--mdc-icon-size, 24px)) / 2 )}.mdc-icon-button>i{position:absolute;top:0;padding-top:inherit}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block;width:var(--mdc-icon-size, 24px);height:var(--mdc-icon-size, 24px)}`;/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/let _e=class extends b{};_e.styles=Lt;_e=l([et("mwc-icon-button")],_e);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const W=window,Pe=W.ShadowRoot&&(W.ShadyCSS===void 0||W.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Te=Symbol(),Ie=new WeakMap;let st=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Te)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Pe&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Ie.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Ie.set(t,e))}return e}toString(){return this.cssText}};const Vt=a=>new st(typeof a=="string"?a:a+"",void 0,Te),Bt=(a,...e)=>{const t=a.length===1?a[0]:e.reduce((i,r,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+a[n+1],a[0]);return new st(t,a,Te)},jt=(a,e)=>{Pe?a.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),r=W.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=t.cssText,a.appendChild(i)})},Me=Pe?a=>a:a=>a instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Vt(t)})(a):a;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ce;const Y=window,De=Y.trustedTypes,Gt=De?De.emptyScript:"",Fe=Y.reactiveElementPolyfillSupport,be={toAttribute(a,e){switch(e){case Boolean:a=a?Gt:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,e){let t=a;switch(e){case Boolean:t=a!==null;break;case Number:t=a===null?null:Number(a);break;case Object:case Array:try{t=JSON.parse(a)}catch{t=null}}return t}},ct=(a,e)=>e!==a&&(e==e||a==a),de={attribute:!0,type:String,converter:be,reflect:!1,hasChanged:ct},Se="finalized";let T=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const r=this._$Ep(i,t);r!==void 0&&(this._$Ev.set(r,i),e.push(r))}),e}static createProperty(e,t=de){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,i,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(r){const n=this[e];this[t]=r,this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||de}static finalize(){if(this.hasOwnProperty(Se))return!1;this[Se]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of i)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift(Me(r))}else e!==void 0&&t.push(Me(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return jt(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=de){var r;const n=this.constructor._$Ep(e,i);if(n!==void 0&&i.reflect===!0){const o=(((r=i.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?i.converter:be).toAttribute(t,i.type);this._$El=e,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(e,t){var i;const r=this.constructor,n=r._$Ev.get(e);if(n!==void 0&&this._$El!==n){const o=r.getPropertyOptions(n),c=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:be;this._$El=n,this[n]=c.fromAttribute(t,o.type),this._$El=null}}requestUpdate(e,t,i){let r=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||ct)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,n)=>this[n]=r),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var n;return(n=r.hostUpdate)===null||n===void 0?void 0:n.call(r)}),this.update(i)):this._$Ek()}catch(r){throw t=!1,this._$Ek(),r}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var r;return(r=i.hostUpdated)===null||r===void 0?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};T[Se]=!0,T.elementProperties=new Map,T.elementStyles=[],T.shadowRootOptions={mode:"open"},Fe==null||Fe({ReactiveElement:T}),((ce=Y.reactiveElementVersions)!==null&&ce!==void 0?ce:Y.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var le;const X=window,x=X.trustedTypes,Ne=x?x.createPolicy("lit-html",{createHTML:a=>a}):void 0,Ae="$lit$",S=`lit$${(Math.random()+"").slice(9)}$`,dt="?"+S,qt=`<${dt}>`,P=document,N=()=>P.createComment(""),z=a=>a===null||typeof a!="object"&&typeof a!="function",lt=Array.isArray,Wt=a=>lt(a)||typeof(a==null?void 0:a[Symbol.iterator])=="function",pe=`[ 	
\f\r]`,D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ze=/-->/g,Le=/>/g,$=RegExp(`>|${pe}(?:([^\\s"'>=/]+)(${pe}*=${pe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ve=/'/g,Be=/"/g,pt=/^(?:script|style|textarea|title)$/i,Yt=a=>(e,...t)=>({_$litType$:a,strings:e,values:t}),Xt=Yt(1),O=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),je=new WeakMap,C=P.createTreeWalker(P,129,null,!1);function ut(a,e){if(!Array.isArray(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ne!==void 0?Ne.createHTML(e):e}const Jt=(a,e)=>{const t=a.length-1,i=[];let r,n=e===2?"<svg>":"",o=D;for(let c=0;c<t;c++){const s=a[c];let d,p,u=-1,h=0;for(;h<s.length&&(o.lastIndex=h,p=o.exec(s),p!==null);)h=o.lastIndex,o===D?p[1]==="!--"?o=ze:p[1]!==void 0?o=Le:p[2]!==void 0?(pt.test(p[2])&&(r=RegExp("</"+p[2],"g")),o=$):p[3]!==void 0&&(o=$):o===$?p[0]===">"?(o=r??D,u=-1):p[1]===void 0?u=-2:(u=o.lastIndex-p[2].length,d=p[1],o=p[3]===void 0?$:p[3]==='"'?Be:Ve):o===Be||o===Ve?o=$:o===ze||o===Le?o=D:(o=$,r=void 0);const v=o===$&&a[c+1].startsWith("/>")?" ":"";n+=o===D?s+qt:u>=0?(i.push(d),s.slice(0,u)+Ae+s.slice(u)+S+v):s+S+(u===-2?(i.push(void 0),c):v)}return[ut(a,n+(a[t]||"<?>")+(e===2?"</svg>":"")),i]};class L{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let n=0,o=0;const c=e.length-1,s=this.parts,[d,p]=Jt(e,t);if(this.el=L.createElement(d,i),C.currentNode=this.el.content,t===2){const u=this.el.content,h=u.firstChild;h.remove(),u.append(...h.childNodes)}for(;(r=C.nextNode())!==null&&s.length<c;){if(r.nodeType===1){if(r.hasAttributes()){const u=[];for(const h of r.getAttributeNames())if(h.endsWith(Ae)||h.startsWith(S)){const v=p[o++];if(u.push(h),v!==void 0){const j=r.getAttribute(v.toLowerCase()+Ae).split(S),G=/([.?@])?(.*)/.exec(v);s.push({type:1,index:n,name:G[2],strings:j,ctor:G[1]==="."?Kt:G[1]==="?"?ei:G[1]==="@"?ti:Q})}else s.push({type:6,index:n})}for(const h of u)r.removeAttribute(h)}if(pt.test(r.tagName)){const u=r.textContent.split(S),h=u.length-1;if(h>0){r.textContent=x?x.emptyScript:"";for(let v=0;v<h;v++)r.append(u[v],N()),C.nextNode(),s.push({type:2,index:++n});r.append(u[h],N())}}}else if(r.nodeType===8)if(r.data===dt)s.push({type:2,index:n});else{let u=-1;for(;(u=r.data.indexOf(S,u+1))!==-1;)s.push({type:7,index:n}),u+=S.length-1}n++}}static createElement(e,t){const i=P.createElement("template");return i.innerHTML=e,i}}function k(a,e,t=a,i){var r,n,o,c;if(e===O)return e;let s=i!==void 0?(r=t._$Co)===null||r===void 0?void 0:r[i]:t._$Cl;const d=z(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==d&&((n=s==null?void 0:s._$AO)===null||n===void 0||n.call(s,!1),d===void 0?s=void 0:(s=new d(a),s._$AT(a,t,i)),i!==void 0?((o=(c=t)._$Co)!==null&&o!==void 0?o:c._$Co=[])[i]=s:t._$Cl=s),s!==void 0&&(e=k(a,s._$AS(a,e.values),s,i)),e}class Zt{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:r}=this._$AD,n=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:P).importNode(i,!0);C.currentNode=n;let o=C.nextNode(),c=0,s=0,d=r[0];for(;d!==void 0;){if(c===d.index){let p;d.type===2?p=new B(o,o.nextSibling,this,e):d.type===1?p=new d.ctor(o,d.name,d.strings,this,e):d.type===6&&(p=new ii(o,this,e)),this._$AV.push(p),d=r[++s]}c!==(d==null?void 0:d.index)&&(o=C.nextNode(),c++)}return C.currentNode=P,n}v(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class B{constructor(e,t,i,r){var n;this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cp=(n=r==null?void 0:r.isConnected)===null||n===void 0||n}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=k(this,e,t),z(e)?e===f||e==null||e===""?(this._$AH!==f&&this._$AR(),this._$AH=f):e!==this._$AH&&e!==O&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Wt(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==f&&z(this._$AH)?this._$AA.nextSibling.data=e:this.$(P.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:r}=e,n=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=L.createElement(ut(r.h,r.h[0]),this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===n)this._$AH.v(i);else{const o=new Zt(n,this),c=o.u(this.options);o.v(i),this.$(c),this._$AH=o}}_$AC(e){let t=je.get(e.strings);return t===void 0&&je.set(e.strings,t=new L(e)),t}T(e){lt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const n of e)r===t.length?t.push(i=new B(this.k(N()),this.k(N()),this,this.options)):i=t[r],i._$AI(n),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class Q{constructor(e,t,i,r,n){this.type=1,this._$AH=f,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=f}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,r){const n=this.strings;let o=!1;if(n===void 0)e=k(this,e,t,0),o=!z(e)||e!==this._$AH&&e!==O,o&&(this._$AH=e);else{const c=e;let s,d;for(e=n[0],s=0;s<n.length-1;s++)d=k(this,c[i+s],t,s),d===O&&(d=this._$AH[s]),o||(o=!z(d)||d!==this._$AH[s]),d===f?e=f:e!==f&&(e+=(d??"")+n[s+1]),this._$AH[s]=d}o&&!r&&this.j(e)}j(e){e===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Kt extends Q{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===f?void 0:e}}const Qt=x?x.emptyScript:"";class ei extends Q{constructor(){super(...arguments),this.type=4}j(e){e&&e!==f?this.element.setAttribute(this.name,Qt):this.element.removeAttribute(this.name)}}class ti extends Q{constructor(e,t,i,r,n){super(e,t,i,r,n),this.type=5}_$AI(e,t=this){var i;if((e=(i=k(this,e,t,0))!==null&&i!==void 0?i:f)===O)return;const r=this._$AH,n=e===f&&r!==f||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==f&&(r===f||n);n&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class ii{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){k(this,e)}}const Ge=X.litHtmlPolyfillSupport;Ge==null||Ge(L,B),((le=X.litHtmlVersions)!==null&&le!==void 0?le:X.litHtmlVersions=[]).push("2.8.0");const ri=(a,e,t)=>{var i,r;const n=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let o=n._$litPart$;if(o===void 0){const c=(r=t==null?void 0:t.renderBefore)!==null&&r!==void 0?r:null;n._$litPart$=o=new B(e.insertBefore(N(),c),c,void 0,t??{})}return o._$AI(a),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ue,he;class F extends T{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ri(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return O}}F.finalized=!0,F._$litElement$=!0,(ue=globalThis.litElementHydrateSupport)===null||ue===void 0||ue.call(globalThis,{LitElement:F});const qe=globalThis.litElementPolyfillSupport;qe==null||qe({LitElement:F});((he=globalThis.litElementVersions)!==null&&he!==void 0?he:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */const ai=Bt`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let we=class extends F{render(){return Xt`<span><slot></slot></span>`}};we.styles=[ai];we=l([V("mwc-icon")],we);var ni=Object.defineProperty,oi=Object.getOwnPropertyDescriptor,I=(a,e,t,i)=>{for(var r=i>1?void 0:i?oi(e,t):e,n=a.length-1,o;n>=0;n--)(o=a[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&ni(e,t,r),r};let A=class extends Z{constructor(){super(...arguments),this.command="",this.icon="info",this.active=!1,this.values=[]}render(){const{icon:a,command:e,value:t,active:i,values:r}=this,n=r.length>0;return E`<section>
      ${n?E` <mwc-icon>${a}</mwc-icon>
            <select
              @change=${o=>{const d=o.target.value;d==="--"?R("removeFormat",void 0):R(e,d)}}
            >
              ${r.map(o=>E`<option value=${o.value} ?selected=${o.value===t}>
                    ${o.name}
                  </option>`)}
            </select>`:E`<mwc-icon-button
            ?active="${i}"
            icon=${a}
            @click=${()=>{e?R(e,t):this.dispatchEvent(new Event("action",{bubbles:!0,composed:!0}))}}
          ></mwc-icon-button>`}
      <div><slot></slot></div>
    </section>`}};A.styles=J`
    * {
      --mdc-icon-size: var(--icon-size);
      --mdc-icon-button-size: var(--icon-size);
    }
    section {
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    section * {
      margin: 2px;
    }
    mwc-icon-button[active] {
      color: var(--rich-action-active-color);
    }
    mwc-icon {
      cursor: pointer;
    }
  `;I([y({type:String})],A.prototype,"command",2);I([y({type:String})],A.prototype,"value",2);I([y({type:String})],A.prototype,"icon",2);I([y({type:Boolean})],A.prototype,"active",2);I([y({type:Array,hasChanged:()=>!0})],A.prototype,"values",2);A=I([V("rich-action")],A);function R(a,e){document.execCommand(a,!0,e)}var si=Object.defineProperty,ci=Object.getOwnPropertyDescriptor,M=(a,e,t,i)=>{for(var r=i>1?void 0:i?ci(e,t):e,n=a.length-1,o;n>=0;n--)(o=a[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&si(e,t,r),r};let w=class extends Z{constructor(){super(...arguments),this.selection=null}render(){const a=this.getTags();return E`<header>
      <rich-action icon="format_clear" command="removeFormat"></rich-action>
      <rich-action
        icon="format_bold"
        command="bold"
        ?active=${a.includes("b")}
      ></rich-action>
      <rich-action
        icon="format_italic"
        command="italic"
        ?active=${a.includes("i")}
      ></rich-action>
      <rich-action
        icon="format_underlined"
        command="underline"
        ?active=${a.includes("u")}
      ></rich-action>
      <rich-action icon="format_align_left" command="justifyleft"></rich-action>
      <rich-action
        icon="format_align_center"
        command="justifycenter"
      ></rich-action>
      <rich-action
        icon="format_align_right"
        command="justifyright"
      ></rich-action>
      <rich-action
        icon="format_list_numbered"
        command="insertorderedlist"
        ?active=${a.includes("ol")}
      ></rich-action>
      <rich-action
        icon="format_list_bulleted"
        command="insertunorderedlist"
        ?active=${a.includes("ul")}
      ></rich-action>
      <rich-action
        icon="format_quote"
        command="formatblock"
        value="blockquote"
      ></rich-action>
      <rich-action
        icon="format_indent_decrease"
        command="outdent"
      ></rich-action>
      <rich-action icon="format_indent_increase" command="indent"></rich-action>
      <rich-action
        icon="add_link"
        ?active=${a.includes("a")}
        @action=${()=>{const e=prompt("Write the URL here","https://");e&&e.match(/^(http|https):\/\/[^ "]+$/)&&R("createlink",e)}}
      >
      </rich-action>
      <rich-action
        icon="link_off"
        ?active=${a.includes("a")}
        command="unlink"
      >
      </rich-action>
      <rich-action
        icon="format_color_text"
        @action=${()=>this.fgColorInput.click()}
      >
        <input
          type="color"
          id="fg-color"
          @input=${e=>{const t=e.target;R("forecolor",t.value)}}
        />
      </rich-action>
      <rich-action
        icon="border_color"
        @action=${()=>this.bdColorInput.click()}
      >
        <input
          type="color"
          id="bd-color"
          @input=${e=>{const t=e.target;R("backcolor",t.value)}}
        />
      </rich-action>
      <rich-action
        icon="title"
        command="formatblock"
        .values=${[{name:"Normal Text",value:"--"},{name:"Heading 1",value:"h1"},{name:"Heading 2",value:"h2"},{name:"Heading 3",value:"h3"},{name:"Heading 4",value:"h4"},{name:"Heading 5",value:"h5"},{name:"Heading 6",value:"h6"},{name:"Paragraph",value:"p"},{name:"Pre-Formatted",value:"pre"}]}
      ></rich-action>
      <rich-action
        icon="text_format"
        command="fontname"
        .values=${[{name:"Font Name",value:"--"},...Array.from(vt()).map(e=>({name:e,value:e}))]}
      ></rich-action>
      <rich-action
        icon="format_size"
        command="fontsize"
        .values=${[{name:"Font Size",value:"--"},{name:"Very Small",value:"1"},{name:"Small",value:"2"},{name:"Normal",value:"3"},{name:"Medium Large",value:"4"},{name:"Large",value:"5"},{name:"Very Large",value:"6"},{name:"Maximum",value:"7"}]}
      ></rich-action>
      <rich-action icon="undo" command="undo"></rich-action>
      <rich-action icon="redo" command="redo"></rich-action>
      <rich-action icon="content_cut" command="cut"></rich-action>
      <rich-action icon="content_copy" command="copy"></rich-action>
      <rich-action icon="content_paste" command="paste"></rich-action>
      <rich-action
        icon="file_upload"
        @action=${async()=>{if("showOpenFilePicker"in window){const[e]=await window.showOpenFilePicker();if(this.fileHandle=e,e){const i=await(await e.getFile()).text();this.dispatchEvent(new CustomEvent("set-content",{detail:i,bubbles:!0,composed:!0}))}}else{const e=document.createElement("input");e.type="file",e.click(),e.onchange=async()=>{const t=e.files[0];if(t){const i=new FileReader;i.onload=()=>{const r=i.result;this.dispatchEvent(new CustomEvent("set-content",{detail:r,bubbles:!0,composed:!0}))},i.readAsText(t)}}}}}
      ></rich-action>
      <rich-action
        icon="file_download"
        @action=${async()=>{const e=this.node.innerHTML;if(this.fileHandle){const t=await this.fileHandle.createWritable();await t.write(["<!DOCTYPE html>",'<html lang="en">',"  <head> </head>",`  <body>${e}</body>`,"</html>"].join(`
`)),await t.close()}else{const t=window.URL.createObjectURL(new Blob([e],{type:"text/html"})),i=document.createElement("a");i.href=t,i.download="index.html",i.click()}}}
      ></rich-action>
    </header>`}getTags(){var t;const{selection:a}=this;let e=[];if(a)if(a.type==="Range"){let i=a==null?void 0:a.baseNode;if(i){const r=()=>{var o,c;const n=(c=(o=i==null?void 0:i.tagName)==null?void 0:o.toLowerCase())==null?void 0:c.trim();n&&e.push(n)};for(;i!=null;)r(),i=i==null?void 0:i.parentNode}e.pop()}else e=((((t=this.selection)==null?void 0:t.toString())||"").match(/<[^>]+>/g)||[]).filter(r=>!r.startsWith("</")).map(r=>r.replace(/<|>/g,""));return e}};w.styles=J`
    header {
      width: 100%;
      color: var(--rich-color);
      display: flex;
      flex-direction: row;
    }
    input[type="color"] {
      -webkit-appearance: none;
      border: none;
      width: var(--icon-size);
      height: var(--icon-size);
    }
    input[type="color"]::-webkit-color-swatch-wrapper {
      padding: 0;
    }
    input[type="color"]::-webkit-color-swatch {
      border: none;
    }
  `;M([Je],w.prototype,"selection",2);M([$e("#fg-color")],w.prototype,"fgColorInput",2);M([$e("#bd-color")],w.prototype,"bdColorInput",2);M([ht()],w.prototype,"fileHandle",2);M([y({type:Object,hasChanged:()=>!0})],w.prototype,"node",2);w=M([V("rich-toolbar")],w);var di=Object.defineProperty,li=Object.getOwnPropertyDescriptor,ee=(a,e,t,i)=>{for(var r=i>1?void 0:i?li(e,t):e,n=a.length-1,o;n>=0;n--)(o=a[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&di(e,t,r),r};let H=class extends Z{constructor(){super(...arguments),this.readonly=!1}render(){const{readonly:a,node:e}=this;return E`<article
      id="content"
      contenteditable=${a?"false":"true"}
      @input=${()=>this.updateSelection()}
    >
      ${e}
    </article>`}updateSelection(){var t;const e=((t=this.shadowRoot)!=null&&t.getSelection?this.shadowRoot.getSelection():null)||document.getSelection()||window.getSelection();this.dispatchEvent(new CustomEvent("selection",{detail:e,bubbles:!0,composed:!0}))}firstUpdated(){document.execCommand("defaultParagraphSeparator",!1,"br"),document.addEventListener("selectionchange",()=>{this.updateSelection()}),window.addEventListener("selectionchange",()=>{this.updateSelection()}),document.addEventListener("keydown",()=>{this.updateSelection()})}};H.styles=J`
    article {
      padding: var(--rich-padding);
      width: calc(100% - var(--rich-padding) * 2);
      height: calc(100% - var(--rich-padding) * 2);
    }

    article[contenteditable="true"] {
      border: none;
      outline: none;
    }
  `;ee([$e("#content")],H.prototype,"content",2);ee([y({type:Boolean})],H.prototype,"readonly",2);ee([y({type:Object,hasChanged:()=>!0})],H.prototype,"node",2);H=ee([V("rich-viewer")],H);var pi=Object.defineProperty,ui=Object.getOwnPropertyDescriptor,te=(a,e,t,i)=>{for(var r=i>1?void 0:i?ui(e,t):e,n=a.length-1,o;n>=0;n--)(o=a[n])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&pi(e,t,r),r};let U=class extends Z{constructor(){super(...arguments),this.selection=null,this.readonly=!1,this.node=document.createElement("div")}render(){const{selection:a,readonly:e,node:t}=this;return E`<main>
      <rich-toolbar
        .selection=${a}
        .node=${t}
        @set-content=${i=>{const r=i,c=new DOMParser().parseFromString(r.detail,"text/html").querySelector("body");this.node.innerHTML=(c==null?void 0:c.innerHTML)??"",this.requestUpdate()}}
      ></rich-toolbar>
      <rich-viewer
        ?readonly=${e}
        @selection=${i=>{const r=i;this.selection=r.detail}}
        .node=${t}
      >
      </rich-viewer>
    </main>`}firstUpdated(){const a=this.children;if(a.length>0){const e=a[0];if(e.tagName==="TEMPLATE"){const t=e.innerHTML.trim();t.length>0&&(this.node.innerHTML=t,this.requestUpdate())}}}};U.styles=J`
    :host {
      --rich-color: black;
      --rich-background: white;
      --rich-action-active-color: red;
      --icon-size: 24px;
      --rich-padding: 8px;
    }
    main {
      height: 100%;
      width: 100%;
      display: grid;
      grid-template-rows: 1fr auto;
      grid-template-columns: 1fr;
      grid-template-areas:
        "viewer"
        "toolbar";
    }

    rich-toolbar {
      grid-area: toolbar;
      width: 100%;
      overflow-x: auto;
      background-color: var(--rich-background);
      color: var(--rich-color);
      border-top: 1px solid var(--rich-color);
    }

    rich-viewer {
      grid-area: viewer;
      flex: 1;
      width: 100%;
      overflow-y: auto;
      background-color: var(--rich-background);
      color: var(--rich-color);
    }

    /* @media (hover: hover) and (pointer: fine) {
      main {
        grid-template-rows: auto 1fr;
        grid-template-areas:
          "toolbar"
          "viewer";
      }
      rich-toolbar {
        border-top: none;
        border-bottom: 1px solid var(--rich-color);
      }
    } */
    main {
      grid-template-rows: auto 1fr;
      grid-template-areas:
        "toolbar"
        "viewer";
    }
    rich-toolbar {
      border-top: none;
      border-bottom: 1px solid var(--rich-color);
    }

    @media (prefers-color-scheme: dark) {
      :host {
        --rich-background: black;
        --rich-color: white;
      }
    }
  `;te([Je],U.prototype,"selection",2);te([y({type:Boolean})],U.prototype,"readonly",2);te([y({type:Object,hasChanged:()=>!0})],U.prototype,"node",2);U=te([V("rich-text")],U);export{U as RichText};
