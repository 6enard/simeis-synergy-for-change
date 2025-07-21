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
      position: "Vice Chair",
      image: "/Dave.jpg",
      shortStatement: "I founded Simei's Synergy for Change not as an organization, but as a response to the silent cries I saw in children without homes...",
      fullStatement: "I founded Simei's Synergy for Change (SSC) not as an organization, but as a response, a response to the silent cries I saw in children without homes, families left in crisis, and communities weighed down by struggle yet forgotten by the world. On December 4th, 2023, I chose to stop watching from the sidelines and instead become part of the solution. SSC was born from a place of compassion, not convenience, a movement rooted in love, dignity, and action. From feeding the hungry on city streets to standing with children in forgotten homes and supporting less fortunate families, we have walked where others turn away. As the Founder and CEO, I do not lead from above, but alongside, ensuring that every decision, every outreach, and every effort carries the weight of purpose and the warmth of humanity. SSC is a call to everyone who believes that small acts can create great waves; it's for the forgotten, the unseen, and also for those who've always wanted to help, but didn't know how. Here, we don't just give hope, we become it."
    },
    {
      id: 3,
      name: "Darlene Kiptoo",
      position: "Vice Chair",
      image: "/darlene.jpg",
      shortStatement: "I founded Simei's Synergy for Change not as an organization, but as a response to the silent cries I saw in children without homes...",
      fullStatement: "I founded Simei's Synergy for Change (SSC) not as an organization, but as a response, a response to the silent cries I saw in children without homes, families left in crisis, and communities weighed down by struggle yet forgotten by the world. On December 4th, 2023, I chose to stop watching from the sidelines and instead become part of the solution. SSC was born from a place of compassion, not convenience, a movement rooted in love, dignity, and action. From feeding the hungry on city streets to standing with children in forgotten homes and supporting less fortunate families, we have walked where others turn away. As the Founder and CEO, I do not lead from above, but alongside, ensuring that every decision, every outreach, and every effort carries the weight of purpose and the warmth of humanity. SSC is a call to everyone who believes that small acts can create great waves; it's for the forgotten, the unseen, and also for those who've always wanted to help, but didn't know how. Here, we don't just give hope, we become it."
    },
    {
      id: 4,
      name: "Roselinda Gitau",
      position: "Financial Manager",
      image: "/darlene.jpg",
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
      name: "Aisha Kavosi",
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading text-gray-800 mb-6 sm:mb-8 tracking-tight animate-slide-in-up">
            Meet Our <span className="text-orange">Leadership</span>
          </h2>
          <p className="text-lg sm:text-xl font-body text-gray-600 max-w-4xl mx-auto font-light leading-relaxed px-2 animate-fade-in-up animate-stagger-1">
            Passionate individuals dedicated to creating lasting change and empowering communities 
            through compassionate leadership and unwavering commitment to our mission.
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
          {leaders.map((leader, index) => (
            <div 
              key={leader.id}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden animate-fade-in-scale"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Leader Photo */}
              <div className="relative">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-64 sm:h-72 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-3 sm:p-4">
                    <h3 className="text-lg sm:text-xl font-heading text-gray-800 mb-1">{leader.name}</h3>
                    <p className="text-sm sm:text-base font-body text-orange font-semibold">{leader.position}</p>
                  </div>
                </div>
                {leader.id === 1 && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-gradient-to-r from-lime to-orange rounded-full p-2 border-2 border-white/50">
                      <Star className="h-5 w-5 text-white" />
                    </div>
                  </div>
                )}
              </div>

              {/* Leader Statement */}
              <div className="p-6 sm:p-8">
                <div className="flex items-start mb-4">
                  <Quote className="h-6 w-6 text-lime mr-3 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="font-body text-gray-700 leading-relaxed text-sm sm:text-base">
                      {expandedLeader === leader.id ? leader.fullStatement : leader.shortStatement}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => toggleExpanded(leader.id)}
                  className="flex items-center justify-center w-full mt-6 bg-gradient-to-r from-lime/10 to-orange/10 hover:from-lime/20 hover:to-orange/20 text-gray-700 px-4 py-3 rounded-xl font-body font-semibold transition-all duration-300 transform hover:scale-105 border border-gray-200 hover:border-orange/30"
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
          <div className="bg-gradient-to-r from-lime via-orange to-lime rounded-3xl p-8 sm:p-12 md:p-16 text-white text-center shadow-2xl border border-white/20">
            <Users className="h-16 w-16 sm:h-20 sm:w-20 text-white mx-auto mb-6 sm:mb-8" />
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading mb-6 sm:mb-8 tracking-tight">
              United in Purpose
            </h3>
            <p className="text-lg sm:text-xl md:text-2xl font-body max-w-5xl mx-auto leading-relaxed font-light px-2">
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
                className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-gray-800 px-8 py-3 rounded-2xl font-body font-semibold transition-all duration-300 transform hover:scale-105"
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