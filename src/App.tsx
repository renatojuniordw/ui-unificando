import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Layout } from './components/Layout';
import { About } from './pages/About';
import { Automation } from './pages/Automation';
import { Contact } from './pages/Contact';
import { CustomerService } from './pages/CustomerService';
import { DigitalPresence } from './pages/DigitalPresence';
import { Home } from './pages/Home';
import { HowItWorks } from './pages/HowItWorks';
import { Plans } from './pages/Plans';
import { Solutions } from './pages/Solutions';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home: return <Home onNavigate={setCurrentPage} />;
      case Page.CustomerService: return <CustomerService onNavigate={setCurrentPage} />;
      case Page.Automation: return <Automation onNavigate={setCurrentPage} />;
      case Page.DigitalPresence: return <DigitalPresence onNavigate={setCurrentPage} />;
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
