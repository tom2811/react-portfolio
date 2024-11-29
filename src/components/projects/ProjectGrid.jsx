import React, { useState, useEffect } from "react";
import ProjectCard from "../ProjectCard";

/**
 * ProjectGrid Component
 * Displays a responsive grid of project cards with loading states.
 * 
 * @param {Object} props
 * @param {Array} props.projects - Array of project objects
 * @param {boolean} props.isDarkMode - Theme state
 */
export const ProjectGrid = ({ projects, isDarkMode }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [imagesLoaded, setImagesLoaded] = useState({});

  // Handle responsive layout
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Preload project images
  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = projects.map((project) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = () => {
            setImagesLoaded((prev) => ({ ...prev, [project.id]: true }));
            resolve();
          };
          img.src = project.image;
        });
      });

      await Promise.all(imagePromises);
    };

    loadImages();
  }, [projects]);

  if (!projects || projects.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 w-full max-w-[1440px]">
      {projects.map((project, index) => (
        <div
          key={project.id || index}
          className="md:max-w-[600px] lg:max-w-[600px] mx-auto w-full"
        >
          <ProjectCard
            project={project}
            isDarkMode={isDarkMode}
            isMobile={isMobile}
            isLoading={!imagesLoaded[project.id]}
            className="w-full"
            isAllProjects={true}
          />
        </div>
      ))}
    </div>
  );
};
