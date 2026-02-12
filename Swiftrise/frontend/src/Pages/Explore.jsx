'use client'
import React from 'react';

import Navigation from '../components/home/Navigation'
import LoginModal from '../components/home/LoginModal'
import Footer from '../components/home/Footer';

const destinations = [
  {
    name: 'Mountain Adventure',
    location: 'Alps',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&h=500&fit=crop',
  },
  {
    name: 'Desert Journey',
    location: 'Sahara',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=1200&h=500&fit=crop',
  },
  {
    name: 'City Exploration',
    location: 'New York',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&h=500&fit=crop',
  },
  {
    name: 'Tropical Escape',
    location: 'Maldives',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&h=500&fit=crop',
  },
  {
    name: 'Road Trip',
    location: 'California',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&h=500&fit=crop',
  },
];

const stories = [
  {
    title: 'Indiamearnear Highway',
    subtitle: 'Popular Routes',
    description: 'Scenic roadside routes handpicked with hidden cafes options and reliable service for smooth travel.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop',
  },
  {
    title: 'Urgent Travels',
    subtitle: 'Top Tours',
    description: 'Discover our curated plans covering iconic destinations, updated hotels, and tours of places.',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=300&h=200&fit=crop',
  },
  {
    title: 'Budget Tips',
    subtitle: '',
    description: 'Find affordable travel guides and tips to rediscover the great value without compromising comfort.',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=300&h=200&fit=crop',
  },
];

export default function Home() {
  const trendingTags = [
    '#Adventure','#Beach','#City','#Nature','#RoadTrip',
    '#Culture','#Wildlife','#Luxury','#Budget','#Family'
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [loginModalOpen, setLoginModalOpen] = React.useState(false);
  const [isSignup, setIsSignup] = React.useState(false);
  const [bgIndex, setBgIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % destinations.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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

      <main className="bg-white">

        {/* ================= HERO ================= */}
        <section className="relative w-full h-[420px] md:h-[520px] lg:h-[600px] overflow-hidden">
          <img
            src={destinations[bgIndex].image}
            alt="Hero"
            className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
          />
          <div className="absolute inset-0 bg-black/55" />

          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight">
              {destinations[bgIndex].name}
            </h1>

            <h2 className="text-xl md:text-2xl text-[#3F00FF] font-semibold mb-4">
              {destinations[bgIndex].location}
            </h2>

            <p className="text-white/90 max-w-2xl mb-6 text-base md:text-lg">
              Discover the best of {destinations[bgIndex].location}. Your next unforgettable adventure begins here.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {trendingTags.map(tag => (
                <span key={tag}
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1 rounded-full text-sm hover:bg-white/20 transition">
                  {tag}
                </span>
              ))}
            </div>

            <button className="px-10 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-[#3F00FF] to-indigo-600 hover:shadow-xl hover:scale-105 transition-all duration-300">
              Explore Destinations
            </button>
          </div>
        </section>

        {/* ================= DESTINATIONS ================= */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Top Destinations
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {destinations.map((dest, index) => (
              <div key={index}
                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden">

                <div className="h-48 overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="p-5">
                  <h3 className="font-semibold text-lg mb-1">{dest.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">{dest.location}</p>

                  <button className="w-full py-2 rounded-full text-white font-medium bg-[#3F00FF] hover:shadow-lg hover:scale-105 transition-all">
                    Book a Cab
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= STORIES ================= */}
        <section className="py-20 bg-gray-50 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-14 text-center">
              Trending Stories
            </h2>

            <div className="grid md:grid-cols-3 gap-10">
              {stories.map((story, index) => (
                <div key={index}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden">

                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-48 object-cover"
                  />

                  <div className="p-6">
                    <h4 className="font-semibold text-lg mb-1">{story.title}</h4>
                    {story.subtitle && (
                      <p className="text-[#3F00FF] text-sm font-semibold mb-2">
                        {story.subtitle}
                      </p>
                    )}
                    <p className="text-gray-600 text-sm">
                      {story.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= NEWSLETTER ================= */}
        <section className="relative py-24 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=500&fit=crop"
            className="absolute inset-0 w-full h-full object-cover"
            alt="Newsletter"
          />
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 max-w-3xl mx-auto text-center text-white px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get Travel Inspiration
            </h2>
            <p className="mb-8 text-lg text-white/90">
              Stay updated with curated destinations and exclusive travel offers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your e-mail"
                className="flex-1 px-5 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-white/70 focus:outline-none"
              />
              <button className="px-8 py-3 rounded-full bg-[#3F00FF] hover:shadow-xl hover:scale-105 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}