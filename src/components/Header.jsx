import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { useLocation } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

/**
 * Header Component
 * @param {Object} props
 * @param {boolean} props.isDarkMode - Current theme state
 * @param {Function} props.setIsDarkMode - Theme toggle function
 */
const Header = ({ isDarkMode, setIsDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const isProjectsPage = location.pathname === '/projects';
  const isNotFoundPage = location.pathname !== '/' && location.pathname !== '/projects';
  const navItems = ['Home', 'About', 'Projects', 'Contact'];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dynamic styles
  const headerClasses = `
    fixed top-0 left-0 right-0 z-50 
    transition-colors duration-300
    ${isScrolled || isMenuOpen ? 'bg-gray-200 dark:bg-gray-800 shadow-md' : 'bg-transparent'}
  `;

  const textClasses = `
    text-xl md:text-2xl font-bold pixelated
    ${isScrolled || isMenuOpen 
      ? 'text-gray-600 dark:text-gray-300' 
      : 'text-gray-600 dark:text-gray-300 drop-shadow-md'}
  `;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className={headerClasses}
    >
      {/* Main Header */}
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center flex-1">
          <h1 className={`${textClasses}`}>.tom</h1>
        </div>
        
        {/* Desktop Navigation */}
        {!isProjectsPage && !isNotFoundPage && (
          <nav className="hidden md:block flex-1">
            <ul className="flex space-x-6 mb-0 justify-center">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className={`
                      text-base pixelated inline-block transition-colors
                      ${isScrolled
                        ? 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white'
                        : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white drop-shadow-md'}
                    `}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* Theme Toggle and Mobile Menu */}
        <div className="flex items-center justify-end flex-1">
          <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          
          {!isProjectsPage && !isNotFoundPage && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`
                ml-4 md:hidden transition-colors duration-300 
                focus:outline-none active:outline-none
                ${isScrolled || isMenuOpen
                  ? 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white drop-shadow-md'}
              `}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <RiCloseLine className="w-6 h-6" /> : <RiMenu3Line className="w-6 h-6" />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      {!isProjectsPage && !isNotFoundPage && (
        <nav className={`
          md:hidden bg-gray-200 dark:bg-gray-800 
          bg-opacity-95 dark:bg-opacity-95
          transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}
        `}>
          <ul className="flex flex-col items-center p-2">
            {navItems.map((item) => (
              <li key={item} className="transform transition-transform duration-300 ease-in-out">
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block pt-3 text-base text-gray-600 dark:text-gray-300 
                           hover:text-gray-800 dark:hover:text-white pixelated 
                           transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </motion.header>
  );
};

export default Header;
