import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { containerVariants } from "../../animations/framerMotion";

/**
 * PageSection Component
 * A wrapper component for page sections with consistent styling and animations.
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Child elements
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.id - Section identifier
 * @param {Object} props.mainControls - Animation controls
 * @param {boolean} props.isDarkMode - Theme state
 * @param {boolean} props.isHome - Home section flag
 * @param {boolean} props.isAllProjects - Projects section flag
 */
export const PageSection = forwardRef(
  (
    {
      children,
      className = "",
      id,
      mainControls,
      isDarkMode,
      isHome = false,
      isAllProjects = false,
    },
    ref
  ) => {
    // Determine base classes based on section type
    const baseClasses = isHome
      ? "flex items-center justify-center h-screen relative overflow-hidden nes-cursor"
      : isAllProjects
      ? "relative min-h-screen pt-20"
      : "relative flex min-h-[calc(100vh-64px)] lg:h-[calc(100vh-3.5rem)] px-4 py-12 md:py-8";

    // Theme-based background classes
    const bgClasses = isDarkMode ? "bg-[#212529]" : "bg-gray-200";

    return (
      <section
        ref={ref}
        id={id}
        className={`
          ${baseClasses} 
          ${!isHome ? bgClasses : ''} 
          transition-colors 
          duration-1000 
          ${className}
        `}
      >
        {isHome ? (
          <>
            {/* Background and character elements */}
            {React.Children.toArray(children).find(child => 
              child?.props?.className?.includes('absolute inset-0') || 
              child?.props?.className?.includes('kiki')
            )}
            {/* Animated content wrapper */}
            <motion.div
              initial="hidden"
              animate={mainControls}
              variants={containerVariants}
              className="w-full max-w-[1920px] mx-auto"
            >
              {children}
            </motion.div>
          </>
        ) : (
          <motion.div
            initial="hidden"
            animate={mainControls}
            variants={containerVariants}
            className="w-full max-w-[1920px] mx-auto"
          >
            {children}
          </motion.div>
        )}
      </section>
    );
  }
);
