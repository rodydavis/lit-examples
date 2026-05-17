import { describe, expect, test } from "vitest";
import { AppCalculator } from "./calculator";
import "./display-output";
import "./keypad-input";

describe("Lit Calculator Component Logic", () => {
  test("registers calculator custom elements successfully", () => {
    expect(customElements.get("app-calculator")).toBeDefined();
    expect(customElements.get("display-output")).toBeDefined();
    expect(customElements.get("keypad-input")).toBeDefined();
  });

  test("calculates addition correctly", () => {
    const calc = new AppCalculator();
    calc._value = "12";
    calc.mode = "+";
    calc._staging = "8";
    calc.calculate();
    expect(calc._value).toBe("20");
    expect(calc.mode).toBe("");
    expect(calc._staging).toBe("");
  });

  test("calculates subtraction correctly", () => {
    const calc = new AppCalculator();
    calc._value = "15";
    calc.mode = "-";
    calc._staging = "6";
    calc.calculate();
    expect(calc._value).toBe("9");
    expect(calc.mode).toBe("");
  });

  test("calculates multiplication correctly", () => {
    const calc = new AppCalculator();
    calc._value = "4";
    calc.mode = "*";
    calc._staging = "5";
    calc.calculate();
    expect(calc._value).toBe("20");
  });

  test("calculates division correctly", () => {
    const calc = new AppCalculator();
    calc._value = "20";
    calc.mode = "/";
    calc._staging = "4";
    calc.calculate();
    expect(calc._value).toBe("5");
  });

  test("handles division by zero gracefully", () => {
    const calc = new AppCalculator();
    calc._value = "10";
    calc.mode = "/";
    calc._staging = "0";
    calc.calculate();
    expect(calc._value).toBe("0");
  });
});
