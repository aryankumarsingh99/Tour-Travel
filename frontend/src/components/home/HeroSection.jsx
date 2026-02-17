import React, { useEffect, useRef, useState } from "react";
import { MapPin, Car, Plane, Route, ChevronDown, Sparkles, Shield, Clock } from "lucide-react";

export default function HeroSection({
  activeTab,
  setActiveTab,
  onAddStop,
}) {
  const videos = [
    "/video.mp4",
    "/video4.mp4",
  ];

  const videoRef = useRef(null);
  const hasScrolledRef = useRef(false);
  const [videoIndex, setVideoIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playNext = () => {
      setFade(false);
      setTimeout(() => {
        setVideoIndex((prev) => (prev + 1) % videos.length);
        setFade(true);
      }, 600);
    };

    video.addEventListener("ended", playNext);
    return () => video.removeEventListener("ended", playNext);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.src = videos[videoIndex];
    video.load();
    video.play().catch(() => {});
  }, [videoIndex]);

  const tabConfig = [
    { name: "Local Trip", icon: MapPin, color: "from-blue-500 to-cyan-500" },
    { name: "Taxi Packages", icon: Car, color: "from-purple-500 to-pink-500" },
    { name: "Airport Transfer", icon: Plane, color: "from-indigo-500 to-blue-500" },
    { name: "Multiway", icon: Route, color: "from-emerald-500 to-teal-500" },
  ];

  const scrollToBooking = () => {
    if (hasScrolledRef.current) return; // Exit if already scrolled
    
    hasScrolledRef.current = true; // Mark as scrolled
    setTimeout(() => {
      window.scrollBy({
        top: 190,
        behavior: 'smooth'
      });
    }, 100);
  };

  return (
    <section className="relative w-full min-h-[60vh] md:min-h-[75vh] lg:min-h-[85vh] overflow-hidden bg-gradient-to-b from-black/10 to-black/30">
      
      {/* VIDEO BACKGROUND */}
      <video
        ref={videoRef}
        muted
        playsInline
        autoPlay
        preload="auto"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* MODERN GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0892D0]/10 via-transparent to-[#4B0082]/10" />

      {/* ANIMATED PARTICLES EFFECT */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-cyan-400 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-60 right-1/3 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDuration: '4s' }} />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] md:min-h-[75vh] lg:min-h-[85vh] px-4 sm:px-6 lg:px-8 py-8 md:py-0">
        
        <div className={`max-w-6xl mx-auto text-center transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          
          {/* TRUST BADGES */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-4 md:mb-6 animate-fadeIn">
            <div className="flex items-center gap-1.5 md:gap-2 bg-white/10 backdrop-blur-md px-2.5 md:px-4 py-1.5 md:py-2 rounded-full border border-white/20">
              <Shield className="w-3 md:w-4 h-3 md:h-4 text-green-400" />
              <span className="text-white text-[10px] md:text-xs font-medium">100% Safe</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2 bg-white/10 backdrop-blur-md px-2.5 md:px-4 py-1.5 md:py-2 rounded-full border border-white/20">
              <Clock className="w-3 md:w-4 h-3 md:h-4 text-blue-400" />
              <span className="text-white text-[10px] md:text-xs font-medium">24/7</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2 bg-white/10 backdrop-blur-md px-2.5 md:px-4 py-1.5 md:py-2 rounded-full border border-white/20">
              <Sparkles className="w-3 md:w-4 h-3 md:h-4 text-yellow-400" />
              <span className="text-white text-[10px] md:text-xs font-medium">Premium</span>
            </div>
          </div>

          {/* MAIN HEADING */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-3 md:mb-6 leading-tight">
            <span className="block mb-1 md:mb-2">Travel Smarter,</span>
            <span className="block bg-gradient-to-r from-[#0892D0] via-[#00D4FF] to-[#4B0082] bg-clip-text text-transparent animate-gradient">
              Journey Better
            </span>
          </h1>

          {/* SUBHEADING */}
          <p className="text-xs sm:text-sm md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto mb-4 md:mb-8 leading-relaxed font-light px-2">
            <span className="hidden md:inline">Experience premium transportation with <span className="font-semibold text-cyan-300">expert drivers</span>, <span className="font-semibold text-cyan-300">luxury vehicles</span>, and <span className="font-semibold text-cyan-300">seamless booking</span>. Your comfort is our priority.</span>
            <span className="md:hidden">Premium rides with <span className="font-semibold text-cyan-300">expert drivers</span> & <span className="font-semibold text-cyan-300">luxury vehicles</span></span>
          </p>

          {/* SERVICE TABS - DESKTOP */}
          <div className="hidden md:flex items-center justify-center gap-6 mb-12">
            <div className="flex bg-white/20 backdrop-blur-2xl border border-white/90 rounded-2xl p-2 shadow-2xl">
              {tabConfig.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.name}
                    onClick={() => {
                      setActiveTab(tab.name);
                      if (tab.name === "Multiway") onAddStop();
                      scrollToBooking();
                    }}
                    className={`group relative px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      activeTab === tab.name
                        ? "text-white scale-105"
                        : "text-white/70 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {activeTab === tab.name && (
                      <div className={`absolute inset-0 bg-gradient-to-r ${tab.color} rounded-xl shadow-lg`} />
                    )}
                    <div className="relative flex items-center gap-2">
                      <Icon className="w-4 h-4" strokeWidth={2.5} />
                      <span>{tab.name}</span>
                    </div>
                    {activeTab === tab.name && (
                      <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r ${tab.color} rounded-full blur-sm`} />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* SERVICE TABS - MOBILE */}
          <div className="md:hidden w-full max-w-xs mx-auto mb-4">
            <div className="relative group">
              <div className="absolute -inset-1  rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300" />
              <div className="relative bg-white/20 backdrop-blur-2xl border border-white/30 rounded-2xl p-1 shadow-2xl">
                <div className="flex items-center gap-2 px-3 py-2">
                  {tabConfig.map((tab) => {
                    if (tab.name === activeTab) {
                      const Icon = tab.icon;
                      return (
                        <div key={tab.name} className={`flex items-center gap-1.5 px-2 py-1.5 rounded-xl bg-gradient-to-r ${tab.color}`}>
                          <Icon className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                        </div>
                      );
                    }
                    return null;
                  })}
                  <select
                    value={activeTab}
                    onChange={(e) => {
                      setActiveTab(e.target.value);
                      if (e.target.value === "Multiway") onAddStop();
                      scrollToBooking();
                    }}
                    className="flex-1 bg-transparent text-white font-semibold text-xs outline-none appearance-none cursor-pointer"
                  >
                    {tabConfig.map((tab) => (
                      <option key={tab.name} value={tab.name} className="bg-gray-900 text-white">
                        {tab.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-white/60" strokeWidth={2} />
                </div>
              </div>
            </div>
          </div>

          {/* CTA STATS */}
          <div className="flex items-center justify-center gap-4 md:gap-8 text-white/80 text-sm">
            <div className="flex flex-col items-center">
              <div className="text-lg md:text-2xl font-bold text-white">50K+</div>
              <div className="text-[10px] md:text-xs">Customers</div>
            </div>
            <div className="w-px h-8 md:h-10 bg-white/20" />
            <div className="flex flex-col items-center">
              <div className="text-lg md:text-2xl font-bold text-white">500+</div>
              <div className="text-[10px] md:text-xs">Drivers</div>
            </div>
            <div className="w-px h-8 md:h-10 bg-white/20" />
            <div className="flex flex-col items-center">
              <div className="text-lg md:text-2xl font-bold text-white">4.9★</div>
              <div className="text-[10px] md:text-xs">Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 right-0 h-7 bg-gradient-to-t from-white to-transparent" />
      
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 70%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </section>
  );
}