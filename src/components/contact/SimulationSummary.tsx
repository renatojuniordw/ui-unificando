import React from "react";

export const SimulationSummary: React.FC = () => {
  return (
    <div className="p-6 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl">
      <div className="flex items-center gap-3 mb-3">
        <span className="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-pulse"></span>
        <p className="text-xs font-black uppercase tracking-widest text-indigo-300">
          Simulação Pronta
        </p>
      </div>
      <p className="text-sm text-indigo-100 font-medium leading-relaxed">
        Configuração anexada. Nossa equipe técnica está preparada para validar
        seu plano e tirar suas dúvidas agora mesmo via WhatsApp.
      </p>
    </div>
  );
};
