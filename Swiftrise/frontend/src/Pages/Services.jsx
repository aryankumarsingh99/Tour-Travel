import React, { useState } from 'react';
import LoginModal from '../components/home/LoginModal';
import {
  Plane,
  Hotel,
  Car,
  Ship,
  Compass,
  Camera,
  Umbrella,
  Briefcase,
  Calendar,
  Shield,
  Clock,
  CreditCard,
  Users,
  MapPin,
  Phone,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';
import TopBar from '../components/home/TopBar';
import Navigation from '../components/home/Navigation';
import Footer from '../components/home/Footer';

export default function Services() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const mainServices = [
    {
      icon: Plane,
      title: 'Flight Booking',
      description: 'Book domestic and international flights with exclusive deals.',
      features: ['Best Price Guarantee', 'Instant Confirmation', 'Multiple Airlines', '24/7 Support'],
      price: 'From ₹3,999',
      popular: true
    },
    {
      icon: Hotel,
      title: 'Hotel Reservations',
      description: 'Find and book the perfect accommodation with verified reviews.',
      features: ['5000+ Hotels', 'Free Cancellation', 'Instant Booking', 'Best Rates'],
      price: 'From ₹1,499',
      popular: true
    },
    {
      icon: Car,
      title: 'Car Rentals',
      description: 'Rent cars with flexible pickup and drop-off options.',
      features: ['Wide Selection', 'Insurance Included', 'GPS', 'Fuel Options'],
      price: 'From ₹999/day'
    },
    {
      icon: Ship,
      title: 'Cruise Packages',
      description: 'Luxury cruise experiences with all-inclusive packages.',
      features: ['Premium Cruises', 'Meals Included', 'Entertainment', 'Excursions'],
      price: 'From ₹25,000'
    },
    {
      icon: Compass,
      title: 'Guided Tours',
      description: 'Explore destinations with expert local guides.',
      features: ['Expert Guides', 'Custom Routes', 'Group & Private', 'Skip-the-Line'],
      price: 'From ₹5,000',
      popular: true
    },
    {
      icon: Camera,
      title: 'Photography Tours',
      description: 'Capture moments with professional photographers.',
      features: ['Pro Shoots', 'Best Locations', 'Editing', 'Prints'],
      price: 'From ₹8,000'
    },
    {
      icon: Umbrella,
      title: 'Travel Insurance',
      description: 'Comprehensive coverage for a worry-free journey.',
      features: ['Medical', 'Trip Cancellation', 'Lost Baggage', 'Emergency Support'],
      price: 'From ₹299'
    },
    {
      icon: Briefcase,
      title: 'Corporate Travel',
      description: 'Tailored business travel solutions.',
      features: ['Bulk Bookings', 'Priority Support', 'Expense Reports', 'Dedicated Manager'],
      price: 'Custom Quote'
    }
  ];

  const benefits = [
    { icon: Shield, title: 'Secure Booking', description: 'Encrypted & safe payments' },
    { icon: Clock, title: '24/7 Support', description: 'Anytime assistance' },
    { icon: CreditCard, title: 'Best Prices', description: 'Guaranteed savings' },
    { icon: Users, title: 'Expert Team', description: 'Professional consultants' }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Mumbai',
      rating: 5,
      comment: 'Booked my entire Europe trip through SwiftRise. Flawless experience!',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
    },
    {
      name: 'Rahul Verma',
      location: 'Delhi',
      rating: 5,
      comment: 'Best car rental experience. Smooth and reliable.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
    },
    {
      name: 'Anita Patel',
      location: 'Bangalore',
      rating: 5,
      comment: 'Guided tour was amazing. Highly recommend!',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
    }
  ];

  return (
    <>
      <TopBar />
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

        {/* HERO — MATCHES ABOUT */}
        <section className="relative w-full min-h-[340px] bg-gradient-to-r from-gray-700 to-gray-600">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-800 to-orange-400 opacity-30" />
          <div className="relative px-4 sm:px-8 lg:px-20 pt-24 max-w-xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-2">
              Our <span className="text-orange-400">Services</span>
            </h1>
            <h2 className="text-sm sm:text-base md:text-lg text-gray-200 mb-3">
              Travel made simple and seamless
            </h2>
            <p className="text-gray-100 text-sm md:text-base">
              From flights to curated experiences, we handle everything so you can travel stress-free.
            </p>
          </div>
        </section>

        {/* BENEFITS */}
        <div className="max-w-7xl mx-auto px-4 -mt-12 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <div key={i} className="bg-white rounded-xl shadow p-4 text-center">
                  <Icon className="w-6 h-6 mx-auto mb-2 text-[#1CA8CB]" />
                  <div className="font-semibold">{b.title}</div>
                  <div className="text-xs text-gray-600">{b.description}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* SERVICES GRID */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-24">
          <h2 className="text-4xl font-bold text-center mb-12">What We Offer</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mainServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <div key={i} className="bg-white rounded-xl shadow hover:shadow-lg transition">
                  <div className="p-6 border-b">
                    <Icon className="w-10 h-10 text-[#1CA8CB] mb-3" />
                    <h3 className="font-bold text-lg mb-1">{service.title}</h3>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </div>

                  <div className="p-6">
                    <div className="font-bold text-lg mb-3">{service.price}</div>
                    <div className="space-y-2">
                      {service.features.map((f, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* TESTIMONIALS */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-24">
          <h2 className="text-4xl font-bold text-center mb-12">What Our Customers Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-xl shadow p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.location}</div>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm italic">"{t.comment}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-7xl mx-auto px-4 mt-24 mb-24">
          <div className="bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-3">Ready to Book Your Trip?</h2>
            <p className="mb-5">Let SwiftRise take care of everything.</p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold">
              Contact Us
            </button>
          </div>
        </div>

      </div>

      <Footer />
    </>
  );
}