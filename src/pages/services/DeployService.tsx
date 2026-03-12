import React from "react";
import { motion } from "framer-motion";
import { SEO } from "../../components/common/SEO";
import { PageTransition } from "../../components/common/PageTransition";
import { ROUTES } from "../../routes";
import { PRICING } from "../../constants/pricing";
import { CTA } from "../../constants/cta";
import { trackCtaClick } from "../../utils/analytics";

export const DeployService: React.FC = () => {
  const handleWhatsAppClick = () => {
    trackCtaClick({
      label: "Hospedagem Inteligente",
      location: "deploy_service_cta",
      to: CTA.primary.to,
    });
    const message = encodeURIComponent(
      "Olá! Gostaria de contratar a Hospedagem Inteligente. Meu site já está pronto e preciso colocá-lo no ar no meu domínio .com.br."
    );
    window.open(`${CTA.primary.to}?text=${message}`, "_blank");
  };

  return (
    <PageTransition>
      <SEO
        title="Hospedagem Inteligente para Sites feitos com IA | Unificando"
        description="Você criou seu site com Cursor, Lovable ou v0? Nós colocamos no ar com domínio próprio e cadeado de segurança. Sem complicações técnicas."
        canonical={ROUTES.SMART_HOSTING}
      />

      <main className="bg-white min-h-screen">
        {/* HERO */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-24 border-b-2 border-slate-950">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block bg-[#ccff00] text-slate-950 px-3 py-1 font-black uppercase tracking-[0.2em] text-[10px] border-2 border-slate-950 shadow-[4px_4px_0px_#000] mb-8">
                DEPLOY INTELIGENTE
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-slate-950 leading-[0.9] mb-8 uppercase tracking-tighter">
                VOCÊ CRIOU.<br/>
                NÓS HOSPEDAMOS.
              </h1>
              <p className="text-xl text-slate-950 mb-10 leading-relaxed font-bold border-l-4 border-[#ccff00] pl-4">
                Chega de links genéricos. Tenha seu próprio domínio profissional (.com.br) com cadeado de segurança em alta velocidade, sem tocar na infraestrutura.
              </p>
              
              <button
                onClick={handleWhatsAppClick}
                className="bg-slate-950 text-[#ccff00] px-8 py-5 border-2 border-slate-950 font-black hover:bg-[#ccff00] hover:text-slate-950 transition-colors shadow-[6px_6px_0px_#000] hover:shadow-[6px_6px_0px_#000] uppercase tracking-widest text-xs w-max block"
              >
                Colocar meu site no ar agora
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
               <div className="bg-white border-4 border-slate-950 p-8 shadow-[12px_12px_0px_#ccff00] relative overflow-hidden">
                 <div className="flex items-center gap-4 border-b-2 border-slate-950 pb-6 mb-6">
                    <div className="w-12 h-12 bg-slate-950 text-[#ccff00] flex items-center justify-center font-black border-2 border-slate-950 shadow-[2px_2px_0px_#000]">✓</div>
                    <div>
                      <h3 className="font-black text-slate-950 uppercase tracking-wider text-sm">Site Ativo e Seguro</h3>
                      <p className="text-[10px] text-slate-500 font-mono tracking-widest mt-1">https://seu-dominio.com.br</p>
                    </div>
                 </div>
                 
                 <div className="space-y-4 font-mono text-xs uppercase font-bold text-slate-950 tracking-widest">
                   <div className="flex justify-between items-center p-4 border-2 border-slate-950 shadow-[2px_2px_0px_#000] bg-white">
                     <span>Status do Domínio</span>
                     <span className="bg-[#ccff00] px-2 py-1 border border-slate-950">Conectado</span>
                   </div>
                   <div className="flex justify-between items-center p-4 border-2 border-slate-950 shadow-[2px_2px_0px_#000] bg-white">
                     <span>Segurança SSL</span>
                     <span className="bg-[#ccff00] px-2 py-1 border border-slate-950">Ativo</span>
                   </div>
                   <div className="flex justify-between items-center p-4 border-2 border-slate-950 shadow-[2px_2px_0px_#000] bg-white">
                     <span>Performance</span>
                     <span className="bg-slate-950 text-white px-2 py-1 border border-slate-950">Otimizada</span>
                   </div>
                 </div>
               </div>
            </motion.div>
          </div>
        </section>

        {/* DETAILS */}
        <section className="py-24 bg-white border-b-2 border-slate-950">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black text-slate-950 uppercase tracking-tighter leading-[0.9]">
                FOCO NO RESULTADO.<br/>
                NÃO NA TELA PRETA.
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Domínio Profissional", desc: "Configuração do apontamento DNS (Registro.br) para o seu novo IP.", icon: "🌐" },
                { title: "Segurança SSL", desc: "Certificado HTTPS emitido e renovado automaticamente no servidor.", icon: "🔒" },
                { title: "Servidor Dedicado", desc: "Nada de tiers gratuitos. Seu site hospedado em ambiente de produção rápido.", icon: "🚀" },
              ].map((b, i) => (
                <div key={i} className="bg-white border-2 border-slate-950 p-8 shadow-[6px_6px_0px_#000] hover:bg-[#ccff00] transition-colors group">
                  <div className="w-16 h-16 bg-slate-950 text-white flex items-center justify-center text-3xl mb-8 border-2 border-transparent group-hover:border-slate-950 group-hover:bg-white group-hover:text-slate-950 transition-colors">{b.icon}</div>
                  <h3 className="font-black text-slate-950 mb-3 uppercase tracking-wider text-lg">{b.title}</h3>
                  <p className="text-sm font-bold text-slate-800 leading-relaxed font-mono">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

         {/* DISCLAMERS & SCOPE */}
        <section className="py-24 bg-slate-950 text-white border-b-2 border-slate-950">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
             <div className="text-center mb-16">
                <span className="inline-block bg-[#ccff00] text-slate-950 px-3 py-1 font-black uppercase tracking-[0.2em] text-[10px] mb-6">TRANSPARÊNCIA RADICAL</span>
                <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9]">
                  O Escopo
                </h2>
                <p className="text-[#ccff00] mt-6 leading-relaxed font-mono font-bold max-w-2xl mx-auto">
                  Para mantermos a alta performance e o valor acessível, nosso escopo é focado estritamente na estabilidade da infraestrutura.
                </p>
             </div>

             <div className="grid md:grid-cols-2 gap-8 mb-16">
               <div className="bg-white text-slate-950 border-4 border-[#ccff00] p-8 shadow-[8px_8px_0px_#ccff00]">
                 <h3 className="font-black text-slate-950 flex items-center gap-4 mb-8 uppercase tracking-widest text-xl border-b-2 border-slate-950 pb-4">
                   <span className="w-8 h-8 bg-[#ccff00] border-2 border-slate-950 flex items-center justify-center text-sm">✓</span> 
                   Incluso
                 </h3>
                 <ul className="space-y-6 text-sm font-bold font-mono">
                   <li className="flex gap-4 items-start"><span className="text-[#ccff00] mt-0.5 bg-slate-950 w-5 h-5 flex items-center justify-center flex-shrink-0 border border-slate-950">✓</span> <div>Ambiente de produção configurado e otimizado.</div></li>
                   <li className="flex gap-4 items-start"><span className="text-[#ccff00] mt-0.5 bg-slate-950 w-5 h-5 flex items-center justify-center flex-shrink-0 border border-slate-950">✓</span> <div>Apontamento de Domínio e certificado SSL.</div></li>
                   <li className="flex gap-4 items-start"><span className="text-[#ccff00] mt-0.5 bg-slate-950 w-5 h-5 flex items-center justify-center flex-shrink-0 border border-slate-950">✓</span> <div>Uptime e CDN para roteamento.</div></li>
                   <li className="flex gap-4 items-start"><span className="text-[#ccff00] mt-0.5 bg-slate-950 w-5 h-5 flex items-center justify-center flex-shrink-0 border border-slate-950">✓</span> <div>Suporte direcionado para rotas e DNS.</div></li>
                 </ul>
               </div>

               <div className="bg-slate-900 border-2 border-slate-800 p-8">
                 <h3 className="font-black text-slate-500 flex items-center gap-4 mb-8 uppercase tracking-widest text-xl border-b-2 border-slate-800 pb-4">
                   <span className="w-8 h-8 bg-slate-800 border-2 border-slate-700 flex items-center justify-center text-sm">✕</span> 
                   Fora do Escopo
                 </h3>
                 <ul className="space-y-6 text-sm font-bold font-mono text-slate-400">
                   <li className="flex gap-4 items-start"><span className="mt-0.5 bg-slate-800 text-slate-500 w-5 h-5 flex items-center justify-center flex-shrink-0">✕</span> <div>Hospedamos apenas front-end estático (React, Vite, HTML). APIs/DB externos por sua conta.</div></li>
                   <li className="flex gap-4 items-start"><span className="mt-0.5 bg-slate-800 text-slate-500 w-5 h-5 flex items-center justify-center flex-shrink-0">✕</span> <div>Se a IA gerou um código quebrado/bugeado, a resolução no código é sua.</div></li>
                   <li className="flex gap-4 items-start"><span className="mt-0.5 bg-slate-800 text-slate-500 w-5 h-5 flex items-center justify-center flex-shrink-0">✕</span> <div>Não editamos conteúdo textuais, cores nem refatoramos pacotes Node.js nativamente nesse serviço.</div></li>
                 </ul>
               </div>
             </div>

             <div className="bg-[#ccff00] text-slate-950 border-4 border-slate-950 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[12px_12px_0px_#fff]">
               <div>
                 <h4 className="font-black text-2xl mb-4 uppercase tracking-tighter">
                   PRESO NO CÓDIGO DA IA?
                 </h4>
                 <p className="text-slate-950 text-sm font-bold font-mono max-w-xl leading-relaxed">
                   Vendemos <strong className="bg-slate-950 text-[#ccff00] px-1">Hora Técnica (R$ {PRICING.hospedagem.extras.technicalHour.price} / {PRICING.hospedagem.extras.technicalHour.hours}h)</strong> para debugar e refatorar o front-end travado e garantir que você conseguirá finalizar o projeto antes do deploy.
                 </p>
               </div>
               <button
                 onClick={() => {
                   const message = encodeURIComponent(
                     "Olá! Quero a Hospedagem, mas preciso de ajuda técnica para debugar meu código travado."
                   );
                   window.open(`https://wa.me/5581995557302?text=${message}`, "_blank");
                 }}
                 className="shrink-0 bg-slate-950 text-white px-8 py-5 text-xs font-black uppercase tracking-widest border-2 border-slate-950 shadow-[4px_4px_0px_#000] hover:bg-white hover:text-slate-950 transition-colors"
               >
                 Consultar Hora Técnica
               </button>
             </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="py-24 bg-white border-b-2 border-slate-950">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-4xl md:text-6xl font-black text-slate-950 mb-16 uppercase tracking-tighter leading-[0.9]">
              INVESTIMENTO.
            </h2>
            
            <div className="bg-slate-950 text-white border-4 border-slate-950 p-10 md:p-16 shadow-[16px_16px_0px_#ccff00] relative overflow-hidden">
               
               <div className="flex flex-col md:flex-row items-center justify-between border-b-2 border-white/20 pb-10 mb-10 gap-8 text-center md:text-left">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black mb-4 uppercase tracking-tighter text-[#ccff00]">Setup Inicial</h3>
                    <p className="text-slate-400 text-sm font-bold font-mono">Configuração do Domínio, SSL e Deploy Base.</p>
                  </div>
                  <div className="text-5xl font-black shrink-0 tracking-tighter">
                    R$ {PRICING.hospedagem.base.setup}
                    <span className="text-sm font-bold font-mono text-slate-500 block uppercase mt-2"> / TARIFA ÚNICA</span>
                  </div>
               </div>
               
               <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left mb-12">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black mb-4 uppercase tracking-tighter text-[#ccff00]">Mensalidade</h3>
                    <p className="text-slate-400 text-sm font-bold font-mono">Servidor focado em Front-Ends Estáticos.</p>
                  </div>
                  <div className="text-5xl font-black shrink-0 tracking-tighter">
                    R$ {PRICING.hospedagem.base.monthly}
                    <span className="text-sm font-bold font-mono text-slate-500 block uppercase mt-2"> / MENSAL</span>
                  </div>
               </div>

               <button
                 onClick={handleWhatsAppClick}
                 className="bg-[#ccff00] text-slate-950 w-full py-6 font-black uppercase tracking-widest hover:bg-white transition-colors shadow-[6px_6px_0px_#000] border-2 border-slate-950 text-sm md:text-base"
               >
                 QUERO FECHAR AGORA
               </button>
            </div>
          </div>
        </section>

        {/* FAQ - DOMÍNIO */}
        <section className="py-24 bg-[#ccff00] border-b-2 border-slate-950">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <div className="text-center md:text-left mb-16">
              <span className="bg-slate-950 text-white font-black uppercase tracking-[0.2em] text-[10px] px-3 py-1 mb-6 inline-block border-2 border-slate-950 shadow-[4px_4px_0px_#000]">FAQ</span>
              <h2 className="text-4xl md:text-6xl font-black text-slate-950 uppercase tracking-tighter leading-[0.9]">
                SOBRE O DOMÍNIO
              </h2>
            </div>

            <div className="bg-white border-4 border-slate-950 p-8 md:p-12 shadow-[12px_12px_0px_#000]">
              <h3 className="text-2xl font-black text-slate-950 mb-8 uppercase tracking-tighter border-b-2 border-slate-950 pb-6">
                O DOMÍNIO VEM INCLUSO?
              </h3>
              <div className="space-y-6 text-slate-950 font-bold font-mono text-sm leading-relaxed">
                <p>
                  <span className="bg-slate-950 text-white px-2 uppercase">NÃO.</span> O domínio é a sua patente online. Deve ser comprado e registrado no seu próprio CPF ou CNPJ (ex: Registro.br) para assegurar que você tem o poder absoluto sobre a propriedade.
                </p>
                <p>
                  O custo padrão Nacional é em torno de R$ 40/ano direto pelo órgão regulador.
                </p>
                <div className="mt-8 p-6 bg-slate-950 text-white border-2 border-slate-950 relative">
                  <h4 className="font-black text-[#ccff00] mb-4 text-xs uppercase tracking-widest">
                    ONDE NÓS ENTRAMOS
                  </h4>
                  <p className="text-slate-300">
                    Nossa taxa de Setup orienta e cobre toda a configuração dos Apontamentos DNS que conectam o seu painel do Registro.br com a nossa infraestrutura na nuvem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};
