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
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
        Configuração de Atendimento
      </h2>
      <p className="text-slate-500 mb-6">
        Defina a quantidade de canais e usuários para o seu time.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <Counter
          label="Inboxes (Canais)"
          sublabel="WhatsApp, Instagram, etc."
          value={data.inboxes}
          onChange={(v) => handleInputChange("inboxes", v)}
          min={1}
        />
        <Counter
          label="Atendentes (Usuários)"
          sublabel="Pessoas acessando o painel"
          value={data.attendants}
          onChange={(v) => handleInputChange("attendants", v)}
          min={1}
        />
      </div>
    </div>
  );
};
