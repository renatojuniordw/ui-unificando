import { ROUTES } from "../routes";

export type Capability = {
  icon?: string;
  tag?: string;
  title: string;
  description: string;
};

// Fonte central do conteúdo de capacidades apresentado no site.
// Laboratory, Home e Solutions consomem estas coleções para evitar
// dados duplicados espalhados entre componentes.

export const LAB_CAPABILITIES: Capability[] = [
  {
    icon: "🧠",
    tag: "01 • IA APLICADA",
    title: "Inteligência Artificial",
    description:
      "Agentes, RAG, embeddings locais e LLMs aplicados a problemas reais — com privacidade por design e custo sob controle.",
  },
  {
    icon: "⚡",
    tag: "02 • UTILITÁRIOS",
    title: "Produtos Utilitários",
    description:
      "Ferramentas rápidas, gratuitas e sem complicação que resolvem dores específicas — de PDFs a buscas semânticas.",
  },
  {
    icon: "🔀",
    tag: "03 • AUTOMAÇÃO",
    title: "Automação & Integrações",
    description:
      "Fluxos inteligentes com n8n, APIs públicas e agentes que reduzem operação manual em semanas.",
  },
  {
    icon: "🌐",
    tag: "04 • WEB",
    title: "Desenvolvimento Web",
    description:
      "Sistemas e interfaces de alta performance — da arquitetura ao deploy, com foco em velocidade e manutenibilidade.",
  },
  {
    icon: "🔒",
    tag: "05 • PRIVACIDADE",
    title: "Dados & Privacidade",
    description:
      "LGPD por design, processamento efêmero e redação automática de dados sensíveis como premissa, não como extra.",
  },
  {
    icon: "🧪",
    tag: "06 • P&D",
    title: "Experimentação",
    description:
      "Ideias sendo testadas em produção: benchmarks, protótipos e hipóteses que só sobrevivem se resolverem algo de verdade.",
  },
];

export const HOME_CAPABILITIES: Capability[] = [
  {
    icon: "⚡",
    title: "Produtos Utilitários",
    description:
      "Ferramentas que resolvem problemas específicos — PDF, conversão, automação. Rápidas, gratuitas e sem complicação.",
  },
  {
    icon: "🧠",
    title: "IA Aplicada",
    description:
      "Agentes inteligentes, automações de processo, cálculos automatizados e sistemas que aprendem e evoluem com uso.",
  },
  {
    icon: "🛠",
    title: "Desenvolvimento Web",
    description:
      "Sistemas web, APIs, integrações e sites. Da prototipação ao deploy, com tecnologia de ponta.",
  },
];

export const LAB_PD_AREAS: Capability[] = [
  {
    tag: "P&D",
    title: "Busca semântica 100% local",
    description:
      "Embeddings no navegador, sem enviar dados para APIs externas. Já aplicado no Med Unificando.",
  },
  {
    tag: "P&D",
    title: "Robustez contra prompt injection",
    description:
      "Defesa em 3 camadas aplicada em produto em produção, com limites de custo e LGPD por design.",
  },
  {
    tag: "P&D",
    title: "MCP + fontes oficiais",
    description:
      "Integração com APIs públicas via Model Context Protocol com fallback automático — e o Med Unificando expõe seu próprio MCP Server (12 ferramentas read-only) para agentes de IA.",
  },
  {
    tag: "P&D",
    title: "Engenharia de custo de IA",
    description:
      "Tornar produtos com IA sustentáveis e gratuitos: controle de tokens, filas e modelos locais.",
  },
];

export type SolutionModule = {
  badge: string;
  title: string;
  description: string;
  to: string;
};

export const SOLUTIONS_MODULES: SolutionModule[] = [
  {
    badge: "01 • Inteligência",
    title: "IA Aplicada",
    description:
      "Agentes, RAG e embeddings locais resolvendo problemas reais — com privacidade por design e custo sob controle.",
    to: ROUTES.LAB,
  },
  {
    badge: "02 • Produto",
    title: "Utilitários & Sistemas",
    description:
      "Ferramentas rápidas e gratuitas que resolvem dores específicas — de PDFs a buscas semânticas em dados públicos.",
    to: ROUTES.LAB,
  },
];