import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "PDF Unificando",
    status: "No ar",
    statusColor: "bg-green-500",
    description: "Suíte de 16 ferramentas PDF gratuitas — comprimir, juntar, converter, dividir e mais.",
    link: "https://pdf.unificando.com.br",
    tags: ["Next.js", "PDF-lib", "IA"],
  },
  {
    title: "Med Unificando",
    status: "No ar",
    statusColor: "bg-green-500",
    description: "Consulta inteligente de medicamentos intercambiáveis da ANVISA com busca semântica por IA local.",
    link: "https://med.unificando.com.br",
    tags: ["Next.js", "IA", "ANVISA"],
  },
  {
    title: "Radar Unificando",
    status: "No ar",
    statusColor: "bg-green-500",
    description: "Busca de vagas em tempo real (Gupy + InHire, todas as áreas) com IA: score ATS, currículo adaptado e recomendação de cursos.",
    link: "https://radar.unificando.com.br",
    tags: ["Next.js", "MCP", "IA"],
  },
  {
    title: "Sistema de Afiliados",
    status: "Em desenvolvimento",
    statusColor: "bg-yellow-500",
    description: "Plataforma inteligente para gestão e monitoramento de afiliados com IA.",
    tags: ["React", "IA", "Em breve"],
  },
  {
    title: "Cálculo Previdenciário",
    status: "Em desenvolvimento",
    statusColor: "bg-yellow-500",
    description: "Automação de cálculos previdenciários com inteligência artificial.",
    tags: ["IA", "Python", "Em breve"],
  },
  {
    title: "Consultoria em IA & Dev",
    status: "Sob consulta",
    statusColor: "bg-blue-500",
    description: "Soluções personalizadas: sistemas, automações, sites e integrações sob medida.",
    tags: ["Sob medida", "IA", "Web"],
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projetos" className="py-24 md:py-32 bg-white border-b-2 border-slate-950 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <span className="inline-block bg-slate-950 text-[#ccff00] font-black uppercase tracking-[0.2em] text-[10px] px-3 py-1 mb-6">
            PROJETOS EM DESTAQUE
          </span>
          <h2 className="text-4xl md:text-7xl font-black text-slate-950 uppercase tracking-tighter leading-[0.9] mb-6">
            O QUE <span className="bg-[#ccff00] px-2 inline-block border-2 border-slate-950 shadow-[4px_4px_0px_#000]">CONSTRUÍMOS</span>
          </h2>
          <p className="text-slate-700 font-medium max-w-xl leading-relaxed border-l-4 border-[#ccff00] pl-4">
            Produtos reais, no ar. Cada projeto é uma demonstração do que sabemos fazer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-8 bg-white border-4 border-slate-950 shadow-[8px_8px_0px_#000] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_#000] transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className={`w-2.5 h-2.5 rounded-full ${project.statusColor} animate-pulse`} />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                  {project.status}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-slate-950 uppercase tracking-tighter mb-3">
                {project.title}
              </h3>

              <p className="text-sm font-mono font-bold text-slate-600 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-black uppercase tracking-widest bg-slate-950 text-white px-3 py-1 border border-slate-950"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-black uppercase tracking-widest text-slate-950 inline-flex items-center gap-2 group-hover:gap-3 transition-all border-b-2 border-slate-950 pb-1"
                >
                  Acessar {project.title} <span aria-hidden="true">→</span>
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
