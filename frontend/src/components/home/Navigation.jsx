import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { User, X } from 'lucide-react';
import { TfiAlignJustify } from 'react-icons/tfi';
import logo from '../../assets/logo.png';

export default function Navigation({ mobileMenuOpen, setMobileMenuOpen, setLoginModalOpen }) {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  const getLinkClasses = (path) => {
    const baseClasses =
      "flex items-center justify-center px-4 py-2 text-sm rounded-md transition-all duration-300";

    if (isActive(path)) {
      return `${baseClasses} bg-gradient-to-r from-[#0892D0] to-[#4B0082] bg-clip-text text-transparent font-semibold border-b-2 border-[#0892D0]`;
    }

    return `${baseClasses} text-gray-600 font-medium hover:text-[#0892D0]`;
  };

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
        <div className="w-full px-3 py-3 md:px-10 md:py-4 flex items-center justify-between">

          {/* LOGO SECTION */}
          <div
            onClick={() => navigate('/')}
            className="flex items-center gap-2 cursor-pointer lg:ml-39"
          >
            <img
              src={logo}
              alt="Jai Guru Travels Logo"
              className="w-12 h-10 md:w-16 md:h-16 lg:w-16 lg:h-16 object-contain"
            />

            
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden text-gray-800 p-1 rounded-md focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="space-y-1">
              <span 
                className={`block w-5 h-0.5 bg-gray-800 transition-all duration-300 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              ></span>
              <span 
                className={`block w-5 h-0.5 bg-gray-800 transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span 
                className={`block w-5 h-0.5 bg-gray-800 transition-all duration-300 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              ></span>
            </div>
          </button>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center justify-center gap-10">
            <Link to="/" className={getLinkClasses('/')}>Home</Link>
            <Link to="/about" className={getLinkClasses('/about')}>About</Link>
            <Link to="/services" className={getLinkClasses('/services')}>Services</Link>
            <Link to="/car-rental" className={getLinkClasses('/car-rental')}>Car Rental</Link>
            <Link to="/contact" className={getLinkClasses('/contact')}>Contact</Link>
          </div>

          {/* LOGIN BUTTON */}
          <button
            onClick={() => setLoginModalOpen(true)}
            className="hidden md:flex items-center justify-center px-6 py-2 rounded-full text-sm font-medium shadow-md bg-gradient-to-r from-[#0892D0] to-[#4B0082] text-white hover:scale-105 transition-all duration-300"
          >
            <User className="w-4 h-4 mr-2" />
            Login
          </button>
        </div>

      </nav>

      {/* MOBILE MENU - SLIDE DOWN */}
      <div 
        className={`md:hidden fixed top-[64px] left-1/2 -translate-x-1/2 w-[70%] max-w-xs bg-gradient-to-br from-white via-blue-50 to-purple-50 shadow-lg rounded-lg overflow-hidden transition-all duration-500 ease-in-out z-40 ${
          mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-3 py-2 space-y-1">
          {[
            { path: '/', label: 'Home' },
            { path: '/about', label: 'About' },
            { path: '/services', label: 'Services' },
            { path: '/car-rental', label: 'Car Rental' },
            { path: '/contact', label: 'Contact' }
          ].map((item, index) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-2 py-1 rounded text-center text-xs font-medium transition-all duration-300 transform ${
                isActive(item.path)
                  ? 'bg-gradient-to-r from-[#0892D0] to-[#4B0082] text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gradient-to-r hover:from-[#0892D0] hover:to-[#4B0082] hover:text-white shadow-md hover:shadow-lg hover:scale-105'
              }`}
              style={{
                animationDelay: `${index * 50}ms`,
                animation: mobileMenuOpen ? 'slideInDown 0.4s ease-out forwards' : 'none'
              }}
            >
              {item.label}
            </Link>
          ))}

          <button
            onClick={() => {
              setLoginModalOpen(true);
              setMobileMenuOpen(false);
            }}
            className="w-full mt-1.5 px-2 py-1 rounded text-center text-xs font-medium bg-gradient-to-r from-[#0892D0] to-[#4B0082] text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            style={{
              animationDelay: '250ms',
              animation: mobileMenuOpen ? 'slideInDown 0.4s ease-out forwards' : 'none'
            }}
          >
            <User className="w-3 h-3 inline mr-1" />
            Login
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}