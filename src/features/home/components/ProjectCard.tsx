import React from "react";
import { motion } from "framer-motion";

export type ProjectCardData = {
  title: string;
  status: string;
  statusColor: string;
  description: string;
  tags: string[];
  link?: string;
};

interface ProjectCardProps {
  project: ProjectCardData;
  index: number;
  ctaLabel?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, ctaLabel }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
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
          {ctaLabel ?? `Acessar ${project.title}`} <span aria-hidden="true">→</span>
        </a>
      )}
    </motion.div>
  );
};