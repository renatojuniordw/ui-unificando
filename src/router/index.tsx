import React, { Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { LoadingFallback } from "../components/common/LoadingFallback";
import { ROUTES } from "../routes";

// Lazy load pages for code splitting
const Home = React.lazy(() =>
  import("../pages/Home").then((module) => ({ default: module.Home })),
);
const CustomerService = React.lazy(() =>
  import("../pages/CustomerService").then((module) => ({
    default: module.CustomerService,
  })),
);
const Productivity = React.lazy(() =>
  import("../pages/Productivity").then((module) => ({
    default: module.Productivity,
  })),
);
const DigitalPresence = React.lazy(() =>
  import("../pages/DigitalPresence").then((module) => ({
    default: module.DigitalPresence,
  })),
);
const Solutions = React.lazy(() =>
  import("../pages/Solutions").then((module) => ({
    default: module.Solutions,
  })),
);
const HowItWorks = React.lazy(() =>
  import("../pages/HowItWorks").then((module) => ({
    default: module.HowItWorks,
  })),
);
const Plans = React.lazy(() =>
  import("../pages/Plans").then((module) => ({ default: module.Plans })),
);
const About = React.lazy(() =>
  import("../pages/About").then((module) => ({ default: module.About })),
);
const Contact = React.lazy(() =>
  import("../pages/Contact").then((module) => ({ default: module.Contact })),
);
const ContractGenerator = React.lazy(() =>
  import("../pages/ContractGenerator").then((module) => ({
    default: module.ContractGenerator,
  })),
);
const NotFound = React.lazy(() =>
  import("../pages/NotFound").then((module) => ({ default: module.NotFound })),
);

export const AppRouter: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<LoadingFallback />}>
        <Routes location={location} key={location.pathname}>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.CUSTOMER_SERVICE} element={<CustomerService />} />
          <Route path={ROUTES.PRODUCTIVITY} element={<Productivity />} />
          <Route path={ROUTES.DIGITAL_PRESENCE} element={<DigitalPresence />} />
          <Route path={ROUTES.SOLUTIONS} element={<Solutions />} />
          <Route path={ROUTES.HOW_IT_WORKS} element={<HowItWorks />} />
          <Route path={ROUTES.PLANS} element={<Plans />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          <Route path={ROUTES.CONTRACT} element={<ContractGenerator />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};
