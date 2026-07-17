import { WebhookResponse } from "../types/webhook";
import { ContractSubmissionPayload } from "../types/contract";

export const WebhookService = {
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
    const url = `${this.ensureProtocol(baseUrl)}/api/contract`;
    return this.postRequest(url, data);
  },

  ensureProtocol(url: string): string {
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      return `https://${url}`;
    }
    return url;
  },

  /**
   * Método privado genérico para envio (interno)
   */
  async postRequest(
    url: string,
    data: any,
    retries = 2,
  ): Promise<WebhookResponse> {
    const TIMEOUT = 15000;

    for (let attempt = 0; attempt <= retries; attempt++) {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), TIMEOUT);

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Idempotency-Key": crypto.randomUUID(),
          },
          body: JSON.stringify(data),
          signal: controller.signal,
        });
        clearTimeout(timeoutId);

        if (!response.ok) {
          if (response.status >= 500 && attempt < retries) {
            await new Promise((r) => setTimeout(r, 1000 * (attempt + 1)));
            continue;
          }
          throw new Error(
            `Erro na requisição: ${response.status} - ${response.statusText}`,
          );
        }

        const responseData = await response
          .text()
          .then((text) => (text ? JSON.parse(text) : {}));

        return {
          success: true,
          data: responseData,
        };
      } catch (error) {
        clearTimeout(timeoutId);
        if (attempt < retries) {
          await new Promise((r) => setTimeout(r, 1000 * (attempt + 1)));
          continue;
        }
        console.error("WebhookService Error:", error);
        throw error;
      }
    }

    throw new Error("Falha na requisição após todas as tentativas.");
  },
};
