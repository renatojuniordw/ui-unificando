
import React from 'react';
import { Page } from '../types';
import { motion, Variants } from 'framer-motion';
import { SEO } from '../components/SEO';

interface PlansProps {
  onNavigate: (page: Page) => void;
}

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

export const Plans: React.FC<PlansProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white">
      <SEO
        title="Planos e Preços | Soluções para Pequenas Empresas"
        description="Veja nossos planos acessíveis para organização, atendimento e presença digital. Sem contratos abusivos, feito para PMEs."
        canonical="/planos"
      />
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-indigo-600 font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">Investimento Modular</span>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 uppercase tracking-tighter leading-none">Planos e Transparência.</h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">
            Estrutura de custos pensada para escalar com o seu faturamento, sem letras miúdas.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <motion.div
          className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* FASE 01 */}
          <motion.div variants={card} className="flex flex-col bg-slate-50 border border-slate-200 rounded-[3rem] p-12 hover:border-indigo-400 transition-all text-left group">
            <div className="mb-10">
              <div className="inline-block bg-white text-slate-900 font-black uppercase tracking-widest text-[10px] px-4 py-1.5 rounded-full mb-6 border border-slate-200">Plano Básico</div>
              <h3 className="text-3xl font-bold text-slate-900 uppercase tracking-tighter mb-2">Autônomo</h3>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Ideal pra quem atende sozinho</p>
            </div>
            <div className="mb-10 flex items-baseline gap-1">
              <span className="text-slate-400 text-lg font-black">R$</span>
              <span className="text-6xl font-black text-slate-900 tracking-tighter">79</span>
              <span className="text-slate-400 font-bold">/mês</span>
            </div>
            <ul className="space-y-4 mb-12 flex-grow text-[11px] font-bold uppercase tracking-tight text-slate-500">
              <li className="flex gap-3"><span className="text-indigo-600">✓</span> 1 WhatsApp + Instagram</li>
              <li className="flex gap-3"><span className="text-indigo-600">✓</span> 1 inbox e 1 agente</li>
              <li className="flex gap-3"><span className="text-indigo-600">✓</span> Histórico de conversas</li>
              <li className="flex gap-3"><span className="text-indigo-600">✓</span> Etiquetas e notas internas</li>
              <li className="flex gap-3"><span className="text-indigo-600">✓</span> Transferência de conversa</li>
              <li className="flex gap-3"><span className="text-indigo-600">✓</span> Suporte básico</li>
            </ul>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onNavigate(Page.Contact)}
              className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[10px]"
            >
              Começar Agora
            </motion.button>
          </motion.div>

          {/* FASE 02 */}
          <motion.div
            variants={card}
            className="flex flex-col bg-slate-900 border border-slate-800 rounded-[3rem] p-12 relative shadow-2xl scale-105 text-left z-10"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-widest">Recomendado</div>
            <div className="mb-10">
              <div className="inline-block bg-white/5 text-indigo-400 font-black uppercase tracking-widest text-[10px] px-4 py-1.5 rounded-full mb-6 border border-white/10">Plano Profissional</div>
              <h3 className="text-3xl font-bold text-white uppercase tracking-tighter mb-2">Pequenas Empresas</h3>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Ideal pra equipes pequenas</p>
            </div>
            <div className="mb-10 flex items-baseline gap-1">
              <span className="text-slate-500 text-lg font-black">R$</span>
              <span className="text-6xl font-black text-white tracking-tighter">149</span>
              <span className="text-slate-500 font-bold">/mês</span>
            </div>
            <ul className="space-y-4 mb-12 flex-grow text-[11px] font-bold uppercase tracking-tight text-slate-400">
              <li className="flex gap-3"><span className="text-indigo-400">✓</span> 1 WhatsApp + Instagram</li>
              <li className="flex gap-3"><span className="text-indigo-400">✓</span> 1 inbox e até 3 agentes</li>
              <li className="flex gap-3"><span className="text-indigo-400">✓</span> Etiquetas e notas internas</li>
              <li className="flex gap-3"><span className="text-indigo-400">✓</span> Transferência de conversa</li>
              <li className="flex gap-3"><span className="text-indigo-400">✓</span> Suporte prioritário</li>
            </ul>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onNavigate(Page.Contact)}
              className="w-full py-5 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px]"
            >
              Começar Agora
            </motion.button>
          </motion.div>

          {/* FASE 03 */}
          <motion.div variants={card} className="flex flex-col bg-slate-50 border border-slate-200 rounded-[3rem] p-12 hover:border-slate-800 transition-all text-left group">
            <div className="mb-10">
              <div className="inline-block bg-white text-slate-900 font-black uppercase tracking-widest text-[10px] px-4 py-1.5 rounded-full mb-6 border border-slate-200">Plano Equipe</div>
              <h3 className="text-3xl font-bold text-slate-900 uppercase tracking-tighter mb-2">Crescimento</h3>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Negócios em crescimento</p>
            </div>
            <div className="mb-10 flex flex-col">
              <div className="flex items-baseline gap-1">
                <span className="text-slate-400 text-lg font-black">R$</span>
                <span className="text-6xl font-black text-slate-900 tracking-tighter">249</span>
                <span className="text-slate-400 font-bold">/mês</span>
              </div>
            </div>
            <ul className="space-y-4 mb-12 flex-grow text-[11px] font-bold uppercase tracking-tight text-slate-500">
              <li className="flex gap-3"><span className="text-indigo-600">✓</span> 1 WhatsApp + Instagram</li>
              <li className="flex gap-3"><span className="text-indigo-600">✓</span> 1 inbox e 5 a 10 agentes</li>
              <li className="flex gap-3"><span className="text-indigo-600">✓</span> Relatórios e Organização</li>
              <li className="flex gap-3"><span className="text-indigo-600">✓</span> Suporte mais próximo</li>
            </ul>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onNavigate(Page.Contact)}
              className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[10px]"
            >
              Começar Agora
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Taxa de Setup - Reutilizando o design Modular */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-slate-900 p-12 rounded-[3rem] flex flex-col md:flex-row items-center gap-12 text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[100px] pointer-events-none"></div>
            <div className="w-20 h-20 bg-indigo-500 rounded-3xl flex items-center justify-center font-black text-white text-4xl shrink-0">⚙️</div>
            <div>
              <h4 className="text-indigo-400 font-black uppercase tracking-[0.2em] text-[10px] mb-4">Setup Inicial</h4>
              <p className="text-2xl font-bold text-white uppercase tracking-tighter mb-4 leading-tight">R$ 300 (pagamento único)</p>
              <p className="text-slate-400 text-sm leading-relaxed font-medium">
                Preparamos toda a sua estrutura técnica: integração de canais, configuração de permissões e treinamento básico. Entregamos a ferramenta pronta para uso.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
