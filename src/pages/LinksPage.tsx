import React from "react";
import { motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { SEO } from "../components/common/SEO";
import { ROUTES } from "../routes";
import LogoUnificando from "../assets/img/LOGO_UNIFICANDO.svg";
import { WhatsAppIcon } from "../components/common/icons/WhatsAppIcon";
import { CONTACT_INFO, SOCIAL_LINKS } from "../constants/social";
import { trackCtaClick } from "../utils/analytics";

export const LinksPage: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <>
      <SEO
        title="Links | Unificando — Laboratório de Projetos Autorais & IA"
        description="Acesse nossos canais oficiais: WhatsApp, Site e Redes Sociais. Conheça os projetos do laboratório."
        canonical={ROUTES.LINKS}
        robots="noindex, follow"
      />

      {/* Background with animated gradient mesh - LIGHT THEME */}
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center relative overflow-hidden px-6 py-12 selection:bg-indigo-100 selection:text-indigo-900">
        {/* Ambient Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-200/40 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-200/40 rounded-full blur-[120px] animate-pulse delay-700"></div>
          <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 w-[60%] h-[60%] bg-indigo-100/40 rounded-full blur-[100px]"></div>
        </div>

        {/* Main Content Container */}
        <motion.div
          className="w-full max-w-md relative z-10 flex flex-col items-center gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Logo & Bio - CLEAN LOOK */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <div className="mb-2">
              <img
                src={LogoUnificando}
                alt="Unificando Logo"
                width={100}
                height={24}
                className="h-12 w-auto mx-auto"
              />
            </div>

            <h1 className="text-2xl font-black text-slate-900 tracking-tight">
              Unificando • Laboratório
            </h1>
            <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-[280px] mx-auto">
              Projetos autorais, ferramentas utilitárias e sistemas com
              Inteligência Artificial — da ideia ao deploy.
            </p>
          </motion.div>

          {/* Links Grid */}
          <motion.div variants={itemVariants} className="w-full space-y-4">
            {/* WhatsApp - VIBRANT ICON */}
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackCtaClick({
                  label: "Falar no WhatsApp",
                  location: "links_whatsapp",
                  to: "external_whatsapp",
                })
              }
              className="group w-full flex items-center p-2 rounded-2xl bg-white border border-slate-200 hover:border-emerald-500/50 shadow-lg shadow-slate-200/50 hover:shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-12 w-12 flex items-center justify-center bg-[#25D366] rounded-xl text-white shadow-md shadow-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
                <WhatsAppIcon className="w-6 h-6 fill-current" />
              </div>
              <div className="flex-1 px-4 text-center pr-12">
                <span className="block text-slate-900 font-bold text-sm tracking-wide uppercase group-hover:text-emerald-600 transition-colors">
                  Falar no WhatsApp
                </span>
                <span className="block text-slate-500 text-[10px] font-medium mt-0.5">
                  Atendimento Rápido
                </span>
              </div>
            </a>

            {/* Website - VIBRANT ICON */}
            <Link
              to={ROUTES.HOME}
              onClick={() =>
                trackCtaClick({
                  label: "Visitar Site Oficial",
                  location: "links_site",
                  to: ROUTES.HOME,
                })
              }
              className="group w-full flex items-center p-2 rounded-2xl bg-white border border-slate-200 hover:border-indigo-500/50 shadow-lg shadow-slate-200/50 hover:shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-12 w-12 flex items-center justify-center bg-indigo-600 rounded-xl text-white shadow-md shadow-indigo-500/20 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-6 h-6 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <div className="flex-1 px-4 text-center pr-12">
                <span className="block text-slate-900 font-bold text-sm tracking-wide uppercase group-hover:text-indigo-600 transition-colors">
                  Visitar Site Oficial
                </span>
                <span className="block text-slate-500 text-[10px] font-medium mt-0.5">
                  Conheça os Projetos
                </span>
              </div>
            </Link>

            {/* Instagram - VIBRANT ICON */}
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackCtaClick({
                  label: "Instagram",
                  location: "links_instagram",
                  to: "external_instagram",
                })
              }
              className="group w-full flex items-center p-2 rounded-2xl bg-white border border-slate-200 hover:border-pink-500/50 shadow-lg shadow-slate-200/50 hover:shadow-pink-500/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-12 w-12 flex items-center justify-center bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] rounded-xl text-white shadow-md shadow-pink-500/20 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-6 h-6 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              <div className="flex-1 px-4 text-center pr-12">
                <span className="block text-slate-900 font-bold text-sm tracking-wide uppercase group-hover:text-pink-600 transition-colors">
                  Instagram
                </span>
                <span className="block text-slate-500 text-[10px] font-medium mt-0.5">
                  Acompanhe Novidades
                </span>
              </div>
            </a>
          </motion.div>

          {/* Footer - LIGHT THEME */}
          <motion.div
            variants={itemVariants}
            className="mt-8 text-center text-slate-500 text-[10px] font-bold uppercase tracking-widest"
          >
            <p>© {new Date().getFullYear()} Unificando</p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};
