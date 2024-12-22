import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { containerVariants, itemVariants } from "../animations/framerMotion";
import { useLoading } from "../contexts/LoadingContext";

/**
 * NotFound Page Component
 * Displays 404 error with navigation back to home
 */
const NotFound = ({ isDarkMode, setIsDarkMode }) => {
  const navigate = useNavigate();
  const { setAssetLoaded } = useLoading();

  useEffect(() => {
    setAssetLoaded("content");
    setAssetLoaded("themeLoaded");
  }, []);

  const handleGoHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      {/* Content */}
      <main className="flex-grow flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center px-4"
        >
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl font-bold text-gray-800 dark:text-gray-200 pixelated mb-4"
          >
            404
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 pixelated mb-6"
          >
            Page Not Found
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-600 dark:text-gray-400 mb-8 pixelated"
          >
            Oops! The page you're looking for doesn't exist.
          </motion.p>

          <motion.div variants={itemVariants}>
            <button
              onClick={handleGoHome}
              className={`pixel-button ${isDarkMode ? 'is-warning' : ''}`}
            >
              Go Home
            </button>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default NotFound;
