import React, { Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { LoadingFallback } from "../components/common/LoadingFallback";
import { ROUTES } from "../routes";
import { Home } from "../pages/Home";

// Lazy load pages for code splitting
const Services = React.lazy(() =>
  import("../pages/services/Services").then((module) => ({
    default: module.Solutions,
  })),
);
const HowItWorks = React.lazy(() =>
  import("../pages/HowItWorks").then((module) => ({
    default: module.HowItWorks,
  })),
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
const PrivacyPolicy = React.lazy(() =>
  import("../pages/PrivacyPolicy").then((module) => ({
    default: module.PrivacyPolicy,
  })),
);
const TermsOfService = React.lazy(() =>
  import("../pages/TermsOfService").then((module) => ({
    default: module.TermsOfService,
  })),
);
const LinksPage = React.lazy(() =>
  import("../pages/LinksPage").then((module) => ({
    default: module.LinksPage,
  })),
);
const LawLanding = React.lazy(() =>
  import("../pages/landings/LawLanding").then((module) => ({
    default: module.LawLanding,
  })),
);
export const AppRouter: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<LoadingFallback />}>
        <Routes location={location} key={location.pathname}>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.SERVICES} element={<Services />} />
          <Route path={ROUTES.HOW_IT_WORKS} element={<HowItWorks />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          <Route path={ROUTES.CONTRACT} element={<ContractGenerator />} />
          <Route path={ROUTES.PRIVACY} element={<PrivacyPolicy />} />
          <Route path={ROUTES.TERMS} element={<TermsOfService />} />
          <Route path={ROUTES.LINKS} element={<LinksPage />} />
          <Route path={ROUTES.FOR_LAWYERS} element={<LawLanding />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};
