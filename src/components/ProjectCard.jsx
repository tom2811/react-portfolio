import React from 'react';
import { motion } from 'framer-motion';
import ProjectCardSkeleton from './loaders/ProjectCardSkeleton';

/**
 * ProjectCard Component
 * @param {Object} props
 * @param {Object} props.project - Project data
 * @param {Object} props.variants - Animation variants
 * @param {boolean} props.isMobile - Mobile view flag
 * @param {boolean} props.isImageSection - Image section display flag
 * @param {boolean} props.isLoading - Loading state
 * @param {boolean} props.isAllProjects - All projects view flag
 */
const ProjectCard = ({ 
  project,
  variants, 
  isMobile, 
  isImageSection = true,
  isLoading = false,
  isAllProjects = false
}) => {
  if (!project) return null;
  if (isLoading) return <ProjectCardSkeleton isMobile={isMobile} />;

  // Dynamic classes
  const containerClasses = isMobile || isAllProjects
    ? "pixel-card min-h-[600px] flex flex-col justify-between" 
    : "h-fit";

  const descriptionClasses = isMobile
    ? "text-xs sm:text-sm md:text-base mb-6 text-gray-600 dark:text-gray-300 px-2 !transition-none"
    : "text-sm md:text-base mb-6 text-gray-600 dark:text-gray-300 !transition-none";

  const techStackClasses = isMobile
    ? "flex flex-wrap gap-2 mb-6 px-4"
    : "flex flex-wrap gap-2 mb-6";

  // Mobile/Tablet Layout Component
  const MobileContent = () => (
    <>
      <motion.h3 variants={variants} className="text-lg sm:text-xl md:text-2xl font-bold mb-6 text-gray-800 dark:text-white pixelated text-center p-6 pb-0">
        {project.title}
      </motion.h3>

      <motion.div variants={variants} className="w-full mb-6">
        <img src={project.image} alt={project.title} className="w-full h-auto object-contain cursor-pointer nes-pointer" />
      </motion.div>

      <motion.div variants={variants} className="flex flex-col flex-grow justify-between px-4 md:px-6 pt-0">
        <p className={`${descriptionClasses} text-center`}>{project.description}</p>
        <div>
          <motion.div variants={variants} className={`${techStackClasses} justify-center`}>
            {project.techStack.map((tech, index) => (
              <span key={index} className="pixel-badge text-[10px] sm:text-xs md:text-sm px-2 py-1 !transition-none">
                {tech}
              </span>
            ))}
          </motion.div>
          <motion.div variants={variants} className="flex justify-center gap-4">
            <a href={project.github} target="_blank" rel="noopener noreferrer"
               className="pixel-btn primary text-xs sm:text-sm md:text-base px-4 md:px-6 py-2">
              GitHub
            </a>
            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer"
               className="pixel-btn success text-xs sm:text-sm md:text-base px-4 md:px-6 py-2">
              Live Demo
            </a>
          </motion.div>
        </div>
      </motion.div>
    </>
  );

  // All Projects View
  if (isAllProjects) {
    return (
      <motion.div variants={variants} custom={variants?.custom}
                  className="pixel-card min-h-[600px] flex flex-col justify-between">
        <div className="p-6 flex flex-col h-full">
          <MobileContent />
        </div>
      </motion.div>
    );
  }

  // Standard View (Mobile/Desktop)
  return (
    <motion.div variants={variants} className={containerClasses}>
      {isMobile ? (
        <MobileContent />
      ) : (
        isImageSection ? (
          <div>
            <img src={project.image} alt={project.title} 
                 className="w-full h-auto object-contain cursor-pointer nes-pointer" />
          </div>
        ) : (
          <motion.div variants={variants} className="flex flex-col justify-center">
            <motion.h3 variants={variants} 
                      className="text-xl md:text-2xl font-bold mb-4 text-gray-800 dark:text-white pixelated">
              {project.title}
            </motion.h3>
            <motion.p variants={variants} className={descriptionClasses}>
              {project.description}
            </motion.p>
            <motion.div variants={variants} className={techStackClasses}>
              {project.techStack.map((tech, index) => (
                <span key={index} className="pixel-badge !transition-none">{tech}</span>
              ))}
            </motion.div>
            <motion.div variants={variants} className="flex gap-4">
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                 className="pixel-btn primary text-sm md:text-base px-4 md:px-6 py-2">
                GitHub
              </a>
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer"
                 className="pixel-btn success text-sm md:text-base px-4 md:px-6 py-2">
                Live Demo
              </a>
            </motion.div>
          </motion.div>
        )
      )}
    </motion.div>
  );
};

export default ProjectCard;
