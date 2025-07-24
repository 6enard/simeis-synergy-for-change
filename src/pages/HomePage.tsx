import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Heart, Star, Target, Eye, Compass, Calendar, MapPin, UserPlus } from 'lucide-react';
import Hero from '../components/Hero';

const HomePage = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const featuredProjects = [
    {
      id: 1,
      title: "Mukuru Promotion Centre",
      date: "January 27, 2024",
      description: "We kicked off the year with a heartfelt visit to Mukuru Promotion Centre, where we spent time sharing meals, essentials, and encouragement with children and families.",
      image: "/all.jpg",
      location: "Mukuru, Nairobi"
    },
    {
      id: 7,
      title: "Flomina Children's Home",
      date: "November 23, 2024",
      description: "In the spirit of giving and gratitude, we reached out to the wonderful children of Flomina Home, offering food, clothes, and school supplies.",
      image: "/flo1.jpg",
      location: "Nairobi"
    },
    {
      id: 10,
      title: "Empowering a Student to Graduate",
      date: "July 29, 2024",
      description: "We helped a determined girl who lacked the funds for her final exam. Thanks to timely support, she sat for her exam, passed, and graduated.",
      image: "/student1.jpg",
      location: "Nairobi"
    }
  ];

  const leaders = [
    {
      name: "Trevor Abashora",
      position: "CEO and Founder",
      image: "/Abashora.jpg",
      quote: "I founded Simei's Synergy for Change not as an organization, but as a response to the silent cries I saw in children without homes..."
    },
    {
      name: "Dave Njuguna",
      position: "Vice Chairman",
      image: "/dave2.jpg",
      quote: "It is my privilege and calling as the SSC Vice Chairman to be part of a movement that remains the beacon of hope and change..."
    },
    {
      name: "Darlene Kiptoo",
      position: "Vice Chairlady",
      image: "/darlene.jpg",
      quote: "At Simei's Synergy for Change, being Vice Chairs is not about titles, it's about service..."
    }
  ];

  return (
    <div>
      <Hero />
      
      {/* About Preview Section */}
      <section id="about" className="py-16 bg-cream">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-gray-800 mb-6">
              About Our <span className="text-lime">Mission</span>
            </h2>
            <p className="text-lg sm:text-xl font-body text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
              We are a youth-driven charity organization dedicated to uplifting the less fortunate 
              and fostering sustainable growth in our communities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="bg-lime/20 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Target className="h-8 w-8 text-lime" />
              </div>
              <h3 className="text-xl font-heading text-gray-800 mb-4">Our Mission</h3>
              <p className="font-body text-gray-600 text-sm leading-relaxed">
                Empower lives through the provision of essential assistance and sustainable support to the less fortunate.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="bg-orange/20 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Eye className="h-8 w-8 text-orange" />
              </div>
              <h3 className="text-xl font-heading text-gray-800 mb-4">Our Vision</h3>
              <p className="font-body text-gray-600 text-sm leading-relaxed">
                To illuminate the future by synthesizing hope and empowerment, one life at a time.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="bg-gray-200 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Compass className="h-8 w-8 text-gray-600" />
              </div>
              <h3 className="text-xl font-heading text-gray-800 mb-4">Our Values</h3>
              <p className="font-body text-gray-600 text-sm leading-relaxed">
                Compassion, collaboration, and sustainability guide everything we do.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/about"
              className="inline-flex items-center bg-gradient-to-r from-lime to-orange text-white px-8 py-3 rounded-2xl font-body font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Learn More About Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Leadership Preview Section */}
      <section id="leadership" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-gray-800 mb-6">
              Meet Our <span className="text-orange">Leadership</span>
            </h2>
            <p className="text-lg sm:text-xl font-body text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
              Passionate individuals dedicated to creating lasting change and empowering communities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {leaders.map((leader, index) => (
              <div key={index} className="bg-cream rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className={`w-full h-64 hover:scale-105 transition-transform duration-500 ${
                    leader.name === 'Dave Njuguna' ? 'object-cover object-top' : 'object-cover'
                  }`}
                />
                <div className="p-6">
                  <h3 className="text-xl font-heading text-gray-800 mb-2">{leader.name}</h3>
                  <p className="text-orange font-body font-semibold mb-4">{leader.position}</p>
                  <p className="font-body text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {leader.quote}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/leadership"
              className="inline-flex items-center bg-gradient-to-r from-orange to-lime text-white px-8 py-3 rounded-2xl font-body font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Meet Our Full Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section id="projects" className="py-16 bg-gradient-to-br from-lime/10 to-orange/10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-gray-800 mb-6">
              Our <span className="text-orange">Impact</span> Stories
            </h2>
            <p className="text-lg sm:text-xl font-body text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
              Discover the meaningful projects we've undertaken to create positive change in our communities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm font-body text-gray-500 mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    {project.date}
                  </div>
                  <h3 className="text-xl font-heading text-gray-800 mb-3">{project.title}</h3>
                  <p className="font-body text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex items-center text-sm font-body text-gray-500">
                    <MapPin className="h-4 w-4 mr-2" />
                    {project.location}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/projects"
              className="inline-flex items-center bg-gradient-to-r from-lime to-orange text-white px-8 py-3 rounded-2xl font-body font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Donate Preview Section */}
      <section id="donate" className="py-16 bg-cream">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-gray-800 mb-6">
              Make a <span className="text-lime">Difference</span> Today
            </h2>
            <p className="text-lg sm:text-xl font-body text-gray-600 max-w-3xl mx-auto">
              Your generous contribution helps us continue our mission of empowering lives 
              and creating sustainable positive change in communities across Kenya.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto mb-12">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-heading text-gray-800 mb-4">Quick M-Pesa Donation</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-lime/10 rounded-lg p-4">
                  <p className="text-sm font-body text-gray-600 mb-1">Paybill Number</p>
                  <p className="text-2xl font-heading text-gray-800">522522</p>
                </div>
                <div className="bg-orange/10 rounded-lg p-4">
                  <p className="text-sm font-body text-gray-600 mb-1">Account Number</p>
                  <p className="text-2xl font-heading text-gray-800">1111485429</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/donate"
              className="inline-flex items-center bg-gradient-to-r from-lime to-orange text-white px-8 py-3 rounded-2xl font-body font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Learn More Ways to Help
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Preview Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-gray-800 mb-6">
              Get In <span className="text-orange">Touch</span>
            </h2>
            <p className="text-lg sm:text-xl font-body text-gray-600 max-w-3xl mx-auto">
              Ready to join our mission or have questions about our work? We'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-gradient-to-r from-lime/10 to-orange/10 rounded-xl p-6 text-center">
              <div className="bg-lime/20 rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-6 w-6 text-lime" />
              </div>
              <h4 className="text-lg font-body font-semibold text-gray-800 mb-2">Email Us</h4>
              <p className="font-body text-gray-600 text-sm">simeisynergyforchange@gmail.com</p>
            </div>

            <div className="bg-gradient-to-r from-orange/10 to-lime/10 rounded-xl p-6 text-center">
              <div className="bg-orange/20 rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-6 w-6 text-orange" />
              </div>
              <h4 className="text-lg font-body font-semibold text-gray-800 mb-2">Call Us</h4>
              <p className="font-body text-gray-600 text-sm">+254 757 308 547</p>
            </div>

            <div className="bg-gradient-to-r from-gray-50 to-cream rounded-xl p-6 text-center">
              <div className="bg-gray-200 rounded-full p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Star className="h-6 w-6 text-gray-600" />
              </div>
              <h4 className="text-lg font-body font-semibold text-gray-800 mb-2">Visit Us</h4>
              <p className="font-body text-gray-600 text-sm">Nairobi, Kenya</p>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-gradient-to-r from-orange to-lime text-white px-8 py-3 rounded-2xl font-body font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16 bg-gradient-to-r from-lime to-orange">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-white mb-6">
              Ready to Make a <span className="text-cream">Difference?</span>
            </h2>
            <p className="text-lg sm:text-xl font-body text-white/90 mb-8 leading-relaxed">
              Join our community of passionate individuals dedicated to creating positive change. 
              Become a member and be part of our mission to empower lives across Kenya. 
              One-time membership fee of KSh 100 required.
            </p>
            <Link
              to="/register"
              className="inline-flex items-center bg-white text-gray-800 px-8 py-4 rounded-2xl font-body font-semibold hover:bg-cream transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <UserPlus className="mr-2 h-6 w-6" />
              Become a Member
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;