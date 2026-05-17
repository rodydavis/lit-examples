import { describe, expect, test } from "vitest";
import "./lit-html-table";

describe("Lit HTML Table Component", () => {
  test("registers lit-html-table custom element successfully", () => {
    expect(customElements.get("lit-html-table")).toBeDefined();
  });

  test("mounts lit-html-table spreadsheet grid successfully", async () => {
    document.body.innerHTML = "<lit-html-table></lit-html-table>";
    await window.happyDOM.whenAsyncComplete();

    const element = document.body.querySelector("lit-html-table");
    expect(element).toBeDefined();
    expect(element?.shadowRoot).toBeDefined();
  });
});
