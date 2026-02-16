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
  MapPin,
} from "lucide-react";
import { motion, useAnimation } from "framer-motion";

import Navigation from "../components/home/Navigation";
import LoginModal from "../components/home/LoginModal";
import HeroSection from "../components/home/HeroSection";
import BookingCard from "../components/home/BookingCard";
import Footer from "../components/home/Footer";

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

      {/* DISCOVER SECTION */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
          

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-[#0892D0] to-[#4B0082] bg-clip-text text-transparent font-serif tracking-tight">
            Discover Amazing Tours & Travel Experiences
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mb-4 md:mb-6 text-xs md:text-lg">
            From breathtaking landscapes to unforgettable wildlife encounters,
            explore curated travel experiences designed for comfort and adventure.
          </p>

          <p className="text-gray-500 max-w-3xl mx-auto mb-4 md:mb-6 text-[10px] md:text-base">
            Whether you're seeking relaxation on pristine beaches, excitement in bustling cities, 
            or tranquility in mountain retreats, we offer personalized journeys that cater to every traveler's dream.
          </p>

          <p className="text-gray-500 max-w-2xl mx-auto mb-6 md:mb-10 text-[9px] md:text-sm italic">
            Experience the world with trusted guides, comfortable transportation, and seamless service 
            that transforms every trip into a cherished memory. Your adventure awaits!
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
                box-shadow: 0 0 20px rgba(8, 146, 208, 0.8),
                            0 0 30px rgba(8, 146, 208, 0.6),
                            0 0 40px rgba(75, 0, 130, 0.4),
                            0 0 50px rgba(75, 0, 130, 0.3);
                transform: scale(1.05);
              }
            }
            
            .glow-explore-btn {
              animation: glow-pulse 2s ease-in-out infinite;
            }
          `}</style>

          <Link to="/explore">
            <button className="glow-explore-btn bg-gradient-to-r from-[#0892D0] to-[#4B0082] text-white px-3 md:px-4 py-2 md:py-3 text-xs md:text-base rounded-full font-semibold hover:scale-105 transition duration-300 shadow-xl">
              Explore More
            </button>
          </Link>
        </div>
      </section>
 
      {/* BEAUTY OF KORAPUT */}
      <section className="relative w-full py-12 md:py-16 overflow-hidden">

        <video
          src="/video5.mp4"
          muted
          loop
          autoPlay
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover blur-xs "
        />

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ amount: 0.3 }}
          className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 text-white"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 drop-shadow-lg">
            The Beauty of Koraput
          </h2>
 
          <p className="max-w-3xl mb-4 md:mb-6 text-xs md:text-base drop-shadow-md">
            Discover the untouched beauty of ancient valleys, serene monasteries perched on cliffsides, 
            and crystal-clear lakes reflecting endless horizons. Experience the raw majesty of nature where 
            tradition meets tranquility, and every journey becomes a story worth telling.
          </p>

          <p className="max-w-2xl mb-6 md:mb-8 text-[10px] md:text-sm drop-shadow-md italic opacity-90">
            Join us on an adventure through landscapes that inspire wonder and cultural encounters 
            that enrich the soul. From sunrise over snow-capped peaks to starlit nights in the 
            wilderness, this is travel at its most transformative.
          </p>

          
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
  const [currentIndex, setCurrentIndex] = useState(0);

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

    // Update current index based on animation progress
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % customers.length);
    }, 10000); // 40s duration / 4 cards

    return () => clearInterval(interval);
  }, [controls]);

  return (
    <section className="py-14 bg-white overflow-hidden">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-3 md:mb-4 text-[#4B0082]">
        Trusted by Thousands of Repeat Customers
      </h2>
      
      <p className="text-xs md:text-base text-gray-600 text-center max-w-2xl mx-auto mb-8 md:mb-12 px-4 md:px-6">
        Our commitment to excellence keeps travelers coming back. Read what our loyal customers have to say about their experiences with us.
      </p>

      {/* Desktop: Horizontal Scroll */}
      <motion.div className="hidden md:flex gap-8 w-max px-8" animate={controls}>
        {[...customers, ...customers].map((c, i) => (
          <motion.div 
            key={i} 
            className="w-[320px] bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-8 text-center relative overflow-hidden group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ 
              y: -10,
              scale: 1.05,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.3)"
            }}
          >
            {/* Decorative gradient overlay */}
            <motion.div 
              className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0892D0] to-[#4B0082]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ originX: 0 }}
            ></motion.div>
            
            {/* Profile Image */}
            <motion.div 
              className="relative mb-5"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.3 
              }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-[#0892D0] to-[#4B0082] rounded-full blur-md opacity-30"
                animate={{ 
                  opacity: [0.3, 0.5, 0.3],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              ></motion.div>
              <motion.img 
                src={c.image} 
                className="w-24 h-24 mx-auto rounded-full relative z-10 border-4 border-white shadow-lg" 
                alt={c.name}
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.5 }
                }}
              />
            </motion.div>
            
            {/* Customer Info */}
            <motion.h3 
              className="font-bold text-lg text-gray-800 mb-1"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {c.name}
            </motion.h3>
            <motion.p 
              className="text-sm text-gray-500 mb-4 flex items-center justify-center gap-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <MapPin className="w-3 h-3" />
              {c.place}
            </motion.p>
            
            {/* Quote Icon */}
            <motion.div 
              className="mb-3"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 200,
                delay: 0.6 
              }}
            >
              <Quote className="w-6 h-6 mx-auto text-[#4B0082] opacity-20" />
            </motion.div>
            
            {/* Review */}
            <motion.p 
              className="text-sm text-gray-700 leading-relaxed italic"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              "{c.review}"
            </motion.p>
            
            {/* Star Rating */}
            <motion.div 
              className="flex justify-center gap-1 mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {[...Array(5)].map((_, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ 
                    delay: 0.9 + idx * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.3,
                    rotate: 360,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Mobile: Horizontal Swipeable Carousel */}
      <div className="md:hidden relative px-3">
        <div className="overflow-x-auto snap-x snap-mandatory flex gap-3 pb-4 scrollbar-hide">
          {customers.map((c, i) => (
            <motion.div 
              key={i} 
              className="flex-shrink-0 w-[60vw] max-w-[220px] snap-center bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-xl p-3 text-center relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              {/* Decorative gradient overlay */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#0892D0] to-[#4B0082]"></div>
              
              {/* Profile Image */}
              <div className="relative mb-2">
                <div className="absolute inset-0 bg-gradient-to-r from-[#0892D0] to-[#4B0082] rounded-full blur-md opacity-30 animate-pulse"></div>
                <img 
                  src={c.image} 
                  className="w-12 h-12 mx-auto rounded-full relative z-10 border-2 border-white shadow-lg" 
                  alt={c.name}
                />
              </div>
              
              {/* Customer Info */}
              <h3 className="font-bold text-xs text-gray-800 mb-0.5">{c.name}</h3>
              <p className="text-[9px] text-gray-500 mb-1.5 flex items-center justify-center gap-0.5">
                <MapPin className="w-2 h-2" />
                {c.place}
              </p>
              
              {/* Quote Icon */}
              <div className="mb-1">
                <Quote className="w-3 h-3 mx-auto text-[#4B0082] opacity-20" />
              </div>
              
              {/* Review */}
              <p className="text-[9px] text-gray-700 leading-snug italic">"{c.review}"</p>
              
              {/* Star Rating */}
              <div className="flex justify-center gap-0.5 mt-1.5">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Mobile Slide Indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {customers.map((_, idx) => (
            <div
              key={idx}
              className="h-2 w-2 rounded-full bg-gray-300"
            />
          ))}
        </div>
      </div>

      {/* Desktop Slide Indicators */}
      <div className="hidden md:flex justify-center mt-8">
        <div className="inline-flex gap-2">
          {customers.map((_, idx) => (
            <motion.div
              key={idx}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "w-8 bg-gradient-to-r from-[#0892D0] to-[#4B0082]"
                  : "w-2 bg-gray-300"
              }`}
              whileHover={{ scale: 1.2 }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* PARTNERS */

function PartnersSection() {
  const controls = useAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);

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

    // Update current index based on animation progress
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % partners.length);
    }, 10000); // 30s duration / 3 partners

    return () => clearInterval(interval);
  }, [controls]);

  return (
    <section className="py-16 bg-white overflow-hidden">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-3 md:mb-4 text-[#4B0082]">
        Our Trusted Partners
      </h2>

      <p className="text-xs md:text-base text-gray-600 text-center max-w-2xl mx-auto mb-8 md:mb-12 px-4 md:px-6">
        We collaborate with the best travel and transportation companies to ensure your journey is seamless and memorable. Together, we deliver excellence in every trip.
      </p>

      {/* Desktop: Horizontal Scroll */}
      <div className="hidden md:block relative w-full overflow-hidden">
        <motion.div
          animate={controls}
          className="flex whitespace-nowrap"
        >
          {[...partners, ...partners].map((p, i) => (
            <motion.div 
              key={i} 
              className="flex-shrink-0 w-80 mx-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="bg-white rounded-3xl overflow-hidden shadow-lg cursor-pointer group relative"
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Image Container with Overlay */}
                <div className="relative h-56 overflow-hidden">
                  <motion.img
                    src={p.image}
                    className="w-full h-full object-cover"
                    alt={p.name}
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Partner Badge with Pulse Animation */}
                  <motion.div 
                    className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-lg"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.3 
                    }}
                  >
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop"
                      }}
                    >
                      <ShieldCheck className="w-4 h-4 text-[#0892D0]" />
                    </motion.div>
                    <span className="text-xs font-semibold text-gray-700">Verified</span>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Partner Name */}
                  <motion.h3 
                    className="text-2xl font-bold text-gray-800 mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {p.name}
                  </motion.h3>
                  
                  {/* Description */}
                  <motion.p 
                    className="text-sm text-gray-600 mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    Premium travel services with exceptional customer satisfaction and reliability.
                  </motion.p>
                  
                  {/* Rating & Stats */}
                  <motion.div 
                    className="flex items-center justify-between pt-4 border-t border-gray-100"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            delay: 0.5 + idx * 0.1,
                            type: "spring",
                            stiffness: 200
                          }}
                        >
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        </motion.div>
                      ))}
                      <span className="text-sm font-semibold text-gray-700 ml-1">5.0</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500">
                      <Users className="w-4 h-4" />
                      <span className="text-xs font-medium">500+ trips</span>
                    </div>
                  </motion.div>
                </div>

                {/* Bottom Accent with Animation */}
                <motion.div 
                  className="h-1 bg-gradient-to-r from-[#0892D0] to-[#4B0082]"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  whileHover={{ scaleY: 1.5 }}
                  transition={{ duration: 0.5 }}
                  style={{ originX: 0 }}
                ></motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Mobile: Horizontal Swipeable Carousel */}
      <div className="md:hidden relative px-3">
        <div className="overflow-x-auto snap-x snap-mandatory flex gap-3 pb-4 scrollbar-hide">
          {partners.map((p, i) => (
            <motion.div
              key={i}
              className="flex-shrink-0 w-[60vw] max-w-[240px] snap-center bg-white rounded-xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              {/* Image Container with Overlay */}
              <div className="relative h-32 overflow-hidden">
                <img
                  src={p.image}
                  className="w-full h-full object-cover"
                  alt={p.name}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Partner Badge */}
                <div className="absolute top-2 right-2 bg-white/95 backdrop-blur-sm px-2 py-0.5 rounded-full flex items-center gap-0.5 shadow-lg">
                  <ShieldCheck className="w-3 h-3 text-[#0892D0]" />
                  <span className="text-[8px] font-semibold text-gray-700">Verified</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-2.5">
                {/* Partner Name */}
                <h3 className="text-xs font-bold text-gray-800 mb-0.5">{p.name}</h3>
                
                {/* Description */}
                <p className="text-[9px] text-gray-600 mb-1.5 line-clamp-2">
                  Premium travel services.
                </p>
                
                {/* Rating & Stats */}
                <div className="flex items-center justify-between pt-1.5 border-t border-gray-100">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-[9px] font-semibold text-gray-700 ml-0.5">5.0</span>
                  </div>
                  <div className="flex items-center gap-0.5 text-gray-500">
                    <Users className="w-2.5 h-2.5" />
                    <span className="text-[8px] font-medium">500+</span>
                  </div>
                </div>
              </div>

              {/* Bottom Accent */}
              <div className="h-0.5 bg-gradient-to-r from-[#0892D0] to-[#4B0082]"></div>
            </motion.div>
          ))}
        </div>
        
        {/* Mobile Slide Indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {partners.map((_, idx) => (
            <div
              key={idx}
              className="h-2 w-2 rounded-full bg-gray-300"
            />
          ))}
        </div>
      </div>

      {/* Desktop Slide Indicators */}
      <div className="hidden md:flex justify-center mt-8">
        <div className="inline-flex gap-2">
          {partners.map((_, idx) => (
            <div
              key={idx}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "w-8 bg-gradient-to-r from-[#0892D0] to-[#4B0082]"
                  : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
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