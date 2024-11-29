import React, { useEffect } from "react";
import { PageSection } from "../components/layout/PageSection";
import { usePageAnimation } from "../hooks/usePageAnimation";
import projectsData from "../data/projects.json";
import { TitleBadge } from "../components/badges/TitleBadge";
import { ProjectGrid } from "../components/projects/ProjectGrid";
import { useLoading } from "../contexts/LoadingContext";

/**
 * All Projects Page Component
 * Displays a grid layout of all projects with navigation
 */
const AllProjects = ({ isDarkMode }) => {
  const { projects } = projectsData;
  const { ref, mainControls } = usePageAnimation(true, 0.3);
  const { setAssetLoaded } = useLoading();

  useEffect(() => {
    setAssetLoaded("content");
  }, []);

  return (
    <PageSection
      ref={ref}
      mainControls={mainControls}
      isDarkMode={isDarkMode}
      isAllProjects={true}
      className="bg-gray-200 dark:bg-gray-800 transition-colors duration-500"
    >
      <div className="w-full max-w-[1920px] mx-auto py-8 px-4 sm:px-8 lg:px-16">
        {/* Header with Title and Back Button */}
        <div className="flex justify-between items-start mb-12 max-w-[1440px] mx-auto">
          <div className="flex items-center">
            <TitleBadge isDarkMode={isDarkMode} title="All Projects" />
          </div>
          <div className="flex items-center -mt-3">
            <a href="/" className="pixel-button">Back</a>
          </div>
        </div>

        {/* Projects Grid Layout */}
        <div className="flex justify-center">
          <ProjectGrid projects={projects} isDarkMode={isDarkMode} />
        </div>
      </div>
    </PageSection>
  );
};

export default AllProjects;
