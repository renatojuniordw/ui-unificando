import { ROUTES } from "../routes";

export const CTA = {
  primary: {
    label: "Agendar Consultoria",
    to: ROUTES.CONTACT,
  },
  projects: {
    label: "Ver Projetos",
    to: "#projetos",
  },
  pricing: {
    label: "Estrutura de Serviços",
    to: ROUTES.PLANS,
  },
  solutions: {
    label: "Serviços Sob Consultoria",
    to: ROUTES.SERVICES,
  },
} as const;
