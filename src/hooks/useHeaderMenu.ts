import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useHeaderMenu = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fecha o menu ao trocar de rota
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);
  const closeAll = () => setIsMenuOpen(false);

  return { isMenuOpen, toggleMenu, closeMenu, closeAll };
};