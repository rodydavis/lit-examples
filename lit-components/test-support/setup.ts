import { vi } from "vitest";

if (typeof customElements !== "undefined") {
  const originalDefine = customElements.define;
  customElements.define = function (name, constructor, options) {
    if (customElements.get(name)) {
      return;
    }
    originalDefine.call(customElements, name, constructor, options);
  };
}

if (typeof window !== "undefined") {
  class ResizeObserverMock {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  window.ResizeObserver = ResizeObserverMock;
}

if (typeof HTMLCanvasElement !== "undefined") {
  const dummyContext = {
    measureText: () => ({ width: 0 }),
  };
  const canvasContextProxy = new Proxy(dummyContext, {
    get(target, prop) {
      if (prop in target) {
        return target[prop];
      }
      return () => {};
    }
  });

  HTMLCanvasElement.prototype.getContext = function (type) {
    if (type === "2d") {
      return canvasContextProxy;
    }
    return null;
  };
}

if (typeof document !== "undefined" && !document.execCommand) {
  document.execCommand = function () {
    return true;
  };
}

vi.mock("@capacitor/status-bar", () => {
  return {
    StatusBar: {
      setStyle: async () => {},
      show: async () => {},
      hide: async () => {},
      setOverlaysWebView: async () => {},
    },
    Style: {
      Dark: "DARK",
      Light: "LIGHT",
      Default: "DEFAULT",
    }
  };
});

vi.mock("pouchdb-adapter-idb", () => {
  return {};
});