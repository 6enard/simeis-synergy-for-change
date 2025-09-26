import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, Heart, Home, Utensils, Target, Eye, ChevronDown, ChevronUp } from 'lucide-react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

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
      category: "community",
      image: "/all.jpg"
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
      status: "Completed",
      category: "outreach",
      image: "/1.png"
    },
    {
      id: 3,
      title: "Anita Home, North Kajiado",
      date: "March 23, 2024",
      location: "North Kajiado",
      description: "We journeyed to North Kajiado to support Anita Home, a shelter caring for abandoned and vulnerable children. Through this visit, we shared supplies, played with the children, and helped remind them they are not forgotten.",
      fullDescription: "Our journey to Anita Home in North Kajiado was both heartbreaking and inspiring. This shelter provides a safe haven for abandoned and vulnerable children who have faced unimaginable challenges. We arrived with supplies including food, clothing, educational materials, and toys, but we left with so much more - touched by the resilience and joy of these incredible children. We spent the day playing games, helping with homework, sharing meals, and simply being present. The children taught us about strength, hope, and the power of community. We also worked with the caregivers to understand their ongoing needs and how we can provide sustained support.",
      impact: "Child welfare",
      icon: Home,
      beneficiaries: "30 children",
      volunteers: "12 volunteers",
      status: "Ongoing",
      category: "children",
      image: "/anita1.jpg"
    },
    {
      id: 4,
      title: "Supporting Flood-Affected Families",
      date: "April 2024",
      location: "Various locations",
      description: "Responding to the devastating floods that displaced numerous families, we provided emergency aid including food, clothing, and temporary shelter materials to help them rebuild their lives with dignity.",
      fullDescription: "When devastating floods struck Kenya in April 2024, displacing thousands of families, we knew we had to act quickly. Our emergency response team mobilized within hours to provide critical aid to those who had lost everything. We distributed emergency food packages, clean water, clothing, blankets, and temporary shelter materials to families who found themselves homeless overnight. Beyond the physical aid, we provided emotional support and helped connect families with longer-term assistance programs. This crisis response taught us the importance of being prepared for emergencies and having systems in place to respond rapidly when disaster strikes.",
      impact: "Disaster relief",
      icon: Users,
      beneficiaries: "200+ families",
      volunteers: "25 volunteers",
      status: "Ongoing",
      category: "emergency",
      image: "/no4.jpg"
    },
    {
      id: 5,
      title: "Serah's Vision Children's Home",
      date: "June 29, 2024",
      location: "Nairobi",
      description: "Our team visited Serah's Vision Children's Home to share joy and compassion with the children. We brought gifts, food, and spent quality time engaging with them through games and storytelling.",
      fullDescription: "Our visit to Serah's Vision Children's Home was filled with laughter, joy, and meaningful connections. We arrived with bags full of gifts, nutritious food, and hearts ready to share love with these amazing children. The day was spent playing games, telling stories, helping with homework, and simply enjoying each other's company. We organized fun activities including art sessions, music time, and outdoor games that brought smiles to every child's face. The children shared their dreams and aspirations with us, reminding us of the importance of nurturing hope and ambition in young hearts.",
      impact: "Child development",
      icon: Heart,
      beneficiaries: "40 children",
      volunteers: "18 volunteers",
      status: "Completed",
      category: "children",
      image: "/no5.jpg"
    },
    {
      id: 6,
      title: "Feeding Families in Tana River",
      date: "July–August 2024",
      location: "Tana River County",
      description: "During this critical period, we coordinated a food relief program in Tana River County, ensuring that dozens of families facing hunger and hardship received consistent meals and emotional support.",
      fullDescription: "The food crisis in Tana River County during July and August 2024 called for sustained intervention. We established a comprehensive feeding program that went beyond just providing meals - we created a support system for families facing severe hardship. Our team worked tirelessly to ensure consistent food distribution, reaching remote areas where families had limited access to resources. We provided nutritious meals, clean water, and essential supplies while also offering emotional support and hope to families struggling with food insecurity.",
      impact: "Food security",
      icon: Utensils,
      beneficiaries: "80+ families",
      volunteers: "22 volunteers",
      status: "Completed",
      category: "feeding",
      image: "/no6.jpg"
    },
    {
      id: 7,
      title: "Flomina Children's Home",
      date: "November 23, 2024",
      location: "Nairobi",
      description: "In the spirit of giving and gratitude, we reached out to the wonderful children of Flomina Home, offering food, clothes, and school supplies. The smiles we received in return were priceless.",
      fullDescription: "Our visit to Flomina Children's Home in November was perfectly timed for the season of gratitude and giving. We arrived with bags full of food, new clothes, school supplies, and hearts full of love for these incredible children. The day was spent in celebration - we shared meals together, helped the children try on their new clothes, and organized their school supplies for the upcoming term. We also spent time reading with the younger children and helping the older ones with their homework. The joy and gratitude expressed by the children was overwhelming and reminded us of the simple power of showing up and caring.",
      impact: "Educational support",
      icon: Home,
      beneficiaries: "35 children",
      volunteers: "16 volunteers",
      status: "Completed",
      category: "children",
      image: "/flo1.jpg"
    },
    {
      id: 8,
      title: "Partnership with FOS at Getathuru Reception Centre",
      date: "February 22, 2025",
      location: "Getathuru",
      description: "We partnered with FOS to support vulnerable boys at Getathuru Reception Centre. This initiative focused on emotional healing, mentorship, and reintegration support for rescued children.",
      fullDescription: "Our partnership with Friends of Society (FOS) at Getathuru Reception Centre represents a significant step in our commitment to supporting vulnerable youth. This collaboration focuses on providing comprehensive support to boys who have been rescued from difficult situations and are working toward reintegration into society. Our approach combines emotional healing, mentorship, life skills training, and educational support. We work closely with professional counselors and social workers to ensure each boy receives the individualized attention they need.",
      impact: "Youth mentorship",
      icon: Users,
      beneficiaries: "25 boys",
      volunteers: "14 volunteers",
      status: "Completed",
      category: "youth",
      image: "/geta2.jpg"
    },
    {
      id: 9,
      title: "Return Visit to Mukuru Promotion Centre",
      date: "May 31, 2025",
      location: "Mukuru, Nairobi",
      description: "Revisiting where it all began, we returned to Mukuru Promotion Centre to continue building on our relationship and support. It was a powerful reminder of how much consistent love and presence matter.",
      fullDescription: "Returning to Mukuru Promotion Centre where our journey began was both nostalgic and inspiring. This follow-up visit demonstrated our commitment to building lasting relationships rather than one-time interventions. We were welcomed back with open arms by families who remembered us from our first visit, and it was incredible to see the progress and positive changes that had occurred. We brought additional supplies, continued our feeding program, and spent quality time catching up with the children and families we had met before.",
      impact: "Sustained support",
      icon: Heart,
      beneficiaries: "60+ families",
      volunteers: "18 volunteers",
      status: "Completed",
      category: "community",
      image: "/mkr4.jpg"
    },
    {
      id: 10,
      title: "Visit to Anita Children's Home",
      date: "September 13, 2025",
      location: "Kajiado",
      description: "Our team visited Anita Children's Home in Kajiado to spend quality time with the children, bringing joy, essential supplies, and showing them they are loved and cared for.",
      fullDescription: "On Saturday, September 13th, 2025, our dedicated team made the journey to Anita Children's Home in Kajiado for a meaningful visit with the children. This visit was focused on building relationships, sharing love, and providing both emotional and material support to the children who call this place home. We brought essential supplies including food, clothing, educational materials, and recreational items to brighten their day. The visit included interactive activities, games, storytelling sessions, and quality time spent getting to know each child individually. Our team was deeply moved by the resilience and joy of these children, despite the challenges they face. We also worked closely with the caregivers to understand the ongoing needs of the home and how we can provide continued support. This visit reinforced our commitment to child welfare and our belief that every child deserves love, attention, and the opportunity to dream of a brighter future.",
      impact: "Child welfare",
      icon: Home,
      beneficiaries: "35 children",
      volunteers: "12 volunteers",
      status: "Completed",
      category: "children",
      image: "/ssc/IMG-20250926-WA0063"
    },
    {
      id: 11,
      title: "Empowering a Student to Graduate",
      date: "July 29, 2024",
      location: "Nairobi",
      description: "On this day, we helped a determined girl who lacked the funds for her final exam. Thanks to timely support, she sat for her exam, passed, and graduated — a true story of hope restored and a future reclaimed.",
      fullDescription: "This project represents one of our most impactful individual interventions. We met a determined young woman who was on the verge of missing her final examinations due to lack of funds - a situation that would have derailed years of hard work and dedication. Her story touched our hearts: despite facing numerous challenges, she had maintained excellent grades and was just one step away from graduation. We immediately stepped in to cover her examination fees and provided additional support for her final preparations. When the results came out and she had not only passed but excelled, the joy was indescribable.",
      impact: "Educational empowerment",
      icon: Target,
      beneficiaries: "1 student",
      volunteers: "3 volunteers",
      status: "Completed",
      category: "education",
      image: "https://www.shutterstock.com/image-vector/girl-graduate-on-background-joyful-260nw-1930511396.jpg"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'community', name: 'Community Support', count: projects.filter(p => p.category === 'community').length },
    { id: 'children', name: 'Children\'s Welfare', count: projects.filter(p => p.category === 'children').length },
    { id: 'outreach', name: 'Street Outreach', count: projects.filter(p => p.category === 'outreach').length },
    { id: 'education', name: 'Education', count: projects.filter(p => p.category === 'education').length },
    { id: 'emergency', name: 'Emergency Relief', count: projects.filter(p => p.category === 'emergency').length }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const toggleExpanded = (projectId: number) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  const handleProjectClick = (projectId: number) => {
    window.location.hash = `project-${projectId}`;
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-cream to-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading text-gray-800 mb-6 sm:mb-8 tracking-tight">
            Our <span className="text-orange">Impact</span> Stories
          </h2>
          <p className="text-lg sm:text-xl font-body text-gray-600 max-w-4xl mx-auto font-light leading-relaxed px-2">
            Discover the meaningful projects we've undertaken to create positive change in communities 
            across Kenya. Each story represents lives touched and hope restored.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-2xl font-body font-semibold transition-all duration-300 transform hover:scale-105 text-sm sm:text-base ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-lime to-orange text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md border border-gray-200'
              }`}
            >
              {category.name}
              <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                selectedCategory === category.id
                  ? 'bg-white/20 text-white'
                  : 'bg-gray-100 text-gray-600'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => handleProjectClick(project.id)}
            >
              {/* Project Image */}
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 sm:h-56 object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm shadow-lg ${
                    project.status === 'Completed' 
                      ? 'bg-lime/90 text-white' 
                      : project.status === 'Ongoing'
                      ? 'bg-blue-500/90 text-white'
                      : 'bg-orange/90 text-white'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 sm:p-8">
                {/* Project Header Info */}
                <div className="mb-4">
                  <div className="flex items-center text-xs sm:text-sm font-body text-gray-600 mb-2">
                    <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                    {project.date}
                  </div>
                  <h3 className="text-base sm:text-lg font-heading text-gray-800 mb-2 project-title">{project.title}</h3>
                  <div className="flex items-center text-xs sm:text-sm font-body text-gray-600">
                    <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                    {project.location}
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-br from-lime/20 to-orange/20 rounded-full p-2 sm:p-3 mr-3 sm:mr-4 border border-lime/20">
                    <project.icon className="h-5 w-5 sm:h-6 sm:w-6 text-lime" />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-body font-semibold text-gray-800">{project.impact}</p>
                    <p className="text-xs sm:text-sm font-body text-gray-600">{project.beneficiaries}</p>
                  </div>
                </div>

                <p className="font-body text-gray-700 leading-relaxed text-sm sm:text-base mb-6">
                  {expandedProject === project.id ? project.fullDescription : project.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs sm:text-sm font-body text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    {project.volunteers}
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleExpanded(project.id);
                      }}
                      className="flex items-center bg-gradient-to-r from-lime/10 to-orange/10 hover:from-lime/20 hover:to-orange/20 text-gray-700 px-3 sm:px-4 py-2 rounded-xl font-body font-semibold transition-all duration-300 transform hover:scale-105 border border-gray-200 hover:border-orange/30 text-xs sm:text-sm"
                    >
                      <span className="mr-2">
                        {expandedProject === project.id ? 'Less' : 'More'}
                      </span>
                      {expandedProject === project.id ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </button>
                    
                    <Link
                      to={`/projects#project-${project.id}`}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center bg-gradient-to-r from-orange/10 to-lime/10 hover:from-orange/20 hover:to-lime/20 text-gray-700 px-3 sm:px-4 py-2 rounded-xl font-body font-semibold transition-all duration-300 transform hover:scale-105 border border-gray-200 hover:border-lime/30 text-xs sm:text-sm"
                    >
                      <span className="mr-2">Details</span>
                      <Eye className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Summary */}
        <div className="mt-16 sm:mt-20">
          <div className="bg-gradient-to-r from-lime via-orange to-lime rounded-3xl p-8 sm:p-12 md:p-16 text-white text-center shadow-2xl border border-white/20">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-heading mb-2">10+</div>
                <div className="text-base sm:text-lg font-body">Major Projects</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-heading mb-2">500+</div>
                <div className="text-base sm:text-lg font-body">Lives Impacted</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-heading mb-2">150+</div>
                <div className="text-base sm:text-lg font-body">Volunteers</div>
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading mb-6 sm:mb-8 tracking-tight">
              Creating Lasting Change
            </h3>
            <p className="text-lg sm:text-xl md:text-2xl font-body max-w-5xl mx-auto leading-relaxed font-light px-2">
              Every project we undertake is a step toward building stronger, more resilient communities. 
              Through compassion, dedication, and collaborative effort, we continue to transform lives 
              and create hope where it's needed most.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;