import React, { useState } from "react";
import { PRICING } from "../../constants/pricing";

export const FAQSection: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqItems = [
    {
      question: "O site é 'alugado' ou é meu?",
      answer:
        "O site é seu. Desenvolvemos o projeto para o seu negócio. Após o primeiro ano, a única cobrança recorrente é a de hospedagem (para mantê-lo no ar), mas você tem total posse sobre a criação.",
    },
    {
      question: "O que está incluso no primeiro ano?",
      answer:
        "Além da criação do site, entregamos 1 ano de hospedagem grátis e o registro do seu domínio (ex: suaempresa.com.br) por nossa conta.",
    },
    {
      question: "Qual o custo após o primeiro ano?",
      answer: `Para manter o site seguro e online em nossos servidores, cobramos uma taxa de manutenção de hospedagem (atualmente R$ ${PRICING.site.landing.hostingMonthly.toLocaleString("pt-BR")}/mês). Se não renovar, o site sai do ar, mas os arquivos continuam sendo seus.`,
    },
    {
      question: "Qual o prazo de entrega?",
      answer:
        "Para Landing Pages e Sites Institucionais padrão, o prazo médio é de até 15 dias úteis após o envio de todo o material (textos e fotos) e aprovação do briefing.",
    },
  ];

  return (
    <section className="py-24 bg-[#ccff00] border-y-4 border-slate-950">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <h2 className="text-4xl md:text-5xl font-black text-slate-950 text-center mb-12 uppercase tracking-tighter leading-[0.9]">
          DÚVIDAS FREQUENTES
        </h2>
        <div className="space-y-6 text-left">
          {faqItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border-4 border-slate-950 shadow-[8px_8px_0px_#000] hover:bg-slate-950 group transition-colors"
            >
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                aria-expanded={activeFaq === idx}
                aria-controls={`digital-faq-${idx}`}
                className="w-full flex justify-between items-center p-8 text-left"
              >
                <span className="font-black text-slate-950 group-hover:text-white text-lg uppercase tracking-wide">
                  {item.question}
                </span>
                <div
                  className={`w-10 h-10 border-2 border-slate-950 bg-slate-950 text-white flex items-center justify-center transition-all shadow-[2px_2px_0px_#000] group-hover:bg-[#ccff00] group-hover:text-slate-950 group-hover:shadow-[2px_2px_0px_#fff] ${activeFaq === idx ? "rotate-180 bg-[#ccff00] text-slate-950 shadow-[2px_2px_0px_#fff]" : ""} `}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="square"
                      strokeLinejoin="miter"
                      strokeWidth={3}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              {activeFaq === idx && (
                <div
                  id={`digital-faq-${idx}`}
                  role="region"
                  className="px-8 pb-8 text-slate-300 group-hover:text-slate-300 text-base leading-relaxed font-mono font-bold"
                >
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
