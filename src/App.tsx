import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { AppRouter } from './router';

const App: React.FC = () => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Layout>
      <AppRouter />
    </Layout>
  );
};

export default App;
