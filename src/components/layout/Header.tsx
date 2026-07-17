import React from "react";
import { Link, useLocation } from "react-router-dom";
import { NavItem } from "../../types";
import { ROUTES } from "../../routes";
import { CTA } from "../../constants/cta";
import LogoUnificando from "../../assets/img/LOGO_UNIFICANDO.svg";
import { useHeaderMenu } from "../../hooks/useHeaderMenu";
import { trackCtaClick } from "../../utils/analytics";

interface HeaderProps {
  navItems: NavItem[];
  solutionItems: { label: string; path: string; desc: string }[];
}

export const Header: React.FC<HeaderProps> = ({ navItems, solutionItems }) => {
  const { pathname } = useLocation();

  const {
    isMenuOpen,
    isSolutionsOpen,
    isMobileSolutionsOpen,
    dropdownRef,
    toggleMenu,
    toggleSolutions,
    toggleMobileSolutions,
    closeMenu,
    openSolutions,
    closeSolutions,
    closeAll,
    cancelClose,
  } = useHeaderMenu();

  const isServicesActive = (
    [
      ROUTES.SERVICES,
    ] as string[]
  ).includes(pathname);

  const handleCtaClick = () => {
    trackCtaClick({
      label: CTA.primary.label,
      location: "header_primary",
      to: CTA.primary.to,
    });
    window.open(CTA.primary.to as string, "_blank", "noopener,noreferrer");
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-950 border-b-4 border-[#ccff00] z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 cursor-pointer bg-[#ccff00] p-2 border-2 border-slate-950 shadow-[4px_4px_0px_#fff] hover:-translate-y-1 hover:shadow-[6px_6px_0px_#fff] transition-all"
          onClick={closeAll}
        >
          <img src={LogoUnificando} alt="Unificando" className="h-6 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          <Link
            to={ROUTES.HOME}
            className={`text-xs font-black uppercase tracking-widest transition-colors hover:bg-[#ccff00] hover:text-slate-950 py-2 px-3 border-2 border-transparent hover:border-[#ccff00] ${pathname === ROUTES.HOME ? "bg-[#ccff00] text-slate-950 border-[#ccff00]" : "text-white"}`}
          >
            INÍCIO
          </Link>

          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={openSolutions}
            onMouseLeave={closeSolutions}
          >
            <button
              onClick={toggleSolutions}
              aria-expanded={isSolutionsOpen}
              aria-haspopup="true"
              className={`text-xs font-black uppercase tracking-widest transition-colors flex items-center gap-2 py-2 px-3 border-2 border-transparent hover:bg-[#ccff00] hover:text-slate-950 hover:border-[#ccff00] ${isServicesActive
                  ? "bg-[#ccff00] text-slate-950 border-[#ccff00]"
                  : "text-white"
                }`}
            >
              SOLUÇÕES
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 transition-transform ${isSolutionsOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={3} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isSolutionsOpen && (
              <div
                className="absolute top-full left-0 mt-4 w-72 bg-white border-4 border-slate-950 shadow-[8px_8px_0px_#ccff00] p-4 animate-in fade-in slide-in-from-top-2 duration-200"
                onMouseEnter={cancelClose}
                onMouseLeave={closeSolutions}
              >
                <Link
                  to={ROUTES.SERVICES}
                  onClick={closeAll}
                  className="w-full text-left p-4 bg-slate-950 text-white hover:bg-[#ccff00] hover:text-slate-950 transition-colors mb-4 block border-2 border-slate-950 shadow-[4px_4px_0px_#000] group"
                >
                  <span className="block text-sm font-black uppercase tracking-widest">
                    VISÃO GERAL
                  </span>
                  <span className="block text-[10px] font-mono font-bold mt-1 opacity-80 uppercase">
                    O ECOSSISTEMA COMPLETO
                  </span>
                </Link>
                {solutionItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={closeAll}
                    className="w-full text-left p-3 hover:bg-slate-100 text-slate-950 transition-colors block border-b-2 border-slate-200 last:border-b-0 group"
                  >
                    <span className="block text-xs font-black uppercase tracking-widest group-hover:text-indigo-600">
                      {item.label}
                    </span>
                    <span className="block text-[10px] font-mono font-bold mt-1 text-slate-500 uppercase">
                      {item.desc}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navItems
            .filter((navItem) => navItem.path !== ROUTES.HOME)
            .map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-xs font-black uppercase tracking-widest transition-colors hover:bg-[#ccff00] hover:text-slate-950 py-2 px-3 border-2 border-transparent hover:border-[#ccff00] ${pathname === item.path ? "bg-[#ccff00] text-slate-950 border-[#ccff00]" : "text-white"}`}
              >
                {item.label}
              </Link>
            ))}

          <button
            onClick={handleCtaClick}
            className="bg-[#ccff00] ml-4 text-slate-950 px-6 py-3 text-xs font-black uppercase tracking-widest hover:bg-white transition-all border-4 border-[#ccff00] shadow-[4px_4px_0px_#fff] hover:-translate-y-1 hover:shadow-[6px_6px_0px_#fff]"
          >
            CONSULTORIA
          </button>
        </nav>

         <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={handleCtaClick}
            className="bg-[#ccff00] text-slate-950 px-3 py-1.5 text-[10px] font-black uppercase tracking-widest border-2 border-slate-950 shadow-[2px_2px_0px_#fff] active:translate-y-0.5 active:shadow-none transition-all"
          >
            Falar
          </button>
          <button
            className="text-white bg-slate-900 border-2 border-slate-800 p-2 hover:bg-[#ccff00] hover:text-slate-950 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="square"
                strokeLinejoin="miter"
                strokeWidth={3}
                d={
                  isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>


      {/* Mobile Nav */}
      <div className={`fixed inset-0 top-20 bg-slate-950 z-40 lg:hidden overflow-y-auto transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col p-6 min-h-full pb-24">
          <Link
            to={ROUTES.HOME}
            onClick={closeMenu}
            className="text-left text-[#ccff00] text-2xl font-black uppercase tracking-tighter py-6 border-b-2 border-slate-800 hover:bg-slate-900 px-2"
          >
            INÍCIO
          </Link>
          <button
            onClick={toggleMobileSolutions}
            className="w-full flex justify-between items-center text-left text-[#ccff00] text-2xl font-black uppercase tracking-tighter py-6 border-b-2 border-slate-800 hover:bg-slate-900 px-2"
          >
            SOLUÇÕES
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 transition-transform ${isMobileSolutionsOpen ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={3} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          <div className={`overflow-hidden transition-all duration-300 ${isMobileSolutionsOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
            <div className="bg-slate-900 p-4 flex flex-col gap-4 border-l-4 border-[#ccff00] mt-2 mb-4 ml-2">
              <Link
                to={ROUTES.SERVICES}
                onClick={closeMenu}
                className="text-left text-sm font-black uppercase text-white bg-slate-950 border-2 border-[#ccff00] p-3 inline-block shadow-[4px_4px_0px_#ccff00]"
              >
                VISÃO GERAL
              </Link>
              {solutionItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className="text-left text-sm font-bold uppercase text-slate-300 hover:text-[#ccff00] tracking-widest block pt-2 border-t border-slate-800"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {navItems
            .filter((navItem) => navItem.path !== ROUTES.HOME)
            .map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className="text-left text-[#ccff00] text-2xl font-black uppercase tracking-tighter py-6 border-b-2 border-slate-800 hover:bg-slate-900 px-2"
              >
                {item.label}
              </Link>
            ))}
            
          <button
            onClick={handleCtaClick}
            className="bg-[#ccff00] text-slate-950 w-full py-6 font-black uppercase tracking-tighter text-xl mt-8 border-4 border-transparent text-center hover:bg-white transition-all shadow-[8px_8px_0px_#fff]"
          >
            CONSULTORIA
          </button>
        </div>
      </div>
    </header>
  );
};
