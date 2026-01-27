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
  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center justify-between">
    <div>
      <div className="font-bold text-slate-700">{label}</div>
      {sublabel && <div className="text-xs text-slate-400">{sublabel}</div>}
    </div>
    <div className="flex items-center gap-3 bg-white rounded-lg p-1 border border-slate-200">
      <button
        onClick={() => onChange(Math.max(min, value - 1))}
        className="w-8 h-8 flex items-center justify-center text-slate-500 hover:bg-slate-100 rounded-md transition-colors"
        disabled={value <= min}
      >
        -
      </button>
      <span className="w-8 text-center font-bold text-slate-800">{value}</span>
      <button
        onClick={() => onChange(value + 1)}
        className="w-8 h-8 flex items-center justify-center text-indigo-600 hover:bg-indigo-50 rounded-md transition-colors"
      >
        +
      </button>
    </div>
  </div>
);
