import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path: string, sectionId?: string) => {
    setIsMenuOpen(false);
    if (location.pathname === '/' && sectionId) {
      // If we're on homepage and have a section ID, scroll to it
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-cream/95 backdrop-blur-md shadow-xl border-b border-white/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-5 flex items-center justify-between">
        <Link 
          to="/"
          className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300"
        >
          <img 
            src="/simeis (1).png" 
            alt="Simeis Synergy Logo" 
            className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14"
            loading="eager"
            decoding="async"
          />
          <span className={`text-lg sm:text-xl md:text-2xl font-heading ${isScrolled ? 'text-gray-800' : 'text-white drop-shadow-lg'}`}>
            Simeis Synergy
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6 xl:space-x-10">
          {[
            { name: 'Home', path: '/', sectionId: 'home' },
            { name: 'About', path: '/about', sectionId: 'about' },
            { name: 'Leadership', path: '/leadership', sectionId: 'leadership' },
            { name: 'Projects', path: '/projects', sectionId: 'projects' },
            { name: 'Donate', path: '/donate', sectionId: 'donate' },
            { name: 'Contact', path: '/contact', sectionId: 'contact' }
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => handleNavigation(item.path, item.sectionId)}
              className={`font-body font-medium transition-all duration-300 hover:text-orange relative group ${
                isScrolled ? 'text-gray-700' : 'text-white/90'
              } ${location.pathname === item.path ? 'text-orange' : ''}`}
              }`}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        <Link
          to="/donate"
          className="hidden lg:block bg-orange text-white px-6 xl:px-8 py-2 xl:py-3 rounded-2xl hover:bg-orange/90 transition-all duration-300 font-body font-semibold transform hover:scale-105 shadow-lg text-sm xl:text-base"
        >
          Donate Now
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${isScrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-cream/95 backdrop-blur-md shadow-xl border-t border-white/20">
          <nav className="flex flex-col py-6">
            {[
              { name: 'Home', path: '/', sectionId: 'home' },
              { name: 'About', path: '/about', sectionId: 'about' },
              { name: 'Leadership', path: '/leadership', sectionId: 'leadership' },
              { name: 'Projects', path: '/projects', sectionId: 'projects' },
              { name: 'Donate', path: '/donate', sectionId: 'donate' },
              { name: 'Contact', path: '/contact', sectionId: 'contact' }
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => handleNavigation(item.path, item.sectionId)}
                className={`text-left px-6 py-4 font-body hover:bg-white/50 hover:text-orange transition-all duration-300 font-medium ${
                  location.pathname === item.path ? 'text-orange bg-white/30' : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-6 pt-4">
              <Link
                to="/donate"
                className="w-full bg-orange text-white px-6 py-3 rounded-2xl hover:bg-orange/90 transition-all duration-300 font-body font-semibold"
              >
                Donate Now
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;