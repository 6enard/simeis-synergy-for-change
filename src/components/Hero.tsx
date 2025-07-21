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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Community helping hands"
          className="w-full h-full object-cover blur-sm"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/20">
              <img 
                src="/simeis (1).png" 
                alt="Simeis Synergy Logo" 
                className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24"
              />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading mb-6 sm:mb-8 leading-tight tracking-tight">
            Simeis Synergy
            <span className="block text-orange drop-shadow-lg">For Change</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 font-body text-white/90 max-w-4xl mx-auto leading-relaxed font-light px-2">
            Empowering lives through essential assistance and sustainable support, 
            creating brighter futures for the less fortunate in our community.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-3">
              <div className="bg-orange/20 backdrop-blur-sm rounded-full p-2 sm:p-3 border border-orange/30">
                <Users className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-orange" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading text-orange drop-shadow-lg">100+</div>
            <div className="text-xs sm:text-sm md:text-base font-body text-white/90 font-medium">Families Helped</div>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-3">
              <div className="bg-lime/20 backdrop-blur-sm rounded-full p-2 sm:p-3 border border-lime/30">
                <Heart className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-lime" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading text-lime drop-shadow-lg">150+</div>
            <div className="text-xs sm:text-sm md:text-base font-body text-white/90 font-medium">Households</div>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-3">
              <div className="bg-yellow-400/20 backdrop-blur-sm rounded-full p-2 sm:p-3 border border-yellow-400/30">
                <Star className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-yellow-400" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading text-yellow-400 drop-shadow-lg">1000+</div>
            <div className="text-xs sm:text-sm md:text-base font-body text-white/90 font-medium">Kids</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-20 px-4">
          <button
            onClick={() => scrollToSection('donate')}
            className="bg-orange hover:bg-orange/90 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-2xl font-body font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl backdrop-blur-sm border border-orange/20"
          >
            Make a Donation
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white hover:text-gray-800 px-8 sm:px-10 py-3 sm:py-4 rounded-2xl font-body font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Learn More
          </button>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection('about')}
          className="animate-bounce bg-white/10 backdrop-blur-sm rounded-full p-2 sm:p-3 hover:bg-white/20 transition-all duration-300"
        >
          <ArrowDown className="h-6 w-6 sm:h-8 sm:w-8 text-white/70 hover:text-white transition-colors duration-200" />
        </button>
      </div>
    </section>
  );
};

export default Hero;