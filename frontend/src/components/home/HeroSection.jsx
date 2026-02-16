import React, { useEffect, useRef, useState } from "react";
import { MapPin, Car, Plane, Route, ChevronDown } from "lucide-react";

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
  const [videoIndex, setVideoIndex] = useState(0);
  const [fade, setFade] = useState(true);

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

  return (
    <section className="relative w-full min-h-[53vh] md:min-h-[65vh] lg:min-h-[85vh] overflow-hidden">

      {/* VIDEO ONLY (NO OVERLAY) */}
      <video
        ref={videoRef}
        muted
        playsInline
        autoPlay
        preload="auto"
        className={`absolute inset-0 w-full  h-full object-cover transition-opacity duration-700 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-32 md:pt-40">

        {/* HERO TEXT */}
        <div className="max-w-4xl">
          <h1 className="text-lg md:text-6xl font-bold text-white leading-tight mb-3 md:mb-6 drop-shadow-lg font-sans tracking-tight">
            Making Every Trip <br />
            <span className="bg-gradient-to-r from-[#0892D0] to-[#4B0082] bg-clip-text text-transparent italic font-black tracking-wide">
              Simple, Safe & Memorable
            </span>
          </h1>

          <p className="text-white/90 text-sm md:text-lg lg:text-xl max-w-2xl mx-auto drop-shadow-md font-light leading-relaxed">
            Discover the world comfortably through expertly planned rides that
            focus on safety, convenience, and unforgettable memories. Whether you're traveling for business or leisure, our premium services ensure every journey is smooth, reliable, and tailored to your needs. Experience hassle-free transportation with professional drivers and well-maintained vehicles.
          </p>
        </div>

        {/* TABS — PUSHED DOWN NEAR BOOKING CARD */}
        <div className="mt-24 md:mt-28 lg:mt-32 w-full flex justify-center px-4">
          
          {/* Modern Custom Dropdown - Shows on small screens */}
          <div className="md:hidden w-full max-w-[240px] mb-9">
            <div className="relative group">
              {/* Custom styled select wrapper */}
              <div className="relative">
                <div className="absolute left-2 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
                  {activeTab === "Local Trip" ? (
                    <MapPin className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                  ) : activeTab === "Taxi Packages" ? (
                    <Car className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                  ) : activeTab === "Airport Transfer" ? (
                    <Plane className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                  ) : (
                    <Route className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                  )}
                </div>
                <select
                  value={activeTab}
                  onChange={(e) => {
                    setActiveTab(e.target.value);
                    if (e.target.value === "Multiway") onAddStop();
                  }}
                  className="w-full pl-8 pr-7 py-2 text-white text-xs font-semibold bg-white/5 backdrop-blur-2xl border-2 border-white/40 rounded-lg shadow-2xl appearance-none cursor-pointer focus:outline-none focus:border-[#0892D0] focus:ring-2 focus:ring-[#0892D0]/30 transition-all duration-300 hover:bg-white/15 hover:border-[#0892D0] hover:shadow-[0_0_30px_rgba(8,146,208,0.4)] hover:scale-[1.02]"
                  style={{
                    textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                  }}
                >
                  <option value="Local Trip" className="bg-white/20 backdrop-blur-lg text-gray-800 hover:bg-gradient-to-r hover:from-[#0892D0] hover:to-[#4B0082] hover:text-white font-semibold py-2 transition-all duration-300">Local Trip</option>
                  <option value="Taxi Packages" className="bg-white/20 backdrop-blur-lg text-gray-800 hover:bg-gradient-to-r hover:from-[#0892D0] hover:to-[#4B0082] hover:text-white font-semibold py-2 transition-all duration-300">Taxi Packages</option>
                  <option value="Airport Transfer" className="bg-white/20 backdrop-blur-lg text-gray-800 hover:bg-gradient-to-r hover:from-[#0892D0] hover:to-[#4B0082] hover:text-white font-semibold py-2 transition-all duration-300">Airport Transfer</option>
                  <option value="Multiway" className="bg-white/20 backdrop-blur-lg text-gray-800 hover:bg-gradient-to-r hover:from-[#0892D0] hover:to-[#4B0082] hover:text-white font-semibold py-2 transition-all duration-300">Multiway</option>
                </select>
                {/* Custom dropdown arrow with animation */}
                <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                  <ChevronDown className="w-3.5 h-3.5 text-white transition-transform duration-300 group-focus-within:rotate-180" strokeWidth={2.5} />
                </div>
                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#0892D0]/20 via-[#4B0082]/20 to-[#0892D0]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10 blur-xl"></div>
              </div>
              {/* Compact status indicator */}
              <div className="mt-1.5 flex items-center justify-center gap-1 text-white/60 text-xs font-medium">
                <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
                <span>Select service</span>
              </div>
            </div>
          </div>

          {/* Desktop Buttons - Shows on medium+ screens */}
          <div className="hidden md:flex bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-2 py-1 gap-5 shadow-2xl mb-6">

            {[
              "Local Trip",
              "Taxi Packages",
              "Airport Transfer",
              "Multiway",
            ].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  if (tab === "Multiway") onAddStop();
                }}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-[#0892D0] to-[#4B0082] text-white shadow-lg scale-105"
                    : "text-white hover:bg-white/20"
                }`}
              >
                {tab}
              </button>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}