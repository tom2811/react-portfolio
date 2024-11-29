import React, { useState, Suspense, lazy, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LoadingProvider } from './contexts/LoadingContext';

// Core Components
import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Loading';

// Lazy-loaded Pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));
const AllProjects = lazy(() => import('./pages/AllProjects'));
const NotFound = lazy(() => import('./pages/NotFound'));

/**
 * MainContent Component
 * Handles the main layout and routing of the application
 */
const MainContent = ({ isDarkMode, setIsDarkMode }) => {
  const location = useLocation();
  const [contentLoaded, setContentLoaded] = useState(false);
  const showFooter = ['/', '/projects'].includes(location.pathname);

  useEffect(() => {
    const timer = setTimeout(() => setContentLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      key="content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen relative bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      {contentLoaded && (
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      )}
      
      <Routes>
        {/* Home Route with All Sections */}
        <Route 
          path="/" 
          element={
            <main className="relative">
              <Suspense fallback={null}>
                <Home isDarkMode={isDarkMode} />
                <About isDarkMode={isDarkMode} />
                <Projects isDarkMode={isDarkMode} />
                <Contact isDarkMode={isDarkMode} />
              </Suspense>
            </main>
          } 
        />

        {/* Individual Routes */}
        <Route 
          path="/projects" 
          element={
            <Suspense fallback={null}>
              <AllProjects isDarkMode={isDarkMode} />
            </Suspense>
          } 
        />

        {/* 404 Route */}
        <Route 
          path="*" 
          element={
            <Suspense fallback={null}>
              <NotFound isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            </Suspense>
          } 
        />
      </Routes>

      {contentLoaded && showFooter && <Footer />}
    </motion.div>
  );
};

/**
 * App Component
 * Root component handling theme and loading states
 */
const App = () => {
  // Theme State Management
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

  // Loading State Management
  const [isLoading, setIsLoading] = useState(true);
  const [minLoadingTimeComplete, setMinLoadingTimeComplete] = useState(false);

  // Theme Effect
  useEffect(() => {
    const theme = isDarkMode ? 'dark' : 'light';
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.theme = theme;
  }, [isDarkMode]);

  // Loading Timer Effect
  useEffect(() => {
    const timer = setTimeout(() => setMinLoadingTimeComplete(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LoadingProvider>
      <Router>
        <Loading 
          isDarkMode={isDarkMode} 
          minLoadingTimeComplete={minLoadingTimeComplete}
        />
        <MainContent 
          isDarkMode={isDarkMode} 
          setIsDarkMode={setIsDarkMode} 
        />
      </Router>
    </LoadingProvider>
  );
};

export default App;
