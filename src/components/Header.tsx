import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, userProfile, logout } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  const handleBookNow = () => {
    if (user && userProfile) {
      navigate('/rooms');
    } else {
      navigate('/login');
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-1 sm:py-2">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm">
          <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>0758 000 010</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>hotelthewillis@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 mt-1 sm:mt-0">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">P.O Box 669-20400 Bomet, Kenya</span>
            <span className="sm:hidden">Bomet, Kenya</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="bg-white/95">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 hover:opacity-90 transition-opacity">
            <img src="/logo.png" alt="The Willis Hotel" className="h-10 sm:h-12 md:h-14 w-auto" />
            <span className="text-xl sm:text-2xl md:text-3xl font-playfair font-bold text-slate-900">
              The Willis Hotel
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6 2xl:space-x-10 font-poppins">
            {[
              { to: '/', label: 'Home' },
              { to: '/rooms', label: 'Rooms' },
              { to: '/amenities', label: 'Amenities' },
              { to: '/dining', label: 'Dining' },
              { to: '/events', label: 'Events' },
              { to: '/gallery', label: 'Gallery' },
              { to: '/contact', label: 'Contact' },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`text-sm xl:text-base transition-colors relative group ${
                  isActive(item.to)
                    ? 'text-orange font-semibold'
                    : 'text-slate-700 hover:text-orange'
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-slate-700 text-sm">
                  Welcome, {userProfile?.fullName || user.email}
                </span>
                {userProfile?.isAdmin && (
                  <Link to="/admin/dashboard" className="text-sm text-slate-700 hover:text-orange">
                    Dashboard
                  </Link>
                )}
                <button
                  onClick={logout}
                  className="bg-red-600 text-white px-3 py-2 rounded-xl text-sm hover:bg-red-700 transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/admin/login" className="text-sm text-slate-700 hover:text-orange">
                Admin
              </Link>
            )}

            <button
              onClick={handleBookNow}
              className="bg-slate-900 text-white px-4 py-2 rounded-2xl hover:bg-slate-800 text-sm font-medium transition transform hover:scale-105 shadow-md"
            >
              Book Now
            </button>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-800 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md shadow-xl border-t border-gray-200 z-40">
          <nav className="flex flex-col py-6 px-4 font-poppins">
            {[
              { to: '/', label: 'Home' },
              { to: '/rooms', label: 'Rooms' },
              { to: '/amenities', label: 'Amenities' },
              { to: '/dining', label: 'Dining' },
              { to: '/events', label: 'Events' },
              { to: '/gallery', label: 'Gallery' },
              { to: '/contact', label: 'Contact' },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setIsMenuOpen(false)}
                className={`py-3 px-4 text-base rounded-lg transition-colors ${
                  isActive(item.to)
                    ? 'text-orange bg-orange/10 font-semibold'
                    : 'text-slate-700 hover:text-orange hover:bg-orange/5'
                }`}
              >
                {item.label}
              </Link>
            ))}

            {user ? (
              <>
                <div className="py-3 px-4 text-sm text-slate-700">
                  Welcome, {userProfile?.fullName?.split(' ')[0] || user.email}
                </div>
                {userProfile?.isAdmin && (
                  <Link
                    to="/admin/dashboard"
                    onClick={() => setIsMenuOpen(false)}
                    className="py-3 px-4 text-base text-slate-700 hover:text-orange hover:bg-orange/5 rounded-lg"
                  >
                    Admin Dashboard
                  </Link>
                )}
                <button
                  onClick={() => {
                    logout();
                    setIsMenuOpen(false);
                  }}
                  className="mt-2 bg-red-600 text-white px-4 py-3 rounded-lg hover:bg-red-700 font-medium transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    navigate('/login');
                    setIsMenuOpen(false);
                  }}
                  className="py-3 px-4 text-base text-slate-700 hover:text-orange hover:bg-orange/5 rounded-lg transition"
                >
                  Sign In
                </button>
                <Link
                  to="/admin/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="py-3 px-4 text-base text-slate-700 hover:text-orange hover:bg-orange/5 rounded-lg transition"
                >
                  Admin Login
                </Link>
              </>
            )}

            <button
              onClick={handleBookNow}
              className="mt-4 bg-slate-900 text-white px-4 py-3 rounded-2xl hover:bg-slate-800 font-medium transition transform hover:scale-105"
            >
              Book Now
            </button>

            <div className="pb-6"></div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
