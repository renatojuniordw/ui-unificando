import React from "react";
import { ServiceDetailsData } from "@/types/contract";
import { Checkbox } from "../Checkbox";

interface IAStepProps {
  data: ServiceDetailsData;
  handleInputChange: (field: keyof ServiceDetailsData, value: any) => void;
}

export const IAStep: React.FC<IAStepProps> = ({ data, handleInputChange }) => {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl font-black text-slate-950 uppercase tracking-tighter leading-none mb-2">
          CÉREBRO ARTIFICIAL
        </h2>
        <div className="flex items-center gap-2">
           <div className="bg-slate-950 text-white px-2 py-0.5 text-[10px] font-black uppercase">LLM_DEPLOYMENT</div>
           <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest italic text-left">Configure os pontos de ativação da inteligência.</p>
        </div>
      </div>

      <div className="space-y-6">
        <label className="label-text">
          CANAIS DE ATUAÇÃO
        </label>
        <div className="grid md:grid-cols-2 gap-6">
          <Checkbox
            label="WhatsApp"
            checked={data.aiChannels.whatsapp}
            onChange={() =>
              handleInputChange("aiChannels", {
                ...data.aiChannels,
                whatsapp: !data.aiChannels.whatsapp,
              })
            }
          />
          <Checkbox
            label="Instagram Direct"
            checked={data.aiChannels.instagram_direct}
            onChange={() =>
              handleInputChange("aiChannels", {
                ...data.aiChannels,
                instagram_direct: !data.aiChannels.instagram_direct,
              })
            }
          />
          <Checkbox
            label="Instagram Comentários"
            checked={data.aiChannels.instagram_comments}
            onChange={() =>
              handleInputChange("aiChannels", {
                ...data.aiChannels,
                instagram_comments: !data.aiChannels.instagram_comments,
              })
            }
          />
          <Checkbox
            label="Chat no Site"
            checked={data.aiChannels.site_chat}
            onChange={() =>
              handleInputChange("aiChannels", {
                ...data.aiChannels,
                site_chat: !data.aiChannels.site_chat,
              })
            }
          />
        </div>
      </div>

      <div className="space-y-6 pt-10 border-t-4 border-slate-950">
        <label className="label-text">
          EXTRAS & INTEGRAÇÕES
        </label>
        <div className="grid md:grid-cols-2 gap-6">
          <Checkbox
            label="Interpretação de Áudio"
            checked={data.aiAddons.audio}
            onChange={() =>
              handleInputChange("aiAddons", {
                ...data.aiAddons,
                audio: !data.aiAddons.audio,
              })
            }
          />
          <Checkbox
            label="Consulta API (CRM/ERP)"
            checked={data.aiAddons.api}
            onChange={() =>
              handleInputChange("aiAddons", {
                ...data.aiAddons,
                api: !data.aiAddons.api,
              })
            }
          />
          <Checkbox
            label="Agendamento Google"
            checked={data.aiAddons.google}
            onChange={() =>
              handleInputChange("aiAddons", {
                ...data.aiAddons,
                google: !data.aiAddons.google,
              })
            }
          />
        </div>
      </div>
    </div>
  );
};
