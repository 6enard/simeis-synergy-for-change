import React, { useState } from 'react';
import { UserPlus, Mail, Phone, MessageCircle, CreditCard, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    whatsapp: '',
    mpesaCode: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone_number: formData.phone,
        whatsapp_number: formData.whatsapp,
        mpesa_code: formData.mpesaCode,
        to_name: 'Simeis Synergy For Change',
      };

      await emailjs.send(
        'service_ml4e6cp',
        'template_1sf8gd6',
        templateParams,
        'HKkUc0AdwP8gN7cSu'
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', whatsapp: '', mpesaCode: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-cream to-white">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-lime to-orange rounded-full p-4 shadow-lg">
              <UserPlus className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading text-gray-800 mb-6">
            Join Our <span className="text-orange">Community</span>
          </h1>
          <p className="text-lg sm:text-xl font-body text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Become a member of Simeis Synergy For Change and be part of our mission to create 
            positive impact in communities across Kenya. A one-time membership fee of KSh 500 is required. 
            Together, we can make a difference.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Registration Form */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-lime to-orange p-6 sm:p-8 text-white text-center">
              <h2 className="text-2xl sm:text-3xl font-heading mb-2">Member Registration</h2>
              <p className="font-body text-white/90">Fill out the form below to join our community</p>
              <div className="mt-4 bg-white/20 backdrop-blur-sm rounded-lg p-3">
                <div className="bg-gradient-to-r from-lime/30 to-lime/20 rounded-md p-2 border border-lime/40">
                  <p className="text-sm font-body font-semibold text-gray-800">Membership Fee: KSh 500</p>
                  <p className="text-xs font-body text-gray-700">One-time registration fee</p>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-body font-semibold text-gray-700 mb-3">
                    <Mail className="h-4 w-4 inline mr-2 text-lime" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 font-body border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-lime focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-body font-semibold text-gray-700 mb-3">
                    <Mail className="h-4 w-4 inline mr-2 text-orange" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 font-body border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-lime focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Phone Number Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-body font-semibold text-gray-700 mb-3">
                    <Phone className="h-4 w-4 inline mr-2 text-lime" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 font-body border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-lime focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
                    placeholder="+254 7XX XXX XXX"
                  />
                </div>

                {/* WhatsApp Number Field */}
                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-body font-semibold text-gray-700 mb-3">
                    <MessageCircle className="h-4 w-4 inline mr-2 text-orange" />
                    WhatsApp Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 font-body border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-lime focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
                    placeholder="+254 7XX XXX XXX"
                  />
                </div>

                {/* M-Pesa Code Field */}
                <div>
                  <label htmlFor="mpesaCode" className="block text-sm font-body font-semibold text-gray-700 mb-3">
                    <CreditCard className="h-4 w-4 inline mr-2 text-lime" />
                    M-Pesa Payment Code *
                  </label>
                  <input
                    type="text"
                    id="mpesaCode"
                    name="mpesaCode"
                    value={formData.mpesaCode}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 font-body border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-lime focus:border-transparent transition-all duration-200 text-gray-800 placeholder-gray-400"
                    placeholder="Enter M-Pesa transaction code"
                  />
                  <p className="text-xs text-gray-500 mt-2 font-body">
                    Please provide the M-Pesa transaction code for your KSh 500 membership fee payment
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-xl font-body font-semibold text-lg transition-all duration-300 transform flex items-center justify-center space-x-3 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-lime to-orange text-white hover:shadow-xl hover:scale-105'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                      <span>Submitting Registration...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-6 w-6" />
                      <span>Submit Registration</span>
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="mt-6 p-6 bg-lime/10 border-2 border-lime/20 rounded-xl">
                    <div className="flex items-center justify-center mb-4">
                      <CheckCircle className="h-8 w-8 text-lime mr-3" />
                      <h3 className="text-xl font-heading text-lime">Registration Successful!</h3>
                    </div>
                    <p className="text-gray-700 font-body text-center leading-relaxed">
                      Thank you for joining Simeis Synergy For Change! We have received your registration 
                      and our team will reach out to you soon with next steps and welcome information.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mt-6 p-6 bg-red-50 border-2 border-red-200 rounded-xl">
                    <div className="flex items-center justify-center mb-4">
                      <AlertCircle className="h-8 w-8 text-red-600 mr-3" />
                      <h3 className="text-xl font-heading text-red-600">Registration Failed</h3>
                    </div>
                    <p className="text-red-600 font-body text-center">
                      Sorry, there was an error processing your registration. Please try again or contact us directly.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Information Section */}
          <div className="mt-12 bg-gradient-to-r from-lime/20 via-orange/20 to-lime/20 rounded-2xl p-6 sm:p-8 border border-orange/20">
            <div className="mb-8 bg-white rounded-xl p-6 border border-orange/30">
              <h3 className="text-xl sm:text-2xl font-heading text-gray-800 mb-4 text-center">
                Membership Fee Payment
              </h3>
              <div className="flex justify-center items-center space-x-4 mb-4">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/M-PESA_LOGO-01.svg/1280px-M-PESA_LOGO-01.svg.png" 
                  alt="M-Pesa Logo" 
                  className="h-8 w-auto sm:h-10"
                  loading="lazy"
                />
                <img 
                  src="https://upload.wikimedia.org/wikipedia/en/d/de/KCB_Bank_Kenya_Limited_logo.png" 
                  alt="KCB Bank Logo" 
                  className="h-6 w-auto sm:h-8"
                  loading="lazy"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div className="bg-lime/10 rounded-lg p-4 text-center">
                  <p className="text-sm font-body text-gray-600 mb-1">Paybill Number</p>
                  <p className="text-2xl font-heading text-gray-800">522522</p>
                </div>
                <div className="bg-orange/10 rounded-lg p-4 text-center">
                  <p className="text-sm font-body text-gray-600 mb-1">Account Number</p>
                  <p className="text-2xl font-heading text-gray-800">1111485429</p>
                </div>
              </div>
              <div className="text-center">
                <p className="text-lg font-heading text-gray-800 mb-2">Membership Fee: KSh 500</p>
                <p className="text-sm font-body text-gray-600">
                  Pay via M-Pesa using the details above, then enter the transaction code in the form
                </p>
              </div>
            </div>
            
            <h3 className="text-xl sm:text-2xl font-heading text-gray-800 mb-4 text-center">
              What Happens Next?
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-lime/30 rounded-full p-2 flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-lime" />
                </div>
                <div>
                  <h4 className="font-body font-semibold text-gray-800 mb-1">Registration Review</h4>
                  <p className="text-sm font-body text-gray-600">
                    Our team will review your registration and verify your information within 24-48 hours.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-orange/30 rounded-full p-2 flex-shrink-0 mt-1">
                  <MessageCircle className="h-5 w-5 text-orange" />
                </div>
                <div>
                  <h4 className="font-body font-semibold text-gray-800 mb-1">Welcome Contact</h4>
                  <p className="text-sm font-body text-gray-600">
                    We'll reach out to you via phone or WhatsApp to welcome you and provide orientation details.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-lime/30 rounded-full p-2 flex-shrink-0 mt-1">
                  <UserPlus className="h-5 w-5 text-lime" />
                </div>
                <div>
                  <h4 className="font-body font-semibold text-gray-800 mb-1">Community Integration</h4>
                  <p className="text-sm font-body text-gray-600">
                    You'll be added to our member community and invited to upcoming events and volunteer opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;