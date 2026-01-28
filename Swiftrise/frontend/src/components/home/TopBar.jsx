import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

export default function TopBar() {
  return (
    <div style={{ backgroundColor: '#1CA8CB' }} className="hidden md:block">
      <div className="w-full px-4 sm:px-6 md:px-8 py-1.5 md:py-2 flex items-center justify-between text-xs md:text-sm">
        <div className="flex items-center gap-3 md:gap-6 text-white flex-wrap">
          <div className="flex items-center gap-1.5 md:gap-2">
            <MapPin className="w-3 h-3" />
            <span>New York, USA</span>
          </div>
          <div className="flex items-center gap-1.5 md:gap-2">
            <Clock className="w-3 h-3" />
            <span className="hidden lg:inline">{new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</span>
          </div>
          <div className="flex items-center gap-1.5 md:gap-2">
            <Phone className="w-3 h-3" />
            <span>+1 234 567 890</span>
          </div>
          <div className="flex items-center gap-1.5 md:gap-2 hidden lg:flex">
            <Clock className="w-3 h-3" />
            <span>Mon-Fri: 9:00 AM - 6:00 PM</span>
          </div>
        </div>
        <div className="flex items-center gap-2 md:gap-4 text-white">
          <select className="bg-transparent border-none text-xs md:text-sm">
            <option>English</option>
            <option>Spanish</option>
          </select>
          <select className="bg-transparent border-none text-xs md:text-sm">
            <option>USD</option>
            <option>EUR</option>
          </select>
        </div>
      </div>
    </div>
  );
}
