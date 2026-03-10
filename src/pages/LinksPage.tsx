import React from "react";
import { motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { SEO } from "../components/common/SEO";
import { ROUTES } from "../routes";
import LogoUnificando from "../assets/img/LOGO_UNIFICANDO.svg";
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
        title="Links | Unificando - Soluções Digitais"
        description="Acesse nossos canais oficiais: WhatsApp, Site e Redes Sociais. Unifique sua presença digital."
        canonical={ROUTES.LINKS}
        robots="noindex, follow"
      />

      {/* Background with animated gradient mesh - LIGHT THEME */}
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center relative overflow-hidden px-6 py-12 selection:bg-indigo-100 selection:text-indigo-900">
        {/* Ambient Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-200/40 rounded-full blur-[120px] animate-pulse-slow"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-200/40 rounded-full blur-[120px] animate-pulse-slow delay-700"></div>
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
                className="h-12 w-auto mx-auto"
              />
            </div>

            <h1 className="text-2xl font-black text-slate-900 tracking-tight">
              Unifique sua Presença Digital
            </h1>
            <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-[280px] mx-auto">
              Estratégias de Atendimento, Inteligência Artificial e
              Desenvolvimento Web para escalar seu negócio.
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
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
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
                  Conheça Nossas Soluções
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
            className="mt-8 text-center text-slate-400 text-[10px] font-bold uppercase tracking-widest"
          >
            <p>© {new Date().getFullYear()} Unificando</p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};
