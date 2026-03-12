import React from "react";
import { motion } from "framer-motion";
import { SEO } from "../../components/common/SEO";
import { PageTransition } from "../../components/common/PageTransition";
import { ROUTES } from "../../routes";
import { CTA } from "../../constants/cta";
import { trackCtaClick } from "../../utils/analytics";
import { DashboardSimulation } from "../../features/customer-service/DashboardSimulation";
import { IntegrationsSection } from "../../features/customer-service/IntegrationsSection";
import { FAQSection } from "../../features/customer-service/FAQSection";
import { TestimonialsSection } from "../../features/customer-service/TestimonialsSection";

export const CustomerService: React.FC = () => {
  const handlePrimaryCta = () => {
    trackCtaClick({
      label: CTA.primary.label,
      location: "customer_service_cta",
      to: CTA.primary.to,
    });
    window.open(CTA.primary.to, "_blank");
  };

  return (
    <PageTransition>
      <SEO
        title="Atendimento Centralizado WhatsApp e Instagram | Unificando"
        description="Centralize seus canais de atendimento em uma única caixa de entrada profissional. Múltiplos atendentes, histórico salvo e organização total."
        canonical={ROUTES.CUSTOMER_SERVICE}
        jsonLd={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              serviceType: "Customer Support Automation",
              provider: {
                "@type": "Organization",
                name: "Unificando",
              },
              name: "Atendimento Unificado WhatsApp e Instagram",
              description:
                "Plataforma para centralizar atendimento de múltiplos canais com múltiplos atendentes.",
              offers: {
                "@type": "Offer",
                priceCurrency: "BRL",
                price: "297.00",
              },
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Posso cancelar quando quiser?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sim! Não temos fidelidade. Você pode cancelar sua assinatura a qualquer momento diretamente pelo painel, sem burocracia.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Preciso de um celular ligado?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Não. Como utilizamos a API (ou conexão em nuvem estável), seu celular não precisa estar conectado à internet o tempo todo.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Consigo usar o mesmo número para vários atendentes?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Com certeza! Essa é a principal função do Unificando. Todos os seus atendentes acessam o mesmo número de WhatsApp simultaneamente, cada um no seu computador.",
                  },
                },
                {
                  "@type": "Question",
                  name: "O Unificando fornece número de WhatsApp ou conta de Instagram?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Não. Os canais utilizados são sempre do próprio cliente. Nós apenas realizamos a integração e organização do atendimento.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Pode causar banimento ou bloqueio de contas?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Não. Bloqueios e banimentos podem ocorrer por uso indevido das plataformas. O Unificando não se responsabiliza por penalidades aplicadas pelo WhatsApp, Instagram, Telegram ou outros canais.",
                  },
                },
                {
                  "@type": "Question",
                  name: "O Unificando envia mensagens automaticamente?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Somente quando o cliente autoriza e configura automações, sempre respeitando as regras das plataformas.",
                  },
                },
                {
                  "@type": "Question",
                  name: "O Unificando garante vendas ou resultados?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Não. A plataforma ajuda a organizar e agilizar o atendimento, mas não garante vendas ou faturamento.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Meus dados e conversas ficam seguros?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sim. Cada cliente possui um ambiente isolado e seguro, com acesso restrito aos seus usuários.",
                  },
                },
              ],
            },
          ],
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 bg-white overflow-hidden border-b-4 border-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-left"
          >
            <div className="inline-block bg-[#ccff00] text-slate-950 font-black uppercase tracking-[0.2em] text-[10px] px-3 py-1 mb-6 border-2 border-slate-950 shadow-[4px_4px_0px_#000]">
              <span className="inline-block w-2 h-2 bg-slate-950 mr-2 -translate-y-px"></span>
              PLATAFORMA BASE
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-950 leading-[0.9] mb-8 uppercase tracking-tighter">
              TODA A<br/>
              EQUIPE NO<br/>
              MESMO NÚMERO.
            </h1>
            <p className="text-xl text-slate-950 mb-10 leading-relaxed font-bold border-l-4 border-[#ccff00] pl-4 max-w-lg">
              Centralize WhatsApp e Instagram em uma caixa de entrada
              profissional. Controle absoluto, histórico permanente e nenhuma venda perdida no esquecimento.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={handlePrimaryCta}
                className="bg-slate-950 text-[#ccff00] px-10 py-5 text-xs font-black border-2 border-slate-950 shadow-[6px_6px_0px_#000] hover:bg-[#ccff00] hover:text-slate-950 hover:shadow-[6px_6px_0px_#000] transition-colors uppercase tracking-[0.2em]"
              >
                {CTA.primary.label}
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative hidden md:block"
          >
            <div className="border-4 border-slate-950 bg-white p-2 shadow-[16px_16px_0px_#ccff00]">
              <DashboardSimulation />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-[#ccff00] border-b-4 border-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20 max-w-3xl mx-auto bg-white p-8 border-4 border-slate-950 shadow-[12px_12px_0px_#000]">
            <h2 className="text-4xl md:text-6xl font-black text-slate-950 mb-6 uppercase tracking-tighter leading-[0.9]">
              ATENDIMENTO <br/> ESCALÁVEL.
            </h2>
            <p className="text-slate-950 font-mono font-bold text-lg">
              Perca os grupos genéricos. Assuma o controle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Canais Unificados",
                desc: "WhatsApp e Instagram num só lugar.",
              },
              {
                title: "Múltiplos Agentes",
                desc: "Todo seu time atendendo no mesmo número.",
              },
              {
                title: "Marcação de Leads",
                desc: "Organize com etiquetas personalizadas.",
              },
              {
                title: "Notas Internas",
                desc: "Converse com o time dentro do chat.",
              },
              { title: "Relatórios de Performance", desc: "Saiba quem atende mais e melhor." },
              {
                title: "Filas de Espera",
                desc: "Distribua atendimentos automaticamente.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-8 bg-white border-4 border-slate-950 hover:bg-slate-950 hover:text-[#ccff00] transition-colors shadow-[8px_8px_0px_#000] group"
              >
                <div className="w-12 h-12 bg-[#ccff00] border-2 border-slate-950 mb-6 flex items-center justify-center font-black group-hover:bg-white group-hover:text-slate-950 transition-colors shadow-[4px_4px_0px_#000]">
                  ✓
                </div>
                <h3 className="font-black text-inherit uppercase tracking-widest text-sm mb-3">
                  {feature.title}
                </h3>
                <p className="text-inherit text-sm font-mono font-bold">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <IntegrationsSection />

      {/* Social Proof / Testimonials */}
      <TestimonialsSection />

      {/* Pricing CTA Section */}
      <section className="py-24 bg-white border-y-4 border-slate-950 text-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="bg-slate-950 border-4 border-slate-950 p-12 md:p-24 shadow-[24px_24px_0px_#ccff00]">
            <div className="max-w-3xl mx-auto">
              <span className="text-[#ccff00] font-black uppercase tracking-[0.25em] text-[10px] mb-6 block border-b-2 border-[#ccff00] pb-2 max-w-max mx-auto">
                INVESTIMENTO MODULAR
              </span>
              <h2 className="text-4xl md:text-7xl font-black text-white mb-8 uppercase tracking-tighter leading-[0.9]">
                PAGUE APENAS<br/>PELO QUE USAR.
              </h2>
              <p className="text-white text-lg md:text-xl mb-12 font-mono font-bold leading-relaxed">
                Nossa estrutura é brutalmente modular. Veja o investimento ideal
                para sua empresa e entenda como unificar seu atendimento com previsibilidade.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button
                  onClick={handlePrimaryCta}
                  className="bg-[#ccff00] text-slate-950 px-12 py-5 text-sm font-black uppercase tracking-[0.2em] shadow-[8px_8px_0px_transparent] border-2 border-transparent hover:border-slate-950 hover:shadow-[8px_8px_0px_#fff] transition-all w-full sm:w-auto"
                >
                  Consultar Valores
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

      {/* Final CTA */}
      <section className="py-24 bg-[#ccff00] text-slate-950 text-center px-6 lg:px-12">
        <div className="max-w-4xl mx-auto bg-white border-4 border-slate-950 p-12 shadow-[16px_16px_0px_#000]">
          <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter leading-[0.9]">
            VENDA<br/> MAIS E MELHOR.
          </h2>
          <p className="text-slate-950 text-lg mb-10 max-w-2xl mx-auto font-mono font-bold">
            Junte-se a empresas que tratam o atendimento como funil de vendas, não como dor de cabeça.
          </p>
          <button
            onClick={handlePrimaryCta}
            className="bg-slate-950 text-[#ccff00] px-12 py-5 border-2 border-slate-950 text-xs font-black uppercase tracking-[0.2em] hover:bg-white hover:text-slate-950 transition-colors shadow-[6px_6px_0px_#000] inline-block"
          >
            Falar com a Equipe
          </button>
        </div>
      </section>
    </PageTransition>
  );
};
