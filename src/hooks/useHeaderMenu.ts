import { useState, useRef, useEffect, MouseEvent } from 'react';
import { useLocation } from 'react-router-dom';

export const useHeaderMenu = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
    const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close menus on route change
    useEffect(() => {
        setIsMenuOpen(false);
        setIsSolutionsOpen(false);
        setIsMobileSolutionsOpen(false);
    }, [location.pathname]);

    // Handle click outside
    useEffect(() => {
        const handleClickOutside = (event: globalThis.MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsSolutionsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleMenu = () => setIsMenuOpen(prev => !prev);
    const toggleSolutions = () => setIsSolutionsOpen(prev => !prev);
    const toggleMobileSolutions = () => setIsMobileSolutionsOpen(prev => !prev);

    // Explicit close handlers
    const closeMenu = () => setIsMenuOpen(false);
    const openSolutions = () => setIsSolutionsOpen(true);
    const closeSolutions = () => setIsSolutionsOpen(false);

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
        closeSolutions
    };
};
