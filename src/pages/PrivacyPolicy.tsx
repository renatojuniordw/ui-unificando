import React from "react";
import { Link } from "react-router-dom";
import { PageTransition } from "../components/common/PageTransition";
import { SEO } from "../components/common/SEO";
import { ROUTES } from "../routes";

export const PrivacyPolicy: React.FC = () => {
  const sections = [
    {
      title: "1. Visão Geral",
      content:
        "O Unificando é um laboratório de projetos autorais e inteligência artificial. Esta Política explica como os dados são coletados, usados, armazenados e protegidos nos sites, produtos e ferramentas do laboratório, em conformidade com a LGPD (Lei nº 13.709/2018). Ao utilizar nossos produtos, o usuário concorda com as práticas descritas nesta Política.",
    },
    {
      title: "2. A quem esta Política se aplica?",
      content: (
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <span className="bg-slate-950 text-[#ccff00] px-2 border-2 border-slate-950 font-black">✓</span>
            <span>Visitantes de unificando.com.br e dos produtos do laboratório (PDF, Med e Radar Unificando);</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-slate-950 text-[#ccff00] px-2 border-2 border-slate-950 font-black">✓</span>
            <span>Usuários das ferramentas open source publicadas no npm;</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-slate-950 text-[#ccff00] px-2 border-2 border-slate-950 font-black">✓</span>
            <span>Pessoas que entram em contato pelo formulário, e-mail ou WhatsApp.</span>
          </li>
        </ul>
      ),
    },
    {
      title: "3. Quem é o Unificando?",
      content: (
        <div className="space-y-4">
          <p className="font-mono font-bold uppercase text-slate-500">
            O Unificando é um laboratório de projetos autorais voltado a:
          </p>
          <div className="bg-slate-50 p-6 border-4 border-slate-950 shadow-[4px_4px_0px_#000]">
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                "Produtos utilitários e ferramentas web",
                "Inteligência artificial aplicada",
                "Pesquisa e desenvolvimento (P&D)",
                "Ferramentas open source para devs",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-xs font-black uppercase italic">
                   <span className="w-2 h-2 bg-slate-950"></span>
                   {item}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-sm font-black uppercase tracking-tight">
            Canal oficial: <span className="text-indigo-600 bg-indigo-50 px-2 border-2 border-indigo-600 shadow-[2px_2px_0px_#000]">contato@unificando.com.br</span>
          </p>
        </div>
      ),
    },
    {
      title: "4. Quais dados pessoais são coletados?",
      content: (
        <div className="space-y-6">
          <p>Os dados coletados variam conforme o produto utilizado e podem incluir:</p>
          <div className="grid sm:grid-cols-2 gap-4">
             {[
               "Nome e WhatsApp (apenas via contato)",
               "Dados de navegação e analytics (GA4, Meta Pixel)",
               "Dados técnicos (IP, navegador, data e hora)",
               "Arquivos enviados ao PDF Unificando (processamento efêmero)",
             ].map((d, i) => (
               <div key={i} className="bg-white p-4 border-2 border-slate-950 shadow-[4px_4px_0px_#000] font-mono font-bold text-xs uppercase">
                 {d}
               </div>
             ))}
          </div>
          <p className="text-sm font-black uppercase text-slate-600 italic">
            * Os produtos do laboratório funcionam sem cadastro. No Med Unificando, as buscas por IA são processadas 100% no navegador — nenhum dado de busca é enviado a servidores ou APIs externas.
          </p>
        </div>
      ),
    },
    {
      title: "5. Como os dados são coletados?",
      content: (
        <div className="flex flex-wrap gap-4">
          {[
            "Formulário de contato",
            "Cookies de analytics e publicidade",
            "Uploads efêmeros de arquivos",
            "Logs de segurança e infraestrutura",
          ].map((c, i) => (
            <span key={i} className="bg-white px-4 py-2 border-4 border-slate-950 text-[10px] font-black uppercase tracking-widest shadow-[4px_4px_0px_#000]">
              {c}
            </span>
          ))}
        </div>
      ),
    },
    {
      title: "6. Para que usamos os dados?",
      content: (
        <div className="bg-white p-8 border-4 border-slate-950 shadow-[10px_10px_0px_#000]">
          <ul className="space-y-3 font-mono text-sm font-bold uppercase">
            {[
              "Responder contatos e conversas sobre projetos",
              "Operar e melhorar os produtos do laboratório",
              "Medir audiência e desempenho (GA4, Meta Pixel)",
              "Exibir publicidade relevante (AdSense)",
              "Garantir segurança e estabilidade dos serviços",
              "Cumprir obrigações legais",
            ].map((u, i) => (
              <li key={i} className="flex gap-4 items-center border-b-2 border-slate-100 pb-2 last:border-0">
                <span className="text-indigo-600 font-black">#0{i+1}</span>
                {u}
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      title: "7. IA & Seus Dados",
      content: (
        <div className="bg-slate-950 text-white p-6 border-4 border-slate-950 shadow-[8px_8px_0px_#ccff00]">
          <p className="font-mono font-bold text-sm uppercase leading-relaxed">
            O laboratório aplica IA com responsabilidade. NÃO utilizamos dados de usuários para treinar modelos de IA. Onde a IA é usada em nossos produtos, o processamento é local (como no Med Unificando) ou acontece através de provedores terceiros, sujeitos às políticas próprias de cada provedor.
          </p>
        </div>
      ),
    },
    {
      title: "8. Compartilhamento",
      content:
        "Os dados são compartilhados apenas com parceiros essenciais: Google (Analytics e AdSense), Meta (Pixel) e provedores de infraestrutura e hospedagem. O Unificando nunca vende seus dados.",
    },
    {
      title: "9. Cookies & Rastreamento",
      content: (
        <div className="space-y-4">
          <p>Utilizamos cookies e tecnologias similares para medir audiência (Google Analytics), conversões (Meta Pixel) e exibir anúncios (Google AdSense). Esses serviços podem coletar dados de navegação conforme suas próprias políticas.</p>
          <p className="text-sm font-black uppercase text-slate-600 italic">
            Você pode gerenciar ou bloquear cookies nas configurações do seu navegador, além de controlar anúncios personalizados nas plataformas do Google e da Meta.
          </p>
        </div>
      ),
    },
    {
      title: "10. Segurança & Direitos",
      content: (
        <div className="bg-[#ccff00] p-6 border-4 border-slate-950 shadow-[8px_8px_0px_#000]">
           <p className="font-black uppercase mb-4 leading-none">SEUS DIREITOS (LGPD):</p>
           <p className="text-sm font-mono font-bold leading-relaxed mb-6">
             Acesso, correção, exclusão e portabilidade podem ser solicitados a qualquer momento via canal oficial.
           </p>
           <div className="bg-white p-4 border-2 border-slate-950">
             <p className="text-[10px] font-black uppercase italic">
               DADOS SÃO ARMAZENADOS COM CRIPTOGRAFIA E MEDIDAS TÉCNICAS RÍGIDAS.
             </p>
           </div>
        </div>
      ),
    },
  ];

  return (
    <PageTransition>
      <SEO
        title="Privacidade | Unificando Digital"
        description="Política de privacidade e proteção de dados dos produtos e ferramentas do laboratório Unificando, em conformidade com a LGPD."
        canonical={ROUTES.PRIVACY}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Política de Privacidade - Unificando",
          "description": "Explicação completa sobre como tratamos seus dados sob a LGPD.",
          "datePublished": "2024-01-01",
          "dateModified": "2026-09-02",
          "breadcrumb": {
             "@type": "BreadcrumbList",
             "itemListElement": [{
               "@type": "ListItem",
               "position": 1,
               "name": "Início",
               "item": "https://unificando.com.br"
             },{
               "@type": "ListItem",
               "position": 2,
               "name": "Privacidade"
             }]
          }
        }}
      />

      <section className="py-24 md:py-32 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          
          <div className="mb-24 text-left border-b-8 border-slate-950 pb-12">
            <h1 className="text-5xl md:text-8xl font-black text-slate-950 mb-8 uppercase tracking-tighter leading-none">
              DADOS E <br/>
              <span className="bg-[#ccff00] px-4 -rotate-1 inline-block border-8 border-slate-950 shadow-[10px_10px_0px_#000]">PRIVACIDADE.</span>
            </h1>
            <div className="flex items-center gap-4">
               <span className="bg-slate-950 text-white px-3 py-1 font-black uppercase text-xs">ATUALIZADO SET/2026</span>
               <span className="font-mono font-black text-xs uppercase text-slate-400 italic">LGPD COMPLIANT_</span>
            </div>
          </div>

          <div className="space-y-16">
            {sections.map((section, index) => (
              <div key={index} className="scroll-mt-32" id={`section-${index}`}>
                <h2 className="inline-block bg-white text-slate-950 border-4 border-slate-950 px-4 py-1 font-black uppercase tracking-tighter text-xl mb-6 shadow-[4px_4px_0px_#000]">
                  {section.title}
                </h2>
                <div className="text-slate-800 leading-relaxed font-black uppercase tracking-tight text-lg md:text-xl">
                  {section.content}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-32 border-8 border-slate-950 p-12 bg-slate-950 text-white shadow-[20px_20px_0px_#ccff00]">
            <h3 className="text-3xl font-black uppercase mb-6 leading-none">TEM DÚVIDAS?</h3>
            <p className="font-mono font-bold text-slate-400 mb-10 uppercase text-sm leading-relaxed">
              Respeitamos a sua soberania sobre seus dados. Se precisar de uma cópia das suas informações ou da exclusão completa, fale diretamente com a equipe técnica.
            </p>
            <a
              href="mailto:contato@unificando.com.br"
              className="bg-[#ccff00] text-slate-950 px-10 py-5 border-4 border-slate-950 text-sm font-black uppercase tracking-[0.2em] shadow-[6px_6px_0px_#fff] hover:shadow-[10px_10px_0px_#fff] transition-all inline-block"
            >
              FALAR COM O DPO
            </a>
          </div>

          <div className="mt-16 text-center">
            <Link
              to={ROUTES.HOME}
              className="text-xs font-black text-slate-400 hover:text-slate-950 transition-colors uppercase tracking-[0.3em] italic"
            >
              ← RETORNAR AO INÍCIO
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};