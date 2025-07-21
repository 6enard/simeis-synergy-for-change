import React from 'react';
import { Calendar, Users, Heart, Home, Utensils } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Anita Home Visit",
      date: "March 23, 2024",
      description: "Pad drive initiative to support young women at Anita Home with essential hygiene products and care packages.",
      impact: "Empowering young women",
      icon: Heart,
      image: "https://images.pexels.com/photos/6995251/pexels-photo-6995251.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "Completed"
    },
    {
      id: 2,
      title: "Flood Relief Support",
      date: "2024",
      description: "Supporting families affected by floods through donations to Red Cross for emergency relief and recovery assistance.",
      impact: "Disaster relief support",
      icon: Users,
      image: "https://images.pexels.com/photos/6995007/pexels-photo-6995007.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "Ongoing"
    },
    {
      id: 3,
      title: "Serah's Children Home",
      date: "2024",
      description: "Regular visits to Serah's Children Home providing educational support, recreational activities, and care packages.",
      impact: "Child development support",
      icon: Home,
      image: "https://images.pexels.com/photos/8088495/pexels-photo-8088495.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "Ongoing"
    },
    {
      id: 4,
      title: "Tana River Feeding Program",
      date: "2024",
      description: "Community feeding initiative providing nutritious meals to over 150 households in the Tana River region.",
      impact: "150+ households fed",
      icon: Utensils,
      image: "https://images.pexels.com/photos/6995242/pexels-photo-6995242.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "Completed"
    },
    {
      id: 5,
      title: "Floming Children Home",
      date: "2024",
      description: "Dedicated visits to Floming Children Home with focus on educational mentorship and emotional support.",
      impact: "Educational mentorship",
      icon: Heart,
      image: "https://images.pexels.com/photos/8088486/pexels-photo-8088486.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "Ongoing"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading text-gray-800 mb-6 sm:mb-8 tracking-tight">
            Our <span className="text-orange">Impact</span> Stories
          </h2>
          <p className="text-lg sm:text-xl font-body text-gray-600 max-w-4xl mx-auto font-light leading-relaxed px-2">
            Discover the meaningful projects we've undertaken to create positive change 
            in our communities and transform lives.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-16 sm:mb-20">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 w-full"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 sm:h-56 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-4 py-2 rounded-full text-xs font-semibold backdrop-blur-sm ${
                    project.status === 'Completed' 
                      ? 'bg-lime/90 text-white' 
                      : 'bg-orange/90 text-white'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/90 backdrop-blur-md rounded-2xl p-3">
                    <project.icon className="h-5 w-5 sm:h-6 sm:w-6 text-lime" />
                  </div>
                </div>
              </div>
              
              <div className="p-6 sm:p-8">
                <div className="flex items-center text-xs sm:text-sm font-body text-gray-500 mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  {project.date}
                </div>
                
                <h3 className="text-xl sm:text-2xl font-heading text-gray-800 mb-4">
                  {project.title}
                </h3>
                
                <p className="font-body text-gray-600 mb-6 leading-relaxed font-light text-sm sm:text-base">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="bg-gradient-to-r from-lime to-orange bg-clip-text text-transparent font-body font-bold text-base sm:text-lg">
                    {project.impact}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-cream rounded-3xl p-8 sm:p-12 md:p-16 shadow-xl">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading text-gray-800 mb-6 sm:mb-8 tracking-tight">
              Want to Be Part of Our Next Project?
            </h3>
            <p className="text-lg sm:text-xl font-body text-gray-600 mb-8 sm:mb-10 max-w-3xl mx-auto font-light leading-relaxed px-2">
              Your support helps us reach more communities and create lasting positive impact. 
              Join us in our mission to empower lives and build stronger communities.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('donate');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-lime to-orange text-white px-8 sm:px-12 py-4 sm:py-5 rounded-2xl font-body font-semibold text-lg sm:text-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Support Our Mission
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;