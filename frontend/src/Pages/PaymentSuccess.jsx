import { useNavigate } from 'react-router-dom';

function PaymentSuccess({ onHome }) {
  const navigate = useNavigate();

  const handleDownloadDetails = () => {
    // Create a simple text document with booking details
    const bookingDetails = `
BOOKING CONFIRMATION DETAILS
=============================

Booking ID: BK-2026-87456
Confirmation Date: 18 Jun 2026, 11:42 AM

TRIP DETAILS
============
Destination: Weekend Getaway to Lonavala
Location: Lonavala, Maharashtra
Date: 24 Aug 2026
Duration: 2 Days / 1 Night
Travelers: 4 Persons

ROUTE INFORMATION
=================
Primary Route: Mumbai → Lonavala
Distance: 120 km | Duration: 2.5 hours

Stoppages:
1. Khandala - 30 mins (Photography & refreshments)
2. Lonavala Market - 45 mins (Local shopping & snacks)

VEHICLE DETAILS
===============
Vehicle: SUV (Mahindra XUV 500)
Registration: MH 02 AB 1234
Model Year: 2023
Fuel Type: Diesel
Seating Capacity: 7 Passengers
Transmission: Automatic

DRIVER INFORMATION
==================
Driver Name: Vikram Patil
License: DL-MH-1234567890
Experience: 8 years
Rating: ⭐ 4.9/5
Contact: +91-9987654321

PAYMENT DETAILS
===============
Payment Method: UPI
Transaction ID: TXN87456321
Base Price: ₹9,500
Vehicle Charges: ₹1,500
Taxes & Fees: ₹300
Total Amount Paid: ₹11,300

PAYMENT STATUS: ✓ SUCCESSFUL

For any queries, please contact our support team.
Contact: support@swiftrise.com
Phone: 1-800-SWIFT-RISE
    `;

    // Create and download the file
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(bookingDetails));
    element.setAttribute('download', `Booking_Details_BK-2026-87456.txt`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 md:py-10">
      <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 md:space-y-10">

        {/* SUCCESS HEADER */}
        <div className="bg-white rounded-lg sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <div className="text-4xl sm:text-5xl md:text-6xl text-green-600 flex-shrink-0">🎟️</div>
          <div className="text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
              Booking Confirmed!
            </h1>
            <p className="text-sm sm:text-base text-gray-600 mt-1">
              Your payment was successful and your trip has been booked.
            </p>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">
              Booking ID: <b className="text-gray-700">BK-2026-87456</b>
            </p>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">

          {/* LEFT — ORDER DETAILS */}
          <div className="lg:col-span-2 bg-white rounded-lg sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8">

            {/* TRIP DETAILS */}
            <div>
              <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">🧭 Trip Details</h2>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <img
                  src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                  alt=""
                  className="w-full sm:w-48 md:w-64 h-32 sm:h-40 rounded-lg sm:rounded-xl object-cover"
                />

                <div className="space-y-2 text-sm sm:text-base">
                  <h3 className="text-base sm:text-lg font-semibold">
                    Weekend Getaway to Lonavala
                  </h3>
                  <p className="text-gray-600">📍 Lonavala, Maharashtra</p>

                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600">
                    <span>🗓 24 Aug 2026</span>
                    <span>⏱ 2 Days / 1 Night</span>
                    <span>👥 4 Travellers</span>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 mt-2">
                    Scenic mountain routes, comfortable cab travel,
                    curated sightseeing experience.
                  </p>
                </div>
              </div>
            </div>

            {/* ROUTE & STOPS */}
            <div>
              <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                🗺️ Route & Stoppages
              </h2>

              <div className="space-y-2 sm:space-y-3">
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 sm:p-4 text-sm sm:text-base">
                  <p className="font-semibold">
                    Mumbai → Lonavala
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Distance: 120 km • Duration: 2.5 hours
                  </p>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 sm:p-4 text-sm sm:text-base">
                  <p className="font-semibold">📍 Khandala</p>
                  <p className="text-xs sm:text-sm text-gray-600">
                    30 min stop • Photography & refreshments
                  </p>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 sm:p-4 text-sm sm:text-base">
                  <p className="font-semibold">📍 Lonavala Market</p>
                  <p className="text-xs sm:text-sm text-gray-600">
                    45 min stop • Local shopping & snacks
                  </p>
                </div>
              </div>
            </div>

            {/* VEHICLE & DRIVER */}
            <div>
              <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                🚗 Vehicle & Driver
              </h2>

              <div className="bg-blue-50 border border-blue-200 rounded-lg sm:rounded-xl p-3 sm:p-5 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                <p><b>Vehicle:</b> SUV (Mahindra XUV 500)</p>
                <p><b>Registration:</b> MH 02 AB 1234</p>
                <p><b>Driver:</b> Vikram Patil</p>
                <p><b>Driver Rating:</b> ⭐ 4.9 / 5</p>
                <p><b>Contact:</b> +91 98765 43890</p>
              </div>
            </div>
          </div>

          {/* RIGHT — PAYMENT SUMMARY */}
          <div className="bg-white rounded-lg sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6">

            <h2 className="text-lg sm:text-xl font-semibold">
              💳 Payment Summary
            </h2>

            <div className="bg-orange-50 border border-orange-200 rounded-lg sm:rounded-xl p-4 sm:p-5 space-y-2 sm:space-y-3 text-xs sm:text-sm md:text-base">
              <div className="flex justify-between">
                <span>Base Price</span>
                <span>₹9,500</span>
              </div>
              <div className="flex justify-between">
                <span>Vehicle Charges</span>
                <span>₹1,500</span>
              </div>
              <div className="flex justify-between">
                <span>Taxes & Fees</span>
                <span>₹300</span>
              </div>
              <hr />
              <div className="flex justify-between font-bold text-sm sm:text-base md:text-lg">
                <span>Total Paid</span>
                <span className="text-green-600">₹11,300</span>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-3 sm:p-4 text-xs sm:text-sm">
              <p><b>Payment Method:</b> UPI</p>
              <p><b>Transaction ID:</b> TXN87456321</p>
              <p><b>Payment Time:</b> 18 Jun 2026, 11:42 AM</p>
              <p className="text-green-700 font-semibold mt-1">
                ✓ Payment Successful
              </p>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <button
                onClick={handleDownloadDetails}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold shadow-lg transition text-xs sm:text-sm md:text-base"
              >
                📥 Download Details
              </button>

              <button
                onClick={handleGoHome}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold shadow-lg transition text-xs sm:text-sm md:text-base"
              >
                🏠 Go to Home
              </button>
            </div>

            <p className="text-xs text-center text-gray-500">
              📧 A confirmation email has been sent to you
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentSuccess;
