const StatIcon = () => (
  <div className="w-12 h-12 bg-[#ccff00] border-2 border-slate-950 flex items-center justify-center text-slate-950 mb-6 shadow-[4px_4px_0px_#000]">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="square"
      strokeLinejoin="miter"
    >
      <line x1="12" y1="20" x2="12" y2="10"></line>
      <line x1="18" y1="20" x2="18" y2="4"></line>
      <line x1="6" y1="20" x2="6" y2="16"></line>
    </svg>
  </div>
);

export const TestimonialsSection = () => {
  const marketInsights = [
    {
      stat: "78%",
      title: "Vantagem Inicial",
      text: "Dos consumidores compram da primeira empresa que responde. No digital, velocidade não é luxo, é sobrevivência.",
      source: "Harvard Business Review",
    },
    {
      stat: "62%",
      title: "Abandono por Demora",
      text: "Dos clientes admitem desistir de uma compra se a resposta demorar mais de 10 minutos no WhatsApp ou Instagram.",
      source: "Meta IQ",
    },
    {
      stat: "3.5x",
      title: "Conversão Unificada",
      text: "Empresas que centralizam canais e usam múltiplos atendentes vendem até 3.5 vezes mais.",
      source: "Gartner",
    },
    {
      stat: "90%",
      title: "Expectativa Real",
      text: "Esperam que a empresa saiba quem eles são e o que falaram em atendimentos anteriores, independente do canal.",
      source: "Salesforce",
    },
  ];

  return (
    <section className="py-24 bg-slate-950 text-white border-y-4 border-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#ccff00] text-slate-950 font-black uppercase tracking-[0.2em] text-[10px] px-3 py-1 mb-4 border-2 border-slate-950 shadow-[4px_4px_0px_#fff]">
            POR QUE CENTRALIZAR?
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9]">
            O CUSTO DA<br/>
            <span className="text-[#ccff00]">DESORGANIZAÇÃO</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {marketInsights.map((insight, index) => (
            <div
              key={index}
              className="bg-white text-slate-950 p-8 border-4 border-slate-950 flex flex-col hover:bg-[#ccff00] transition-colors shadow-[8px_8px_0px_#ccff00] group"
            >
              <StatIcon />
              <div className="text-5xl font-black mb-2 tracking-tighter">
                {insight.stat}
              </div>
              <h3 className="font-black uppercase tracking-tight text-sm mb-4">
                {insight.title}
              </h3>
              <p className="text-slate-950 mb-8 text-xs leading-relaxed font-mono font-bold">
                "{insight.text}"
              </p>
              <div className="mt-auto pt-6 border-t-2 border-slate-950">
                <div className="text-[10px] font-black uppercase tracking-widest">
                  FONTE: {insight.source}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-[#ccff00] text-xs font-mono font-bold uppercase">
            * DADOS BASEADOS EM RELATÓRIOS GLOBAIS DE COMPORTAMENTO DO
            CONSUMIDOR DIGITAL (2023-24).
          </p>
        </div>
      </div>
    </section>
  );
};
