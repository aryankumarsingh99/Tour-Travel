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

export default function HomePage() {
  const [tripType, setTripType] = useState("One-Way");
  const [activeTab, setActiveTab] = useState("Local Trip");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const handleAddStop = () => setActiveTab("Multiway");

  return (
    <div className="min-h-screen bg-white">

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

      <div className="relative z-20 -mt-16 sm:-mt-20 md:-mt-24">
        <BookingCard
          tripType={tripType}
          setTripType={setTripType}
          activeTab={activeTab}
        />
      </div>

      {/* DESTINATIONS */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-white to-gray-50">
        <TopDestinations
          destinations={destinationsData}
          londonDestinations={londonDestinationsData}
        />
      </section>

      {/* DISCOVER SECTION */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="inline-block bg-[#0892D0]/10 text-[#4B0082] px-6 py-2 rounded-full text-sm font-semibold mb-6">
            Explore Destinations
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#4B0082]">
            Discover Amazing Tours & Travel Experiences
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mb-10 text-lg">
            From breathtaking landscapes to unforgettable wildlife encounters,
            explore curated travel experiences designed for comfort and adventure.
          </p>

          <Link to="/explore">
            <button className="bg-gradient-to-r from-[#0892D0] to-[#4B0082] text-white px-10 py-4 rounded-full font-semibold hover:scale-105 transition duration-300 shadow-xl">
              Explore More
            </button>
          </Link>
        </div>
      </section>

      {/* HIMALAYAS */}
      <section className="relative w-full py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,.65),rgba(0,0,0,.65)),url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600')",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ amount: 0.3 }}
          className="relative z-10 max-w-6xl mx-auto px-6 text-white"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Himalayas
          </h2>

          <p className="max-w-2xl mb-10 text-lg text-white/90">
            Discover the breathtaking wilderness of the Himalayas.
          </p>

          <div className="flex flex-wrap gap-4">
            <Tag icon={Mountain} text="Nature" />
            <Tag icon={Umbrella} text="Cold Winds" />
            <Tag icon={Castle} text="Hiking" />
            <Tag icon={Building2} text="Mountain Climbing" active />
          </div>
        </motion.div>
      </section>

      {/* BEAUTY OF KORAPUT */}
      <section className="relative w-full py-28 overflow-hidden">

        <video
          src="/video5.mp4"
          muted
          loop
          autoPlay
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ amount: 0.3 }}
          className="relative z-10 max-w-6xl mx-auto px-6 text-white"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            The Beauty of Koraput
          </h2>

          <p className="max-w-2xl mb-8 text-lg drop-shadow-md">
            In Ladakh, where the mountains meet the sky,
            every moment feels sacred.
          </p>

          <Link to="/explore">
            <button className="bg-gradient-to-r from-[#0892D0] to-[#4B0082] text-white px-10 py-4 rounded-full font-semibold hover:scale-105 transition duration-300 shadow-xl">
              Explore More
            </button>
          </Link>
        </motion.div>
      </section>

      <RepeatCustomers />
      <PartnersSection />
      <Footer />
    </div>
  );
}

/* REPEAT CUSTOMERS */

function RepeatCustomers() {
  const controls = useAnimation();

  const customers = [
    { name: "Rahul Sharma", place: "Delhi", image: "https://randomuser.me/api/portraits/men/32.jpg", review: "Very reliable service." },
    { name: "Anita Verma", place: "Mumbai", image: "https://randomuser.me/api/portraits/women/44.jpg", review: "Clean cars and polite drivers." },
    { name: "Karan Singh", place: "Jaipur", image: "https://randomuser.me/api/portraits/men/56.jpg", review: "Smooth booking every time." },
    { name: "Priya Mehta", place: "Ahmedabad", image: "https://randomuser.me/api/portraits/women/65.jpg", review: "Perfect for family trips." },
  ];

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: { repeat: Infinity, duration: 40, ease: "linear" },
    });
  }, [controls]);

  return (
    <section className="py-32 bg-white overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-16 text-[#4B0082]">
        Trusted by Thousands of Repeat Customers
      </h2>

      <motion.div className="flex gap-8 w-max px-8" animate={controls}>
        {[...customers, ...customers].map((c, i) => (
          <div key={i} className="w-[280px] bg-white rounded-3xl shadow-xl p-6 text-center">
            <img src={c.image} className="w-20 h-20 mx-auto rounded-full mb-4 border-2 border-[#0892D0]" alt={c.name} />
            <p className="font-semibold">{c.name}</p>
            <p className="text-xs text-gray-500 mb-3">{c.place}</p>
            <Quote className="w-4 h-4 mx-auto text-[#4B0082] mb-2" />
            <p className="text-sm text-gray-700">{c.review}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

/* PARTNERS */

/* PARTNERS */

/* PARTNERS */

function PartnersSection() {
  const controls = useAnimation();

  const partners = [
    { name: "CitySprint", image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400" },
    { name: "UrbanRide", image: "https://images.unsplash.com/photo-1552345387-34f3c6bdcf7b?w=400" },
    { name: "Airport Express", image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=400" },
  ];

  useEffect(() => {
    controls.start({
      x: [0, "-50%"], // move exactly one duplicated width
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 30,
        ease: "linear",
      },
    });
  }, [controls]);

  return (
    <section className="py-32 bg-gray-50 overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-16 text-[#4B0082]">
        Our Trusted Partners
      </h2>

      <div className="relative w-full overflow-hidden">
        <motion.div
          animate={controls}
          className="flex whitespace-nowrap"
        >
          {[...partners, ...partners].map((p, i) => (
            <div key={i} className="flex-shrink-0 w-72 mx-4">
              <div className="bg-gradient-to-r from-[#0892D0] to-[#4B0082] rounded-3xl overflow-hidden shadow-xl cursor-pointer hover:scale-105 transition">
                <img
                  src={p.image}
                  className="h-48 w-full object-cover"
                  alt={p.name}
                />
                <div className="p-5 text-white">
                  <h3 className="text-xl font-bold">{p.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Tag({ icon: Icon, text, active }) {
  return (
    <button
      className={`px-5 py-2 rounded-full flex items-center gap-2 text-sm ${
        active
          ? "bg-gradient-to-r from-[#0892D0] to-[#4B0082] text-white"
          : "bg-white/90 text-gray-800"
      }`}
    >
      <Icon className="w-4 h-4" />
      {text}
    </button>
  );
}