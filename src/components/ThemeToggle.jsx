import React from 'react';
import * as Switch from '@radix-ui/react-switch';

/**
 * ThemeToggle Component
 * @param {Object} props
 * @param {boolean} props.isDarkMode - Current theme state
 * @param {Function} props.setIsDarkMode - Theme toggle function
 */
const ThemeToggle = ({ isDarkMode, setIsDarkMode }) => {
  const backgroundStyle = {
    background: isDarkMode 
      ? 'linear-gradient(to right, #0f172a, #1e3a8a)'
      : 'linear-gradient(to right, #bae6fd, #38bdf8)'
  };

  const thumbClasses = `
    block w-6 h-6 rounded-full transform transition-all duration-500 border-2 relative z-10
    ${isDarkMode 
      ? 'translate-x-7 bg-gray-300 border-gray-400 shadow-[inset_-3px_-2px_3px_rgba(0,0,0,0.2)]'
      : 'translate-x-[-1px] bg-yellow-300 border-sky-400 shadow-[0_0_8px_rgba(250,204,21,0.5)]'
    }
  `;

  return (
    <Switch.Root
      checked={isDarkMode}
      onCheckedChange={() => setIsDarkMode(!isDarkMode)}
      className="w-14 h-7 rounded-full relative shadow-inner focus:outline-none 
                active:outline-none transition-colors duration-500 
                border-2 border-sky-400 dark:border-gray-600"
      style={backgroundStyle}
    >
      <Switch.Thumb 
        className={thumbClasses}
        aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      />
    </Switch.Root>
  );
};

export default ThemeToggle;
