import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../routes';

export const JourneySection: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section className="py-24 bg-slate-900 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-indigo-600/10 blur-[100px] pointer-events-none"></div>
            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <h2 className="text-4xl md:text-5xl font-black mb-12 uppercase tracking-tighter">Uma jornada clara de crescimento</h2>

                <div className="grid md:grid-cols-3 gap-8 mb-16 text-left">
                    <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
                        <span className="text-indigo-400 font-bold block mb-2">01.</span>
                        <p className="text-sm font-medium text-slate-300">Comece organizando o atendimento.</p>
                    </div>
                    <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
                        <span className="text-indigo-400 font-bold block mb-2">02.</span>
                        <p className="text-sm font-medium text-slate-300">Evolua com automações e IA.</p>
                    </div>
                    <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
                        <span className="text-indigo-400 font-bold block mb-2">03.</span>
                        <p className="text-sm font-medium text-slate-300">Fortaleça sua marca com presença digital.</p>
                    </div>
                </div>

                <p className="text-slate-400 font-medium mb-12 max-w-lg mx-auto text-sm uppercase tracking-widest">Ou monte tudo de uma vez. O caminho se adapta ao seu momento.</p>

                <button
                    onClick={() => navigate(ROUTES.PLANS)}
                    className="bg-white text-slate-900 px-12 py-5 rounded-2xl text-[10px] font-black hover:bg-slate-200 transition-all shadow-2xl uppercase tracking-widest"
                >
                    Simular minha solução
                </button>
            </div>
        </section>
    );
};
