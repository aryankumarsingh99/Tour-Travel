import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Award,
  Globe,
  TrendingUp,
  CheckCircle
} from "lucide-react";

import Navigation from "../components/home/Navigation";
import Footer from "../components/home/Footer";
import LoginModal from "../components/home/LoginModal";

function About() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const stats = [
    { icon: Users, label: "Happy Customers", value: 50000 },
    { icon: Globe, label: "Destinations", value: 500 },
    { icon: Award, label: "Awards Won", value: 25 },
    { icon: TrendingUp, label: "Years Experience", value: 15 }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      bio: "15+ years in travel industry"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      bio: "Tech innovator & entrepreneur"
    },
    {
      name: "Emily Davis",
      role: "Head of Operations",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      bio: "Expert in customer experience"
    },
    {
      name: "David Kumar",
      role: "Travel Curator",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      bio: "World traveler & destination expert"
    }
  ];

  const milestones = [
    { year: "2010", event: "Company Founded", description: "Started with a vision to revolutionize travel" },
    { year: "2015", event: "Reached 10K Customers", description: "Milestone achievement in customer satisfaction" },
    { year: "2020", event: "Expanded to 500+ Destinations", description: "Global presence across continents" },
    { year: "2026", event: "Industry Leader", description: "50K+ happy travelers and counting" }
  ];

  return (
    <>
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

      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 overflow-hidden">

        {/* HERO */}
        <section className="relative py-16 md:py-28 bg-gradient-to-r from-[#0892D0] to-[#4B0082] text-white overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="max-w-7xl mx-auto px-6 text-center"
          >
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-extrabold mb-4 md:mb-6 group relative inline-block">
              Discover <span className="text-white/90">The World</span>
              <span className="absolute left-0 -bottom-2 w-0 h-1 bg-white transition-all duration-500 group-hover:w-full"></span>
            </h1>

            <p className="text-xs md:text-lg lg:text-xl text-white/80 max-w-3xl mx-auto transition duration-500 hover:text-white hover:scale-[1.02]">
              We create unforgettable journeys, connect cultures, and inspire adventure.
              Meet the team and values behind your next trip.
            </p>
          </motion.div>
        </section>

        {/* STATS */}
        <section className="-mt-10 md:-mt-16 relative z-10">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <StatCard
                    key={i}
                    Icon={Icon}
                    value={stat.value}
                    label={stat.label}
                  />
                );
              })}
            </div>
          </div>
        </section>

        {/* OUR STORY */}
        <section className="max-w-7xl mx-auto px-6 py-12 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-[#4B0082] transition duration-500 hover:tracking-wide">
                Our Story
              </h2>

              <p className="text-xs md:text-lg text-gray-700 mb-4 md:mb-6 leading-relaxed transition duration-300 hover:text-gray-900">
                Founded in 2010, SwiftRise began with a simple idea: travel should be accessible to everyone.
                What started as a small startup has grown into a trusted travel platform serving thousands worldwide.
              </p>

              <p className="text-xs md:text-lg text-gray-700 mb-6 md:mb-8 leading-relaxed transition duration-300 hover:text-gray-900">
                We believe travel connects cultures, builds memories, and inspires growth.
                Every journey we design is crafted with care, trust, and passion.
              </p>

              <div className="space-y-2 md:space-y-3">
                <Feature text="Verified Partners" />
                <Feature text="Best Price Guarantee" />
                <Feature text="24/7 Support" />
              </div>
            </div>

            <img
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=500&fit=crop"
              alt="Our Story"
              className="rounded-2xl md:rounded-3xl shadow-2xl w-full max-w-md mx-auto h-[250px] md:h-[400px] object-cover transition-all duration-700 hover:scale-105"
            />
          </div>
        </section>

        {/* JOURNEY */}
        <section className="bg-white py-8 md:py-24">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-lg md:text-4xl font-bold text-center mb-4 md:mb-16 text-[#4B0082]">
              Our Journey
            </h2>

            <div className="space-y-3 md:space-y-12">
              {milestones.map((m, i) => (
                <div
                  key={i}
                  className="bg-white rounded-lg md:rounded-2xl shadow-md md:shadow-lg p-2 md:p-8 border-l-2 md:border-l-4 border-[#0892D0] transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:border-[#4B0082]"
                >
                  <div className="text-sm md:text-2xl font-bold text-[#4B0082] mb-0.5 md:mb-2">
                    {m.year}
                  </div>
                  <h3 className="text-xs md:text-xl font-semibold mb-0.5 md:mb-2">
                    {m.event}
                  </h3>
                  <p className="text-[9px] md:text-base text-gray-600">{m.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
 

      </div>

      <Footer />
    </>
  );
}

export default About;

/* COUNTER CARD */

function StatCard({ Icon, value, label }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const increment = value / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [value]);

  return (
    <div className="bg-white rounded-lg md:rounded-2xl shadow-md md:shadow-xl p-2 md:p-6 text-center transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:scale-105">
      <Icon className="w-5 md:w-8 h-5 md:h-8 mx-auto mb-1 md:mb-3 text-[#4B0082]" />
      <div className="text-sm md:text-2xl font-bold text-gray-900">
        {count.toLocaleString()}+
      </div>
      <div className="text-[8px] md:text-sm text-gray-600">{label}</div>
    </div>
  );
}

function Feature({ text }) {
  return (
    <div className="flex items-center gap-1.5 md:gap-3 text-[9px] md:text-base text-gray-700 transition duration-300 hover:translate-x-2">
      <CheckCircle className="w-3 md:w-5 h-3 md:h-5 text-[#0892D0]" />
      {text}
    </div>
  );
}