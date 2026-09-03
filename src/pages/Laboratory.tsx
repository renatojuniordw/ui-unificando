import React from "react";
import { motion } from "framer-motion";
import { SEO } from "../components/common/SEO";
import { PageTransition } from "../components/common/PageTransition";
import { CtaButton } from "../components/common/CtaButton";
import { ROUTES } from "../routes";
import { DevToolsSection } from "../features/home/components/DevToolsSection";

const capabilities = [
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

const stack = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Tailwind",
  "PostgreSQL",
  "Redis",
  "Prisma",
  "MCP",
  "n8n",
  "Vercel AI SDK",
  "ONNX / Transformers",
  "Docker",
  "AWS",
];

const areas = [
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
      "Integração com APIs públicas via Model Context Protocol, com fallback automático e busca ao vivo.",
  },
  {
    tag: "P&D",
    title: "Engenharia de custo de IA",
    description:
      "Tornar produtos com IA sustentáveis e gratuitos: controle de tokens, filas e modelos locais.",
  },
];

export const Laboratory: React.FC = () => {
  return (
    <PageTransition>
      <SEO
        title="Laboratório | Unificando — Projetos Autorais & IA"
        description="O que o laboratório sabe fazer: IA aplicada, produtos utilitários, automações e desenvolvimento web — projetos autorais da ideia ao deploy."
        canonical={ROUTES.LAB}
        keywords="laboratório digital, projetos autorais, IA aplicada, produtos utilitários, automação com IA, desenvolvimento web, desenvolvimento de produto, P&D, Recife"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Laboratório Unificando",
          description:
            "Capacidades do laboratório de projetos autorais e IA: produtos utilitários, sistemas com inteligência artificial e desenvolvimento web.",
        }}
      />

      {/* Header */}
      <section className="py-24 md:py-32 bg-slate-950 text-white border-b-8 border-[#ccff00] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
          }}
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <span className="inline-block bg-[#ccff00] text-slate-950 font-black uppercase tracking-[0.2em] text-[10px] px-3 py-1 border-2 border-slate-950 shadow-[4px_4px_0px_#fff] mb-8">
            O LABORATÓRIO
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter uppercase leading-[0.9]">
            O QUE SABEMOS
            <br />
            <span className="text-slate-950 bg-[#ccff00] px-3 inline-block -rotate-1 border-4 border-slate-950 shadow-[8px_8px_0px_#fff]">
              FAZER.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed mb-12">
            Cada produto no ar é uma demonstração prática. Aqui, o que
            construímos nasce de uma necessidade real — e o que não resolve
            problema, não entra.
          </p>
          <CtaButton label="FALAR SOBRE UM PROJETO" />
        </div>
      </section>

      {/* Capacidades */}
      <section className="py-24 md:py-32 bg-white border-b-8 border-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-16">
            <span className="inline-block bg-slate-950 text-[#ccff00] font-black uppercase tracking-[0.2em] text-[10px] px-3 py-1 mb-6">
              CAPACIDADES
            </span>
            <h2 className="text-4xl md:text-7xl font-black text-slate-950 uppercase tracking-tighter leading-[0.9] mb-6">
              ÁREAS DE
              <br />
              ATUAÇÃO
            </h2>
            <p className="text-slate-700 font-medium max-w-xl leading-relaxed border-l-4 border-[#ccff00] pl-4">
              O repertório do laboratório — o que sustentamos de ponta a ponta,
              da prototipação ao deploy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-2 border-slate-950 bg-slate-950">
            {capabilities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 3) * 0.1 }}
                className="group relative p-8 md:p-10 bg-white border-2 border-slate-950 hover:bg-slate-950 hover:text-white transition-colors duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="inline-block bg-slate-950 text-white text-[10px] font-black px-3 py-1 uppercase tracking-widest mb-6 group-hover:bg-[#ccff00] group-hover:text-slate-950 transition-colors">
                    {item.tag}
                  </div>
                  <div className="text-4xl mb-6">{item.icon}</div>
                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter mb-4">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed font-mono group-hover:text-slate-300 transition-colors">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* P&D Areas */}
      <section className="py-24 md:py-32 bg-[#ccff00] text-slate-950 border-b-8 border-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-16">
            <span className="inline-block bg-slate-950 text-[#ccff00] font-black uppercase tracking-[0.2em] text-[10px] px-3 py-1 mb-6">
              P&D
            </span>
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-6">
              FRENTES DE
              <br />
              PESQUISA
            </h2>
            <p className="text-slate-950 font-medium max-w-xl leading-relaxed border-l-4 border-slate-950 pl-4">
              O que estamos explorando e testando — parte vira produto, parte
              vira aprendizado documentado.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {areas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border-4 border-slate-950 p-8 shadow-[8px_8px_0px_#000] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_#000] transition-all"
              >
                <div className="inline-block bg-slate-950 text-[#ccff00] font-black uppercase tracking-widest text-[10px] px-3 py-1 border-2 border-slate-950 mb-4">
                  {area.tag}
                </div>
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter mb-3">
                  {area.title}
                </h3>
                <p className="text-sm font-mono font-bold leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DevTools / Open Source */}
      <DevToolsSection
        title={
          <>
            P&D PUBLICADO
            <br />
            NO NPM
          </>
        }
        description="Ferramentas de engenharia de prompt abertas e em uso — agnósticas de stack e de LLM."
        className="py-24 bg-white border-b-8 border-slate-950"
      />

      {/* CTA */}
      <section className="py-24 md:py-32 bg-slate-950 text-white text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
          }}
        />
        <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
            TEM UMA IDEIA?
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed mb-12">
            Projetos autorais, ferramentas utilitárias ou sistemas com IA — toda
            ideia começa com uma conversa.
          </p>
          <CtaButton label="FALAR SOBRE UM PROJETO" size="lg" />
        </div>
      </section>
    </PageTransition>
  );
};
