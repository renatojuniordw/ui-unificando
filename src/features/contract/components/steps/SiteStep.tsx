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
    </div>
  );
};
