import { ROUTES } from "../routes";

export const CTA = {
  primary: {
    label: "Agendar diagnóstico gratuito",
    to: ROUTES.CONTACT,
  },
  pricing: {
    label: "Ver planos e preços",
    to: ROUTES.PLANS,
  },
  solutions: {
    label: "Ver soluções",
    to: ROUTES.SOLUTIONS,
  },
} as const;

