import React, { useState } from 'react';
import { Users, Target, Award, Heart, Shield, Zap, Globe, TrendingUp, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, CheckCircle, Star } from 'lucide-react';
import TopBar from '../components/home/TopBar';
import Navigation from '../components/home/Navigation';
import Footer from '../components/home/Footer';
import LoginModal from '../components/home/LoginModal';

function About() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const stats = [
    { icon: Users, label: 'Happy Customers', value: '50,000+', color: 'blue' },
    { icon: Globe, label: 'Destinations', value: '500+', color: 'green' },
    { icon: Award, label: 'Awards Won', value: '25+', color: 'purple' },
    { icon: TrendingUp, label: 'Years Experience', value: '15+', color: 'orange' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To make travel accessible, affordable, and memorable for everyone. We believe every journey should be an adventure.',
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We go above and beyond to ensure your travel experience exceeds expectations.',
    },
    {
      icon: Shield,
      title: 'Trust & Safety',
      description: 'Travel with confidence. We ensure secure bookings, verified partners, and 24/7 customer support.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Leveraging cutting-edge technology to provide seamless booking experiences and personalized recommendations.',
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop',
      bio: '15+ years in travel industry'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
      bio: 'Tech innovator & entrepreneur'
    },
    {
      name: 'Emily Davis',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
      bio: 'Expert in customer experience'
    },
    {
      name: 'David Kumar',
      role: 'Travel Curator',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop',
      bio: 'World traveler & destination expert'
    }
  ];

  const milestones = [
    { year: '2010', event: 'Company Founded', description: 'Started with a vision to revolutionize travel' },
    { year: '2015', event: 'Reached 10K Customers', description: 'Milestone achievement in customer satisfaction' },
    { year: '2020', event: 'Expanded to 500+ Destinations', description: 'Global presence across continents' },
    { year: '2026', event: 'Industry Leader', description: '50K+ happy travelers and counting' }
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

      <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
        {/* Hero Section */}
      <section className="relative w-full h-[400px] bg-gradient-to-r from-gray-700 to-gray-600 overflow-hidden">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-800 to-orange-400 opacity-30 animate-pulse"></div>
        {/* Background map overlay */}
        <div className="absolute inset-0 opacity-40">
          <svg className="w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="none">
            <path d="M0,100 Q300,200 600,150 T1200,200 L1200,400 L0,400 Z" fill="rgba(0,0,0,0.1)" />
          </svg>
        </div>

        <div className="relative h-full flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-16 gap-4 md:gap-8">
          {/* Left content */}
          <div className="flex-1 max-w-lg z-10 ml-20 md:ml-48">
            
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 text-white drop-shadow-lg">
              Discover <span className="text-orange-400">SwiftRise</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-200 mb-4 font-medium">Your trusted travel partner</h2>
            <p className="text-gray-100 mb-6 text-base md:text-lg leading-relaxed">
              We create unforgettable journeys, connect cultures, and inspire adventure. Meet the team and values behind your next trip.
            </p>
           
          </div>

          {/* Right side - destination preview images */}
          <div className="flex-1 flex items-center justify-end gap-4 z-10">
            {/* Main image */}
            <div className="relative w-48 h-56 rounded-lg overflow-hidden border-4 border-blue-400 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=500&fit=crop"
                alt="Mountain landscape"
                className="object-cover w-full h-full"
                style={{objectFit:'cover', width:'100%', height:'100%'}}
              />
            </div>
            
            {/* Secondary images stack */}
            <div className="flex flex-col gap-4">
              <div className="relative w-32 h-24 rounded-lg overflow-hidden border-4 border-white shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=200&h=150&fit=crop"
                  alt="Hot air balloons"
                  className="object-cover w-full h-full"
                  style={{objectFit:'cover', width:'100%', height:'100%'}}
                />
              </div>
              <div className="relative w-32 h-24 rounded-lg overflow-hidden border-4 border-gray-800 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=200&h=150&fit=crop"
                  alt="Beach landscape"
                  className="object-cover w-full h-full"
                  style={{objectFit:'cover', width:'100%', height:'100%'}}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Stats Section */}
        <div className="max-w-7xl mx-auto px-8 -mt-16 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow p-3 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <Icon className="w-7 h-7 mx-auto mb-2" />
                  <div className="text-xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Our Story */}
        <div className="max-w-7xl mx-auto px-8 mt-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Founded in 2010, SwiftRise began with a simple idea: travel should be accessible to everyone. What started as a small startup has grown into one of the leading travel platforms, serving thousands of travelers worldwide.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We've built a community of adventurers, dreamers, and explorers who trust us to turn their travel aspirations into reality. Every booking, every destination, and every experience is crafted with care and attention to detail.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">Verified Partners</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">Best Price Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">24/7 Support</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=700&fit=crop" 
                alt="Travel" 
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-2xl shadow-xl">
                <Star className="w-8 h-8 fill-yellow-400 text-yellow-400 mb-2" />
                <div className="text-3xl font-bold">4.9/5</div>
                <div className="text-sm">Customer Rating</div>
                <style>{`.bg-blue-600 { background-color: #1CA8CB !important; }`}</style>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 mt-16 md:mt-24">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">What We Stand For</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Our core values guide everything we do, from customer service to destination selection.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                 <div key={index} className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                   <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                   </div>
                   <h3 className="text-base font-bold text-gray-900 mb-2">{value.title}</h3>
                   <p className="text-xs text-gray-600 leading-relaxed">{value.description}</p>
                 </div>
              );
            })}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="max-w-7xl mx-auto px-8 mt-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600">Key milestones that shaped our story</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-linear-to-b from-blue-500 to-purple-500 hidden md:block"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
                      <div className="text-3xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.event}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                      <style>{`.text-blue-600 { color: #1CA8CB !important; }`}</style>
                    </div>
                  </div>
                  <div className="hidden md:flex w-12 h-12 bg-blue-600 rounded-full items-center justify-center shadow-lg z-10">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                    <style>{`.bg-blue-600 { background-color: #1CA8CB !important; }`}</style>
                  </div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 mt-16 md:mt-24">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">Meet Our Team</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Passionate individuals dedicated to making your travel dreams come true.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <div className="flex gap-3">
                        <Facebook className="w-5 h-5 text-white cursor-pointer hover:text-blue-400" />
                        <Twitter className="w-5 h-5 text-white cursor-pointer hover:text-blue-400" />
                        <Linkedin className="w-5 h-5 text-white cursor-pointer hover:text-blue-400" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                                        <style>{`.text-blue-600 { color: #1CA8CB !important; }`}</style>
                    <p className="text-sm text-gray-600">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-8 mt-24 mb-24">
          <div className="bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Adventure?</h2>
            <p className="text-xl mb-5" style={{ color: '#1CA8CB' }}>
              Join thousands of travelers who trust SwiftRise for their journeys. Let's create memories together.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl">
                <Phone className="w-5 h-5" />
                <span>+91 1800-123-4567</span>
              </div>
              <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl">
                <Mail className="w-5 h-5" />
                <span>hello@swiftrise.com</span>
              </div>
              <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl">
                <MapPin className="w-5 h-5" />
                <span>Mumbai, India</span>
              </div>
            </div>
            <button
              className="mt-8 bg-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition shadow-xl"
              style={{ color: '#1CA8CB', border: '2px solid #1CA8CB' }}
            >
              Get in Touch
            </button>
            <style>{`.bg-gradient-to-r.from-blue-600 { background: linear-gradient(90deg, #1CA8CB, #a78bfa) !important; }`}</style>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
  }
  export default About;
