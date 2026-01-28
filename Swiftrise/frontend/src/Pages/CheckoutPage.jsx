import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import TopBar from '../components/home/TopBar';
import Navigation from '../components/home/Navigation';
import Footer from '../components/home/Footer';
import LoadingScreen from '../components/LoadingScreen';
import LoginModal from '../components/home/LoginModal';
import PaymentSuccess from './PaymentSuccess';
import PaymentLoading from './PaymentLoading';

function CheckoutPage({ onPay }) {
  const [activeTab, setActiveTab] = useState('trip');
  const [isPaymentLoading, setIsPaymentLoading] = useState(false);
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const handlePayment = () => {
    setIsPaymentLoading(true);
    // Simulate payment processing for 3 seconds
    setTimeout(() => {
      navigate('/payment-success');
      setIsPaymentLoading(false);
    }, 3000);
  };

  return (
    <>
      {isPaymentLoading && <PaymentLoading />}
      
      <TopBar />
      <Navigation 
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        setLoginModalOpen={setLoginModalOpen}
      />
      <LoginModal loginModalOpen={loginModalOpen} setLoginModalOpen={setLoginModalOpen} isSignup={isSignup} setIsSignup={setIsSignup} />

      <div className="min-h-screen bg-gray-50 px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">

        {/* LEFT — REVIEW TRIP */}
        <div className="lg:col-span-2 bg-white rounded-lg sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6">
            Review Your Trip
          </h2>

          {/* TABS */}
          <div className="flex gap-2 sm:gap-4 mb-4 sm:mb-6 border-b border-gray-200 overflow-x-auto">
            <button
              onClick={() => setActiveTab('trip')}
              className={`pb-2 sm:pb-3 px-2 sm:px-4 font-semibold text-sm sm:text-base md:text-lg whitespace-nowrap transition ${
                activeTab === 'trip'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              📍 Trip Details
            </button>
            <button
              onClick={() => setActiveTab('car')}
              className={`pb-2 sm:pb-3 px-2 sm:px-4 font-semibold text-sm sm:text-base md:text-lg whitespace-nowrap transition ${
                activeTab === 'car'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              🚗 Car Details
            </button>
          </div>

          {/* TAB CONTENT — TRIP DETAILS */}
          {activeTab === 'trip' && (
            <div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-4 sm:mb-6">
                <img
                  src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                  className="w-full sm:w-48 md:w-56 lg:w-72 h-32 sm:h-40 md:h-44 rounded-lg sm:rounded-xl object-cover"
                  alt=""
                />

                <div className="space-y-2 text-sm sm:text-base">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold">
                    Weekend Getaway to Lonavala
                  </h3>

                  <p className="text-gray-500">📍 Lonavala, Maharashtra</p>

                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600 mt-2">
                    <span>🗓 2 Days / 1 Night</span>
                    <span>🚗 SUV Cab</span>
                    <span>👥 4 Travellers</span>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 mt-3 max-w-xl">
                    Scenic mountain routes, comfortable cab travel,
                    and curated sightseeing experience.
                  </p>
                </div>
              </div>

              {/* TRIP PACKAGE DETAILS */}
              <div className="mt-4 sm:mt-6 bg-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm mb-4 sm:mb-6">
                <p><b>📅 Date:</b> 24 Aug 2026</p>
                <p><b>📍 Pickup Location:</b> Mumbai</p>
                <p><b>⏱️ Duration:</b> 2 Days / 1 Night</p>
                <p><b>📏 Distance:</b> 120 km</p>
              </div>

              {/* TRAVEL DISTANCE & STOPPAGES */}
              <div className="mt-4 sm:mt-6">
                <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">🛣️ Travel Route & Stoppages</h3>
                <div className="space-y-2 sm:space-y-3">
                  <div className="bg-green-50 rounded-lg p-3 sm:p-4 border border-green-200 text-sm sm:text-base">
                    <p className="font-semibold text-gray-800">Mumbai to Lonavala</p>
                    <p className="text-xs sm:text-sm text-gray-600">Distance: 100 km | Duration: 2.5 hours</p>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-3 sm:p-4 border border-yellow-200 text-sm sm:text-base">
                    <p className="font-semibold text-gray-800">🛑 Stoppage 1: Khandala</p>
                    <p className="text-xs sm:text-sm text-gray-600">Stop for 30 mins | Photography point & refreshments</p>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-3 sm:p-4 border border-yellow-200 text-sm sm:text-base">
                    <p className="font-semibold text-gray-800">🛑 Stoppage 2: Lonavala Market</p>
                    <p className="text-xs sm:text-sm text-gray-600">Stop for 45 mins | Local shopping & street food</p>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-3 sm:p-4 border border-orange-200 text-sm sm:text-base">
                    <p className="font-semibold text-gray-800">🏨 Final Destination: Lonavala Resort</p>
                    <p className="text-xs sm:text-sm text-gray-600">Total Distance: 120 km | Arrival time: 5:30 PM</p>
                  </div>
                </div>
              </div>

              {/* TRAVELLERS DETAILS */}
              <div className="mt-4 sm:mt-6">
                <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">👥 Travellers Details</h3>
                <div className="space-y-2 sm:space-y-3">
                  <div className="bg-blue-50 rounded-lg p-3 sm:p-4 border border-blue-200 text-sm sm:text-base">
                    <p className="font-semibold text-gray-800">👤 Ayush Kumar</p>
                    <p className="text-xs sm:text-sm text-gray-600">Primary Traveller • Phone: +91-9876543210 • Email: ayush@email.com</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3 sm:p-4 border border-blue-200 text-sm sm:text-base">
                    <p className="font-semibold text-gray-800">👤 Priya Sharma</p>
                    <p className="text-xs sm:text-sm text-gray-600">Co-Traveller • Phone: +91-9876543211 • Email: priya@email.com</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3 sm:p-4 border border-blue-200 text-sm sm:text-base">
                    <p className="font-semibold text-gray-800">👤 Rahul Singh</p>
                    <p className="text-xs sm:text-sm text-gray-600">Co-Traveller • Phone: +91-9876543212 • Email: rahul@email.com</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3 sm:p-4 border border-blue-200 text-sm sm:text-base">
                    <p className="font-semibold text-gray-800">👤 Neha Patel</p>
                    <p className="text-xs sm:text-sm text-gray-600">Co-Traveller • Phone: +91-9876543213 • Email: neha@email.com</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB CONTENT — CAR DETAILS */}
          {activeTab === 'car' && (
            <div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-4 sm:mb-6">
                <img
                  src="https://images.unsplash.com/photo-1494976866557-2f3f3871dae8"
                  className="w-full sm:w-48 md:w-56 lg:w-72 h-32 sm:h-40 md:h-44 rounded-lg sm:rounded-xl object-cover"
                  alt=""
                />

                <div className="space-y-2 text-sm sm:text-base">
                  <h3 className="text-lg sm:text-2xl font-semibold">
                    Mahindra XUV 500
                  </h3>

                  <p className="text-gray-500">Premium SUV with Full AC</p>

                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600 mt-2">
                    <span>⭐ 4.8/5 Rating</span>
                    <span>🔧 Well Maintained</span>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 mt-3 max-w-xl">
                    Spacious, comfortable, and fuel-efficient SUV perfect for long journeys.
                  </p>
                </div>
              </div>

              {/* CAR SPECIFICATIONS */}
              <div className="mt-4 sm:mt-6 bg-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 text-xs sm:text-sm">
                <div>
                  <p className="text-gray-600"><b>Registration Number:</b></p>
                  <p className="text-base sm:text-lg font-semibold">MH 02 AB 1234</p>
                </div>
                <div>
                  <p className="text-gray-600"><b>Model Year:</b></p>
                  <p className="text-base sm:text-lg font-semibold">2023</p>
                </div>
                <div>
                  <p className="text-gray-600"><b>Fuel Type:</b></p>
                  <p className="text-base sm:text-lg font-semibold">Diesel</p>
                </div>
                <div>
                  <p className="text-gray-600"><b>Mileage:</b></p>
                  <p className="text-base sm:text-lg font-semibold">15.5 km/l</p>
                </div>
                <div>
                  <p className="text-gray-600"><b>Seating Capacity:</b></p>
                  <p className="text-base sm:text-lg font-semibold">7 Passengers</p>
                </div>
                <div>
                  <p className="text-gray-600"><b>Transmission:</b></p>
                  <p className="text-base sm:text-lg font-semibold">Automatic</p>
                </div>
              </div>

              {/* CAR AMENITIES */}
              <div className="mt-4 sm:mt-6">
                <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">🎉 Car Amenities</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  <div className="bg-purple-50 rounded-lg p-2 sm:p-3 text-xs sm:text-sm border border-purple-200">
                    ❄️ Full AC & Climate Control
                  </div>
                  <div className="bg-purple-50 rounded-lg p-2 sm:p-3 text-xs sm:text-sm border border-purple-200">
                    🎵 Premium Sound System
                  </div>
                  <div className="bg-purple-50 rounded-lg p-2 sm:p-3 text-xs sm:text-sm border border-purple-200">
                    📡 GPS Navigation
                  </div>
                  <div className="bg-purple-50 rounded-lg p-2 sm:p-3 text-xs sm:text-sm border border-purple-200">
                    🪑 Leather Seats
                  </div>
                  <div className="bg-purple-50 rounded-lg p-2 sm:p-3 text-xs sm:text-sm border border-purple-200">
                    🔌 USB Charging Ports
                  </div>
                  <div className="bg-purple-50 rounded-lg p-2 sm:p-3 text-xs sm:text-sm border border-purple-200">
                    🛡️ Air Bags & Safety Features
                  </div>
                </div>
              </div>

              {/* DRIVER DETAILS */}
              <div className="mt-4 sm:mt-6">
                <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">🧑‍✈️ Driver Information</h3>
                <div className="bg-indigo-50 rounded-lg p-3 sm:p-4 border border-indigo-200 text-sm sm:text-base">
                  <p className="font-semibold text-gray-800">👤 Vikram Patil</p>
                  <p className="text-xs sm:text-sm text-gray-600">Experience: 8 years • License: DL-MH-1234567890</p>
                  <p className="text-xs sm:text-sm text-gray-600">Phone: +91-9987654321 • Rating: ⭐ 4.9/5</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* RIGHT — PAYMENT */}
        <div className="bg-white rounded-lg sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8">
          <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
            Confirm & Pay
          </h2>

          <div className="bg-orange-50 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-4 sm:mb-6 text-xs sm:text-sm space-y-1 sm:space-y-2">
            <div className="flex justify-between">
              <span>Base Price</span>
              <span>₹9,500</span>
            </div>
            <div className="flex justify-between">
              <span>Vehicle Charges</span>
              <span>₹1,500</span>
            </div>
            <div className="flex justify-between">
              <span>Taxes</span>
              <span>₹300</span>
            </div>
            <hr />
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>₹11,300</span>
            </div>
          </div>

          {/* PAYMENT MODES */}
          <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
            <label className="flex items-center gap-2 sm:gap-3 border rounded-lg p-2 sm:p-3 cursor-pointer hover:bg-gray-50 transition">
              <input type="radio" name="pay" defaultChecked className="w-4 h-4" />
              UPI (GPay / PhonePe / Paytm)
            </label>

            <label className="flex items-center gap-2 sm:gap-3 border rounded-lg p-2 sm:p-3 cursor-pointer hover:bg-gray-50 transition">
              <input type="radio" name="pay" className="w-4 h-4" />
              Credit / Debit Card
            </label>

            <label className="flex items-center gap-2 sm:gap-3 border rounded-lg p-2 sm:p-3 cursor-pointer hover:bg-gray-50 transition">
              <input type="radio" name="pay" className="w-4 h-4" />
              Net Banking
            </label>

            <label className="flex items-center gap-2 sm:gap-3 border rounded-lg p-2 sm:p-3 cursor-pointer hover:bg-gray-50 transition">
              <input type="radio" name="pay" className="w-4 h-4" />
              Wallets
            </label>
          </div>

          <div className="mt-4 sm:mt-6">
            <button
              onClick={handlePayment}
              disabled={isPaymentLoading}
              className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold shadow-lg transition text-sm sm:text-base"
            >
              {isPaymentLoading ? 'Processing...' : 'Pay ₹11,300 Securely'}
            </button>

            <p className="text-xs text-center text-gray-500 mt-2 sm:mt-3">
              🔒 Secure payment • Transparent pricing
            </p>
          </div>
        </div>
      </div>

      </div>

      <Footer />
    </>
  );
}

export default CheckoutPage;
