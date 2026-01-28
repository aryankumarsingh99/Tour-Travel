import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Info, Globe, Mail, User, Car, Compass, Briefcase } from 'lucide-react';
import { TfiAlignJustify } from 'react-icons/tfi';

export default function Navigation({ mobileMenuOpen, setMobileMenuOpen, setLoginModalOpen }) {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;
  
  const getLinkClasses = (path) => {
    const baseClasses =
      "flex items-center gap-2 transition-all duration-300 px-3 py-1.5 rounded-lg relative text-sm group";
    if (isActive(path)) {
      return `${baseClasses} text-blue-600 font-bold bg-gradient-to-r from-blue-50 to-cyan-50 border-b-4 border-blue-600 shadow-lg transform translate-y-[-2px] hover:shadow-xl hover:scale-105`;
    }
    return `${baseClasses} text-gray-600 hover:text-blue-600 font-medium hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 hover:translate-y-[-2px] hover:border-b-4 hover:border-cyan-400 hover:shadow-lg hover:scale-105`;
  };
  
  return (
    <>  
      <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200">
        <div className="w-full px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-300 cursor-pointer">
            <div className="w-8 h-8" style={{ backgroundColor: '#1CA8CB', borderRadius: '0.5rem', boxShadow: '0 2px 8px 0 rgba(0,0,0,0.08)' }}></div>
            <span className="text-xl font-bold" style={{ color: '#1CA8CB' }}>Jai Guru Travels</span>
          </div>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-gray-900 p-2 hover:bg-blue-50 rounded-lg transition-all duration-300 hover:scale-110 active:scale-95"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <TfiAlignJustify className="w-6 h-6" />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            <Link to="/" className={getLinkClasses('/')}>
              <Home className="w-4 h-4" />Home
            </Link>
            <Link to="/about" className={getLinkClasses('/about')}>
              <Info className="w-4 h-4" />About
            </Link>
            <Link to="/car-rental" className={getLinkClasses('/car-rental')}>
              <Car className="w-4 h-4" />Car Rental
            </Link>
            <Link to="/explore" className={getLinkClasses('/explore')}>
              <Compass className="w-4 h-4" />Explore
            </Link>
            <Link to="/services" className={getLinkClasses('/services')}>
              <Briefcase className="w-4 h-4" />Services
            </Link>

            {/* OUR PARTNERS BUTTON */}
            <Link to="/partners" className={getLinkClasses('/partners')}>
              <Globe className="w-4 h-4" />Our Partners
            </Link>

            <Link to="/contact" className={getLinkClasses('/contact')}>
              <Mail className="w-4 h-4" />Contact
            </Link>
            <Link to="/customerrepeat" className={getLinkClasses('/customerrepeat')}>
              <Mail className="w-4 h-4" />Repeat customer
            </Link>
          </div>
          
          <button 
            onClick={() => setLoginModalOpen(true)}
            className="hidden md:flex px-6 py-2 hover:bg-blue-700 rounded-full font-medium text-sm items-center gap-2 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: '#1CA8CB', color: 'white' }}
          >
            <User className="w-4 h-4" />
            Login
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden px-8 py-4 bg-gradient-to-b from-white to-blue-50 border-t border-gray-200 shadow-inner animate-slideDown">
            <div className="flex flex-col gap-2">
              <Link to="/" className={getLinkClasses('/')}>
                <Home className="w-4 h-4" />Home
              </Link>
              <Link to="/car-rental" className={getLinkClasses('/car-rental')}>
                <Car className="w-4 h-4" />Car Rental
              </Link>
              <Link to="/explore" className={getLinkClasses('/explore')}>
                <Compass className="w-4 h-4" />Explore
              </Link>
              <Link to="/about" className={getLinkClasses('/about')}>
                <Info className="w-4 h-4" />About
              </Link>
              <Link to="/services" className={getLinkClasses('/services')}>
                <Briefcase className="w-4 h-4" />Services
              </Link>

              {/* OUR PARTNERS (MOBILE) */}
              <Link to="/partners" className={getLinkClasses('/partners')}>
                <Globe className="w-4 h-4" />Our Partners
              </Link>

              <Link to="/contact" className={getLinkClasses('/contact')}>
                <Mail className="w-4 h-4" />Contact
              </Link>
              <Link to="/customerrepeat" className={getLinkClasses('/customerrepeat')}>
                <Mail className="w-4 h-4" />Rpt cstmr
              </Link>
              <button 
                onClick={() => setLoginModalOpen(true)}
                className="px-6 py-2 hover:bg-blue-700 rounded-full font-medium text-sm flex items-center gap-2 w-full justify-center mt-2 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
                style={{ backgroundColor: '#1CA8CB', color: 'white' }}
              >
                <User className="w-4 h-4" />
                Login
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}