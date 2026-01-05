
import React from 'react';
import { Page, NavItem } from '../types';
import { Header } from './Header';
import { Footer } from './Footer';

const navItems: NavItem[] = [
  { label: 'Início', page: Page.Home },
  { label: 'Como Funciona', page: Page.HowItWorks },
  { label: 'Planos', page: Page.Plans },
  { label: 'Sobre', page: Page.About },
];

const solutionItems = [
  { label: 'Atendimento', page: Page.Atendimento, desc: 'Fase 01 - Organização' },
  { label: 'Automação', page: Page.Automacao, desc: 'Fase 02 - Evolução' },
  { label: 'Presença Digital', page: Page.Digital, desc: 'Fase 03 - Autoridade' },
];

interface LayoutProps {
  children: React.ReactNode;
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentPage, onNavigate }) => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-indigo-100 selection:text-indigo-900">
      <Header
        currentPage={currentPage}
        onNavigate={onNavigate}
        navItems={navItems}
        solutionItems={solutionItems}
      />

      <main className="flex-grow pt-20">
        {children}
      </main>

      <Footer onNavigate={onNavigate} />
    </div>
  );
};
