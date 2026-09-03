import { describe, it, beforeEach } from "node:test";
import assert from "node:assert/strict";
import { pushDataLayer, trackCtaClick } from "./analytics.ts";

// Acesso tipado ao window simulado nos testes (ambiente Node não tem window).
const getWindow = () => (globalThis as unknown as { window: Window }).window;

describe("analytics", () => {
  beforeEach(() => {
    Object.defineProperty(globalThis, "window", {
      value: { dataLayer: [] },
      configurable: true,
    });
  });

  it("pushDataLayer inicializa dataLayer e faz push", () => {
    pushDataLayer({ event: "lead_submit", lead_source: "contact_form" });
    const dataLayer = getWindow().dataLayer ?? [];
    assert.equal(dataLayer.length, 1);
    assert.deepEqual(dataLayer[0], {
      event: "lead_submit",
      lead_source: "contact_form",
    });
  });

  it("pushDataLayer cria dataLayer quando window existe sem dataLayer", () => {
    const original = getWindow().dataLayer;
    getWindow().dataLayer = undefined;
    pushDataLayer({ event: "primeiro" });
    const dataLayer = getWindow().dataLayer ?? [];
    assert.equal(dataLayer.length, 1);
    assert.deepEqual(dataLayer[0], { event: "primeiro" });
    getWindow().dataLayer = original;
  });

  it("pushDataLayer acumula múltiplos eventos", () => {
    pushDataLayer({ event: "a" });
    pushDataLayer({ event: "b" });
    assert.equal((getWindow().dataLayer ?? []).length, 2);
  });

  it("pushDataLayer não lança erro sem window (SSR)", () => {
    const original = getWindow();
    Object.defineProperty(globalThis, "window", { value: undefined, configurable: true });
    try {
      assert.doesNotThrow(() => pushDataLayer({ event: "x" }));
    } finally {
      Object.defineProperty(globalThis, "window", { value: original, configurable: true });
    }
  });

  it("trackCtaClick empurra evento cta_click com label/location/to", () => {
    trackCtaClick({ label: "Falar no WhatsApp", location: "floating_button", to: "https://wa.me/1" });
    const [entry] = getWindow().dataLayer ?? [];
    assert.equal(entry.event, "cta_click");
    assert.equal(entry.cta_label, "Falar no WhatsApp");
    assert.equal(entry.cta_location, "floating_button");
    assert.equal(entry.cta_to, "https://wa.me/1");
  });
});