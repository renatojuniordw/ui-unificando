import React from "react";
import { SEO } from "../components/common/SEO";
import { PageTransition } from "../components/common/PageTransition";
import { ContactForm } from "../components/contact/ContactForm";
import { ROUTES } from "../routes";

export const Contact: React.FC = () => {
  return (
    <PageTransition className="bg-[#ccff00]">
      <SEO
        title="Fale Conosco | Unificando"
        description="Entre em contato para conversarmos sobre seu projeto."
        canonical={ROUTES.CONTACT}
        keywords="contato Unificando, falar conosco, projeto autoral, parceria, laboratório digital, conversa sobre projeto"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Fale Conosco - Unificando",
          description:
            "Entre em contato para conversarmos sobre seu projeto.",
          mainEntity: {
            "@type": "Organization",
            name: "Unificando",
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer support",
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
              CONTE SOBRE <br/>
              <span className="inline-block bg-slate-950 text-[#ccff00] px-4 -rotate-1 border-4 border-slate-950 shadow-[6px_6px_0px_#fff] mt-2">
                SEU PROJETO.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-950 mb-12 leading-tight font-black uppercase tracking-tight max-w-lg">
              <span className="bg-white px-2 border-2 border-slate-950 mr-1 shadow-[2px_2px_0px_#000] inline-block mb-1">
                BORA CONVERSAR
              </span> — Toda ideia começa com uma conversa.
            </p>

            <div className="space-y-6">
              {[
                {
                  title: "CONVERSA REAL",
                  description:
                    "Entendemos sua ideia e contexto, sem roteiro de venda.",
                },
                {
                  title: "POSTURA CONSULTIVA",
                  description:
                    "Foco no seu projeto, sem pressão, sem promessa vazia.",
                },
                {
                  title: "RESPOSTA ÁGIL",
                  description:
                    "Retornamos em até 24 horas úteis.",
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
                    <h2 className="font-black text-slate-950 uppercase text-xs md:text-sm tracking-widest mb-2 leading-none">
                      {benefit.title}
                    </h2>
                    <p className="text-xs text-slate-950 font-mono font-bold leading-relaxed uppercase">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
             <ContactForm />
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
