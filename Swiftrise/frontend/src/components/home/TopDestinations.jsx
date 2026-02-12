import React from 'react';
import { Star, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function TopDestinations({ destinations, londonDestinations }) {
  const navigate = useNavigate();

  return (
    <section className="relative w-full bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#0892D0]/10 text-[#4B0082] px-4 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-4">
            Curated Experiences
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Top Destinations
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Handpicked journeys loved by thousands of travelers worldwide.
          </p>
        </div>

        {/* INDIA SECTION */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">
            Famous Worship Places
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {destinations.map((dest, idx) => (
              <DestinationCard
                key={idx}
                dest={dest}
                delay={idx * 120}
                onBook={() => navigate('/checkout')}
              />
            ))}
          </div>
        </div>

        {/* SECOND GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {londonDestinations.map((dest, idx) => (
            <DestinationCard
              key={idx}
              dest={dest}
              delay={idx * 120}
              onBook={() => navigate('/checkout')}
            />
          ))}
        </div>

        {/* FOOTER CTA */}
        <div className="flex justify-center">
          <button
            className="
              px-10 py-3 rounded-full font-semibold text-white
              bg-gradient-to-r from-[#0892D0] to-[#4B0082]
              shadow-lg hover:shadow-2xl
              hover:scale-105 active:scale-95
              transition-all duration-300
            "
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
      className="
        group bg-white rounded-2xl overflow-hidden
        shadow-md hover:shadow-2xl
        transition-all duration-500
        opacity-0 animate-cardFadeUp
      "
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <img
          src={dest.image}
          alt={dest.title}
          className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* SUBTLE OVERLAY */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition duration-500" />
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <h4 className="font-semibold text-base mb-3 text-gray-900 line-clamp-2 min-h-[3rem]">
          {dest.title}
        </h4>

        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <MapPin className="w-4 h-4 text-[#4B0082]" />
          <span className="truncate">{dest.location}</span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1 mb-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-semibold text-gray-900">
                {dest.rating}
              </span>
            </div>
            <div className="text-xl font-bold text-[#4B0082]">
              {dest.price}
            </div>
          </div>

          <button
            onClick={onBook}
            className="
              px-5 py-2.5 rounded-full text-sm font-semibold text-white
              bg-gradient-to-r from-[#0892D0] to-[#4B0082]
              shadow-md hover:shadow-xl
              hover:scale-105 active:scale-95
              transition-all duration-300
            "
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