import React, { useEffect, useState } from "react";
import { SEO } from "../components/common/SEO";
import { PageTransition } from "../components/common/PageTransition";
import { ContactForm } from "../components/contact/ContactForm";

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
    <PageTransition>
      <SEO
        title="Fale Conosco | Diagnóstico Gratuito Unificando"
        description="Agende uma conversa com nossos especialistas. Diagnóstico real do seu negócio sem custo e sem compromisso."
        canonical="/contato"
      />
      <section className="py-24 bg-slate-50 min-h-[80vh] flex items-center text-left border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16">
          <div>
            <span className="text-indigo-600 font-black uppercase tracking-[0.2em] text-[10px] mb-6 block">
              Vamos Conversar
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 uppercase tracking-tighter leading-tight">
              Entenda o próximo passo{" "}
              <span className="text-indigo-600">certo.</span>
            </h1>
            <p className="text-lg text-slate-500 mb-12 leading-relaxed font-medium max-w-lg">
              Oferecemos um diagnóstico gratuito para identificar em que fase do
              ecossistema seu negócio está e o que realmente faz sentido
              implementar agora.
            </p>

            <div className="space-y-6">
              {[
                {
                  title: "Diagnóstico real",
                  description:
                    "Análise do seu atendimento, processos e presença digital, sem custo.",
                },
                {
                  title: "Postura consultiva",
                  description:
                    "Foco no seu cenário atual, sem pressão, sem promessa vazia.",
                },
                {
                  title: "Resposta ágil",
                  description:
                    "Retorno em até 2 horas úteis, em horário comercial.",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-start p-6 bg-white border border-slate-200 rounded-[2rem] shadow-sm"
                >
                  <div className="w-8 h-8 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 font-black text-xs">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 uppercase text-[10px] tracking-widest mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 font-medium">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {planSelection && (
              <div className="mt-8 p-6 bg-indigo-50 border border-indigo-100 rounded-[2rem]">
                <span className="text-[10px] font-black uppercase tracking-widest text-indigo-500 mb-2 block">
                  Seleção Prévia:
                </span>
                <p className="text-indigo-900 font-bold text-sm">
                  Plano Personalizado (R$ {planSelection.totals?.monthly}/mês)
                </p>
                <p className="text-indigo-400 text-xs font-medium mt-1">
                  Seus dados de simulação já estão anexados ao contato.
                </p>
              </div>
            )}
          </div>

          <ContactForm planSelection={planSelection} />
        </div>
      </section>
    </PageTransition>
  );
};
