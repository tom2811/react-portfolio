import React, { createContext, useContext, useState, useEffect } from 'react';

/**
 * Loading Context
 * Manages the loading state of application assets and theme
 */
const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [assetsLoaded, setAssetsLoaded] = useState({
    content: false
  });

  const setAssetLoaded = (asset) => {
    setAssetsLoaded(prev => ({ ...prev, [asset]: true }));
  };

  const resetLoading = () => {
    setAssetsLoaded({ content: false });
  };

  const isFullyLoaded = Object.values(assetsLoaded).every(Boolean);

  // Initialize theme based on system preferences or stored value
  useEffect(() => {
    const htmlElement = document.documentElement;
    const darkModeEnabled = localStorage.theme === 'dark' || 
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    darkModeEnabled 
      ? htmlElement.classList.add('dark')
      : htmlElement.classList.remove('dark');
  }, []);

  return (
    <LoadingContext.Provider value={{ 
      assetsLoaded, 
      setAssetLoaded, 
      isFullyLoaded,
      resetLoading 
    }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext); 