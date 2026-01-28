import React, { useState } from 'react';
import LoginModal from '../components/home/LoginModal';
import Footer from '../components/home/Footer';
import TopBar from '../components/home/TopBar';
import Navigation from '../components/home/Navigation';
import { FaReact } from 'react-icons/fa';
import { FaCar } from 'react-icons/fa';

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
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you shortly.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>  
    <TopBar />
    <Navigation 
      mobileMenuOpen={mobileMenuOpen}
      setMobileMenuOpen={setMobileMenuOpen}
      setLoginModalOpen={setLoginModalOpen}
    />
    <LoginModal loginModalOpen={loginModalOpen} setLoginModalOpen={setLoginModalOpen} isSignup={isSignup} setIsSignup={setIsSignup} />
    
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 bg-[#1CA8CB] flex flex-col items-center justify-center text-white overflow-hidden">
        <div className="absolute text-9xl opacity-20 left-20 top-1/2 -translate-y-1/2">
          <FaCar />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-3 z-10 drop-shadow-lg">Contact Us</h1>
        <p className="text-lg opacity-95 z-10">We are Together</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* How Can We Help You Section */}
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          How Can We Help You?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Featured Card - Travel Assistance */}
          <div className="md:row-span-3 bg-[#1CA8CB] text-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="text-3xl">🎯</span>
              Travel Assistance
            </h3>
            <p className="mb-6 leading-relaxed opacity-95">
              We provide end-to-end support for all your travel needs. Whether you're planning a family trip, corporate outing, or a religious pilgrimage, we ensure a seamless, comfortable, and memorable travel experience.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="text-white">→</span>
                <span>Personalized itineraries</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-white">→</span>
                <span>24/7 customer support</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-white">→</span>
                <span>On-time, reliable service</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-white">→</span>
                <span>Safe & sanitized vehicles</span>
              </li>
            </ul>
          </div>

          {/* Vehicle Booking */}
          <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-[#1CA8CB] hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-gray-900">
              <span className="text-2xl">🚗</span>
              Vehicle Booking
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Choose from a wide range of vehicles including sedans, SUVs, tempo travelers, and luxury coaches to match your group size and budget.
            </p>
          </div>

          {/* Trip Planning */}
          <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-[#1CA8CB]    hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-gray-900">
              <span className="text-2xl">🗺️</span>
              Trip Planning
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Let us handle your entire itinerary—from route planning to sightseeing stops. We customize every trip to suit your preferences.
            </p>
          </div>

          {/* Custom Requests */}
          <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-[#1CA8CB] hover:shadow-lg transition-all duration-300 md:col-start-2">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-3 text-gray-900">
              <span className="text-2xl">✨</span>
              Custom Requests
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Have specific needs? We accommodate special requests including wheelchair accessibility, child seats, and more for your comfort.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-[#1CA8CB] rounded-2xl p-8 md:p-16 shadow-xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 text-white">
              <h2 className="text-4xl font-bold mb-6 leading-tight">
                Contact Us
              </h2>
              <p className="mb-8 text-lg opacity-95 leading-relaxed">
                Reach out to us for bookings, travel queries, or custom plans. We're here to answer your questions and make your travel smooth, comfortable and hassle-free.
              </p>
              {/* Example React icon with no color styling */}
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <FaReact />
                <FaCar />
              </span>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📧</span>
                  <span className="text-lg">travel.inquiry@example.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📞</span>
                  <span className="text-lg">+91 98765 43210</span>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-3 bg-white rounded-xl p-8 md:p-10 shadow-2xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                Travel Inquiry
              </h3>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you shortly
              </p>

              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter phone number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Travel Date *
                    </label>
                    <input
                      type="date"
                      name="travelDate"
                      value={formData.travelDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Service Type *
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  >
                    <option value="">Select service type</option>
                    <option value="local">Local Trip</option>
                    <option value="outstation">Outstation Trip</option>
                    <option value="airport">Airport Transfer</option>
                    <option value="event">Event Transportation</option>
                    <option value="corporate">Corporate Travel</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your travel plans..."
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="bg-[#1CA8CB] text-white px-10 py-3.5 rounded-lg font-semibold hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="rounded-xl overflow-hidden shadow-xl h-96 md:h-[450px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.3334!2d75.8!3d22.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQyJzAwLjAiTiA3NcKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Location Map"
          ></iframe>
        </div>
      </div>
    </div>
    <Footer />  
     </>
  );
}