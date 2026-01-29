export interface ContactWebhookData {
  name: string;
  whatsapp: string;
  challenge: string;
  planSelection?: any;
  turnstileToken: string;
  submittedAt: string;
  source: string;
}
