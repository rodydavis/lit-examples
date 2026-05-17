import { describe, expect, test } from "vitest";
import "./generated-app";

describe("Lit File-Based Router Component", () => {
  test("registers generated-app custom element successfully", () => {
    expect(customElements.get("generated-app")).toBeDefined();
  });

  test("mounts router application container successfully", async () => {
    document.body.innerHTML = "<generated-app></generated-app>";
    await window.happyDOM.whenAsyncComplete();

    const element = document.body.querySelector("generated-app");
    expect(element).toBeDefined();
    expect(element?.shadowRoot).toBeDefined();

    // Await lazy route imports to complete before ending test and tearing down Happy DOM context
    await new Promise((resolve) => setTimeout(resolve, 150));
  });
});
