'use client'
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import Navigation from '../components/home/Navigation'
import LoginModal from '../components/home/LoginModal'
import Footer from '../components/home/Footer';
import { MapPin, Calendar, Users, Star, ArrowLeft, Phone, Mail, Search, X, Grid3x3, List, CheckCircle, Plane, Clock } from "lucide-react";

const destinations = [
  {
    id: 1,
    name: 'Mountain Adventure',
    location: 'Swiss Alps',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&h=500&fit=crop',
    rating: 4.9,
    description: 'Experience breathtaking alpine scenery with world-class skiing, hiking trails, and charming mountain villages.',
    attractions: ['Matterhorn Peak', 'Jungfraujoch Railway', 'Interlaken Adventure', 'Glacier Paradise', 'Mountain Villages'],
    price: 'From $2,999',
    duration: '7 Days'
  },
  {
    id: 2,
    name: 'Desert Journey',
    location: 'Sahara Desert',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=1200&h=500&fit=crop',
    rating: 4.7,
    description: 'Embark on an unforgettable desert adventure with camel treks, starlit camping, and ancient oasis towns.',
    attractions: ['Camel Safari', 'Desert Camping', 'Sand Dunes Exploration', 'Traditional Berber Villages', 'Sunset Views'],
    price: 'From $1,799',
    duration: '5 Days'
  },
  {
    id: 3,
    name: 'City Exploration',
    location: 'New York City',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&h=500&fit=crop',
    rating: 4.8,
    description: 'Discover the vibrant energy of NYC with iconic landmarks, world-class museums, and diverse neighborhoods.',
    attractions: ['Statue of Liberty', 'Central Park', 'Times Square', 'Brooklyn Bridge', 'Empire State Building'],
    price: 'From $1,499',
    duration: '4 Days'
  },
  {
    id: 4,
    name: 'Tropical Escape',
    location: 'Maldives',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=500&fit=crop',
    rating: 5.0,
    description: 'Indulge in paradise with crystal-clear waters, luxury overwater villas, and pristine coral reefs.',
    attractions: ['Private Beach Resorts', 'Snorkeling & Diving', 'Overwater Villas', 'Spa & Wellness', 'Island Hopping'],
    price: 'From $3,999',
    duration: '6 Days'
  },
  {
    id: 5,
    name: 'Road Trip Adventure',
    location: 'California Coast',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&h=500&fit=crop',
    rating: 4.6,
    description: 'Drive along scenic Pacific Coast Highway with stunning ocean views, charming coastal towns, and endless beaches.',
    attractions: ['Pacific Coast Highway', 'Big Sur Coastline', 'Santa Monica Pier', 'Golden Gate Bridge', 'Coastal Towns'],
    price: 'From $2,199',
    duration: '8 Days'
  },
  {
    id: 6,
    name: 'Cultural Heritage',
    location: 'Kyoto, Japan',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&h=500&fit=crop',
    rating: 4.9,
    description: 'Immerse yourself in Japanese culture with ancient temples, traditional tea ceremonies, and beautiful gardens.',
    attractions: ['Fushimi Inari Shrine', 'Bamboo Forest', 'Golden Pavilion', 'Tea Ceremonies', 'Geisha District'],
    price: 'From $2,599',
    duration: '7 Days'
  },
  {
    id: 7,
    name: 'Wildlife Safari',
    location: 'Serengeti, Tanzania',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&h=500&fit=crop',
    rating: 4.8,
    description: 'Witness the great migration and incredible wildlife in their natural habitat with expert safari guides.',
    attractions: ['Great Migration', 'Big Five Safari', 'Luxury Camps', 'Ngorongoro Crater', 'Maasai Villages'],
    price: 'From $4,299',
    duration: '10 Days'
  },
  {
    id: 8,
    name: 'Island Paradise',
    location: 'Santorini, Greece',
    image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=1200&h=500&fit=crop',
    rating: 4.9,
    description: 'Experience stunning sunsets, white-washed villages, and crystal-blue waters of this iconic Greek island.',
    attractions: ['Oia Sunset Views', 'Red Beach', 'Ancient Ruins', 'Wine Tasting', 'Caldera Views'],
    price: 'From $2,799',
    duration: '5 Days'
  }
];

