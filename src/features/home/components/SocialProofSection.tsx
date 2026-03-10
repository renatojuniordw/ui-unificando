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
    <section className="py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-indigo-600 font-black uppercase tracking-[0.2em] text-xs mb-4 block">
            Prova social
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tighter">
            Resultados com rosto e contexto
          </h2>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
            Se você ainda não conhece a Unificando, estes são exemplos do tipo de
            ganho que buscamos entregar ao organizar atendimento, automação e
            presença digital.
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
              className="p-10 rounded-[3rem] bg-slate-50 border border-slate-200 hover:border-indigo-200 hover:bg-white hover:shadow-2xl transition-all duration-300 text-left flex flex-col"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-black text-xs uppercase tracking-widest">
                  {avatarFromName(t.name)}
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-[0.2em] text-slate-900">
                    {t.name}
                  </div>
                  <div className="text-[11px] font-bold text-slate-500">
                    {t.roleCompany}
                  </div>
                </div>
              </div>

              <div className="text-[11px] font-black uppercase tracking-[0.2em] text-indigo-600 mb-4">
                Segmento: {t.segment}
              </div>

              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                {t.result}
              </p>

              <div className="mt-10 pt-6 border-t border-slate-200">
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  * Troque por depoimentos reais (nome/foto/empresa) quando
                  disponíveis
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

