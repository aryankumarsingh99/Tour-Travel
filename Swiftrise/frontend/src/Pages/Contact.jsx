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
        <section className="relative py-28 bg-gradient-to-r from-[#0892D0] to-[#4B0082] text-white overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.25, 0.8, 0.25, 1] }}
            className="max-w-4xl mx-auto px-6 text-center"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              Contact <span className="text-white/90">Us</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              We’re here to help you travel better. Reach out for bookings,
              custom plans, or assistance anytime.
            </p>
          </motion.div>
        </section>

        {/* ================= HELP SECTION ================= */}
        <section className="max-w-7xl mx-auto px-6 py-28">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#4B0082]">
            How Can We Help You?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* FEATURED CARD */}
            <div className="bg-gradient-to-br from-[#0892D0] to-[#4B0082] text-white rounded-3xl p-10 shadow-2xl hover:-translate-y-2 transition duration-300">
              <h3 className="text-2xl font-bold mb-6">Travel Assistance</h3>
              <p className="mb-8 text-white/90">
                End-to-end travel support for family trips, corporate travel,
                pilgrimages, and custom itineraries.
              </p>
              <ul className="space-y-4 text-sm">
                <li>→ Personalized itineraries</li>
                <li>→ 24/7 customer support</li>
                <li>→ Reliable & safe vehicles</li>
                <li>→ Experienced drivers</li>
              </ul>
            </div>

            {/* SUPPORT CARDS */}
            <div className="grid gap-6">
              {[
                {
                  title: "Vehicle Booking",
                  text: "Wide range of sedans, SUVs, tempo travelers, and luxury vehicles.",
                },
                {
                  title: "Trip Planning",
                  text: "Route planning, sightseeing stops, and itinerary design.",
                },
                {
                  title: "Custom Requests",
                  text: "Child seats, wheelchair access, special needs handled.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition duration-300 border border-gray-100"
                >
                  <h3 className="font-bold text-lg mb-2 text-[#4B0082]">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CONTACT SECTION ================= */}
       
<section className="max-w-7xl mx-auto px-6 pb-28">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">

    {/* INFO PANEL */}
    <div className="bg-gradient-to-br from-[#0892D0] to-[#4B0082] text-white rounded-3xl p-10 shadow-2xl flex flex-col justify-between h-full">
      <div>
        <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
        <p className="mb-8 text-white/90">
          We’d love to hear from you and help make your next adventure unforgettable! Whether you're dreaming of a tropical getaway, a cultural escape, or an adrenaline-filled journey, our travel experts are here to bring your vision to life. Get in touch with us today by phone, email, or through the form below—we typically respond within 24 hours. Let’s plan your perfect trip, together.
        </p>

        <div className="flex items-center gap-4 mb-8 text-2xl">
          <FaReact />
          <FaCar />
        </div>
      </div>

      <div className="space-y-4 text-sm mt-10">
        <div>📧 travel.inquiry@example.com</div>
        <div>📞 +91 98765 43210</div>
      </div>
    </div>

    {/* FORM */}
    <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100 h-full flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-bold mb-2 text-[#4B0082]">
          Travel Inquiry
        </h3>
        <p className="text-gray-600 mb-8 text-sm">
          Fill the form and our team will contact you shortly.
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-6">
            <input name="fullName" placeholder="Full Name *" onChange={handleChange} required className="input" />
            <input name="phone" placeholder="Phone Number *" onChange={handleChange} required className="input" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <input type="email" name="email" placeholder="Email *" onChange={handleChange} required className="input" />
            <input type="date" name="travelDate" onChange={handleChange} required className="input" />
          </div>

          <select name="serviceType" onChange={handleChange} required className="input">
            <option value="">Select Service</option>
            <option>Local Trip</option>
            <option>Outstation Trip</option>
            <option>Airport Transfer</option>
            <option>Corporate Travel</option>
          </select>

          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            onChange={handleChange}
            className="input resize-none"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#0892D0] to-[#4B0082] text-white py-3 rounded-full font-semibold hover:scale-105 transition duration-300 shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
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
        .input {
          width: 100%;
          padding: 0.9rem;
          border-radius: 0.75rem;
          border: 1px solid #e5e7eb;
          outline: none;
          transition: all 0.25s ease;
          background: #ffffff;
        }
        .input:focus {
          border-color: #0892D0;
          box-shadow: 0 0 0 2px rgba(8,146,208,0.2);
        }
      `}</style>
    </>
  );
}