import { useState, useRef, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";

export const useHeaderMenu = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close all menus on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsSolutionsOpen(false);
    setIsMobileSolutionsOpen(false);
  }, [location.pathname]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimeoutRef.current = setTimeout(() => {
      setIsSolutionsOpen(false);
    }, 150); // small delay so the mouse can travel to the dropdown
  }, [cancelClose]);

  const openSolutions = useCallback(() => {
    cancelClose();
    setIsSolutionsOpen(true);
  }, [cancelClose]);

  const closeSolutions = useCallback(() => {
    scheduleClose();
  }, [scheduleClose]);

  const toggleSolutions = useCallback(
    () => {
      cancelClose();
      setIsSolutionsOpen((prev) => !prev);
    },
    [cancelClose],
  );

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleMobileSolutions = () => setIsMobileSolutionsOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const closeAll = useCallback(() => {
    cancelClose();
    setIsMenuOpen(false);
    setIsSolutionsOpen(false);
    setIsMobileSolutionsOpen(false);
  }, [cancelClose]);

  return {
    isMenuOpen,
    isSolutionsOpen,
    isMobileSolutionsOpen,
    dropdownRef,
    toggleMenu,
    toggleSolutions,
    toggleMobileSolutions,
    closeMenu,
    openSolutions,
    closeSolutions,
    closeAll,
    cancelClose,
  };
};
