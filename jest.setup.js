require('@testing-library/jest-dom');

// Polyfill for missing JSDOM methods needed by Radix UI
Object.defineProperty(HTMLElement.prototype, 'hasPointerCapture', {
  value: function() { return false; },
  writable: true,
});

Object.defineProperty(HTMLElement.prototype, 'setPointerCapture', {
  value: function() {},
  writable: true,
});

Object.defineProperty(HTMLElement.prototype, 'releasePointerCapture', {
  value: function() {},
  writable: true,
});

// Mock scrollIntoView
Object.defineProperty(HTMLElement.prototype, 'scrollIntoView', {
  value: function() {},
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