import React from "react";
import { ContractData } from "@/types/contract";
import { Checkbox } from "../Checkbox";

interface IAStepProps {
  data: ContractData;
  setData: React.Dispatch<React.SetStateAction<ContractData>>;
  handleInputChange: (field: keyof ContractData, value: any) => void;
}

export const IAStep: React.FC<IAStepProps> = ({
  data,
  setData,
  handleInputChange,
}) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
        Configuração de Inteligência Artificial
      </h2>
      <p className="text-slate-400 mb-6">Onde a IA deve atuar?</p>

      <div className="space-y-4">
        <label className="block text-[15px] font-black text-slate-400 mb-3 uppercase tracking-widest">
          Canais de Atuação
        </label>
        <div className="grid md:grid-cols-2 gap-3">
          <Checkbox
            label="WhatsApp"
            checked={data.aiChannels.whatsapp}
            onChange={() =>
              setData((prev) => ({
                ...prev,
                aiChannels: {
                  ...prev.aiChannels,
                  whatsapp: !prev.aiChannels.whatsapp,
                },
              }))
            }
          />
          <Checkbox
            label="Instagram Direct"
            checked={data.aiChannels.instagram_direct}
            onChange={() =>
              setData((prev) => ({
                ...prev,
                aiChannels: {
                  ...prev.aiChannels,
                  instagram_direct: !prev.aiChannels.instagram_direct,
                },
              }))
            }
          />
          <Checkbox
            label="Instagram Comentários"
            checked={data.aiChannels.instagram_comments}
            onChange={() =>
              setData((prev) => ({
                ...prev,
                aiChannels: {
                  ...prev.aiChannels,
                  instagram_comments: !prev.aiChannels.instagram_comments,
                },
              }))
            }
          />
          <Checkbox
            label="Chat no Site"
            checked={data.aiChannels.site_chat}
            onChange={() =>
              setData((prev) => ({
                ...prev,
                aiChannels: {
                  ...prev.aiChannels,
                  site_chat: !prev.aiChannels.site_chat,
                },
              }))
            }
          />
        </div>
      </div>

      <div className="space-y-4 pt-4 border-t border-slate-100">
        <label className="block text-[15px] font-black text-slate-400 mb-3 uppercase tracking-widest">
          Extras & Integrações
        </label>
        <div className="grid md:grid-cols-2 gap-3">
          <Checkbox
            label="Interpretação de Áudio"
            checked={data.aiAddons.audio}
            onChange={() =>
              setData((prev) => ({
                ...prev,
                aiAddons: {
                  ...prev.aiAddons,
                  audio: !prev.aiAddons.audio,
                },
              }))
            }
          />
          <Checkbox
            label="Consulta API (CRM/ERP)"
            checked={data.aiAddons.api}
            onChange={() =>
              setData((prev) => ({
                ...prev,
                aiAddons: {
                  ...prev.aiAddons,
                  api: !prev.aiAddons.api,
                },
              }))
            }
          />
          <Checkbox
            label="Agendamento Google"
            checked={data.aiAddons.google}
            onChange={() =>
              setData((prev) => ({
                ...prev,
                aiAddons: {
                  ...prev.aiAddons,
                  google: !prev.aiAddons.google,
                },
              }))
            }
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="aiDetails"
          className="block text-[15px] font-black text-slate-400 mb-3 uppercase tracking-widest"
        >
          Observações sobre a IA <span className="text-red-500">*</span>
        </label>
        <textarea
          id="aiDetails"
          className="w-full bg-slate-50 border-2 border-slate-200 text-slate-900 px-4 py-3 rounded-2xl focus:border-indigo-500 focus:ring-0 outline-none font-medium transition-all placeholder:text-slate-400 min-h-[120px] resize-y"
          value={data.aiDetails}
          onChange={(e) => handleInputChange("aiDetails", e.target.value)}
          placeholder="Descreva brevemente o comportamento esperado da IA..."
        />
      </div>
    </div>
  );
};
