import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Navigation from '../components/home/Navigation';
import Footer from '../components/home/Footer';
import LoadingScreen from '../components/LoadingScreen';
import LoginModal from '../components/home/LoginModal';
import { Shield, MapPin, Bluetooth, Zap, Wind, Baby, Luggage, Key, Star, Compass, Wifi, HelpCircle, HeartHandshake, PawPrint, LifeBuoy } from 'lucide-react';

export default function CarDetails() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [loading, setLoading] = useState(true);
  
  // Loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // Show loading for 2.5 seconds
    
    return () => clearTimeout(timer);
  }, []);
  
  // Car images carousel
  const carImages = [
    "https://www.indiacarnews.com/wp-content/uploads/2025/11/1.webp", // White SUV exterior
    "https://stimg.cardekho.com/images/expert-review/tata-sierra/1764237800079/original/Tata-Sierra-0.jpg?tr=w-320?tr=w-270", // White interior with light seats - dashboard view
        "https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/193017/sierra-interior-bootspace-rear-split-seat-folded-2.jpeg?isig=0&q=80", // SUV steering and console
    "https://auto.hindustantimes.com/cms-images/tata_sierra/images/interior_tata-sierra_front-seats-passenger-view_930x620.jpg", // SUV interior dashboard
      "https://cdn.cartoq.com/photos/small_tata_sierra_rear_door_and_boot_5b9aeec39e.jpg", // SUV interior dashboard
 
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === carImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change image every 2 seconds
    
    return () => clearInterval(interval);
  }, [carImages.length]);
  
  // Trip form state
  const [pickUpLocation, setPickUpLocation] = useState("Bhubaneswar");
  const [dropOffLocation, setDropOffLocation] = useState("Puri");
  const [pickUpDate, setPickUpDate] = useState("2026-07-25");
  const [dropOffDate, setDropOffDate] = useState("2026-07-26");
  const [pickUpTime, setPickUpTime] = useState("21:00");
  const [dropOffTime, setDropOffTime] = useState("05:00");
  const [numberOfPersons, setNumberOfPersons] = useState("4");
  const [carSeats, setCarSeats] = useState("5");

  // Fixed price values
  const rentPerDay = 2000;
  const discount = 500;

  // Calculate number of days
  const calculateDays = () => {
    if (pickUpDate && dropOffDate) {
      const startDate = new Date(pickUpDate);
      const endDate = new Date(dropOffDate);
      const diffTime = Math.abs(endDate - startDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays || 1;
    }
    return 1;
  };

  // Calculate total amount
  const calculateTotal = () => {
    const days = calculateDays();
    const total = (rentPerDay * days) - discount;
    return total;
  };

  return (
    <> 
    {loading && <LoadingScreen />}
    
    
    <Navigation 
      mobileMenuOpen={mobileMenuOpen}
      setMobileMenuOpen={setMobileMenuOpen}
      setLoginModalOpen={setLoginModalOpen}
    />
    <LoginModal loginModalOpen={loginModalOpen} setLoginModalOpen={setLoginModalOpen} isSignup={isSignup} setIsSignup={setIsSignup} />
    
    <div className="px-4 sm:px-5 md:px-6 lg:px-8 xl:px-16 py-6 md:py-8">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 md:mb-8 gap-3 md:gap-4">
          <h1 className="text-xs md:text-xl lg:text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">XYZ CARS</h1>

          <div className="flex bg-gradient-to-r from-[#E6F3EF] to-[#D9F0E8] rounded-full p-1.5 md:p-2 gap-1.5 md:gap-2 flex-wrap justify-center shadow-lg border border-cyan-200">
            {["Sedan", "SUV", "MINI", "Other"].map((item) => (
              <button
                key={item}
                className="px-3 md:px-5 lg:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 hover:scale-110 active:scale-95 text-white shadow-lg hover:shadow-xl"
                style={{ backgroundColor: '#3F00FF' }}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="hidden md:flex gap-3 lg:gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="w-8 md:w-9 lg:w-10 h-8 md:h-9 lg:h-10 rounded-full border-2 border-gray-300 bg-gradient-to-br from-white to-blue-50 hover:border-blue-400 hover:scale-110 transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg"
              />
            ))}
          </div>
        </div>

        {/* TITLE */}
        <div className="flex items-center gap-2 md:gap-3 lg:gap-4 mb-6 md:mb-8 group">
          <div className="w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 rounded-full border-2 border-blue-300 bg-gradient-to-br from-blue-100 to-cyan-100 hover:border-blue-500 transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg" />
          <h2 className="text-sm md:text-xl lg:text-2xl font-semibold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300">Tata Sierra</h2>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 lg:gap-10">

          {/* LEFT CARD */}
          <div className="lg:col-span-2 bg-white rounded-2xl lg:rounded-[26px] p-5 md:p-6 lg:p-8 shadow-lg lg:shadow-xl hover:shadow-lg lg:hover:shadow-2xl transition-all duration-300 border border-gray-100">

            {/* META */}
            <div className="flex gap-3 md:gap-6 lg:gap-10 text-xs md:text-sm font-medium mb-4 md:mb-5 lg:mb-6 flex-wrap">
              <div className="flex items-center gap-1 px-2 md:px-3 py-1 rounded-full hover:shadow-md transition-all duration-300 hover:scale-105">
                <Star className="w-3.5 md:w-4 h-3.5 md:h-4" /> 4.9
              </div>
              <div className="flex items-center gap-1 px-2 md:px-3 py-1 rounded-full hover:shadow-md transition-all duration-300 hover:scale-105">
                <MapPin className="w-4 h-4" /> 400 miles
              </div>
              <div className="flex items-center gap-1 px-2 md:px-3 py-1 rounded-full hover:shadow-md transition-all duration-300 hover:scale-105">
                <Compass className="w-4 h-4" /> 60 trips
              </div>
            </div>

            {/* IMAGE */}
            <div className="overflow-hidden rounded-xl md:rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center mb-5 md:mb-6 lg:mb-8 relative h-[280px] md:h-[350px] lg:h-[450px]">
              {carImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Tata Sierra ${index + 1}`}
                  className={`absolute w-full h-full object-cover transition-all duration-1000 ease-in-out transform ${
                    index === currentImageIndex
                      ? 'opacity-100 scale-100 translate-x-0'
                      : index < currentImageIndex
                      ? 'opacity-0 scale-95 -translate-x-full'
                      : 'opacity-0 scale-95 translate-x-full'
                  }`}
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=1200&h=700&fit=crop';
                  }}
                />
              ))}
              
              {/* Navigation Arrows */}
              <button
                onClick={() => setCurrentImageIndex((prev) => prev === 0 ? carImages.length - 1 : prev - 1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => setCurrentImageIndex((prev) => prev === carImages.length - 1 ? 0 : prev + 1)}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* Image indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                {carImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-2 rounded-full transition-all duration-500 backdrop-blur-sm ${
                      index === currentImageIndex 
                        ? 'bg-white w-8 shadow-lg scale-110' 
                        : 'bg-white/50 hover:bg-white/75 w-2 hover:w-4'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* CAR RENTAL FEATURES */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs md:text-sm">
              <div className="p-3 rounded-xl hover:shadow-md transition-all duration-300 hover:scale-105 flex items-center gap-2">
                <Shield className="w-4 md:w-5 h-4 md:h-5" />
                <div>
                  <p className="font-semibold text-gray-800">Insurance</p>
                  <p className="text-gray-500 text-xs md:text-xs">Included</p>
                </div>
              </div>
              <div className="p-3 rounded-xl hover:shadow-md transition-all duration-300 hover:scale-105 flex items-center gap-2">
                <MapPin className="w-4 md:w-5 h-4 md:h-5" />
                <div>
                  <p className="font-semibold text-gray-800">GPS</p>
                  <p className="text-gray-500 text-xs md:text-xs">Navigation</p>
                </div>
              </div>
              <div className="p-3 rounded-xl hover:shadow-md transition-all duration-300 hover:scale-105 flex items-center gap-2">
                <Bluetooth className="w-4 md:w-5 h-4 md:h-5" />
                <div>
                  <p className="font-semibold text-gray-800">Bluetooth</p>
                  <p className="text-gray-500 text-xs md:text-xs">Connectivity</p>
                </div>
              </div>
              <div className="p-3 rounded-xl hover:shadow-md transition-all duration-300 hover:scale-105 flex items-center gap-2">
                <Zap className="w-4 md:w-5 h-4 md:h-5" />
                <div>
                  <p className="font-semibold text-gray-800">USB Port</p>
                  <p className="text-gray-500 text-xs md:text-xs">Charging</p>
                </div>
              </div>
              <div className="p-3 rounded-xl hover:shadow-md transition-all duration-300 hover:scale-105 flex items-center gap-2">
                <Wind className="w-4 md:w-5 h-4 md:h-5" />
                <div>
                  <p className="font-semibold text-gray-800">AC</p>
                  <p className="text-gray-500 text-xs md:text-xs">Climate Control</p>
                </div>
              </div>
              <div className="p-3 rounded-xl hover:shadow-md transition-all duration-300 hover:scale-105 flex items-center gap-2">
                <Baby className="w-4 md:w-5 h-4 md:h-5" />
                <div>
                  <p className="font-semibold text-gray-800">Child Seat</p>
                  <p className="text-gray-500 text-xs md:text-xs">Available</p>
                </div>
              </div>
              <div className="p-3 rounded-xl hover:shadow-md transition-all duration-300 hover:scale-105 flex items-center gap-2">
                <Luggage className="w-4 md:w-5 h-4 md:h-5" />
                <div>
                  <p className="font-semibold text-gray-800">Luggage</p>
                  <p className="text-gray-500 text-xs md:text-xs">Large Space</p>
                </div>
              </div>
              <div className="p-3 rounded-xl hover:shadow-md transition-all duration-300 hover:scale-105 flex items-center gap-2">
                <Key className="w-4 md:w-5 h-4 md:h-5" />
                <div>
                  <p className="font-semibold text-gray-800">Keyless</p>
                  <p className="text-gray-500 text-xs md:text-xs">Entry</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="flex flex-col gap-6 md:gap-8">

            {/* TRIP DETAILS */}
            <div className="bg-white rounded-[26px] p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <h3 className="font-semibold mb-4 md:mb-6 text-xs md:text-base bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Your trip</h3>

              <div className="grid grid-cols-2 gap-y-4 md:gap-y-6 gap-x-4 md:gap-x-6 text-xs md:text-sm">
                <div>
                  <p className="font-medium mb-2">Pick Up Location</p>
                  <input
                    type="text"
                    value={pickUpLocation}
                    onChange={(e) => setPickUpLocation(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs md:text-sm text-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <p className="font-medium mb-2">Drop Off Location</p>
                  <input
                    type="text"
                    value={dropOffLocation}
                    onChange={(e) => setDropOffLocation(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs md:text-sm text-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <p className="font-medium mb-2">Pick Up Date</p>
                  <input
                    type="date"
                    value={pickUpDate}
                    onChange={(e) => setPickUpDate(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs md:text-sm text-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <p className="font-medium mb-2">Drop Off Date</p>
                  <input
                    type="date"
                    value={dropOffDate}
                    onChange={(e) => setDropOffDate(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs md:text-sm text-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <p className="font-medium mb-2">Pick Up Time</p>
                  <input
                    type="time"
                    value={pickUpTime}
                    onChange={(e) => setPickUpTime(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs md:text-sm text-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <p className="font-medium mb-2">Drop Off Time</p>
                  <input
                    type="time"
                    value={dropOffTime}
                    onChange={(e) => setDropOffTime(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs md:text-sm text-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <p className="font-medium mb-2">Number of Persons</p>
                  <input
                    type="number"
                    value={numberOfPersons}
                    onChange={(e) => setNumberOfPersons(e.target.value)}
                    min="1"
                    max="20"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs md:text-sm text-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <p className="font-medium mb-2">Seat of Car</p>
                  <input
                    type="number"
                    value={carSeats}
                    onChange={(e) => setCarSeats(e.target.value)}
                    min="2"
                    max="20"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs md:text-sm text-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>
            </div>

            {/* PRICE DETAILS */}
            <div className="bg-white rounded-[26px] p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <h3 className="font-semibold mb-4 md:mb-6 text-xs md:text-base bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Price Details</h3>

              <div className="space-y-3 md:space-y-4 text-xs md:text-sm">
                <div className="flex justify-between hover:bg-blue-50 p-2 rounded-lg transition-all duration-300">
                  <span>Total Rent x {calculateDays()} Day{calculateDays() > 1 ? 's' : ''}</span>
                  <span className="font-semibold">Rs.{rentPerDay * calculateDays()}</span>
                </div>
                <div className="flex justify-between hover:bg-green-50 p-2 rounded-lg transition-all duration-300">
                  <span>Discount</span>
                  <span className="font-semibold text-green-600">Rs.{discount}</span>
                </div>
                <div className="flex justify-between font-semibold pt-2 border-t-2 border-gray-200 p-2 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg">
                  <span className="text-gray-800">Total Amount</span>
                  <span className="text-blue-600">Rs.{calculateTotal()}</span>
                </div>
              </div>

              <button 
  onClick={() => navigate('/checkout')}
  className="mt-6 md:mt-8 w-full bg-gradient-to-r from-[#3F00FF] to-[#1CA8CB] py-2.5 md:py-3 rounded-full font-semibold text-xs md:text-base hover:from-green-400 hover:to-cyan-400 transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 text-white">
  BOOK NOW
</button>
            </div>

          </div>
        </div>

        {/* FEATURES */}
        <div className="mt-8 md:mt-12 bg-gray-50 border-l-4 border-blue-700 rounded-xl p-6 md:p-10">
          <h3 className="font-semibold mb-4 md:mb-6 text-xs md:text-base text-gray-900">
            Vehicle Features
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 text-xs md:text-sm">
            <div>
              <p className="font-medium mb-2 md:mb-3 text-gray-800">Safety</p>
              <ul className="space-y-1 md:space-y-2 text-gray-600">
                <li>Air Bags</li>
                <li>Back Up Camera</li>
                <li>Blind Spot Warnings</li>
              </ul>
            </div>

            <div>
              <p className="font-medium mb-3 text-gray-800">Device Connectivity</p>
              <ul className="space-y-2 text-gray-600">
                <li>AUX Input</li>
                <li>Bluetooth</li>
                <li>Device Charging</li>
                <li><Wifi className="inline w-3.5 md:w-4 h-3.5 md:h-4 mr-1" /> WiFi Hotspot</li>
              </ul>
            </div>

            <div>
              <p className="font-medium mb-3 text-gray-800">Convenience</p>
              <ul className="space-y-2 text-gray-600">
                <li>Seat Ventilation</li>
                <li>Temperature Control</li>
                <li>Cushioned Seats</li>
                <li>Pet Friendly <PawPrint className="inline w-3.5 md:w-4 h-3.5 md:h-4 ml-1" /></li>
              </ul>
            </div>

            <div>
              <p className="font-medium mb-3 text-gray-800">Add-ons</p>
              <ul className="space-y-2 text-gray-600">
                <li><LifeBuoy className="inline w-3.5 md:w-4 h-3.5 md:h-4 mr-1" /> Roadside Assistance</li>
                <li><HeartHandshake className="inline w-3.5 md:w-4 h-3.5 md:h-4 mr-1" /> 24/7 Support</li>
              </ul>
            </div>
          </div>
        </div>

        

        {/* CUSTOMER REVIEWS */}
        <div className="mt-12">
          <h3 className="font-semibold mb-4 md:mb-6 text-xs md:text-base">Customer Reviews</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center gap-2 mb-2 text-xs md:text-sm"><Star className="w-3.5 md:w-4 h-3.5 md:h-4 text-yellow-400" /> 5.0</div>
              <p className="text-gray-700 mb-2 text-xs md:text-sm">"Amazing ride! The car was super clean and comfortable. Highly recommend."</p>
              <span className="text-xs md:text-xs text-gray-500">- Priya S.</span>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center gap-2 mb-2 text-xs md:text-sm"><Star className="w-3.5 md:w-4 h-3.5 md:h-4 text-yellow-400" /> 4.8</div>
              <p className="text-gray-700 mb-2 text-xs md:text-sm">"Bluetooth and WiFi made our trip so much easier. Great service!"</p>
              <span className="text-xs md:text-xs text-gray-500">- Rahul V.</span>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center gap-2 mb-2 text-xs md:text-sm"><Star className="w-3.5 md:w-4 h-3.5 md:h-4 text-yellow-400" /> 4.9</div>
              <p className="text-gray-700 mb-2 text-xs md:text-sm">"Roadside assistance was prompt and helpful. Will book again!"</p>
              <span className="text-xs md:text-xs text-gray-500">- Anita P.</span>
            </div>
          </div>
        </div>

        {/* FAQ SECTION */}
        <div className="mt-12">
          <h3 className="font-semibold mb-4 md:mb-6 text-xs md:text-base">Frequently Asked Questions</h3>
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-4 shadow">
              <div className="flex items-center gap-2 mb-2 text-xs md:text-sm"><HelpCircle className="w-3.5 md:w-4 h-3.5 md:h-4 text-blue-400" /> <span className="font-medium">Is fuel included in the rental price?</span></div>
              <p className="text-gray-600 text-xs md:text-xs">No, fuel charges are extra and based on usage.</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow">
              <div className="flex items-center gap-2 mb-2 text-xs md:text-sm"><HelpCircle className="w-3.5 md:w-4 h-3.5 md:h-4 text-blue-400" /> <span className="font-medium">Can I bring my pet?</span></div>
              <p className="text-gray-600 text-xs md:text-xs">Yes, our cars are pet-friendly. Please mention while booking.</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow">
              <div className="flex items-center gap-2 mb-2 text-xs md:text-sm"><HelpCircle className="w-3.5 md:w-4 h-3.5 md:h-4 text-blue-400" /> <span className="font-medium">What if I need help during my trip?</span></div>
              <p className="text-gray-600 text-xs md:text-xs">We offer 24/7 roadside assistance and customer support.</p>
            </div>
          </div>
        </div>

    </div>
    <Footer />
    </>
  );
}
