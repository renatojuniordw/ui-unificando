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
    className={`cursor-pointer p-8 border-4 transition-all duration-200 flex flex-col items-center justify-center text-center gap-4 relative overflow-hidden group
            ${
              selected
                ? "border-slate-950 bg-[#ccff00] shadow-[8px_8px_0px_#000] -translate-y-1"
                : "border-slate-950 bg-white hover:bg-slate-50 hover:shadow-[4px_4px_0px_#000]"
            }`}
  >
    <div
      className={`text-5xl transition-transform duration-300 ${selected ? "scale-110" : "group-hover:scale-110"}`}
    >
      {icon}
    </div>
    <div
      className={`font-black uppercase tracking-tighter text-sm transition-colors ${selected ? "text-slate-950" : "text-slate-600"}`}
    >
      {title}
    </div>
    {selected && (
      <div className="absolute top-2 right-2 bg-slate-950 text-[#ccff00] p-1 border-2 border-slate-950 leading-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4"
        >
          <path
            fillRule="evenodd"
            d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    )}
  </div>
);
