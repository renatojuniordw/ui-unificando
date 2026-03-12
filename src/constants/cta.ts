import { ROUTES } from "../routes";

export const CTA = {
  primary: {
    label: "Falar com Especialista",
    to: "https://wa.me/5581995557302?text=Ol%C3%A1%2C%20quero%20transformar%20meu%20atendimento%20num%20ativo%20de%20escala.%20Podemos%20fazer%20um%20diagn%C3%B3stico%3F",
  },
  pricing: {
    label: "Ver planos e preços",
    to: ROUTES.PLANS,
  },
  solutions: {
    label: "Ver soluções",
    to: ROUTES.SERVICES,
  },
} as const;

