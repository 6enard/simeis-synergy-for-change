import React from 'react';
import { Heart, Facebook, Twitter, Instagram, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Heart className="h-8 w-8 text-orange" />
              <span className="text-2xl font-heading">Simeis Synergy For Change</span>
            </div>
            <p className="font-body text-gray-300 mb-6 leading-relaxed max-w-md">
              A youth-driven charity organization dedicated to empowering lives through essential assistance 
              and sustainable support, creating brighter futures for the less fortunate in our communities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-lime p-3 rounded-full transition-colors duration-200">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-body font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About Us', id: 'about' },
                { name: 'Our Projects', id: 'projects' },
                { name: 'Make a Donation', id: 'donate' },
                { name: 'Contact Us', id: 'contact' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="font-body text-gray-300 hover:text-orange transition-colors duration-200"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-body font-semibold mb-6">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange" />
                <span className="font-body text-gray-300">info@simeissynergy.org</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange" />
                <span className="font-body text-gray-300">+254 700 000 000</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-orange" />
                <span className="font-body text-gray-300">Nairobi, Kenya</span>
              </div>
            </div>

            {/* M-Pesa Details */}
            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <h4 className="font-body font-semibold text-orange mb-2">Donate via M-Pesa</h4>
              <p className="text-sm font-body text-gray-300">Paybill: <span className="font-bold">522522</span></p>
              <p className="text-sm font-body text-gray-300">Account: <span className="font-bold">1111485429</span></p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-body text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Simeis Synergy For Change. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="font-body text-gray-400 hover:text-orange transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="font-body text-gray-400 hover:text-orange transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="font-body text-gray-400 hover:text-orange transition-colors duration-200">
                Transparency Report
              </a>
            </div>
          </div>
          
          <div className="text-center mt-6 pt-6 border-t border-gray-800">
            <p className="font-body text-gray-400 text-sm">
              Made with <Heart className="h-4 w-4 text-orange inline mx-1" /> for our community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;