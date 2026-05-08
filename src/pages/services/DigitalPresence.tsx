import React from "react";
import { ROUTES } from "../../routes";
import { SEO } from "../../components/common/SEO";
import { PageTransition } from "../../components/common/PageTransition";
import { CTA } from "../../constants/cta";
import { trackCtaClick } from "../../utils/analytics";

// Animação de Scroll e Construção de Landing Page
import { LandingPageAnimation } from "../../features/digital-presence/LandingPageAnimation";
import { FAQSection } from "../../features/digital-presence/FAQSection";

export const DigitalPresence: React.FC = () => {
  const handleCTA = () => {
    trackCtaClick({
      label: CTA.primary.label,
      location: "digital_presence_cta",
      to: CTA.primary.to,
    });
    window.open(CTA.primary.to, "_blank");
  };

  return (
    <PageTransition>
      <SEO
        title="Sites Profissionais e Presença Digital | Unificando"
        description="Tenha uma casa própria na internet. Sites rápidos, profissionais e otimizados para o Google."
        canonical={ROUTES.DIGITAL_PRESENCE}
        jsonLd={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              serviceType: "Web Development",
              provider: {
                "@type": "Organization",
                name: "Unificando",
              },
              name: "Sites e Presença Digital",
              description:
                "Desenvolvimento de sites profissionais, landing pages e otimização SEO.",
              offers: {
                "@type": "Offer",
                priceCurrency: "BRL",
                price: "997.00",
              },
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "O site é 'alugado' ou é meu?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "O site é seu. Desenvolvemos o projeto para o seu negócio. Após o primeiro ano, a única cobrança recorrente é a de hospedagem (para mantê-lo no ar), mas você tem total posse sobre a criação.",
                  },
                },
                {
                  "@type": "Question",
                  name: "O que está incluso no primeiro ano?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Além da criação do site, entregamos 1 ano de hospedagem grátis e o registro do seu domínio (ex: suaempresa.com.br) por nossa conta.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Qual o custo após o primeiro ano?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Para manter o site seguro e online em nossos servidores, cobramos uma taxa de manutenção de hospedagem (atualmente R$ 70/mês). Se não renovar, o site sai do ar, mas os arquivos continuam sendo seus.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Qual o prazo de entrega?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Para Landing Pages e Sites Institucionais padrão, o prazo médio é de até 15 dias úteis após o envio de todo o material (textos e fotos) e aprovação do briefing.",
                  },
                },
              ],
            },
          ],
        }}
      />

      {/* 1. Hero Section */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden text-left border-b-4 border-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="inline-block bg-[#ccff00] text-slate-950 font-black uppercase tracking-[0.2em] text-[10px] px-3 py-1 mb-6 border-2 border-slate-950 shadow-[4px_4px_0px_#000]">
              PRESENÇA DIGITAL
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-950 leading-[0.9] mb-8 uppercase tracking-tighter">
              A SUA CASA<br/>
              PRÓPRIA<br/>
              NA INTERNET.
            </h1>
            <p className="text-xl text-slate-950 mb-10 leading-relaxed font-bold border-l-4 border-[#ccff00] pl-4">
              Redes sociais são terrenos alugados. Seu site é a vitrine oficial para transmitir autoridade e converter sem depender de algoritmo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={handleCTA}
                className="bg-slate-950 text-[#ccff00] px-8 py-5 text-xs font-black border-2 border-slate-950 hover:bg-[#ccff00] hover:text-slate-950 transition-colors shadow-[6px_6px_0px_#000] hover:shadow-[6px_6px_0px_#000] uppercase tracking-widest w-max"
              >
                Agendar diagnóstico
              </button>
            </div>
          </div>

          <div className="relative hidden md:block">
            <LandingPageAnimation />
          </div>
        </div>
      </section>

      {/* 2. O Que Entregamos */}
      <section className="py-24 bg-white border-b-4 border-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-slate-950 uppercase tracking-tighter mb-4 leading-[0.9]">
              ENTREGAMOS PERFORMANCE.
            </h2>
            <p className="text-slate-950 text-xl font-bold font-mono">
              Sites rápidos e profissionais. Sem excessos ou complicação.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Landing pages profissionais", icon: "🚀" },
              { title: "Sites institucionais estáticos", icon: "🏢" },
              { title: "Carregamento extremamente rápido", icon: "⚡" },
              { title: "Estrutura pronta para o Google (SEO)", icon: "🔍" },
              { title: "Branding alinhado", icon: "🎨" },
              { title: "Foco absoluto em conversão", icon: "🎯" },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white p-6 border-4 border-slate-950 shadow-[8px_8px_0px_#000] hover:bg-[#ccff00] transition-colors group"
              >
                <div className="w-12 h-12 bg-slate-950 border-2 border-transparent group-hover:bg-white flex items-center justify-center text-2xl transition-all">
                  {feature.icon}
                </div>
                <span className="font-black text-slate-950 uppercase tracking-tight text-sm">
                  {feature.title}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-[#ccff00] border-4 border-slate-950 p-8 shadow-[12px_12px_0px_#000] text-center max-w-4xl mx-auto">
            <p className="text-slate-950 font-black uppercase tracking-widest text-xs mb-6">
              O KIT DE SOBREVIVÊNCIA DE QUALQUER EMPRESA SÉRIA:
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-bold font-mono">
              {[
                "Captação de leads",
                "Conversão via Ads",
                "Divulgação de produtos",
                "Autoridade de marca",
              ].map((tag, index) => (
                <span
                  key={index}
                  className="bg-white border-2 border-slate-950 px-4 py-2 text-slate-950 uppercase"
                >
                  ✓ {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Investimento & Escala CTA */}
      <section className="py-24 bg-white border-b-4 border-slate-950 text-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="bg-slate-950 border-4 border-slate-950 p-12 md:p-24 shadow-[24px_24px_0px_#ccff00]">
            <div className="max-w-3xl mx-auto">
              <span className="text-[#ccff00] font-black uppercase tracking-[0.25em] text-[10px] mb-6 block border-b-2 border-[#ccff00] pb-2 max-w-max mx-auto">
                TAXAS SOB MEDIDA
              </span>
              <h2 className="text-4xl md:text-7xl font-black text-white mb-8 uppercase tracking-tighter leading-[0.9]">
                SEM SURPRESAS<br/> NO FATURAMENTO.
              </h2>
              <p className="text-white text-lg md:text-xl mb-12 font-mono font-bold leading-relaxed">
                Você financia a base profissional e pode escalar recursos assim que o faturamento da sua empresa pedir. Tudo modular, tudo no seu tempo.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button
                  onClick={handleCTA}
                  className="bg-[#ccff00] text-slate-950 px-12 py-5 text-sm font-black uppercase tracking-[0.2em] shadow-[8px_8px_0px_transparent] border-2 border-transparent hover:border-slate-950 hover:shadow-[8px_8px_0px_#fff] transition-all w-full sm:w-auto"
                >
                  Agendar Raio-X Gratuito
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Integração */}
      <section className="py-24 bg-[#ccff00] text-slate-950 overflow-hidden relative border-b-4 border-slate-950">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter leading-[0.9]">
            MÁQUINA INTEGRADA
          </h2>
          <p className="text-slate-950 text-lg font-bold font-mono mb-16 max-w-2xl mx-auto border-4 border-slate-950 p-4 bg-white shadow-[8px_8px_0px_#000]">
            Conecte o tráfego do site diretamente com os canais reais de atendimento (WhatsApp). O funil brutalmente eficiente.
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto mb-16">
            <div className="bg-white p-8 border-4 border-slate-950 shadow-[12px_12px_0px_#000]">
              <span className="text-4xl mb-6 block">🔗</span>
              <h3 className="font-black uppercase tracking-wide text-xl mb-3">
                LINKS ENCURTADOS
              </h3>
              <p className="text-sm text-slate-950 font-mono font-bold leading-relaxed">
                Botões flutuantes e copys otimizados que levam o cliente num clique direto pro checkout ou WhatsApp.
              </p>
            </div>

            <div className="bg-slate-950 text-white p-8 border-4 border-slate-950 shadow-[12px_12px_0px_#fff] relative">
              <div className="absolute -top-4 -right-4 bg-[#ccff00] border-2 border-slate-950 text-slate-950 text-[10px] font-black px-4 py-2 uppercase tracking-widest shadow-[4px_4px_0px_#000] rotate-3">
                GRÁTIS*
              </div>
              <span className="text-4xl mb-6 block">💬</span>
              <h3 className="font-black text-[#ccff00] uppercase tracking-wide text-xl mb-3">
                WIDGET DE CHAT
              </h3>
              <p className="text-sm font-mono font-bold leading-relaxed">
                Empresas no plano Atendimento Digital levam nosso Widget nativo para o site, permitindo chatear direto do navegador, sem custo extra.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

      {/* CTA Final */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-6xl font-black text-slate-950 mb-12 uppercase tracking-tighter leading-[0.9]">
            SUA CASA <br/>
            DIGITAL ESTÁ PRONTA?
          </h2>
          <button
            onClick={handleCTA}
            className="bg-slate-950 text-[#ccff00] px-12 py-6 text-sm font-black border-4 border-slate-950 hover:bg-[#ccff00] hover:text-slate-950 transition-colors shadow-[8px_8px_0px_#000] uppercase tracking-widest inline-block"
          >
            Falar pelo WhatsApp
          </button>
        </div>
      </section>
    </PageTransition>
  );
};
