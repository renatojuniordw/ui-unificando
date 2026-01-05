import React from 'react';
import { Link } from 'react-router-dom';
import { Page } from '../types';
import { ROUTES } from '../routes';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-900 text-slate-400 py-24">
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-16">
                <div className="col-span-1 md:col-span-2 text-left">
                    <div className="flex items-center gap-2 mb-8">
                        <div className="w-10 h-10 bg-indigo-500 rounded-2xl flex items-center justify-center">
                            <span className="text-white font-black text-2xl">U</span>
                        </div>
                        <span className="text-2xl font-black tracking-tighter text-white uppercase">Unificando</span>
                    </div>
                    <p className="max-w-xs mb-8 text-sm leading-relaxed font-medium">
                        O ecossistema definitivo para negócios que buscam maturidade, autoridade e organização no ambiente digital.
                    </p>
                </div>
                <div className="text-left">
                    <h4 className="text-white text-[10px] font-black uppercase tracking-[0.2em] mb-10">Ecossistema</h4>
                    <ul className="space-y-5 text-[11px] font-bold uppercase tracking-widest">
                        <li><Link to={ROUTES[Page.CustomerService]} className="hover:text-indigo-400 transition-colors">Atendimento</Link></li>
                        <li><Link to={ROUTES[Page.Automation]} className="hover:text-indigo-400 transition-colors">Automação IA</Link></li>
                        <li><Link to={ROUTES[Page.DigitalPresence]} className="hover:text-indigo-400 transition-colors">Presença Digital</Link></li>
                    </ul>
                </div>
                <div className="text-left">
                    <h4 className="text-white text-[10px] font-black uppercase tracking-[0.2em] mb-10">Unificando</h4>
                    <ul className="space-y-5 text-[11px] font-bold uppercase tracking-widest">
                        <li><Link to={ROUTES[Page.About]} className="hover:text-indigo-400 transition-colors">Nossa Postura</Link></li>
                        <li><Link to={ROUTES[Page.HowItWorks]} className="hover:text-indigo-400 transition-colors">O Método</Link></li>
                        <li><Link to={ROUTES[Page.Contact]} className="hover:text-indigo-400 transition-colors">Fale Conosco</Link></li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 mt-24 pt-8 border-t border-slate-800 text-[10px] font-bold uppercase tracking-widest flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600">
                <p>© {new Date().getFullYear()} Unificando Digital. Crafted for results.</p>
                <div className="flex gap-8">
                    <a href="#" className="hover:text-white transition-colors">Privacidade</a>
                    <a href="#" className="hover:text-white transition-colors">Termos</a>
                </div>
            </div>
        </footer>
    );
};
