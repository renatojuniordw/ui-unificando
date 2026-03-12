import { PageTransition } from "../components/common/PageTransition";
import { SEO } from "../components/common/SEO";
import { CTA } from "../constants/cta";
import { trackCtaClick } from "../utils/analytics";

export const HowItWorks: React.FC = () => {
  const handleCtaClick = (locationStr: string) => {
    trackCtaClick({
      label: CTA.primary.label,
      location: locationStr,
      to: CTA.primary.to,
    });
    window.open(CTA.primary.to, "_blank");
  };

  return (
    <PageTransition>
      <SEO
        title="Como Funciona o Método Unificando | Crescimento sem Bagunça"
        description="Nosso método dividido em fases: Organização, Evolução e Autoridade. Entre no estágio ideal para o seu negócio."
        canonical="/como-funciona"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "Método Unificando de Crescimento Digital",
          step: [
            {
              "@type": "HowToStep",
              name: "Fase 1: Organização Total",
              text: "Centralização de WhatsApp, Instagram e organização de atendimento em equipe.",
            },
            {
              "@type": "HowToStep",
              name: "Fase 2: Evolução Responsável",
              text: "Implementação de fluxos inteligentes e IA para automação de atendimento.",
            },
            {
              "@type": "HowToStep",
              name: "Fase 3: Autoridade de Marca",
              text: "Construção de presença digital sólida com Site e SEO.",
            },
          ],
        }}
      />

      <section className="py-32 bg-white border-b-4 border-slate-950 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
          <span className="inline-block bg-slate-950 text-white font-black uppercase tracking-[0.2em] text-[10px] px-3 py-1 mb-6 border-2 border-slate-950 shadow-[4px_4px_0px_#ccff00]">
            A NOSSA FORMA DE ATUAR
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-950 mb-10 uppercase tracking-tighter leading-[0.9]">
            CRESCIMENTO <br />
            SEM <span className="text-white bg-red-600 px-2 inline-block rotate-1 border-4 border-slate-950 shadow-[6px_6px_0px_#000]">BAGUNÇA.</span>
          </h1>
          <p className="text-xl md:text-3xl text-slate-950 font-black uppercase tracking-tight mb-8">
            NO SEU TEMPO.
          </p>
          <div className="bg-[#ccff00] border-4 border-slate-950 p-6 shadow-[8px_8px_0px_#000] inline-block mt-4">
            <p className="text-lg md:text-xl text-slate-950 font-mono font-bold max-w-2xl mx-auto uppercase">
              Todo negócio passa por fases distintas. Nós entramos onde você está — e evoluímos junto.
            </p>
          </div>
        </div>
      </section>

      {/* Phases Timeline */}
      <section className="py-24 bg-white relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-2 bg-slate-950 hidden md:block -translate-x-1/2"></div>

          <div className="space-y-32">
            {/* PHASE 1: ANTES */}
            <div className="grid md:grid-cols-2 gap-12 items-center relative">
              <div className="md:pr-12 md:text-right">
                <div className="inline-block bg-white border-2 border-slate-950 text-slate-950 px-3 py-1 text-xs font-black uppercase tracking-widest mb-4 shadow-[4px_4px_0px_#000]">
                  ANTES - FASE 01
                </div>
                <h3 className="text-4xl lg:text-5xl font-black text-slate-950 mb-6 uppercase tracking-tighter leading-[0.9]">
                  ORGANIZAÇÃO<br/>TOTAL
                </h3>
                <div className="bg-[#ccff00] p-8 border-4 border-slate-950 mb-8 inline-block md:ml-auto text-left lg:max-w-md shadow-[8px_8px_0px_#000]">
                  <p className="text-sm font-black text-slate-950 mb-3 uppercase tracking-widest">
                    Quando o atendimento está confuso
                  </p>
                  <p className="text-sm md:text-base text-slate-950 font-mono font-bold leading-relaxed">
                    Mensagens espalhadas, respostas perdidas, mais de uma pessoa
                    atendendo sem controle. Aqui, o foco é organizar a base e
                    centralizar tudo.
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <span className="text-xs font-black uppercase tracking-widest text-slate-950 block bg-[#ccff00] inline-block px-2 py-1 border-2 border-slate-950">
                    O QUE FAZEMOS:
                  </span>
                  <ul className="space-y-3 text-sm md:text-base font-mono font-bold text-slate-950 md:flex md:flex-col md:items-end">
                    <li className="flex gap-4 items-center md:flex-row-reverse">
                      <span className="text-slate-950 bg-[#ccff00] border-2 border-slate-950 w-6 h-6 flex items-center justify-center font-black">✓</span>
                      <span>Centralizamos WhatsApp, Instagram e site</span>
                    </li>
                    <li className="flex gap-4 items-center md:flex-row-reverse">
                      <span className="text-slate-950 bg-[#ccff00] border-2 border-slate-950 w-6 h-6 flex items-center justify-center font-black">✓</span>
                      <span>Organizamos atendimento em equipe</span>
                    </li>
                    <li className="flex gap-4 items-center md:flex-row-reverse">
                      <span className="text-slate-950 bg-[#ccff00] border-2 border-slate-950 w-6 h-6 flex items-center justify-center font-black">✓</span>
                      <span>Criamos controle e histórico completo</span>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={() => handleCtaClick("how_it_works_phase1")}
                  className="bg-slate-950 text-white border-4 border-slate-950 px-8 py-4 mt-2 text-sm font-black hover:bg-[#ccff00] hover:text-slate-950 transition-colors uppercase tracking-widest shadow-[6px_6px_0px_#000] inline-block w-full md:w-auto text-center"
                >
                  Falar com Especialista
                </button>
              </div>

              <div className="hidden md:flex justify-start pl-12 z-10">
                <div className="w-24 h-24 bg-slate-950 text-white flex items-center justify-center text-4xl shadow-[8px_8px_0px_#ccff00] border-4 border-slate-950">
                  📂
                </div>
              </div>
            </div>

            {/* PHASE 2: DURANTE */}
            <div className="grid md:grid-cols-2 gap-12 items-center relative">
              <div className="hidden md:flex justify-end pr-12 order-1 z-10">
                <div className="w-24 h-24 bg-[#ccff00] text-slate-950 flex items-center justify-center text-4xl shadow-[8px_8px_0px_#000] border-4 border-slate-950">
                  ⚡
                </div>
              </div>

              <div className="md:pl-12 order-2 md:text-left">
                <div className="inline-block bg-slate-950 text-[#ccff00] border-2 border-slate-950 px-3 py-1 text-xs font-black uppercase tracking-widest mb-4 shadow-[4px_4px_0px_#000]">
                  DURANTE - FASE 02
                </div>
                <h3 className="text-4xl lg:text-5xl font-black text-slate-950 mb-6 uppercase tracking-tighter leading-[0.9]">
                  EVOLUÇÃO<br/>INTELIGENTE
                </h3>
                <div className="bg-white p-8 border-4 border-slate-950 mb-8 md:mr-auto lg:max-w-md shadow-[8px_8px_0px_#000]">
                  <p className="text-sm font-black text-slate-950 mb-3 uppercase tracking-widest">
                    Quando organizar já não basta
                  </p>
                  <p className="text-sm md:text-base text-slate-950 font-mono font-bold leading-relaxed">
                    O volume cresce, o tempo aperta e tarefas repetitivas viram
                    gargalo. É hora de automatizar com critério e inteligência
                    artificial.
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <span className="text-xs font-black uppercase tracking-widest text-white block bg-slate-950 inline-block px-2 py-1 border-2 border-slate-950">
                    O QUE FAZEMOS:
                  </span>
                  <ul className="space-y-3 text-sm md:text-base font-mono font-bold text-slate-950">
                    <li className="flex gap-4 items-center">
                      <span className="text-white bg-slate-950 border-2 border-slate-950 w-6 h-6 flex items-center justify-center font-black">✓</span>{" "}
                      <span>Identificamos gargalos operacionais</span>
                    </li>
                    <li className="flex gap-4 items-center">
                      <span className="text-white bg-slate-950 border-2 border-slate-950 w-6 h-6 flex items-center justify-center font-black">✓</span>{" "}
                      <span>Criamos fluxos inteligentes de triagem</span>
                    </li>
                    <li className="flex gap-4 items-center">
                      <span className="text-white bg-slate-950 border-2 border-slate-950 w-6 h-6 flex items-center justify-center font-black">✓</span>
                      <span>IA sem perder o toque humano na negociação</span>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={() => handleCtaClick("how_it_works_phase2")}
                  className="bg-[#ccff00] text-slate-950 border-4 border-slate-950 px-8 py-4 mt-2 text-sm font-black hover:bg-slate-950 hover:text-[#ccff00] transition-colors uppercase tracking-widest shadow-[6px_6px_0px_#000] inline-block w-full md:w-auto text-center"
                >
                  Falar com Especialista
                </button>
              </div>
            </div>

            {/* PHASE 3: DEPOIS */}
            <div className="grid md:grid-cols-2 gap-12 items-center relative">
              <div className="md:pr-12 md:text-right">
                <div className="inline-block bg-white border-2 border-slate-950 text-slate-950 px-3 py-1 text-xs font-black uppercase tracking-widest mb-4 shadow-[4px_4px_0px_#000]">
                  DEPOIS - FASE 03
                </div>
                <h3 className="text-4xl lg:text-5xl font-black text-slate-950 mb-6 uppercase tracking-tighter leading-[0.9]">
                  AUTORIDADE<br/>DE MARCA
                </h3>
                <div className="bg-[#ccff00] p-8 border-4 border-slate-950 mb-8 inline-block md:ml-auto text-left lg:max-w-md shadow-[8px_8px_0px_#000]">
                  <p className="text-sm font-black text-slate-950 mb-3 uppercase tracking-widest">
                    Quando a operação está sólida
                  </p>
                  <p className="text-sm md:text-base text-slate-950 font-mono font-bold leading-relaxed">
                    Agora o negócio precisa ser encontrado, respeitado e
                    lembrado. Construímos sua presença digital para sustentar o
                    crescimento exponencial.
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <span className="text-xs font-black uppercase tracking-widest text-slate-950 block bg-[#ccff00] inline-block px-2 py-1 border-2 border-slate-950">
                    O QUE FAZEMOS:
                  </span>
                  <ul className="space-y-3 text-sm md:text-base font-mono font-bold text-slate-950 md:flex md:flex-col md:items-end">
                    <li className="flex gap-4 items-center md:flex-row-reverse">
                       <span className="text-slate-950 bg-[#ccff00] border-2 border-slate-950 w-6 h-6 flex items-center justify-center font-black">✓</span>
                      <span>Vitrine online profissional e perfomática</span>
                    </li>
                    <li className="flex gap-4 items-center md:flex-row-reverse">
                       <span className="text-slate-950 bg-[#ccff00] border-2 border-slate-950 w-6 h-6 flex items-center justify-center font-black">✓</span>
                      <span>Estrutura de SEO robusta (Google)</span>
                    </li>
                    <li className="flex gap-4 items-center md:flex-row-reverse">
                       <span className="text-slate-950 bg-[#ccff00] border-2 border-slate-950 w-6 h-6 flex items-center justify-center font-black">✓</span>
                      <span>Integração Site + Atendimento + IA</span>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={() => handleCtaClick("how_it_works_phase3")}
                  className="bg-slate-950 text-white border-4 border-slate-950 px-8 py-4 mt-2 text-sm font-black hover:bg-[#ccff00] hover:text-slate-950 transition-colors uppercase tracking-widest shadow-[6px_6px_0px_#000] inline-block w-full md:w-auto text-center"
                >
                  Falar com Especialista
                </button>
              </div>

              <div className="hidden md:flex justify-start pl-12 z-10">
                <div className="w-24 h-24 bg-white text-slate-950 flex items-center justify-center text-4xl shadow-[8px_8px_0px_#000] border-4 border-slate-950">
                  🌐
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#ccff00] text-slate-950 border-y-4 border-slate-950 relative overflow-hidden text-center">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
          <span className="inline-block bg-white border-2 border-slate-950 px-3 py-1 text-xs font-black uppercase tracking-widest mb-6 shadow-[4px_4px_0px_#000]">
            O CICLO NÃO PARA
          </span>
          <h2 className="text-5xl md:text-7xl font-black mb-16 uppercase tracking-tighter leading-[0.9]">
            UMA JORNADA<br/> CONTÍNUA
          </h2>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20 text-left">
            <div className="bg-white border-4 border-slate-950 p-8 shadow-[8px_8px_0px_#000] hover:bg-slate-950 hover:text-white group transition-colors">
              <span className="text-xl font-black uppercase tracking-widest text-[#ccff00] bg-slate-950 inline-block px-2 group-hover:bg-white group-hover:text-slate-950 border-2 border-slate-950 mb-4 block w-max">
                01. FLEXÍVEL
              </span>
              <p className="text-base font-mono font-bold text-inherit mt-4">
                Comece em qualquer fase. O ecossistema se molda de acordo com o tamanho do seu gargalo.
              </p>
            </div>
            <div className="bg-white border-4 border-slate-950 p-8 shadow-[8px_8px_0px_#000] hover:bg-slate-950 hover:text-white group transition-colors">
              <span className="text-xl font-black uppercase tracking-widest text-[#ccff00] bg-slate-950 inline-block px-2 group-hover:bg-white group-hover:text-slate-950 border-2 border-slate-950 mb-4 block w-max">
                02. RÁPIDO
              </span>
              <p className="text-base font-mono font-bold text-inherit mt-4">
                Pule etapas ou acelere o processo se precisar de resultados mais agressivos imediatamente.
              </p>
            </div>
            <div className="bg-white border-4 border-slate-950 p-8 shadow-[8px_8px_0px_#000] hover:bg-slate-950 hover:text-white group transition-colors">
              <span className="text-xl font-black uppercase tracking-widest text-[#ccff00] bg-slate-950 inline-block px-2 group-hover:bg-white group-hover:text-slate-950 border-2 border-slate-950 mb-4 block w-max">
                03. SOB MEDIDA
              </span>
              <p className="text-base font-mono font-bold text-inherit mt-4">
                Combine automações e fluxos conforme sua necessidade. Nada é imposto, tudo é testado.
              </p>
            </div>
          </div>

          <button
            onClick={() => handleCtaClick("how_it_works_final_cta")}
            className="bg-slate-950 text-white border-4 border-slate-950 px-12 py-6 text-xl font-black hover:bg-white hover:text-slate-950 transition-colors shadow-[8px_8px_0px_#000] hover:shadow-[8px_8px_0px_#000] uppercase tracking-widest block mx-auto w-full md:w-auto"
          >
            Começar Agora
          </button>
        </div>
      </section>

      {/* Footer / Transparency */}
      <section className="py-16 bg-white border-b-4 border-slate-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <div className="inline-flex items-center gap-2 mb-6 p-2 bg-slate-950 text-[#ccff00] border-2 border-slate-950 uppercase tracking-widest font-black text-[10px] shadow-[4px_4px_0px_#000]">
            TRANSPARÊNCIA COMO BASE
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-xs font-black text-slate-950 uppercase tracking-wide">
            <span className="bg-[#ccff00] px-3 py-1 border-2 border-slate-950 shadow-[2px_2px_0px_#000]">Foque no Gargalo</span>
            <span className="bg-[#ccff00] px-3 py-1 border-2 border-slate-950 shadow-[2px_2px_0px_#000]">Apenas o que Precisa</span>
            <span className="bg-[#ccff00] px-3 py-1 border-2 border-slate-950 shadow-[2px_2px_0px_#000]">Sem Promessas Mágicas</span>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
