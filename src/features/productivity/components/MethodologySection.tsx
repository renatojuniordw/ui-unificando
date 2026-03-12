import React from "react";

export const MethodologySection: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b-4 border-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <span className="inline-block bg-slate-950 text-white font-black uppercase tracking-[0.2em] text-[10px] px-3 py-1 mb-6 border-2 border-slate-950 shadow-[4px_4px_0px_#ccff00]">
          METODOLOGIA UNIFICANDO
        </span>
        <h2 className="text-4xl md:text-6xl font-black text-slate-950 mb-12 max-w-4xl mx-auto tracking-tighter uppercase leading-[0.9]">
          SOLUÇÕES <br/>
          <span className="bg-[#ccff00] inline-block px-2 -rotate-1 border-2 border-slate-950 shadow-[6px_6px_0px_#000] mt-2">PERSONALIZADAS REAIS.</span>
        </h2>
        <p className="text-lg text-slate-950 max-w-2xl mx-auto mb-16 font-mono font-bold">
          Aqui não existe "pacote mágico". Antes de qualquer implementação,
          fazemos um diagnóstico para entender seu modelo, fluxo, volume e
          objetivos.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="p-8 bg-white border-4 border-slate-950 hover:bg-[#ccff00] transition-colors shadow-[8px_8px_0px_#000] group">
            <span className="text-5xl font-black mb-4 block text-slate-950 drop-shadow-[2px_2px_0px_#fff] group-hover:drop-shadow-[2px_2px_0px_#000]">1.</span>
            <h3 className="font-black uppercase tracking-widest text-lg mb-4 text-slate-950">
              Atendimento Organizado
            </h3>
            <p className="text-slate-950 font-mono font-bold leading-relaxed">
              Estruturamos seus canais e equipe para operarem com eficiência máxima e sem ruídos.
            </p>
          </div>
          <div className="p-8 bg-slate-950 text-white border-4 border-slate-950 hover:bg-white hover:text-slate-950 transition-colors shadow-[8px_8px_0px_#ccff00] group">
            <span className="text-5xl font-black mb-4 block text-[#ccff00] drop-shadow-[2px_2px_0px_#fff] group-hover:drop-shadow-[2px_2px_0px_#000]">2.</span>
            <h3 className="font-black uppercase tracking-widest text-lg mb-4 text-inherit">
              IA com sua Identidade
            </h3>
            <p className="text-inherit font-mono font-bold leading-relaxed">
              Modelamos a inteligência artificial para falar com a sua voz, seguindo todas as suas regras.
            </p>
          </div>
          <div className="p-8 bg-white border-4 border-slate-950 hover:bg-[#ccff00] transition-colors shadow-[8px_8px_0px_#000] group">
            <span className="text-5xl font-black mb-4 block text-slate-950 drop-shadow-[2px_2px_0px_#fff] group-hover:drop-shadow-[2px_2px_0px_#000]">3.</span>
            <h3 className="font-black uppercase tracking-widest text-lg mb-4 text-slate-950">
              Automação que Resolve
            </h3>
            <p className="text-slate-950 font-mono font-bold leading-relaxed">
              Criamos fluxos que eliminam os gargalos reais e nunca atrapalham o cliente final.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
