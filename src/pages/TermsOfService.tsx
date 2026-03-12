import React from "react";
import { Link } from "react-router-dom";
import { PageTransition } from "../components/common/PageTransition";
import { SEO } from "../components/common/SEO";
import { ROUTES } from "../routes";

export const TermsOfService: React.FC = () => {
  const sections = [
    {
      title: "1. Visão Geral",
      content:
        "ESTES TERMOS REGULAM O USO DA PLATAFORMA UNIFICANDO (64.630.380/0001-20). UM ECOSSISTEMA DE SOLUÇÕES PARA ATENDIMENTO DIGITAL, AUTOMAÇÃO RESPONSÁVEL E IA APLICADA. AO UTILIZAR OS SERVIÇOS, O USUÁRIO DECLARA CONCORDÂNCIA INTEGRAL COM ESTAS REGRAS.",
    },
    {
      title: "2. Aceitação",
      content:
        "O USO ESTÁ CONDICIONADO À ACEITAÇÃO DESTES TERMOS. EM CASO DE DISCORDÂNCIA, O ACESSO DEVE SER INTERROMPIDO IMEDIATAMENTE.",
    },
    {
      title: "3. O Escopo",
      content: (
        <div className="space-y-4">
          <p className="font-mono font-bold uppercase text-slate-500">O UNIFICANDO OFERECE SOLUÇÕES MODULARES:</p>
          <div className="grid md:grid-cols-2 gap-4">
             {[
               "Painel de Atendimento Multicanal",
               "Automação e IA de Atendimento",
               "Landing Pages Profissionais",
               "Hospedagem Inteligente (DaaS)",
             ].map((s, i) => (
               <div key={i} className="bg-slate-50 p-4 border-2 border-slate-950 shadow-[4px_4px_0px_#000] text-xs font-black uppercase">
                 {s}
               </div>
             ))}
          </div>
        </div>
      ),
    },
    {
      title: "4. Acesso & Contas",
      content:
        "O USUÁRIO É O ÚNICO RESPONSÁVEL POR SUAS CREDENCIAIS E PELA VERACIDADE DOS DADOS. O UNIFICANDO NÃO SE RESPONSABILIZA POR ACESSOS INDEVIDOS CAUSADOS POR NEGLIGÊNCIA DO CLIENTE.",
    },
    {
      title: "5. Canais & WhatsApp",
      content: (
        <div className="bg-white p-6 border-4 border-slate-950 shadow-[6px_6px_0px_#000]">
          <p className="font-mono font-bold text-sm uppercase leading-relaxed">
            O UNIFICANDO NÃO FORNECE NÚMEROS DE WHATSAPP OU CONTAS DE REDES SOCIAIS. O CLIENTE UTILIZA SEUS PRÓPRIOS CANAIS, AUTORIZANDO A CONEXÃO VIA MÉTODOS OFICIAIS.
          </p>
        </div>
      ),
    },
    {
      title: "6. Automação & IA",
      content:
        "A IA ATUA COMO APOIO. PROJETOS COM IA PASSAM POR DIAGNÓSTICO. O UNIFICANDO NÃO SE RESPONSABILIZA POR RESPOSTAS DA IA QUE DIVIRJAM DAS REGRAS CONFIGURADAS PELO CLIENTE — O MONITORAMENTO É DEVER DO CONTRATANTE.",
    },
    {
      title: "7. Hospedagem Inteligente (DaaS)",
      content: (
        <div className="space-y-4">
          <p>INFRAESTRUTURA FOCADA EM PROJETOS FRONT-END:</p>
          <ul className="space-y-3 font-mono text-xs font-bold uppercase">
             <li>- DOMÍNIO É PROPRIEDADE E RESPONSABILIDADE DO CLIENTE.</li>
             <li>- NÃO INCLUI BANCO DE DADOS OU DESENVOLVIMENTO DE BACK-END.</li>
             <li>- NÃO COBRE DEBUG DE CÓDIGO GERADO POR FERRAMENTAS EXTERNAS.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "8. Pagamento & Prazos",
      content:
         "SETUP + MENSALIDADE. SERVIÇO INICIA APÓS CONTRATO ASSINADO E SETUP PAGO. PRAZO PADRÃO: 15 DIAS ÚTEIS.",
    },
    {
      title: "9. Cancelamento",
      content:
        "SEM FIDELIDADE. CANCELAMENTO A QUALQUER MOMENTO. REEMBOLSO INTEGRAL APENAS SE SOLICITADO EM ATÉ 7 DIAS ÚTEIS APÓS A ENTREGA DO PROJETO.",
    },
    {
      title: "10. Inadimplência",
      content:
        "7 DIAS DE ATRASO: SUSPENSÃO. 30 DIAS: EXCLUSÃO DE DADOS E NECESSIDADE DE NOVO SETUP PARA RETORNO.",
    },
    {
      title: "11. Responsabilidades",
      content: (
        <div className="bg-red-600 text-white p-8 border-4 border-slate-950 shadow-[10px_10px_0px_#000]">
           <p className="font-black uppercase text-xl leading-none mb-4">ALERTA DE SEGURANÇA:</p>
           <p className="font-mono font-bold text-sm uppercase leading-relaxed">
             TODO CONTEÚDO ENVIADO, MENSAGENS E REGRAS DE AUTOMAÇÃO SÃO RESPONSABILIDADE EXCLUSIVA DO USUÁRIO. O UNIFICANDO NÃO SE RESPONSABILIZA POR RESULTADOS COMERCIAIS OU PENALIDADES DE PLATAFORMAS (META/WHATSAPP).
           </p>
        </div>
      ),
    },
  ];

  return (
    <PageTransition>
      <SEO
        title="Termos de Uso | Unificando Digital"
        description="Regras, direitos e deveres para utilização da plataforma e ecossistema Unificando."
        canonical={ROUTES.TERMS}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Termos de Uso e Condições - Unificando",
          "datePublished": "2024-01-01",
          "dateModified": "2026-03-12",
        }}
      />

      <section className="py-24 md:py-32 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          
          <div className="mb-24 text-left border-b-8 border-slate-950 pb-12">
            <h1 className="text-5xl md:text-8xl font-black text-slate-950 mb-8 uppercase tracking-tighter leading-none">
              REGRAS E <br/>
              <span className="bg-[#ccff00] px-4 rotate-1 inline-block border-8 border-slate-950 shadow-[10px_10px_0px_#000]">TERMOS.</span>
            </h1>
            <div className="flex items-center gap-4">
               <span className="bg-slate-950 text-white px-3 py-1 font-black uppercase text-xs">VERSÃO 2026.03</span>
               <span className="font-mono font-black text-xs uppercase text-slate-400 italic">LEGAL_FRAMEWORK_</span>
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

          <div className="mt-32 p-12 border-8 border-slate-950 bg-slate-50 shadow-[20px_20px_0px_#000]">
            <h3 className="text-3xl font-black uppercase mb-6 leading-none">DÚVIDA JURÍDICA?</h3>
            <p className="font-mono font-bold text-slate-500 mb-10 uppercase text-sm leading-relaxed">
              Trabalhamos com transparência total. Se precisar de esclarecimentos sobre o contrato ou SLA, fale diretamente com nosso canal oficial.
            </p>
            <a
              href="mailto:contato@unificando.com.br"
              className="bg-slate-950 text-[#ccff00] px-10 py-5 border-4 border-slate-950 text-sm font-black uppercase tracking-[0.2em] shadow-[6px_6px_0px_#ccff00] hover:shadow-[10px_10px_0px_#ccff00] transition-all inline-block"
            >
              FALAR COM O JURÍDICO
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
