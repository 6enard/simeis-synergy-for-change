import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ProjectDetail from './components/ProjectDetail';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LeadershipPage from './pages/LeadershipPage';
import ProjectsPage from './pages/ProjectsPage';
import DonatePage from './pages/DonatePage';
import ContactPage from './pages/ContactPage';
import RegisterPage from './pages/RegisterPage';
import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time and wait for critical resources
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Also check if images are loaded
    const images = document.querySelectorAll('img');
    let loadedImages = 0;
    
    const checkAllImagesLoaded = () => {
      loadedImages++;
      if (loadedImages >= Math.min(images.length, 5)) { // Wait for first 5 images
        clearTimeout(timer);
        setTimeout(() => setIsLoading(false), 1000);
      }
    };

    images.forEach(img => {
      if (img.complete) {
        checkAllImagesLoaded();
      } else {
        img.addEventListener('load', checkAllImagesLoaded);
        img.addEventListener('error', checkAllImagesLoaded);
      }
    });

    return () => {
      clearTimeout(timer);
      images.forEach(img => {
        img.removeEventListener('load', checkAllImagesLoaded);
        img.removeEventListener('error', checkAllImagesLoaded);
      });
    };
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#project-')) {
        const projectId = parseInt(hash.replace('#project-', ''));
        if (!isNaN(projectId)) {
          setSelectedProject(projectId);
        }
      }
    };

    // Check initial hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const closeProjectDetail = () => {
    setSelectedProject(null);
    window.location.hash = '';
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <div className="min-h-screen">
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/leadership" element={<LeadershipPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/donate" element={<DonatePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
        <Footer />
        
        {selectedProject && (
          <ProjectDetail projectId={selectedProject} onClose={closeProjectDetail} />
        )}
      </div>
    </Router>
  );
}

export default App;