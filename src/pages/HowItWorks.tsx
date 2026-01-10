import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../routes';
import { SEO } from '../components/SEO';

export const HowItWorks: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="animate-in fade-in duration-700 bg-white">
      <SEO
        title="Como Funciona o Método Unificando | Crescimento sem Bagunça"
        description="Nosso método dividido em fases: Organização, Evolução e Autoridade. Entre no estágio ideal para o seu negócio."
        canonical="/como-funciona"
      />

      {/* Header */}
      <section className="py-24 bg-slate-50 border-b border-slate-200 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-indigo-600 font-black uppercase tracking-[0.2em] text-[10px] mb-4 block">Nossa forma de atuar</span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 uppercase tracking-tighter leading-none">Crescimento sem bagunça, <br /> no seu tempo.</h1>
          <p className="text-xl text-slate-500 font-medium leading-relaxed mb-6">Todo negócio passa por fases.</p>
          <p className="text-lg text-slate-900 font-bold max-w-2xl mx-auto">Nós entramos exatamente onde você está — e evoluímos junto.</p>
        </div>
      </section>

      {/* Phases Timeline */}
      <section className="py-24 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-100 hidden md:block -translate-x-1/2"></div>

          <div className="space-y-32">
            {/* PHASE 1: ANTES */}
            <div className="grid md:grid-cols-2 gap-12 items-center relative">
              <div className="md:pr-12 md:text-right">
                <div className="inline-block bg-slate-100 text-slate-600 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest mb-4">Antes - Fase 01</div>
                <h3 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Organização Total</h3>
                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 mb-6 inline-block md:ml-auto text-left">
                  <p className="text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Quando o atendimento está confuso</p>
                  <p className="text-sm text-slate-500 font-medium">Mensagens espalhadas, respostas perdidas, mais de uma pessoa atendendo sem controle. Aqui, o foco é organizar a base.</p>
                </div>

                <div className="space-y-4 mb-8">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block">O que fazemos:</span>
                  <ul className="space-y-2 text-sm font-bold text-slate-600 md:justify-end">
                    <li className="flex md:justify-end gap-2 items-center">Centralizamos WhatsApp, Instagram e site <span className="text-indigo-600">✓</span></li>
                    <li className="flex md:justify-end gap-2 items-center">Organizamos atendimento em equipe <span className="text-indigo-600">✓</span></li>
                    <li className="flex md:justify-end gap-2 items-center">Criamos controle e histórico <span className="text-indigo-600">✓</span></li>
                  </ul>
                </div>

                <button
                  onClick={() => navigate(ROUTES.PLANS)}
                  className="bg-slate-900 text-white px-8 py-4 rounded-xl text-[10px] font-black hover:bg-slate-800 transition-all uppercase tracking-widest shadow-lg"
                >
                  Simular atendimento
                </button>
              </div>

              <div className="hidden md:flex justify-start pl-12">
                <div className="w-24 h-24 bg-slate-900 text-white rounded-3xl flex items-center justify-center text-3xl shadow-2xl z-10 border-8 border-white">
                  📂
                </div>
              </div>
            </div>

            {/* PHASE 2: DURANTE */}
            <div className="grid md:grid-cols-2 gap-12 items-center relative">
              <div className="hidden md:flex justify-end pr-12 order-1">
                <div className="w-24 h-24 bg-indigo-600 text-white rounded-3xl flex items-center justify-center text-3xl shadow-2xl z-10 border-8 border-white">
                  ⚡
                </div>
              </div>

              <div className="md:pl-12 order-2 md:text-left">
                <div className="inline-block bg-indigo-50 text-indigo-600 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest mb-4">Durante - Fase 02</div>
                <h3 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Evolução Responsável</h3>
                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 mb-6 inline-block md:mr-auto">
                  <p className="text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Quando organizar já não basta</p>
                  <p className="text-sm text-slate-500 font-medium">O volume cresce, o tempo aperta e tarefas repetitivas viram gargalo. É hora de automatizar com critério.</p>
                </div>

                <div className="space-y-4 mb-8">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block">O que fazemos:</span>
                  <ul className="space-y-2 text-sm font-bold text-slate-600">
                    <li className="flex gap-2 items-center"><span className="text-indigo-600">✓</span> Identificamos gargalos</li>
                    <li className="flex gap-2 items-center"><span className="text-indigo-600">✓</span> Criamos fluxos inteligentes</li>
                    <li className="flex gap-2 items-center"><span className="text-indigo-600">✓</span> IA sem perder o toque humano</li>
                  </ul>
                </div>

                <button
                  onClick={() => navigate(ROUTES.PLANS)}
                  className="bg-indigo-600 text-white px-8 py-4 rounded-xl text-[10px] font-black hover:bg-indigo-700 transition-all uppercase tracking-widest shadow-lg shadow-indigo-200"
                >
                  Simular atendimento com IA
                </button>
              </div>
            </div>

            {/* PHASE 3: DEPOIS */}
            <div className="grid md:grid-cols-2 gap-12 items-center relative">
              <div className="md:pr-12 md:text-right">
                <div className="inline-block bg-slate-100 text-slate-600 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest mb-4">Depois - Fase 03</div>
                <h3 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Autoridade de Marca</h3>
                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 mb-6 inline-block md:ml-auto text-left">
                  <p className="text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Quando a operação está sólida</p>
                  <p className="text-sm text-slate-500 font-medium">Agora o negócio precisa ser encontrado, respeitado e lembrado. Construímos sua presença digital para sustentar o crescimento.</p>
                </div>

                <div className="space-y-4 mb-8">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block">O que fazemos:</span>
                  <ul className="space-y-2 text-sm font-bold text-slate-600 md:justify-end">
                    <li className="flex md:justify-end gap-2 items-center">Vitrine profissional e perfomance <span className="text-indigo-600">✓</span></li>
                    <li className="flex md:justify-end gap-2 items-center">Estrutura de SEO (Google) <span className="text-indigo-600">✓</span></li>
                    <li className="flex md:justify-end gap-2 items-center">Integração Site + Atendimento <span className="text-indigo-600">✓</span></li>
                  </ul>
                </div>

                <button
                  onClick={() => navigate(ROUTES.PLANS)}
                  className="bg-slate-900 text-white px-8 py-4 rounded-xl text-[10px] font-black hover:bg-slate-800 transition-all uppercase tracking-widest shadow-lg"
                >
                  Simular site
                </button>
              </div>

              <div className="hidden md:flex justify-start pl-12">
                <div className="w-24 h-24 bg-slate-900 text-white rounded-3xl flex items-center justify-center text-3xl shadow-2xl z-10 border-8 border-white">
                  🌐
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jornada Contínua CTA */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-indigo-600/10 blur-[100px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-12 uppercase tracking-tighter">🚀 Uma jornada contínua</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">01</span>
              <p className="text-sm font-bold mt-2">Comece em qualquer fase</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">02</span>
              <p className="text-sm font-bold mt-2">Pule etapas se precisar</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">03</span>
              <p className="text-sm font-bold mt-2">Combine soluções</p>
            </div>
          </div>

          <p className="text-slate-400 text-sm font-medium mb-12 uppercase tracking-widest">Nada é engessado. Tudo é pensado para o seu momento.</p>

          <button
            onClick={() => navigate(ROUTES.CONTACT)}
            className="bg-white text-slate-900 px-12 py-5 rounded-2xl text-[10px] font-black hover:bg-slate-200 transition-all shadow-2xl uppercase tracking-widest"
          >
            Simular minha solução
          </button>
        </div>
      </section>

      {/* Footer / Transparency */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 mb-6 opacity-50">
            <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Transparência desde o início</span>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-xs font-bold text-slate-400 uppercase tracking-wide">
            <span>Veja o valor antes de falar</span>
            <span className="text-slate-200">•</span>
            <span>Escolha apenas o que precisa</span>
            <span className="text-slate-200">•</span>
            <span>Sem promessas mágicas</span>
          </div>
        </div>
      </section>
    </div>
  );
};
