import React from 'react';
import { ArrowDown, Users, Heart, Star } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Community helping hands"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 "></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
              <img 
                src="/simeis (1).png" 
                alt="Simeis Synergy Logo" 
                className="h-24 w-24"
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading mb-6 leading-tight">
            Simeis Synergy
            <span className="block text-orange">For Change</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-body text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Empowering lives through essential assistance and sustainable support, 
            creating brighter futures for the less fortunate in our community.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <Users className="h-8 w-8 text-orange" />
            </div>
            <div className="text-3xl font-heading text-orange">150+</div>
            <div className="text-sm font-body text-gray-300">Families Helped</div>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <Heart className="h-8 w-8 text-lime" />
            </div>
            <div className="text-3xl font-heading text-lime">5</div>
            <div className="text-sm font-body text-gray-300">Active Projects</div>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <Star className="h-8 w-8 text-yellow-400" />
            </div>
            <div className="text-3xl font-heading text-yellow-400">Youth</div>
            <div className="text-sm font-body text-gray-300">Driven</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={() => scrollToSection('donate')}
            className="bg-orange hover:bg-orange/90 text-white px-8 py-4 rounded-full font-body font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Make a Donation
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-full font-body font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Learn More
          </button>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection('about')}
          className="animate-bounce"
        >
          <ArrowDown className="h-8 w-8 text-white/70 hover:text-white transition-colors duration-200" />
        </button>
      </div>
    </section>
  );
};

export default Hero;