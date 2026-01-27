import React, { useState } from "react";

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
      answer:
        "Para manter o site seguro e online em nossos servidores, cobramos uma taxa de manutenção de hospedagem (atualmente R$ 70/mês). Se não renovar, o site sai do ar, mas os arquivos continuam sendo seus.",
    },
    {
      question: "Qual o prazo de entrega?",
      answer:
        "Para Landing Pages e Sites Institucionais padrão, o prazo médio é de até 15 dias úteis após o envio de todo o material (textos e fotos) e aprovação do briefing.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-black text-slate-900 text-center mb-12 uppercase tracking-tight">
          Dúvidas Frequentes
        </h2>
        <div className="space-y-4 text-left">
          {faqItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-100 rounded-[2rem] overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                aria-expanded={activeFaq === idx}
                aria-controls={`digital-faq-${idx}`}
                className="w-full flex justify-between items-center p-7 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-black text-slate-800 text-sm uppercase tracking-wide">
                  {item.question}
                </span>
                <div
                  className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 transition-all ${activeFaq === idx ? "rotate-180 bg-slate-900 text-white" : ""} `}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              {activeFaq === idx && (
                <div
                  id={`digital-faq-${idx}`}
                  role="region"
                  className="px-7 pb-7 text-slate-500 text-sm leading-relaxed font-medium"
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
