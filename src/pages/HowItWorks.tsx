import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes";
import { PageTransition } from "../components/common/PageTransition";
import { SEO } from "../components/common/SEO";
import { CTA } from "../constants/cta";
import { trackCtaClick } from "../utils/analytics";

export const HowItWorks: React.FC = () => {
  const navigate = useNavigate();
  return (
    <PageTransition>
      <SEO
        title="Como Funciona o Método Unificando | Crescimento sem Bagunça"
        description="Nosso método dividido em fases: Organização, Evolução e Autoridade. Entre no estágio ideal para o seu negócio."
        canonical={ROUTES.HOW_IT_WORKS}
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

      <section className="py-32 bg-slate-50 border-b border-slate-200 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-indigo-600 font-black uppercase tracking-[0.2em] text-xs mb-4 block">
            Nossa forma de atuar
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-10 uppercase tracking-tighter leading-[1.05]">
            Crescimento sem bagunça, <br /> no seu tempo.
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed mb-8">
            Todo negócio passa por fases distintas.
          </p>
          <div className="bg-indigo-600/5 border border-indigo-100 py-4 px-8 rounded-2xl inline-block">
            <p className="text-lg text-indigo-900 font-bold max-w-2xl mx-auto">
              Nós entramos exatamente onde você está — e evoluímos junto.
            </p>
          </div>
        </div>
      </section>

      {/* Phases Timeline */}
      <section className="py-24 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-100 hidden md:block -translate-x-1/2"></div>

          <div className="space-y-32">
            {/* PHASE 1: ANTES */}
            <div className="grid md:grid-cols-2 gap-12 items-center relative">
              <div className="md:pr-12 md:text-right">
                <div className="inline-block bg-slate-100 text-slate-600 px-3 py-1 rounded-lg text-xs font-black uppercase tracking-widest mb-4">
                  Antes - Fase 01
                </div>
                <h3 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 uppercase tracking-tighter">
                  Organização Total
                </h3>
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 mb-8 inline-block md:ml-auto text-left lg:max-w-md">
                  <p className="text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide">
                    Quando o atendimento está confuso
                  </p>
                  <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed">
                    Mensagens espalhadas, respostas perdidas, mais de uma pessoa
                    atendendo sem controle. Aqui, o foco é organizar a base e
                    centralizar os canais.
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <span className="text-xs font-black uppercase tracking-widest text-slate-400 block">
                    O que fazemos:
                  </span>
                  <ul className="space-y-3 text-sm font-bold text-slate-600 md:justify-end">
                    <li className="flex md:justify-end gap-2 items-center">
                      Centralizamos WhatsApp, Instagram e site{" "}
                      <span className="text-indigo-600 font-black">✓</span>
                    </li>
                    <li className="flex md:justify-end gap-2 items-center">
                      Organizamos atendimento em equipe{" "}
                      <span className="text-indigo-600 font-black">✓</span>
                    </li>
                    <li className="flex md:justify-end gap-2 items-center">
                      Criamos controle e histórico completo{" "}
                      <span className="text-indigo-600 font-black">✓</span>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={() => {
                    trackCtaClick({
                      label: CTA.pricing.label,
                      location: "how_it_works_phase1_pricing",
                      to: CTA.pricing.to,
                    });
                    navigate(CTA.pricing.to);
                  }}
                  className="bg-slate-900 text-white px-8 py-4 mt-2 rounded-xl text-xs font-black hover:bg-slate-800 transition-all uppercase tracking-widest shadow-lg"
                >
                  Ver planos e preços
                </button>
              </div>

              <div className="hidden md:flex justify-start pl-12">
                <div className="w-24 h-24 bg-slate-900 text-white rounded-3xl flex items-center justify-center text-3xl shadow-2xl z-10 border-8 border-white">
                  📂
                </div>
              </div>
            </div>

            {/* PHASE 2: DURANTE */}
            <div className="grid md:grid-cols-2 gap-12 items-center relative">
              <div className="hidden md:flex justify-end pr-12 order-1">
                <div className="w-24 h-24 bg-indigo-600 text-white rounded-3xl flex items-center justify-center text-3xl shadow-2xl z-10 border-8 border-white">
                  ⚡
                </div>
              </div>

              <div className="md:pl-12 order-2 md:text-left">
                <div className="inline-block bg-indigo-50 text-indigo-600 px-3 py-1 rounded-lg text-xs font-black uppercase tracking-widest mb-4">
                  Durante - Fase 02
                </div>
                <h3 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 uppercase tracking-tighter">
                  Evolução Responsável
                </h3>
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 mb-8 inline-block md:mr-auto lg:max-w-md">
                  <p className="text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide">
                    Quando organizar já não basta
                  </p>
                  <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed">
                    O volume cresce, o tempo aperta e tarefas repetitivas viram
                    gargalo. É hora de automatizar com critério e inteligência
                    artificial.
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <span className="text-xs font-black uppercase tracking-widest text-slate-400 block">
                    O que fazemos:
                  </span>
                  <ul className="space-y-3 text-sm font-bold text-slate-600">
                    <li className="flex gap-2 items-center">
                      <span className="text-indigo-600 font-black">✓</span>{" "}
                      Identificamos gargalos operacionais
                    </li>
                    <li className="flex gap-2 items-center">
                      <span className="text-indigo-600 font-black">✓</span>{" "}
                      Criamos fluxos inteligentes
                    </li>
                    <li className="flex gap-2 items-center">
                      <span className="text-indigo-600 font-black">✓</span> IA
                      sem perder o toque humano
                    </li>
                  </ul>
                </div>

                <button
                  onClick={() => {
                    trackCtaClick({
                      label: CTA.pricing.label,
                      location: "how_it_works_phase2_pricing",
                      to: CTA.pricing.to,
                    });
                    navigate(CTA.pricing.to);
                  }}
                  className="bg-indigo-600 text-white px-8 py-4 mt-2 rounded-xl text-xs font-black hover:bg-indigo-700 transition-all uppercase tracking-widest shadow-lg shadow-indigo-200"
                >
                  Ver planos e preços
                </button>
              </div>
            </div>

            {/* PHASE 3: DEPOIS */}
            <div className="grid md:grid-cols-2 gap-12 items-center relative">
              <div className="md:pr-12 md:text-right">
                <div className="inline-block bg-slate-100 text-slate-600 px-3 py-1 rounded-lg text-xs font-black uppercase tracking-widest mb-4">
                  Depois - Fase 03
                </div>
                <h3 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 uppercase tracking-tighter">
                  Autoridade de Marca
                </h3>
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 mb-8 inline-block md:ml-auto text-left lg:max-w-md">
                  <p className="text-sm font-bold text-slate-700 mb-3 uppercase tracking-wide">
                    Quando a operação está sólida
                  </p>
                  <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed">
                    Agora o negócio precisa ser encontrado, respeitado e
                    lembrado. Construímos sua presença digital para sustentar o
                    crescimento exponencial.
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <span className="text-xs font-black uppercase tracking-widest text-slate-400 block">
                    O que fazemos:
                  </span>
                  <ul className="space-y-3 text-sm font-bold text-slate-600 md:justify-end">
                    <li className="flex md:justify-end gap-2 items-center">
                      Vitrine profissional e perfomance{" "}
                      <span className="text-indigo-600 font-black">✓</span>
                    </li>
                    <li className="flex md:justify-end gap-2 items-center">
                      Estrutura de SEO robusta (Google){" "}
                      <span className="text-indigo-600 font-black">✓</span>
                    </li>
                    <li className="flex md:justify-end gap-2 items-center">
                      Integração Site + Atendimento + IA{" "}
                      <span className="text-indigo-600 font-black">✓</span>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={() => {
                    trackCtaClick({
                      label: CTA.pricing.label,
                      location: "how_it_works_phase3_pricing",
                      to: CTA.pricing.to,
                    });
                    navigate(CTA.pricing.to);
                  }}
                  className="bg-slate-900 text-white px-8 py-4 mt-2 rounded-xl text-xs font-black hover:bg-slate-800 transition-all uppercase tracking-widest shadow-lg"
                >
                  Ver planos e preços
                </button>
              </div>

              <div className="hidden md:flex justify-start pl-12">
                <div className="w-24 h-24 bg-slate-900 text-white rounded-3xl flex items-center justify-center text-3xl shadow-2xl z-10 border-8 border-white">
                  🌐
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-slate-900 text-white relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-indigo-600/10 blur-[100px] pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-16 uppercase tracking-tighter">
            🚀 Uma jornada contínua
          </h2>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20 text-left">
            <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/[0.08] transition-colors">
              <span className="text-xs font-black uppercase tracking-widest text-indigo-400 block mb-4">
                01. FLEXIBILIDADE
              </span>
              <p className="text-base font-bold text-white">
                Comece em qualquer fase do seu negócio.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/[0.08] transition-colors">
              <span className="text-xs font-black uppercase tracking-widest text-indigo-400 block mb-4">
                02. AGILIDADE
              </span>
              <p className="text-base font-bold text-white">
                Pule etapas ou acelere o processo se precisar.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/[0.08] transition-colors">
              <span className="text-xs font-black uppercase tracking-widest text-indigo-400 block mb-4">
                03. CUSTOMIZAÇÃO
              </span>
              <p className="text-base font-bold text-white">
                Combine soluções conforme sua necessidade.
              </p>
            </div>
          </div>

          <p className="text-slate-400 text-xs font-bold mb-12 uppercase tracking-[0.2em] max-w-lg mx-auto leading-loose">
            Nada é engessado. O ecossistema Unificando se adapta à sua
            realidade.
          </p>

          <button
            onClick={() => {
              trackCtaClick({
                label: CTA.pricing.label,
                location: "how_it_works_final_pricing",
                to: CTA.pricing.to,
              });
              navigate(CTA.pricing.to);
            }}
            className="bg-white text-slate-900 px-12 py-5 rounded-2xl text-xs font-black hover:bg-slate-200 transition-all shadow-2xl uppercase tracking-widest"
          >
            Ver planos e preços
          </button>
        </div>
      </section>

      {/* Footer / Transparency */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 mb-6 opacity-50">
            <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
              Transparência desde o início
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-xs font-bold text-slate-400 uppercase tracking-wide">
            <span>Veja o valor antes de falar</span>
            <span className="text-slate-200">•</span>
            <span>Escolha apenas o que precisa</span>
            <span className="text-slate-200">•</span>
            <span>Sem promessas mágicas</span>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
