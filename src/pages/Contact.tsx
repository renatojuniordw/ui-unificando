import React, { useEffect, useState } from 'react';
import { SEO } from '../components/common/SEO';
import { PageTransition } from '../components/common/PageTransition';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [planSelection, setPlanSelection] = useState<any>(null);
  const [challenge, setChallenge] = useState('perda_mensagens');

  const CHALLENGES = [
    { value: "perda_mensagens", label: "Perco mensagens e demoro para responder" },
    { value: "muitas_conversas", label: "Tenho muitas conversas e pouco tempo" },
    { value: "equipe_confusa", label: "Minha equipe se confunde no atendimento" },
    { value: "fora_horario", label: "Atendo fora do horário e isso me sobrecarrega" },
    { value: "perguntas_repetidas", label: "Recebo muitas perguntas repetidas" },
    { value: "qualificacao", label: "Preciso qualificar melhor quem entra em contato" },
    { value: "agendamento_auto", label: "Quero agendar atendimentos automaticamente" },
    { value: "invisibilidade_google", label: "Tenho negócio, mas não apareço no Google" },
    { value: "site_sem_confianca", label: "Meu site não passa confiança (ou não tenho site)" },
    { value: "escalar_vendas", label: "Quero vender mais sem aumentar equipe" },
    { value: "outro", label: "Outro desafio" }
  ];

  useEffect(() => {
    const savedSelection = localStorage.getItem('unificando_plan_selection');
    if (savedSelection) {
      const parsed = JSON.parse(savedSelection);
      setPlanSelection(parsed);
      // Pre-select challenge based on plan if pertinent, 
      // or just keep it generic. Ideally, we could map this.
      // For now, we will just keep the selection logic simple or append extra info on submit.
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send 'planSelection' data along with the form
    console.log("Form Submitted", { planSelection, challenge });
    setSubmitted(true);
    // Clear selection after submission if desired
    localStorage.removeItem('unificando_plan_selection');
  };

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
            <span className="text-indigo-600 font-black uppercase tracking-[0.2em] text-[10px] mb-6 block">Vamos Conversar</span>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 uppercase tracking-tighter leading-tight">Entenda o próximo passo <span className="text-indigo-600">certo.</span></h1>
            <p className="text-lg text-slate-500 mb-12 leading-relaxed font-medium max-w-lg">
              Oferecemos um diagnóstico gratuito para identificar em que fase do ecossistema seu negócio está e o que realmente faz sentido implementar agora.
            </p>

            <div className="space-y-6">
              {[
                { t: "Diagnóstico real", d: "Análise do seu atendimento, processos e presença digital, sem custo." },
                { t: "Postura consultiva", d: "Foco no seu cenário atual, sem pressão, sem promessa vazia." },
                { t: "Resposta ágil", d: "Retorno em até 2 horas úteis, em horário comercial." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start p-6 bg-white border border-slate-200 rounded-[2rem] shadow-sm">
                  <div className="w-8 h-8 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 font-black text-xs">✓</div>
                  <div>
                    <h4 className="font-black text-slate-900 uppercase text-[10px] tracking-widest mb-1">{item.t}</h4>
                    <p className="text-[11px] text-slate-500 font-medium">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>

            {planSelection && (
              <div className="mt-8 p-6 bg-indigo-50 border border-indigo-100 rounded-[2rem]">
                <span className="text-[10px] font-black uppercase tracking-widest text-indigo-500 mb-2 block">Seleção Prévia:</span>
                <p className="text-indigo-900 font-bold text-sm">
                  Plano Personalizado (R$ {planSelection.totals?.monthly}/mês)
                </p>
                <p className="text-indigo-400 text-xs font-medium mt-1">
                  Seus dados de simulação já estão anexados ao contato.
                </p>
              </div>
            )}
          </div>

          <div className="bg-slate-900 p-10 md:p-14 rounded-[3.5rem] shadow-2xl border border-slate-800 text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-[80px]"></div>
            {submitted ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-indigo-500 text-white rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">Mensagem Recebida</h3>
                <p className="text-slate-400 font-medium uppercase text-[10px] tracking-widest">Aguarde nosso contato via WhatsApp.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[10px] font-black text-slate-400 mb-3 uppercase tracking-widest">Nome Completo</label>
                  <input required type="text" className="w-full bg-white/5 border border-white/10 text-white px-5 py-4 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none font-medium transition-all" placeholder="Como devemos te chamar?" />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 mb-3 uppercase tracking-widest">WhatsApp</label>
                  <input required type="tel" className="w-full bg-white/5 border border-white/10 text-white px-5 py-4 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none font-medium transition-all" placeholder="(00) 00000-0000" />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 mb-3 uppercase tracking-widest">Qual é o principal desafio hoje?</label>
                  <div className="relative">
                    <select
                      required
                      value={challenge}
                      onChange={(e) => setChallenge(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 text-white px-5 py-4 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none font-medium transition-all appearance-none cursor-pointer"
                    >
                      {CHALLENGES.map((option) => (
                        <option key={option.value} value={option.value} className="bg-slate-900 text-white">
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      ▼
                    </div>
                  </div>
                </div>
                <button type="submit" className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-black text-[10px] hover:bg-indigo-500 transition-all shadow-xl uppercase tracking-[0.2em] mt-6">
                  Agendar Conversa
                </button>
                <p className="text-center text-[8px] font-black text-slate-600 mt-6 uppercase tracking-[0.3em]">Seus dados estão seguros. Não enviamos spam.</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
