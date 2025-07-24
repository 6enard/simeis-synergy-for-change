import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Facebook, Twitter, Instagram, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const location = useLocation();

  const handleNavigation = (path: string, sectionId?: string) => {
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
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link 
              to="/"
              className="flex items-center space-x-2 mb-6 hover:scale-105 transition-transform duration-300"
            >
              <img 
                src="/simeis (1).png" 
                alt="Simeis Synergy Logo" 
                className="h-10 w-10 sm:h-12 sm:w-12 animate-float"
                loading="lazy"
                decoding="async"
              />
              <span className="text-lg sm:text-xl lg:text-2xl font-heading animate-typewriter">Simeis Synergy For Change</span>
            </Link>
            <p className="font-body text-gray-300 mb-6 leading-relaxed max-w-md text-sm sm:text-base animate-fade-in-up animate-delay-200">
              A youth-driven charity organization dedicated to empowering lives through essential assistance 
              and sustainable support, creating brighter futures for the less fortunate in our communities.
            </p>
            <div className="flex space-x-4 animate-fade-in-up animate-delay-500">
              <a href="#" className="bg-gray-800 hover:bg-gray-700 p-2 sm:p-3 rounded-full transition-colors duration-200">
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-gray-700 p-2 sm:p-3 rounded-full transition-colors duration-200">
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-gray-700 p-2 sm:p-3 rounded-full transition-colors duration-200">
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-lime p-2 sm:p-3 rounded-full transition-colors duration-200">
                <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up animate-delay-300">
            <h3 className="text-base sm:text-lg font-body font-semibold mb-4 sm:mb-6 animate-typewriter">Quick Links</h3>
            <ul className="space-y-3 animate-fade-in-up animate-delay-500">
              {[
                { name: 'Home', path: '/', sectionId: 'home' },
                { name: 'About Us', path: '/about', sectionId: 'about' },
                { name: 'Our Leadership', path: '/leadership', sectionId: 'leadership' },
                { name: 'Our Projects', path: '/projects', sectionId: 'projects' },
                { name: 'Make a Donation', path: '/donate', sectionId: 'donate' },
                { name: 'Contact Us', path: '/contact', sectionId: 'contact' }
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => handleNavigation(item.path, item.sectionId)}
                    className="font-body text-gray-300 hover:text-orange transition-colors duration-200 text-sm sm:text-base"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-up animate-delay-700">
            <h3 className="text-base sm:text-lg font-body font-semibold mb-4 sm:mb-6 animate-typewriter animate-delay-300">Get In Touch</h3>
            <div className="space-y-3 animate-fade-in-up animate-delay-1000">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange" />
                <span className="font-body text-gray-300 text-sm sm:text-base">simesynergyforchange@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange" />
                <div className="flex flex-col">
                  <span className="font-body text-gray-300 text-sm sm:text-base">+254 713 773 070</span>
                  <span className="font-body text-gray-300 text-sm sm:text-base">+254 757 308 547</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-orange" />
                <span className="font-body text-gray-300 text-sm sm:text-base">Nairobi, Kenya</span>
              </div>
            </div>

            {/* M-Pesa Details */}
            <div className="mt-6 p-4 bg-gray-800 rounded-lg animate-shimmer animate-delay-1000">
              <h4 className="font-body font-semibold text-orange mb-2 text-sm sm:text-base animate-pulse-slow">Donate via M-Pesa</h4>
              <p className="text-xs sm:text-sm font-body text-gray-300">Paybill: <span className="font-bold">522522</span></p>
              <p className="text-xs sm:text-sm font-body text-gray-300">Account: <span className="font-bold">1111485429</span></p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-body text-gray-400 text-xs sm:text-sm mb-4 md:mb-0 text-center md:text-left animate-fade-in-up">
              © 2024 Simeis Synergy For Change. All rights reserved.
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm animate-fade-in-up animate-delay-200">
              <a href="#" className="font-body text-gray-400 hover:text-orange transition-colors duration-200 text-center">
                Privacy Policy
              </a>
              <a href="#" className="font-body text-gray-400 hover:text-orange transition-colors duration-200 text-center">
                Terms of Service
              </a>
              <a href="#" className="font-body text-gray-400 hover:text-orange transition-colors duration-200 text-center">
                Transparency Report
              </a>
            </div>
          </div>
          
          <div className="text-center mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-800 animate-fade-in-up animate-delay-500">
            <p className="font-body text-gray-400 text-xs sm:text-sm">
              Made with <Heart className="h-4 w-4 text-orange inline mx-1 animate-pulse-slow" /> for our community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;