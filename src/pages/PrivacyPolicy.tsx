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
        "O Unificando (64.630.380 MARIA JOSE GOMES DOS SANTOS) respeita a privacidade e a proteção dos dados pessoais de usuários e terceiros envolvidos no uso da plataforma. Esta Política explica como os dados são coletados, usados, armazenados e protegidos, em conformidade com a LGPD (Lei nº 13.709/2018). Ao utilizar o Unificando, o usuário concorda com as práticas descritas nesta Política.",
    },
    {
      title: "2. A quem esta Política se aplica?",
      content: (
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <span className="bg-slate-950 text-[#ccff00] px-2 border-2 border-slate-950 font-black">✓</span>
            <span>Usuários da plataforma Unificando (empresas e profissionais);</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-slate-950 text-[#ccff00] px-2 border-2 border-slate-950 font-black">✓</span>
            <span>Visitantes de sites e landing pages criados ou mantidos pelo Unificando;</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-slate-950 text-[#ccff00] px-2 border-2 border-slate-950 font-black">✓</span>
            <span>Dados tratados no contexto do atendimento digital feito por meio da plataforma.</span>
          </li>
        </ul>
      ),
    },
    {
      title: "3. Quem é o Unificando?",
      content: (
        <div className="space-y-4">
          <p className="font-mono font-bold uppercase text-slate-500">
            O Unificando é um ecossistema de soluções voltado à:
          </p>
          <div className="bg-slate-50 p-6 border-4 border-slate-950 shadow-[4px_4px_0px_#000]">
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                "Organização do atendimento digital",
                "Automação responsável de processos",
                "Uso de inteligência artificial aplicada",
                "Criação de presença profissional",
                "Hospedagem Inteligente (DaaS)",
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
          <p>Os dados coletados variam conforme o uso do serviço e podem incluir:</p>
          <div className="grid sm:grid-cols-2 gap-4">
             {[
               "Nome, e-mail, telefone e WhatsApp",
               "Dados de login e autenticação",
               "Mensagens trocadas nos canais",
               "Áudios enviados (quando aplicável)",
               "Dados técnicos (IP, Data, Hora)",
             ].map((d, i) => (
               <div key={i} className="bg-white p-4 border-2 border-slate-950 shadow-[4px_4px_0px_#000] font-mono font-bold text-xs uppercase">
                 {d}
               </div>
             ))}
          </div>
          <div className="bg-amber-100 p-6 border-4 border-slate-950 shadow-[6px_6px_0px_#000]">
            <p className="text-sm font-black uppercase mb-4 leading-none">NOTA SOBRE HOSPEDAGEM (DaaS):</p>
            <p className="text-xs leading-relaxed font-mono font-bold">
              Processamos apenas dados de infraestrutura (IP, requisições) necessários para estabilidade e proteção. Não acessamos o conteúdo preenchido nos formulários dos sites hospedados.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "5. Uso de Dados Google (User Data)",
      content: (
        <div className="space-y-6">
          <p>Em conformidade com a Política de Dados do Usuário dos Serviços de API do Google:</p>
          <div className="space-y-4">
            <div className="p-6 bg-slate-950 text-white border-4 border-slate-950 shadow-[8px_8px_0px_#ccff00]">
               <h4 className="font-black uppercase mb-2 text-[#ccff00]">ACESSO & USO</h4>
               <p className="text-xs font-mono font-bold leading-relaxed">
                 Acessamos Sheets, Docs, Drive e Calendar apenas via OAuth para executar automações solicitadas. <br/><br/>
                 O USO E TRANSFERÊNCIA DE INFORMAÇÕES ADERIRÃO ÀS POLÍTICAS DO GOOGLE, INCLUINDO REQUISITOS DE USO LIMITADO.
               </p>
            </div>
            <p className="text-sm font-black uppercase text-red-600 italic">
              *NÃO UTILIZAMOS DADOS DAS APIs DO GOOGLE PARA TREINAR MODELOS DE IA.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "6. Como os dados são coletados?",
      content: (
        <div className="flex flex-wrap gap-4">
          {[
            "Formulários de Lead",
            "Painel de Atendimento",
            "Canais Integrados",
            "Integrações OAuth",
            "Monitoramento de Segurança",
          ].map((c, i) => (
            <span key={i} className="bg-white px-4 py-2 border-4 border-slate-950 text-[10px] font-black uppercase tracking-widest shadow-[4px_4px_0px_#000]">
              {c}
            </span>
          ))}
        </div>
      ),
    },
    {
      title: "7. Para que usamos os dados?",
      content: (
        <div className="bg-white p-8 border-4 border-slate-950 shadow-[10px_10px_0px_#000]">
          <ul className="space-y-3 font-mono text-sm font-bold uppercase">
            {[
              "Gerenciar contas e logins",
              "Viabilizar o atendimento digital",
              "Executar automações configuradas",
              "Operar agentes de IA com segurança",
              "Prestar suporte técnico real",
              "Garantir estabilidade da plataforma",
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
      title: "8. Compartilhamento",
      content:
        "Os dados são compartilhados apenas com parceiros essenciais (Meta/WhatsApp, Provedores de Infraestrutura, Gateways de Pagamento). O Unificando nunca vende seus dados.",
    },
    {
      title: "9. Uso de IA",
      content:
        "A IA do Unificando serve como apoio. Ela não toma decisões críticas sozinha, não atua fora das regras definidas pelo usuário e todos os processos são rastreáveis. Foco em automação responsável, não substituição humana.",
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
        description="Termos de proteção de dados e práticas de privacidade do ecossistema Unificando."
        canonical={ROUTES.PRIVACY}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Política de Privacidade - Unificando",
          "description": "Explicação completa sobre como tratamos seus dados sob a LGPD.",
          "datePublished": "2024-01-01",
          "dateModified": "2026-03-12",
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
               <span className="bg-slate-950 text-white px-3 py-1 font-black uppercase text-xs">ATUALIZADO MAR/2026</span>
               <span className="font-mono font-black text-xs uppercase text-slate-400 italic">LGPD COMPLIANT_</span>
            </div>
          </div>

          <div className="space-y-16">
            {sections.map((section, index) => (
              <div key={index} className="scroll-mt-32" id={`section-${index}`}>
                <div className="inline-block bg-white text-slate-950 border-4 border-slate-950 px-4 py-1 font-black uppercase tracking-tighter text-xl mb-6 shadow-[4px_4px_0px_#000]">
                  {section.title}
                </div>
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