export default function Explore() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [viewMode, setViewMode] = useState("modern");
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingDestination, setBookingDestination] = useState(null);
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    phone: "",
    travelers: 1,
    startDate: "",
    endDate: "",
    accommodation: "standard",
    message: ""
  });
  const navigate = useNavigate();

  // Filter destinations based on search query
  const filteredDestinations = useMemo(() => {
    if (!searchQuery.trim()) {
      return destinations;
    }
    
    const query = searchQuery.toLowerCase();
    return destinations.filter(dest => 
      dest.name.toLowerCase().includes(query) ||
      dest.location.toLowerCase().includes(query) ||
      dest.description.toLowerCase().includes(query) ||
      dest.attractions.some(attr => attr.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  const handleBooking = (destination) => {
    setBookingDestination(destination);
    setSelectedDestination(null);
    setBookingModalOpen(true);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    console.log("Booking submitted:", { ...bookingData, destination: bookingDestination.name });
    alert(`Thank you! Your booking request for ${bookingDestination.name} has been submitted. We'll contact you soon!`);
    setBookingModalOpen(false);
    setBookingData({
      name: "",
      email: "",
      phone: "",
      travelers: 1,
      startDate: "",
      endDate: "",
      accommodation: "standard",
      message: ""
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData(prev => ({
      ...prev,
      [name]: value
    }));
  };

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

      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
        {/* HERO */}
        <section className="py-8 md:py-20 bg-gradient-to-r from-[#0892D0] to-[#4B0082] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&h=1080&fit=crop" 
              alt="World Travel" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto px-6 relative z-10"
          >
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-white/80 hover:text-white mb-4 md:mb-6 text-xs md:text-base transition"
            >
              <ArrowLeft className="w-4 md:w-5 h-4 md:h-5" />
              Back
            </button>

            <h1 className="text-2xl md:text-6xl font-extrabold mb-2 md:mb-4">
              Explore World Destinations
            </h1>
            <p className="text-xs md:text-xl text-white/90 mb-4 md:mb-8 max-w-3xl">
              Discover amazing destinations around the world - from mountain peaks to tropical beaches, your perfect adventure awaits
            </p>

            <style>{`
              @keyframes glow-pulse {
                0%, 100% {
                  box-shadow: 0 0 5px rgba(255, 255, 255, 0.5),
                              0 0 10px rgba(255, 255, 255, 0.3),
                              0 0 15px rgba(255, 255, 255, 0.2);
                  transform: scale(1);
                }
                50% {
                  box-shadow: 0 0 20px rgba(255, 255, 255, 0.8),
                              0 0 30px rgba(255, 255, 255, 0.6),
                              0 0 40px rgba(255, 255, 255, 0.4),
                              0 0 50px rgba(8, 146, 208, 0.3);
                  transform: scale(1.05);
                }
              }
              
              .glow-btn-1 {
                animation: glow-pulse 2s ease-in-out infinite;
              }
              
              .glow-btn-2 {
                animation: glow-pulse 2s ease-in-out infinite;
                animation-delay: 1s;
              }
            `}</style>

            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-4 md:mb-6">
              <button 
                onClick={() => navigate('/india-tour')}
                className="glow-btn-1 px-4 md:px-8 py-1.5 md:py-3 bg-white text-[#4B0082] rounded-full font-semibold text-xs md:text-base hover:bg-gray-100 transition-all duration-300"
              >
                India Tour
              </button>
              <button 
                onClick={() => navigate('/odisha-tour')}
                className="glow-btn-2 px-4 md:px-8 py-1.5 md:py-3 bg-white text-[#4B0082] rounded-full font-semibold text-xs md:text-base hover:bg-gray-100 transition-all duration-300"
              >
                Odisha Tour
              </button>
            </div>

            <div className="flex flex-wrap gap-2 md:gap-4 text-xs md:text-base">
              <div className="flex items-center gap-1 md:gap-2 bg-white/20 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full">
                <Plane className="w-3 md:w-5 h-3 md:h-5" />
                <span>{destinations.length} Destinations</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2 bg-white/20 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full">
                <Star className="w-3 md:w-5 h-3 md:h-5" />
                <span>Top Rated Tours</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2 bg-white/20 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full">
                <Search className="w-3 md:w-5 h-3 md:h-5" />
                <span>Easy Search</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* DESTINATIONS SECTION */}
        <section className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-16">
          <h2 className="text-xl md:text-4xl font-bold text-center mb-4 md:mb-8 text-[#4B0082]">
            World Travel Destinations
          </h2>
          
          {/* Search Bar and View Toggle */}
          <div className="max-w-2xl mx-auto mb-8 md:mb-12">
            <div className="relative mb-4">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by destination, location, or attraction..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 md:py-4 rounded-full border-2 border-gray-200 focus:border-[#0892D0] focus:outline-none text-sm md:text-base shadow-lg"
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center justify-center gap-2">
              <button
                onClick={() => setViewMode("modern")}
                className={`flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold transition ${
                  viewMode === "modern"
                    ? "bg-gradient-to-r from-[#0892D0] to-[#4B0082] text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <Grid3x3 className="w-4 h-4" />
                <span className="text-sm md:text-base">Modern View</span>
              </button>
              <button
                onClick={() => setViewMode("classic")}
                className={`flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold transition ${
                  viewMode === "classic"
                    ? "bg-gradient-to-r from-[#0892D0] to-[#4B0082] text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <List className="w-4 h-4" />
                <span className="text-sm md:text-base">Classic View</span>
              </button>
            </div>

            {searchQuery && (
              <p className="text-center text-sm text-gray-600 mt-3">
                Found {filteredDestinations.length} result{filteredDestinations.length !== 1 ? 's' : ''}
              </p>
            )}
          </div>

          {/* Modern View - Grid Cards */}
          {viewMode === "modern" && (
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8">
              {filteredDestinations.map((dest, idx) => (
                <motion.div
                  key={dest.id}
                  initial={{ 
                    opacity: 0, 
                    scale: 0.8,
                    y: 50,
                    rotateX: -15
                  }}
                  whileInView={{ 
                    opacity: 1, 
                    scale: 1, 
                    y: 0,
                    rotateX: 0
                  }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ 
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    delay: (idx % 6) * 0.1
                  }}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  onClick={() => setSelectedDestination(dest)}
                  className="bg-white rounded-lg md:rounded-2xl shadow-md md:shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 cursor-pointer"
                >
                  <div className="relative h-40 md:h-56 overflow-hidden">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute top-1 md:top-3 right-1 md:right-3 bg-white px-1.5 md:px-3 py-0.5 md:py-1 rounded-full flex items-center gap-0.5 md:gap-1 shadow-lg">
                      <Star className="w-3.5 md:w-4 h-3.5 md:h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold text-xs md:text-sm">{dest.rating}</span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2 md:p-4">
                      <h3 className="text-white font-bold text-sm md:text-xl">{dest.name}</h3>
                      <p className="text-white/90 text-xs md:text-sm flex items-center gap-1">
                        <MapPin className="w-3 md:w-3 h-3 md:h-3" />
                        {dest.location}
                      </p>
                    </div>
                  </div>

                  <div className="p-2 md:p-6">
                    <p className="text-gray-600 text-xs md:text-sm mb-2 md:mb-4 line-clamp-2">{dest.description}</p>
                    
                    <div className="flex items-center gap-2 md:gap-4 mb-2 md:mb-4 text-xs md:text-sm text-gray-600">
                      <div className="flex items-center gap-0.5 md:gap-1">
                        <Clock className="w-3.5 md:w-4 h-3.5 md:h-4 text-[#0892D0]" />
                        <span>{dest.duration}</span>
                      </div>
                      <div className="font-bold text-[#4B0082]">{dest.price}</div>
                    </div>
                    
                    <div className="mb-2 md:mb-4">
                      <h4 className="font-semibold text-xs md:text-sm text-gray-900 mb-1 md:mb-2">Top Attractions:</h4>
                      <div className="space-y-1 md:space-y-2">
                        {dest.attractions.slice(0, 3).map((attr, i) => (
                          <div key={i} className="text-xs md:text-xs text-gray-600 flex items-start gap-1 md:gap-2">
                            <MapPin className="w-3 md:w-3 h-3 md:h-3 text-[#0892D0] shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{attr}</span>
                          </div>
                        ))}
                        {dest.attractions.length > 3 && (
                          <p className="text-xs md:text-xs text-[#0892D0] font-semibold">
                            +{dest.attractions.length - 3} more
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 md:pt-4 border-t gap-1 md:gap-2">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedDestination(dest);
                        }}
                        className="flex-1 px-2 md:px-4 py-1 md:py-2 bg-gray-100 text-gray-700 rounded-full font-semibold text-xs md:text-sm hover:bg-gray-200 transition"
                      >
                        Details
                      </button>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleBooking(dest);
                        }}
                        className="flex-1 px-2 md:px-4 py-1 md:py-2 bg-gradient-to-r from-[#0892D0] to-[#4B0082] text-white rounded-full font-semibold text-xs md:text-sm hover:shadow-lg hover:scale-105 transition"
                      >
                        Book
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Classic View - List Layout */}
          {viewMode === "classic" && (
            <div className="space-y-2 md:space-y-6">
              {filteredDestinations.map((dest, idx) => (
                <motion.div
                  key={dest.id}
                  initial={{ 
                    opacity: 0, 
                    x: idx % 2 === 0 ? -100 : 100,
                    rotateY: idx % 2 === 0 ? -10 : 10
                  }}
                  whileInView={{ 
                    opacity: 1, 
                    x: 0,
                    rotateY: 0
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    type: "spring",
                    stiffness: 80,
                    damping: 20,
                    delay: idx * 0.08
                  }}
                  whileHover={{ 
                    scale: 1.01,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                    transition: { duration: 0.3 }
                  }}
                  onClick={() => setSelectedDestination(dest)}
                  className="bg-white rounded-lg md:rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Image Section */}
                    <div className="relative md:w-80 h-40 md:h-auto overflow-hidden">
                      <img
                        src={dest.image}
                        alt={dest.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 md:top-3 right-2 md:right-3 bg-white px-2 md:px-3 py-1 md:py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                        <Star className="w-3 md:w-4 h-3 md:h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-bold text-xs md:text-sm">{dest.rating}</span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 p-2 md:p-6">
                      <div className="flex flex-wrap items-start justify-between mb-2 md:mb-3">
                        <div>
                          <h3 className="text-base md:text-2xl font-bold text-gray-900 mb-0.5 md:mb-1">{dest.name}</h3>
                          <p className="text-gray-600 text-xs md:text-base flex items-center gap-1 md:gap-2">
                            <MapPin className="w-3 md:w-4 h-3 md:h-4 text-[#0892D0]" />
                            {dest.location}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-[#4B0082] font-bold text-xs md:text-lg">{dest.price}</div>
                          <div className="text-gray-500 text-xs md:text-sm flex items-center gap-1">
                            <Clock className="w-3 md:w-4 h-3 md:h-4" />
                            {dest.duration}
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 text-xs md:text-base mb-2 md:mb-4 leading-relaxed line-clamp-2 md:line-clamp-none">
                        {dest.description}
                      </p>

                      {/* Attractions - Compact Grid */}
                      <div className="mb-2 md:mb-4">
                        <h4 className="font-semibold text-xs md:text-base text-gray-900 mb-1 md:mb-2 flex items-center gap-1 md:gap-2">
                          <MapPin className="w-3 md:w-4 h-3 md:h-4 text-[#0892D0]" />
                          Top Attractions
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 md:gap-2">
                          {dest.attractions.map((attr, i) => (
                            <div key={i} className="flex items-start gap-1 md:gap-2 text-xs md:text-sm text-gray-700 bg-gray-50 rounded p-1 md:p-2">
                              <span className="text-[#0892D0] font-bold">{i + 1}.</span>
                              <span className="line-clamp-1">{attr}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 md:gap-3">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedDestination(dest);
                          }}
                          className="px-3 md:px-6 py-1 md:py-2 bg-white border-2 border-[#0892D0] text-[#0892D0] rounded-full font-semibold text-xs md:text-sm hover:bg-blue-50 transition"
                        >
                          Details
                        </button>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleBooking(dest);
                          }}
                          className="px-3 md:px-6 py-1 md:py-2 bg-gradient-to-r from-[#0892D0] to-[#4B0082] text-white rounded-full font-semibold text-xs md:text-sm hover:shadow-lg hover:scale-105 transition"
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* No Results Message */}
          {filteredDestinations.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No destinations found matching "{searchQuery}"</p>
              <button 
                onClick={() => setSearchQuery("")}
                className="mt-4 px-6 py-2 bg-[#0892D0] text-white rounded-full hover:bg-[#0670a0] transition"
              >
                Clear Search
              </button>
            </div>
          )}
        </section>

        {/* CONTACT CTA */}
        <section className="bg-gradient-to-r from-[#0892D0] to-[#4B0082] py-8 md:py-16">
          <div className="max-w-4xl mx-auto px-6 text-center text-white">
            <h2 className="text-xl md:text-4xl font-bold mb-2 md:mb-4">Plan Your Dream Vacation</h2>
            <p className="text-xs md:text-lg mb-4 md:mb-8 text-white/90">
              Our travel experts can help you create the perfect itinerary for any destination
            </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <a
                href="tel:+911234567890"
                className="flex items-center justify-center gap-2 bg-white text-[#4B0082] px-4 md:px-8 py-2 md:py-3 rounded-full font-semibold hover:bg-gray-100 transition text-xs md:text-base"
              >
                <Phone className="w-4 md:w-5 h-4 md:h-5" />
                Call Us Now
              </a>
              <a
                href="mailto:tours@swiftrise.com"
                className="flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm text-white border-2 border-white px-4 md:px-8 py-2 md:py-3 rounded-full font-semibold hover:bg-white/30 transition text-xs md:text-base"
              >
                <Mail className="w-4 md:w-5 h-4 md:h-5" />
                Email Us
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Destination Details Modal */}
      <AnimatePresence>
        {selectedDestination && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedDestination(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            >
              {/* Modal Header with Image */}
              <div className="relative h-48 md:h-64">
                <img
                  src={selectedDestination.image}
                  alt={selectedDestination.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedDestination(null)}
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        {selectedDestination.name}
                      </h2>
                      <p className="text-white/90 text-sm md:text-base flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {selectedDestination.location}
                      </p>
                    </div>
                    <div className="bg-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-bold text-lg">{selectedDestination.rating}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-3 md:p-8 max-h-[calc(90vh-16rem)] overflow-y-auto">
                {/* Description */}
                <div className="mb-3 md:mb-6">
                  <h3 className="text-sm md:text-xl font-bold text-gray-900 mb-1 md:mb-2">About {selectedDestination.name}</h3>
                  <p className="text-xs md:text-base text-gray-600 leading-relaxed">{selectedDestination.description}</p>
                  
                  <div className="flex items-center gap-4 mt-3 md:mt-4 text-sm md:text-base">
                    <div className="flex items-center gap-2 text-[#4B0082] font-bold">
                      <Clock className="w-4 md:w-5 h-4 md:h-5" />
                      {selectedDestination.duration}
                    </div>
                    <div className="text-[#4B0082] font-bold">
                      {selectedDestination.price}
                    </div>
                  </div>
                </div>

                {/* Attractions */}
                <div>
                  <h3 className="text-sm md:text-xl font-bold text-gray-900 mb-2 md:mb-4 flex items-center gap-1 md:gap-2">
                    <MapPin className="w-3 md:w-5 h-3 md:h-5 text-[#0892D0]" />
                    Top Attractions
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5 md:gap-3">
                    {selectedDestination.attractions.map((attr, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-start gap-1.5 md:gap-3 p-1.5 md:p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg hover:shadow-md transition"
                      >
                        <div className="bg-gradient-to-r from-[#0892D0] to-[#4B0082] text-white rounded-full w-5 md:w-8 h-5 md:h-8 flex items-center justify-center shrink-0 font-bold text-xs md:text-sm">
                          {index + 1}
                        </div>
                        <p className="text-gray-700 text-xs md:text-base pt-0.5 md:pt-1">{attr}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-4 md:mt-8 flex flex-col sm:flex-row gap-2 md:gap-3">
                  <button 
                    onClick={() => handleBooking(selectedDestination)}
                    className="flex-1 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-[#0892D0] to-[#4B0082] text-white rounded-full font-semibold text-xs md:text-base hover:shadow-lg hover:scale-105 transition flex items-center justify-center gap-1 md:gap-2"
                  >
                    <Calendar className="w-3 md:w-5 h-3 md:h-5" />
                    Book This Trip
                  </button>
                  <button className="flex-1 px-4 md:px-6 py-2 md:py-3 bg-white border-2 border-[#0892D0] text-[#0892D0] rounded-full font-semibold text-xs md:text-base hover:bg-blue-50 transition flex items-center justify-center gap-1 md:gap-2">
                    <Phone className="w-3 md:w-5 h-3 md:h-5" />
                    Contact Us
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Booking Modal */}
      <AnimatePresence>
        {bookingModalOpen && bookingDestination && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm overflow-y-auto"
            onClick={() => setBookingModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full my-8"
            >
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-[#0892D0] to-[#4B0082] text-white p-3 md:p-6 rounded-t-2xl relative">
                <button
                  onClick={() => setBookingModalOpen(false)}
                  className="absolute top-2 md:top-4 right-2 md:right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-1.5 md:p-2 rounded-full transition"
                >
                  <X className="w-4 md:w-5 h-4 md:h-5" />
                </button>
                <h2 className="text-lg md:text-3xl font-bold mb-1 md:mb-2">Book Your Trip</h2>
                <p className="text-white/90 flex items-center gap-1 md:gap-2 text-xs md:text-base">
                  <MapPin className="w-3 md:w-4 h-3 md:h-4" />
                  {bookingDestination.name} - {bookingDestination.location}
                </p>
              </div>

              {/* Booking Form */}
              <form onSubmit={handleBookingSubmit} className="p-3 md:p-8 space-y-2 md:space-y-4">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1 md:mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={bookingData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-2 md:px-4 py-1.5 md:py-2.5 text-xs md:text-base border-2 border-gray-200 rounded-lg focus:border-[#0892D0] focus:outline-none transition"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1 md:mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={bookingData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-2 md:px-4 py-1.5 md:py-2.5 text-xs md:text-base border-2 border-gray-200 rounded-lg focus:border-[#0892D0] focus:outline-none transition"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1 md:mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={bookingData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-2 md:px-4 py-1.5 md:py-2.5 text-xs md:text-base border-2 border-gray-200 rounded-lg focus:border-[#0892D0] focus:outline-none transition"
                      placeholder="+91 1234567890"
                    />
                  </div>
                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1 md:mb-2">
                      Number of Travelers *
                    </label>
                    <input
                      type="number"
                      name="travelers"
                      value={bookingData.travelers}
                      onChange={handleInputChange}
                      min="1"
                      max="20"
                      required
                      className="w-full px-2 md:px-4 py-1.5 md:py-2.5 text-xs md:text-base border-2 border-gray-200 rounded-lg focus:border-[#0892D0] focus:outline-none transition"
                    />
                  </div>
                </div>

                {/* Travel Dates */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1 md:mb-2">
                      Start Date *
                    </label>
                    <input
                      type="date"
                      name="startDate"
                      value={bookingData.startDate}
                      onChange={handleInputChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-2 md:px-4 py-1.5 md:py-2.5 text-xs md:text-base border-2 border-gray-200 rounded-lg focus:border-[#0892D0] focus:outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1 md:mb-2">
                      End Date *
                    </label>
                    <input
                      type="date"
                      name="endDate"
                      value={bookingData.endDate}
                      onChange={handleInputChange}
                      required
                      min={bookingData.startDate || new Date().toISOString().split('T')[0]}
                      className="w-full px-2 md:px-4 py-1.5 md:py-2.5 text-xs md:text-base border-2 border-gray-200 rounded-lg focus:border-[#0892D0] focus:outline-none transition"
                    />
                  </div>
                </div>

                {/* Accommodation Type */}
                <div>
                  <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1 md:mb-2">
                    Accommodation Preference *
                  </label>
                  <select
                    name="accommodation"
                    value={bookingData.accommodation}
                    onChange={handleInputChange}
                    className="w-full px-2 md:px-4 py-1.5 md:py-2.5 text-xs md:text-base border-2 border-gray-200 rounded-lg focus:border-[#0892D0] focus:outline-none transition"
                  >
                    <option value="budget">Budget (3-Star Hotels)</option>
                    <option value="standard">Standard (4-Star Hotels)</option>
                    <option value="luxury">Luxury (5-Star Hotels)</option>
                    <option value="premium">Premium (Resort/Boutique)</option>
                  </select>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1 md:mb-2">
                    Special Requests / Message
                  </label>
                  <textarea
                    name="message"
                    value={bookingData.message}
                    onChange={handleInputChange}
                    rows="2"
                    className="w-full px-2 md:px-4 py-1.5 md:py-2.5 text-xs md:text-base border-2 border-gray-200 rounded-lg focus:border-[#0892D0] focus:outline-none transition resize-none"
                    placeholder="Any special requirements?"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex flex-col sm:flex-row gap-2 md:gap-3 pt-2 md:pt-4">
                  <button
                    type="submit"
                    className="flex-1 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-[#0892D0] to-[#4B0082] text-white rounded-full font-semibold text-xs md:text-base hover:shadow-lg hover:scale-105 transition flex items-center justify-center gap-1 md:gap-2"
                  >
                    <CheckCircle className="w-3 md:w-5 h-3 md:h-5" />
                    Submit Request
                  </button>
                  <button
                    type="button"
                    onClick={() => setBookingModalOpen(false)}
                    className="px-4 md:px-6 py-2 md:py-3 bg-gray-100 text-gray-700 rounded-full font-semibold text-xs md:text-base hover:bg-gray-200 transition"
                  >
                    Cancel
                  </button>
                </div>

                <p className="text-xs md:text-xs text-gray-500 text-center mt-2 md:mt-4">
                  * Our team will contact you within 24 hours
                </p>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
