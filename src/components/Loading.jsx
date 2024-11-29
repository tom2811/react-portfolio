import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLoading } from '../contexts/LoadingContext';

/**
 * Loading Component
 * @param {Object} props
 * @param {boolean} props.isDarkMode - Current theme state
 * @param {boolean} props.minLoadingTimeComplete - Minimum loading time status
 */
const Loading = ({ isDarkMode, minLoadingTimeComplete }) => {
  const [progress, setProgress] = useState(0);
  const { isFullyLoaded } = useLoading();

  const shouldShowLoading = !isFullyLoaded || !minLoadingTimeComplete || progress < 100;

  useEffect(() => {
    let interval;
    
    if (!isFullyLoaded || !minLoadingTimeComplete) {
      // Initial loading phase (0-90%)
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev < 90) {
            const increment = Math.max(1, (90 - prev) / 10);
            return Math.min(90, prev + increment);
          }
          clearInterval(interval);
          return prev;
        });
      }, 50);
    } else {
      // Final loading phase (90-100%)
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev < 100) return Math.min(100, prev + 2);
          clearInterval(interval);
          return 100;
        });
      }, 30);
    }

    return () => interval && clearInterval(interval);
  }, [isFullyLoaded, minLoadingTimeComplete]);

  return (
    <AnimatePresence>
      {shouldShowLoading && (
        <motion.div 
          className="fixed inset-0 flex flex-col items-center justify-center bg-white dark:bg-[#212529] z-[9999]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-64 md:w-96 px-4">
            <div className="mb-4 text-center">
              <span className={`pixelated text-lg md:text-xl ${isDarkMode ? 'text-white' : 'text-black'}`}>
                Loading...
              </span>
            </div>

            <progress 
              className={`nes-progress h-8 ${isDarkMode ? 'is-warning' : 'is-dark'}`}
              value={progress}
              max="100"
              aria-label="Loading progress"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loading; 
