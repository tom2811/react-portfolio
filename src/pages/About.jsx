import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePageAnimation } from "../hooks/usePageAnimation";
import {
  leftToRightVariants,
  rightToLeftVariants,
  aboutBioTextVariants,
  aboutTechStackHeadingVariants,
  modalVariants,
  pageTitleVariants,
  pageContentVariants,
} from "../animations/framerMotion";
import {
  TechStackRow,
  techStackRow1,
  techStackRow2,
} from "../components/tech/TechStack";
import { TitleBadge } from "../components/badges/TitleBadge";
import { PageSection } from "../components/layout/PageSection";

// Portrait Modal Component
const PortraitModal = ({ isOpen, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-lg"
        >
          <img
            src="/assets/portraits/pixelated-portrait.png"
            alt="Pixelated portrait"
            className="w-full h-auto object-contain nes-container is-rounded pixelated"
          />
          <button
            onClick={onClose}
            className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-6 h-6 md:w-8 md:h-8 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm md:text-base"
          >
            ✕
          </button>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

/**
 * About Page Component
 * Displays personal information, bio, and tech stack
 */
const About = ({ isDarkMode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const { ref, mainControls } = usePageAnimation(true, 0.3);

  const handleTitleAnimation = () => setTitleVisible(true);

  return (
    <PageSection
      ref={ref}
      id="about"
      mainControls={mainControls}
      isDarkMode={isDarkMode}
      className="bg-white dark:bg-[#212529] relative overflow-hidden"
    >
      {/* Main Container */}
      <motion.div className="w-full max-w-6xl mx-auto flex flex-col min-h-full px-4 md:px-12 lg:px-0">
        <div className="flex-1 flex flex-col h-full">
          {/* Title Section */}
          <motion.div variants={pageTitleVariants} className="flex-none py-12 md:py-6 lg:py-8 flex justify-center -mt-3 lg:-mt-8">
            <TitleBadge isDarkMode={isDarkMode} title="About Me" />
          </motion.div>

          {/* Content Section */}
          <motion.div variants={pageContentVariants} className="flex-1 flex flex-col justify-center py-4 md:py-16 lg:py-8">
            {/* Mobile Layout */}
            <motion.div className="flex flex-col gap-6 lg:hidden">
              {/* Portrait */}
              <motion.div
                variants={leftToRightVariants}
                className="relative aspect-square w-[150px] md:w-[200px] mx-auto group"
              >
                <div
                  className="w-full aspect-square cursor-pointer nes-pointer"
                  onClick={() => setIsModalOpen(true)}
                >
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-700">
                    <img
                      src="/assets/portraits/pixelated-portrait.png"
                      alt="Pixelated portrait"
                      className="w-full h-full object-cover pixelated"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Bio */}
              <motion.div
                variants={rightToLeftVariants}
                className="space-y-4 text-center"
              >
                <motion.p
                  variants={aboutBioTextVariants}
                  custom={1.0}
                  className="pixelated text-sm md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4"
                >
                  A self-taught web developer with 2 years of experience in
                  crafting responsive and user-friendly web applications ✨
                </motion.p>
                <motion.p
                  variants={aboutBioTextVariants}
                  custom={1.4}
                  className="pixelated text-sm md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4"
                >
                  Specializing in React and modern frontend technologies. 
                  Focused on building clean, efficient applications and 
                  implementing pixel-perfect designs 🎨
                </motion.p>
                <motion.p
                  variants={aboutBioTextVariants}
                  custom={1.8}
                  className="pixelated text-sm md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                >
                  Passionate about creating intuitive user experiences and
                  continuously learning new web technologies 🚀
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Desktop Layout */}
            <motion.div className="hidden lg:block relative max-w-3xl mx-auto">
              {/* Portrait Side */}
              <motion.div
                variants={leftToRightVariants}
                className="float-left shape-circle mr-8 mb-4"
                style={{
                  width: "250px",
                  height: "250px",
                  shapeOutside: "circle(50%)",
                  clipPath: "circle(50%)",
                }}
              >
                <div
                  className="w-full h-full cursor-pointer nes-pointer"
                  onClick={() => setIsModalOpen(true)}
                >
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-700">
                    <img
                      src="/assets/portraits/pixelated-portrait.png"
                      alt="Pixelated portrait"
                      className="w-full h-full object-cover pixelated"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Bio Side */}
              <div className="text-justify">
                <motion.p
                  variants={aboutBioTextVariants}
                  custom={1.0}
                  className="pixelated text-base md:text-lg text-gray-600 dark:text-gray-300 leading-loose mb-6"
                >
                  A self-taught web developer with 2 years of experience in
                  crafting responsive and user-friendly web applications ✨
                </motion.p>
                <motion.p
                  variants={aboutBioTextVariants}
                  custom={1.4}
                  className="pixelated text-base md:text-lg text-gray-600 dark:text-gray-300 leading-loose mb-6"
                >
                  Specializing in React and modern frontend technologies. 
                  Focused on building clean, efficient applications and 
                  implementing pixel-perfect designs 🎨
                </motion.p>
                <motion.p
                  variants={aboutBioTextVariants}
                  custom={1.8}
                  className="pixelated text-base md:text-lg text-gray-600 dark:text-gray-300 leading-loose"
                >
                  Passionate about creating intuitive user experiences and
                  continuously learning new web technologies 🚀
                </motion.p>
              </div>
            </motion.div>
          </motion.div>

          {/* Tech Stack Section */}
          <motion.div variants={pageContentVariants} className="flex-none py-2 pb-0 md:py-6 lg:py-8 mt-4">
            <motion.h3
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={aboutTechStackHeadingVariants}
              onAnimationComplete={handleTitleAnimation}
              className="text-center pixelated text-sm md:text-base text-gray-800 dark:text-white mb-2 md:mb-6 pt-2 md:pt-0"
            >
              Tech Stacks:
            </motion.h3>
            <div className="relative overflow-hidden flex flex-col items-center gap-2 md:gap-1 lg:gap-6 pb-0 md:pb-6">
              <TechStackRow technologies={techStackRow1} direction="left" titleVisible={titleVisible} />
              <TechStackRow technologies={techStackRow2} direction="right" titleVisible={titleVisible} />
            </div>
          </motion.div>
        </div>
      </motion.div>

      <PortraitModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </PageSection>
  );
};

export default About;
