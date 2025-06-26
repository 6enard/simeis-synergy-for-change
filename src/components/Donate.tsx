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
    <section id="donate" className="py-20 bg-gradient-to-br from-green-50 to-orange-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Make a <span className="text-green-600">Difference</span> Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your generous contribution helps us continue our mission of empowering lives 
            and creating sustainable positive change in communities across Kenya.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Donation Methods */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">How to Contribute</h3>
            
            {/* M-Pesa Donation */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 rounded-full p-3 mr-4">
                  <Smartphone className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800">M-Pesa Donation</h4>
                  <p className="text-gray-600">Quick and secure mobile payment</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Paybill Number</p>
                      <p className="text-2xl font-bold text-gray-800">522522</p>
                    </div>
                    <button
                      onClick={() => copyToClipboard('522522', 'paybill')}
                      className="bg-green-100 hover:bg-green-200 text-green-700 p-2 rounded-lg transition-colors duration-200"
                    >
                      {copiedField === 'paybill' ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Account Number</p>
                      <p className="text-2xl font-bold text-gray-800">1111485429</p>
                    </div>
                    <button
                      onClick={() => copyToClipboard('1111485429', 'account')}
                      className="bg-green-100 hover:bg-green-200 text-green-700 p-2 rounded-lg transition-colors duration-200"
                    >
                      {copiedField === 'account' ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-green-100 to-orange-100 rounded-lg">
                <h5 className="font-semibold text-gray-800 mb-2">How to Donate via M-Pesa:</h5>
                <ol className="text-sm text-gray-700 space-y-1">
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
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h4 className="text-xl font-bold text-gray-800 mb-4">Other Ways to Help</h4>
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <CreditCard className="h-6 w-6 text-orange-600 mr-3" />
                  <div>
                    <p className="font-semibold text-gray-800">Bank Transfer</p>
                    <p className="text-sm text-gray-600">Contact us for bank details</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <Heart className="h-6 w-6 text-red-600 mr-3" />
                  <div>
                    <p className="font-semibold text-gray-800">In-Kind Donations</p>
                    <p className="text-sm text-gray-600">Food, clothing, educational materials</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <Users className="h-6 w-6 text-blue-600 mr-3" />
                  <div>
                    <p className="font-semibold text-gray-800">Volunteer Time</p>
                    <p className="text-sm text-gray-600">Join our community outreach programs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Areas */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Your Impact</h3>
            
            <div className="grid gap-6 mb-8">
              {impactAreas.map((area, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`bg-gradient-to-r ${area.color} rounded-lg p-3`}>
                      <area.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">{area.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{area.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Donation Impact Examples */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h4 className="text-xl font-bold text-gray-800 mb-6">What Your Donation Can Do</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-green-50 to-green-100 rounded-lg">
                  <span className="text-gray-700">KSh 500</span>
                  <span className="text-sm text-gray-600">Feed a family for a week</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg">
                  <span className="text-gray-700">KSh 1,000</span>
                  <span className="text-sm text-gray-600">School supplies for 5 children</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
                  <span className="text-gray-700">KSh 2,000</span>
                  <span className="text-sm text-gray-600">Medical supplies for a health camp</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg">
                  <span className="text-gray-700">KSh 5,000</span>
                  <span className="text-sm text-gray-600">Support an entire community project</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Thank You Message */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto">
            <Heart className="h-16 w-16 text-red-500 mx-auto mb-6" />
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Thank You for Your Generosity
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
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