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
      <label className="block text-[10px] font-black text-slate-400 mb-3 uppercase tracking-widest">
        Sobre quais serviços você tem dúvida?{" "}
        <span className="text-indigo-500">*</span>
      </label>
      <div className="space-y-3">
        {options.map((service) => (
          <label
            key={service.id}
            className={`flex items-start gap-4 cursor-pointer p-4 rounded-2xl border-2 transition-all ${
              selectedServices[service.id]
                ? "bg-indigo-500/10 border-indigo-500/30"
                : "bg-white/5 border-white/10 hover:border-white/20"
            } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            <div
              className={`mt-0.5 w-5 h-5 rounded-md flex items-center justify-center transition-all ${
                selectedServices[service.id]
                  ? "bg-indigo-600"
                  : "bg-white/5 border border-white/10"
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
                <svg
                  className="w-3 h-3 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-lg">{service.emoji}</span>
                <span
                  className={`text-sm font-bold ${
                    selectedServices[service.id]
                      ? "text-indigo-100"
                      : "text-white"
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
