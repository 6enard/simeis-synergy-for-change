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
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our <span className="text-orange-600">Impact</span> Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the meaningful projects we've undertaken to create positive change 
            in our communities and transform lives.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-orange-100 text-orange-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <project.icon className="h-6 w-6 text-green-600" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  {project.date}
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="bg-gradient-to-r from-green-500 to-orange-500 bg-clip-text text-transparent font-semibold">
                    {project.impact}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Want to Be Part of Our Next Project?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Your support helps us reach more communities and create lasting positive impact. 
              Join us in our mission to empower lives and build stronger communities.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('donate');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-green-600 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
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