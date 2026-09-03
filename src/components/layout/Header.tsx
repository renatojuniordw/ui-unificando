import React from "react";
import { Link, useLocation } from "react-router-dom";
import { NavItem } from "../../types";
import LogoUnificando from "../../assets/img/LOGO_UNIFICANDO.svg";
import { useHeaderMenu } from "../../hooks/useHeaderMenu";

interface HeaderProps {
  navItems: NavItem[];
}

export const Header: React.FC<HeaderProps> = React.memo(({ navItems }) => {
  const { pathname } = useLocation();

  const { isMenuOpen, toggleMenu, closeMenu, closeAll } = useHeaderMenu();

  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-950 border-b-4 border-[#ccff00] z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 cursor-pointer bg-[#ccff00] p-2 border-2 border-slate-950 shadow-[4px_4px_0px_#fff] hover:-translate-y-1 hover:shadow-[6px_6px_0px_#fff] transition-all"
          onClick={closeAll}
        >
          <img
            src={LogoUnificando}
            alt="Unificando"
            width={100}
            height={24}
            className="h-6 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-xs font-black uppercase tracking-widest transition-colors hover:bg-[#ccff00] hover:text-slate-950 py-2 px-3 border-2 border-transparent hover:border-[#ccff00] ${pathname === item.path ? "bg-[#ccff00] text-slate-950 border-[#ccff00]" : "text-white"}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
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
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={closeMenu}
              className="text-left text-[#ccff00] text-2xl font-black uppercase tracking-tighter py-6 border-b-2 border-slate-800 hover:bg-slate-900 px-2"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
});