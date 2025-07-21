import React from 'react';
import { Heart, Users, Leaf, Target, Eye, Compass } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-cream">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading text-gray-800 mb-6 sm:mb-8 tracking-tight">
            About Our <span className="text-lime">Mission</span>
          </h2>
          <p className="text-lg sm:text-xl font-body text-gray-600 max-w-4xl mx-auto font-light leading-relaxed px-2">
            We are a youth-driven charity organization dedicated to uplifting the less fortunate 
            and fostering sustainable growth in our communities.
          </p>
        </div>

        {/* Mission, Vision, Values Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-16 sm:mb-20">
          {/* Mission */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 md:col-span-2 lg:col-span-1">
            <div className="bg-gradient-to-br from-lime/20 to-lime/30 rounded-2xl p-3 sm:p-4 w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 sm:mb-8 flex items-center justify-center">
              <Target className="h-6 w-6 sm:h-8 sm:w-8 text-lime" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-heading text-gray-800 mb-4 sm:mb-6 text-center">Our Mission</h3>
            <p className="font-body text-gray-600 text-center leading-relaxed font-light text-sm sm:text-base">
              Empower lives through the provision of essential assistance and sustainable support to the less fortunate, 
              ultimately paving the way for an enhanced quality of living. Our mission is grounded in inclusive 
              synergetic care for the community, fostering growth and ensuring a better tomorrow for all.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 md:col-span-2 lg:col-span-1">
            <div className="bg-gradient-to-br from-orange/20 to-orange/30 rounded-2xl p-3 sm:p-4 w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 sm:mb-8 flex items-center justify-center">
              <Eye className="h-6 w-6 sm:h-8 sm:w-8 text-orange" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-heading text-gray-800 mb-4 sm:mb-6 text-center">Our Vision</h3>
            <p className="font-body text-gray-600 text-center leading-relaxed font-light text-sm sm:text-base">
              To illuminate the future by synthesizing hope and empowerment, one life at a time. 
              Our vision is to be a beacon of light guided by compassion and abundant resources, 
              creating a world where every individual has the opportunity to thrive and contribute 
              to a positive interconnected society.
            </p>
          </div>

          {/* Values */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 md:col-span-2 lg:col-span-1">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-3 sm:p-4 w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 sm:mb-8 flex items-center justify-center">
              <Compass className="h-6 w-6 sm:h-8 sm:w-8 text-gray-600" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-heading text-gray-800 mb-4 sm:mb-6 text-center">Our Values</h3>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start space-x-3">
                <Heart className="h-5 w-5 text-orange mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-body font-semibold text-gray-800 text-sm sm:text-base">Compassion</h4>
                  <p className="text-xs sm:text-sm font-body text-gray-600 font-light">Nurturing an inclusive empathetic environment where everyone feels valued</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="h-5 w-5 text-lime mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-body font-semibold text-gray-800 text-sm sm:text-base">Collaboration</h4>
                  <p className="text-xs sm:text-sm font-body text-gray-600 font-light">Working together for amplified impact, fostering brighter futures</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Leaf className="h-5 w-5 text-lime mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-body font-semibold text-gray-800 text-sm sm:text-base">Sustainability</h4>
                  <p className="text-xs sm:text-sm font-body text-gray-600 font-light">Ensuring lasting impact through sustained support for community well-being</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Statement */}
        <div className="bg-gradient-to-r from-lime via-orange to-lime rounded-3xl p-8 sm:p-12 md:p-16 text-white text-center shadow-2xl border border-white/20">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading mb-6 sm:mb-8 tracking-tight">Creating Lasting Impact</h3>
          <p className="text-lg sm:text-xl md:text-2xl font-body max-w-5xl mx-auto leading-relaxed font-light px-2">
            Every action we take is driven by our commitment to create sustainable change. 
            We believe in the power of youth to transform communities and build a brighter future 
            for generations to come. Together, we can make a difference that lasts.
          </p>
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => {
                const element = document.getElementById('projects');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-gray-800 px-8 py-3 rounded-2xl font-body font-semibold transition-all duration-300 transform hover:scale-105"
            >
              See Our Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;