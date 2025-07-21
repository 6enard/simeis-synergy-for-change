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
        <button 
          onClick={() => scrollToSection('home')}
          className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200"
        >
          <img 
            src="/simeis (1).png" 
            alt="Simeis Synergy Logo" 
            className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14"
          />
          <span className={`text-lg sm:text-xl md:text-2xl font-heading ${isScrolled ? 'text-gray-800' : 'text-white drop-shadow-lg'}`}>
            Simeis Synergy
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6 xl:space-x-10">
          {[
            { name: 'Home', id: 'home' },
            { name: 'About', id: 'about' },
            { name: 'Leadership', id: 'leadership' },
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
          className="hidden lg:block bg-orange text-white px-6 xl:px-8 py-2 xl:py-3 rounded-2xl hover:bg-orange/90 transition-all duration-300 font-body font-semibold transform hover:scale-105 shadow-lg text-sm xl:text-base"
        >
          Donate Now
        </button>

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
              { name: 'Home', id: 'home' },
              { name: 'About', id: 'about' },
              { name: 'Leadership', id: 'leadership' },
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
            <div className="px-6 pt-4">
              <button
                onClick={() => scrollToSection('donate')}
                className="w-full bg-orange text-white px-6 py-3 rounded-2xl hover:bg-orange/90 transition-all duration-300 font-body font-semibold"
              >
                Donate Now
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;