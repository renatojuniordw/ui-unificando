
import React from 'react';
import { NavItem } from '../../types';
import { ROUTES } from '../../routes';
import { Header } from './Header';
import { Footer } from './Footer';

const navItems: NavItem[] = [
  { label: 'Início', path: ROUTES.HOME },
  { label: 'Como Funciona', path: ROUTES.HOW_IT_WORKS },
  { label: 'Planos', path: ROUTES.PLANS },
  { label: 'Sobre', path: ROUTES.ABOUT },
];

const solutionItems = [
  { label: 'Atendimento', path: ROUTES.CUSTOMER_SERVICE, desc: 'Plataforma de Crescimento' },
  { label: 'Produtividade', path: ROUTES.PRODUCTIVITY, desc: 'IA para negócios' },
  { label: 'Presença Digital', path: ROUTES.DIGITAL_PRESENCE, desc: 'Presença Digital & Autoridade' },
];

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-indigo-100 selection:text-indigo-900">
      <Header
        navItems={navItems}
        solutionItems={solutionItems}
      />

      <main className="flex-grow pt-20">
        {children}
      </main>

      <Footer />
    </div>
  );
};
