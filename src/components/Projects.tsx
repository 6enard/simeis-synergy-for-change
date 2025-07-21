import React from 'react';
import { Calendar, Users, Heart, Home, Utensils, MapPin, ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Mukuru Promotion Centre",
      date: "January 27, 2024",
      description: "We kicked off the year with a heartfelt visit to Mukuru Promotion Centre, where we spent time sharing meals, essentials, and encouragement with children and families living in one of Nairobi's most underserved communities.",
      impact: "Community support",
      icon: Heart,
      image: "https://images.pexels.com/photos/6995251/pexels-photo-6995251.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "Completed",
      location: "Mukuru, Nairobi"
    },
    {
      id: 2,
      title: "Street Outreach in Nairobi CBD",
      date: "February 24, 2024",
      description: "In our ongoing effort to connect with and restore dignity to the homeless community, we carried out a city outreach program, distributing food, hygiene products, and offering conversations filled with hope in the heart of Nairobi.",
      impact: "Homeless support",
      icon: Users,
      image: "https://images.pexels.com/photos/6995007/pexels-photo-6995007.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "Completed",
      location: "Nairobi CBD"
    },
    {
      id: 3,
      title: "Anita Home, North Kajiado",
      date: "March 23, 2024",
      description: "We journeyed to North Kajiado to support Anita Home, a shelter caring for abandoned and vulnerable children. Through this visit, we shared supplies, played with the children, and helped remind them they are not forgotten.",
      impact: "Child welfare",
      icon: Home,
      image: "https://images.pexels.com/photos/8088495/pexels-photo-8088495.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "Completed",
      location: "North Kajiado"
    },
    {
      id: 4,
      title: "Supporting Flood-Affected Families",
      date: "April 2024",
      description: "Responding to the devastating floods that displaced numerous families, we provided emergency aid including food, clothing, and temporary shelter materials to help them rebuild their lives with dignity.",
      impact: "Disaster relief",
      icon: Users,
      image: "https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "Completed",
      location: "Various locations"
    },
    {
      id: 5,
      title: "Serah's Vision Children's Home",
      date: "June 29, 2024",
      description: "Our team visited Serah's Vision Children's Home to share joy and compassion with the children. We brought gifts, food, and spent quality time engaging with them through games and storytelling.",
      impact: "Child development",
      icon: Heart,
      image: "https://images.pexels.com/photos/8088486/pexels-photo-8088486.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "Completed",
      location: "Nairobi"
    },
    {
      id: 6,
      title: "Feeding Families in Tana River",
      date: "July–August 2024",
      description: "During this critical period, we coordinated a food relief program in Tana River County, ensuring that dozens of families facing hunger and hardship received consistent meals and emotional support.",
      impact: "Food security",
      icon: Utensils,
      image: "https://images.pexels.com/photos/6995242/pexels-photo-6995242.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "Completed",
      location: "Tana River County"
    },
    {
      id: 7,
      title: "Flomina Children's Home",
      date: "November 23, 2024",
      description: "In the spirit of giving and gratitude, we reached out to the wonderful children of Flomina Home, offering food, clothes, and school supplies. The smiles we received in return were priceless.",
      impact: "Educational support",
      icon: Home,
      image: "https://images.pexels.com/photos/8088495/pexels-photo-8088495.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "Completed",
      location: "Nairobi"
    },
    {
      id: 8,
      title: "Partnership with FOS at Getathuru Reception Centre",
      date: "February 22, 2025",
      description: "We partnered with FOS to support vulnerable boys at Getathuru Reception Centre. This initiative focused on emotional healing, mentorship, and reintegration support for rescued children.",
      impact: "Youth mentorship",
      icon: Users,
      image: "https://images.pexels.com/photos/6995007/pexels-photo-6995007.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "Upcoming",
      location: "Getathuru"
    },
    {
      id: 9,
      title: "Return Visit to Mukuru Promotion Centre",
      date: "May 31, 2025",
      description: "Revisiting where it all began, we returned to Mukuru Promotion Centre to continue building on our relationship and support. It was a powerful reminder of how much consistent love and presence matter.",
      impact: "Sustained support",
      icon: Heart,
      image: "https://images.pexels.com/photos/6995251/pexels-photo-6995251.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "Upcoming",
      location: "Mukuru, Nairobi"
    },
    {
      id: 10,
      title: "Empowering a Student to Graduate",
      date: "July 29, 2024",
      description: "On this day, we helped a determined girl who lacked the funds for her final exam. Thanks to timely support, she sat for her exam, passed, and graduated — a true story of hope restored and a future reclaimed.",
      impact: "Educational empowerment",
      icon: Heart,
      image: "https://images.pexels.com/photos/8088486/pexels-photo-8088486.jpeg?auto=compress&cs=tinysrgb&w=800",
      status: "Completed",
      location: "Nairobi"
    }
  ];

  const handleProjectClick = (projectId: number) => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setTimeout(() => {
      window.location.hash = `project-${projectId}`;
    }, 300);
  };

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading text-gray-800 mb-4 sm:mb-6 md:mb-8 tracking-tight animate-slide-in-left">
            Our <span className="text-orange">Impact</span> Stories
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-body text-gray-600 max-w-4xl mx-auto font-light leading-relaxed px-2 animate-slide-in-right animate-delay-300">
            Discover the meaningful projects we've undertaken to create positive change 
            in our communities and transform lives across Kenya.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 md:mb-20">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="bg-white rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 sm:hover:-translate-y-3 border border-gray-100 cursor-pointer group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => handleProjectClick(project.id)}
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-32 sm:h-40 md:h-48 lg:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                  <span className={`px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold backdrop-blur-sm ${
                    project.status === 'Completed' 
                      ? 'bg-lime/90 text-white' 
                      : project.status === 'Upcoming'
                      ? 'bg-blue-500/90 text-white'
                      : 'bg-orange/90 text-white'
                  } animate-pulse-slow`}>
                    {project.status}
                  </span>
                </div>
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4">
                  <div className="bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl p-2 sm:p-3 animate-float">
                    <project.icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-lime" />
                  </div>
                </div>
                <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4">
                  <div className="bg-white/90 backdrop-blur-md rounded-full p-1 sm:p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 text-orange" />
                  </div>
                </div>
              </div>
              
              <div className="p-3 sm:p-4 md:p-6 lg:p-8">
                <div className="flex items-center text-xs sm:text-sm font-body text-gray-500 mb-2 sm:mb-3">
                  <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  {project.date}
                </div>
                
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-heading text-gray-800 mb-2 sm:mb-3 md:mb-4 line-clamp-2 animate-typewriter">
                  {project.title}
                </h3>
                
                <p className="font-body text-gray-600 mb-3 sm:mb-4 md:mb-6 leading-relaxed font-light text-xs sm:text-sm md:text-base line-clamp-3 animate-fade-in-up animate-delay-200">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="bg-gradient-to-r from-lime to-orange bg-clip-text text-transparent font-body font-bold text-xs sm:text-sm md:text-base lg:text-lg animate-shimmer">
                    {project.impact}
                  </span>
                </div>
                
                {project.location && (
                  <div className="flex items-center text-xs sm:text-sm font-body text-gray-500 mt-2">
                    <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                    {project.location}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-cream rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 shadow-xl animate-fade-in-up animate-delay-1000">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading text-gray-800 mb-4 sm:mb-6 md:mb-8 tracking-tight animate-pulse-slow">
              Want to Be Part of Our Next Project?
            </h3>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-body text-gray-600 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto font-light leading-relaxed px-2 animate-fade-in-up animate-delay-200">
              Your support helps us reach more communities and create lasting positive impact. 
              Join us in our mission to empower lives and build stronger communities across Kenya.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('donate');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-lime to-orange text-white px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl font-body font-semibold text-sm sm:text-base md:text-lg lg:text-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-shimmer animate-delay-500"
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