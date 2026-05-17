import { describe, expect, test } from "vitest";
import "./my-element";

describe("VSCode Webview Custom Element", () => {
  test("registers my-element custom element successfully", () => {
    expect(customElements.get("my-element")).toBeDefined();
  });

  test("mounts custom webview element successfully", async () => {
    document.body.innerHTML = "<my-element></my-element>";
    await window.happyDOM.whenAsyncComplete();

    const element = document.body.querySelector("my-element");
    expect(element).toBeDefined();
    expect(element?.shadowRoot).toBeDefined();
  });
});
