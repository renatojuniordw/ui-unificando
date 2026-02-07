import { ValidationResult } from "./form";

export interface ContactWebhookData {
  name: string;
  whatsapp: string;
  challenge: string;
  planSelection?: any;
  turnstileToken: string;
  submittedAt: string;
  source: string;
}

export type ContactFormData = {
  name: string;
  whatsapp: string;
  challenge: string;
};

export interface ContactFormProps {
  planSelection?: any;
}
