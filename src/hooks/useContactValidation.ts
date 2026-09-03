import type { ContactFormData } from "../types/contact.ts";
import type { ValidationResult } from "../types/form.ts";
import { validatePhone } from "../utils/validators.ts";

export const useContactValidation = () => {
  const validateForm = (data: ContactFormData): ValidationResult => {
    // 1. Basic Fields Presence (Name and Challenge are mandatory)
    if (!data.name.trim() || !data.challenge) {
      return {
        isValid: false,
        error: {
          title: "Campos Obrigatórios",
          message: "Por favor, preencha todos os campos obrigatórios.",
          type: "warning",
        },
      };
    }

    // 2. Name Validation (Minimal check)
    if (data.name.trim().length < 3) {
      return {
        isValid: false,
        error: {
          title: "Nome Inválido",
          message: "Por favor, insira seu nome completo.",
          type: "warning",
        },
      };
    }

    // 3. Phone Validation (Only if provided)
    if (data.whatsapp && !validatePhone(data.whatsapp)) {
      return {
        isValid: false,
        error: {
          title: "WhatsApp Inválido",
          message: "Por favor, insira um número de WhatsApp válido com DDD.",
          type: "warning",
        },
      };
    }

    return { isValid: true };
  };

  return { validateForm };
};
