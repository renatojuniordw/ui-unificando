

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SEO } from '../components/SEO';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../routes';


const WhatsAppSimulation = () => {
    const [messages, setMessages] = useState<Array<{ id: number, text: React.ReactNode, type: 'user' | 'bot' | 'system', time: string }>>([
        { id: 1, text: "Olá! Gostaria de saber mais sobre os planos.", type: 'user', time: '10:00' },
    ]);

    useEffect(() => {
        const sequence = [
            {
                id: 2,
                text: (
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center">
                            <svg className="w-4 h-4 text-indigo-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                        </div>
                        <div className="h-1 flex-1 bg-indigo-500/20 rounded-full overflow-hidden w-24">
                            <div className="h-full bg-indigo-400 w-2/3 animate-pulse"></div>
                        </div>
                        <span className="text-[9px] opacity-70">0:12</span>
                    </div>
                ),
                type: 'user',
                time: '10:00',
                delay: 1000
            },
            { id: 3, text: <span className="italic opacity-80 text-[9px] flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span> Transcrevendo áudio...</span>, type: 'system', time: '10:00', delay: 2500 },
            { id: 4, text: "Entendi! Você quer detalhes sobre custos e benefícios, certo? Nossos planos começam com...", type: 'bot', time: '10:01', delay: 4500 },
            { id: 5, text: "Exatamente! E vocês atendem domingos?", type: 'user', time: '10:02', delay: 7000 },
            { id: 6, text: "Sim! Nossos Agentes IA trabalham 24/7, inclusive domingos e feriados, sem pausas.", type: 'bot', time: '10:02', delay: 9000 },
        ];

        const timeouts = sequence.map(msg =>
            setTimeout(() => {
                setMessages(prev => {
                    // Remove system message if exists
                    const filtered = prev.filter(m => m.type !== 'system');
                    return [...filtered, msg as any];
                });
            }, msg.delay)
        );

        const resetTimeout = setTimeout(() => {
            setMessages([{ id: 1, text: "Olá! Gostaria de saber mais sobre os planos.", type: 'user', time: '10:00' }]);
        }, 16000);

        return () => {
            timeouts.forEach(clearTimeout);
            clearTimeout(resetTimeout);
        };
    }, []);

    return (
        <div className="bg-slate-50 rounded-[2rem] h-full overflow-hidden flex flex-col shadow-inner relative border border-slate-200">
            <div className="bg-slate-900 p-4 flex items-center gap-3 text-white">
                <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center text-white font-black text-xs">U</div>
                <div className="flex flex-col text-left">
                    <span className="text-[10px] font-black uppercase tracking-widest leading-none">Unificando AI</span>
                    <span className="text-[8px] opacity-60 font-bold uppercase tracking-tight">AUTOMAÇÃO INTELIGENTE</span>
                </div>
            </div>

            <div className="flex-1 p-4 flex flex-col gap-3 overflow-y-auto bg-slate-100">
                <AnimatePresence>
                    {messages.map((msg) => (
                        <motion.div
                            key={msg.id}
                            initial={{ opacity: 0, scale: 0.9, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            className={`max - w - [85 %] p - 3 rounded - 2xl text - [10px] shadow - sm font - medium ${msg.type === 'user'
                                ? 'bg-indigo-600 text-white self-end rounded-tr-none'
                                : 'bg-white text-slate-800 self-start rounded-tl-none border border-slate-200'
                                } `}
                        >
                            {msg.text}
                            <div className={`text - [8px] mt - 1 ${msg.type === 'user' ? 'text-indigo-200' : 'text-slate-400'} `}>{msg.time}</div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            <div className="p-3 bg-white border-t border-slate-200 flex gap-2 items-center">
                <div className="flex-1 bg-slate-50 rounded-full h-8 px-4 flex items-center border border-slate-100">
                    <div className="w-px h-3 bg-indigo-600 animate-pulse"></div>
                </div>
            </div>
        </div>
    );
};

export const Productivity: React.FC = () => {
    const navigate = useNavigate();
    const [activeFaq, setActiveFaq] = useState<number | null>(null);
    const [channels, setChannels] = useState(1);
    const [useIA, setUseIA] = useState(false);
    const [complexity, setComplexity] = useState(1);

    const calculatePricing = () => {
        const setupBase = 1000;
        const mensalBase = 297;
        const channelCost = 100;
        const iaCost = 200;
        const complexityFactor = complexity === 1 ? 1 : complexity === 2 ? 1.5 : 2.5;

        const setupTotal = (setupBase * complexityFactor) + (channels * 150);
        const mensalTotal = mensalBase + (channels > 1 ? (channels - 1) * channelCost : 0) + (useIA ? iaCost : 0);

        return { setup: setupTotal, mensal: mensalTotal };
    };

    const pricing = calculatePricing();

    const faqItems = [
        { q: "A IA substitui meus atendentes?", a: "Não. A IA reduz tarefas repetitivas e escala o atendimento. Pessoas continuam essenciais." },
        { q: "Consigo treinar a IA com meus dados?", a: "Sim. A IA aprende com seus manuais, perguntas frequentes e processos." },
        { q: "Funciona sem o atendimento tradicional?", a: "Sim. A IA pode atuar sozinha ou integrada ao painel de atendimento." }
    ];

    return (
        <div className="bg-white">
            <SEO
                title="Agentes de IA para Negócios | Unificando"
                description="Tenha agentes inteligentes atendendo no WhatsApp, Instagram e site, 24/7. Mais escala e produtividade sem aumentar custos fixos."
                canonical="/produtividade"
            />
            {/* Hero Section */}
            <section className="py-20 md:py-32 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
                        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">🤖 IA PARA NEGÓCIOS</div>
                        <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-8 uppercase tracking-tighter">
                            Agentes de IA que trabalham para <span className="text-indigo-600">o seu negócio</span>, não contra ele.
                        </h1>
                        <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-lg font-medium">
                            Tenha agentes inteligentes atendendo no WhatsApp, Instagram e site, 24 horas por dia, seguindo o jeito da sua marca, seus processos e suas regras.
                        </p>
                        <div className="flex flex-col gap-4">
                            <ul className="space-y-2 mb-8">
                                <li className="flex items-center gap-2 text-sm font-bold text-slate-700">
                                    <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">✓</span> Mais escala.
                                </li>
                                <li className="flex items-center gap-2 text-sm font-bold text-slate-700">
                                    <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">✓</span> Mais produtividade.
                                </li>
                                <li className="flex items-center gap-2 text-sm font-bold text-slate-700">
                                    <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">✓</span> Sem aumentar equipe ou custos fixos.
                                </li>
                            </ul>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={() => navigate(ROUTES.CONTACT)}
                                    className="bg-slate-900 text-white px-10 py-5 rounded-2xl text-[10px] font-black hover:bg-slate-800 transition-all shadow-xl uppercase tracking-widest"
                                >
                                    Falar com Especialista
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    <div className="relative">
                        <div className="bg-slate-900 rounded-[3rem] p-4 shadow-2xl h-[500px] border border-slate-800">
                            <WhatsAppSimulation />
                        </div>
                    </div>
                </div>
            </section>

            {/* Ecosystem Section */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-6">Duas soluções. <span className="text-indigo-600">Um único ecossistema.</span></h2>
                        <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">Você escolhe usar separado ou integrado. Nós montamos do jeito que o seu negócio precisa.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-12 rounded-[3rem] border border-slate-200 hover:border-indigo-200 transition-all shadow-sm">
                            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-8">🖥️</div>
                            <h3 className="text-2xl font-black uppercase tracking-tight mb-4 text-slate-900">Atendimento Digital</h3>
                            <p className="text-slate-500 font-medium leading-relaxed">Organize conversas, equipe e canais em um só lugar.</p>
                        </div>
                        <div className="bg-slate-900 p-12 rounded-[3rem] text-white shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-12 opacity-10 text-9xl">🤖</div>
                            <div className="w-16 h-16 bg-indigo-500/20 text-indigo-400 rounded-2xl flex items-center justify-center text-3xl mb-8 relative z-10">🧠</div>
                            <h3 className="text-2xl font-black uppercase tracking-tight mb-4 relative z-10">IA para Negócios</h3>
                            <p className="text-indigo-100 font-medium leading-relaxed relative z-10">Agentes inteligentes que atendem, agendam e vendem 24/7, adaptados à sua marca e ao seu processo.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problemas (Pain Points) */}
            <section className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-red-500 font-black uppercase tracking-[0.2em] text-[10px] mb-4 block">O Gargalo que Ninguém Fala</span>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter">Quando software pronto <br /><span className="text-red-500">não resolve.</span></h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-red-200 transition-colors">
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-sm">🧩</div>
                            <h3 className="font-black text-slate-900 uppercase tracking-widest text-xs mb-3">Ferramentas Desconectadas</h3>
                            <p className="text-sm text-slate-500 font-medium leading-relaxed">WhatsApp, planilhas, agendas e sistemas que não conversam entre si geram retrabalho e perda de informação.</p>
                        </div>
                        <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-red-200 transition-colors">
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-sm">📉</div>
                            <h3 className="font-black text-slate-900 uppercase tracking-widest text-xs mb-3">Processos Não Padronizados</h3>
                            <p className="text-sm text-slate-500 font-medium leading-relaxed">O atendimento depende de pessoas específicas. Treinar alguém novo vira um problema.</p>
                        </div>
                        <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-red-200 transition-colors">
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-sm">🔄</div>
                            <h3 className="font-black text-slate-900 uppercase tracking-widest text-xs mb-3">Tudo Manual e Repetitivo</h3>
                            <p className="text-sm text-slate-500 font-medium leading-relaxed">Perguntas, áudios, agendamentos e triagens que poderiam ser resolvidos automaticamente consomem tempo todos os dias.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-indigo-600 font-black uppercase tracking-[0.2em] text-[10px] mb-4 block">O que muda com Agentes Inteligentes</span>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter">Por que usar IA no atendimento?</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { t: "Atendimento Multicanal 24/7", d: "A IA responde WhatsApp, Instagram e site em tempo real. Nenhuma conversa fica sem resposta.", i: "🌐" },
                            { t: "Entendimento de Áudio", d: "Seu cliente fala. A IA escuta, transcreve, entende e responde corretamente.", i: "🎙️" },
                            { t: "Atendimento Hiper-personalizado", d: "A IA considera histórico, perfil, localização e contexto para responder como um atendente experiente.", i: "👤" },
                            { t: "Escalonamento Inteligente", d: "Quando necessário, a conversa vai para um humano com resumo completo. Sem perda de contexto.", i: "⚡" },
                            { t: "Dados que Viram Decisão", d: "A IA analisa conversas e revela padrões, dúvidas frequentes e oportunidades reais.", i: "📊" },
                            { t: "Automação Sob Medida", d: "Nada engessado. Os fluxos são criados conforme o seu negócio, sua marca e sua operação.", i: "🛠️" }
                        ].map((item, i) => (
                            <div key={i} className="p-10 bg-white border border-slate-200 rounded-[3rem] hover:border-indigo-400 transition-all text-left group">
                                <div className="w-12 h-12 bg-slate-100 group-hover:bg-indigo-50 text-slate-900 group-hover:text-indigo-600 rounded-2xl flex items-center justify-center mb-8 font-black transition-colors text-xl">{item.i}</div>
                                <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-4">{item.t}</h4>
                                <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Section: Agents vs Chatbots */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-20">
                        <span className="text-indigo-600 font-black uppercase tracking-widest text-xs mb-4 block">Entenda a Diferença</span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-6">Não é melhor ou pior. <span className="text-indigo-600">É diferente.</span></h2>
                        <p className="text-slate-500 max-w-2xl mx-auto text-lg">O Unificando oferece os dois — você escolhe o que faz sentido.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Agentes IA */}
                        <div className="bg-slate-900 text-white p-12 rounded-[3rem] relative overflow-hidden group hover:scale-[1.02] transition-transform">
                            <div className="absolute top-0 right-0 p-8 opacity-10 font-black text-9xl leading-none select-none">IA</div>
                            <h3 className="text-3xl font-black uppercase tracking-widest mb-8 text-indigo-400">Agentes IA</h3>
                            <ul className="space-y-6 relative z-10">
                                <li className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center shrink-0 mt-1">✓</div>
                                    <p className="text-slate-300 font-medium leading-relaxed">Conversas <strong>naturais e flexíveis</strong>.</p>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center shrink-0 mt-1">✓</div>
                                    <p className="text-slate-300 font-medium leading-relaxed">Aprende com <strong>seus processos</strong>.</p>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center shrink-0 mt-1">✓</div>
                                    <p className="text-slate-300 font-medium leading-relaxed">Atua em <strong>vendas, suporte e agendamento</strong>.</p>
                                </li>
                            </ul>
                            <div className="mt-12 pt-8 border-t border-white/10">
                                <span className="block text-[10px] uppercase font-black tracking-widest text-indigo-400 mb-2">Ideal Para:</span>
                                <p className="text-sm font-bold">SDR Virtual, Suporte Nível 1, Vendas Consultivas.</p>
                            </div>
                        </div>

                        {/* Chatbots */}
                        <div className="bg-slate-50 border border-slate-200 p-12 rounded-[3rem] relative overflow-hidden group hover:scale-[1.02] transition-transform">
                            <div className="absolute top-0 right-0 p-8 opacity-5 font-black text-9xl leading-none select-none text-slate-900">BOT</div>
                            <h3 className="text-3xl font-black uppercase tracking-widest mb-8 text-slate-900">Chatbots Tradicionais</h3>
                            <ul className="space-y-6 relative z-10">
                                <li className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center shrink-0 mt-1">✓</div>
                                    <p className="text-slate-600 font-medium leading-relaxed">Fluxos <strong>rígidos e previsíveis</strong>.</p>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center shrink-0 mt-1">✓</div>
                                    <p className="text-slate-600 font-medium leading-relaxed">Sem <strong>improviso ou contexto</strong>.</p>
                                </li>
                            </ul>
                            <div className="mt-12 pt-8 border-t border-slate-200">
                                <span className="block text-[10px] uppercase font-black tracking-widest text-slate-400 mb-2">Ideal Para:</span>
                                <p className="text-sm font-bold text-slate-700">Coleta de dados, 2ª via de boleto, Rastreio de pedidos.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Methodology Section (New) */}
            <section className="py-24 bg-indigo-600 text-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <span className="opacity-60 text-[10px] font-black uppercase tracking-[0.3em] mb-8 block">Metodologia Unificando</span>
                    <h2 className="text-3xl md:text-5xl font-black mb-12 max-w-4xl mx-auto tracking-tight">Soluções personalizadas de verdade.</h2>
                    <p className="text-lg text-indigo-100 max-w-2xl mx-auto mb-16 font-medium">Aqui não existe "pacote mágico". Antes de qualquer implementação, fazemos um diagnóstico para entender seu modelo, fluxo, volume e objetivos.</p>

                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        <div className="p-8 bg-indigo-700/50 rounded-[2rem] border border-indigo-500/30">
                            <span className="text-4xl mb-4 block">1.</span>
                            <h3 className="font-black uppercase tracking-widest text-sm mb-4">Atendimento Organizado</h3>
                            <p className="text-indigo-100 text-sm leading-relaxed">Estruturamos seus canais e equipe para operarem com eficiência máxima.</p>
                        </div>
                        <div className="p-8 bg-indigo-700/50 rounded-[2rem] border border-indigo-500/30">
                            <span className="text-4xl mb-4 block">2.</span>
                            <h3 className="font-black uppercase tracking-widest text-sm mb-4">IA no Nível Certo</h3>
                            <p className="text-indigo-100 text-sm leading-relaxed">Implementamos a inteligência artificial onde ela traz mais retorno, sem exageros.</p>
                        </div>
                        <div className="p-8 bg-indigo-700/50 rounded-[2rem] border border-indigo-500/30">
                            <span className="text-4xl mb-4 block">3.</span>
                            <h3 className="font-black uppercase tracking-widest text-sm mb-4">Automação que Resolve</h3>
                            <p className="text-indigo-100 text-sm leading-relaxed">Criamos automações que eliminam gargalos e não atrapalham a experiência do cliente.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-black text-slate-900 text-center mb-16 uppercase tracking-tight">Dúvidas Comuns</h2>
                    <div className="space-y-4 text-left">
                        {faqItems.map((item, idx) => (
                            <div key={idx} className="bg-white border border-slate-100 rounded-[2rem] overflow-hidden shadow-sm">
                                <button
                                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                                    className="w-full flex justify-between items-center p-8 text-left hover:bg-slate-50 transition-colors"
                                >
                                    <span className="font-black text-[11px] text-slate-800 uppercase tracking-widest">{item.q}</span>
                                    <div className={`w - 8 h - 8 rounded - full bg - slate - 100 flex items - center justify - center text - slate - 400 transition - all ${activeFaq === idx ? 'rotate-180 bg-slate-900 text-white' : ''} `}>
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                    </div>
                                </button>
                                {activeFaq === idx && (
                                    <div className="px-8 pb-8 text-slate-500 text-sm leading-relaxed font-medium">
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
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
        </div>
    );
};
