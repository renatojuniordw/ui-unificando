import React from "react";

export const Counter = ({
  label,
  sublabel,
  value,
  onChange,
  min,
}: {
  label: string;
  sublabel?: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
}) => (
  <div className="bg-white p-6 border-4 border-slate-950 shadow-[6px_6px_0px_#ccff00] flex items-center justify-between">
    <div>
      <div className="font-black uppercase tracking-tight text-slate-900 leading-none mb-1">
        {label}
      </div>
      {sublabel && (
        <div className="text-[10px] font-black uppercase text-slate-400 tracking-widest italic">
          {sublabel}
        </div>
      )}
    </div>
    <div className="flex items-center gap-2 bg-slate-100 p-1 border-2 border-slate-950">
      <button
        onClick={() => onChange(Math.max(min, value - 1))}
        className="w-10 h-10 flex items-center justify-center text-slate-950 hover:bg-[#ccff00] font-black text-xl border-2 border-slate-950 transition-colors"
        disabled={value <= min}
      >
        -
      </button>
      <span className="w-12 text-center font-black font-mono text-xl text-slate-950">
        {value.toString().padStart(2, "0")}
      </span>
      <button
        onClick={() => onChange(value + 1)}
        className="w-10 h-10 flex items-center justify-center text-slate-950 bg-[#ccff00] hover:bg-slate-950 hover:text-[#ccff00] font-black text-xl border-2 border-slate-950 transition-colors"
      >
        +
      </button>
    </div>
  </div>
);
