import { describe, expect, test } from "vitest";
import "./node-editor";
import "./ui/tree-view";

describe("Lit Node Editor Component", () => {
  test("registers visual node editor custom elements successfully", () => {
    expect(customElements.get("node-editor")).toBeDefined();
    expect(customElements.get("tree-view")).toBeDefined();
  });

  test("mounts node-editor to the body successfully", async () => {
    document.body.innerHTML = "<node-editor></node-editor>";
    await new Promise((r) => setTimeout(r, 100));

    const element = document.body.querySelector("node-editor");
    expect(element).toBeDefined();
    expect(element?.shadowRoot).toBeDefined();
  });
});
