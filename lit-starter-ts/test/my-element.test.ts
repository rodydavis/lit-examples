import type { IWindow } from "happy-dom";
import { beforeEach, describe, expect, it, vi } from "vitest";

import "../src/my-element";

declare global {
  interface Window extends IWindow {}
}

describe("Button with increment", async () => {
  beforeEach(async () => {
    document.body.innerHTML = '<my-element name="World"></my-element>';
    await window.happyDOM.whenAsyncComplete();
    await new Promise((resolve) => setTimeout(resolve, 0));
  });

  function getInsideButton(): HTMLElement | null | undefined {
    return document.body
      .querySelector("my-element")
      ?.shadowRoot?.querySelector("button");
  }

  it("should increment the count on each click", () => {
    getInsideButton()?.click();
    expect(getInsideButton()?.innerText).toContain("1");
  });

  it("should show name props", () => {
    getInsideButton();
    expect(
      document.body.querySelector("my-element")?.shadowRoot?.innerHTML
    ).toContain("World");
  });

  it("should dispatch count event on button click", () => {
    const spyClick = vi.fn();

    document.querySelector("my-element")!.addEventListener("count", spyClick);

    getInsideButton()?.click();

    expect(spyClick).toHaveBeenCalled();
  });
});
