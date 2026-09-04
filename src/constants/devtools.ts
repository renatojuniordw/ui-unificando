import { ProjectCardData } from "../features/home/components/ProjectCard";

export const DEVTOOLS: ProjectCardData[] = [
  {
    title: "prompts-unificando",
    status: "No ar",
    statusColor: "bg-green-500",
    description:
      "Biblioteca de prompts padronizados para auditoria, refatoração, testes, segurança/LGPD e SEO. Agnóstica de stack e de LLM — via npx, sem instalação.",
    link: "https://www.npmjs.com/package/prompts-unificando",
    tags: ["npm", "CLI", "Prompt Engineering"],
  },
  {
    title: "promptcraft-unificando",
    status: "No ar",
    statusColor: "bg-green-500",
    description:
      "CLI que transforma ideias cruas em prompts de engenharia, com pipe direto para Claude Code e Gemini CLI.",
    link: "https://www.npmjs.com/package/promptcraft-unificando",
    tags: ["npm", "CLI", "IA"],
  },
];

export const OPEN_SERVERS: ProjectCardData[] = [
  {
    title: "MCP Med Unificando",
    status: "No ar",
    statusColor: "bg-green-500",
    description:
      "Servidor MCP em produção: a base ANVISA/CMED exposta como 12 ferramentas read-only para agentes de IA (Claude, Cursor, opencode).",
    link: "https://med.unificando.com.br/mcp",
    tags: ["MCP", "Streamable HTTP", "Read-only"],
  },
];