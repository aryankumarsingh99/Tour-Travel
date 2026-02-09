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

  /* ---------- INFINITE VIDEO LOOP ---------- */
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

  /* ---------- LOAD & PLAY ON INDEX CHANGE ---------- */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.src = videos[videoIndex];
    video.load();

    const playPromise = video.play();
    if (playPromise !== undefined) playPromise.catch(() => {});
  }, [videoIndex]);

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden"
      style={{
        paddingTop: "env(safe-area-inset-top)",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      {/* VIDEO BACKGROUND */}
      <video
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        autoPlay
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 pointer-events-none ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-white">

        {/* HERO TEXT */}
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            Making Every Trip <br />
            <span className="text-[#1CA8CB]">Simple, Safe & Memorable</span>
          </h1>

          <p className="max-w-2xl text-sm sm:text-base md:text-lg text-white/90">
            Discover the world comfortably through expertly planned rides that
            focus on safety, convenience, and unforgettable memories.
          </p>
        </div>

        {/* TABS — FLOW BASED (NO OVERLAP POSSIBLE) */}
        <div className="mt-10 flex justify-center pointer-events-auto">
          <div
            className="
              bg-white/95 backdrop-blur-md
              rounded-full
              px-3 sm:px-4 py-2.5
              flex flex-wrap
              justify-center
              gap-2
              shadow-2xl
            "
          >
            {[
              "Local Trip",
              "Taxi Packages",
              "Airport Transfer",
              "Multiway",
            ].map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => {
                  setActiveTab(tab);
                  if (tab === "Multiway") onAddStop();
                }}
                className={`
                  px-4 sm:px-6 py-2
                  rounded-full
                  text-xs sm:text-sm
                  font-medium
                  whitespace-nowrap
                  transition-all duration-300
                  ${
                    activeTab === tab
                      ? "bg-[#1CA8CB] text-white shadow-md scale-105"
                      : "text-gray-600 hover:bg-gray-100"
                  }
                `}
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