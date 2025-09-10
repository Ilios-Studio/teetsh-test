require("@testing-library/jest-dom");

// Set up environment variables for tests
process.env.NODE_ENV = "test";
process.env.API_URL = "localhost:1337";
process.env.API_TOKEN = "1234567890";

// Mock import.meta for Jest
global.importMeta = {
  env: {
    VITE_BASE_STRAPI_API_URL: "http://localhost:1337",
    VITE_STRAPI_API_TOKEN: "test-token-123"
  }
};

// Polyfill for missing JSDOM methods needed by Radix UI
Object.defineProperty(HTMLElement.prototype, "hasPointerCapture", {
  value: function () {
    return false;
  },
  writable: true,
});

Object.defineProperty(HTMLElement.prototype, "setPointerCapture", {
  value: function () {},
  writable: true,
});

Object.defineProperty(HTMLElement.prototype, "releasePointerCapture", {
  value: function () {},
  writable: true,
});

// Mock scrollIntoView
Object.defineProperty(HTMLElement.prototype, "scrollIntoView", {
  value: function () {},
  writable: true,
});

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  constructor(cb) {
    this.cb = cb;
  }
  observe() {}
  unobserve() {}
  disconnect() {}
};
