import { useState } from "react";
import { useLocation } from "react-router-dom";

export const useHeaderMenu = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(location.pathname);

  // Fecha o menu ao trocar de rota.
  // Ajuste de estado durante o render (padrão "storing info from previous
  // renders") para evitar setState dentro de effect e renders em cascata.
  if (prevPathname !== location.pathname) {
    setPrevPathname(location.pathname);
    setIsMenuOpen(false);
  }

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);
  const closeAll = () => setIsMenuOpen(false);

  return { isMenuOpen, toggleMenu, closeMenu, closeAll };
};