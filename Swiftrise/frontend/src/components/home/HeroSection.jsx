import React, { useEffect, useRef, useState } from "react";

export default function HeroSection({
  activeTab,
  setActiveTab,
  onAddStop,
}) {
  const videos = [
    "/video.mp4",
    "/video2.mp4",
    "/video3.mp4",
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
    <section className="relative w-full min-h-[85vh] md:min-h-[90vh] overflow-hidden">

      {/* VIDEO ONLY (NO OVERLAY) */}
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

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-32 md:pt-40">

        {/* HERO TEXT */}
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
            Making Every Trip <br />
            <span className="bg-gradient-to-r from-[#0892D0] to-[#4B0082] bg-clip-text text-transparent">
              Simple, Safe & Memorable
            </span>
          </h1>

          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
            Discover the world comfortably through expertly planned rides that
            focus on safety, convenience, and unforgettable memories.
          </p>
        </div>

        {/* TABS — PUSHED DOWN NEAR BOOKING CARD */}
        <div className="mt-24 md:mt-28 lg:mt-32 w-full flex justify-center">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-4 py-3 flex flex-wrap gap-3 justify-center shadow-2xl">

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