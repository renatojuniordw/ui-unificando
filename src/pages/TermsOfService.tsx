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
        "ESTES TERMOS REGULAM O USO DO LABORATÓRIO UNIFICANDO: SEUS SITES, PRODUTOS, FERRAMENTAS E CONTEÚDOS. AO UTILIZAR QUALQUER SERVIÇO DO LABORATÓRIO, O USUÁRIO DECLARA CONCORDÂNCIA INTEGRAL COM ESTAS REGRAS.",
    },
    {
      title: "2. Aceitação",
      content:
        "O USO ESTÁ CONDICIONADO À ACEITAÇÃO DESTES TERMOS. EM CASO DE DISCORDÂNCIA, O ACESSO DEVE SER INTERROMPIDO IMEDIATAMENTE.",
    },
    {
      title: "3. Descrição dos Serviços",
      content: (
        <div className="space-y-4">
          <p className="font-mono font-bold uppercase text-slate-500">O LABORATÓRIO UNIFICANDO PUBLICA:</p>
          <div className="grid md:grid-cols-2 gap-4">
             {[
               "Produtos utilitários web (PDF Unificando)",
               "Sistemas com IA aplicada (Med, Radar)",
               "Ferramentas open source no npm",
               "Conteúdos e documentação técnica",
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
        "OS PRODUTOS DO LABORATÓRIO FUNCIONAM SEM CADASTRO E ANONIMAMENTE. SE NO FUTURO ALGUM SERVIÇO EXIGIR CONTA, O USUÁRIO SERÁ O ÚNICO RESPONSÁVEL POR SUAS CREDENCIAIS E PELA VERACIDADE DOS DADOS FORNECIDOS.",
    },
    {
      title: "5. Uso Aceitável",
      content: (
        <div className="bg-white p-6 border-4 border-slate-950 shadow-[6px_6px_0px_#000]">
          <p className="font-mono font-bold text-sm uppercase leading-relaxed">
            É PROIBIDO UTILIZAR OS SERVIÇOS DO LABORATÓRIO PARA QUALQUER FIM ILEGAL, PARA REALIZAR SCRAPING OU ABUSO MASSIVO, PARA TENTATIVAS DE ACESSO NÃO AUTORIZADO OU QUALQUER AÇÃO QUE COMPROMETA A SEGURANÇA E A ESTABILIDADE DOS PRODUTOS.
          </p>
        </div>
      ),
    },
    {
      title: "6. Propriedade Intelectual",
      content:
        "TODO O CONTEÚDO, CÓDIGO-FONTE, DESIGN, TEXTOS E MARCAS DO LABORATÓRIO UNIFICANDO SÃO DE PROPRIEDADE DE SEUS CRIADORES. AS FERRAMENTAS PUBLICADAS NO NPM SÃO DE CÓDIGO ABERTO, DISTRIBUÍDAS SOB A LICENÇA MIT, SALVO INDICAÇÃO EM CONTRÁRIO EM CADA PACOTE.",
    },
    {
      title: "7. Isenções & Avisos",
      content: (
        <div className="bg-red-600 text-white p-8 border-4 border-slate-950 shadow-[10px_10px_0px_#000]">
           <p className="font-black uppercase text-xl leading-none mb-4">ATENÇÃO:</p>
           <p className="font-mono font-bold text-sm uppercase leading-relaxed">
             OS PRODUTOS DO LABORATÓRIO SÃO OFERECIDOS "COMO ESTÃO". DADOS DE FONTES PÚBLICAS DE TERCEIROS (COMO ANVISA E PLATAFORMAS DE VAGAS) PODEM DESATUALIZAR E NÃO CONSTITUEM ACONSELHAMENTO MÉDICO, JURÍDICO OU FINANCEIRO. NENHUM CONTEÚDO DO LABORATÓRIO SUBSTITUI A CONSULTA A UM PROFISSIONAL QUALIFICADO.
           </p>
        </div>
      ),
    },
    {
      title: "8. Limitação de Responsabilidade",
      content:
        "OS PRODUTOS SÃO GRATUITOS E NÃO HÁ GARANTIA DE DISPONIBILIDADE CONTÍNUA OU ININTERRUPTA. O LABORATÓRIO NÃO SE RESPONSABILIZA POR DANOS DIRETOS, INDIRETOS OU CONSEQUENTES DECORRENTES DO USO OU DA INDISPONIBILIDADE DE SEUS SERVIÇOS.",
    },
    {
      title: "9. Links de Terceiros",
      content:
        "NOSSOS PRODUTOS PODEM CONTER LINKS PARA SITES DE TERCEIROS (NPM, GITHUB, PLATAFORMAS EXTERNAS). NÃO NOS RESPONSABILIZAMOS PELO CONTEÚDO, POLÍTICAS OU PRÁTICAS DESSES SERVIÇOS.",
    },
    {
      title: "10. Alterações destes Termos",
      content:
        "ESTES TERMOS PODEM SER ATUALIZADOS A QUALQUER MOMENTO. A VERSÃO ATUALIZADA SERÁ PUBLICADA NESTA PÁGINA COM NOVA DATA DE VERSÃO, E O USO CONTÍNUO DOS SERVIÇOS APÓS A ALTERAÇÃO IMPLICA EM ACEITAÇÃO DOS NOVOS TERMOS.",
    },
    {
      title: "11. Legislação & Foro",
      content:
        "ESTES TERMOS SÃO REGIDOS PELAS LEIS DA REPÚBLICA FEDERATIVA DO BRASIL. FICA ELEITO O FORO DA COMARCA DO RECIFE/PE PARA DIRIMIR QUALQUER CONTROVÉRSIA RELACIONADA A ESTES TERMOS.",
    },
  ];

  return (
    <PageTransition>
      <SEO
        title="Termos de Uso | Unificando"
        description="Regras, direitos e deveres para utilização dos sites, produtos e ferramentas do laboratório Unificando."
        canonical={ROUTES.TERMS}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Termos de Uso e Condições - Unificando",
          "datePublished": "2024-01-01",
          "dateModified": "2026-09-02",
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
               <span className="bg-slate-950 text-white px-3 py-1 font-black uppercase text-xs">VERSÃO 2026.09</span>
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

          <div className="mt-32 p-12 border-8 border-slate-950 bg-slate-50 shadow-[20px_20px_0px_#000]">
            <h3 className="text-3xl font-black uppercase mb-6 leading-none">DÚVIDA JURÍDICA?</h3>
            <p className="font-mono font-bold text-slate-500 mb-10 uppercase text-sm leading-relaxed">
              Trabalhamos com transparência total. Se precisar de esclarecimentos sobre estes termos, fale diretamente com nosso canal oficial.
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