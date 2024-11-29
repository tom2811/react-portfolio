import React from "react";
import { motion } from "framer-motion";
import { PageSection } from "../components/layout/PageSection";
import ProjectCard from "../components/ProjectCard";
import projectsData from "../data/projects.json";
import { TitleBadge } from "../components/badges/TitleBadge";
import { usePageAnimation } from "../hooks/usePageAnimation";
import {
  pageTitleVariants,
  pageContentVariants,
  leftToRightVariants,
  rightToLeftVariants,
  fadeInVariant,
  projectButtonVariants,
} from "../animations/framerMotion";

/**
 * Projects Page Component
 * Displays featured projects with responsive layouts
 */
const Projects = ({ isDarkMode }) => {
  const { projects } = projectsData;
  const { ref, mainControls } = usePageAnimation(true, 0.3);

  return (
    <PageSection
      ref={ref}
      mainControls={mainControls}
      isDarkMode={isDarkMode}
      className="bg-gray-200 dark:bg-gray-800"
      id="projects"
    >
      <motion.div className="w-full max-w-6xl mx-auto flex flex-col min-h-full px-4 md:px-12 lg:px-0 md:max-w-2xl lg:max-w-6xl">
        <div className="flex-1 flex flex-col h-full">
          {/* Title */}
          <motion.div
            variants={pageTitleVariants}
            className="flex-none py-12 md:py-6 lg:py-8 flex justify-center -mt-3 lg:-mt-8"
          >
            <TitleBadge isDarkMode={isDarkMode} title="Featured Project" />
          </motion.div>

          {/* Projects Display */}
          <motion.div 
            variants={pageContentVariants} 
            className="flex-1 flex flex-col justify-center py-4 md:py-16 lg:py-8"
          >
            {/* Mobile Layout */}
            <motion.div 
              variants={leftToRightVariants}
              className="flex flex-col gap-4 lg:hidden"
            >
              <ProjectCard
                project={projects[0]}
                isDarkMode={isDarkMode}
                isMobile={true}
                noBorder={false}
              />
            </motion.div>

            {/* Desktop Layout */}
            <motion.div 
              className="hidden lg:grid lg:grid-cols-2 gap-16"
              variants={pageContentVariants}
            >
              <motion.div variants={fadeInVariant} className="flex flex-col justify-center">
                <motion.div variants={fadeInVariant} className="pixel-card p-6">
                  <ProjectCard
                    project={projects[0]}
                    isDarkMode={isDarkMode}
                    isMobile={false}
                    isImageSection={true}
                    noBorder={true}
                  />
                </motion.div>
              </motion.div>
              <motion.div variants={rightToLeftVariants} className="flex flex-col justify-center">
                <ProjectCard
                  project={projects[0]}
                  isDarkMode={isDarkMode}
                  isMobile={false}
                  isImageSection={false}
                  noBorder={true}
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* View All Projects Button */}
          <motion.div
            variants={projectButtonVariants}
            className="flex-none py-12 md:py-6 lg:py-8 flex justify-center mt-auto"
          >
            <a href="/projects" className="pixel-button">
              View All Projects
            </a>
          </motion.div>
        </div>
      </motion.div>
    </PageSection>
  );
};

export default Projects;
