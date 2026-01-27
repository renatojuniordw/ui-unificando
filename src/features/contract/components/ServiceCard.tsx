import React from "react";

export const ServiceCard = ({
  title,
  icon,
  selected,
  onClick,
}: {
  title: string;
  icon: string;
  selected: boolean;
  onClick: () => void;
}) => (
  <div
    onClick={onClick}
    className={`cursor-pointer p-6 rounded-2xl border-2 transition-all duration-200 flex flex-col items-center justify-center text-center gap-3 relative overflow-hidden group
            ${
              selected
                ? "border-indigo-500 bg-indigo-50/50"
                : "border-slate-100 bg-white hover:border-indigo-200 hover:shadow-lg"
            }`}
  >
    <div
      className={`text-4xl transition-transform duration-300 ${selected ? "scale-110" : "group-hover:scale-110"}`}
    >
      {icon}
    </div>
    <div
      className={`font-bold transition-colors ${selected ? "text-indigo-600" : "text-slate-600"}`}
    >
      {title}
    </div>
    {selected && (
      <div className="absolute top-3 right-3 text-indigo-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    )}
  </div>
);
