export interface ServiceSelection {
  atendimento: boolean;
  ia: boolean;
  site: boolean;
  hospedagem: boolean;
}

export interface ContactWebhookData {
  name: string;
  whatsapp: string;
  challenge: string;
  planSelection?: any;
  submittedAt: string;
  source: string;
}

export type ContactFormData = {
  name: string;
  whatsapp?: string;
  challenge: string;
};

export interface ContactFormProps {
  planSelection?: any;
}
