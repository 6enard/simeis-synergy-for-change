import React from 'react';
import { Heart } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-lime/20 via-orange/20 to-lime/20 z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Logo */}
        <div className="mb-8 animate-float">
          <img 
            src="/simeis (1).png" 
            alt="Simeis Synergy Logo" 
            className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 mx-auto"
            loading="eager"
            decoding="async"
          />
        </div>
        
        {/* Organization Name */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading text-gray-800 mb-4 animate-fade-in-up">
          Simeis Synergy
          <span className="block text-orange">For Change</span>
        </h1>
        
        {/* Loading Animation */}
        <div className="flex justify-center mb-6">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-lime rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-orange rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-3 h-3 bg-lime rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
        
        {/* Loading Text */}
        <p className="text-gray-600 font-body animate-pulse">
          Empowering communities...
        </p>
        
        {/* Heart Icon */}
        <div className="mt-6 animate-pulse-slow">
          <Heart className="h-8 w-8 text-orange mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;