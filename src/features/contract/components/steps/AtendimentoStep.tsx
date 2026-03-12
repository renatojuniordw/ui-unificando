import React from "react";
import { Counter } from "../Counter";
import { ServiceDetailsData } from "@/types/contract";

interface AtendimentoStepProps {
  data: ServiceDetailsData;
  handleInputChange: (field: keyof ServiceDetailsData, value: any) => void;
}

export const AtendimentoStep: React.FC<AtendimentoStepProps> = ({
  data,
  handleInputChange,
}) => {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl font-black text-slate-950 uppercase tracking-tighter leading-none mb-2">
          ESTRUTURA DE ATENDIMENTO
        </h2>
        <div className="flex items-center gap-2">
           <div className="bg-slate-950 text-white px-2 py-0.5 text-[10px] font-black uppercase">PAINEL_MULTI_AGENTE</div>
           <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest italic text-left">Defina a volumetria de canais e operadores.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <Counter
          label="Inboxes (Canais)"
          sublabel="WHATSAPP, INSTAGRAM, ETC."
          value={data.inboxes}
          onChange={(v) => handleInputChange("inboxes", v)}
          min={1}
        />
        <Counter
          label="Atendentes (Usuários)"
          sublabel="PESSOAS ACESSANDO O PAINEL"
          value={data.attendants}
          onChange={(v) => handleInputChange("attendants", v)}
          min={1}
        />
      </div>
    </div>
  );
};
