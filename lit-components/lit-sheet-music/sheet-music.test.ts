import { describe, expect, test } from "vitest";
import "./sheet-music";

describe("Lit Sheet Music Component", () => {
  test("registers sheet-music custom element successfully", () => {
    expect(customElements.get("sheet-music")).toBeDefined();
  });

  test("mounts sheet-music successfully", async () => {
    document.body.innerHTML = "<sheet-music></sheet-music>";
    await window.happyDOM.whenAsyncComplete();

    const element = document.body.querySelector("sheet-music");
    expect(element).toBeDefined();
    expect(element?.shadowRoot).toBeDefined();
  });
});
