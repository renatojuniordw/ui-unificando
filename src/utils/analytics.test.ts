import { describe, it, beforeEach } from "node:test";
import assert from "node:assert/strict";
import { pushDataLayer, trackCtaClick } from "./analytics.ts";

describe("analytics", () => {
  beforeEach(() => {
    (globalThis as any).window = { dataLayer: [] };
  });

  it("pushDataLayer inicializa dataLayer e faz push", () => {
    pushDataLayer({ event: "lead_submit", lead_source: "contact_form" });
    const dataLayer = (globalThis as any).window.dataLayer;
    assert.equal(dataLayer.length, 1);
    assert.deepEqual(dataLayer[0], {
      event: "lead_submit",
      lead_source: "contact_form",
    });
  });

  it("pushDataLayer cria dataLayer quando window existe sem dataLayer", () => {
    (globalThis as any).window = {};
    pushDataLayer({ event: "primeiro" });
    const dataLayer = (globalThis as any).window.dataLayer;
    assert.equal(dataLayer.length, 1);
    assert.deepEqual(dataLayer[0], { event: "primeiro" });
  });

  it("pushDataLayer acumula múltiplos eventos", () => {
    pushDataLayer({ event: "a" });
    pushDataLayer({ event: "b" });
    assert.equal((globalThis as any).window.dataLayer.length, 2);
  });

  it("pushDataLayer não lança erro sem window (SSR)", () => {
    delete (globalThis as any).window;
    assert.doesNotThrow(() => pushDataLayer({ event: "x" }));
  });

  it("trackCtaClick empurra evento cta_click com label/location/to", () => {
    trackCtaClick({ label: "Falar no WhatsApp", location: "floating_button", to: "https://wa.me/1" });
    const [entry] = (globalThis as any).window.dataLayer;
    assert.equal(entry.event, "cta_click");
    assert.equal(entry.cta_label, "Falar no WhatsApp");
    assert.equal(entry.cta_location, "floating_button");
    assert.equal(entry.cta_to, "https://wa.me/1");
  });
});