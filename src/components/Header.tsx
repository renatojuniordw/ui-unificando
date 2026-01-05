import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Page, NavItem } from '../types';
import { ROUTES } from '../routes';

interface HeaderProps {
    currentPage: Page;
    navItems: NavItem[];
    solutionItems: { label: string; page: Page; desc: string }[];
}

export const Header: React.FC<HeaderProps> = ({ currentPage, navItems, solutionItems }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
    const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsSolutionsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const closeMenu = () => {
        setIsMenuOpen(false);
        setIsSolutionsOpen(false);
        setIsMobileSolutionsOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-slate-200 z-50">
            <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
                <Link
                    to="/"
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={closeMenu}
                >
                    <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
                        <span className="text-white font-black text-xl">U</span>
                    </div>
                    <span className="text-xl font-black tracking-tighter text-slate-900 uppercase">Unificando</span>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    <Link
                        to={ROUTES[Page.Home]}
                        className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${currentPage === Page.Home ? 'text-indigo-600' : 'text-slate-500 hover:text-indigo-600'}`}
                    >
                        Início
                    </Link>

                    <div
                        className="relative"
                        ref={dropdownRef}
                        onMouseEnter={() => setIsSolutionsOpen(true)}
                        onMouseLeave={() => setIsSolutionsOpen(false)}
                    >
                        <button
                            className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors flex items-center gap-1 py-4 ${[Page.Solutions, Page.CustomerService, Page.Automation, Page.DigitalPresence].includes(currentPage)
                                ? 'text-indigo-600' : 'text-slate-500 hover:text-indigo-600'
                                }`}
                        >
                            Soluções
                            <svg xmlns="http://www.w3.org/2000/svg" className={`h-3 w-3 transition-transform ${isSolutionsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {isSolutionsOpen && (
                            <div className="absolute top-full left-0 w-64 bg-white border border-slate-100 rounded-[1.5rem] shadow-2xl p-2 animate-in fade-in slide-in-from-top-2 duration-200">
                                <Link
                                    to={ROUTES[Page.Solutions]}
                                    onClick={closeMenu}
                                    className="w-full text-left p-3 hover:bg-slate-50 rounded-xl transition-colors mb-1 group block"
                                >
                                    <span className="block text-xs font-black text-slate-900 uppercase tracking-tight group-hover:text-indigo-600">Ver Todas</span>
                                    <span className="block text-[10px] text-slate-400 font-bold">Ecossistema completo</span>
                                </Link>
                                <div className="h-px bg-slate-100 my-1 mx-2" />
                                {solutionItems.map((item) => (
                                    <Link
                                        key={item.page}
                                        to={ROUTES[item.page]}
                                        onClick={closeMenu}
                                        className="w-full text-left p-3 hover:bg-slate-50 rounded-xl transition-colors group block"
                                    >
                                        <span className="block text-xs font-black text-slate-900 uppercase tracking-tight group-hover:text-indigo-600">{item.label}</span>
                                        <span className="block text-[10px] text-slate-400 font-bold">{item.desc}</span>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {navItems.filter(i => i.page !== Page.Home).map((item) => (
                        <Link
                            key={item.page}
                            to={ROUTES[item.page]}
                            className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${currentPage === item.page ? 'text-indigo-600' : 'text-slate-500 hover:text-indigo-600'}`}
                        >
                            {item.label}
                        </Link>
                    ))}

                    <Link
                        to={ROUTES[Page.Contact]}
                        className="bg-slate-900 text-white px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-slate-800 transition-all"
                    >
                        Falar com Especialista
                    </Link>
                </nav>

                <button
                    className="md:hidden text-slate-900"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>
            </div>

            {/* Mobile Nav */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-b border-slate-200 py-6 px-4 flex flex-col gap-2">
                    <Link to={ROUTES[Page.Home]} onClick={closeMenu} className="text-left text-slate-900 text-[10px] font-black uppercase tracking-[0.2em] py-3 border-b border-slate-50">Início</Link>
                    <button onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)} className="w-full flex justify-between items-center text-left text-slate-900 text-[10px] font-black uppercase tracking-[0.2em] py-3 border-b border-slate-50">
                        Soluções
                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${isMobileSolutionsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    {isMobileSolutionsOpen && (
                        <div className="bg-slate-50 rounded-xl px-4 py-2 flex flex-col gap-4 my-2">
                            <Link to={ROUTES[Page.Solutions]} onClick={closeMenu} className="text-left py-1 text-[10px] font-bold uppercase text-slate-500">Ver Todas</Link>
                            {solutionItems.map((item) => (
                                <Link key={item.page} to={ROUTES[item.page]} onClick={closeMenu} className="text-left py-1 text-[10px] font-bold uppercase text-slate-500">{item.label}</Link>
                            ))}
                        </div>
                    )}
                    {navItems.filter(i => i.page !== Page.Home).map((item) => (
                        <Link key={item.page} to={ROUTES[item.page]} onClick={closeMenu} className="text-left text-slate-900 text-[10px] font-black uppercase tracking-[0.2em] py-3 border-b border-slate-50">{item.label}</Link>
                    ))}
                    <Link to={ROUTES[Page.Contact]} onClick={closeMenu} className="bg-indigo-600 text-white w-full py-4 rounded-xl font-black uppercase tracking-[0.2em] text-[10px] mt-4 text-center">Falar com Especialista</Link>
                </div>
            )}
        </header>
    );
};
