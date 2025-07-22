import React, { useState } from 'react';
import { Users, ChevronDown, ChevronUp, Quote, Star } from 'lucide-react';

const Leadership = () => {
  const [expandedLeader, setExpandedLeader] = useState<number | null>(null);

  const leaders = [
    {
      id: 1,
      name: "Trevor Abashora",
      position: "CEO and Founder",
      image: "/Abashora.jpg",
      shortStatement: "I founded Simei's Synergy for Change not as an organization, but as a response to the silent cries I saw in children without homes...",
      fullStatement: "I founded Simei's Synergy for Change (SSC) not as an organization, but as a response, a response to the silent cries I saw in children without homes, families left in crisis, and communities weighed down by struggle yet forgotten by the world. On December 4th, 2023, I chose to stop watching from the sidelines and instead become part of the solution. SSC was born from a place of compassion, not convenience, a movement rooted in love, dignity, and action. From feeding the hungry on city streets to standing with children in forgotten homes and supporting less fortunate families, we have walked where others turn away. As the Founder and CEO, I do not lead from above, but alongside, ensuring that every decision, every outreach, and every effort carries the weight of purpose and the warmth of humanity. SSC is a call to everyone who believes that small acts can create great waves; it's for the forgotten, the unseen, and also for those who've always wanted to help, but didn't know how. Here, we don't just give hope, we become it."
    },
    {
      id: 2,
      name: "Dave Njuguna",
      position: "Vice Chairman",
      image: "/dave2.jpg",
      shortStatement: "It is my privilege and calling as the SSC Vice Chairman to be part of a movement that remains the beacon of hope and change...",
      fullStatement: "It is my privilege and calling as the SSC Vice Chairman to be part of a movement that remains the beacon of hope and change. With the strong, visionary leadership of our Chairlady and Founder, SSC has transcended what was merely an organization to what has now become a family united in purpose, bound by compassion, motivated by service. Since our first outreach on January 27, 2024, at Mukuru Promotion Center, SSC has impacted over 150 families and made a difference in the lives of over 1,000 kids in Kenya. From the hustle of central Nairobi streets to homes in North Kajiado, from supporting communities devastated by floods, our objective has always remained the same: To be present, serve, and sow seeds of eternal transformation. Out of the countless stories we bear, one remains indelible. On 29 July, 2024, we had the privilege of enabling a girl to cross the financial divide and take her final exams. It was not merely an individual triumph but it was a reminder of what is possible when action intersects with compassion. Each visit, every hug, every meal shared are what shape the person we are. SSC is not merely touching lives, We are changing futures, one mission at a time. Come walk with us on this journey. In your volunteer service, collaboration, or support, your work becomes part of the growing tide of hope that reaches farther yet shines all the brighter. Together, we are igniting change. Together, we are SSC."
    },
    {
      id: 3,
      name: "Darlene Kiptoo",
      position: "Vice Chairlady",
      image: "/darlene.jpg",
      shortStatement: "At Simei's Synergy for Change, being Vice Chairs is not about titles, it's about service...",
      fullStatement: "At Simei's Synergy for Change, being Vice Chairs is not about titles, it's about service. It's about standing in the gap when it matters most, showing up with heart, and making sure no one feels forgotten. Every time we step into a home, a street corner, a household, a village, or a room full of children, we are reminded why this foundation exists: to restore dignity, to remind people they are seen, and to be present in moments others overlook. We've seen firsthand what it means to offer hope, not as a handout, but as a hand to hold. And that's what SSC is: a living, breathing community built on real people doing real work that touches real lives. We are proud to walk alongside Trevor, our team, and every volunteer and supporter who believes, like we do, that kindness still has the power to change the world. Our promise as Vice Chairs is simple: to lead with compassion, to listen more than we speak, and to always carry the mission of SSC with humility and purpose. We may not have all the answers, but together, with faith, action, and love, we are creating them, one step at a time."
    },
    {
      id: 4,
      name: "Roselinda Gitau",
      position: "Financial Manager",
      image: "/roselinda.jpg",
      shortStatement: "In my role as the head of Financial Management at Simei's Synergy for Change, I carry more than just numbers...",
      fullStatement: "In my role as the head of Financial Management at Simei's Synergy for Change (SSC), I carry more than just numbers, I carry the trust of every donor, the dreams of every child we support, and the hope of every community we serve. Finance in a charitable foundation isn't just about balancing books; it's about ensuring that every coin is accounted for, every resource is maximized, and every contribution is treated with the respect it deserves. I joined SSC because I believed in its heartbeat, a genuine desire to uplift and change lives, and my responsibility is to ensure that this mission is not only sustainable, but also transparent and accountable. Through clear reporting, ethical budgeting, and strategic stewardship, I work every day to make sure that the financial backbone of SSC remains strong, honest, and deeply aligned with the purpose it was built on."
    },
    {
      id: 5,
      name: "Jessica Obare",
      position: "Compliance Division",
      image: "/Jessica.jpg",
      shortStatement: "At Simei's Synergy for Change, our Compliance Division isn't just about rules, it's about protecting the heart of everything we do...",
      fullStatement: "At Simei's Synergy for Change, our Compliance Division isn't just about rules, it's about protecting the heart of everything we do. We've been entrusted with ensuring that every part of our work, from how we handle finances to how we run our programs, stays true to the laws, values, and ethics that define us. Our foundation is built on transparency, accountability, and integrity, and it's our job to make sure those values aren't just words on paper, but real in every decision, every partnership, and every action. We work behind the scenes to build trust, not just with donors and partners, but also with the communities we serve and the team we work alongside. That means setting up strong internal systems, regularly reviewing our processes, and making sure we're doing things right, not just fast. For us, compliance isn't about ticking boxes, it's about protecting the mission, ensuring long term impact, and doing right by the people who believe in us. Whether we're overseeing a local outreach or managing global partnerships, we're always asking: Are we honoring the trust placed in us? Are we using every resource responsibly? Our work is a quiet promise, that behind every smile we help create, there's a structure of honesty, care, and responsibility holding it up. That's what drives us, every single day."
    },
    {
      id: 6,
      name: "Briton Waweru",
      position: "Compliance Division",
      image: "/briton.jpg",
      shortStatement: "At Simei's Synergy for Change, our Compliance Division isn't just about rules, it's about protecting the heart of everything we do...",
      fullStatement: "At Simei's Synergy for Change, our Compliance Division isn't just about rules, it's about protecting the heart of everything we do. We've been entrusted with ensuring that every part of our work, from how we handle finances to how we run our programs, stays true to the laws, values, and ethics that define us. Our foundation is built on transparency, accountability, and integrity, and it's our job to make sure those values aren't just words on paper, but real in every decision, every partnership, and every action. We work behind the scenes to build trust, not just with donors and partners, but also with the communities we serve and the team we work alongside. That means setting up strong internal systems, regularly reviewing our processes, and making sure we're doing things right, not just fast. For us, compliance isn't about ticking boxes, it's about protecting the mission, ensuring long term impact, and doing right by the people who believe in us. Whether we're overseeing a local outreach or managing global partnerships, we're always asking: Are we honoring the trust placed in us? Are we using every resource responsibly? Our work is a quiet promise, that behind every smile we help create, there's a structure of honesty, care, and responsibility holding it up. That's what drives us, every single day."
    },
    {
      id: 7,
      name: "Asha Kavosi",
      position: "Creative and Outreach",
      image: "/asha.jpg",
      shortStatement: "Behind every caption, every comment, and every campaign is a deep love for communication, connection, and community...",
      fullStatement: "Behind every caption, every comment, and every campaign is a deep love for communication, connection, and community. And I'm proud of the heart I pour into every post. I don't just push content—I tell stories."
    }
  ];

  const toggleExpanded = (leaderId: number) => {
    setExpandedLeader(expandedLeader === leaderId ? null : leaderId);
  };

  return (
    <section id="leadership" className="py-20 bg-gradient-to-br from-cream to-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading text-gray-800 mb-6 sm:mb-8 tracking-tight animate-slide-in-left">
            Meet Our <span className="text-orange">Leadership</span>
          </h2>
          <p className="text-lg sm:text-xl font-body text-gray-600 max-w-4xl mx-auto font-light leading-relaxed px-2 animate-slide-in-right animate-delay-300">
            Passionate individuals dedicated to creating lasting change and empowering communities 
            through compassionate leadership and unwavering commitment to our mission.
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
          {leaders.map((leader, index) => (
            <div 
              key={leader.id}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Leader Photo */}
              <div className="relative">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className={`w-full h-64 sm:h-72 hover:scale-105 transition-transform duration-500 ${
                    leader.id === 2 ? 'object-cover object-top' : 'object-cover'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-3 sm:p-4 animate-slide-in-up animate-delay-300">
                    <h3 className="text-lg sm:text-xl font-heading text-gray-800 mb-1 animate-typewriter">{leader.name}</h3>
                    <p className="text-sm sm:text-base font-body text-orange font-semibold animate-fade-in-up animate-delay-500">{leader.position}</p>
                  </div>
                </div>
                {leader.id === 1 && (
                  <div className="absolute top-4 right-4 animate-pulse-slow">
                    <div className="bg-gradient-to-r from-lime to-orange rounded-full p-2 border-2 border-white/50">
                      <Star className="h-5 w-5 text-white" />
                    </div>
                  </div>
                )}
              </div>

              {/* Leader Statement */}
              <div className="p-6 sm:p-8">
                <div className="flex items-start mb-4">
                  <Quote className="h-6 w-6 text-lime mr-3 mt-1 flex-shrink-0 animate-float" />
                  <div className="flex-1">
                    <p className="font-body text-gray-700 leading-relaxed text-sm sm:text-base animate-fade-in-up animate-delay-200">
                      {expandedLeader === leader.id ? leader.fullStatement : leader.shortStatement}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => toggleExpanded(leader.id)}
                  className="flex items-center justify-center w-full mt-6 bg-gradient-to-r from-lime/10 to-orange/10 hover:from-lime/20 hover:to-orange/20 text-gray-700 px-4 py-3 rounded-xl font-body font-semibold transition-all duration-300 transform hover:scale-105 border border-gray-200 hover:border-orange/30 animate-shimmer animate-delay-700"
                >
                  <span className="mr-2">
                    {expandedLeader === leader.id ? 'Read Less' : 'Read More'}
                  </span>
                  {expandedLeader === leader.id ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Team Unity Message */}
        <div className="mt-16 sm:mt-20">
          <div className="bg-gradient-to-r from-lime via-orange to-lime rounded-3xl p-8 sm:p-12 md:p-16 text-white text-center shadow-2xl border border-white/20 animate-fade-in-up animate-delay-1000">
            <Users className="h-16 w-16 sm:h-20 sm:w-20 text-white mx-auto mb-6 sm:mb-8 animate-float" />
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading mb-6 sm:mb-8 tracking-tight animate-pulse-slow">
              United in Purpose
            </h3>
            <p className="text-lg sm:text-xl md:text-2xl font-body max-w-5xl mx-auto leading-relaxed font-light px-2 animate-fade-in-up animate-delay-200">
              Our diverse leadership team brings together unique perspectives, skills, and experiences, 
              all united by a shared commitment to creating positive change. Together, we ensure that 
              every decision reflects our values of compassion, transparency, and sustainable impact.
            </p>
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-gray-800 px-8 py-3 rounded-2xl font-body font-semibold transition-all duration-300 transform hover:scale-105 animate-shimmer animate-delay-500"
              >
                Connect With Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;