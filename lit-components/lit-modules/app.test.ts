import { describe, expect, test } from "vitest";
import "./modules/app";
import "./modules/header";
import "./modules/counter";

describe("Lit Modules App Component", () => {
  test("registers modules custom elements successfully", () => {
    expect(customElements.get("app-module")).toBeDefined();
    expect(customElements.get("header-module")).toBeDefined();
    expect(customElements.get("counter-module")).toBeDefined();
  });

  test("mounts app-module successfully", async () => {
    document.body.innerHTML = "<app-module></app-module>";
    await window.happyDOM.whenAsyncComplete();

    const element = document.body.querySelector("app-module");
    expect(element).toBeDefined();
    expect(element?.shadowRoot).toBeDefined();
  });
});
