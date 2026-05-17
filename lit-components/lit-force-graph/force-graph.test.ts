import { describe, expect, test } from "vitest";
import "./lit-force-graph";

describe("Lit Force Graph Component", () => {
  test("registers lit-force-graph custom element successfully", () => {
    expect(customElements.get("lit-force-graph")).toBeDefined();
  });

  test("mounts lit-force-graph container successfully", async () => {
    document.body.innerHTML = "<lit-force-graph></lit-force-graph>";
    await window.happyDOM.whenAsyncComplete();

    const element = document.body.querySelector("lit-force-graph");
    expect(element).toBeDefined();
    expect(element?.shadowRoot).toBeDefined();
  });
});
