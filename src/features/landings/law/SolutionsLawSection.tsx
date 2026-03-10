import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Triagem Inteligente",
    description: "A IA atende em segundos, qualifica o cliente, solicita a documentação inicial e só repassa para o advogado quando tudo estiver pronto.",
    icon: "📂",
  },
  {
    title: "1 Número. Toda a Equipe.",
    description: "Pare de usar WhatsApp Web. Conecte múltiplos advogados e estagiários no mesmo número simultaneamente com controle total de acesso.",
    icon: "📱",
  },
  {
    title: "Site com Autoridade",
    description: "Criamos e hospedamos a presença digital do seu escritório para transmitir segurança. Carregamento rápido e otimizado para as buscas do Google.",
    icon: "🏛️",
  },
  {
    title: "Histórico Centralizado",
    description: "Acesse todas as conversas e documentos enviados pelos clientes em um só lugar. Nunca mais perca informações importantes do processo.",
    icon: "🔒",
  },
];

export const SolutionsLawSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 border-t border-slate-800 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-indigo-400 font-black uppercase tracking-[0.2em] text-xs mb-4 block">
              ECOSSISTEMA UNIFICANDO
            </span>
            <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tighter leading-tight text-white">
              Gestão <span className="text-indigo-500 italic">Legal</span> &<br /> Atendimento 24/7.
            </h2>
            <p className="text-lg text-slate-400 mb-10 font-medium leading-relaxed">
              O Unificando não é mais um sisteminha de disparo. É uma central completa para escritórios que querem escalar sua captação de clientes sem inchar a equipe e sem perder a qualidade no atendimento.
            </p>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
              {features.map((feature, i) => (
                <div key={i}>
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-4 text-lg">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-white mb-2 text-sm">{feature.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
             <div className="absolute inset-0 bg-indigo-500/10 rounded-[3rem] blur-3xl transform rotate-3"></div>
             <div className="relative bg-slate-800 border border-slate-700 rounded-3xl p-8 shadow-2xl">
               <div className="flex items-center gap-4 mb-8 border-b border-slate-700 pb-6">
                 <div className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center text-indigo-400 font-bold">
                   IA
                 </div>
                 <div>
                   <h4 className="text-white font-bold">Atendimento Automático</h4>
                   <p className="text-sm text-slate-400">Respondendo em 2 segundos</p>
                 </div>
               </div>

               <div className="space-y-4">
                 <div className="bg-slate-700/50 p-4 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl max-w-[85%] self-start border border-slate-600/50">
                   <p className="text-sm text-slate-300">Olá! Preciso de ajuda com um processo trabalhista. A empresa não pagou minhas verbas rescisórias.</p>
                 </div>
                 <div className="bg-indigo-600 p-4 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl max-w-[85%] ml-auto shadow-md">
                   <p className="text-sm text-white">Olá! Compreendo sua situação. Sou o assistente jurídico do escritório. Para agilizarmos a análise do seu caso, você poderia me enviar uma foto da sua rescisão (TRCT) e da carteira de trabalho?</p>
                 </div>
                 <div className="bg-slate-700/50 p-4 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl max-w-[85%] self-start border border-slate-600/50">
                   <p className="text-sm text-slate-300">Claro, vou enviar agora mesmo. Demora muito para o advogado ver?</p>
                 </div>
                 <div className="bg-slate-800 border border-slate-700 p-4 rounded-2xl flex items-center gap-3 mt-6">
                   <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                   <p className="text-xs font-medium text-slate-400">Transferindo para Dra. Ana Silva com todos os documentos anexados...</p>
                 </div>
               </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
