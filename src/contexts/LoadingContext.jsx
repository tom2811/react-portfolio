import React, { createContext, useContext, useState, useEffect } from 'react';

/**
 * Loading Context
 * Manages the loading state of application assets and theme
 */
const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [assetsLoaded, setAssetsLoaded] = useState({
    content: false,
    themeLoaded: false
  });
  
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const prefersDark = localStorage.theme === 'dark' || 
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    if (prefersDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    return prefersDark;
  });

  const [minLoadingTimeComplete, setMinLoadingTimeComplete] = useState(false);

  const setAssetLoaded = (asset) => {
    setAssetsLoaded(prev => ({ ...prev, [asset]: true }));
  };

  const resetLoading = () => {
    setAssetsLoaded({
      content: false,
      themeLoaded: false
    });
    setMinLoadingTimeComplete(false);
  };

  const isFullyLoaded = assetsLoaded.content && assetsLoaded.themeLoaded;

  useEffect(() => {
    const theme = isDarkMode ? 'dark' : 'light';
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.theme = theme;
  }, [isDarkMode]);

  useEffect(() => {
    const timer = setTimeout(() => setMinLoadingTimeComplete(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const value = {
    isFullyLoaded,
    minLoadingTimeComplete,
    setAssetLoaded,
    resetLoading,
    isDarkMode,
    setIsDarkMode
  };

  return (
    <LoadingContext.Provider value={value}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
}; 