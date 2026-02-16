import React, { useState } from "react";
import { motion } from "framer-motion";
import LoginModal from "../components/home/LoginModal";
import Footer from "../components/home/Footer";
import Navigation from "../components/home/Navigation";
import { FaCar, FaReact } from "react-icons/fa";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    travelDate: "",
    serviceType: "",
    message: "",
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your inquiry! We will get back to you shortly.");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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

        {/* ================= HERO ================= */}
        <section className="relative py-12 md:py-20 bg-gradient-to-br from-[#0892D0] via-[#2d5aa8] to-[#4B0082] text-white overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/3 rounded-full blur-2xl"></div>
          </div>

          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}></div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-w-5xl mx-auto px-6 text-center"
          >
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center gap-1.5 md:gap-2 mb-4 md:mb-6 bg-white/10 backdrop-blur-md px-3 md:px-5 py-1.5 md:py-2.5 rounded-full border border-white/20 shadow-lg"
            >
              <span className="w-2 md:w-2 h-2 md:h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-xs md:text-sm font-medium tracking-wide">Available 24/7</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-2xl md:text-5xl lg:text-7xl font-extrabold mb-4 md:mb-6 leading-tight"
            >
              Let's Connect &
              <br />
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Start Your Journey
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xs md:text-lg lg:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed mb-6 md:mb-10"
            >
              We're here to help you travel better. Reach out for personalized bookings,
              custom travel plans, or expert assistance anytime.
            </motion.p>

            {/* Quick Contact Cards */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-2 md:gap-4 max-w-3xl mx-auto"
            >
              <div className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-xl md:rounded-2xl px-3 md:px-6 py-2 md:py-4 hover:bg-white/15 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-2xl">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 md:w-12 h-8 md:h-12 bg-white/15 rounded-lg md:rounded-xl flex items-center justify-center group-hover:bg-white/25 transition-all duration-300">
                    <span className="text-base md:text-2xl">📞</span>
                  </div>
                  <div className="text-left">
                    <p className="text-xs md:text-xs text-white/70 font-medium">Call Us</p>
                    <p className="text-xs md:text-sm font-semibold">+91 98765 43210</p>
                  </div>
                </div>
              </div>

              <div className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-xl md:rounded-2xl px-3 md:px-6 py-2 md:py-4 hover:bg-white/15 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-2xl">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 md:w-12 h-8 md:h-12 bg-white/15 rounded-lg md:rounded-xl flex items-center justify-center group-hover:bg-white/25 transition-all duration-300">
                    <span className="text-base md:text-2xl">📧</span>
                  </div>
                  <div className="text-left">
                    <p className="text-xs md:text-xs text-white/70 font-medium">Email Us</p>
                    <p className="text-xs md:text-sm font-semibold">travel.inquiry@example.com</p>
                  </div>
                </div>
              </div>

              <div className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-xl md:rounded-2xl px-3 md:px-6 py-2 md:py-4 hover:bg-white/15 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-2xl">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 md:w-12 h-8 md:h-12 bg-white/15 rounded-lg md:rounded-xl flex items-center justify-center group-hover:bg-white/25 transition-all duration-300">
                    <span className="text-base md:text-2xl">⏰</span>
                  </div>
                  <div className="text-left">
                    <p className="text-xs md:text-xs text-white/70 font-medium">Response Time</p>
                    <p className="text-xs md:text-sm font-semibold">Within 24 Hours</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Decorative Bottom Wave */}
            <div className="absolute bottom-0 left-0 right-0 h-16 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0 C300,100 900,100 1200,0 L1200,120 L0,120 Z" fill="white"/>
              </svg>
            </div>
          </motion.div>
        </section>
 
        {/* ================= CONTACT SECTION ================= */}
       
