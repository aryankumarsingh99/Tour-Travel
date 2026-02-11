import React, { useState } from 'react';
import {
  Users,
  Target,
  Award,
  Heart,
  Shield,
  Zap,
  Globe,
  TrendingUp,
  CheckCircle
} from 'lucide-react';


import Navigation from '../components/home/Navigation';
import Footer from '../components/home/Footer';
import LoginModal from '../components/home/LoginModal';

function About() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const stats = [
    { icon: Users, label: 'Happy Customers', value: '50,000+' },
    { icon: Globe, label: 'Destinations', value: '500+' },
    { icon: Award, label: 'Awards Won', value: '25+' },
    { icon: TrendingUp, label: 'Years Experience', value: '15+' }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      bio: '15+ years in travel industry'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      bio: 'Tech innovator & entrepreneur'
    },
    {
      name: 'Emily Davis',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      bio: 'Expert in customer experience'
    },
    {
      name: 'David Kumar',
      role: 'Travel Curator',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
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
        <section className="relative w-full min-h-[340px] bg-gradient-to-r from-gray-700 to-gray-600">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-800 to-orange-400 opacity-30" />
          <div className="relative px-4 sm:px-8 lg:px-20 pt-24 max-w-xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-2">
              Discover <span className="text-orange-400">The World</span>
            </h1>
            <h2 className="text-sm sm:text-base md:text-lg text-gray-200 mb-3">
              with your trusted travel partner
            </h2>
            <p className="text-gray-100 text-sm md:text-base">
              We create unforgettable journeys, connect cultures, and inspire adventure.
              Meet the team and values behind your next trip.
            </p>
          </div>
        </section>

        {/* STATS */}
        <div className="max-w-7xl mx-auto px-4 -mt-12 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="bg-white rounded-xl shadow p-3 text-center">
                  <Icon className="w-6 h-6 mx-auto mb-2" />
                  <div className="text-lg font-bold">{stat.value}</div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* OUR STORY — RESTORED */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4">
                Founded in 2010, SwiftRise began with a simple idea: travel should be accessible to everyone.
                What started as a small startup has grown into a trusted travel platform serving thousands worldwide.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We believe travel connects cultures, builds memories, and inspires growth.
                Every journey we design is crafted with care, trust, and passion.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5" /> Verified Partners
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5" /> Best Price Guarantee
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5" /> 24/7 Support
                </div>
              </div>
            </div>

            <img
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=700&fit=crop"
              alt="Our Story"
              className="rounded-3xl shadow-2xl w-full"
            />
          </div>
        </div>

        {/* OUR JOURNEY */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-24">
          <h2 className="text-4xl font-bold text-center mb-12">Our Journey</h2>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500" />

            <div className="space-y-12">
              {milestones.map((m, i) => (
                <div
                  key={i}
                  className={`relative flex flex-col md:flex-row ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full z-10" />

                  <div className="ml-12 md:ml-0 md:w-1/2 px-4">
                    <div className="bg-white p-6 rounded-xl shadow">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{m.year}</div>
                      <h3 className="font-semibold text-lg">{m.event}</h3>
                      <p className="text-gray-600">{m.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* OUR TEAM */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-24">
          <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow hover:shadow-lg transition">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-blue-600 text-sm mb-1">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-7xl mx-auto px-4 mt-24 mb-24">
          <div className="bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-3">Ready to Start Your Adventure?</h2>
            <p className="mb-5">Join thousands of travelers who trust SwiftRise.</p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold">
              Get in Touch
            </button>
          </div>
        </div>

      </div>

      <Footer />
    </>
  );
}

export default About;