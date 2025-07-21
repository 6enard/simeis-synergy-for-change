import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-gray-800 mb-6 animate-slide-in-up">
            Get In <span className="text-orange">Touch</span>
          </h2>
          <p className="text-lg sm:text-xl font-body text-gray-600 max-w-3xl mx-auto px-2 animate-fade-in-up animate-stagger-1">
            Ready to join our mission or have questions about our work? We'd love to hear from you. 
            Reach out and let's make a difference together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl sm:text-2xl font-heading text-gray-800 mb-6 sm:mb-8">Connect With Us</h3>
            
            {/* Contact Cards */}
            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              <div className="bg-gradient-to-r from-lime/10 to-orange/10 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center space-x-4">
                  <div className="bg-lime/20 rounded-full p-2 sm:p-3 flex-shrink-0">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-lime" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-body font-semibold text-gray-800">Email Us</h4>
                    <p className="font-body text-gray-600 text-sm sm:text-base">simesynergyforchange@gmail.com</p>
                    <p className="text-xs sm:text-sm font-body text-gray-500">We respond within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange/10 to-lime/10 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center space-x-4">
                  <div className="bg-orange/20 rounded-full p-2 sm:p-3 flex-shrink-0">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-orange" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-body font-semibold text-gray-800">Call Us</h4>
                    <p className="font-body text-gray-600 text-sm sm:text-base">+254 757 308 547</p>
                    <p className="font-body text-gray-600 text-sm sm:text-base">+254 713 773 070  </p>
                    <p className="text-xs sm:text-sm font-body text-gray-500">Mon - Fri, 9AM - 5PM</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-50 to-cream rounded-xl p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-200 rounded-full p-2 sm:p-3 flex-shrink-0">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-body font-semibold text-gray-800">Visit Us</h4>
                    <p className="font-body text-gray-600 text-sm sm:text-base">Nairobi, Kenya</p>
                    <p className="text-xs sm:text-sm font-body text-gray-500">Community outreach center</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-base sm:text-lg font-body font-semibold text-gray-800 mb-4">Follow Our Journey</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-100 hover:bg-gray-200 text-gray-600 p-2 sm:p-3 rounded-full transition-colors duration-200">
                  <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
                <a href="#" className="bg-gray-100 hover:bg-gray-200 text-gray-600 p-2 sm:p-3 rounded-full transition-colors duration-200">
                  <Twitter className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
                <a href="#" className="bg-gray-100 hover:bg-gray-200 text-gray-600 p-2 sm:p-3 rounded-full transition-colors duration-200">
                  <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
                <a href="#" className="bg-lime/20 hover:bg-lime/30 text-lime p-2 sm:p-3 rounded-full transition-colors duration-200">
                  <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
              </div>
            </div>

            {/* Volunteer CTA */}
            <div className="mt-6 sm:mt-8 bg-gradient-to-r from-lime to-orange rounded-xl p-4 sm:p-6 text-white">
              <h4 className="text-lg sm:text-xl font-heading mb-3">Want to Volunteer?</h4>
              <p className="mb-4 font-body text-white/90 text-sm sm:text-base">
                Join our team of passionate volunteers and make a direct impact in your community. 
                We welcome people from all backgrounds and skill levels.
              </p>
              <button className="bg-white text-gray-800 px-4 sm:px-6 py-2 rounded-full font-body font-semibold hover:bg-gray-100 transition-colors duration-200 text-sm sm:text-base">
                Become a Volunteer
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-cream rounded-xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-heading text-gray-800 mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-body font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 font-body border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime focus:border-transparent transition-colors duration-200 text-sm sm:text-base"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-body font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 font-body border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime focus:border-transparent transition-colors duration-200 text-sm sm:text-base"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs sm:text-sm font-body font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 font-body border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime focus:border-transparent transition-colors duration-200 text-sm sm:text-base"
                  >
                    <option value="">Select a subject</option>
                    <option value="volunteer">Volunteer Opportunities</option>
                    <option value="donation">Donation Inquiry</option>
                    <option value="partnership">Partnership</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Need Support</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-body font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 font-body border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime focus:border-transparent transition-colors duration-200 text-sm sm:text-base"
                    placeholder="Tell us how we can help or how you'd like to get involved..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-lime to-orange text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-body font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 text-sm sm:text-base"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;