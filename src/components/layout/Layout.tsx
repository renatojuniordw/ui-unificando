import React from "react";
import { useLocation } from "react-router-dom";
import { NavItem, LayoutProps } from "../../types/layout";
import { ROUTES } from "../../routes";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppFloating } from "../common/WhatsAppFloating";

const navItems: NavItem[] = [
  { label: "Início", path: ROUTES.HOME },
  { label: "Como Funciona", path: ROUTES.HOW_IT_WORKS },
  { label: "Planos", path: ROUTES.PLANS },
  { label: "Sobre", path: ROUTES.ABOUT },
];

const solutionItems = [
  {
    label: "Atendimento Unificado",
    path: ROUTES.CUSTOMER_SERVICE,
    desc: "Plataforma de Crescimento",
  },
  {
    label: "IA no Atendimento",
    path: ROUTES.PRODUCTIVITY,
    desc: "IA para negócios",
  },
  {
    label: "Sites & Presença Online",
    path: ROUTES.DIGITAL_PRESENCE,
    desc: "Presença Digital & Autoridade",
  },
];

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isContractPage = location.pathname === ROUTES.CONTRACT;
  const isLinksPage = location.pathname === ROUTES.LINKS;
  const shouldHideLayout = isContractPage || isLinksPage;

  return (
    <div className="min-h-screen flex flex-col selection:bg-indigo-100 selection:text-indigo-900">
      {!shouldHideLayout && (
        <Header navItems={navItems} solutionItems={solutionItems} />
      )}

      <main className={`flex-grow ${!shouldHideLayout ? "pt-20" : ""}`}>
        {children}
      </main>

      {!shouldHideLayout && <Footer />}
      {!shouldHideLayout && <WhatsAppFloating />}
      {/* <ChatwootWidget /> */}
    </div>
  );
};
