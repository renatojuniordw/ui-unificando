import React from "react";
import { ProjectCard, ProjectCardData } from "./ProjectCard";

const projects: ProjectCardData[] = [
  {
    title: "PDF Unificando",
    status: "No ar",
    statusColor: "bg-green-500",
    description:
      "Suíte de 16 ferramentas PDF gratuitas — comprimir, juntar, converter, dividir e mais.",
    link: "https://pdf.unificando.com.br",
    tags: ["Next.js", "PDF-lib"],
  },
  {
    title: "Med Unificando",
    status: "No ar",
    statusColor: "bg-green-500",
    description:
      "Consulta inteligente de medicamentos intercambiáveis da ANVISA com busca semântica por IA local — e MCP Server para agentes de IA.",
    link: "https://med.unificando.com.br",
    tags: ["Next.js", "IA", "ANVISA", "MCP"],
  },
  {
    title: "Radar Unificando",
    status: "No ar",
    statusColor: "bg-green-500",
    description:
      "Busca de vagas em tempo real (Gupy + InHire, todas as áreas) com IA: score ATS, currículo adaptado e recomendação de cursos.",
    link: "https://radar.unificando.com.br",
    tags: ["Next.js", "MCP", "IA"],
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projetos"
      className="py-24 md:py-32 bg-white border-b-2 border-slate-950 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <span className="inline-block bg-slate-950 text-[#ccff00] font-black uppercase tracking-[0.2em] text-[10px] px-3 py-1 mb-6">
            PROJETOS EM DESTAQUE
          </span>
          <h2 className="text-4xl md:text-7xl font-black text-slate-950 uppercase tracking-tighter leading-[0.9] mb-6">
            O QUE{" "}
            <span className="bg-[#ccff00] px-2 inline-block border-2 border-slate-950 shadow-[4px_4px_0px_#000]">
              CONSTRUÍMOS
            </span>
          </h2>
          <p className="text-slate-700 font-medium max-w-xl leading-relaxed border-l-4 border-[#ccff00] pl-4">
            Produtos reais, no ar. Cada projeto é uma demonstração do que
            sabemos fazer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
