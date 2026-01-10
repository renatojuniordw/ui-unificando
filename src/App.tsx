import React, { useState, useEffect, Suspense } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Layout } from './components/Layout';
import { Routes, Route, useLocation } from 'react-router-dom';

// Lazy load pages for code splitting
const Home = React.lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const CustomerService = React.lazy(() => import('./pages/CustomerService').then(module => ({ default: module.CustomerService })));
const Productivity = React.lazy(() => import('./pages/Productivity').then(module => ({ default: module.Productivity })));
const DigitalPresence = React.lazy(() => import('./pages/DigitalPresence').then(module => ({ default: module.DigitalPresence })));
const Solutions = React.lazy(() => import('./pages/Solutions').then(module => ({ default: module.Solutions })));
const HowItWorks = React.lazy(() => import('./pages/HowItWorks').then(module => ({ default: module.HowItWorks })));
const Plans = React.lazy(() => import('./pages/Plans').then(module => ({ default: module.Plans })));
const About = React.lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const Contact = React.lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));

const LoadingFallback: React.FC = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
  </div>
);

const App: React.FC = () => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Suspense fallback={<LoadingFallback />}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/atendimento" element={<CustomerService />} />
            <Route path="/produtividade" element={<Productivity />} />
            <Route path="/presenca-digital" element={<DigitalPresence />} />
            <Route path="/solucoes" element={<Solutions />} />
            <Route path="/como-funciona" element={<HowItWorks />} />
            <Route path="/planos" element={<Plans />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </Layout>
  );
};

export default App;
