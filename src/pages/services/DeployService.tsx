import React from "react";
import { motion } from "framer-motion";
import { SEO } from "../../components/common/SEO";
import { PageTransition } from "../../components/common/PageTransition";
import { ROUTES } from "../../routes";
import { PRICING } from "../../constants/pricing";

export const DeployService: React.FC = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Olá! Gostaria de contratar a Hospedagem Inteligente. Meu site já está pronto e preciso colocá-lo no ar no meu domínio .com.br."
    );
    window.open(`https://wa.me/5581995557302?text=${message}`, "_blank");
  };

  return (
    <PageTransition>
      <SEO
        title="Hospedagem Inteligente para Sites feitos com IA | Unificando"
        description="Você criou seu site com Cursor, Lovable ou v0? Nós colocamos no ar com domínio próprio e cadeado de segurança. Sem complicações técnicas."
        canonical={ROUTES.SMART_HOSTING}
      />

      <main className="bg-slate-50 min-h-screen">
        {/* HERO */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-24 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-[11px] font-black uppercase tracking-[0.2em] mb-6">
                DEPLOY INTELIGENTE
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.05] mb-6 uppercase tracking-tighter">
                Você criou com IA. <br />
                <span className="text-indigo-600 italic">Nós colocamos no ar.</span>
              </h1>
              <p className="text-lg text-slate-500 mb-10 leading-relaxed font-medium">
                Chega de links como <span className="text-slate-400">"seu-site.vercel.app"</span>. Tenha seu próprio domínio profissional (.com.br) com cadeado de segurança, rapidez e sem precisar entender nada de infraestrutura.
              </p>
              
              <button
                onClick={handleWhatsAppClick}
                className="bg-slate-900 text-white px-8 py-5 rounded-2xl font-black hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 uppercase tracking-widest text-sm w-full md:w-auto text-center"
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
               <div className="absolute inset-0 bg-indigo-500/10 rounded-[3rem] blur-2xl transform rotate-3"></div>
               <div className="bg-white border border-slate-200 rounded-[3rem] p-8 shadow-2xl relative overflow-hidden">
                 <div className="flex items-center gap-4 border-b border-slate-100 pb-6 mb-6">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center font-black">✓</div>
                    <div>
                      <h3 className="font-bold text-slate-900">Site Ativo e Seguro</h3>
                      <p className="text-xs text-slate-500">https://seu-dominio.com.br</p>
                    </div>
                 </div>
                 
                 <div className="space-y-4">
                   <div className="flex justify-between items-center bg-slate-50 p-4 rounded-2xl border border-slate-100">
                     <span className="font-bold text-slate-600 text-sm">Status do Domínio</span>
                     <span className="text-xs font-black text-green-600 bg-green-100 px-3 py-1 rounded-full uppercase">Conectado</span>
                   </div>
                   <div className="flex justify-between items-center bg-slate-50 p-4 rounded-2xl border border-slate-100">
                     <span className="font-bold text-slate-600 text-sm">Segurança SSL</span>
                     <span className="text-xs font-black text-green-600 bg-green-100 px-3 py-1 rounded-full uppercase">Ativo</span>
                   </div>
                   <div className="flex justify-between items-center bg-slate-50 p-4 rounded-2xl border border-slate-100">
                     <span className="font-bold text-slate-600 text-sm">Performance Global</span>
                     <span className="text-xs font-black text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full uppercase">Otimizada</span>
                   </div>
                 </div>
               </div>
            </motion.div>
          </div>
        </section>

        {/* DETAILS */}
        <section className="py-24 bg-white border-b border-slate-100">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter">
                Feito para quem não quer <br className="hidden md:block"/> perder tempo com telas pretas.
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Domínio Profissional", desc: "Nós fazemos a configuração chata de apontamento de DNS (Registro.br) para o seu site.", icon: "🌐" },
                { title: "Cadeado de Segurança", desc: "Certificado SSL (HTTPS) configurado e renovado automaticamente contra invasões.", icon: "🔒" },
                { title: "Servidor Dedicado", desc: "Nada de servidores gratuitos e lentos. Seu site roda em máquinas parrudas e preparadas.", icon: "🚀" },
              ].map((b, i) => (
                <div key={i} className="bg-slate-50 border border-slate-200 p-8 rounded-[2rem] text-center hover:border-indigo-300 transition-colors">
                  <div className="w-16 h-16 mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-3xl mb-6">{b.icon}</div>
                  <h3 className="font-black text-slate-900 mb-3">{b.title}</h3>
                  <p className="text-sm font-medium text-slate-500 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

         {/* DISCLAMERS & SCOPE */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-4">
             <div className="text-center mb-12">
                <span className="text-indigo-600 font-black uppercase tracking-[0.2em] text-[10px] mb-4 block">Transparência Radical</span>
                <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">
                  O que está (e o que não está) incluso
                </h2>
                <p className="text-slate-500 mt-4 leading-relaxed font-medium">
                  Para mantermos a alta performance e o valor acessível, nosso escopo é focado estritamente na <strong>infraestrutura e estabilidade</strong>.
                </p>
             </div>

             <div className="grid md:grid-cols-2 gap-8">
               <div className="bg-emerald-50/50 border border-emerald-100 p-8 rounded-[2rem]">
                 <h3 className="font-black text-emerald-800 flex items-center gap-2 mb-6 uppercase tracking-wide text-xs">
                   <span className="text-xl">✅</span> Nossa Responsabilidade
                 </h3>
                 <ul className="space-y-4 text-sm font-medium text-emerald-700/80">
                   <li className="flex gap-3 items-start"><span className="text-emerald-500 mt-0.5">✓</span> <div>Ambiente de produção configurado e servidor otimizado.</div></li>
                   <li className="flex gap-3 items-start"><span className="text-emerald-500 mt-0.5">✓</span> <div>Apontamento de Domínio e certificado SSL (Cadeado).</div></li>
                   <li className="flex gap-3 items-start"><span className="text-emerald-500 mt-0.5">✓</span> <div>Uptime, performance de rede e disponibilidade.</div></li>
                   <li className="flex gap-3 items-start"><span className="text-emerald-500 mt-0.5">✓</span> <div>Suporte técnico focado exclusivamente em infraestrutura.</div></li>
                 </ul>
               </div>

               <div className="bg-red-50/50 border border-red-100 p-8 rounded-[2rem]">
                 <h3 className="font-black text-red-800 flex items-center gap-2 mb-6 uppercase tracking-wide text-xs">
                   <span className="text-xl">❌</span> Fora do Escopo
                 </h3>
                 <ul className="space-y-4 text-sm font-medium text-red-700/80">
                   <li className="flex gap-3 items-start"><span className="text-red-500 mt-0.5">✕</span> <div><strong>Back-ends e Bancos de Dados:</strong> Hospedamos apenas o front-end estático (React, Vite, HTML/JS). Não subimos APIs estruturadas ou bancos de dados.</div></li>
                   <li className="flex gap-3 items-start"><span className="text-red-500 mt-0.5">✕</span> <div><strong>Bugs no código:</strong> Se a IA gerou um código quebrado, a resolução é por sua conta.</div></li>
                   <li className="flex gap-3 items-start"><span className="text-red-500 mt-0.5">✕</span> <div><strong>Erros de Deploy:</strong> Falhas causadas por dependências do NPM ausentes ou repositórios corrompidos.</div></li>
                   <li className="flex gap-3 items-start"><span className="text-red-500 mt-0.5">✕</span> <div><strong>Edição de Conteúdo:</strong> Não alteramos textos, cores ou imagens do projeto.</div></li>
                   <li className="flex gap-3 items-start"><span className="text-red-500 mt-0.5">✕</span> <div><strong>Manutenção Lógica:</strong> Refatoração e atualização de pacotes (ex: React) não inclusos.</div></li>
                 </ul>
               </div>
             </div>

             <div className="mt-8 bg-slate-900 border border-slate-800 p-8 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
               <div>
                 <h4 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                   <span className="text-xl">🛠️</span> Precisa de ajuda com o código?
                 </h4>
                 <p className="text-slate-400 text-sm font-medium max-w-xl leading-relaxed">
                   Sabemos que IAs podem gerar bugs confusos. Caso seu projeto precise de manutenção no front-end ou refatoração, oferecemos <strong className="text-white">orçamentos avulsos ou banco de horas técnicas (a partir de R$ {PRICING.hospedagem.extras.technicalHour.price} por {PRICING.hospedagem.extras.technicalHour.hours} horas)</strong> para resolver seu problema.
                 </p>
               </div>
               <button
                 onClick={() => {
                   const message = encodeURIComponent(
                     "Olá! Tenho interesse na Hospedagem Inteligente, mas estou com um código/deploy quebrado e precisarei de um orçamento para a Hora Técnica."
                   );
                   window.open(`https://wa.me/5581995557302?text=${message}`, "_blank");
                 }}
                 className="shrink-0 bg-white text-slate-900 px-8 py-4 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-slate-100 transition-all shadow-xl shadow-white/10"
               >
                 Consultar Hora Técnica
               </button>
             </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="py-24 bg-slate-900">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <span className="text-indigo-400 font-black uppercase tracking-[0.2em] text-xs mb-4 block">
              INVESTIMENTO
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-16 uppercase tracking-tighter">
              Claro e Simples.
            </h2>
            
            <div className="bg-slate-800 border border-slate-700 rounded-[3rem] p-10 md:p-16 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
               
               <div className="flex flex-col md:flex-row items-center justify-between border-b border-slate-700/50 pb-10 mb-10 gap-8 text-center md:text-left">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Setup Inicial</h3>
                    <p className="text-slate-400 text-sm font-medium">Configuração completa (Domínio, SSL, Servidor e Deploy inicial).</p>
                  </div>
                  <div className="text-4xl font-black text-white shrink-0 tracking-tighter">R$ {PRICING.hospedagem.base.setup} <span className="text-lg font-normal text-slate-500">/único</span></div>
               </div>
               
               <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left mb-12">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Mensalidade</h3>
                    <p className="text-slate-400 text-sm font-medium">Hospedagem de alta performance focada em sites estáticos estruturados com React/Vite/HTML.</p>
                  </div>
                  <div className="text-4xl font-black text-indigo-400 shrink-0 tracking-tighter">R$ {PRICING.hospedagem.base.monthly} <span className="text-lg font-normal text-slate-500">/mês</span></div>
               </div>

               <button
                 onClick={handleWhatsAppClick}
                 className="bg-indigo-600 text-white w-full py-6 rounded-2xl font-black uppercase tracking-widest hover:bg-indigo-500 transition-all shadow-[0_0_40px_rgba(79,70,229,0.4)]"
               >
                 QUERO CONTRATAR AGORA
               </button>
            </div>
          </div>
        </section>

        {/* FAQ - DOMÍNIO */}
        <section className="py-24 bg-slate-50 border-t border-slate-200">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-indigo-600 font-black uppercase tracking-[0.2em] text-[10px] mb-4 block">Dúvidas Comuns</span>
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">
                Sobre o Domínio
              </h2>
            </div>

            <div className="bg-white border border-slate-200 rounded-[2rem] p-8 md:p-12 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-start gap-4">
                <span className="text-2xl mt-1">🌍</span> 
                <span>O domínio já vem incluso na Hospedagem?</span>
              </h3>
              <div className="space-y-5 text-slate-600 font-medium text-sm leading-relaxed md:ml-12">
                <p>
                  <strong>Não. O domínio (ex: <span className="text-slate-400">suaempresa.com.br</span>) é a sua propriedade intelectual.</strong> Ele deve ser comprado e registrado no seu próprio CPF ou CNPJ. Nós não registramos domínios em nosso nome para garantir que você tenha 100% de posse e liberdade sobre a sua marca na internet.
                </p>
                <p>
                  Recomendamos fortemente a compra direta pelo órgão oficial brasileiro: <a href="https://registro.br" target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-bold hover:underline">Registro.br</a> (o custo padrão Nacional é de apenas R$ 40/ano).
                </p>
                
                <div className="bg-indigo-50 border border-indigo-100 p-6 rounded-2xl mt-6 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-2 h-full bg-indigo-500"></div>
                  <h4 className="font-bold text-indigo-900 mb-2 text-xs uppercase tracking-wider flex items-center gap-2">
                    ✅ Onde nós entramos?
                  </h4>
                  <p className="text-indigo-800/80">
                    A taxa de <strong>Setup Inicial</strong> já inclui o nosso suporte total nessa etapa. Após você criar sua conta e pagar os R$ 40 no Registro.br, nós guiamos você na configuração dos "Apontamentos de DNS". Nós fazemos a conexão técnica entre o seu domínio recém-comprado e os nossos servidores de alta performance, ativando também o certificado SSL (cadeado de segurança).
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
