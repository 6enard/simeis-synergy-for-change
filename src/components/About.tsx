import React from 'react';
import { Heart, Users, Leaf, Target, Eye, Compass } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About Our <span className="text-green-600">Mission</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a youth-driven charity organization dedicated to uplifting the less fortunate 
            and fostering sustainable growth in our communities.
          </p>
        </div>

        {/* Mission, Vision, Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Mission */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <Target className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Our Mission</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Empower lives through the provision of essential assistance and sustainable support to the less fortunate, 
              ultimately paving the way for an enhanced quality of living. Our mission is grounded in inclusive 
              synergetic care for the community, fostering growth and ensuring a better tomorrow for all.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <Eye className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Our Vision</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              To illuminate the future by synthesizing hope and empowerment, one life at a time. 
              Our vision is to be a beacon of light guided by compassion and abundant resources, 
              creating a world where every individual has the opportunity to thrive and contribute 
              to a positive interconnected society.
            </p>
          </div>

          {/* Values */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
              <Compass className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Our Values</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Heart className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800">Compassion</h4>
                  <p className="text-sm text-gray-600">Nurturing an inclusive empathetic environment where everyone feels valued</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800">Collaboration</h4>
                  <p className="text-sm text-gray-600">Working together for amplified impact, fostering brighter futures</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Leaf className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800">Sustainability</h4>
                  <p className="text-sm text-gray-600">Ensuring lasting impact through sustained support for community well-being</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Statement */}
        <div className="bg-gradient-to-r from-green-600 to-orange-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Creating Lasting Impact</h3>
          <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Every action we take is driven by our commitment to create sustainable change. 
            We believe in the power of youth to transform communities and build a brighter future 
            for generations to come. Together, we can make a difference that lasts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;