import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import LoginModal from "../components/home/LoginModal";
import {
  Plane,
  Hotel,
  Car,
  Ship,
  Compass,
  Camera,
  Umbrella,
  Briefcase,
  Shield,
  Clock,
  CreditCard,
  Users,
  CheckCircle,
  Star
} from "lucide-react";

import Navigation from "../components/home/Navigation";
import Footer from "../components/home/Footer";

export default function Services() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();

  const mainServices = [
    {
      icon: Plane,
      title: "Flight Booking",
      description: "Book domestic and international flights with exclusive deals.",
      features: ["Best Price Guarantee", "Instant Confirmation", "Multiple Airlines", "24/7 Support"],
      price: "From ₹3,999",
      popular: true
    },
    {
      icon: Hotel,
      title: "Hotel Reservations",
      description: "Find and book the perfect accommodation with verified reviews.",
      features: ["5000+ Hotels", "Free Cancellation", "Instant Booking", "Best Rates"],
      price: "From ₹1,499",
      popular: true
    },
    {
      icon: Car,
      title: "Car Rentals",
      description: "Rent cars with flexible pickup and drop-off options.",
      features: ["Wide Selection", "Insurance Included", "GPS", "Fuel Options"],
      price: "From ₹999/day"
    },
    {
      icon: Ship,
      title: "Cruise Packages",
      description: "Luxury cruise experiences with all-inclusive packages.",
      features: ["Premium Cruises", "Meals Included", "Entertainment", "Excursions"],
      price: "From ₹25,000"
    },
    {
      icon: Compass,
      title: "Guided Tours",
      description: "Explore destinations with expert local guides.",
      features: ["Expert Guides", "Custom Routes", "Group & Private", "Skip-the-Line"],
      price: "From ₹5,000",
      popular: true
    },
    {
      icon: Camera,
      title: "Photography Tours",
      description: "Capture moments with professional photographers.",
      features: ["Pro Shoots", "Best Locations", "Editing", "Prints"],
      price: "From ₹8,000"
    },
    {
      icon: Umbrella,
      title: "Travel Insurance",
      description: "Comprehensive coverage for a worry-free journey.",
      features: ["Medical", "Trip Cancellation", "Lost Baggage", "Emergency Support"],
      price: "From ₹299"
    },
    {
      icon: Briefcase,
      title: "Corporate Travel",
      description: "Tailored business travel solutions.",
      features: ["Bulk Bookings", "Priority Support", "Expense Reports", "Dedicated Manager"],
      price: "Custom Quote"
    }
  ];

  const benefits = [
    { icon: Shield, title: "Secure Booking", description: "Encrypted & safe payments" },
    { icon: Clock, title: "24/7 Support", description: "Anytime assistance" },
    { icon: CreditCard, title: "Best Prices", description: "Guaranteed savings" },
    { icon: Users, title: "Expert Team", description: "Professional consultants" }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      rating: 5,
      comment: "Booked my entire Europe trip through SwiftRise. Flawless experience from start to finish! The team took care of every detail including flights, hotels, and local tours. Couldn't have asked for better service.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
    },
    {
      name: "Rahul Verma",
      location: "Delhi",
      rating: 5,
      comment: "Best car rental experience I've ever had. The vehicle was pristine, delivery was on time, and the rates were incredibly competitive. Their customer support team is always ready to help. Highly impressed!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    {
      name: "Anita Patel",
      location: "Bangalore",
      rating: 5,
      comment: "The guided tour through Rajasthan was absolutely phenomenal! Our guide was knowledgeable, friendly, and made sure we experienced the authentic culture. Every moment was magical and well-organized.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    },
    {
      name: "Vikram Singh",
      location: "Jaipur",
      rating: 5,
      comment: "SwiftRise helped us plan our honeymoon to Maldives and it was absolutely perfect! They handled everything from flights to resort bookings and even arranged special candlelight dinners. Forever grateful!",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
    },
    {
      name: "Sneha Reddy",
      location: "Hyderabad",
      rating: 5,
      comment: "Corporate travel made easy! SwiftRise manages all our business trips seamlessly. Their attention to detail, quick responses, and transparent pricing has made them our go-to travel partner. Excellent service!",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop"
    }
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

      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">

        {/* HERO */}
        <section className="py-8 md:py-28 bg-gradient-to-r from-[#0892D0] to-[#4B0082] text-white text-center overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="max-w-4xl mx-auto px-6"
          >
            <h1 className="text-xl md:text-6xl font-extrabold mb-2 md:mb-6">
              Our Services
            </h1>
            <p className="text-[10px] md:text-xl text-white/80 mb-4 md:mb-8">
              From flights to curated experiences, we handle everything so you can travel stress-free.
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
            
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
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
          </motion.div>
        </section>

        {/* BENEFITS */}
        <section className="-mt-6 md:-mt-16 relative z-10">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5 md:gap-6">
              {benefits.map((b, i) => {
                const Icon = b.icon;
                return (
                  <div
                    key={i}
                    className="bg-white/90 backdrop-blur-lg border border-white/40 rounded-lg md:rounded-2xl shadow-md md:shadow-xl p-1.5 md:p-6 text-center hover:shadow-2xl hover:-translate-y-2 transition duration-300"
                  >
                    <Icon className="w-3 md:w-8 h-3 md:h-8 mx-auto mb-0.5 md:mb-3 text-[#4B0082]" />
                    <div className="text-[8px] md:text-base font-semibold text-gray-900">{b.title}</div>
                    <div className="text-[7px] md:text-sm text-gray-600">{b.description}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="max-w-7xl mx-auto px-6 py-8 md:py-28">
          <h2 className="text-lg md:text-4xl font-bold text-center mb-2 md:mb-4 text-[#4B0082]">
            What We Offer
          </h2>
          <p className="text-center text-gray-600 text-[9px] md:text-lg mb-1 md:mb-3 max-w-4xl mx-auto font-semibold">
            Comprehensive travel solutions designed to make your journey seamless and memorable
          </p>
          <p className="text-center text-gray-500 text-[8px] md:text-base mb-4 md:mb-12 max-w-3xl mx-auto leading-relaxed">
            Whether you're planning a family vacation, business trip, romantic getaway, or solo adventure, 
            we provide end-to-end travel services with competitive pricing, expert guidance, and 24/7 support. 
            From budget-friendly options to luxury experiences, we've got the perfect package for every traveler.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-10">
            {mainServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={i}
                  className="group bg-white rounded-lg md:rounded-3xl shadow-md md:shadow-xl hover:-translate-y-3 hover:shadow-2xl transition duration-300 overflow-hidden relative"
                >
                  {service.popular && (
                    <div className="absolute top-0.5 md:top-5 right-0.5 md:right-5 bg-gradient-to-r from-[#0892D0] to-[#4B0082] text-white text-[7px] md:text-xs px-1 md:px-3 py-0.5 md:py-1 rounded-full shadow-lg">
                      Popular
                    </div>
                  )}

                  <div className="p-1.5 md:p-8">
                    <Icon className="w-4 md:w-10 h-4 md:h-10 text-[#4B0082] mb-0.5 md:mb-5 group-hover:scale-110 transition duration-300" />
                    <h3 className="font-bold text-[10px] md:text-lg mb-0.5 md:mb-3 line-clamp-1">{service.title}</h3>
                    <p className="text-[8px] md:text-sm text-gray-600 mb-1 md:mb-6 line-clamp-2">{service.description}</p>

                    <div className="font-bold text-[10px] md:text-xl mb-1 md:mb-6 text-[#4B0082]">
                      {service.price}
                    </div>

                    <div className="space-y-0.5 md:space-y-3">
                      {service.features.map((f, idx) => (
                        <div key={idx} className="flex items-center gap-0.5 md:gap-2 text-[7px] md:text-sm text-gray-600">
                          <CheckCircle className="w-2 md:w-4 h-2 md:h-4 text-[#0892D0] flex-shrink-0" />
                          <span className="line-clamp-1">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-6 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-base md:text-3xl font-bold text-center mb-1.5 md:mb-3 text-[#4B0082]"
            >
              What Our Customers Say
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center text-gray-600 text-[9px] md:text-base mb-3 md:mb-8"
            >
              Real experiences from travelers who trusted us
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6">
              {testimonials.map((t, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    delay: i * 0.15 
                  }}
                  whileHover={{ 
                    y: -10, 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  className="relative bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 rounded-xl md:rounded-3xl shadow-lg md:shadow-xl p-2 md:p-6 hover:shadow-2xl transition duration-300 border border-white/60 backdrop-blur-sm overflow-hidden"
                >
                  {/* Decorative Quote Icon Background */}
                  <div className="absolute top-0.5 md:top-3 right-0.5 md:right-3 text-5xl md:text-8xl text-[#0892D0]/5 font-serif select-none pointer-events-none">
                    "
                  </div>
                  
                  {/* Rating Stars at Top */}
                  <div className="flex gap-0.5 md:gap-1 mb-1.5 md:mb-3 relative z-10">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} className="w-2.5 md:w-5 h-2.5 md:h-5 fill-yellow-400 text-yellow-400 drop-shadow-sm" />
                    ))}
                  </div>

                  {/* Comment with Quote Styling */}
                  <p className="text-gray-700 text-[9px] md:text-base leading-relaxed mb-2 md:mb-4 relative z-10 line-clamp-3 md:line-clamp-none">
                    <span className="text-base md:text-2xl text-[#0892D0] font-serif">"</span>
                    {t.comment}
                    <span className="text-base md:text-2xl text-[#0892D0] font-serif">"</span>
                  </p>

                  {/* Profile Section with Gradient Border */}
                  <div className="flex items-center gap-1.5 md:gap-3 pt-1.5 md:pt-3 border-t-2 border-gradient-to-r from-[#0892D0]/20 via-[#4B0082]/20 to-transparent relative z-10">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0892D0] to-[#4B0082] rounded-full blur-sm opacity-50"></div>
                      <img
                        src={t.image}
                        alt={t.name}
                        className="relative w-7 md:w-14 h-7 md:h-14 rounded-full object-cover border-2 md:border-4 border-white shadow-lg"
                      />
                    </div>
                    <div>
                      <div className="text-[9px] md:text-base font-bold text-gray-900">{t.name}</div>
                      <div className="text-[7px] md:text-sm text-gray-600 flex items-center gap-0.5 md:gap-1">
                        <svg className="w-2 md:w-3 h-2 md:h-3 text-[#0892D0]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {t.location}
                      </div>
                    </div>
                  </div>

                  {/* Verified Badge */}
                  <div className="absolute bottom-1.5 md:bottom-3 right-1.5 md:right-3 bg-gradient-to-r from-[#0892D0] to-[#4B0082] text-white text-[7px] md:text-xs px-1.5 md:px-2.5 py-0.5 md:py-1 rounded-full shadow-lg flex items-center gap-0.5 md:gap-1">
                    <CheckCircle className="w-2 md:w-3 h-2 md:h-3" />
                    <span className="font-semibold">Verified</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </>
  );
}