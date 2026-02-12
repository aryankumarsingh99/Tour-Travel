import React, { useState } from "react";
import { motion } from "framer-motion";
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
      comment: "Booked my entire Europe trip through SwiftRise. Flawless experience!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
    },
    {
      name: "Rahul Verma",
      location: "Delhi",
      rating: 5,
      comment: "Best car rental experience. Smooth and reliable.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    {
      name: "Anita Patel",
      location: "Bangalore",
      rating: 5,
      comment: "Guided tour was amazing. Highly recommend!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
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
        <section className="py-28 bg-gradient-to-r from-[#0892D0] to-[#4B0082] text-white text-center overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="max-w-4xl mx-auto px-6"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              From flights to curated experiences, we handle everything so you can travel stress-free.
            </p>
          </motion.div>
        </section>

        {/* BENEFITS */}
        <section className="-mt-16 relative z-10">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {benefits.map((b, i) => {
                const Icon = b.icon;
                return (
                  <div
                    key={i}
                    className="bg-white/90 backdrop-blur-lg border border-white/40 rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl hover:-translate-y-2 transition duration-300"
                  >
                    <Icon className="w-8 h-8 mx-auto mb-3 text-[#4B0082]" />
                    <div className="font-semibold text-gray-900">{b.title}</div>
                    <div className="text-sm text-gray-600">{b.description}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="max-w-7xl mx-auto px-6 py-28">
          <h2 className="text-4xl font-bold text-center mb-20 text-[#4B0082]">
            What We Offer
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {mainServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={i}
                  className="group bg-white rounded-3xl shadow-xl hover:-translate-y-3 hover:shadow-2xl transition duration-300 overflow-hidden relative"
                >
                  {service.popular && (
                    <div className="absolute top-5 right-5 bg-gradient-to-r from-[#0892D0] to-[#4B0082] text-white text-xs px-3 py-1 rounded-full shadow-lg">
                      Popular
                    </div>
                  )}

                  <div className="p-8">
                    <Icon className="w-10 h-10 text-[#4B0082] mb-5 group-hover:scale-110 transition duration-300" />
                    <h3 className="font-bold text-lg mb-3">{service.title}</h3>
                    <p className="text-sm text-gray-600 mb-6">{service.description}</p>

                    <div className="font-bold text-xl mb-6 text-[#4B0082]">
                      {service.price}
                    </div>

                    <div className="space-y-3">
                      {service.features.map((f, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-[#0892D0]" />
                          {f}
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
        <section className="bg-gray-100 py-28">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-20 text-[#4B0082]">
              What Our Customers Say
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">{t.name}</div>
                      <div className="text-sm text-gray-500">{t.location}</div>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-gray-700 italic text-sm">"{t.comment}"</p>
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