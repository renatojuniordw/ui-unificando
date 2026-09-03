import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { validatePhone } from "./validators.ts";

describe("validatePhone", () => {
  it("aceita número BR completo com DDI (+55...)", () => {
    assert.equal(validatePhone("+55 81 99888-7777"), true);
    assert.equal(validatePhone("+5581998887777"), true);
  });

  it("aceita número internacional mínimo (11 dígitos, ex. +1...)", () => {
    assert.equal(validatePhone("+15555555555"), true);
  });

  it("aceita fallback sem '+' com pelo menos 10 dígitos", () => {
    assert.equal(validatePhone("81998887777"), true);
    assert.equal(validatePhone("8199887777"), true);
  });

  it("rejeita números curtos demais", () => {
    assert.equal(validatePhone("+55 81 9888"), false);
    assert.equal(validatePhone("819988777"), false);
    assert.equal(validatePhone("81998"), false);
    assert.equal(validatePhone(""), false);
  });
});
