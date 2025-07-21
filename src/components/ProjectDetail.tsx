import React, { useState } from 'react';
import { ArrowLeft, Calendar, MapPin, Users, Heart, Home, Utensils, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectDetailProps {
  projectId: number;
  onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ projectId, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Mukuru Promotion Centre",
      date: "January 27, 2024",
      location: "Mukuru, Nairobi",
      description: "We kicked off the year with a heartfelt visit to Mukuru Promotion Centre, where we spent time sharing meals, essentials, and encouragement with children and families living in one of Nairobi's most underserved communities.",
      fullDescription: "Our first project of 2024 took us to Mukuru Promotion Centre, one of Nairobi's most underserved communities. This visit was more than just a charitable act; it was about building genuine connections with families who face daily challenges. We shared nutritious meals, distributed essential supplies including hygiene products, clothing, and educational materials. The children's laughter and the gratitude of the families reminded us why this work is so important. We spent quality time playing games, sharing stories, and listening to the community's needs. This visit laid the foundation for our ongoing relationship with the Mukuru community.",
      impact: "Community support",
      icon: Heart,
      beneficiaries: "50+ families",
      volunteers: "15 volunteers",
      gallery: [
        "https://images.pexels.com/photos/6995251/pexels-photo-6995251.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/8088495/pexels-photo-8088495.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/6995007/pexels-photo-6995007.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/8088486/pexels-photo-8088486.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/6995242/pexels-photo-6995242.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    {
      id: 2,
      title: "Street Outreach in Nairobi CBD",
      date: "February 24, 2024",
      location: "Nairobi CBD",
      description: "In our ongoing effort to connect with and restore dignity to the homeless community, we carried out a city outreach program, distributing food, hygiene products, and offering conversations filled with hope in the heart of Nairobi.",
      fullDescription: "Our street outreach program in Nairobi's Central Business District was designed to restore dignity and hope to our homeless brothers and sisters. We walked the streets with backpacks full of hot meals, hygiene kits, blankets, and most importantly, open hearts ready to listen. Each conversation was an opportunity to remind someone that they matter, that they are seen, and that they are not forgotten. We distributed over 100 meal packages and hygiene kits, but the real impact came from the human connections we made. Many of the people we met shared their stories, their struggles, and their dreams. This outreach reinforced our belief that everyone deserves compassion and respect, regardless of their circumstances.",
      impact: "Homeless support",
      icon: Users,
      beneficiaries: "100+ individuals",
      volunteers: "20 volunteers",
      gallery: [
        "https://images.pexels.com/photos/6995007/pexels-photo-6995007.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/6995251/pexels-photo-6995251.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/8088495/pexels-photo-8088495.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    {
      id: 3,
      title: "Anita Home, North Kajiado",
      date: "March 23, 2024",
      location: "North Kajiado",
      description: "We journeyed to North Kajiado to support Anita Home, a shelter caring for abandoned and vulnerable children. Through this visit, we shared supplies, played with the children, and helped remind them they are not forgotten.",
      fullDescription: "Our journey to Anita Home in North Kajiado was both heartbreaking and inspiring. This shelter provides a safe haven for abandoned and vulnerable children who have faced unimaginable challenges. We arrived with supplies including food, clothing, educational materials, and toys, but we left with so much more - touched by the resilience and joy of these incredible children. We spent the day playing games, helping with homework, sharing meals, and simply being present. The children taught us about strength, hope, and the power of community. We also worked with the caregivers to understand their ongoing needs and how we can provide sustained support. This visit reinforced our commitment to child welfare and protection.",
      impact: "Child welfare",
      icon: Home,
      beneficiaries: "30 children",
      volunteers: "12 volunteers",
      gallery: [
        "https://images.pexels.com/photos/8088495/pexels-photo-8088495.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/8088486/pexels-photo-8088486.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/6995251/pexels-photo-6995251.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    }
    // Add more projects as needed...
  ];

  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
          <h3 className="text-xl font-heading text-gray-800 mb-4">Project Not Found</h3>
          <button
            onClick={onClose}
            className="bg-orange text-white px-6 py-2 rounded-lg font-body font-semibold hover:bg-orange/90 transition-colors duration-200"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  const openGallery = (index: number) => {
    setCurrentImageIndex(index);
    setIsGalleryOpen(true);
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-y-auto">
        <div className="min-h-screen py-4 sm:py-8 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="relative">
              <img
                src={project.gallery[0]}
                alt={project.title}
                className="w-full h-48 sm:h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <button
                onClick={onClose}
                className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors duration-200"
              >
                <ArrowLeft className="h-5 w-5 sm:h-6 sm:w-6 text-gray-800" />
              </button>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading mb-2">{project.title}</h1>
                <div className="flex flex-wrap items-center gap-4 text-sm sm:text-base">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    {project.date}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    {project.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 md:p-12">
              {/* Project Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
                <div className="bg-lime/10 rounded-xl p-4 sm:p-6 text-center">
                  <project.icon className="h-8 w-8 sm:h-10 sm:w-10 text-lime mx-auto mb-3" />
                  <div className="text-lg sm:text-xl font-heading text-gray-800">{project.impact}</div>
                  <div className="text-sm font-body text-gray-600">Impact Area</div>
                </div>
                <div className="bg-orange/10 rounded-xl p-4 sm:p-6 text-center">
                  <Users className="h-8 w-8 sm:h-10 sm:w-10 text-orange mx-auto mb-3" />
                  <div className="text-lg sm:text-xl font-heading text-gray-800">{project.beneficiaries}</div>
                  <div className="text-sm font-body text-gray-600">Beneficiaries</div>
                </div>
                <div className="bg-gray-100 rounded-xl p-4 sm:p-6 text-center">
                  <Heart className="h-8 w-8 sm:h-10 sm:w-10 text-gray-600 mx-auto mb-3" />
                  <div className="text-lg sm:text-xl font-heading text-gray-800">{project.volunteers}</div>
                  <div className="text-sm font-body text-gray-600">Volunteers</div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8 sm:mb-12">
                <h2 className="text-xl sm:text-2xl font-heading text-gray-800 mb-4 sm:mb-6">About This Project</h2>
                <p className="font-body text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg">
                  {project.fullDescription}
                </p>
              </div>

              {/* Photo Gallery */}
              <div className="mb-8 sm:mb-12">
                <h2 className="text-xl sm:text-2xl font-heading text-gray-800 mb-4 sm:mb-6">Photo Gallery</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                  {project.gallery.map((image, index) => (
                    <div
                      key={index}
                      className="relative aspect-square rounded-lg sm:rounded-xl overflow-hidden cursor-pointer group"
                      onClick={() => openGallery(index)}
                    >
                      <img
                        src={image}
                        alt={`${project.title} - Photo ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-lime/20 to-orange/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center">
                <h3 className="text-lg sm:text-xl md:text-2xl font-heading text-gray-800 mb-4">
                  Inspired by This Project?
                </h3>
                <p className="font-body text-gray-600 mb-6 text-sm sm:text-base">
                  Your support helps us continue making a difference in communities across Kenya.
                </p>
                <button
                  onClick={() => {
                    onClose();
                    setTimeout(() => {
                      const element = document.getElementById('donate');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="bg-gradient-to-r from-lime to-orange text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-body font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                >
                  Support Our Mission
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      {isGalleryOpen && (
        <div className="fixed inset-0 bg-black/90 z-60 flex items-center justify-center p-4">
          <button
            onClick={() => setIsGalleryOpen(false)}
            className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors duration-200"
          >
            <X className="h-6 w-6" />
          </button>
          
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors duration-200"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors duration-200"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="max-w-4xl max-h-full">
            <img
              src={project.gallery[currentImageIndex]}
              alt={`${project.title} - Photo ${currentImageIndex + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <div className="text-center mt-4 text-white">
              <span className="text-sm">
                {currentImageIndex + 1} of {project.gallery.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectDetail;