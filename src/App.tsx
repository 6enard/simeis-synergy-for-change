import React from 'react';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import Donate from './components/Donate';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

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

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Donate />
        <Contact />
      </main>
      <Footer />
      
      {selectedProject && (
        <ProjectDetail projectId={selectedProject} onClose={closeProjectDetail} />
      )}
    </div>
  );
}

export default App;