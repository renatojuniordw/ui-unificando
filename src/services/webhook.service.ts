export interface WebhookResponse {
  success: boolean;
  message?: string;
  data?: any;
}

import { ContractSubmissionPayload } from "../types/contract";
import { ContactWebhookData } from "../types/contact";

export interface WebhookResponse {
  success: boolean;
  message?: string;
  data?: any;
}

export const WebhookService = {
  /**
   * Envia dados do formulário de contato para o Webhook
   */
  async sendContact(data: ContactWebhookData): Promise<WebhookResponse> {
    const baseUrl = import.meta.env.VITE_N8N_WEBHOOK_URL;
    if (!baseUrl) {
      console.error("URL do Webhook de contato não definida.");
      throw new Error(
        "Erro de configuração: URL do Webhook de contato não definida.",
      );
    }
    const url = `${baseUrl}/api/contact`;
    return this.postRequest(url, data);
  },

  /**
   * Envia dados do gerador de contrato para o Webhook
   */
  async sendContract(
    data: ContractSubmissionPayload,
  ): Promise<WebhookResponse> {
    const baseUrl = import.meta.env.VITE_N8N_WEBHOOK_URL_CONTRACT;
    if (!baseUrl) {
      console.error("URL do Webhook de contrato não definida.");
      throw new Error(
        "Erro de configuração: URL do Webhook de contrato não definida.",
      );
    }
    const url = `${baseUrl}/api/contract`;
    return this.postRequest(url, data);
  },

  /**
   * Método privado genérico para envio (interno)
   */
  async postRequest(url: string, data: any): Promise<WebhookResponse> {
    const idem = crypto.randomUUID();

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Idempotency-Key": idem,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(
          `Erro na requisição: ${response.status} - ${response.statusText}`,
        );
      }

      // Tenta fazer o parse do JSON, mas não falha se não tiver corpo de resposta
      const responseData = await response
        .text()
        .then((text) => (text ? JSON.parse(text) : {}));

      return {
        success: true,
        data: responseData,
      };
    } catch (error) {
      console.error("WebhookService Error:", error);
      throw error;
    }
  },
};
