import React, { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import {
  pageTitleVariants,
  aboutBioTextVariants,
  containerVariants,
} from "../animations/framerMotion";
import { usePageAnimation } from "../hooks/usePageAnimation";
import { PageSection } from "../components/layout/PageSection";
import { useLoading } from "../contexts/LoadingContext";

/**
 * Home Page Component
 * Landing page with animated background and typewriter effect
 */
const Home = ({ isDarkMode }) => {
  const [typeKey, setTypeKey] = useState(0);
  const { ref, mainControls } = usePageAnimation(false, 0.3, true);
  const { setAssetLoaded } = useLoading();

  // Memoized values
  const typeSequence = useMemo(() => ["Tom", 3000, "Oak Soe Thein", 3000], []);
  const backgroundStyles = useMemo(
    () => ({
      day: {
        backgroundImage: `url('/assets/backgrounds/day.jpg')`,
        opacity: isDarkMode ? 0 : 1,
        transition: "opacity 1000ms",
      },
      night: {
        backgroundImage: `url('/assets/backgrounds/night.jpg')`,
        opacity: isDarkMode ? 1 : 0,
        transition: "opacity 1000ms",
      },
    }),
    [isDarkMode]
  );

  const buttonClasses = useMemo(
    () =>
      `nes-btn ${
        isDarkMode ? "is-warning" : ""
      } pixel-button-small pixel-button-no-transition text-xs md:text-sm`,
    [isDarkMode]
  );

  const typewriterClasses = useMemo(
    () => `text-gray-100 dark:text-yellow-400 font-bold`,
    []
  );

  // Reset typewriter animation when in view
  useEffect(() => {
    if (mainControls.isInView) {
      setTypeKey((prev) => prev + 1);
    }
  }, [mainControls.isInView]);

  // Preload background images
  useEffect(() => {
    const dayImage = new Image();
    const nightImage = new Image();

    dayImage.onload = () => setAssetLoaded("dayImage");
    nightImage.onload = () => setAssetLoaded("nightImage");

    dayImage.src = "/assets/backgrounds/day.jpg";
    nightImage.src = "/assets/backgrounds/night.jpg";

    const timer = setTimeout(() => setAssetLoaded("content"), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <PageSection
      ref={ref}
      id="home"
      mainControls={mainControls}
      isDarkMode={isDarkMode}
      isHome={true}
    >
      {/* Background Layers */}
      <div className="absolute inset-0 z-10">
        {/* High-res backgrounds */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={backgroundStyles.day}
        />
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={backgroundStyles.night}
        />
      </div>

      <div className="kiki absolute z-30" />

      {/* Main Content */}
      <motion.div
        className="text-center relative z-30 px-4 -mt-52 md:-mt-72 lg:-mt-96 xl:-mt-60 landscape-mobile-margin pt-0 sm:-pb-12 lg:pt-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        {/* Title with Typewriter */}
        <motion.div variants={pageTitleVariants} className="mb-5">
          <h1 className="text-3xl md:text-4xl xl:text-4xl font-bold text-gray-800 dark:text-white pixelated leading-tight">
            Hello, I'm{" "}
            <TypeAnimation
              key={typeKey}
              sequence={typeSequence}
              wrapper="span"
              speed={30}
              repeat={Infinity}
              className={typewriterClasses}
            />
          </h1>
        </motion.div>

        {/* Bio Text */}
        <motion.p
          variants={aboutBioTextVariants}
          custom={0.4}
          className="text-sm md:text-lg lg:text-lg text-gray-600 dark:text-gray-300 pixelated max-w-xl mx-auto mb-0"
        >
          <span className="block text-gray-800 dark:text-white sm:hidden">
            Passionate web developer dedicated to creating
          </span>
          <span className="hidden sm:block text-gray-800 dark:text-white">
            Passionate web developer dedicated to creating high-quality
          </span>
        </motion.p>

        <motion.p
          variants={aboutBioTextVariants}
          custom={0.6}
          className="text-sm md:text-lg lg:text-lg text-gray-600 dark:text-gray-300 pixelated max-w-xl mx-auto mt-0"
        >
          <span className="block text-gray-800 dark:text-white sm:hidden">
            high-quality and responsive designs.
          </span>
          <span className="hidden sm:block text-gray-800 dark:text-white">
            and responsive designs.
          </span>
        </motion.p>

        {/* Button */}
        <motion.div
          variants={aboutBioTextVariants}
          custom={0.8}
          className="mt-0 sm:mt-4"
        >
          <a 
            href="/assets/resume/oaksoethein-webdev-resume.pdf" 
            download="oaksoethein-webdev-resume.pdf"
            className="pixel-button"
          >
            Resume
          </a>
        </motion.div>
      </motion.div>
    </PageSection>
  );
};

export default Home;
