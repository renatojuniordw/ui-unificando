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
        <ul className="list-disc pl-5 space-y-2">
          <li>Usuários da plataforma Unificando (empresas e profissionais);</li>
          <li>
            Visitantes de sites e landing pages criados ou mantidos pelo
            Unificando;
          </li>
          <li>
            Dados tratados no contexto do atendimento digital feito por meio da
            plataforma.
          </li>
        </ul>
      ),
    },
    {
      title: "3. Quem é o Unificando?",
      content: (
        <>
          <p className="mb-4">
            O Unificando é um ecossistema de soluções voltado à:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Organização do atendimento digital;</li>
            <li>Automação responsável de processos;</li>
            <li>Uso de inteligência artificial aplicada;</li>
            <li>Criação de presença profissional na internet.</li>
          </ul>
          <p>
            Atuamos no Brasil com soluções modulares. Canal oficial:{" "}
            <strong>contato@unificando.com.br</strong>
          </p>
        </>
      ),
    },
    {
      title: "4. Quais dados pessoais são coletados?",
      content: (
        <>
          <p className="mb-4">
            Os dados coletados variam conforme o uso do serviço e podem incluir:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Nome, e-mail, telefone e número de WhatsApp;</li>
            <li>Dados de login e autenticação;</li>
            <li>Mensagens trocadas nos canais conectados;</li>
            <li>Áudios enviados durante atendimentos, quando aplicável;</li>
            <li>
              Dados técnicos básicos (IP, data, hora e registros de acesso).
            </li>
          </ul>
          <p className="text-sm font-bold text-slate-500">
            Nota: O Unificando não coleta senhas de redes sociais ou contas
            externas, nem dados sensíveis, salvo quando estritamente necessário
            e autorizado.
          </p>
        </>
      ),
    },
    {
      title: "5. Uso de Dados de Serviços Google (Google User Data)",
      content: (
        <>
          <p className="mb-4">
            Em conformidade com a Política de Dados do Usuário dos Serviços de
            API do Google, detalhamos o uso das integrações:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
              <strong>Acesso:</strong> A plataforma acessa dados do Google
              Sheets, Docs, Drive e Calendar apenas mediante autorização
              explícita (OAuth) para executar automações solicitadas pelo
              usuário.
            </li>
            <li>
              <strong>Uso:</strong> Os dados são usados estritamente para ler
              informações de processos (Sheets), gerar documentos modelos
              (Docs/Drive) e agendar compromissos (Calendar).
            </li>
            <li>
              <strong>Limited Use Disclosure:</strong> O uso e a transferência
              de informações recebidas das APIs do Google para qualquer outro
              aplicativo aderirão à{" "}
              <a
                href="https://developers.google.com/terms/api-services-user-data-policy"
                target="_blank"
                rel="noreferrer"
                className="text-indigo-600 hover:text-indigo-800 underline"
              >
                Política de Dados do Usuário dos Serviços de API do Google
              </a>
              , incluindo os requisitos de Uso Limitado.
            </li>
          </ul>
          <p className="font-bold">
            Não utilizamos dados obtidos via APIs do Google Workspace para
            treinar modelos de Inteligência Artificial.
          </p>
        </>
      ),
    },
    {
      title: "6. Como os dados são coletados?",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Formulários de cadastro e contato;</li>
          <li>Uso do painel de atendimento;</li>
          <li>
            Mensagens enviadas por canais integrados (WhatsApp, Instagram,
            Telegram e chat do site);
          </li>
          <li>Integrações autorizadas diretamente pelo usuário;</li>
          <li>Ferramentas básicas de análise, segurança e monitoramento.</li>
        </ul>
      ),
    },
    {
      title: "7. Para que usamos os dados?",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Criar e gerenciar contas;</li>
          <li>Viabilizar o atendimento digital;</li>
          <li>Executar automações configuradas pelo usuário;</li>
          <li>Operar agentes de IA conforme regras definidas;</li>
          <li>Manter histórico de atendimentos;</li>
          <li>Prestar suporte técnico e operacional;</li>
          <li>Processar cobranças e pagamentos;</li>
          <li>Garantir segurança e estabilidade;</li>
          <li>Cumprir obrigações legais.</li>
        </ul>
      ),
    },
    {
      title: "8. Compartilhamento com terceiros",
      content: (
        <>
          <p className="mb-4">
            Os dados são compartilhados apenas quando necessário, com:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Plataformas de mensageria (ex: WhatsApp / Meta);</li>
            <li>Provedores de hospedagem e infraestrutura;</li>
            <li>Intermediadores de pagamento;</li>
            <li>Serviços de monitoramento, segurança e análise.</li>
          </ul>
          <p className="font-bold">O Unificando não vende dados pessoais.</p>
        </>
      ),
    },
    {
      title: "9. Papel do Unificando no tratamento de dados",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Dependendo do cenário, o usuário atua como controlador dos dados de
            seus clientes;
          </li>
          <li>
            O Unificando atua como operador, seguindo as instruções do usuário.
          </li>
          <li className="font-bold mt-2 list-none">
            Cabe ao usuário garantir a base legal para os dados de terceiros
            tratados na plataforma.
          </li>
        </ul>
      ),
    },
    {
      title: "10. Uso de Inteligência Artificial",
      content:
        "A IA do Unificando apoia o atendimento humano, segue regras definidas pelo usuário e pode tratar texto e áudio, escalando para humano quando necessário. A IA não substitui atendentes, não toma decisões críticas sozinha e não atua fora das regras configuradas.",
    },
    {
      title: "11. Cookies e tecnologias similares",
      content:
        "Utilizamos cookies próprios e de terceiros para funcionamento básico, autenticação e segurança. Além disso, utilizamos ferramentas como Meta Pixel e Google Tag para análise de marketing e audiência. Você pode gerenciar suas preferências de cookies diretamente no seu navegador ou desativar o rastreamento de anúncios de terceiros em suas configurações de privacidade.",
    },
    {
      title: "12. Base legal do tratamento",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Execução de contrato;</li>
          <li>Cumprimento de obrigações legais;</li>
          <li>Legítimo interesse, quando aplicável;</li>
          <li>Consentimento, quando exigido.</li>
        </ul>
      ),
    },
    {
      title: "13. Direitos do titular de dados",
      content: (
        <>
          <p className="mb-4">O titular pode solicitar:</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Confirmação de tratamento e acesso aos dados;</li>
            <li>Correção de informações;</li>
            <li>Anonimização, bloqueio ou exclusão, quando aplicável;</li>
            <li>Portabilidade e informações sobre compartilhamento;</li>
            <li>Revogação de consentimento.</li>
          </ul>
          <p>
            Solicitações devem ser enviadas para{" "}
            <strong>contato@unificando.com.br</strong>.
          </p>
        </>
      ),
    },
    {
      title: "14. Segurança da informação",
      content:
        "Adotamos medidas técnicas e organizacionais para proteger os dados contra acesso não autorizado, vazamentos, perda ou uso indevido. Trabalhamos continuamente para manter padrões elevados de segurança.",
    },
    {
      title: "15. Retenção e exclusão de dados",
      content:
        "Os dados são armazenados pelo tempo necessário para execução do serviço, cumprimento de obrigações legais ou até solicitação de exclusão. Em caso de inadimplência superior a 30 dias, os dados poderão ser apagados conforme regras do serviço.",
    },
    {
      title: "16. Alterações nesta Política",
      content:
        "Esta Política pode ser atualizada a qualquer momento. A versão vigente estará sempre disponível nos canais oficiais do Unificando. O uso contínuo da plataforma indica concordância com a versão atualizada.",
    },
  ];

  return (
    <PageTransition>
      <SEO
        title="Política de Privacidade | Unificando"
        description="Termos de uso e práticas de privacidade e proteção de dados do ecossistema Unificando."
        canonical={ROUTES.PRIVACY}
      />

      <section className="py-20 md:py-32 bg-slate-50 min-h-screen">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tighter">
              Política de Privacidade
            </h1>
            <p className="text-slate-500 font-medium text-lg">
              Última atualização: {new Date().getFullYear()}
            </p>
          </div>

          <div className="space-y-12 bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-slate-100">
            {sections.map((section, index) => (
              <div key={index} className="scroll-mt-24" id={`section-${index}`}>
                <h2 className="text-xl font-black text-slate-800 mb-4 uppercase tracking-tight">
                  {section.title}
                </h2>
                <div className="text-slate-600 leading-relaxed font-medium">
                  {section.content}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center text-slate-500 text-sm font-medium">
            Dúvidas? Entre em contato pelo e-mail{" "}
            <a
              href="mailto:contato@unificando.com.br"
              className="text-indigo-600 hover:text-indigo-700 font-bold"
            >
              contato@unificando.com.br
            </a>
          </div>

          <div className="mt-8 text-center">
            <Link
              to={ROUTES.HOME}
              className="text-sm font-bold text-slate-400 hover:text-slate-600 transition-colors uppercase tracking-widest"
            >
              ← Voltar para o início
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
