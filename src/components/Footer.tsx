import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes';
import LogoUnificando from '../assets/img/LOGO_UNIFICANDO.svg';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-900 text-slate-400 py-24">
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-16">
                <div className="col-span-1 md:col-span-2 text-left">
                    <div className="flex items-center gap-2 mb-8">
                        <img src={LogoUnificando} alt="Unificando" className="h-10 w-auto brightness-0 invert" />
                    </div>
                    <p className="max-w-xs mb-8 text-sm leading-relaxed font-medium">
                        O ecossistema definitivo para negócios que buscam maturidade, autoridade e organização no ambiente digital.
                    </p>
                </div>
                <div className="text-left">
                    <h4 className="text-white text-[10px] font-black uppercase tracking-[0.2em] mb-10">Ecossistema</h4>
                    <ul className="space-y-5 text-[11px] font-bold uppercase tracking-widest">
                        <li><Link to={ROUTES.CUSTOMER_SERVICE} className="hover:text-indigo-400 transition-colors">Atendimento</Link></li>
                        <li><Link to={ROUTES.PRODUCTIVITY} className="hover:text-indigo-400 transition-colors">Produtividade</Link></li>
                        <li><Link to={ROUTES.DIGITAL_PRESENCE} className="hover:text-indigo-400 transition-colors">Presença Digital</Link></li>
                    </ul>
                </div>
                <div className="text-left">
                    <h4 className="text-white text-[10px] font-black uppercase tracking-[0.2em] mb-10">Unificando</h4>
                    <ul className="space-y-5 text-[11px] font-bold uppercase tracking-widest">
                        <li><Link to={ROUTES.ABOUT} className="hover:text-indigo-400 transition-colors">Nossa Postura</Link></li>
                        <li><Link to={ROUTES.HOW_IT_WORKS} className="hover:text-indigo-400 transition-colors">O Método</Link></li>
                        <li><Link to={ROUTES.CONTACT} className="hover:text-indigo-400 transition-colors">Fale Conosco</Link></li>
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
