import React from 'react';
import { motion } from 'framer-motion';

/**
 * ProjectCardSkeleton Component
 * A loading placeholder that mimics the ProjectCard layout.
 * 
 */
const ProjectCardSkeleton = () => {
  // Base styling classes
  const containerClasses = "pixel-card min-h-[600px] flex flex-col justify-between animate-pulse p-6";
  const skeletonBgClasses = "bg-gray-200 dark:bg-gray-700";

  return (
    <div className={containerClasses}>
      {/* Title Placeholder */}
      <div 
        className={`h-8 ${skeletonBgClasses} rounded w-3/4 mx-auto`}
        aria-hidden="true"
      />
      
      {/* Image Placeholder */}
      <div 
        className={`w-full h-[300px] ${skeletonBgClasses} mt-6`}
        aria-hidden="true"
      />
      
      {/* Content Area */}
      <div className="flex-grow flex flex-col justify-between">
        {/* Description Lines */}
        <div className="space-y-3 mt-6">
          <div className={`h-4 ${skeletonBgClasses} rounded w-full`} aria-hidden="true" />
          <div className={`h-4 ${skeletonBgClasses} rounded w-5/6 mx-auto`} aria-hidden="true" />
          <div className={`h-4 ${skeletonBgClasses} rounded w-4/6 mx-auto`} aria-hidden="true" />
        </div>
        
        {/* Bottom Section */}
        <div>
          {/* Tech Stack Badges */}
          <div className="mt-6 flex flex-wrap gap-2 justify-center">
            {[1, 2, 3, 4].map((index) => (
              <div 
                key={index}
                className={`h-6 w-20 ${skeletonBgClasses} rounded`}
                aria-hidden="true"
              />
            ))}
          </div>
          
          {/* Action Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <div 
              className={`h-8 w-24 ${skeletonBgClasses} rounded`}
              aria-hidden="true"
            />
            <div 
              className={`h-8 w-24 ${skeletonBgClasses} rounded`}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardSkeleton; 
