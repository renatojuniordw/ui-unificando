import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Layout } from './components/Layout';
import { About } from './pages/About';
import { Productivity } from './pages/Productivity';
import { Contact } from './pages/Contact';
import { CustomerService } from './pages/CustomerService';
import { DigitalPresence } from './pages/DigitalPresence';
import { Home } from './pages/Home';
import { HowItWorks } from './pages/HowItWorks';
import { Plans } from './pages/Plans';
import { Solutions } from './pages/Solutions';
import { Page } from './types';

/* Routing & Adapter Logic */
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

// Map Page enum to Paths
const pageRoutes: Record<Page, string> = {
  [Page.Home]: '/',
  [Page.CustomerService]: '/atendimento',
  [Page.Productivity]: '/produtividade',
  [Page.DigitalPresence]: '/presenca-digital',
  [Page.Solutions]: '/solucoes',
  [Page.HowItWorks]: '/como-funciona',
  [Page.Plans]: '/planos',
  [Page.About]: '/sobre',
  [Page.Contact]: '/contato'
};

const App: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Adapter for existing components requesting onNavigate
  const handleNavigate = (page: Page) => {
    const path = pageRoutes[page];
    if (path) navigate(path);
  };

  // Determine currentPage for Layout based on path (Reverse Mapping)
  const getCurrentPage = (): Page => {
    const entry = Object.entries(pageRoutes).find(([_, path]) => path === location.pathname);
    return entry ? (entry[0] as Page) : Page.Home;
  };

  const currentPage = getCurrentPage();

  return (
    <Layout currentPage={currentPage} onNavigate={handleNavigate}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home onNavigate={handleNavigate} />} />
          <Route path="/atendimento" element={<CustomerService onNavigate={handleNavigate} />} />
          <Route path="/produtividade" element={<Productivity onNavigate={handleNavigate} />} />
          <Route path="/presenca-digital" element={<DigitalPresence onNavigate={handleNavigate} />} />
          <Route path="/solucoes" element={<Solutions onNavigate={handleNavigate} currentPage={currentPage} />} />
          <Route path="/como-funciona" element={<HowItWorks onNavigate={handleNavigate} />} />
          <Route path="/planos" element={<Plans onNavigate={handleNavigate} />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="*" element={<Home onNavigate={handleNavigate} />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
};

export default App;
