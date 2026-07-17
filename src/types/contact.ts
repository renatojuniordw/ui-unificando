export interface ServiceSelection {
  ia: boolean;
  site: boolean;
}

export interface ContactWebhookData {
  name: string;
  whatsapp: string;
  challenge: string;
  submittedAt: string;
  source: string;
}

export type ContactFormData = {
  name: string;
  whatsapp?: string;
  challenge: string;
};
