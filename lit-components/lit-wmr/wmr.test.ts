import { describe, expect, test } from "vitest";
import "./simple-greeting";

describe("Lit WMR Components", () => {
  test("registers simple-greeting custom element successfully", () => {
    expect(customElements.get("simple-greeting")).toBeDefined();
  });

  test("mounts simple-greeting successfully", async () => {
    document.body.innerHTML = '<simple-greeting name="WMR"></simple-greeting>';
    await window.happyDOM.whenAsyncComplete();

    const element = document.body.querySelector("simple-greeting");
    expect(element).toBeDefined();
    
    // Assert against textContent to strip out Lit HTML comments and formatting tags
    expect(element?.shadowRoot?.textContent).toContain("Hello, WMR!");
  });
});
