import React from "react";
import { ContractData } from "@/types/contract";
import { Counter } from "../Counter";

interface SiteStepProps {
  data: ContractData;
  handleInputChange: (field: keyof ContractData, value: any) => void;
}

export const SiteStep: React.FC<SiteStepProps> = ({
  data,
  handleInputChange,
}) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
        Site & Presença Online
      </h2>
      <p className="text-slate-500 mb-6">Estrutura do seu site.</p>

      <div className="grid md:grid-cols-2 gap-8">
        <Counter
          label="Número de Páginas"
          sublabel="Landing Page conta como 1"
          value={data.sitePages}
          onChange={(v) => handleInputChange("sitePages", v)}
          min={1}
        />
      </div>

      <div>
        <label
          htmlFor="siteDetails"
          className="block text-[15px] font-black text-slate-400 mb-3 uppercase tracking-widest"
        >
          Detalhes do Projeto <span className="text-red-500">*</span>
        </label>
        <textarea
          id="siteDetails"
          className="w-full bg-slate-50 border-2 border-slate-200 text-slate-900 px-4 py-3 rounded-2xl focus:border-indigo-500 focus:ring-0 outline-none font-medium transition-all placeholder:text-slate-400 min-h-[120px] resize-y"
          value={data.siteDetails}
          onChange={(e) => handleInputChange("siteDetails", e.target.value)}
          placeholder="Descreva as páginas (ex: Home, Sobre, Contato)..."
        />
      </div>
    </div>
  );
};
