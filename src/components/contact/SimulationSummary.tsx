import React from "react";

export const SimulationSummary: React.FC = () => {
  return (
    <div className="p-5 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl">
      <div className="flex items-center gap-3 mb-2">
        <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
        <p className="text-[10px] font-black uppercase tracking-widest text-indigo-300">
          Simulação Anexada
        </p>
      </div>
      <p className="text-xs text-indigo-100 font-medium leading-relaxed">
        Os itens que você selecionou serão enviados na mensagem para focarmos na
        sua dúvida.
      </p>
    </div>
  );
};
