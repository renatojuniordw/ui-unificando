import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../routes";

export const ProductivityCta: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-[#ccff00] text-slate-950 border-b-4 border-slate-950 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-black mb-12 uppercase tracking-tighter leading-[0.9]">
          PRONTO PARA <br/>
          <span className="text-white bg-slate-950 px-2 inline-block rotate-1 border-2 border-slate-950 shadow-[6px_6px_0px_#fff]">GANHAR TEMPO?</span>
        </h2>
        <button
          onClick={() => navigate(ROUTES.CONTACT)}
          className="bg-slate-950 text-white border-4 border-slate-950 px-12 py-6 text-xl font-black hover:bg-white hover:text-slate-950 transition-colors shadow-[8px_8px_0px_#000] hover:shadow-[8px_8px_0px_#000] uppercase tracking-widest block mx-auto w-full md:w-auto"
        >
          Agendar Consultoria
        </button>
      </div>
    </section>
  );
};
