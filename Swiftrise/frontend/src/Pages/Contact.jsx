import React, { useState } from 'react';
import LoginModal from '../components/home/LoginModal';
import Footer from '../components/home/Footer';

import Navigation from '../components/home/Navigation';
import { FaCar, FaReact } from 'react-icons/fa';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    travelDate: '',
    serviceType: '',
    message: ''
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will get back to you shortly.');
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

      <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">

        {/* HERO */}
        <section className="relative w-full min-h-[300px] bg-gradient-to-r from-gray-700 to-gray-600">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-800 to-orange-400 opacity-30" />
          <div className="relative px-4 sm:px-8 lg:px-20 pt-24 max-w-xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-2">
              Contact <span className="text-orange-400">Us</span>
            </h1>
            <h2 className="text-sm sm:text-base md:text-lg text-gray-200 mb-3">
              We’re here to help you travel better
            </h2>
            <p className="text-gray-100 text-sm md:text-base">
              Reach out for bookings, custom travel plans, or any assistance.
            </p>
          </div>
        </section>

        {/* HELP SECTION */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-24">
          <h2 className="text-4xl font-bold text-center mb-12">
            How Can We Help You?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* FEATURED CARD */}
            <div className="bg-[#1CA8CB] text-white rounded-xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">🎯 Travel Assistance</h3>
              <p className="mb-6 opacity-95">
                End-to-end travel support for family trips, corporate travel,
                pilgrimages, and custom itineraries.
              </p>
              <ul className="space-y-3 text-sm">
                <li>→ Personalized itineraries</li>
                <li>→ 24/7 customer support</li>
                <li>→ Reliable & safe vehicles</li>
                <li>→ Experienced drivers</li>
              </ul>
            </div>

            {/* SUPPORT CARDS */}
            <div className="grid grid-cols-1 gap-6">
              {[
                { title: '🚗 Vehicle Booking', text: 'Wide range of sedans, SUVs, tempo travelers, and luxury vehicles.' },
                { title: '🗺️ Trip Planning', text: 'Route planning, sightseeing stops, and itinerary design.' },
                { title: '✨ Custom Requests', text: 'Child seats, wheelchair access, special needs handled.' }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border-2 border-gray-200 rounded-xl p-6
                             hover:border-[#1CA8CB] hover:shadow-lg hover:-translate-y-1
                             transition-all duration-300"
                >
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.text}</p>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* CONTACT + FORM */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-24">
          <div className="bg-[#1CA8CB] rounded-3xl p-8 md:p-14 shadow-xl hover:shadow-2xl transition-all">

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

              {/* INFO */}
              <div className="lg:col-span-2 text-white">
                <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
                <p className="mb-6 opacity-95">
                  We respond quickly and help you plan hassle-free travel.
                </p>

                <div className="flex items-center gap-3 mb-4">
                  <FaReact /> <FaCar />
                </div>

                <div className="space-y-4 text-sm">
                  <div>📧 travel.inquiry@example.com</div>
                  <div>📞 +91 98765 43210</div>
                </div>
              </div>

              {/* FORM */}
              <div className="lg:col-span-3 bg-white rounded-xl p-8 shadow-2xl hover:shadow-3xl transition-all">
                <h3 className="text-2xl font-bold mb-1">Travel Inquiry</h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Fill the form and our team will contact you shortly.
                </p>

                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input name="fullName" placeholder="Full Name *" onChange={handleChange} required className="input" />
                    <input name="phone" placeholder="Phone Number *" onChange={handleChange} required className="input" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
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
                    className="bg-[#1CA8CB] text-white px-8 py-3 rounded-lg font-semibold
                               hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-lg
                               transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>

            </div>
          </div>
        </div>

        {/* MAP */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-24 mb-24">
          <div className="rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all h-80 md:h-[420px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.3334!2d75.8!3d22.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQyJzAwLjAiTiA3NcKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              title="Location Map"
            />
          </div>
        </div>

      </div>

      <Footer />

      <style>{`
        .input {
          width: 100%;
          padding: 0.75rem;
          border-radius: 0.5rem;
          border: 1px solid #d1d5db;
          outline: none;
          transition: all 0.25s ease;
        }
        .input:focus {
          border-color: #1CA8CB;
          box-shadow: 0 0 0 1px #1CA8CB;
        }
      `}</style>
    </>
  );
}