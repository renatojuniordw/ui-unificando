import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../routes';
import { PageTransition } from '../components/common/PageTransition';
import { motion, Variants } from 'framer-motion';
import { SEO } from '../components/common/SEO';
import { PRICING } from '../constants/pricing';

interface PlansProps { }

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const card: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

export const Plans: React.FC<PlansProps> = () => {
  const navigate = useNavigate();
  // Calculator State
  const [includeSupport, setIncludeSupport] = useState(true);
  const [inboxes, setInboxes] = useState(1);
  const [attendants, setAttendants] = useState(1);
  const [aiEnabled, setAiEnabled] = useState(false);
  // Removed aiLevel state as there is only one plan now
  const [siteEnabled, setSiteEnabled] = useState(false);
  const [sitePages, setSitePages] = useState(1);

  // Pricing Logic
  const calculateSolution = () => {
    const clampInt = (value: number, min: number) => Math.max(min, Number.isFinite(value) ? Math.floor(value) : min);

    // Normalized values
    const normInboxes = clampInt(inboxes, PRICING.calculadora.rules.minimumInboxes);
    const normAttendants = clampInt(attendants, PRICING.calculadora.rules.minimumAttendants);
    const normSitePages = clampInt(sitePages, 1);

    let setup = 0;
    let monthly = 0;

    // Support
    if (includeSupport) {
      setup += PRICING.atendimento.base.setup;
      monthly += PRICING.atendimento.base.monthly;
      if (normInboxes > 1) monthly += (normInboxes - 1) * PRICING.atendimento.extras.inbox.priceMonthly;
      if (normAttendants > 1) monthly += (normAttendants - 1) * PRICING.atendimento.extras.attendant.priceMonthly;
    }

    // AI
    if (aiEnabled) {
      setup += PRICING.ia.setup;
      monthly += PRICING.ia.monthly;
    }

    // Site
    if (siteEnabled) {
      setup += PRICING.site.landing.setup;
      if (normSitePages > 1) {
        setup += (normSitePages - 1) * PRICING.site.extraPage.priceSetup;
      }
    }

    return { setup, monthly };
  };

  const { setup, monthly } = calculateSolution();

  const handleContractClick = () => {
    const selection = {
      includeSupport,
      inboxes,
      attendants,
      aiEnabled,
      // aiLevel removed
      siteEnabled,
      sitePages: siteEnabled ? sitePages : null,
      totals: {
        setup,
        monthly
      }
    };

    localStorage.setItem('unificando_plan_selection', JSON.stringify(selection));
    navigate(ROUTES.CONTACT);
  };

  return (
    <PageTransition className="bg-white">
      <SEO
        title="Planos e Preços | Unificando"
        description="Monte a solução ideal para o seu negócio. Atendimento Digital, Inteligência Artificial e Sites."
        canonical="/planos"
      />

      {/* Header */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-indigo-600 font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">Planos Unificando</span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 uppercase tracking-tighter leading-none">Monte a solução ideal <br /> para o seu negócio.</h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">
            Você escolhe os canais, o tamanho da equipe e se deseja usar Inteligência Artificial.
          </p>
        </div>
      </section>

      {/* CALCULATOR SECTION */}
      <section className="pt-20 pb-5 bg-white sticky top-0 z-30 shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-slate-900 text-white rounded-[2rem] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 blur-[80px] pointer-events-none"></div>

            <div className="relative z-10 text-center md:text-left">
              <span className="text-indigo-400 font-black uppercase tracking-widest text-[10px] mb-2 block">Investimento Estimado</span>
              <div className="flex items-end gap-6 justify-center md:justify-start">
                <div>
                  <span className="block text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">Setup Único</span>
                  <span className="text-3xl md:text-4xl font-black tracking-tighter">R$ {setup.toLocaleString('pt-BR')}</span>
                </div>
                <div className="w-px h-10 bg-white/10"></div>
                <div>
                  <span className="block text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">Mensalidade</span>
                  <span className="text-3xl md:text-4xl font-black tracking-tighter text-indigo-400">R$ {monthly.toLocaleString('pt-BR')}</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 flex gap-4 w-full md:w-auto">
              <button
                onClick={handleContractClick}
                className="flex-1 md:flex-none bg-white text-slate-900 px-8 py-4 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-indigo-50 transition-all"
              >
                Contratar este Plano
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CONFIGURATOR */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-8">

          {/* Module: Support */}
          <div className={`rounded-[2.5rem] p-8 border-2 transition-all ${includeSupport ? 'bg-slate-50 border-indigo-600' : 'bg-white border-slate-200 opacity-60 grayscale'}`}>
            <div className="flex justify-between items-start mb-8">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm">💬</div>
              <button
                onClick={() => setIncludeSupport(!includeSupport)}
                className={`w-12 h-7 rounded-full transition-all relative ${includeSupport ? 'bg-indigo-600' : 'bg-slate-300'}`}
              >
                <div className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-all shadow-sm ${includeSupport ? 'right-1' : 'left-1'}`}></div>
              </button>
            </div>
            <h3 className="text-xl font-black uppercase tracking-tight text-slate-900 mb-2">Atendimento</h3>
            <p className="text-xs text-slate-500 font-medium mb-8">Painel multicanal para sua equipe.</p>

            {includeSupport && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                <div>
                  <div className="flex justify-between text-xs font-bold uppercase tracking-wide text-slate-700 mb-3">
                    <span>Caixas de Entrada (Canais)</span>
                    <span>{inboxes}</span>
                  </div>
                  <input
                    type="range"
                    min={PRICING.calculadora.rules.minimumInboxes}
                    max="10"
                    value={inboxes}
                    onChange={(event) => setInboxes(parseInt(event.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                  />
                  <p className="text-[10px] text-slate-400 mt-2 font-medium">WhatsApp, Instagram, Site, Telegram...</p>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-bold uppercase tracking-wide text-slate-700 mb-3">
                    <span>Atendentes (Usuários)</span>
                    <span>{attendants}</span>
                  </div>
                  <input
                    type="range"
                    min={PRICING.calculadora.rules.minimumAttendants}
                    max="20"
                    value={attendants}
                    onChange={(event) => setAttendants(parseInt(event.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Module: AI */}
          <div className={`rounded-[2.5rem] p-8 border-2 transition-all ${aiEnabled ? 'bg-slate-50 border-indigo-600' : 'bg-white border-slate-200 opacity-60 grayscale'}`}>
            <div className="flex justify-between items-start mb-8">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm">🤖</div>
              <button
                onClick={() => setAiEnabled(!aiEnabled)}
                className={`w-12 h-7 rounded-full transition-all relative ${aiEnabled ? 'bg-indigo-600' : 'bg-slate-300'}`}
              >
                <div className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-all shadow-sm ${aiEnabled ? 'right-1' : 'left-1'}`}></div>
              </button>
            </div>
            <h3 className="text-xl font-black uppercase tracking-tight text-slate-900 mb-2">Inteligência Artificial</h3>
            <p className="text-xs text-slate-500 font-medium mb-8">Agentes inteligentes 24/7.</p>

            {aiEnabled && (
              <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4">
                <div className="w-full p-4 rounded-xl border-2 text-left transition-all bg-white border-indigo-600 shadow-md">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-black text-xs uppercase tracking-wider text-slate-900">Plano IA Avançada</span>
                    <span className="text-indigo-600 font-black text-xs">R$ {PRICING.ia.monthly}<span className="text-[9px] text-slate-400 font-medium">/mês</span></span>
                  </div>
                  <p className="text-[10px] text-slate-500 font-medium mb-3">Solução completa para seu atendimento.</p>

                  <ul className="grid grid-cols-2 gap-2">
                    {PRICING.ia.features.map((feature, index) => (
                      <li key={index} className="flex gap-1.5 items-center text-[9px] font-bold text-slate-600">
                        <span className="text-indigo-600">✓</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Module: Site */}
          <div className={`rounded-[2.5rem] p-8 border-2 transition-all ${siteEnabled ? 'bg-slate-50 border-indigo-600' : 'bg-white border-slate-200 opacity-60 grayscale'}`}>
            <div className="flex justify-between items-start mb-8">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm">🌐</div>
              <button
                onClick={() => setSiteEnabled(!siteEnabled)}
                className={`w-12 h-7 rounded-full transition-all relative ${siteEnabled ? 'bg-indigo-600' : 'bg-slate-300'}`}
              >
                <div className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-all shadow-sm ${siteEnabled ? 'right-1' : 'left-1'}`}></div>
              </button>
            </div>
            <h3 className="text-xl font-black uppercase tracking-tight text-slate-900 mb-2">Site & Landing Page</h3>
            <p className="text-xs text-slate-500 font-medium mb-8">Sua casa própria na internet.</p>

            {siteEnabled && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
                <div>
                  <div className="flex justify-between text-xs font-bold uppercase tracking-wide text-slate-700 mb-3">
                    <span>Total de Páginas</span>
                    <span>{sitePages}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={sitePages}
                    onChange={(event) => setSitePages(parseInt(event.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                  />
                  <p className="text-[10px] text-slate-400 mt-2 font-medium">1 = Landing Page única. 2+ = Páginas internas.</p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-slate-200">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-xs uppercase text-slate-700">Setup Site</span>
                    <span className="font-black text-slate-900">R$ {PRICING.site.landing.setup + ((sitePages > 1 ? sitePages - 1 : 0) * PRICING.site.extraPage.priceSetup)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-xs uppercase text-slate-400">Mensal</span>
                    <span className="font-black text-slate-400">R$ 0</span>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* DETALHAMENTO (ANTIGO, REESTRUTURADO) */}
      <section className="py-24 bg-white relative border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-4">Detalhamento dos Serviços</h2>
            <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">Entenda o que está incluso em cada módulo.</p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* LISTA DE SERVIÇOS (MANTIDA MAS SIMPLIFICADA VISUALMENTE) */}
            <div className="bg-slate-50 border border-slate-200 rounded-[3rem] p-8 md:p-12 shadow-sm">
              <h3 className="text-lg font-black uppercase tracking-widest text-slate-900 mb-6">💬 Atendimento Digital</h3>
              <ul className="grid md:grid-cols-2 gap-4 text-sm font-medium text-slate-600">
                <li className="flex gap-3"><span className="text-indigo-600 font-bold">✓</span> Atendimento em WhatsApp, Instagram, Telegram</li>
                <li className="flex gap-3"><span className="text-indigo-600 font-bold">✓</span> Histórico completo e centralizado</li>
                <li className="flex gap-3"><span className="text-indigo-600 font-bold">✓</span> Gestão de equipe e permissões</li>
              </ul>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-[3rem] p-8 md:p-12 shadow-sm">
              <h3 className="text-lg font-black uppercase tracking-widest text-slate-900 mb-6">🤖 Inteligência Artificial</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <ul className="space-y-3 text-sm text-slate-600 font-medium">
                  {PRICING.ia.features.map((feature, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="text-indigo-600 font-bold">✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-6 opacity-40">Regras de Negócio</h3>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 font-bold text-slate-400 text-sm">1</div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide mb-1">Canais e Inboxes</h4>
                  <p className="text-sm text-slate-500 font-medium">Cada canal conectado (WhatsApp, Instagram, Site) conta como 1 Inbox.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 font-bold text-slate-400 text-sm">2</div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide mb-1">Diagnóstico IA</h4>
                  <p className="text-sm text-slate-500 font-medium">Projetos de IA passam por uma etapa de alinhamento técnico para garantir viabilidade.</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-6">🔎 Importante saber</h3>
            <div className="bg-slate-50 rounded-[2rem] p-8 border border-slate-200">
              <ul className="space-y-4 text-sm font-medium text-slate-600">
                <li className="flex gap-3">
                  <span className="text-slate-400">⚠️</span>
                  <span>Não fornecemos número de WhatsApp ou contas de Instagram. Os canais utilizados são sempre do cliente.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-indigo-600">✓</span>
                  <span>A IA respeita as regras de uso do WhatsApp, Instagram e demais canais para garantir segurança.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </PageTransition>
  );
};
