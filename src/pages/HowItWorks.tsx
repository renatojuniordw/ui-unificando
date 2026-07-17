import { useNavigate } from "react-router-dom";
import { PageTransition } from "../components/common/PageTransition";
import { SEO } from "../components/common/SEO";
import { ROUTES } from "../routes";

export const HowItWorks: React.FC = () => {
  const navigate = useNavigate();
  return (
    <PageTransition>
      <SEO
        title="Como Trabalhamos | Laboratório Unificando"
        description="Metodologia de desenvolvimento: prototipação, validação e deploy de projetos digitais."
        canonical="/como-funciona"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: "Método de Trabalho Unificando",
          step: [
            {
              "@type": "HowToStep",
              name: "Fase 1: Prototipação",
              text: "Entendemos o problema, desenhamos a solução e criamos protótipo funcional.",
            },
            {
              "@type": "HowToStep",
              name: "Fase 2: Validação",
              text: "Testamos com usuários reais e iteramos baseado em feedback.",
            },
            {
              "@type": "HowToStep",
              name: "Fase 3: Deploy",
              text: "Colocamos no ar com infraestrutura profissional e suporte contínuo.",
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
            PROJETOS QUE <br />
            <span className="text-white bg-[#ccff00] text-slate-950 px-2 inline-block rotate-1 border-4 border-slate-950 shadow-[6px_6px_0px_#000]">RESOLVEM.</span>
          </h1>
          <p className="text-xl md:text-3xl text-slate-950 font-black uppercase tracking-tight mb-8">
            NO SEU TEMPO.
          </p>
          <div className="bg-[#ccff00] border-4 border-slate-950 p-6 shadow-[8px_8px_0px_#000] inline-block mt-4">
            <p className="text-lg md:text-xl text-slate-950 font-mono font-bold max-w-2xl mx-auto uppercase">
              Da ideia ao produto. Cada projeto segue um processo testado e adaptável.
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
                  FASE 01
                </div>
                <h3 className="text-4xl lg:text-5xl font-black text-slate-950 mb-6 uppercase tracking-tighter leading-[0.9]">
                  PROTOTIPAGEM
                </h3>
                <div className="bg-[#ccff00] p-8 border-4 border-slate-950 mb-8 inline-block md:ml-auto text-left lg:max-w-md shadow-[8px_8px_0px_#000]">
                  <p className="text-sm font-black text-slate-950 mb-3 uppercase tracking-widest">
                    Fase de descoberta e ideação
                  </p>
                  <p className="text-sm md:text-base text-slate-950 font-mono font-bold leading-relaxed">
                    Entendemos o problema, desenhamos a solução e criamos um protótipo funcional.
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <span className="text-xs font-black uppercase tracking-widest text-slate-950 block bg-[#ccff00] inline-block px-2 py-1 border-2 border-slate-950">
                    O QUE FAZEMOS:
                  </span>
                  <ul className="space-y-3 text-sm md:text-base font-mono font-bold text-slate-950 md:flex md:flex-col md:items-end">
                    <li className="flex gap-4 items-center md:flex-row-reverse">
                      <span className="text-slate-950 bg-[#ccff00] border-2 border-slate-950 w-6 h-6 flex items-center justify-center font-black">✓</span>
                      <span>Mapeamos o problema e o escopo</span>
                    </li>
                    <li className="flex gap-4 items-center md:flex-row-reverse">
                      <span className="text-slate-950 bg-[#ccff00] border-2 border-slate-950 w-6 h-6 flex items-center justify-center font-black">✓</span>
                      <span>Desenhamos a arquitetura da solução</span>
                    </li>
                    <li className="flex gap-4 items-center md:flex-row-reverse">
                      <span className="text-slate-950 bg-[#ccff00] border-2 border-slate-950 w-6 h-6 flex items-center justify-center font-black">✓</span>
                      <span>Criamos protótipo funcional</span>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={() => navigate(ROUTES.CONTACT)}
                  className="bg-slate-950 text-white border-4 border-slate-950 px-8 py-4 mt-2 text-sm font-black hover:bg-[#ccff00] hover:text-slate-950 transition-colors uppercase tracking-widest shadow-[6px_6px_0px_#000] inline-block w-full md:w-auto text-center"
                >
                  Agendar Consultoria
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
                  FASE 02
                </div>
                <h3 className="text-4xl lg:text-5xl font-black text-slate-950 mb-6 uppercase tracking-tighter leading-[0.9]">
                  VALIDAÇÃO
                </h3>
                <div className="bg-white p-8 border-4 border-slate-950 mb-8 md:mr-auto lg:max-w-md shadow-[8px_8px_0px_#000]">
                  <p className="text-sm font-black text-slate-950 mb-3 uppercase tracking-widest">
                    Fase de teste e iteração
                  </p>
                  <p className="text-sm md:text-base text-slate-950 font-mono font-bold leading-relaxed">
                    Testamos com usuários reais, iteramos com base em feedback e ajustamos o escopo.
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <span className="text-xs font-black uppercase tracking-widest text-white block bg-slate-950 inline-block px-2 py-1 border-2 border-slate-950">
                    O QUE FAZEMOS:
                  </span>
                  <ul className="space-y-3 text-sm md:text-base font-mono font-bold text-slate-950">
                    <li className="flex gap-4 items-center">
                      <span className="text-white bg-slate-950 border-2 border-slate-950 w-6 h-6 flex items-center justify-center font-black">✓</span>{" "}
                      <span>Testamos com usuários reais</span>
                    </li>
                    <li className="flex gap-4 items-center">
                      <span className="text-white bg-slate-950 border-2 border-slate-950 w-6 h-6 flex items-center justify-center font-black">✓</span>{" "}
                      <span>Coletamos e priorizamos feedback</span>
                    </li>
                    <li className="flex gap-4 items-center">
                      <span className="text-white bg-slate-950 border-2 border-slate-950 w-6 h-6 flex items-center justify-center font-black">✓</span>
                      <span>Ajustamos escopo e funcionalidades</span>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={() => navigate(ROUTES.CONTACT)}
                  className="bg-[#ccff00] text-slate-950 border-4 border-slate-950 px-8 py-4 mt-2 text-sm font-black hover:bg-slate-950 hover:text-[#ccff00] transition-colors uppercase tracking-widest shadow-[6px_6px_0px_#000] inline-block w-full md:w-auto text-center"
                >
                  Agendar Consultoria
                </button>
              </div>
            </div>

            {/* PHASE 3: DEPOIS */}
            <div className="grid md:grid-cols-2 gap-12 items-center relative">
              <div className="md:pr-12 md:text-right">
                <div className="inline-block bg-white border-2 border-slate-950 text-slate-950 px-3 py-1 text-xs font-black uppercase tracking-widest mb-4 shadow-[4px_4px_0px_#000]">
                  FASE 03
                </div>
                <h3 className="text-4xl lg:text-5xl font-black text-slate-950 mb-6 uppercase tracking-tighter leading-[0.9]">
                  DEPLOY
                </h3>
                <div className="bg-[#ccff00] p-8 border-4 border-slate-950 mb-8 inline-block md:ml-auto text-left lg:max-w-md shadow-[8px_8px_0px_#000]">
                  <p className="text-sm font-black text-slate-950 mb-3 uppercase tracking-widest">
                    Fase de produção e entrega
                  </p>
                  <p className="text-sm md:text-base text-slate-950 font-mono font-bold leading-relaxed">
                    Colocamos no ar com infraestrutura profissional, monitoramento e suporte contínuo.
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <span className="text-xs font-black uppercase tracking-widest text-slate-950 block bg-[#ccff00] inline-block px-2 py-1 border-2 border-slate-950">
                    O QUE FAZEMOS:
                  </span>
                  <ul className="space-y-3 text-sm md:text-base font-mono font-bold text-slate-950 md:flex md:flex-col md:items-end">
                    <li className="flex gap-4 items-center md:flex-row-reverse">
                       <span className="text-slate-950 bg-[#ccff00] border-2 border-slate-950 w-6 h-6 flex items-center justify-center font-black">✓</span>
                      <span>Deploy em infraestrutura profissional</span>
                    </li>
                    <li className="flex gap-4 items-center md:flex-row-reverse">
                       <span className="text-slate-950 bg-[#ccff00] border-2 border-slate-950 w-6 h-6 flex items-center justify-center font-black">✓</span>
                      <span>Monitoramento e suporte contínuo</span>
                    </li>
                    <li className="flex gap-4 items-center md:flex-row-reverse">
                       <span className="text-slate-950 bg-[#ccff00] border-2 border-slate-950 w-6 h-6 flex items-center justify-center font-black">✓</span>
                      <span>Documentação e transferência de conhecimento</span>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={() => navigate(ROUTES.CONTACT)}
                  className="bg-slate-950 text-white border-4 border-slate-950 px-8 py-4 mt-2 text-sm font-black hover:bg-[#ccff00] hover:text-slate-950 transition-colors uppercase tracking-widest shadow-[6px_6px_0px_#000] inline-block w-full md:w-auto text-center"
                >
                  Agendar Consultoria
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

          <p className="text-white font-bold mb-12 max-w-lg mx-auto text-[11px] uppercase tracking-[0.2em] leading-loose">
            Projetos autorais, produtos utilitários ou sistemas sob medida — o processo é o mesmo.
          </p>

          <button
            onClick={() => navigate(ROUTES.CONTACT)}
            className="bg-[#ccff00] text-slate-950 px-10 py-5 text-sm md:text-base font-black hover:bg-white transition-all uppercase tracking-[0.2em] shadow-[6px_6px_0px_#fff]"
            style={{ borderRadius: "0px" }}
          >
            Vamos construir algo?
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
