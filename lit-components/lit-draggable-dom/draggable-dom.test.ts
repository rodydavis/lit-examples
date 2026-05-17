import { describe, expect, test } from "vitest";
import "./draggable-dom";

describe("Lit Draggable DOM Component", () => {
  test("registers draggable-dom custom element successfully", () => {
    expect(customElements.get("draggable-dom")).toBeDefined();
  });

  test("mounts draggable-dom successfully and accepts slots", async () => {
    document.body.innerHTML = `
      <draggable-dom>
        <span id="drag">Grab me</span>
      </draggable-dom>
    `;
    await window.happyDOM.whenAsyncComplete();

    const element = document.body.querySelector("draggable-dom");
    expect(element).toBeDefined();
    expect(document.getElementById("drag")?.textContent).toBe("Grab me");
  });
});
