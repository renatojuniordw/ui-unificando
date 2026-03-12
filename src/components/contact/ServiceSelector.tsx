import React from "react";
import { ServiceSelection } from "../../types/contact";

interface ServiceOption {
  id: keyof ServiceSelection;
  label: string;
  emoji: string;
}

interface ServiceSelectorProps {
  selectedServices: ServiceSelection;
  onChange: (id: keyof ServiceSelection, checked: boolean) => void;
  options: ServiceOption[];
  disabled?: boolean;
}

export const ServiceSelector: React.FC<ServiceSelectorProps> = ({
  selectedServices,
  onChange,
  options,
  disabled,
}) => {
  return (
    <div>
      <label className="inline-block bg-slate-950 text-white text-[10px] font-black mb-4 uppercase tracking-widest px-2 py-1 border-2 border-slate-950 shadow-[2px_2px_0px_#ccff00]">
        SOBRE QUAIS SERVIÇOS VOCÊ TEM DÚVIDA?{" "}
        <span className="text-red-500">*</span>
      </label>
      <div className="space-y-4">
        {options.map((service) => (
          <label
            key={service.id}
            className={`flex items-start gap-4 cursor-pointer p-4 border-4 transition-all ${
              selectedServices[service.id]
                ? "bg-[#ccff00] border-slate-950 shadow-[4px_4px_0px_#000]"
                : "bg-white border-slate-950 hover:bg-slate-50 hover:-translate-y-1 hover:shadow-[4px_4px_0px_#000]"
            } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            <div
              className={`mt-0.5 w-6 h-6 border-4 flex items-center justify-center transition-all shrink-0 ${
                selectedServices[service.id]
                  ? "bg-slate-950 border-slate-950 text-[#ccff00]"
                  : "bg-white border-slate-950"
              }`}
            >
              <input
                type="checkbox"
                checked={selectedServices[service.id]}
                onChange={(e) => onChange(service.id, e.target.checked)}
                disabled={disabled}
                className="hidden"
              />
              {selectedServices[service.id] && (
                <span className="font-black text-xs">✓</span>
              )}
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-3">
                <span className="text-xl bg-white border-2 border-slate-950 w-8 h-8 flex items-center justify-center shadow-[2px_2px_0px_#000] shrink-0">
                  {service.emoji}
                </span>
                <span
                  className={`text-sm md:text-base font-black uppercase tracking-tighter ${
                    selectedServices[service.id]
                      ? "text-slate-950"
                      : "text-slate-950"
                  }`}
                >
                  {service.label}
                </span>
              </div>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};
