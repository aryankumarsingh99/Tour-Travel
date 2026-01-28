import React, { useState } from 'react';
import LoginModal from '../components/home/LoginModal';
import { Plane, Hotel, Car, Ship, Compass, Camera, Umbrella, Briefcase, Calendar, Shield, Clock, CreditCard, Users, MapPin, Phone, ArrowRight, CheckCircle, Star } from 'lucide-react';
import TopBar from '../components/home/TopBar';
import Navigation from '../components/home/Navigation';
import Footer from '../components/home/Footer';

export default function Services() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const mainServices = [
    {
      icon: Plane,
      title: 'Flight Booking',
      description: 'Book domestic and international flights with exclusive deals and flexible options.',
      features: ['Best Price Guarantee', 'Instant Confirmation', 'Multiple Airlines', '24/7 Support'],
      color: 'blue',
      price: 'From ₹3,999',
      popular: true
    },
    {
      icon: Hotel,
      title: 'Hotel Reservations',
      description: 'Find and book the perfect accommodation for your stay with verified reviews.',
      features: ['5000+ Hotels', 'Instant Booking', 'Free Cancellation', 'Best Rates'],
      color: 'purple',
      price: 'From ₹1,499',
      popular: true
    },
    {
      icon: Car,
      title: 'Car Rentals',
      description: 'Rent cars for your journey with flexible pickup and drop-off locations.',
      features: ['Wide Selection', 'Insurance Included', 'GPS Navigation', 'Fuel Options'],
      color: 'green',
      price: 'From ₹999/day',
      popular: false
    },
    {
      icon: Ship,
      title: 'Cruise Packages',
      description: 'Luxury cruise experiences with all-inclusive packages and entertainment.',
      features: ['Premium Cruises', 'All Meals Included', 'Entertainment', 'Shore Excursions'],
      color: 'cyan',
      price: 'From ₹25,000',
      popular: false
    },
    {
      icon: Compass,
      title: 'Guided Tours',
      description: 'Explore destinations with expert local guides and curated itineraries.',
      features: ['Expert Guides', 'Custom Routes', 'Group & Private', 'Skip-the-Line'],
      color: 'orange',
      price: 'From ₹5,000',
      popular: true
    },
    {
      icon: Camera,
      title: 'Photography Tours',
      description: 'Capture stunning moments with professional photography tour packages.',
      features: ['Pro Photographers', 'Best Locations', 'Photo Editing', 'Print Options'],
      color: 'pink',
      price: 'From ₹8,000',
      popular: false
    },
    {
      icon: Umbrella,
      title: 'Travel Insurance',
      description: 'Comprehensive travel insurance for peace of mind during your journey.',
      features: ['Medical Coverage', 'Trip Cancellation', 'Lost Baggage', 'Emergency Support'],
      color: 'red',
      price: 'From ₹299',
      popular: false
    },
    {
      icon: Briefcase,
      title: 'Corporate Travel',
      description: 'Tailored business travel solutions for companies and professionals.',
      features: ['Bulk Bookings', 'Priority Support', 'Expense Management', 'Reports'],
      color: 'indigo',
      price: 'Custom Quote',
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Secure Booking',
      description: '100% secure payment gateway with encryption'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock customer assistance'
    },
    {
      icon: CreditCard,
      title: 'Best Prices',
      description: 'Guaranteed lowest prices on bookings'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Professional travel consultants'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Mumbai',
      rating: 5,
      comment: 'Amazing service! Booked my entire Europe trip through SwiftRise. Everything was perfect!',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      service: 'Flight & Hotel'
    },
    {
      name: 'Rahul Verma',
      location: 'Delhi',
      rating: 5,
      comment: 'Best car rental experience. The process was smooth and the car was in excellent condition.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      service: 'Car Rental'
    },
    {
      name: 'Anita Patel',
      location: 'Bangalore',
      rating: 5,
      comment: 'The guided tour in Rajasthan was incredible! Our guide was knowledgeable and friendly.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      service: 'Guided Tour'
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
      <LoginModal loginModalOpen={loginModalOpen} setLoginModalOpen={setLoginModalOpen} isSignup={isSignup} setIsSignup={setIsSignup} />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="relative bg-cover bg-center text-white py-32 px-8" style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&h=600&fit=crop')"}}>
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6 bg-white/20 px-6 py-2 rounded-full backdrop-blur-sm">
              <Briefcase className="w-5 h-5" />
              <span className="text-sm font-medium">Our Services</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6">Travel Services Made Simple</h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto mb-8">
              From flights to accommodations, we handle everything so you can focus on creating memories.
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 -mt-12 md:-mt-16 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <Icon className="w-10 h-10 mx-auto mb-4 text-blue-600" />
                                    <style>{`.text-blue-600 { color: #1CA8CB !important; }`}</style>
                  <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-xs text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Main Services Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 mt-16 md:mt-24">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">What We Offer</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive travel solutions tailored to your needs. Choose from our wide range of services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer relative"
                  onClick={() => setSelectedService(service)}
                >
                  {service.popular && (
                    <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
                      Popular
                    </div>
                  )}
                  <div className={`bg-gradient-to-br from-${service.color}-500 to-${service.color}-600 p-8 text-white`}>
                    <Icon className="w-12 h-12 mb-4" />
                    <style>{`.from-blue-500, .to-blue-600, .from-cyan-500, .to-cyan-600, .from-green-500, .to-green-600, .from-orange-500, .to-orange-600, .from-purple-500, .to-purple-600, .from-pink-500, .to-pink-600, .from-red-500, .to-red-600, .from-indigo-500, .to-indigo-600 { background: #1CA8CB !important; }`}</style>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-sm text-white/90">{service.description}</p>
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      <div className="text-2xl font-bold text-gray-900 mb-4">{service.price}</div>
                      <div className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* <button className={`w-full bg-${service.color}-600 text-white py-3 rounded-xl font-semibold hover:bg-${service.color}-700 transition flex items-center justify-center gap-2 group-hover:gap-3`}>
                      Book Now <ArrowRight className="w-4 h-4" />
                      <style>{`.bg-blue-600, .hover\:bg-blue-700:hover, .bg-cyan-600, .hover\:bg-cyan-700:hover, .bg-green-600, .hover\:bg-green-700:hover, .bg-orange-600, .hover\:bg-orange-700:hover, .bg-purple-600, .hover\:bg-purple-700:hover, .bg-pink-600, .hover\:bg-pink-700:hover, .bg-red-600, .hover\:bg-red-700:hover, .bg-indigo-600, .hover\:bg-indigo-700:hover { background-color: #1CA8CB !important; }`}</style>
                    </button> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Process Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 mt-16 md:mt-24">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">How It Works</h2>
            <p className="text-base md:text-lg text-gray-600">Simple steps to book your perfect trip</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { step: '01', title: 'Choose Service', desc: 'Select from our range of travel services', icon: Compass },
              { step: '02', title: 'Customize', desc: 'Personalize your booking preferences', icon: Calendar },
              { step: '03', title: 'Confirm', desc: 'Review and confirm your booking', icon: CheckCircle },
              { step: '04', title: 'Enjoy', desc: 'Travel with confidence and peace of mind', icon: Star }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="relative">
                  <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition">
                    <div className="text-5xl font-bold text-blue-100 mb-4">{item.step}</div>
                    <Icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                    <style>{`.text-blue-600 { color: #1CA8CB !important; } .text-blue-100 { color: #E6F3EF !important; }`}</style>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                  {idx < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="w-8 h-8 text-blue-300" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Testimonials */}
        <div className="max-w-7xl mx-auto px-8 mt-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600">Real experiences from real travelers</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
                <div className="flex items-center gap-4 mb-6">
                  <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
                <div className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                  {testimonial.service}
                  <style>{`.bg-blue-100 { background-color: #E6F3EF !important; } .text-blue-600 { color: #1CA8CB !important; }`}</style>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-8 mt-24 mb-24">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-6" style={{ color: '#FFFFFF' }}>
              Book any service today and get 20% off on your first booking. Limited time offer!
            </p>
            <div className="flex flex-wrap gap-6 justify-center mb-8">
              <button
                className="bg-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition shadow-xl"
                style={{ color: '#1CA8CB', border: '2px solid #1CA8CB' }}
              >
                Book Now
              </button>
              <button
                className="border-2 px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition"
                style={{ color: '#FFFFFF', border: '2px solid #FFFFFF', background: 'transparent' }}
              >
                Contact Us
              </button>
            </div>
            <div className="flex flex-wrap gap-6 justify-center text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 1800-123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Available 24/7</span>
              </div>
            </div>
            <style>{`.bg-gradient-to-r.from-blue-600 { background: linear-gradient(90deg, #1CA8CB, #a78bfa, #ec4899) !important; }`}</style>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
