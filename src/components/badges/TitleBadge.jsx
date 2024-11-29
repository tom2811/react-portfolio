import React from 'react';
import PropTypes from 'prop-types';

/**
 * TitleBadge Component
 * Displays a pixel-styled badge with theme-aware colors.
 * 
 * @param {Object} props
 * @param {boolean} props.isDarkMode - Theme state
 * @param {string} props.title - Badge text
 */
export const TitleBadge = ({ isDarkMode = false, title }) => {
  // Set badge theme based on dark/light mode
  const badgeStyle = isDarkMode ? 'is-warning' : 'is-dark';
  
  return (
    <span className="nes-badge">
      <span 
        className={`
          ${badgeStyle} 
          pixelated 
          text-sm 
          md:text-base 
          !transition-none
        `}
      >
        {title}
      </span>
    </span>
  );
};

TitleBadge.propTypes = {
  isDarkMode: PropTypes.bool,
  title: PropTypes.string.isRequired
}; 
