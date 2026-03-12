import React from "react";

export const Checkbox = ({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) => (
  <label
    className={`flex items-center gap-4 p-5 border-4 cursor-pointer transition-all relative ${checked ? "border-slate-950 bg-[#ccff00] shadow-[6px_6px_0px_#000] -translate-y-1" : "border-slate-950 bg-white hover:bg-slate-50 shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#000]"}`}
  >
    <div
      className={`w-6 h-6 border-4 flex items-center justify-center transition-colors ${checked ? "bg-slate-950 border-slate-950" : "bg-white border-slate-950"}`}
    >
      {checked && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4 text-[#ccff00]"
        >
          <path
            fillRule="evenodd"
            d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </div>
    <span
      className={`font-black uppercase tracking-tighter text-sm ${checked ? "text-slate-950" : "text-slate-600"}`}
    >
      {label}
    </span>
    <input
      type="checkbox"
      className="hidden"
      checked={checked}
      onChange={onChange}
    />
  </label>
);
