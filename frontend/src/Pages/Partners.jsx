import React, { useState } from "react";
import { Info } from "lucide-react";

 import Navigation from "../components/home/Navigation";
import Footer from "../components/home/Footer";
import LoginModal from "../components/home/LoginModal";

/* ---------------- PARTNER CARD ---------------- */
const PartnerCard = ({ name, image, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="relative flex-shrink-0 w-[220px] sm:w-[300px] md:w-80 mx-2 sm:mx-4">
      <div
        className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer"
        onClick={() => setShowInfo(!showInfo)}
      >
        <div className="relative h-44 sm:h-64 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent"></div>

          <div className="absolute top-2 md:top-4 right-2 md:right-4 bg-white/90 backdrop-blur-sm rounded-full p-1.5 md:p-2 shadow-lg">
            <Info className="w-4 md:w-5 h-4 md:h-5 text-blue-700" />
          </div>
        </div>

        <div className="p-3 sm:p-6 bg-gradient-to-br from-blue-700 to-blue-800">
          <h3 className="text-base sm:text-2xl font-bold text-white mb-1 md:mb-2">
            {name}
          </h3>
          <div className="h-1 w-16 bg-white/50 rounded-full"></div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            showInfo ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-blue-900/95 backdrop-blur-sm p-3 sm:p-6 border-t border-white/10">
            <p className="text-white/90 text-xs sm:text-sm leading-relaxed mb-2 md:mb-3">
              {info}
            </p>
            <div className="flex items-center justify-between text-xs sm:text-xs text-white/70">
              <span>⭐ 4.8 Rating</span>
              <span>🚗 500+ Vehicles</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------------- MAIN PAGE ---------------- */
export default function Partners() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const partners = [
    {
      name: "CitySprint",
      image:
        "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=300&fit=crop",
      info:
        "Premium city transportation services with 24/7 availability. Our fleet includes luxury sedans and eco-friendly vehicles.",
    },
    {
      name: "UrbanRide",
      image:
        "https://images.unsplash.com/photo-1552345387-34f3c6bdcf7b?w=400&h=300&fit=crop",
      info:
        "Modern urban mobility solutions focused on comfort and efficiency.",
    },
    {
      name: "Airport Express",
      image:
        "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=400&h=300&fit=crop",
      info:
        "Specialized airport transfer services ensuring timely arrivals.",
    },
    {
      name: "RideWell",
      image:
        "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400&h=300&fit=crop",
      info:
        "Wellness-focused transportation with experienced chauffeurs.",
    },
  ];

  const infinitePartners = [...partners, ...partners];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <TopBar />

      <Navigation
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        setLoginModalOpen={setLoginModalOpen}
      />

      <LoginModal
        loginModalOpen={loginModalOpen}
        setLoginModalOpen={setLoginModalOpen}
        isSignup={isSignup}
        setIsSignup={setIsSignup}
      />

      {/* HERO */}
      <div className="relative py-10 sm:py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1600&h=600&fit=crop"
            className="w-full h-full object-cover"
            alt="Partners"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/90 to-blue-900/95"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-xl sm:text-4xl md:text-5xl font-bold mb-2 md:mb-4">
            Our Trusted Partners
          </h1>
          <p className="max-w-3xl mx-auto text-xs sm:text-base md:text-lg">
            Reliable transport providers ensuring comfort and safety.
          </p>
        </div>
      </div>

      {/* PARTNER SCROLL */}
      <div className="py-12 sm:py-16 overflow-hidden">
        <div className="flex animate-scroll w-max touch-pan-x">
          {infinitePartners.map((partner, index) => (
            <PartnerCard key={index} {...partner} />
          ))}
        </div>
      </div>

      <Footer />

      {/* SCROLL ANIMATION */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 18s linear infinite;
        }
      `}</style>
    </div>
  );
}