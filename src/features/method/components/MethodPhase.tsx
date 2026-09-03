import React from "react";

interface MethodPhaseProps {
  phase: string;
  title: string;
  subtitle: string;
  description: string;
  items: string[];
  icon: string;
  side: "left" | "right";
  variant: "lime" | "white";
  example: string;
  iconClassName?: string;
}

export const MethodPhase: React.FC<MethodPhaseProps> = ({
  phase,
  title,
  subtitle,
  description,
  items,
  icon,
  side,
  variant,
  example,
  iconClassName,
}) => {
  const isLime = variant === "lime";
  const isLeft = side === "left";

  const defaultIconClassName = isLime
    ? "bg-slate-950 text-white shadow-[8px_8px_0px_#ccff00]"
    : "bg-[#ccff00] text-slate-950 shadow-[8px_8px_0px_#000]";

  return (
    <div className="grid md:grid-cols-2 gap-12 items-center relative">
      <div className={isLeft ? "md:pr-12 md:text-right" : "md:pl-12 order-2 md:text-left"}>
        <div
          className={`inline-block border-2 border-slate-950 px-3 py-1 text-xs font-black uppercase tracking-widest mb-4 shadow-[4px_4px_0px_#000] ${
            isLime ? "bg-white text-slate-950" : "bg-slate-950 text-[#ccff00]"
          }`}
        >
          {phase}
        </div>
        <h2 className="text-4xl lg:text-5xl font-black text-slate-950 mb-6 uppercase tracking-tighter leading-[0.9]">
          {title}
        </h2>
        <div
          className={`p-8 border-4 border-slate-950 mb-8 lg:max-w-md shadow-[8px_8px_0px_#000] ${
            isLime ? "bg-[#ccff00] inline-block md:ml-auto text-left" : "bg-white md:mr-auto text-left"
          }`}
        >
          <p className="text-sm font-black text-slate-950 mb-3 uppercase tracking-widest">
            {subtitle}
          </p>
          <p className="text-sm md:text-base text-slate-950 font-mono font-bold leading-relaxed">
            {description}
          </p>
        </div>

        <div className="space-y-4 mb-8">
          <span
            className={`text-xs font-black uppercase tracking-widest inline-block px-2 py-1 border-2 border-slate-950 ${
              isLime ? "text-slate-950 bg-[#ccff00]" : "text-white bg-slate-950"
            }`}
          >
            O QUE FAZEMOS:
          </span>
          <ul
            className={`space-y-3 text-sm md:text-base font-mono font-bold text-slate-950 ${
              isLeft ? "md:flex md:flex-col md:items-end" : ""
            }`}
          >
            {items.map((item) => (
              <li key={item} className={`flex gap-4 items-center ${isLeft ? "md:flex-row-reverse" : ""}`}>
                <span
                  className={`border-2 border-slate-950 w-6 h-6 flex items-center justify-center font-black ${
                    isLime ? "text-slate-950 bg-[#ccff00]" : "text-white bg-slate-950"
                  }`}
                >
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={`border-2 border-slate-950 p-4 bg-slate-50 lg:max-w-md ${isLeft ? "md:ml-auto" : ""}`}>
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 block mb-1">
            NA PRÁTICA
          </span>
          <p className="text-xs font-mono font-bold text-slate-950 leading-relaxed">{example}</p>
        </div>
      </div>

      <div className={`hidden md:flex ${isLeft ? "justify-start pl-12 z-10" : "justify-end pr-12 order-1 z-10"}`}>
        <div
          className={`w-24 h-24 flex items-center justify-center text-4xl border-4 border-slate-950 ${
            iconClassName ?? defaultIconClassName
          }`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};