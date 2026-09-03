import React from "react";
import { ProjectCard } from "./ProjectCard";
import { DEVTOOLS } from "../../../constants/devtools";

interface DevToolsSectionProps {
  id?: string;
  title: React.ReactNode;
  description: string;
  className?: string;
}

export const DevToolsSection: React.FC<DevToolsSectionProps> = ({
  id,
  title,
  description,
  className = "py-24 md:py-32 bg-white border-b-2 border-slate-950",
}) => {
  return (
    <section id={id} className={`${className} scroll-mt-24`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <span className="inline-block bg-slate-950 text-[#ccff00] font-black uppercase tracking-[0.2em] text-[10px] px-3 py-1 mb-6">
            DEVTOOLS
          </span>
          <h2 className="text-4xl md:text-7xl font-black text-slate-950 uppercase tracking-tighter leading-[0.9] mb-6">
            {title}
          </h2>
          <p className="text-slate-700 font-medium max-w-xl leading-relaxed border-l-4 border-[#ccff00] pl-4">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {DEVTOOLS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};