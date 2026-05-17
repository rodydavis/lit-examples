import { describe, expect, test } from "vitest";
import "./code-editor";

describe("Lit Code Editor Component", () => {
  test("registers code-editor custom element successfully", () => {
    expect(customElements.get("code-editor")).toBeDefined();
  });

  test("mounts code-editor successfully", async () => {
    document.body.innerHTML = '<code-editor code="console.log(1);"></code-editor>';
    await window.happyDOM.whenAsyncComplete();

    const element = document.body.querySelector("code-editor");
    expect(element).toBeDefined();
    expect(element?.getAttribute("code")).toBe("console.log(1);");
  });
});
