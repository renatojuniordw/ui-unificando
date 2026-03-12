import React from "react";
import { motion } from "framer-motion";

type Testimonial = {
  name: string;
  roleCompany: string;
  segment: string;
  result: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Cliente Unificando",
    roleCompany: "Gestor(a) • PME",
    segment: "Serviços",
    result:
      "“A equipe parou de se perder no WhatsApp, o tempo de resposta caiu e as conversas ficaram organizadas.”",
  },
  {
    name: "Cliente Unificando",
    roleCompany: "Diretor(a) • Negócio Local",
    segment: "Saúde",
    result:
      "“Com a rotina mais previsível, conseguimos atender mais gente sem aumentar o caos no dia a dia.”",
  },
  {
    name: "Cliente Unificando",
    roleCompany: "Founder • Empresa Digital",
    segment: "Tecnologia",
    result:
      "“O atendimento ficou escalável e com histórico. Isso diminuiu retrabalho e melhorou a experiência do cliente.”",
  },
];

const avatarFromName = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");

export const SocialProofSection: React.FC = () => {
  return (
    <section className="py-24 bg-white border-y-2 border-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center md:text-left mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <span className="inline-block bg-slate-950 text-[#ccff00] font-black uppercase tracking-[0.2em] text-[10px] px-3 py-1 mb-6">
              Prova Social
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-950 uppercase tracking-tighter leading-[0.9]">
              Resultados<br/>com contexto
            </h2>
          </div>
          <p className="text-slate-700 font-medium max-w-sm leading-relaxed border-l-4 border-[#ccff00] pl-4 text-left">
            Estes são exemplos do tipo de ganho absoluto que entregamos: mais conversão, menos caos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={`${t.name}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className="p-8 md:p-10 bg-white border-2 border-slate-950 hover:bg-[#ccff00] transition-colors duration-300 text-left flex flex-col shadow-[6px_6px_0px_rgba(0,0,0,1)] group"
            >
              <div className="flex justify-between items-start mb-8 gap-4">
                <div>
                  <div className="text-xs font-black uppercase tracking-[0.2em] text-slate-950 bg-white border border-slate-900 group-hover:border-transparent inline-block px-2 py-1 mb-2">
                    {t.segment}
                  </div>
                </div>
                <div className="w-12 h-12 border-2 border-slate-950 bg-white group-hover:bg-slate-950 group-hover:text-[#ccff00] text-slate-950 flex items-center justify-center font-black text-xs uppercase tracking-widest transition-colors flex-shrink-0">
                  {avatarFromName(t.name)}
                </div>
              </div>

              <div className="flex-grow">
                <p className="text-slate-950 text-base md:text-lg leading-relaxed font-bold font-mono">
                  {t.result}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t-2 border-slate-950/20">
                <div className="text-xs font-black uppercase tracking-[0.2em] text-slate-950">
                  {t.name}
                </div>
                <div className="text-[10px] font-bold text-slate-700 uppercase tracking-widest mt-1">
                  {t.roleCompany}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

