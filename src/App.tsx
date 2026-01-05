
import React, { useState, useEffect } from 'react';
import { Page } from './types';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Solutions } from './pages/Solutions';
import { Atendimento } from './pages/Atendimento';
import { Automacao } from './pages/Automacao';
import { Digital } from './pages/Digital';
import { HowItWorks } from './pages/HowItWorks';
import { Plans } from './pages/Plans';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home: return <Home onNavigate={setCurrentPage} />;
      case Page.Atendimento: return <Atendimento onNavigate={setCurrentPage} />;
      case Page.Automacao: return <Automacao onNavigate={setCurrentPage} />;
      case Page.Digital: return <Digital onNavigate={setCurrentPage} />;
      case Page.Solutions: return <Solutions onNavigate={setCurrentPage} currentPage={currentPage} />;
      case Page.HowItWorks: return <HowItWorks onNavigate={setCurrentPage} />;
      case Page.Plans: return <Plans onNavigate={setCurrentPage} />;
      case Page.About: return <About />;
      case Page.Contact: return <Contact />;
      default: return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <Layout currentPage={currentPage} onNavigate={setCurrentPage}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
};

export default App;
