import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { MARKET_INSIGHTS } from "../../../constants/market-data";
import { CTA } from "../../../constants/cta";
import { ROUTES } from "../../../routes";
import { trackCtaClick } from "../../../utils/analytics";
import { PartnerTech } from "./PartnerTech";

type SolutionsSectionProps = {
  selectedSegment: string | null;
};

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({
  selectedSegment,
}) => {
  const navigate = useNavigate();
  const insightsByPillar = React.useMemo(() => {
    const map = new Map<string, (typeof MARKET_INSIGHTS)[number]>();
    for (const item of MARKET_INSIGHTS) map.set(item.pilar, item);
    return map;
  }, []);

  return (
    <section id="solutions" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <span className="text-indigo-600 font-black uppercase tracking-[0.2em] text-xs mb-4 block">
            Nossas Soluções
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tighter">
            O que fazemos
          </h2>
          <p className="text-slate-500 font-medium max-w-xl mx-auto leading-relaxed">
            Contrate de forma modular ou completa. Cada solução funciona sozinha
            — juntas, formam uma estrutura sólida para seu crescimento.
          </p>
        </div>

        {selectedSegment ? (
          <div className="flex justify-center mb-10">
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-5 py-2.5 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em]">
              Segmento selecionado: <span className="text-indigo-900">{selectedSegment}</span>
            </div>
          </div>
        ) : null}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {/* Atendimento */}
          <motion.div
            whileHover={{ y: -8 }}
            className="group relative p-10 bg-slate-50 rounded-[3rem] border border-slate-200 hover:border-indigo-200 hover:bg-white hover:shadow-2xl transition-all duration-300 text-left"
          >
            <div className="absolute -top-3 left-10 bg-indigo-600 text-white text-[11px] font-black px-5 py-2 rounded-full uppercase tracking-widest shadow-lg">
              Atendimento Unificado
            </div>
            <h3 className="text-3xl font-black mb-4 mt-8 uppercase tracking-tighter text-slate-900">
              Organização
            </h3>
            <p className="text-slate-500 mb-8 font-medium text-sm leading-relaxed">
              Centralize todos os canais em um único painel profissional. Tenha
              controle total do histórico e escale seu atendimento em equipe.
            </p>
            {(() => {
              const insight = insightsByPillar.get("Atendimento Unificado");
              if (!insight) return null;
              return (
                <div className="mb-8 p-5 rounded-2xl bg-white border border-slate-200">
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">
                    Dado de mercado
                  </div>
                  <div className="flex items-baseline gap-3">
                    <div className="text-3xl font-black text-slate-900 tracking-tighter">
                      {insight.stat}
                    </div>
                    <div className="text-xs font-bold text-slate-500 leading-snug">
                      {insight.title}
                    </div>
                  </div>
                  <div className="text-[11px] font-medium text-slate-500 mt-2 leading-relaxed">
                    {insight.description}
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-4">
                    Fonte: {insight.source}
                  </div>
                </div>
              );
            })()}
            <button
              onClick={() => {
                trackCtaClick({
                  label: CTA.primary.label,
                  location: "home_solutions_card_atendimento",
                  to: CTA.primary.to,
                });
                navigate(CTA.primary.to);
              }}
              className="text-indigo-600 font-black inline-flex items-center gap-2 group-hover:gap-4 transition-all uppercase text-[11px] tracking-[0.2em]"
            >
              {CTA.primary.label} <span>→</span>
            </button>
          </motion.div>

          {/* Processos */}
          <motion.div
            whileHover={{ y: -8 }}
            className="group relative p-10 bg-slate-50 rounded-[3rem] border border-slate-200 hover:border-indigo-200 hover:bg-white hover:shadow-2xl transition-all duration-300 text-left"
          >
            <div className="absolute -top-3 left-10 bg-indigo-400 text-white text-[11px] font-black px-5 py-2 rounded-full uppercase tracking-widest shadow-lg">
              IA no Atendimento
            </div>
            <h3 className="text-3xl font-black mb-4 mt-8 uppercase tracking-tighter text-slate-900">
              Evolução
            </h3>
            <p className="text-slate-500 mb-8 font-medium text-sm leading-relaxed">
              Automatizamos o que faz sentido e implementamos IA com
              responsabilidade, transformando conversas em dados estratégicos.
            </p>
            {(() => {
              const insight = insightsByPillar.get("IA no Atendimento");
              if (!insight) return null;
              return (
                <div className="mb-8 p-5 rounded-2xl bg-white border border-slate-200">
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">
                    Dado de mercado
                  </div>
                  <div className="flex items-baseline gap-3">
                    <div className="text-3xl font-black text-slate-900 tracking-tighter">
                      {insight.stat}
                    </div>
                    <div className="text-xs font-bold text-slate-500 leading-snug">
                      {insight.title}
                    </div>
                  </div>
                  <div className="text-[11px] font-medium text-slate-500 mt-2 leading-relaxed">
                    {insight.description}
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-4">
                    Fonte: {insight.source}
                  </div>
                </div>
              );
            })()}
            <button
              onClick={() => {
                trackCtaClick({
                  label: CTA.primary.label,
                  location: "home_solutions_card_ia",
                  to: CTA.primary.to,
                });
                navigate(CTA.primary.to);
              }}
              className="text-indigo-600 font-black inline-flex items-center gap-2 group-hover:gap-4 transition-all uppercase text-[11px] tracking-[0.2em]"
            >
              {CTA.primary.label} <span>→</span>
            </button>
          </motion.div>

          {/* Vitrine */}
          <motion.div
            whileHover={{ y: -8 }}
            className="group relative p-10 bg-slate-50 rounded-[3rem] border border-slate-200 hover:border-indigo-200 hover:bg-white hover:shadow-2xl transition-all duration-300 text-left"
          >
            <div className="absolute -top-3 left-10 bg-slate-900 text-white text-[11px] font-black px-5 py-2 rounded-full uppercase tracking-widest shadow-lg">
              Sites & Presença Online
            </div>
            <h3 className="text-3xl font-black mb-4 mt-8 uppercase tracking-tighter text-slate-900">
              Presença
            </h3>
            <p className="text-slate-500 mb-8 font-medium text-sm leading-relaxed">
              Construímos sua 'casa própria' na internet para que sua empresa
              seja encontrada no Google, respeitada e lembrada pelos clientes.
            </p>
            {(() => {
              const insight = insightsByPillar.get("Presença Online");
              if (!insight) return null;
              return (
                <div className="mb-8 p-5 rounded-2xl bg-white border border-slate-200">
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">
                    Dado de mercado
                  </div>
                  <div className="flex items-baseline gap-3">
                    <div className="text-3xl font-black text-slate-900 tracking-tighter">
                      {insight.stat}
                    </div>
                    <div className="text-xs font-bold text-slate-500 leading-snug">
                      {insight.title}
                    </div>
                  </div>
                  <div className="text-[11px] font-medium text-slate-500 mt-2 leading-relaxed">
                    {insight.description}
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-4">
                    Fonte: {insight.source}
                  </div>
                </div>
              );
            })()}
            <button
              onClick={() => {
                trackCtaClick({
                  label: CTA.primary.label,
                  location: "home_solutions_card_presenca",
                  to: CTA.primary.to,
                });
                navigate(CTA.primary.to);
              }}
              className="text-indigo-600 font-black inline-flex items-center gap-2 group-hover:gap-4 transition-all uppercase text-[11px] tracking-[0.2em]"
            >
              {CTA.primary.label} <span>→</span>
            </button>
          </motion.div>

          {/* Hospedagem Inteligente */}
          <motion.div
            whileHover={{ y: -8 }}
            className="group relative p-8 lg:p-10 bg-slate-50 rounded-[3rem] border border-slate-200 hover:border-indigo-200 hover:bg-white hover:shadow-2xl transition-all duration-300 text-left"
          >
            <div className="absolute -top-3 left-10 bg-indigo-100 text-indigo-700 border border-indigo-200 text-[11px] font-black px-5 py-2 rounded-full uppercase tracking-widest shadow-sm">
              Deploy Otimizado
            </div>
            <h3 className="text-3xl font-black mb-4 mt-8 uppercase tracking-tighter text-slate-900">
              Hospedagem
            </h3>
            <p className="text-slate-500 mb-8 font-medium text-sm leading-relaxed">
              Você cria seu site com IA, nós colocamos no ar com domínio próprio e SSL. Sem barreiras técnicas.
            </p>
            <div className="mb-8 p-5 rounded-2xl bg-white border border-slate-200">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">
                Oportunidade
              </div>
              <div className="flex items-baseline gap-3">
                <div className="text-3xl font-black text-slate-900 tracking-tighter">
                  100%
                </div>
                <div className="text-xs font-bold text-slate-500 leading-snug">
                  Gerenciado
                </div>
              </div>
              <div className="text-[11px] font-medium text-slate-500 mt-2 leading-relaxed">
                Foque apenas na criação com ferramentas No-Code/AI.
              </div>
              <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-4">
                DaaS (Deploy as a Service)
              </div>
            </div>
            <button
              onClick={() => {
                trackCtaClick({
                  label: "Hospedar Site Agora",
                  location: "home_solutions_card_hosting",
                  to: ROUTES.SMART_HOSTING,
                });
                navigate(ROUTES.SMART_HOSTING);
              }}
              className="text-indigo-600 font-black inline-flex items-center gap-2 group-hover:gap-4 transition-all uppercase text-[11px] tracking-[0.2em]"
            >
              Hospedar Site Agora <span>→</span>
            </button>
          </motion.div>
        </div>

        <div className="mt-20">
          <PartnerTech />
        </div>
      </div>
    </section>
  );
};
