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

// 1. Dados Pessoais e Seleção de Serviço
export interface PersonalData {
  name: string;
  document: string; // CPF/CNPJ
  representativeName?: string;
  representativeDocument?: string;
  email: string;
  whatsapp: string;
  services: ServiceSelection;
}

// 2. Endereço
export interface AddressData {
  zipCode: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
}

// 3. Detalhes dos Serviços
export interface ServiceDetailsData {
  // Atendimento
  inboxes: number;
  attendants: number;

  // IA
  aiChannels: ContractAiChannels;
  aiAddons: ContractAiAddons;

  // Site
  sitePages: number;
}

// 4. Cobrança
export interface BillingData {
  billingDueDay: string;
  billingSetupMethod: string;
  billingMethod: string;
}

// Interface Unificada (Composição)
export interface ContractData {
  personalData: PersonalData;
  addressData: AddressData;
  serviceDetailsData: ServiceDetailsData;
  billingData: BillingData;
}

export const INITIAL_CONTRACT_DATA: ContractData = {
  personalData: {
    name: "",
    document: "",
    representativeName: "",
    representativeDocument: "",
    email: "",
    whatsapp: "",
    services: {
      atendimento: false,
      ia: false,
      site: false,
    },
  },
  addressData: {
    zipCode: "",
    street: "",
    number: "",
    complement: "",
    neighborhood: "",
    city: "",
    state: "",
  },
  serviceDetailsData: {
    inboxes: 1,
    attendants: 1,
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
    sitePages: 1,
  },
  billingData: {
    billingDueDay: "05",
    billingSetupMethod: "pix",
    billingMethod: "pix",
  },
};

export interface ContractSubmissionPayload extends ContractData {
  pricing: {
    setup: number;
    monthly: number;
  };
  turnstileToken: string;
  submittedAt: string;
  source: string;
}
