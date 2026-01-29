import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { User } from 'lucide-react';
import { TfiAlignJustify } from 'react-icons/tfi';

export default function Navigation({ mobileMenuOpen, setMobileMenuOpen, setLoginModalOpen }) {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  const getLinkClasses = (path) => {
    const baseClasses =
      "flex items-center justify-center px-4 py-2 text-sm rounded-md transition-colors duration-200";
    if (isActive(path)) {
      return `${baseClasses} text-blue-600 font-semibold border-b-2 border-blue-600`;
    }
    return `${baseClasses} text-gray-600 font-medium`;
  };

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
        <div className="w-full px-10 py-4 flex items-center justify-between">

          {/* LOGO */}
          <div
            onClick={() => navigate('/')}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div
              className="w-8 h-8 rounded-lg"
              style={{
                backgroundColor: '#1CA8CB',
                boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
              }}
            ></div>
            <span className="text-xl font-bold" style={{ color: '#1CA8CB' }}>
              Jai Guru Travels
            </span>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden text-gray-800 p-2 rounded-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <TfiAlignJustify className="w-6 h-6" />
          </button>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center justify-center gap-10">
            <Link to="/" className={getLinkClasses('/')}>Home</Link>
            <Link to="/about" className={getLinkClasses('/about')}>About</Link>
            <Link to="/services" className={getLinkClasses('/services')}>Services</Link>
            <Link to="/car-rental" className={getLinkClasses('/car-rental')}>Car Rental</Link>
            <Link to="/contact" className={getLinkClasses('/contact')}>Contact</Link>
          </div>

          {/* LOGIN */}
          <button
            onClick={() => setLoginModalOpen(true)}
            className="hidden md:flex items-center justify-center px-6 py-2 rounded-full text-sm font-medium shadow-sm"
            style={{ backgroundColor: '#1CA8CB', color: 'white' }}
          >
            <User className="w-4 h-4 mr-2" />
            Login
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="md:hidden px-8 py-6 bg-white border-t border-gray-200">
            <div className="flex flex-col items-center gap-6">
              <Link to="/" className={getLinkClasses('/')}>Home</Link>
              <Link to="/about" className={getLinkClasses('/about')}>About</Link>
              <Link to="/services" className={getLinkClasses('/services')}>Services</Link>
              <Link to="/car-rental" className={getLinkClasses('/car-rental')}>Car Rental</Link>
              <Link to="/contact" className={getLinkClasses('/contact')}>Contact</Link>

              <button
                onClick={() => setLoginModalOpen(true)}
                className="w-full px-6 py-2 rounded-full text-sm font-medium shadow-sm"
                style={{ backgroundColor: '#1CA8CB', color: 'white' }}
              >
                <User className="w-4 h-4 inline mr-2" />
                Login
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}