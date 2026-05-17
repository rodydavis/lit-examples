import { describe, expect, test } from "vitest";
import "./my-element";

describe("MyElement Component", () => {
  test("registers my-element custom element successfully", () => {
    expect(customElements.get("my-element")).toBeDefined();
  });

  test("mounts and renders with default properties", async () => {
    document.body.innerHTML = "<my-element></my-element>";
    await window.happyDOM.whenAsyncComplete();

    const element = document.body.querySelector("my-element");
    expect(element).toBeDefined();
    expect(element?.shadowRoot).toBeDefined();

    const h1 = element?.shadowRoot?.querySelector("h1");
    expect(h1?.textContent).toBe("Hello, World!");

    const button = element?.shadowRoot?.querySelector("button");
    expect(button?.textContent?.trim()).toBe("Click Count: 1");
  });

  test("handles name property change", async () => {
    document.body.innerHTML = "<my-element name=\"Vitest\"></my-element>";
    await window.happyDOM.whenAsyncComplete();

    const element = document.body.querySelector("my-element");
    const h1 = element?.shadowRoot?.querySelector("h1");
    expect(h1?.textContent).toBe("Hello, Vitest!");
  });

  test("increments count on click and dispatches event", async () => {
    document.body.innerHTML = "<my-element></my-element>";
    await window.happyDOM.whenAsyncComplete();

    const element = document.body.querySelector("my-element");
    const button = element?.shadowRoot?.querySelector("button");

    let eventDetail: number | null = null;
    element?.addEventListener("count", (e: any) => {
      eventDetail = e.detail;
    });

    button?.click();
    await window.happyDOM.whenAsyncComplete();

    expect(element?.count).toBe(2);
    expect(button?.textContent?.trim()).toBe("Click Count: 2");
    expect(eventDetail).toBe(2);
  });
});
