export interface WebhookResponse {
  success: boolean;
  message?: string;
  data?: any;
}

export const WebhookService = {
  /**
   * Envia dados para um endpoint do Webhook (n8n)
   * @param endpoint O caminho do endpoint (ex: '/api/contract' ou '/api/contact')
   * @param data O objeto de dados a ser enviado
   */
  async sendData(url: string, data: any): Promise<WebhookResponse> {
    if (!url) {
      console.error("URL do Webhook não definida.");
      throw new Error("Erro de configuração: URL do Webhook não definida.");
    }

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
      throw error; // Repassa o erro para ser tratado no componente (ex: exibir Modal)
    }
  },
};
