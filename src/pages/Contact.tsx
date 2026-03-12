import React, { useEffect, useState } from "react";
import { SEO } from "../components/common/SEO";
import { PageTransition } from "../components/common/PageTransition";
import { ContactForm } from "../components/contact/ContactForm";
import { ROUTES } from "../routes";

export const Contact: React.FC = () => {
  const [planSelection, setPlanSelection] = useState<any>(null);

  useEffect(() => {
    const savedSelection = localStorage.getItem("unificando_plan_selection");
    if (savedSelection) {
      try {
        const parsed = JSON.parse(savedSelection);
        setPlanSelection(parsed);
      } catch (error) {
        console.error("Error parsing plan selection:", error);
      }
    }
  }, []);

  return (
    <PageTransition className="bg-[#ccff00]">
      <SEO
        title="Fale Conosco | Diagnóstico Gratuito Unificando"
        description="Agende uma conversa com nossos especialistas. Diagnóstico real do seu negócio sem custo e sem compromisso."
        canonical={ROUTES.CONTACT}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Fale Conosco - Unificando",
          description:
            "Entre em contato para um diagnóstico gratuito do seu ecossistema digital.",
          mainEntity: {
            "@type": "Organization",
            name: "Unificando",
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "sales",
              availableLanguage: "Portuguese",
            },
          },
        }}
      />
      <section className="py-24 bg-[#ccff00] min-h-[80vh] flex items-center text-left border-b-8 border-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16">
          <div className="flex flex-col justify-center">
            <span className="inline-block bg-white text-slate-950 border-2 border-slate-950 font-black uppercase tracking-widest text-[10px] sm:text-xs mb-8 px-4 py-2 w-max shadow-[4px_4px_0px_#000]">
              VAMOS CONVERSAR
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-slate-950 mb-8 uppercase tracking-tighter leading-[0.9]">
              ENTENDA O PRÓXIMO <br/>
              <span className="inline-block bg-slate-950 text-[#ccff00] px-4 -rotate-1 border-4 border-slate-950 shadow-[6px_6px_0px_#fff] mt-2">
                PASSO CERTO.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-950 mb-12 leading-tight font-black uppercase tracking-tight max-w-lg">
              <span className="bg-white px-2 border-2 border-slate-950 mr-1 shadow-[2px_2px_0px_#000] inline-block mb-1">
                DIAGNÓSTICO GRATUITO
              </span> PARA IDENTIFICAR EM QUE FASE DO ECOSSISTEMA SEU NEGÓCIO ESTÁ.
            </p>

            <div className="space-y-6">
              {[
                {
                  title: "DIAGNÓSTICO REAL",
                  description:
                    "Análise do seu atendimento, processos e presença digital, sem custo.",
                },
                {
                  title: "POSTURA CONSULTIVA",
                  description:
                    "Foco no seu cenário atual, sem pressão, sem promessa vazia.",
                },
                {
                  title: "ATENDIMENTO IMEDIATO",
                  description:
                    "Resposta instantânea via Inteligência Artificial, disponível 24 horas por dia.",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex gap-6 items-start p-6 bg-white border-4 border-slate-950 shadow-[6px_6px_0px_#000] hover:-translate-y-1 transition-transform"
                >
                  <div className="w-10 h-10 bg-slate-950 text-[#ccff00] border-2 border-slate-950 flex items-center justify-center font-black text-lg shrink-0">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-black text-slate-950 uppercase text-xs md:text-sm tracking-widest mb-2 leading-none">
                      {benefit.title}
                    </h4>
                    <p className="text-xs text-slate-950 font-mono font-bold leading-relaxed uppercase">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {planSelection && (
              <div className="mt-8 p-6 bg-slate-950 text-white border-4 border-slate-950 shadow-[8px_8px_0px_#fff]">
                <span className="inline-block bg-white text-slate-950 border-2 border-slate-950 px-2 py-1 text-[10px] font-black uppercase tracking-widest mb-4">
                  SELEÇÃO DE PLANO PRÉVIA
                </span>
                <p className="text-[#ccff00] font-black text-xl md:text-2xl tracking-tighter mb-2">
                  PLANO PERSONALIZADO <br/>
                  (R$ {planSelection.totals?.monthly}/MÊS)
                </p>
                <p className="text-slate-400 text-[10px] font-mono font-bold uppercase tracking-widest mt-4 border-t-2 border-slate-800 pt-4">
                  OS DADOS DA SIMULAÇÃO JÁ SERÃO ENVIADOS PARA NOSSA EQUIPE.
                </p>
              </div>
            )}
          </div>

          <div className="relative">
             <ContactForm planSelection={planSelection} />
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
