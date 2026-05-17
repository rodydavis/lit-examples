import { describe, expect, test } from "vitest";
import "./piano-component";

describe("Lit 3D Piano Component", () => {
  test("registers piano-component custom element successfully", () => {
    expect(customElements.get("piano-component")).toBeDefined();
  });

  test("mounts piano-component to document body", async () => {
    document.body.innerHTML = "<piano-component></piano-component>";
    await window.happyDOM.whenAsyncComplete();

    const element = document.body.querySelector("piano-component");
    expect(element).toBeDefined();
    expect(element?.shadowRoot).toBeDefined();
  });
});
