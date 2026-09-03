import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { useContactValidation } from "./useContactValidation.ts";

const { validateForm } = useContactValidation();

describe("useContactValidation", () => {
  it("rejeita nome vazio", () => {
    const result = validateForm({ name: "", challenge: "projeto" });
    assert.equal(result.isValid, false);
    assert.equal(result.error?.title, "Campos Obrigatórios");
  });

  it("rejeita challenge vazio mesmo com nome preenchido", () => {
    const result = validateForm({ name: "Renato Bezerra", challenge: "" });
    assert.equal(result.isValid, false);
    assert.equal(result.error?.title, "Campos Obrigatórios");
  });

  it("rejeita nome com menos de 3 caracteres", () => {
    const result = validateForm({ name: "AB", challenge: "projeto" });
    assert.equal(result.isValid, false);
    assert.equal(result.error?.title, "Nome Inválido");
  });

  it("rejeita whatsapp inválido quando informado", () => {
    const result = validateForm({
      name: "Renato Bezerra",
      whatsapp: "123",
      challenge: "projeto",
    });
    assert.equal(result.isValid, false);
    assert.equal(result.error?.title, "WhatsApp Inválido");
  });

  it("aceita dados válidos com whatsapp", () => {
    const result = validateForm({
      name: "Renato Bezerra",
      whatsapp: "+55 81 99888-7777",
      challenge: "projeto",
    });
    assert.equal(result.isValid, true);
    assert.equal(result.error, undefined);
  });

  it("aceita nome válido sem whatsapp", () => {
    const result = validateForm({ name: "Renato Bezerra", challenge: "projeto" });
    assert.equal(result.isValid, true);
  });
});