import { describe, expect, test } from "vitest";
import "./components/rich-text";
import "./components/rich-viewer";

describe("Lit HTML Editor Components", () => {
  test("registers rich markdown/HTML custom elements successfully", () => {
    expect(customElements.get("rich-text")).toBeDefined();
    expect(customElements.get("rich-viewer")).toBeDefined();
  });

  test("mounts rich-viewer correctly and accepts markdown content", async () => {
    document.body.innerHTML = '<rich-viewer value="# Hello World"></rich-viewer>';
    await window.happyDOM.whenAsyncComplete();

    const element = document.body.querySelector("rich-viewer");
    expect(element).toBeDefined();
    expect(element?.getAttribute("value")).toBe("# Hello World");
  });
});
