const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/piano-component-o52hRpDk.js","assets/lit-element-BUNo9pnf.js","assets/custom-element-BhZVzxrc.js","assets/state-C9toMb2g.js","assets/property-MreHcJY-.js","assets/query-BApjzB0v.js","assets/three.module-Unazwo7z.js","assets/tslib.es6-h7HTSAm4.js","assets/calculator-DLn03-w9.js","assets/code-editor-DcpYVa1u.js","assets/_commonjsHelpers-Cpj98o6Y.js","assets/draggable-dom-DGr2odh4.js","assets/generated-app-BiIEAB40.js","assets/modulepreload-polyfill-B5Qt9EMX.js","assets/lit-force-graph-CFGrtq5z.js","assets/rich-text-D7pCZWly.js","assets/shady-render-CorlzxxM.js","assets/lit-html-table-vKgGpcji.js","assets/app-Bt-dmHaf.js","assets/node-editor-BOHAaH0p.js","assets/sheet-music-DaSY6xDg.js","assets/simple-greeting-BlRtYK3s.js"])))=>i.map(i=>d[i]);
import"./modulepreload-polyfill-B5Qt9EMX.js";const S="modulepreload",I=function(e){return"/rodydavis/lit-examples/"+e},x={},s=function(r,i,y){let u=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));u=Promise.allSettled(i.map(t=>{if(t=I(t),t in x)return;x[t]=!0;const n=t.endsWith(".css"),m=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${m}`))return;const c=document.createElement("link");if(c.rel=n?"stylesheet":S,n||(c.as="script"),c.crossOrigin="",c.href=t,o&&c.setAttribute("nonce",o),document.head.appendChild(c),n)return new Promise((L,k)=>{c.addEventListener("load",L),c.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${t}`)))})}))}function p(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return u.then(a=>{for(const o of a||[])o.status==="rejected"&&p(o.reason);return r().catch(p)})},P={"lit-3d-piano":()=>s(()=>import("./piano-component-o52hRpDk.js"),__vite__mapDeps([0,1,2,3,4,5,6,7])),"lit-calculator":()=>s(()=>import("./calculator-DLn03-w9.js"),__vite__mapDeps([8,1,2,4])),"lit-code-editor":()=>s(()=>import("./code-editor-DcpYVa1u.js").then(e=>e.c),__vite__mapDeps([9,1,2,4,10])),"lit-draggable-dom":()=>s(()=>import("./draggable-dom-DGr2odh4.js"),__vite__mapDeps([11,1,2,5])),"lit-file-based-routing":()=>s(()=>import("./generated-app-BiIEAB40.js"),__vite__mapDeps([12,1,2,4,3,13])),"lit-force-graph":()=>s(()=>import("./lit-force-graph-CFGrtq5z.js"),__vite__mapDeps([14,1,2,4,3,5,13])),"lit-html-editor":()=>s(()=>import("./rich-text-D7pCZWly.js"),__vite__mapDeps([15,1,2,4,3,5,7,16])),"lit-html-table":()=>s(()=>import("./lit-html-table-vKgGpcji.js"),__vite__mapDeps([17,1,2,4])),"lit-modules":()=>s(()=>import("./app-Bt-dmHaf.js"),__vite__mapDeps([18,1,2,4])),"lit-node-editor":()=>s(()=>import("./node-editor-BOHAaH0p.js"),__vite__mapDeps([19,1,2,5,4,3])),"lit-sheet-music":()=>s(()=>import("./sheet-music-DaSY6xDg.js"),__vite__mapDeps([20,1,2,4,5,10])),"lit-wmr":()=>s(()=>import("./simple-greeting-BlRtYK3s.js"),__vite__mapDeps([21,1]))},A={"lit-3d-piano":"piano-component","lit-calculator":"app-calculator","lit-code-editor":"code-editor","lit-draggable-dom":"draggable-dom","lit-file-based-routing":"generated-app","lit-force-graph":"lit-force-graph","lit-html-editor":"rich-text","lit-html-table":"lit-html-table","lit-modules":"app-module","lit-node-editor":"node-editor","lit-sheet-music":"sheet-music","lit-wmr":"simple-greeting"},g=document.querySelectorAll(".project-item"),E=document.getElementById("heroState"),w=document.getElementById("viewport"),l=document.getElementById("renderContainer"),d=document.getElementById("iframeWrapper"),f=document.getElementById("previewIframe"),T=document.getElementById("viewportTitle"),h=document.getElementById("extLink"),D=document.getElementById("backBtn");async function b(e,r=!0){const i=document.querySelector(`.project-item[data-slug="${e}"]`);if(!i)return;g.forEach(o=>o.classList.remove("active")),i.classList.add("active");const y=i.getAttribute("data-name"),u=i.getAttribute("data-type"),p=i.getAttribute("href");E.style.display="none",w.style.display="flex",T.textContent=y,v.forEach(o=>o.classList.remove("active"));const a=document.querySelector('.size-btn[data-size="desktop"]');if(a&&a.classList.add("active"),l.className="render-container desktop",d.className="iframe-wrapper desktop",u==="native"){l.style.display="flex",d.className="iframe-wrapper",f.src="about:blank",h.style.display="none",l.innerHTML='<div style="color: var(--text-secondary); font-size: 14px;">Loading component...</div>';try{await P[e]();const o=A[e],t=document.createElement(o);if(t.style.width="100%",t.style.height="100%",t.style.minHeight="500px",e==="lit-html-table")t.values=[{id:1,name:"Minimoog Model D",type:"Analog Synthesizer",year:1970,price:"$3,499",status:"In Stock"},{id:2,name:"Roland Juno-106",type:"Polysynth",year:1984,price:"$1,899",status:"Rare"},{id:3,name:"Korg MS-20",type:"Monophonic Semi-Modular",year:1978,price:"$899",status:"In Stock"},{id:4,name:"Sequential Circuits Prophet-5",type:"Polysynth",year:1978,price:"$3,299",status:"Limited"},{id:5,name:"Yamaha DX7",type:"FM Synthesizer",year:1983,price:"$950",status:"Restocking"}],t.editable=!0;else if(e==="lit-code-editor")t.language="javascript",t.code=`import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('glowing-button')
export class GlowingButton extends LitElement {
  static styles = css\`
    button {
      background: linear-gradient(135deg, #ff007f, #7f00ff);
      color: white;
      border: none;
      padding: 14px 28px;
      font-size: 16px;
      font-weight: bold;
      border-radius: 30px;
      cursor: pointer;
      box-shadow: 0 0 20px rgba(255, 0, 127, 0.4);
      transition: all 0.3s ease;
    }
    button:hover {
      transform: scale(1.05);
      box-shadow: 0 0 30px rgba(127, 0, 255, 0.8);
    }
  \`;

  @property() label = 'Interact With Me';

  render() {
    return html\`<button>\${this.label}</button>\`;
  }
}`;else if(e==="lit-draggable-dom")t.innerHTML=`
              <div style="background: linear-gradient(135deg, #ff0844 0%, #ffb199 100%); color: white; padding: 25px; border-radius: 16px; box-shadow: 0 10px 30px rgba(255, 8, 68, 0.3); cursor: grab; width: 220px; font-family: 'Outfit', sans-serif; position: absolute; left: 80px; top: 120px; user-select: none;">
                <h3 style="margin: 0 0 8px 0; font-size: 18px;">Design Token</h3>
                <p style="margin: 0; font-size: 13px; opacity: 0.9;">Drag me around the canvas. I'll maintain my position smoothly!</p>
              </div>
              <div style="background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); color: white; padding: 25px; border-radius: 16px; box-shadow: 0 10px 30px rgba(56, 239, 125, 0.3); cursor: grab; width: 200px; font-family: 'Outfit', sans-serif; position: absolute; left: 360px; top: 200px; user-select: none;">
                <h3 style="margin: 0 0 8px 0; font-size: 18px;">Reactive State</h3>
                <p style="margin: 0; font-size: 13px; opacity: 0.9;">Multitouch support is active. Zoom or pan to navigate.</p>
              </div>
              <div style="background: linear-gradient(135deg, #f12711 0%, #f5af19 100%); color: white; padding: 25px; border-radius: 16px; box-shadow: 0 10px 30px rgba(245, 175, 25, 0.3); cursor: grab; width: 180px; font-family: 'Outfit', sans-serif; position: absolute; left: 220px; top: 380px; user-select: none;">
                <h3 style="margin: 0 0 8px 0; font-size: 18px;">Physics Grid</h3>
                <p style="margin: 0; font-size: 13px; opacity: 0.9;">Snaps and transforms align to the background mesh.</p>
              </div>
            `;else if(e==="lit-force-graph"){const n=document.createElement("script");n.type="application/json";const m={name:"DeepMind AI Ecosystem",description:"A force-directed graph illustrating Google DeepMind's prominent model architectures and system relationships.",nodes:[{id:"gemini",name:"Gemini 1.5 Pro",group:"Models"},{id:"gemma",name:"Gemma 2",group:"Models"},{id:"alphafold",name:"AlphaFold 3",group:"Scientific"},{id:"imagen",name:"Imagen 3",group:"Creative"},{id:"veo",name:"Veo",group:"Creative"},{id:"agent",name:"Antigravity Agent",group:"Agents"},{id:"workspace",name:"Federated Workspace",group:"Infrastructure"},{id:"lit",name:"Lit Component Library",group:"Infrastructure"}],links:[{source:"gemini",target:"agent"},{source:"agent",target:"workspace"},{source:"workspace",target:"lit"},{source:"gemini",target:"gemma"},{source:"gemini",target:"imagen"},{source:"gemini",target:"veo"},{source:"gemini",target:"alphafold"}]};n.textContent=JSON.stringify(m),t.appendChild(n)}else if(e==="lit-html-editor")t.node.innerHTML=`
              <h1 style="color: #6366f1; font-family: 'Outfit', sans-serif; margin-top: 0;">Welcome to the Lit Rich Text Editor!</h1>
              <p>This is a <strong>fully custom, native</strong> HTML editor built using Lit.</p>
              <p>You can use the toolbar above to:</p>
              <ul style="padding-left: 20px;">
                <li>Apply bold, italic, or underline text formatting</li>
                <li>Create customized lists</li>
                <li>Insert links or blockquotes</li>
              </ul>
              <blockquote style="border-left: 4px solid #6366f1; padding-left: 12px; margin-left: 0; color: #666; font-style: italic; margin-top: 20px;">
                "Simple, clean, and blazingly fast." - Modern Web Developer
              </blockquote>
            `;else if(e==="lit-sheet-music"){const n=`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE score-partwise PUBLIC
    "-//Recordare//DTD MusicXML 3.1 Partwise//EN"
    "http://www.musicxml.org/dtds/partwise.dtd">
<score-partwise version="3.1">
  <work>
    <work-title>Ode to Joy (Theme)</work-title>
  </work>
  <part-list>
    <score-part id="P1">
      <part-name>Piano</part-name>
    </score-part>
  </part-list>
  <part id="P1">
    <measure number="1">
      <attributes>
        <divisions>1</divisions>
        <key>
          <fifths>0</fifths>
        </key>
        <time>
          <beats>4</beats>
          <beat-type>4</beat-type>
        </time>
        <clef>
          <sign>G</sign>
          <line>2</line>
        </clef>
      </attributes>
      <note>
        <pitch>
          <step>E</step>
          <octave>4</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>quarter</type>
      </note>
      <note>
        <pitch>
          <step>E</step>
          <octave>4</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>quarter</type>
      </note>
      <note>
        <pitch>
          <step>F</step>
          <octave>4</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>quarter</type>
      </note>
      <note>
        <pitch>
          <step>G</step>
          <octave>4</octave>
        </pitch>
        <duration>1</duration>
        <voice>1</voice>
        <type>quarter</type>
      </note>
    </measure>
  </part>
</score-partwise>`;t.updateComplete.then(()=>{t.renderMusic(n)})}if(e==="lit-sheet-music"||e==="lit-wmr"||e==="lit-html-table"?l.style.background="#ffffff":l.style.background="#0d1117",l.innerHTML="",e==="lit-html-table"){const n=document.createElement("script");n.type="application/json";const m=[{id:1,name:"Minimoog Model D",type:"Analog Synthesizer",year:1970,price:"$3,499",status:"In Stock"},{id:2,name:"Roland Juno-106",type:"Polysynth",year:1984,price:"$1,899",status:"Rare"},{id:3,name:"Korg MS-20",type:"Monophonic Semi-Modular",year:1978,price:"$899",status:"In Stock"},{id:4,name:"Sequential Circuits Prophet-5",type:"Polysynth",year:1978,price:"$3,299",status:"Limited"},{id:5,name:"Yamaha DX7",type:"FM Synthesizer",year:1983,price:"$950",status:"Restocking"}];n.textContent=JSON.stringify(m),l.appendChild(n)}l.appendChild(t)}catch(o){console.error("ESM Direct Render Error:",o),l.innerHTML=`
            <div style="color: #ef4444; text-align: center; padding: 20px;">
              <h3 style="margin-bottom: 8px;">Direct Render Failed</h3>
              <p style="font-size: 12px; color: var(--text-secondary);">${o.message}</p>
            </div>
          `}}else l.style.display="none",d.className="iframe-wrapper show",f.src=p,h.style.display="flex",h.href=p;r&&history.pushState({slug:e},"",`?demo=${e}`)}const v=document.querySelectorAll(".size-btn");v.forEach(e=>{e.addEventListener("click",()=>{v.forEach(i=>i.classList.remove("active")),e.classList.add("active");const r=e.getAttribute("data-size");l.className="render-container "+r,d.className="iframe-wrapper "+r,(d.classList.contains("show")||f.src!=="about:blank")&&d.classList.add("show")})});function _(e=!0){g.forEach(r=>r.classList.remove("active")),l.innerHTML="",f.src="about:blank",w.style.display="none",E.style.display="flex",e&&history.pushState(null,"",window.location.pathname)}g.forEach(e=>{e.addEventListener("click",r=>{r.preventDefault();const i=e.getAttribute("data-slug");b(i)})});D.addEventListener("click",()=>{_()});const M=document.getElementById("search");M.addEventListener("input",e=>{const r=e.target.value.toLowerCase();g.forEach(i=>{i.getAttribute("data-name").toLowerCase().includes(r)?i.style.display="flex":i.style.display="none"})});window.addEventListener("load",()=>{const r=new URLSearchParams(window.location.search).get("demo");r&&b(r,!1)});window.addEventListener("popstate",e=>{const i=new URLSearchParams(window.location.search).get("demo");i?b(i,!1):_(!1)});export{s as _};
