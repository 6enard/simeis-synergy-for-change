import React, { useState } from 'react';
import { ArrowLeft, Calendar, MapPin, Users, Heart, Home, Utensils, X, ChevronLeft, ChevronRight, Target, Eye } from 'lucide-react';

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
      fullDescription: "Our first project of 2024 took us to Mukuru Promotion Centre, one of Nairobi's most underserved communities. This visit was more than just a charitable act; it was about building genuine connections with families who face daily challenges. We shared nutritious meals, distributed essential supplies including hygiene products, clothing, and educational materials. The children's laughter and the gratitude of the families reminded us why this work is so important. We spent quality time playing games, sharing stories, and listening to the community's needs. This visit laid the foundation for our ongoing relationship with the Mukuru community, showing them that they are not forgotten and that there are people who care about their wellbeing.",
      impact: "Community support",
      icon: Heart,
      beneficiaries: "50+ families",
      volunteers: "15 volunteers",
      status: "Completed",
      gallery: [
        "/all.jpg",
        "/mukuru2.jpg",
        "/mukuru3.jpg",
        "/mukuru4.jpg",
        "/mukuru5.jpg"
      ]
    },
    {
      id: 2,
      title: "Street Outreach in Nairobi CBD",
      date: "February 24, 2024",
      location: "Nairobi CBD",
      description: "In our ongoing effort to connect with and restore dignity to the homeless community, we carried out a city outreach program, distributing food, hygiene products, and offering conversations filled with hope in the heart of Nairobi.",
      fullDescription: "Our street outreach program in Nairobi's Central Business District was designed to restore dignity and hope to our homeless brothers and sisters. We walked the streets with backpacks full of hot meals, hygiene kits, blankets, and most importantly, open hearts ready to listen. Each conversation was an opportunity to remind someone that they matter, that they are seen, and that they are not forgotten. We distributed over 100 meal packages and hygiene kits, but the real impact came from the human connections we made. Many of the people we met shared their stories, their struggles, and their dreams. This outreach reinforced our belief that everyone deserves compassion and respect, regardless of their circumstances. The experience taught us that sometimes the most powerful gift we can give is simply our presence and genuine care.",
      impact: "Homeless support",
      icon: Users,
      beneficiaries: "100+ individuals",
      volunteers: "20 volunteers",
      status: "Completed",
      gallery: [
        "/street1.jpg",
        "/streetvid1.mp4",
        "/streetvid4.mp4",
        "/streetvid8.mp4",
        "/streetvid13.mp4"
      ]
    },
    {
      id: 3,
      title: "Anita Home, North Kajiado",
      date: "March 23, 2024",
      location: "North Kajiado",
      description: "We journeyed to North Kajiado to support Anita Home, a shelter caring for abandoned and vulnerable children. Through this visit, we shared supplies, played with the children, and helped remind them they are not forgotten.",
      fullDescription: "Our journey to Anita Home in North Kajiado was both heartbreaking and inspiring. This shelter provides a safe haven for abandoned and vulnerable children who have faced unimaginable challenges. We arrived with supplies including food, clothing, educational materials, and toys, but we left with so much more - touched by the resilience and joy of these incredible children. We spent the day playing games, helping with homework, sharing meals, and simply being present. The children taught us about strength, hope, and the power of community. We also worked with the caregivers to understand their ongoing needs and how we can provide sustained support. This visit reinforced our commitment to child welfare and protection, showing us that every child deserves love, care, and the opportunity to dream of a better future.",
      impact: "Child welfare",
      icon: Home,
      beneficiaries: "30 children",
      volunteers: "12 volunteers",
      status: "Completed",
      gallery: [
        "https://images.pexels.com/photos/8088495/pexels-photo-8088495.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/8088486/pexels-photo-8088486.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/6995251/pexels-photo-6995251.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/6995007/pexels-photo-6995007.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    {
      id: 4,
      title: "Supporting Flood-Affected Families",
      date: "April 2024",
      location: "Various locations",
      description: "Responding to the devastating floods that displaced numerous families, we provided emergency aid including food, clothing, and temporary shelter materials to help them rebuild their lives with dignity.",
      fullDescription: "When devastating floods struck Kenya in April 2024, displacing thousands of families, we knew we had to act quickly. Our emergency response team mobilized within hours to provide critical aid to those who had lost everything. We distributed emergency food packages, clean water, clothing, blankets, and temporary shelter materials to families who found themselves homeless overnight. Beyond the physical aid, we provided emotional support and helped connect families with longer-term assistance programs. This crisis response taught us the importance of being prepared for emergencies and having systems in place to respond rapidly when disaster strikes. The resilience and gratitude of the affected families inspired us to strengthen our disaster preparedness and response capabilities for future emergencies.",
      impact: "Disaster relief",
      icon: Users,
      beneficiaries: "200+ families",
      volunteers: "25 volunteers",
      status: "Completed",
      gallery: [
        "https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/6995007/pexels-photo-6995007.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/6995251/pexels-photo-6995251.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/8088495/pexels-photo-8088495.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    {
      id: 5,
      title: "Serah's Vision Children's Home",
      date: "June 29, 2024",
      location: "Nairobi",
      description: "Our team visited Serah's Vision Children's Home to share joy and compassion with the children. We brought gifts, food, and spent quality time engaging with them through games and storytelling.",
      fullDescription: "Our visit to Serah's Vision Children's Home was filled with laughter, joy, and meaningful connections. We arrived with bags full of gifts, nutritious food, and hearts ready to share love with these amazing children. The day was spent playing games, telling stories, helping with homework, and simply enjoying each other's company. We organized fun activities including art sessions, music time, and outdoor games that brought smiles to every child's face. The children shared their dreams and aspirations with us, reminding us of the importance of nurturing hope and ambition in young hearts. We also worked with the home's staff to understand their ongoing needs and how we can provide continued support. This visit reinforced our belief that every child deserves love, attention, and the opportunity to feel special and valued.",
      impact: "Child development",
      icon: Heart,
      beneficiaries: "40 children",
      volunteers: "18 volunteers",
      status: "Completed",
      gallery: [
        "https://images.pexels.com/photos/8088486/pexels-photo-8088486.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/8088495/pexels-photo-8088495.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/6995251/pexels-photo-6995251.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/6995007/pexels-photo-6995007.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    {
      id: 6,
      title: "Feeding Families in Tana River",
      date: "July–August 2024",
      location: "Tana River County",
      description: "During this critical period, we coordinated a food relief program in Tana River County, ensuring that dozens of families facing hunger and hardship received consistent meals and emotional support.",
      fullDescription: "The food crisis in Tana River County during July and August 2024 called for sustained intervention. We established a comprehensive feeding program that went beyond just providing meals - we created a support system for families facing severe hardship. Our team worked tirelessly to ensure consistent food distribution, reaching remote areas where families had limited access to resources. We provided nutritious meals, clean water, and essential supplies while also offering emotional support and hope to families struggling with food insecurity. The program involved local community leaders to ensure sustainability and cultural sensitivity. We witnessed incredible resilience from the families we served, and their strength motivated us to continue our efforts. This extended program taught us the importance of long-term commitment and the power of consistent support in creating lasting change.",
      impact: "Food security",
      icon: Utensils,
      beneficiaries: "80+ families",
      volunteers: "22 volunteers",
      status: "Completed",
      gallery: [
        "https://images.pexels.com/photos/6995242/pexels-photo-6995242.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/6995007/pexels-photo-6995007.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/6995251/pexels-photo-6995251.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/8088495/pexels-photo-8088495.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    {
      id: 7,
      title: "Flomina Children's Home",
      date: "November 23, 2024",
      location: "Nairobi",
      description: "In the spirit of giving and gratitude, we reached out to the wonderful children of Flomina Home, offering food, clothes, and school supplies. The smiles we received in return were priceless.",
      fullDescription: "Our visit to Flomina Children's Home in November was perfectly timed for the season of gratitude and giving. We arrived with bags full of food, new clothes, school supplies, and hearts full of love for these incredible children. The day was spent in celebration - we shared meals together, helped the children try on their new clothes, and organized their school supplies for the upcoming term. We also spent time reading with the younger children and helping the older ones with their homework. The joy and gratitude expressed by the children was overwhelming and reminded us of the simple power of showing up and caring. We organized games and activities that brought laughter and excitement to their day. The staff shared stories of each child's progress and dreams, reinforcing our commitment to supporting their educational and personal development. This visit strengthened our resolve to continue supporting children's homes and ensuring every child feels valued and loved.",
      impact: "Educational support",
      icon: Home,
      beneficiaries: "35 children",
      volunteers: "16 volunteers",
      status: "Completed",
      gallery: [
        "https://images.pexels.com/photos/8088495/pexels-photo-8088495.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/8088486/pexels-photo-8088486.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/6995251/pexels-photo-6995251.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    {
      id: 8,
      title: "Partnership with FOS at Getathuru Reception Centre",
      date: "February 22, 2025",
      location: "Getathuru",
      description: "We partnered with FOS to support vulnerable boys at Getathuru Reception Centre. This initiative focused on emotional healing, mentorship, and reintegration support for rescued children.",
      fullDescription: "Our partnership with Friends of Society (FOS) at Getathuru Reception Centre represents a significant step in our commitment to supporting vulnerable youth. This collaboration focuses on providing comprehensive support to boys who have been rescued from difficult situations and are working toward reintegration into society. Our approach combines emotional healing, mentorship, life skills training, and educational support. We work closely with professional counselors and social workers to ensure each boy receives the individualized attention they need. The program includes group therapy sessions, one-on-one mentoring, vocational training opportunities, and recreational activities that help build confidence and social skills. This partnership has taught us the importance of holistic support systems and the power of collaboration in creating lasting change. We're committed to walking alongside these young men as they rebuild their lives and work toward a brighter future.",
      impact: "Youth mentorship",
      icon: Users,
      beneficiaries: "25 boys",
      volunteers: "14 volunteers",
      status: "Upcoming",
      gallery: [
        "https://images.pexels.com/photos/6995007/pexels-photo-6995007.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/8088495/pexels-photo-8088495.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/6995251/pexels-photo-6995251.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    {
      id: 9,
      title: "Return Visit to Mukuru Promotion Centre",
      date: "May 31, 2025",
      location: "Mukuru, Nairobi",
      description: "Revisiting where it all began, we returned to Mukuru Promotion Centre to continue building on our relationship and support. It was a powerful reminder of how much consistent love and presence matter.",
      fullDescription: "Returning to Mukuru Promotion Centre where our journey began was both nostalgic and inspiring. This follow-up visit demonstrated our commitment to building lasting relationships rather than one-time interventions. We were welcomed back with open arms by families who remembered us from our first visit, and it was incredible to see the progress and positive changes that had occurred. We brought additional supplies, continued our feeding program, and spent quality time catching up with the children and families we had met before. New families had also joined the community, and we were able to extend our support to them as well. This visit reinforced the importance of consistency and follow-through in community work. We learned about new challenges the community was facing and were able to adapt our support accordingly. The relationships we've built here continue to be a source of inspiration and motivation for all our work.",
      impact: "Sustained support",
      icon: Heart,
      beneficiaries: "60+ families",
      volunteers: "18 volunteers",
      status: "Upcoming",
      gallery: [
        "https://images.pexels.com/photos/6995251/pexels-photo-6995251.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/8088495/pexels-photo-8088495.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/6995007/pexels-photo-6995007.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/8088486/pexels-photo-8088486.jpeg?auto=compress&cs=tinysrgb&w=800"
      ]
    },
    {
      id: 10,
      title: "Empowering a Student to Graduate",
      date: "July 29, 2024",
      location: "Nairobi",
      description: "On this day, we helped a determined girl who lacked the funds for her final exam. Thanks to timely support, she sat for her exam, passed, and graduated — a true story of hope restored and a future reclaimed.",
      fullDescription: "This project represents one of our most impactful individual interventions. We met a determined young woman who was on the verge of missing her final examinations due to lack of funds - a situation that would have derailed years of hard work and dedication. Her story touched our hearts: despite facing numerous challenges, she had maintained excellent grades and was just one step away from graduation. We immediately stepped in to cover her examination fees and provided additional support for her final preparations. The day she sat for her exams was filled with nervous excitement, but her determination was evident. When the results came out and she had not only passed but excelled, the joy was indescribable. Her graduation day was a celebration not just for her, but for everyone who believes in the power of education and second chances. This experience reinforced our commitment to educational support and showed us how sometimes a small intervention at the right moment can change the entire trajectory of someone's life. She has since gone on to pursue further education and has become an advocate for supporting other students in similar situations.",
      impact: "Educational empowerment",
      icon: Target,
      beneficiaries: "1 student",
      volunteers: "3 volunteers",
      status: "Completed",
      gallery: [
        "/student1.jpg",
        "/student2.jpg",
        "/student3.jpg",
        "/student4.jpg"
      ]
    }
  ];

  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
          <h3 className="text-xl font-heading text-gray-800 mb-4">Project Not Found</h3>
          <p className="text-gray-600 mb-6">The project you're looking for doesn't exist.</p>
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
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <button
                onClick={onClose}
                className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors duration-200 shadow-lg"
              >
                <ArrowLeft className="h-5 w-5 sm:h-6 sm:w-6 text-gray-800" />
              </button>
              <div className="absolute top-4 right-4">
                <span className={`px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold backdrop-blur-sm shadow-lg ${
                  project.status === 'Completed' 
                    ? 'bg-lime/90 text-white' 
                    : 'bg-blue-500/90 text-white'
                }`}>
                  {project.status}
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading mb-2 drop-shadow-lg">{project.title}</h1>
                <div className="flex flex-wrap items-center gap-4 text-sm sm:text-base">
                  <div className="flex items-center bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
                    <Calendar className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    {project.date}
                  </div>
                  <div className="flex items-center bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
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
                <div className="bg-gradient-to-br from-lime/10 to-lime/20 rounded-xl p-4 sm:p-6 text-center border border-lime/20">
                  <project.icon className="h-8 w-8 sm:h-10 sm:w-10 text-lime mx-auto mb-3" />
                  <div className="text-lg sm:text-xl font-heading text-gray-800">{project.impact}</div>
                  <div className="text-sm font-body text-gray-600">Impact Area</div>
                </div>
                <div className="bg-gradient-to-br from-orange/10 to-orange/20 rounded-xl p-4 sm:p-6 text-center border border-orange/20">
                  <Users className="h-8 w-8 sm:h-10 sm:w-10 text-orange mx-auto mb-3" />
                  <div className="text-lg sm:text-xl font-heading text-gray-800">{project.beneficiaries}</div>
                  <div className="text-sm font-body text-gray-600">Beneficiaries</div>
                </div>
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-4 sm:p-6 text-center border border-gray-200">
                  <Heart className="h-8 w-8 sm:h-10 sm:w-10 text-gray-600 mx-auto mb-3" />
                  <div className="text-lg sm:text-xl font-heading text-gray-800">{project.volunteers}</div>
                  <div className="text-sm font-body text-gray-600">Volunteers</div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8 sm:mb-12">
                <h2 className="text-xl sm:text-2xl font-heading text-gray-800 mb-4 sm:mb-6 flex items-center">
                  <Eye className="h-6 w-6 text-orange mr-3" />
                  About This Project
                </h2>
                <div className="bg-cream rounded-xl p-6 sm:p-8">
                  <p className="font-body text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
                    {project.fullDescription}
                  </p>
                </div>
              </div>

              {/* Photo Gallery */}
              <div className="mb-8 sm:mb-12">
                <h2 className="text-xl sm:text-2xl font-heading text-gray-800 mb-4 sm:mb-6 flex items-center">
                  <Target className="h-6 w-6 text-lime mr-3" />
                  Photo Gallery
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                  {project.gallery.map((image, index) => (
                    <div
                      key={index}
                      className="relative aspect-square rounded-lg sm:rounded-xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-xl transition-all duration-300"
                      onClick={() => openGallery(index)}
                    >
                      {image.endsWith('.mp4') ? (
                        <video
                      <div className="relative w-full h-full bg-gray-200 flex items-center justify-center">
                        <video
                          src={image}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          muted
                          playsInline
                          preload="none"
                          poster=""
                          onLoadStart={(e) => {
                            const video = e.target as HTMLVideoElement;
                            video.currentTime = 0.1;
                          }}
                        />
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                          <div className="bg-white/90 rounded-full p-3">
                            <svg className="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                        <img
                          src={image}
                        src={`${image}${image.includes('pexels.com') ? '?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' : ''}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          loading="lazy"
                        loading="eager"
                        />
                        onError={(e) => {
                          const img = e.target as HTMLImageElement;
                          img.src = image; // Fallback to original if optimized fails
                        }}
                      )}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    {!image.endsWith('.mp4') && (
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-2">
                          <Eye className="h-5 w-5 text-gray-800" />
                        </div>
                      </div>
                    )}
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-lime/20 via-orange/20 to-lime/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center border border-orange/20">
                <Heart className="h-12 w-12 text-orange mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-heading text-gray-800 mb-4">
                  Inspired by This Project?
                </h3>
                <p className="font-body text-gray-600 mb-6 text-sm sm:text-base max-w-2xl mx-auto">
                  Your support helps us continue making a difference in communities across Kenya. 
                  Join us in creating lasting positive change.
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
        <div className="fixed inset-0 bg-black/95 z-60 flex items-center justify-center p-4">
          <button
            onClick={() => setIsGalleryOpen(false)}
            className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-colors duration-200 z-10"
          >
            <X className="h-6 w-6" />
          </button>
          
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-colors duration-200 z-10"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-colors duration-200 z-10"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="max-w-5xl max-h-full flex flex-col items-center">
            {project.gallery[currentImageIndex].endsWith('.mp4') ? (
              <div className="relative max-w-full max-h-[80vh]">
                <video
                  src={project.gallery[currentImageIndex]}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                  controls
                  autoPlay
                  preload="metadata"
                  muted
                  playsInline
                  onLoadStart={(e) => {
                    const video = e.target as HTMLVideoElement;
                    // Reduce quality for mobile
                    if (window.innerWidth < 768) {
                      video.style.maxWidth = '100vw';
                      video.style.maxHeight = '60vh';
                    }
                  }}
                />
              </div>
            ) : (
              <img
                src={`${project.gallery[currentImageIndex]}${project.gallery[currentImageIndex].includes('pexels.com') ? '?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop' : ''}`}
                alt={`${project.title} - Photo ${currentImageIndex + 1}`}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                loading="eager"
                decoding="async"
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  img.src = project.gallery[currentImageIndex]; // Fallback to original
                }}
              />
            )}
            <div className="text-center mt-6 text-white">
              <div className="bg-black/50 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-sm font-body">
                  {currentImageIndex + 1} of {project.gallery.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectDetail;