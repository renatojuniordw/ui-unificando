import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../routes";
import { SEO } from "../components/common/SEO";
import { PageTransition } from "../components/common/PageTransition";

export const NotFound: React.FC = () => {
  return (
    <PageTransition>
      <SEO
        title="Página não encontrada | Unificando"
        description="A página que você está procurando não existe."
      />
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 bg-slate-50">
        <h1 className="text-9xl font-black text-slate-200 mb-4 select-none">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 uppercase tracking-tighter">
          Página não encontrada
        </h2>
        <p className="text-lg text-slate-500 mb-10 font-medium max-w-md">
          O conteúdo que você buscou não existe ou foi movido.
        </p>
        <Link
          to={ROUTES.HOME}
          className="bg-indigo-600 text-white px-8 py-4 rounded-xl text-sm font-black hover:bg-indigo-500 transition-all shadow-lg uppercase tracking-widest"
        >
          Voltar para o Início
        </Link>
      </div>
    </PageTransition>
  );
};