<section className="max-w-7xl mx-auto px-6 pb-20 pt-16 relative z-10">
  <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">

      {/* INFO PANEL - Modern Classic Design */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-br from-[#0892D0] via-[#0892D0]/90 to-[#4B0082] text-white p-4 md:p-8 flex flex-col justify-between overflow-hidden group"
      >
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-white rounded-full blur-3xl"></div>
      </div>

        <div className="relative z-10">
          {/* Icon Badge */}
          <div className="inline-flex items-center gap-1.5 md:gap-2 mb-3 md:mb-4 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/20">
            <FaReact className="text-sm md:text-xl animate-spin-slow" />
            <span className="text-xs md:text-xs font-medium tracking-wide">24/7 Support</span>
          </div>

          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 leading-tight">
            Let's Start Your
            <br />
            <span className="text-white/90">Next Adventure</span>
          </h2>
          
          <p className="text-xs md:text-sm leading-relaxed text-white/85 mb-4 md:mb-6">
          Whether you're dreaming of a tropical escape, cultural exploration, or thrilling adventure, 
          our expert team is here to craft your perfect journey. We respond within 24 hours to help 
          bring your travel dreams to life.
        </p>

          {/* Feature List */}
          <div className="space-y-2 md:space-y-2 mb-4 md:mb-6">
            <div className="flex items-center gap-2 text-white/90">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              <span className="text-xs md:text-sm">Personalized Travel Planning</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              <span className="text-xs md:text-sm">Best Price Guarantee</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              <span className="text-xs md:text-sm">Expert Travel Consultants</span>
            </div>
          </div>

          {/* Vehicle Service Badge */}
          <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
            <div className="bg-white/15 backdrop-blur-sm p-1.5 md:p-2 rounded-lg border border-white/20">
              <FaCar className="text-base md:text-2xl" />
            </div>
            <div>
              <p className="text-xs md:text-xs text-white/70">Premium Fleet Available</p>
              <p className="text-xs md:text-sm font-semibold">Airport & City Transfers</p>
            </div>
          </div>
        </div>

        {/* Contact Info - Bottom */}
        <div className="relative z-10 space-y-2 md:space-y-3 pt-4 md:pt-6 border-t border-white/20">
          <div className="flex items-center gap-2 md:gap-3 text-white/95 hover:text-white transition-colors duration-300 cursor-pointer group/item">
            <div className="w-8 md:w-10 h-8 md:h-10 bg-white/15 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover/item:bg-white/25 transition-all duration-300">
              <span className="text-base md:text-xl">📧</span>
            </div>
            <div>
              <p className="text-xs md:text-xs text-white/70 uppercase tracking-wider font-medium">Email Us</p>
              <p className="text-xs md:text-sm font-semibold">travel.inquiry@example.com</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 md:gap-3 text-white/95 hover:text-white transition-colors duration-300 cursor-pointer group/item">
            <div className="w-8 md:w-10 h-8 md:h-10 bg-white/15 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover/item:bg-white/25 transition-all duration-300">
              <span className="text-base md:text-xl">📞</span>
            </div>
            <div>
              <p className="text-xs md:text-xs text-white/70 uppercase tracking-wider font-medium">Call Us</p>
              <p className="text-xs md:text-sm font-semibold">+91 98765 43210</p>
            </div>
          </div>
        </div>

        {/* Corner Accent */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-full"></div>
      </motion.div>

      {/* FORM - Clean Modern Design */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-white p-4 md:p-8 border-l border-gray-100"
      >
        <div className="mb-4 md:mb-6">
          <div className="inline-block px-2 md:px-3 py-0.5 md:py-1 bg-gradient-to-r from-[#0892D0]/10 to-[#4B0082]/10 rounded-full mb-2 md:mb-3">
            <span className="text-xs md:text-xs font-semibold bg-gradient-to-r from-[#0892D0] to-[#4B0082] bg-clip-text text-transparent">
              Get in Touch
            </span>
          </div>
          
          <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-1.5 md:mb-2">
            Travel Inquiry Form
          </h3>
          <p className="text-xs md:text-sm text-gray-600">
            Fill out the form and we'll reach out within 24 hours.
          </p>
        </div>

        <form className="space-y-3 md:space-y-4" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-3 md:gap-4">
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input 
              name="fullName" 
              placeholder="John Doe" 
              onChange={handleChange} 
              required 
              className="input" 
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Phone Number</label>
            <input 
              name="phone" 
              placeholder="+91 98765 43210" 
              onChange={handleChange} 
              required 
              className="input" 
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input 
              type="email" 
              name="email" 
              placeholder="you@example.com" 
              onChange={handleChange} 
              required 
              className="input" 
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">Travel Date</label>
            <input 
              type="date" 
              name="travelDate" 
              onChange={handleChange} 
              required 
              className="input" 
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Service Type</label>
          <select 
            name="serviceType" 
            onChange={handleChange} 
            required 
            className="input"
          >
            <option value="">Choose your service...</option>
            <option>🏖️ Local Trip</option>
            <option>🚗 Outstation Trip</option>
            <option>✈️ Airport Transfer</option>
            <option>💼 Corporate Travel</option>
            <option>🌍 International Tour</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Your Message (Optional)</label>
          <textarea
            name="message"
            rows="4"
            placeholder="Tell us about your travel plans..."
            onChange={handleChange}
            className="input resize-none"
          />
        </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#0892D0] to-[#4B0082] text-white py-2 md:py-3 text-sm md:text-base rounded-lg font-semibold hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <span>Send Inquiry</span>
            <svg className="w-3 md:w-4 h-3 md:h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>

          <p className="text-center text-xs md:text-xs text-gray-500">
            🔒 Your information is safe and secure
          </p>
        </form>
      </motion.div>

    </div>
  </div>
</section>

        {/* ================= MAP ================= */}
        <section className="max-w-7xl mx-auto px-6 pb-28">
          <div className="rounded-3xl overflow-hidden shadow-2xl h-80 md:h-[420px] border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.3334!2d75.8!3d22.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQyJzAwLjAiTiA3NcKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              title="Location Map"
            />
          </div>
        </section>

      </div>

      <Footer />

      <style>{`
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .form-label {
          font-size: 0.75rem;
          font-weight: 600;
          color: #374151;
          letter-spacing: 0.025em;
        }
        
        @media (min-width: 768px) {
          .form-label {
            font-size: 0.875rem;
          }
        }
        
        .input {
          width: 100%;
          padding: 0.625rem 0.75rem;
          border-radius: 0.625rem;
          border: 1.5px solid #e5e7eb;
          outline: none;
          transition: all 0.3s ease;
          background: #ffffff;
          font-size: 0.8125rem;
          color: #1f2937;
        }        
        @media (min-width: 768px) {
          .input {
            padding: 0.875rem 1rem;
            border-radius: 0.75rem;
            font-size: 0.9375rem;
          }
        }        
        .input:focus {
          border-color: #0892D0;
          box-shadow: 0 0 0 3px rgba(8,146,208,0.15);
          transform: translateY(-1px);
        }
        
        .input::placeholder {
          color: #9ca3af;
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </>
  );
}