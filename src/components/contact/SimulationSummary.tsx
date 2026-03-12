import React from "react";

export const SimulationSummary: React.FC = () => {
  return (
    <div className="p-6 bg-[#ccff00] border-4 border-slate-950 shadow-[4px_4px_0px_#000]">
      <div className="flex items-center gap-3 mb-4 border-b-2 border-slate-950 pb-2">
        <span className="w-4 h-4 rounded-none bg-slate-950 animate-pulse border-2 border-white shadow-[2px_2px_0px_#000]"></span>
        <p className="text-sm font-black uppercase tracking-widest text-slate-950">
          SIMULAÇÃO PRONTA
        </p>
      </div>
      <p className="text-sm text-slate-950 font-mono font-bold leading-relaxed uppercase">
        CONFIGURAÇÃO DO PLANO ANEXADA. NOSSA EQUIPE ESTÁ PREPARADA PARA VALIDAR SEU PACOTE E TIRAR DÚVIDAS AGORA MESMO VIA WHATSAPP.
      </p>
    </div>
  );
};
