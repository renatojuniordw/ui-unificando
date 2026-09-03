import React from "react";
import { ProjectCard, ProjectCardData } from "./ProjectCard";

const roadmap: ProjectCardData[] = [
  {
    title: "Extensão Chrome — Radar",
    status: "Beta",
    statusColor: "bg-[#ccff00]",
    description: "Side panel para buscar vagas e acionar o assistente de carreira com IA sem sair do navegador.",
    tags: ["Chrome MV3", "IA"],
  },
  {
    title: "Sistema de Afiliados",
    status: "Em validação",
    statusColor: "bg-yellow-500",
    description: "Plataforma inteligente para gestão e monitoramento de afiliados com IA.",
    tags: ["React", "IA"],
  },
  {
    title: "Cálculo Previdenciário",
    status: "Ideia",
    statusColor: "bg-blue-500",
    description: "Automação de cálculos previdenciários com inteligência artificial.",
    tags: ["IA", "Python"],
  },
  {
    title: "IA 100% Local",
    status: "Em validação",
    statusColor: "bg-yellow-500",
    description: "Novos casos de uso para embeddings e modelos rodando no navegador, sem depender de APIs externas.",
    tags: ["ONNX", "P&D"],
  },
];

export const RoadmapSection: React.FC = () => {
  return (
    <section id="roadmap" className="py-24 md:py-32 bg-slate-950 text-white border-b-2 border-white/10 scroll-mt-24 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: 'radial-gradient(#ccff00 1px, transparent 1px)', backgroundSize: '48px 48px' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-16">
          <span className="inline-block bg-[#ccff00] text-slate-950 font-black uppercase tracking-[0.2em] text-[10px] px-3 py-1 mb-6">
            NO BANCADA
          </span>
          <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-6">
            EM <span className="bg-[#ccff00] text-slate-950 px-2 inline-block border-2 border-slate-950 shadow-[4px_4px_0px_#fff]">EXPERIMENTAÇÃO</span>
          </h2>
          <p className="text-slate-400 font-medium max-w-xl leading-relaxed border-l-4 border-[#ccff00] pl-4">
            O que está sendo testado no laboratório agora — hipóteses em
            validação, protótipos e próximos experimentos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {roadmap.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};