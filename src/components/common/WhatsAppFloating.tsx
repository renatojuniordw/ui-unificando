import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "../../constants/social";
import { trackCtaClick } from "../../utils/analytics";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";

export const WhatsAppFloating: React.FC = () => {
  const whatsappMessage =
    "Olá! Estava no site da Unificando e gostaria de saber mais sobre os projetos.";

  return (
    <motion.a
      href={`${SOCIAL_LINKS.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() =>
        trackCtaClick({
          label: "Falar no WhatsApp",
          location: "floating_button",
          to: SOCIAL_LINKS.whatsapp,
        })
      }
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      whileHover={{ scale: 1.05, translateY: -5 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-20 md:bottom-6 right-6 z-50 flex items-center gap-4 group pointer-events-auto"
      aria-label="Falar no WhatsApp"
    >
      <div className="bg-white px-4 py-2 border-4 border-slate-950 shadow-[4px_4px_0px_#000] transition-all duration-300 translate-x-2 group-hover:translate-x-0 hidden md:block">
        <p className="text-xs font-black uppercase text-slate-950 tracking-widest whitespace-nowrap">
          FALE CONOSCO
        </p>
      </div>

      {/* WhatsApp Icon Container */}
      <div className="w-14 h-14 md:w-16 md:h-16 bg-[#ccff00] border-4 border-slate-950 flex items-center justify-center shadow-[4px_4px_0px_#000] relative overflow-hidden transition-all group-hover:shadow-[8px_8px_0px_#000] group-hover:bg-white">

        <WhatsAppIcon className="w-10 h-10 text-slate-950 relative z-10" />
      </div>
    </motion.a>
  );
};
