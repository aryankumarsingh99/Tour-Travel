import React from 'react';
import { Star, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function TopDestinations({ destinations, londonDestinations }) {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-gray-50 py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Top Destinations
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Our most popular tours selected for quality and satisfaction
            </p>
          </div>
        </div>

        {/* INDIA */}
        <h3 className="text-lg sm:text-xl font-semibold mb-6 text-gray-800">
          Famous Worship Places
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {destinations.map((dest, idx) => (
            <DestinationCard
              key={idx}
              dest={dest}
              delay={idx * 120}
              onBook={() => navigate('/checkout')}
            />
          ))}
        </div>

        {/* LONDON */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {londonDestinations.map((dest, idx) => (
            <DestinationCard
              key={idx}
              dest={dest}
              delay={idx * 120}
              onBook={() => navigate('/checkout')}
            />
          ))}
        </div>

        {/* FOOTER BUTTON */}
        <div className="flex justify-center">
          <button
            className="border-2 px-6 sm:px-10 py-3 rounded-full font-semibold
                       w-full sm:w-auto transition
                       hover:scale-105 hover:shadow-lg active:scale-95 cursor-pointer"
            style={{ borderColor: '#1CA8CB', color: '#1CA8CB' }}
          >
            Explore More
          </button>
        </div>

      </div>
    </section>
  );
}

/* ---------------- DESTINATION CARD ---------------- */

function DestinationCard({ dest, delay, onBook }) {
  return (
    <div
      className="bg-white rounded-xl shadow-lg overflow-hidden
                 transition-all duration-500
                 hover:-translate-y-2 hover:shadow-xl
                 opacity-0 animate-cardFadeUp"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative overflow-hidden">
        <img
          src={dest.image}
          alt={dest.title}
          className="w-full h-52 object-cover transition-transform duration-700 hover:scale-110"
        />
      </div>

      <div className="p-5">
        <h4 className="font-semibold text-sm mb-3 text-gray-900 line-clamp-2 min-h-[2.5rem]">
          {dest.title}
        </h4>

        <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
          <MapPin className="w-3.5 h-3.5" />
          <span className="truncate">{dest.location}</span>
        </div>

        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-1 mb-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-semibold text-gray-900">
                {dest.rating}
              </span>
            </div>
            <div className="text-lg sm:text-xl font-bold text-blue-600">
              {dest.price}
            </div>
          </div>

          <button
            onClick={onBook}
            className="px-5 py-2 rounded-full text-sm font-medium text-white
                       transition hover:scale-105 hover:shadow-md
                       active:scale-95 cursor-pointer"
            style={{ backgroundColor: '#1CA8CB' }}
          >
            Book a Cab
          </button>
        </div>
      </div>

      {/* CARD ANIMATION */}
      <style>{`
        @keyframes cardFadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-cardFadeUp {
          animation: cardFadeUp 0.7s ease forwards;
        }
      `}</style>
    </div>
  );
}