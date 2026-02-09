import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Star,
  Mountain,
  Umbrella,
  Castle,
  Building2,
  Repeat,
  ShieldCheck,
  Users,
  Quote,
} from "lucide-react";
import { motion, useAnimation } from "framer-motion";

import TopBar from "../components/home/TopBar";
import Navigation from "../components/home/Navigation";
import LoginModal from "../components/home/LoginModal";
import HeroSection from "../components/home/HeroSection";
import BookingCard from "../components/home/BookingCard";
import TopDestinations from "../components/home/TopDestinations";
import Footer from "../components/home/Footer";

import {
  destinationsData,
  londonDestinationsData,
} from "../data/destinationsData";

/* ===================== HOME PAGE ===================== */

export default function HomePage() {
  const [tripType, setTripType] = useState("Round-Trip");
  const [activeTab, setActiveTab] = useState("Taxi Packages");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const handleAddStop = () => setActiveTab("Multiway");

  return (
    <div className="min-h-screen bg-white">
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

      <HeroSection
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onAddStop={handleAddStop}
      />

      <BookingCard
        tripType={tripType}
        setTripType={setTripType}
        activeTab={activeTab}
      />

      <div className="h-12" />

      <TopDestinations
        destinations={destinationsData}
        londonDestinations={londonDestinationsData}
      />

      {/* Discover Amazing Tours */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Explore Destinations
          </span>
          <h2 className="text-4xl font-bold mb-4">
            Discover Amazing Tours & Travel Experiences
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            From breathtaking landscapes to unforgettable wildlife encounters.
          </p>
          <Link to="/explore">
            <button className="bg-[#1CA8CB] text-white px-8 py-3 rounded-full font-semibold">
              Explore More
            </button>
          </Link>
        </div>
      </section>

      {/* Himalayas */}
      <section className="relative w-full py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.55)),url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600')",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-white">
          <h2 className="text-5xl font-bold mb-6">Himalayas</h2>
          <p className="max-w-2xl mb-8">
            Discover the breathtaking wilderness of the Himalayas.
          </p>
          <div className="flex flex-wrap gap-3">
            <Tag icon={Mountain} text="Nature" />
            <Tag icon={Umbrella} text="Cold Winds" />
            <Tag icon={Castle} text="Hiking" />
            <Tag icon={Building2} text="Mountain Climbing" active />
          </div>
        </div>
      </section>

     {/* Beauty of Ladakh (VIDEO FIXED — NO OTHER CHANGE) */}
<section className="relative w-full py-24 overflow-hidden">
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600')",
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-teal-600/90 to-cyan-500/80" />
  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center text-white">
    <div className="flex justify-center">
      <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
        <video
          src="/video5.mp4"
          muted
          loop
          autoPlay
          playsInline
          preload="metadata"
          poster="/ladakh-poster.jpg"
          className="w-full h-full object-cover"
        />
      </div>
    </div>

    <div>
      <h2 className="text-5xl font-bold mb-4">The Beauty of Ladakh</h2>
      <p className="mb-6">
        In Ladakh, where the mountains meet the sky, every moment feels
        sacred.
      </p>
      <Link to="/explore">
        <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition">
          Explore More
        </button>
      </Link>
    </div>
  </div>
</section>

      {/* ===================== REPEAT CUSTOMERS ===================== */}
      <RepeatCustomers />

      {/* ===================== PARTNERS ===================== */}
      <PartnersSection />

      <Footer />
    </div>
  );
}

/* ===================== REPEAT CUSTOMERS ===================== */

function RepeatCustomers() {
  const controls = useAnimation();

  const customers = [
    {
      name: "Rahul Sharma",
      place: "Delhi",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      review: "Very reliable service.",
    },
    {
      name: "Anita Verma",
      place: "Mumbai",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      review: "Clean cars and polite drivers.",
    },
    {
      name: "Karan Singh",
      place: "Jaipur",
      image: "https://randomuser.me/api/portraits/men/56.jpg",
      review: "Smooth booking every time.",
    },
    {
      name: "Priya Mehta",
      place: "Ahmedabad",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      review: "Perfect for family trips.",
    },
  ];

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        repeat: Infinity,
        duration: 40,
        ease: "linear",
      },
    });
  }, [controls]);

  return (
    <section className="py-24 bg-white overflow-hidden will-change-transform">
      <h2 className="text-4xl font-bold text-center mb-14">
        Trusted by Thousands of Repeat Customers
      </h2>

      <motion.div className="flex gap-8 w-max px-8" animate={controls}>
        {[...customers, ...customers].map((c, i) => (
          <div
            key={i}
            className="w-[280px] bg-white rounded-2xl shadow-lg p-6 text-center"
          >
            <img
              src={c.image}
              loading="lazy"
              decoding="async"
              className="w-20 h-20 mx-auto rounded-full mb-4 border-2 border-[#1CA8CB]"
              alt={c.name}
            />
            <p className="font-semibold">{c.name}</p>
            <p className="text-xs text-gray-500 mb-3">{c.place}</p>
            <Quote className="w-4 h-4 mx-auto text-[#1CA8CB] mb-2" />
            <p className="text-sm text-gray-700">{c.review}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

/* ===================== PARTNERS ===================== */

function PartnersSection() {
  const partners = [
    {
      name: "CitySprint",
      image:
        "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400",
      info: "Premium city transportation services.",
    },
    {
      name: "UrbanRide",
      image:
        "https://images.unsplash.com/photo-1552345387-34f3c6bdcf7b?w=400",
      info: "Modern urban mobility solutions.",
    },
    {
      name: "Airport Express",
      image:
        "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=400",
      info: "Specialized airport transfer services.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden will-change-transform">
      <h2 className="text-4xl font-bold text-center mb-12">
        Our Trusted Partners
      </h2>

      <div className="flex animate-scroll w-max px-8">
        {[...partners, ...partners].map((p, i) => (
          <PartnerCard key={i} {...p} />
        ))}
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 22s linear infinite;
        }
      `}</style>
    </section>
  );
}

function PartnerCard({ name, image, info }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-72 mx-4">
      <div
        onClick={() => setOpen(!open)}
        className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl overflow-hidden shadow-xl cursor-pointer hover:scale-105 transition"
      >
        <img
          src={image}
          loading="lazy"
          decoding="async"
          className="h-48 w-full object-cover"
          alt={name}
        />
        <div className="p-5 text-white">
          <h3 className="text-xl font-bold">{name}</h3>
        </div>
        {open && (
          <div className="bg-blue-900/95 p-5 text-white text-sm">
            {info}
          </div>
        )}
      </div>
    </div>
  );
}

/* ===================== SMALL UTIL ===================== */

function Tag({ icon: Icon, text, active }) {
  return (
    <button
      className={`px-4 py-2 rounded-full flex items-center gap-2 text-sm ${
        active ? "bg-[#1CA8CB] text-white" : "bg-white/90 text-gray-800"
      }`}
    >
      <Icon className="w-4 h-4" />
      {text}
    </button>
  );
}