import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Star,
  CheckCircle,
  Shield,
  Award,
  Mountain,
  Umbrella,
  Castle,
  Building2,
} from "lucide-react";

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
  reviewsData,
} from "../data/destinationsData";

export default function HomePage() {
  const [tripType, setTripType] = useState("Round-Trip");
  const [activeTab, setActiveTab] = useState("Taxi Packages");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const handleAddStop = () => {
    setActiveTab("Multiway");
  };

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

      <div className="h-12"></div>

      <TopDestinations
        destinations={destinationsData}
        londonDestinations={londonDestinationsData}
      />

      {/* Discover Amazing Tours */}
      <section className="w-full bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Explore Destinations
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Discover Amazing Tours & Travel Experiences
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            From breathtaking landscapes to unforgettable wildlife encounters,
            explore curated travel experiences that showcase the world's most
            spectacular destinations.
          </p>

          <Link to="/explore">
            <button
              className="text-white px-8 py-3 rounded-full font-semibold"
              style={{ backgroundColor: "#1CA8CB" }}
            >
              Explore More
            </button>
          </Link>
        </div>
      </section>

      {/* Himalayas Section */}
      <section className="relative w-full py-12 md:py-16 lg:py-20 overflow-hidden mb-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600')",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Himalayas</h2>

          <p className="max-w-2xl mb-8">
            Discover the breathtaking wilderness of the Himalayas with majestic
            mountains, icy winds, and soul-stirring landscapes.
          </p>

          <div className="flex flex-wrap gap-3">
            <button className="bg-green-100 text-green-700 px-4 py-2 rounded-full flex items-center gap-2">
              <Mountain className="w-4 h-4" /> Nature
            </button>
            <button className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full flex items-center gap-2">
              <Umbrella className="w-4 h-4" /> Cold Winds
            </button>
            <button className="bg-red-100 text-red-700 px-4 py-2 rounded-full flex items-center gap-2">
              <Castle className="w-4 h-4" /> Hiking
            </button>
            <button
              className="px-4 py-2 rounded-full flex items-center gap-2 text-white"
              style={{ backgroundColor: "#1CA8CB" }}
            >
              <Building2 className="w-4 h-4" /> Mountain Climbing
            </button>
          </div>
        </div>
      </section>

      {/* Wildlife Header */}
      <section className="bg-gray-50 py-16 text-center">
        <span className="inline-block bg-teal-100 text-teal-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">
          Wildlife Adventures
        </span>
        <h2 className="text-4xl font-bold mb-4">Experience Nature's Wonders</h2>
        <p className="max-w-3xl mx-auto text-gray-600">
          Embark on extraordinary wildlife journeys where majestic creatures
          roam free.
        </p>
      </section>

      {/* Beauty of Ladakh (VIDEO INSIDE CIRCLE) */}
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-white">
          <div className="flex justify-center">
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
              <video
                src="/video5.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <span className="inline-block bg-white/20 px-4 py-1 rounded-full text-sm mb-4">
              Adventure Awaits
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The Beauty of Ladakh
            </h2>

            <p className="mb-6">
              In Ladakh, where the mountains meet the sky, every moment feels
              like a silent prayer whispered to the universe.
            </p>

            <ul className="space-y-3 mb-8">
              <li>• Experience grizzly bear viewing</li>
              <li>• Observe bald eagles</li>
              <li>• Whale watching cruises</li>
            </ul>

            <Link to="/explore">
  <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition">
    Explore More
  </button>
</Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-gray-50 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Customer Service
        </h2>

        <div className="max-w-5xl mx-auto space-y-6 px-4">
          {reviewsData.map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition flex gap-4"
            >
              <img
                src={review.avatar}
                className="w-14 h-14 rounded-full"
                alt={review.name}
              />
              <div>
                <h4 className="font-bold">{review.name}</h4>
                <p className="text-gray-600 text-sm">{review.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />

      <button
        className="fixed bottom-24 right-3 z-50 w-12 h-12 rounded-full text-white font-bold shadow-lg"
        style={{ backgroundColor: "#1CA8CB" }}
      >
        ?
      </button>
    </div>
  );
}