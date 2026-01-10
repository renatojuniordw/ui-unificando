import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../routes';

export const ProductivityCta: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section className="py-24 bg-indigo-600 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-white/5 blur-[120px] pointer-events-none"></div>
            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <h2 className="text-3xl md:text-5xl font-black mb-12 uppercase tracking-tighter leading-none">Pronto para <span className="text-indigo-200 font-normal italic">ganhar tempo</span>?</h2>
                <button
                    onClick={() => navigate(ROUTES.CONTACT)}
                    className="bg-white text-indigo-600 px-12 py-5 rounded-2xl text-[10px] font-black hover:bg-indigo-50 transition-all shadow-2xl uppercase tracking-[0.2em]"
                >
                    Falar com especialista agora
                </button>
            </div>
        </section>
    );
};
