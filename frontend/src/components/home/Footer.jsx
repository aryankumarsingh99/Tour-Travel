import React from 'react';


import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Building2, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 md:py-12">
      <div className="w-full px-4 sm:px-5 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12 mb-8 md:mb-12">
          {/* Company/About */}
          <div>
            <h3 className="font-bold mb-4 md:mb-6 text-sm md:text-lg flex items-center gap-2"><Building2 className="w-4 md:w-5 h-4 md:h-5" /> About Us</h3>
            <ul className="space-y-2 md:space-y-3 text-gray-400 text-xs md:text-base">
              <li className="flex items-center gap-2"><Building2 className="w-3 md:w-4 h-3 md:h-4" /><Link to="/about" className="hover:text-white transition">TravelCo Pvt. Ltd.</Link></li>
              <li className="flex items-center gap-2"><span className="font-mono text-[10px] md:text-xs">GSTIN:</span> 27AAECS1234F1ZB</li>
              <li className="flex items-center gap-2"><span className="font-mono text-[10px] md:text-xs">Reg. No:</span> 1234567890</li>
            </ul>
            <p className="text-gray-400 text-[10px] md:text-sm mt-3 md:mt-4">Making journeys memorable since 2010.</p>
          </div>
          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4 md:mb-6 text-sm md:text-lg flex items-center gap-2"><Mail className="w-4 md:w-5 h-4 md:h-5" /> Contact</h3>
            <ul className="space-y-2 md:space-y-3 text-gray-400 text-xs md:text-base">
              <li className="flex items-center gap-2"><Mail className="w-3 md:w-4 h-3 md:h-4" /><a href="mailto:hello@swiftrise.com" className="hover:text-white transition">hello@swiftrise.com</a></li>
              <li className="flex items-center gap-2"><Phone className="w-3 md:w-4 h-3 md:h-4" /><a href="tel:+9118001234567" className="hover:text-white transition">+91 1800-123-4567</a></li>
              <li className="flex items-center gap-2"><MessageSquare className="w-3 md:w-4 h-3 md:h-4" /><a href="https://wa.me/9118001234567" className="hover:text-white transition">+91 1800-123-4567</a></li>
            </ul>
            <p className="text-gray-400 text-[10px] md:text-sm mt-3 md:mt-4">Mon-Sat: 9am - 8pm IST</p>
          </div>
          {/* Address */}
          <div>
            <h3 className="font-bold mb-4 md:mb-6 text-sm md:text-lg flex items-center gap-2"><MapPin className="w-4 md:w-5 h-4 md:h-5" /> Address</h3>
            <ul className="space-y-2 md:space-y-3 text-gray-400 text-xs md:text-base">
              <li className="flex items-center gap-2"><MapPin className="w-3 md:w-4 h-3 md:h-4" />4th Floor, Sunrise Tower</li>
              <li className="flex items-center gap-2"><MapPin className="w-3 md:w-4 h-3 md:h-4" />Andheri East, Mumbai 400069</li>
              <li className="flex items-center gap-2"><MapPin className="w-3 md:w-4 h-3 md:h-4" />India</li>
            </ul>
            <p className="text-gray-400 text-[10px] md:text-sm mt-3 md:mt-4">View on <a href="https://goo.gl/maps/xyz" className="hover:text-white underline transition">Google Maps</a></p>
          </div>
          {/* Payment Methods */}
          <div>
  <h3 className="font-bold mb-4 md:mb-6 text-sm md:text-lg text-white">Payment Methods</h3>

  <div className="grid grid-cols-4 gap-1 md:gap-4 mb-4">
    {/* Visa */}
    <div className="bg-white rounded-md md:rounded-xl flex items-center justify-center h-7 md:h-14 shadow-sm">
      <svg viewBox="0 0 48 32" className="h-2.5 md:h-6">
        <rect width="48" height="32" rx="6" fill="#1A1F71" />
        <text
          x="50%"
          y="65%"
          textAnchor="middle"
          fontSize="14"
          fontWeight="900"
          fill="#fff"
          fontFamily="Arial Black, Arial, sans-serif"
        >
          VISA
        </text>
      </svg>
    </div>

    {/* MasterCard */}
      <div className="bg-white rounded-md md:rounded-xl flex items-center justify-center h-7 md:h-14 shadow-sm">
            <svg viewBox="0 0 48 32" className="h-2.5 md:h-6">
              <circle cx="22" cy="16" r="8" fill="#EB001B" />
              <circle cx="26" cy="16" r="8" fill="#F79E1B" />
            </svg>
          </div>

          {/* AMEX */}
          <div className="bg-white rounded-md md:rounded-xl flex items-center justify-center h-7 md:h-14 shadow-sm">
            <svg viewBox="0 0 48 32" className="h-2.5 md:h-6">
              <rect width="48" height="32" rx="6" fill="#2E77BB" />
              <text
                x="50%"
                y="65%"
                textAnchor="middle"
                fontSize="12"
                fontWeight="900"
                fill="#fff"
                fontFamily="Arial Black, Arial, sans-serif"
              >
                AMEX
              </text>
            </svg>
          </div>

          {/* RuPay */}
          <div className="bg-white rounded-md md:rounded-xl flex items-center justify-center h-7 md:h-14 shadow-sm">
            <svg viewBox="0 0 48 32" className="h-2.5 md:h-6">
              <text
                x="8"
                y="21"
                fontSize="12"
                fontWeight="900"
                fill="#1B1464"
                fontFamily="Arial Black, Arial, sans-serif"
              >
                RuPay
              </text>
              <rect x="32" y="8" width="4" height="16" rx="2" fill="#F58220" />
              <rect x="38" y="8" width="4" height="16" rx="2" fill="#0072CE" />
            </svg>
          </div>
        </div>

        <p className="text-[10px] md:text-sm text-gray-400 leading-relaxed">
          We value and protect your personal data.
        </p>
      </div>

        </div>
        <div className="border-t border-gray-800 pt-6 md:pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
          <p className="text-gray-400 text-[10px] md:text-sm">Copyright © 2024 TravelCo. All Rights Reserved</p>
          <div className="flex gap-1 md:gap-4">
            <a href="#" className="w-6 h-6 md:w-11 md:h-11 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition">
              <Facebook className="w-3 h-3 md:w-5 md:h-5 text-white" />
            </a>
            <a href="#" className="w-6 h-6 md:w-11 md:h-11 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition">
              <Twitter className="w-3 h-3 md:w-5 md:h-5 text-white" />
            </a>
            <a href="#" className="w-6 h-6 md:w-11 md:h-11 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition">
              <Instagram className="w-3 h-3 md:w-5 md:h-5 text-white" />
            </a>
            <a href="#" className="w-6 h-6 md:w-11 md:h-11 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-900 transition">
              <Linkedin className="w-3 h-3 md:w-5 md:h-5 text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
