import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-cream/95 backdrop-blur-md shadow-xl border-b border-white/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src="/simeis (1).png" 
            alt="Simeis Synergy Logo" 
            className="h-14 w-14"
          />
          <span className={`text-2xl font-heading ${isScrolled ? 'text-gray-800' : 'text-white drop-shadow-lg'}`}>
            Simeis Synergy
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10">
          {[
            { name: 'Home', id: 'home' },
            { name: 'About', id: 'about' },
            { name: 'Projects', id: 'projects' },
            { name: 'Donate', id: 'donate' },
            { name: 'Contact', id: 'contact' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`font-body font-medium transition-all duration-300 hover:text-orange relative group ${
                isScrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        <button
          onClick={() => scrollToSection('donate')}
          className="hidden md:block bg-orange text-white px-8 py-3 rounded-2xl hover:bg-orange/90 transition-all duration-300 font-body font-semibold transform hover:scale-105 shadow-lg"
        >
          Donate Now
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`md:hidden p-2 rounded-lg transition-all duration-300 ${isScrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-cream/95 backdrop-blur-md shadow-xl border-t border-white/20">
          <nav className="flex flex-col py-6">
            {[
              { name: 'Home', id: 'home' },
              { name: 'About', id: 'about' },
              { name: 'Projects', id: 'projects' },
              { name: 'Donate', id: 'donate' },
              { name: 'Contact', id: 'contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left px-6 py-4 font-body text-gray-700 hover:bg-white/50 hover:text-orange transition-all duration-300 font-medium"
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;