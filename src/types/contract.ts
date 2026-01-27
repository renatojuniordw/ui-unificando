export interface ServiceSelection {
  atendimento: boolean;
  ia: boolean;
  site: boolean;
}

export interface ContractAiChannels {
  whatsapp: boolean;
  instagram_direct: boolean;
  instagram_comments: boolean;
  site_chat: boolean;
}

export interface ContractAiAddons {
  audio: boolean;
  api: boolean;
  google: boolean;
}

export interface ContractData {
  // Step 1
  name: string;
  document: string; // CPF/CNPJ
  email: string;
  whatsapp: string;
  services: ServiceSelection;

  // Atendimento
  inboxes: number;
  attendants: number;
  inboxDetails: string;

  // IA
  aiChannels: ContractAiChannels;
  aiAddons: ContractAiAddons;
  aiDetails: string;

  // Site
  sitePages: number;
  siteDetails: string;
}

export const INITIAL_CONTRACT_DATA: ContractData = {
  name: "",
  document: "",
  email: "",
  whatsapp: "",
  services: {
    atendimento: false,
    ia: false,
    site: false,
  },
  inboxes: 1,
  attendants: 1,
  inboxDetails: "",
  aiChannels: {
    whatsapp: false,
    instagram_direct: false,
    instagram_comments: false,
    site_chat: false,
  },
  aiAddons: {
    audio: false,
    api: false,
    google: false,
  },
  aiDetails: "",
  sitePages: 1,
  siteDetails: "",
};
