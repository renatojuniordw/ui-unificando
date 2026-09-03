import React from "react";
import { useLocation } from "react-router-dom";
import { NavItem, LayoutProps } from "../../types/layout";
import { ROUTES } from "../../routes";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppFloating } from "../common/WhatsAppFloating";

const navItems: NavItem[] = [
  { label: "Início", path: ROUTES.HOME },
  { label: "Laboratório", path: ROUTES.LAB },
  { label: "Método", path: ROUTES.HOW_IT_WORKS },
  { label: "Sobre", path: ROUTES.ABOUT },
];

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isLinksPage = location.pathname === ROUTES.LINKS;
  const shouldHideLayout = isLinksPage;

  return (
    <div className="min-h-screen flex flex-col selection:bg-indigo-100 selection:text-indigo-900">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-slate-950 focus:px-6 focus:py-3 focus:border-4 focus:border-slate-950 focus:font-black focus:uppercase focus:text-sm"
      >
        PULAR PARA O CONTEÚDO
      </a>

      {!shouldHideLayout && <Header navItems={navItems} />}

      <main id="main-content" className={`flex-grow ${!shouldHideLayout ? "pt-20" : ""}`}>
        {children}
      </main>

      {!shouldHideLayout && <Footer />}
      {!shouldHideLayout && <WhatsAppFloating />}
    </div>
  );
};
