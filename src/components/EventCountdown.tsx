import React, { useState, useEffect } from 'react';
import { Calendar, Clock } from 'lucide-react';

export default function EventCountdown() {
  const eventDate = new Date('2025-10-13T00:00:00');

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = eventDate.getTime() - now.getTime();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        expired: true
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      expired: false
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-orange via-lime to-orange relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6 animate-bounce">
            <Calendar className="h-6 w-6 text-white mr-2" />
            <span className="text-white font-semibold">Next Event</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading text-white mb-4 tracking-tight">
            Join Us on October 13th, 2025
          </h2>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            Be part of something meaningful. Together we can make a difference.
          </p>
        </div>

        {!timeLeft.expired ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
            <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-6 sm:p-8 border border-white/30 transform hover:scale-105 transition-all duration-300 hover:bg-white/30">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2 font-mono">
                {String(timeLeft.days).padStart(2, '0')}
              </div>
              <div className="text-sm sm:text-base text-white/80 font-semibold uppercase tracking-wider">
                Days
              </div>
            </div>

            <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-6 sm:p-8 border border-white/30 transform hover:scale-105 transition-all duration-300 hover:bg-white/30">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2 font-mono">
                {String(timeLeft.hours).padStart(2, '0')}
              </div>
              <div className="text-sm sm:text-base text-white/80 font-semibold uppercase tracking-wider">
                Hours
              </div>
            </div>

            <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-6 sm:p-8 border border-white/30 transform hover:scale-105 transition-all duration-300 hover:bg-white/30">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2 font-mono">
                {String(timeLeft.minutes).padStart(2, '0')}
              </div>
              <div className="text-sm sm:text-base text-white/80 font-semibold uppercase tracking-wider">
                Minutes
              </div>
            </div>

            <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-6 sm:p-8 border border-white/30 transform hover:scale-105 transition-all duration-300 hover:bg-white/30">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2 font-mono">
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
              <div className="text-sm sm:text-base text-white/80 font-semibold uppercase tracking-wider">
                Seconds
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-12 border border-white/30 max-w-2xl mx-auto text-center">
            <Clock className="h-16 w-16 text-white mx-auto mb-4" />
            <h3 className="text-2xl sm:text-3xl font-heading text-white mb-2">
              Event Day is Here!
            </h3>
            <p className="text-lg text-white/90">
              Thank you for being part of this journey.
            </p>
          </div>
        )}

        <div className="mt-12 text-center">
          <p className="text-white/90 text-lg mb-6">
            Want to be part of this event? Get in touch with us!
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-orange hover:bg-gray-100 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
