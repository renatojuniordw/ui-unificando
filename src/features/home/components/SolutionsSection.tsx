import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { MARKET_INSIGHTS } from "../../../constants/market-data";
import { CTA } from "../../../constants/cta";
import { trackCtaClick } from "../../../utils/analytics";
import { PartnerTech } from "./PartnerTech";

type SolutionsSectionProps = {
  selectedSegment: string | null;
};

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({
  selectedSegment,
}) => {
  const navigate = useNavigate();

  const handleCtaClick = (label: string, location: string, to: string, isExternal: boolean = false) => {
    trackCtaClick({ label, location, to });
    if (isExternal) {
      window.open(to, "_blank", "noopener,noreferrer");
    } else {
      navigate(to);
    }
  };

  const insightsByPillar = React.useMemo(() => {
    const map = new Map<string, (typeof MARKET_INSIGHTS)[number]>();
    for (const item of MARKET_INSIGHTS) map.set(item.pilar, item);
    return map;
  }, []);

  return (
    <section id="solutions" className="py-24 bg-white scroll-mt-24 border-b-2 border-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-20">
          <span className="inline-block bg-slate-950 text-[#ccff00] font-black uppercase tracking-[0.2em] text-[10px] px-3 py-1 mb-6">
            O Mecanismo
          </span>
          <h2 className="text-4xl md:text-7xl font-black text-slate-950 mb-6 uppercase tracking-tighter leading-[0.9]">
            A base da<br />automação
          </h2>
          <p className="text-slate-700 font-medium max-w-xl leading-relaxed border-l-4 border-[#ccff00] pl-4">
            Módulos independentes ou estrutura completa. Tudo projetado para escalar a operação sem aumentar o esforço.
          </p>
        </div>

        {selectedSegment ? (
          <div className="flex mb-10">
            <div className="inline-flex items-center gap-3 bg-[#ccff00] border-2 border-slate-950 text-slate-950 px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] shadow-[4px_4px_0px_#000]">
              Segmento em Foco: <span>{selectedSegment}</span>
            </div>
          </div>
        ) : null}

        {/* 2x2 Brutalist Grid */}
        <div className="grid md:grid-cols-2 gap-0 border-t-2 border-l-2 border-slate-950 bg-slate-950">
          
          {/* Module 1: Atendimento */}
          <motion.div
            whileHover={{ backgroundColor: "#ccff00" }}
            className="group relative p-8 md:p-12 bg-white border-r-2 border-b-2 border-slate-950 transition-colors duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="inline-block bg-slate-950 text-white text-[10px] font-black px-3 py-1 uppercase tracking-widest border border-transparent shadow-[3px_3px_0px_rgba(0,0,0,0.2)]">
                01 • Unificação
              </div>
              <h3 className="text-2xl md:text-4xl font-black mt-8 mb-4 uppercase tracking-tighter text-slate-950">
                Organização Absoluta
              </h3>
              <p className="text-slate-700 mb-8 font-medium text-sm leading-relaxed">
                Pare de perder vendas no vácuo. Coloque Instagram, WhatsApp e Site num único painel de guerra para sua equipe dominar.
              </p>
            </div>
            
            <button
              onClick={() => handleCtaClick(CTA.primary.label, "home_solutions_card_atendimento", CTA.primary.to as string, true)}
              className="text-slate-950 font-black inline-flex items-center gap-2 group-hover:gap-4 transition-all uppercase text-[11px] tracking-[0.2em] border-b-2 border-slate-950 pb-1 w-max"
            >
              Iniciar Unificação <span>→</span>
            </button>
          </motion.div>

          {/* Module 2: Processos */}
          <motion.div
            whileHover={{ backgroundColor: "#ccff00" }}
            className="group relative p-8 md:p-12 bg-white border-r-2 border-b-2 border-slate-950 transition-colors duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="inline-block bg-slate-950 text-white text-[10px] font-black px-3 py-1 uppercase tracking-widest border border-transparent shadow-[3px_3px_0px_rgba(0,0,0,0.2)]">
                02 • Inteligência
              </div>
              <h3 className="text-2xl md:text-4xl font-black mt-8 mb-4 uppercase tracking-tighter text-slate-950">
                Evolução por IA
              </h3>
              <p className="text-slate-700 mb-8 font-medium text-sm leading-relaxed">
                Vire a chave: máquinas atendendo o fluxo básico 24/7 enquanto humanos fecham negócios complexos. Sem gargalo.
              </p>
            </div>
            
            <button
              onClick={() => handleCtaClick(CTA.primary.label, "home_solutions_card_ia", CTA.primary.to as string, true)}
              className="text-slate-950 font-black inline-flex items-center gap-2 group-hover:gap-4 transition-all uppercase text-[11px] tracking-[0.2em] border-b-2 border-slate-950 pb-1 w-max"
            >
              Aplicar Inteligência <span>→</span>
            </button>
          </motion.div>

          {/* Module 3: Vitrine */}
          <motion.div
            whileHover={{ backgroundColor: "#ccff00" }}
            className="group relative p-8 md:p-12 bg-white border-r-2 border-b-2 border-slate-950 transition-colors duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="inline-block bg-slate-950 text-white text-[10px] font-black px-3 py-1 uppercase tracking-widest border border-transparent shadow-[3px_3px_0px_rgba(0,0,0,0.2)]">
                03 • Presença
              </div>
              <h3 className="text-2xl md:text-4xl font-black mt-8 mb-4 uppercase tracking-tighter text-slate-950">
                Território Digital
              </h3>
              <p className="text-slate-700 mb-8 font-medium text-sm leading-relaxed">
                Sair do Instagram não pode significar sumir. Construímos seu motor de buscas, sua casa inabalável na internet.
              </p>
            </div>
            
            <button
              onClick={() => handleCtaClick(CTA.primary.label, "home_solutions_card_presenca", CTA.primary.to as string, true)}
              className="text-slate-950 font-black inline-flex items-center gap-2 group-hover:gap-4 transition-all uppercase text-[11px] tracking-[0.2em] border-b-2 border-slate-950 pb-1 w-max"
            >
              Dominar Território <span>→</span>
            </button>
          </motion.div>

          {/* Module 4: Hospedagem */}
          <motion.div
            whileHover={{ backgroundColor: "#ccff00" }}
            className="group relative p-8 md:p-12 bg-white border-r-2 border-b-2 border-slate-950 transition-colors duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="inline-block bg-slate-950 text-white text-[10px] font-black px-3 py-1 uppercase tracking-widest border border-transparent shadow-[3px_3px_0px_rgba(0,0,0,0.2)]">
                04 • DaaS
              </div>
              <h3 className="text-2xl md:text-4xl font-black mt-8 mb-4 uppercase tracking-tighter text-slate-950">
                Deploy Serverless
              </h3>
              <p className="text-slate-700 mb-8 font-medium text-sm leading-relaxed">
                Criou em site-builders? Nós aterrissamos na web. Hospedagem profissional de ultra-velocidade sem fricção.
              </p>
            </div>
            
            <button
              onClick={() => handleCtaClick(CTA.primary.label, "home_solutions_card_hosting", CTA.primary.to as string, true)}
              className="text-slate-950 font-black inline-flex items-center gap-2 group-hover:gap-4 transition-all uppercase text-[11px] tracking-[0.2em] border-b-2 border-slate-950 pb-1 w-max"
            >
              Iniciar Deploy <span>→</span>
            </button>
          </motion.div>
        </div>

        <div className="mt-20 border-t-2 border-slate-950 pt-10">
          <PartnerTech />
        </div>
      </div>
    </section>
  );
};
