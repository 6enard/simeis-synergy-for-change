import React, { useState } from 'react';
import { CreditCard, Smartphone, Copy, Check, Heart, Users, Home, Utensils } from 'lucide-react';

const Donate = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const impactAreas = [
    {
      icon: Heart,
      title: "Healthcare Support",
      description: "Providing essential medical supplies and hygiene products",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Community Relief",
      description: "Emergency assistance for disaster-affected families",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Home,
      title: "Children's Homes",
      description: "Educational support and care packages for orphanages",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Utensils,
      title: "Feeding Programs",
      description: "Nutritious meals for vulnerable households",
      color: "from-orange-500 to-yellow-500"
    }
  ];

  return (
    <section id="donate" className="py-20 bg-gradient-to-br from-lime/10 to-orange/10">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-gray-800 mb-6">
            Make a <span className="text-lime">Difference</span> Today
          </h2>
          <p className="text-lg sm:text-xl font-body text-gray-600 max-w-3xl mx-auto px-2">
            Your generous contribution helps us continue our mission of empowering lives 
            and creating sustainable positive change in communities across Kenya.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {/* Donation Methods */}
          <div>
            <h3 className="text-xl sm:text-2xl font-heading text-gray-800 mb-6 sm:mb-8">How to Contribute</h3>
            
            {/* M-Pesa Donation */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-6 sm:mb-8">
              <div className="flex items-center mb-6">
                <div className="bg-lime/20 rounded-full p-2 sm:p-3 mr-3 sm:mr-4">
                  <Smartphone className="h-6 w-6 sm:h-8 sm:w-8 text-lime" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-heading text-gray-800">M-Pesa Donation</h4>
                  <p className="font-body text-gray-600 text-sm sm:text-base">Quick and secure mobile payment</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs sm:text-sm font-body text-gray-600 mb-1">Paybill Number</p>
                      <p className="text-xl sm:text-2xl font-heading text-gray-800">522522</p>
                    </div>
                    <button
                      onClick={() => copyToClipboard('522522', 'paybill')}
                      className="bg-lime/20 hover:bg-lime/30 text-lime p-2 rounded-lg transition-colors duration-200"
                    >
                      {copiedField === 'paybill' ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs sm:text-sm font-body text-gray-600 mb-1">Account Number</p>
                      <p className="text-xl sm:text-2xl font-heading text-gray-800">1111485429</p>
                    </div>
                    <button
                      onClick={() => copyToClipboard('1111485429', 'account')}
                      className="bg-lime/20 hover:bg-lime/30 text-lime p-2 rounded-lg transition-colors duration-200"
                    >
                      {copiedField === 'account' ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-lime/20 to-orange/20 rounded-lg">
                <h5 className="font-body font-semibold text-gray-800 mb-2">How to Donate via M-Pesa:</h5>
                <ol className="text-xs sm:text-sm font-body text-gray-700 space-y-1">
                  <li>1. Go to M-Pesa on your phone</li>
                  <li>2. Select "Lipa na M-Pesa"</li>
                  <li>3. Select "Pay Bill"</li>
                  <li>4. Enter Business Number: <strong>522522</strong></li>
                  <li>5. Enter Account Number: <strong>1111485429</strong></li>
                  <li>6. Enter your donation amount</li>
                  <li>7. Enter your M-Pesa PIN and confirm</li>
                </ol>
              </div>
            </div>

            {/* Alternative Methods */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <h4 className="text-lg sm:text-xl font-heading text-gray-800 mb-4">Other Ways to Help</h4>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <CreditCard className="h-6 w-6 text-orange mr-3" />
                  <div>
                    <p className="font-body font-semibold text-gray-800 text-sm sm:text-base">Bank Transfer</p>
                    <p className="text-xs sm:text-sm font-body text-gray-600">Contact us for bank details</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <Heart className="h-6 w-6 text-orange mr-3" />
                  <div>
                    <p className="font-body font-semibold text-gray-800 text-sm sm:text-base">In-Kind Donations</p>
                    <p className="text-xs sm:text-sm font-body text-gray-600">Food, clothing, educational materials</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <Users className="h-6 w-6 text-lime mr-3" />
                  <div>
                    <p className="font-body font-semibold text-gray-800 text-sm sm:text-base">Volunteer Time</p>
                    <p className="text-xs sm:text-sm font-body text-gray-600">Join our community outreach programs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Areas */}
          <div>
            <h3 className="text-xl sm:text-2xl font-heading text-gray-800 mb-6 sm:mb-8">Your Impact</h3>
            
            <div className="grid gap-4 sm:gap-6 mb-6 sm:mb-8">
              {impactAreas.map((area, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`bg-gradient-to-r ${area.color} rounded-lg p-2 sm:p-3 flex-shrink-0`}>
                      <area.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-heading text-gray-800 mb-2">{area.title}</h4>
                      <p className="font-body text-gray-600 text-xs sm:text-sm leading-relaxed">{area.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Donation Impact Examples */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <h4 className="text-lg sm:text-xl font-heading text-gray-800 mb-4 sm:mb-6">What Your Donation Can Do</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-lime/10 to-lime/20 rounded-lg">
                  <span className="font-body text-gray-700 text-sm sm:text-base font-semibold">KSh 500</span>
                  <span className="text-xs sm:text-sm font-body text-gray-600">Feed a family for a week</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-orange/10 to-orange/20 rounded-lg">
                  <span className="font-body text-gray-700 text-sm sm:text-base font-semibold">KSh 1,000</span>
                  <span className="text-xs sm:text-sm font-body text-gray-600">School supplies for 5 children</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg">
                  <span className="font-body text-gray-700 text-sm sm:text-base font-semibold">KSh 2,000</span>
                  <span className="text-xs sm:text-sm font-body text-gray-600">Medical supplies for a health camp</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-lime/20 to-orange/20 rounded-lg">
                  <span className="font-body text-gray-700 text-sm sm:text-base font-semibold">KSh 5,000</span>
                  <span className="text-xs sm:text-sm font-body text-gray-600">Support an entire community project</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Thank You Message */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-12 max-w-4xl mx-auto">
            <Heart className="h-12 w-12 sm:h-16 sm:w-16 text-orange mx-auto mb-4 sm:mb-6" />
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading text-gray-800 mb-4 sm:mb-6">
              Thank You for Your Generosity
            </h3>
            <p className="text-base sm:text-lg font-body text-gray-600 leading-relaxed px-2">
              Every contribution, no matter the size, makes a meaningful difference in someone's life. 
              Your support enables us to continue our mission of empowering communities and creating 
              sustainable positive change across Kenya.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;