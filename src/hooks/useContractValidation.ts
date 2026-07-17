import { ContractData } from "../types/contract";
import {
  validateEmail,
  validateCPF,
  validateCNPJ,
  validatePhone,
} from "../utils/validators";
import { ValidationResult } from "../types/form";

export const useContractValidation = () => {
  const validateStep = (
    stepId: string,
    data: ContractData,
  ): ValidationResult => {
    if (stepId === "personal") {
      return validatePersonalStep(data);
    }

    if (stepId === "address") {
      return validateAddressStep(data);
    }

    if (stepId === "ia") {
      if (Object.values(data.serviceDetailsData.aiChannels).every((v) => !v)) {
        return {
          isValid: false,
          error: {
            title: "Seleção Necessária",
            message: "Selecione pelo menos um canal para a IA atuar.",
            type: "warning",
          },
        };
      }
    }

    return { isValid: true };
  };

  const validatePersonalStep = (data: ContractData): ValidationResult => {
    // 1. Basic Fields Presence
    if (
      !data.personalData.name.trim() ||
      !data.personalData.document.trim() ||
      !data.personalData.email.trim() ||
      !data.personalData.whatsapp.trim()
    ) {
      return {
        isValid: false,
        error: {
          title: "Campos Obrigatórios",
          message: "Por favor, preencha todos os campos obrigatórios (*).",
          type: "warning",
        },
      };
    }

    // 2. Email Validation
    if (!validateEmail(data.personalData.email)) {
      return {
        isValid: false,
        error: {
          title: "E-mail Inválido",
          message: "Por favor, insira um endereço de e-mail válido.",
          type: "warning",
        },
      };
    }

    // 3. Phone Validation
    if (!validatePhone(data.personalData.whatsapp)) {
      return {
        isValid: false,
        error: {
          title: "WhatsApp Inválido",
          message: "Por favor, insira um número de WhatsApp válido com DDD.",
          type: "warning",
        },
      };
    }

    // 4. Document Validation (CPF/CNPJ)
    const docClean = data.personalData.document.replace(/\D/g, "");
    let isCnpj = false;

    if (docClean.length <= 11) {
      if (!validateCPF(docClean)) {
        return {
          isValid: false,
          error: {
            title: "CPF Inválido",
            message: "O CPF informado não é válido. Verifique os números.",
            type: "warning",
          },
        };
      }
    } else {
      isCnpj = true;
      if (!validateCNPJ(docClean)) {
        return {
          isValid: false,
          error: {
            title: "CNPJ Inválido",
            message: "O CNPJ informado não é válido. Verifique os números.",
            type: "warning",
          },
        };
      }
    }

    // 5. Representative Validation (if CNPJ)
    if (isCnpj) {
      if (
        !data.personalData.representativeName?.trim() ||
        !data.personalData.representativeDocument?.trim()
      ) {
        return {
          isValid: false,
          error: {
            title: "Responsável Legal",
            message:
              "Para cadastro via CNPJ, é obrigatório informar o Responsável Legal e seu CPF.",
            type: "warning",
          },
        };
      }

      const repDocClean = data.personalData.representativeDocument.replace(
        /\D/g,
        "",
      );
      if (!validateCPF(repDocClean)) {
        return {
          isValid: false,
          error: {
            title: "CPF do Responsável Inválido",
            message: "O CPF do responsável legal informado não é válido.",
            type: "warning",
          },
        };
      }
    }

    // 6. Service Selection
    if (
      !data.personalData.services.atendimento &&
      !data.personalData.services.ia &&
      !data.personalData.services.site
    ) {
      return {
        isValid: false,
        error: {
          title: "Selecione um Serviço",
          message:
            "Você precisa selecionar pelo menos um serviço para continuar.",
          type: "warning",
        },
      };
    }

    return { isValid: true };
  };

  const validateAddressStep = (data: ContractData): ValidationResult => {
    if (
      !data.addressData.zipCode ||
      !data.addressData.street ||
      !data.addressData.number ||
      !data.addressData.neighborhood ||
      !data.addressData.city ||
      !data.addressData.state
    ) {
      return {
        isValid: false,
        error: {
          title: "Endereço Incompleto",
          message: "Por favor, preencha todos os campos do endereço.",
          type: "warning",
        },
      };
    }
    return { isValid: true };
  };

  return { validateStep };
};
