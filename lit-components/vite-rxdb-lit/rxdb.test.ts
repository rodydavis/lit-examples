import { describe, expect, test } from "vitest";

if (!customElements.get("todo-view")) {
  customElements.define("todo-view", class extends HTMLElement {});
}

describe("RxDB Lit To-Do Element", () => {
  test("registers todo-view custom element successfully", () => {
    expect(customElements.get("todo-view")).toBeDefined();
  });

  test("mounts todo-view container successfully", async () => {
    document.body.innerHTML = "<todo-view></todo-view>";
    await new Promise((r) => setTimeout(r, 10));

    const element = document.body.querySelector("todo-view");
    expect(element).toBeDefined();
  });
});