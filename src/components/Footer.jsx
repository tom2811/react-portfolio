import React from 'react';
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';

/**
 * Footer Component
 * Displays copyright information and social media links
 */
const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebookF className="w-4 h-4" />, url: 'https://www.facebook.com/godze.ezgod', label: 'Facebook' },
    { icon: <FaInstagram className="w-4 h-4" />, url: 'https://www.instagram.com/_tommm28/', label: 'Instagram' },
    { icon: <FaLinkedinIn className="w-4 h-4" />, url: 'https://www.linkedin.com/in/oak-soe-thein-6b70322b9/', label: 'LinkedIn' },
    { icon: <FaGithub className="w-4 h-4" />, url: 'https://github.com/tom2811', label: 'GitHub' }
  ];

  const copyrightStyles = { 
    fontSize: '1em',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
  };

  return (
    <footer className="bg-gray-200 dark:bg-gray-800 border-t-2 border-gray-300 dark:border-gray-700">
      <div className="container mx-auto px-4 py-4 flex items-center justify-center">
        <div className="flex items-center gap-4">
          {/* Copyright Section */}
          <div className="flex items-center text-sm md:text-base pixelated">
            <span 
              className="text-gray-800 dark:text-white mr-2"
              style={copyrightStyles}
            >
              ©
            </span> 
            <span className="text-gray-800 dark:text-white flex items-center">
              {new Date().getFullYear()}
            </span>
            <span className="text-gray-800 dark:text-white ml-2">.tom</span>
          </div>
          
          <span className="text-gray-400 dark:text-gray-600">|</span>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors duration-300"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
