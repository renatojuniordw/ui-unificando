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
        "Estes Termos regulam o uso da plataforma Unificando, um ecossistema de soluções para atendimento digital, automação responsável, uso de inteligência artificial aplicada e presença profissional na internet. Ao criar conta, contratar ou utilizar qualquer serviço, o usuário declara que leu, entendeu e concorda com estes Termos e com a Política de Privacidade.",
    },
    {
      title: "2. Aceitação dos Termos",
      content:
        "O uso do Unificando está condicionado à aceitação destes Termos. Caso o usuário não concorde, deve interromper imediatamente o uso da plataforma.",
    },
    {
      title: "3. O que o Unificando oferece",
      content: (
        <>
          <p className="mb-4">
            O Unificando oferece soluções modulares, contratadas de forma
            individual ou integrada, incluindo:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Painel de atendimento digital multicanal;</li>
            <li>Organização e histórico de conversas;</li>
            <li>Automações de processos;</li>
            <li>Uso de inteligência artificial no atendimento;</li>
            <li>Criação de landing pages e sites institucionais;</li>
            <li>Hospedagem de sites, conforme plano contratado.</li>
          </ul>
          <p className="mt-4 text-sm font-bold text-slate-500">
            As funcionalidades dependem do que foi contratado.
          </p>
        </>
      ),
    },
    {
      title: "4. Público-alvo e elegibilidade",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Pessoas jurídicas;</li>
          <li>Profissionais autônomos;</li>
          <li>
            Negócios que realizam atendimento ou vendas no ambiente digital.
          </li>
        </ul>
      ),
    },
    {
      title: "5. Criação de conta e acesso",
      content: (
        <>
          <p className="mb-4">Para utilizar a plataforma, o usuário deve:</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Fornecer informações verdadeiras e atualizadas;</li>
            <li>Manter a confidencialidade dos dados de acesso;</li>
            <li>
              Assumir responsabilidade por todas as ações realizadas na conta.
            </li>
          </ul>
          <p className="font-bold">
            O Unificando não se responsabiliza por acessos indevidos causados
            por negligência do usuário.
          </p>
        </>
      ),
    },
    {
      title: "6. Estrutura do atendimento e canais",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Cada canal conectado corresponde a uma caixa de entrada;</li>
          <li>
            O Unificando não fornece números de WhatsApp nem contas de redes
            sociais;
          </li>
          <li>
            O usuário utiliza seus próprios números e contas, autorizando
            conexões por meios oficiais.
          </li>
        </ul>
      ),
    },
    {
      title: "7. Inteligência Artificial (IA)",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>
            A IA atua como apoio ao atendimento humano, não como substituição;
          </li>
          <li>
            Pode responder mensagens iniciais, qualificar contatos, agendar
            atendimentos e escalar para humanos;
          </li>
          <li>Projetos com IA passam por diagnóstico antes da ativação;</li>
          <li>
            A IA segue regras definidas e não opera de forma autônoma
            irrestrita.
          </li>
        </ul>
      ),
    },
    {
      title: "8. Sites, hospedagem e domínio",
      content: (
        <>
          <p className="mb-4">
            O Unificando pode entregar landing pages e sites institucionais.
            Domínio e hospedagem estão incluídos apenas no primeiro ano,
            conforme contratado.
          </p>
          <p className="mb-2 font-bold">Após o primeiro ano:</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>
              Se não houver renovação em até 10 dias, o site pode sair do ar;
            </li>
            <li>
              Para manter hospedagem no Unificando, pode haver cobrança mensal
              específica.
            </li>
          </ul>
          <p>
            O site é de propriedade do cliente; a cobrança é apenas pela
            hospedagem.
          </p>
        </>
      ),
    },
    {
      title: "9. Cobrança, prazos e início do serviço",
      content: (
        <>
          <p className="mb-4">
            A cobrança é composta por setup único + mensalidade. O serviço
            inicia somente após:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Contrato assinado;</li>
            <li>Pagamento do setup.</li>
          </ul>
          <p>
            O prazo de entrega é de até 15 dias úteis, salvo exceções acordadas.
          </p>
        </>
      ),
    },
    {
      title: "10. Cancelamento e reembolso",
      content: (
        <>
          <p className="mb-4">
            O cancelamento pode ser feito a qualquer momento. Não existe
            fidelidade.
          </p>
          <p className="font-bold mb-2">Reembolso:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Integral se solicitado em até 7 dias úteis após a entrega;</li>
            <li>Após esse prazo, não há reembolso.</li>
          </ul>
        </>
      ),
    },
    {
      title: "11. Atraso no pagamento",
      content: (
        <ul className="list-disc pl-5 space-y-2">
          <li>Até 7 dias de atraso: acesso suspenso temporariamente;</li>
          <li>Após 30 dias de atraso: dados podem ser apagados;</li>
          <li>Retorno após 30 dias exige novo pagamento de setup.</li>
        </ul>
      ),
    },
    {
      title: "12. Responsabilidades do usuário",
      content: (
        <>
          <p className="mb-4">O usuário se compromete a:</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Usar a plataforma de forma lícita e ética;</li>
            <li>
              Garantir base legal para dados de terceiros inseridos no sistema;
            </li>
            <li>Não praticar atos ilegais, abusivos ou fraudulentos;</li>
            <li>Não tentar acessar áreas ou dados sem autorização.</li>
          </ul>
          <p className="font-bold text-red-500">
            Todo o conteúdo das mensagens, automações e atendimentos é
            responsabilidade do usuário.
          </p>
        </>
      ),
    },
    {
      title: "13. Limitação de responsabilidade",
      content: (
        <>
          <p className="mb-4">O Unificando não se responsabiliza por:</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>Resultados comerciais ou financeiros;</li>
            <li>Perdas por mau uso da plataforma;</li>
            <li>Falhas de serviços de terceiros;</li>
            <li>Conteúdos gerados ou enviados pelos usuários.</li>
          </ul>
          <p>O serviço é fornecido conforme disponibilidade técnica.</p>
        </>
      ),
    },
    {
      title: "14. Propriedade intelectual",
      content:
        "Todos os direitos sobre a plataforma, software, marca, identidade visual e materiais pertencem exclusivamente ao Unificando. É proibido uso não autorizado.",
    },
    {
      title: "15. Suspensão ou encerramento do acesso",
      content:
        "O Unificando pode suspender ou encerrar o acesso em caso de violação dos Termos, uso indevido, inadimplência ou risco à plataforma, a terceiros ou ao próprio serviço.",
    },
    {
      title: "16. Alterações dos Termos",
      content:
        "Os Termos podem ser alterados a qualquer momento. A versão vigente estará sempre disponível nos canais oficiais. O uso contínuo indica concordância com a versão atualizada.",
    },
    {
      title: "17. Legislação e foro",
      content:
        "Os Termos são regidos pelas leis brasileiras. Fica eleito o foro do domicílio do Unificando, salvo disposição legal em contrário.",
    },
    {
      title: "18. Contato oficial",
      content: (
        <p>
          Para dúvidas, suporte ou questões contratuais:{" "}
          <a
            href="mailto:contato@unificando.com.br"
            className="text-indigo-600 hover:text-indigo-700 font-bold"
          >
            contato@unificando.com.br
          </a>
        </p>
      ),
    },
  ];

  return (
    <PageTransition>
      <SEO
        title="Termos de Uso | Unificando"
        description="Regras, direitos e deveres para utilização da plataforma e ecossistema Unificando."
        canonical="/termos"
      />

      <section className="py-20 md:py-32 bg-slate-50 min-h-screen">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tighter">
              Termos de Uso
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
            Precisa de ajuda com o contrato?
            <br />
            <a
              href="mailto:contato@unificando.com.br"
              className="text-indigo-600 hover:text-indigo-700 font-bold"
            >
              Fale com o Jurídico
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
