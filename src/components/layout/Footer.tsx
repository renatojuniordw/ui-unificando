import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes";
import { SOCIAL_LINKS } from "../../constants/social";
import LogoUnificando from "../../assets/img/LOGO_UNIFICANDO.svg";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-slate-950 py-24 border-t-8 border-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-4 gap-16">
        <div className="col-span-1 md:col-span-2 text-left">
          <div className="flex items-center gap-2 mb-8 bg-[#ccff00] p-4 border-4 border-slate-950 shadow-[8px_8px_0px_#000] inline-block">
            <img
              src={LogoUnificando}
              alt="Unificando"
              className="h-8 md:h-10 w-auto"
            />
          </div>
          <p className="max-w-sm mb-8 text-sm md:text-base font-mono font-bold uppercase p-4 border-l-4 border-slate-950 bg-slate-50">
            O ecossistema definitivo para negócios que buscam maturidade,
            autoridade e organização. Brutalmente focado em conversão.
          </p>
          <div className="flex gap-4 mt-8">
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="bg-slate-950 text-[#ccff00] hover:bg-[#ccff00] hover:text-slate-950 w-16 h-16 flex items-center justify-center transition-colors border-4 border-slate-950 shadow-[4px_4px_0px_#000] hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000]"
            >
              <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="text-left">
          <h4 className="inline-block bg-slate-950 text-white px-2 py-1 text-base font-black uppercase tracking-widest mb-6 border-2 border-slate-950 shadow-[4px_4px_0px_#ccff00]">
            SOLUÇÕES
          </h4>
          <ul className="space-y-4 text-xs font-black uppercase tracking-widest">
            <li>
              <Link
                to={ROUTES.CUSTOMER_SERVICE}
                className="hover:bg-[#ccff00] hover:px-2 transition-all inline-block py-1"
              >
                ATENDIMENTO UNIFICADO
              </Link>
            </li>
            <li>
              <Link
                to={ROUTES.PRODUCTIVITY}
                className="hover:bg-[#ccff00] hover:px-2 transition-all inline-block py-1"
              >
                IA NO ATENDIMENTO
              </Link>
            </li>
            <li>
              <Link
                to={ROUTES.DIGITAL_PRESENCE}
                className="hover:bg-[#ccff00] hover:px-2 transition-all inline-block py-1"
              >
                SITES & PRESENÇA
              </Link>
            </li>
            <li>
              <Link
                to={ROUTES.SMART_HOSTING}
                className="hover:bg-[#ccff00] hover:px-2 transition-all inline-block py-1"
              >
                HOSPEDAGEM SERVERLESS
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-left">
          <h4 className="inline-block bg-slate-950 text-[#ccff00] px-2 py-1 text-base font-black uppercase tracking-widest mb-6 border-2 border-slate-950 shadow-[4px_4px_0px_#000]">
            ECOSSISTEMA
          </h4>
          <ul className="space-y-4 text-xs font-black uppercase tracking-widest">
            <li>
              <Link
                to={ROUTES.ABOUT}
                className="hover:bg-[#ccff00] hover:px-2 transition-all inline-block py-1"
              >
                NOSSA POSTURA
              </Link>
            </li>
            <li>
              <Link
                to={ROUTES.HOW_IT_WORKS}
                className="hover:bg-[#ccff00] hover:px-2 transition-all inline-block py-1"
              >
                O MÉTODO
              </Link>
            </li>
            <li>
              <Link
                to={ROUTES.CONTACT}
                className="hover:bg-[#ccff00] hover:px-2 transition-all inline-block py-1"
              >
                FALE CONOSCO
              </Link>
            </li>
            <li>
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-[#ccff00] hover:px-2 transition-all inline-block py-1"
              >
                WHATSAPP OFICIAL
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-24 pt-8 border-t-4 border-slate-950 text-xs font-black uppercase tracking-widest flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="bg-slate-950 text-[#ccff00] px-4 py-2 border-2 border-slate-950">
          © {new Date().getFullYear()} UNIFICANDO DIGITAL. TODOS OS DIREITOS RESERVADOS.
        </p>
        <div className="flex gap-8">
          <Link
            to={ROUTES.PRIVACY}
            className="hover:bg-slate-950 hover:text-white px-2 py-1 transition-all"
          >
            PRIVACIDADE
          </Link>
          <Link
            to={ROUTES.TERMS}
            className="hover:bg-slate-950 hover:text-white px-2 py-1 transition-all"
          >
            TERMOS
          </Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-8 py-8 bg-slate-50 border-4 border-slate-950 text-[10px] font-mono text-slate-800 text-center uppercase font-bold text-balance">
        <p>
          UNIFICANDO © {new Date().getFullYear()} É OPERADO POR 64.630.380 MARIA
          JOSE GOMES DOS SANTOS | CNPJ:
          64.630.380/0001-20 • RECIFE - PE
        </p>
        <p className="mt-4 leading-loose">
          ESTE SITE NÃO FAZ PARTE DO SITE DO FACEBOOK OU FACEBOOK INC. ALÉM
          DISSO, ESTE SITE NÃO É ENDOSSADO PELO FACEBOOK DE NENHUMA MANEIRA.
          FACEBOOK É UMA MARCA COMERCIAL DA FACEBOOK, INC. WHATSAPP É UMA MARCA
          COMERCIAL DO WHATSAPP LLC.
        </p>
      </div>
    </footer>
  );
};
