import React from "react";
import { ServiceDetailsData } from "@/types/contract";
import { Counter } from "../Counter";

interface SiteStepProps {
  data: ServiceDetailsData;
  handleInputChange: (field: keyof ServiceDetailsData, value: any) => void;
}

export const SiteStep: React.FC<SiteStepProps> = ({
  data,
  handleInputChange,
}) => {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-3xl font-black text-slate-950 uppercase tracking-tighter leading-none mb-2">
          PRESENÇA DIGITAL
        </h2>
        <div className="flex items-center gap-2">
           <div className="bg-slate-950 text-white px-2 py-0.5 text-[10px] font-black uppercase">DaaS_HOSTING</div>
           <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest italic text-left">Quantidade de páginas estáticas hospedadas.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <Counter
          label="Número de Páginas"
          sublabel="LANDING PAGE CONTA COMO 01 UNIDADE"
          value={data.sitePages}
          onChange={(v) => handleInputChange("sitePages", v)}
          min={1}
        />
      </div>
    </div>
  );
};
