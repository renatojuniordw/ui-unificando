import React from 'react';
import { Page } from '../types';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { DashboardSimulation } from '../components/customer-service/DashboardSimulation';
import { PricingCalculator } from '../components/customer-service/PricingCalculator';
import { IntegrationsSection } from '../components/customer-service/IntegrationsSection';
import { FAQSection } from '../components/customer-service/FAQSection';
import { TestimonialsSection } from '../components/customer-service/TestimonialsSection';

interface CustomerServiceProps {
  onNavigate: (page: Page) => void;
}

export const CustomerService: React.FC<CustomerServiceProps> = ({ onNavigate }) => {

  return (
    <div className="bg-white">
      <SEO
        title="Atendimento Centralizado WhatsApp e Instagram | Unificando"
        description="Centralize seus canais de atendimento em uma única caixa de entrada profissional. Múltiplos atendentes, histórico salvo e organização total."
        canonical="/atendimento"
      />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e0e7ff_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-left">
            <div className="inline-flex items-center gap-2 bg-white border border-indigo-100 shadow-sm text-indigo-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.15em] mb-8">
              <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
              Plataforma de Crescimento
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-8 uppercase tracking-tighter">
              Atendimento Unificado no  <span className="text-slate-500 font-normal">WhatsApp e Instagram.</span>
            </h1>
            <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-lg font-medium">
              Centralize WhatsApp e Instagram em uma única caixa de entrada profissional com o Unificando. Tenha controle total e sincronia com sua equipe.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate(Page.Contact)}
                className="bg-slate-900 text-white px-10 py-5 rounded-2xl text-[10px] font-black shadow-xl uppercase tracking-[0.2em]"
              >
                Organizar meu negócio
              </motion.button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[3rem] opacity-20 blur-2xl"></div>
            <DashboardSimulation />
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Uma nova era para seu atendimento.</h2>
            <p className="text-slate-500 text-lg font-medium">Ferramentas intuitivas reimaginadas para converter leads e tornar seu negócio escalável.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { title: "Canais Unificados", desc: "WhatsApp e Instagram num só lugar." },
              { title: "Múltiplos Agentes", desc: "Todo seu time atendendo no mesmo número." },
              { title: "Marcação de Leads", desc: "Organize com etiquetas personalizadas." },
              { title: "Notas Internas", desc: "Converse com o time dentro do chat." },
              { title: "Relatórios", desc: "Saiba quem atende mais e melhor." },
              { title: "Filas de Espera", desc: "Distribua atendimentos automaticamente." },
              { title: "Histórico Eterno", desc: "Nunca mais perca uma conversa." },
            ].map((feature, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                key={i}
                className="p-8 bg-slate-50 rounded-[2rem] hover:bg-indigo-50/50 hover:scale-[1.02] transition-all border border-slate-100 hover:border-indigo-100 group"
              >
                <div className="w-10 h-10 bg-white rounded-xl mb-6 flex items-center justify-center text-indigo-600 shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <div className="w-2 h-2 rounded-full bg-current"></div>
                </div>
                <h3 className="font-black text-slate-900 uppercase tracking-wide text-xs mb-3">{feature.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed font-medium">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <IntegrationsSection />

      {/* Social Proof / Testimonials */}
      <TestimonialsSection />

      {/* Pricing Calculator Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Monte seu Plano</h2>
            <p className="text-slate-500 text-lg font-medium">Configure os recursos ideais para o seu negócio.</p>
          </div>

          <PricingCalculator onNavigate={onNavigate} />
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

      {/* Final CTA */}
      <section className="py-24 bg-indigo-600 text-white text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter">Pronto para vender mais?</h2>
          <p className="text-indigo-100 text-lg mb-10 max-w-2xl mx-auto font-medium">Junte-se a centenas de empresas que transformaram seu atendimento com o Unificando.</p>
          <button onClick={() => onNavigate(Page.Contact)} className="bg-white text-indigo-600 px-12 py-5 rounded-2xl text-xs font-black uppercase tracking-[0.2em] hover:scale-105 transition-transform shadow-2xl">Criar Conta Grátis</button>
        </div>
      </section>
    </div>
  );
};
