'use client'
import React from 'react';
import TopBar from '../components/home/TopBar'
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
]

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
    description: 'Find affordable travel guides and tips to rediscover the great value without compromising on comfort of stays.',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=300&h=200&fit=crop',
  },
]

export default function Home() {
    // Trending travel tags
    const trendingTags = [
      '#Adventure', '#Beach', '#City', '#Nature', '#RoadTrip', '#Culture', '#Wildlife', '#Luxury', '#Budget', '#Family'
    ];
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [loginModalOpen, setLoginModalOpen] = React.useState(false);
  const [isSignup, setIsSignup] = React.useState(false);
  // Hero background image slider
  const [bgIndex, setBgIndex] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % destinations.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
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
      <main className="min-h-screen bg-white">
      {/* Hero Section */}

      <section className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] bg-gradient-to-r from-gray-700 to-gray-600 overflow-hidden">
        {/* Background image slider */}
        <img
          src={destinations[bgIndex].image}
          alt="Explore Hero Background"
          className="absolute inset-0 w-full h-full object-cover z-0 transition-all duration-700"
          style={{objectFit:'cover', width:'100%', height:'100%'}}
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
        {/* Background map overlay */}
        <div className="absolute inset-0 opacity-40 z-0">
          <svg className="w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="none">
            <path d="M0,100 Q300,200 600,150 T1200,200 L1200,400 L0,400 Z" fill="rgba(0,0,0,0.1)" />
          </svg>
        </div>

        <div className="relative h-full flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-16 gap-2 md:gap-4">
          {/* Left content */}
          <div className="flex-1 max-w-lg z-10 text-center md:text-left flex flex-col items-center md:items-start justify-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-2 md:mb-4 text-white drop-shadow-lg animate-fade-in">
              {destinations[bgIndex].name}
            </h1>
            <h2 className="text-sm sm:text-lg md:text-xl lg:text-2xl text-orange-400 mb-2 md:mb-3 font-medium animate-fade-in-slow">
              {destinations[bgIndex].location}
            </h2>
            <p className="text-white mb-3 md:mb-4 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed animate-fade-in-slow max-w-xs md:max-w-full">
              Discover the best of {destinations[bgIndex].location} and more. Your next adventure awaits!
            </p>
            <div className="flex gap-1 md:gap-2 mb-3 md:mb-4 flex-wrap justify-center md:justify-start">
              {trendingTags.map(tag => (
                <span key={tag} className="bg-white/20 text-white px-2 md:px-3 py-0.5 md:py-1 rounded-full text-xs md:text-sm font-semibold shadow hover:bg-white/40 transition cursor-pointer">{tag}</span>
              ))}
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 md:px-8 py-2 md:py-3 text-sm md:text-base rounded-xl font-bold shadow-xl animate-bounce">
              Explore Destinations
            </button>
          </div>
        {/* Hero navigation dots for background slider */}
        <div className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1 md:gap-2 z-20">
          {destinations.map((_, idx) => (
            <button
              key={idx}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${bgIndex === idx ? 'bg-orange-400' : 'bg-white/40'} border-2 border-white transition`}
              onClick={() => setBgIndex(idx)}
              aria-label={`Go to slide ${idx+1}`}
            />
          ))}
        </div>
        {/* Animations */}
        <style>{`
          @keyframes fade-in { from { opacity: 0; transform: translateY(20px);} to { opacity: 1; transform: none; } }
          .animate-fade-in { animation: fade-in 1s cubic-bezier(.4,0,.2,1) both; }
          .animate-fade-in-slow { animation: fade-in 1.5s cubic-bezier(.4,0,.2,1) both; }
          @keyframes bounce { 0%, 100% { transform: translateY(0);} 50% { transform: translateY(-8px);} }
          .animate-bounce { animation: bounce 1.2s infinite; }
        `}</style>

          {/* Right side - destination preview images */}
          <div className="hidden md:flex items-center justify-center md:justify-end gap-2 md:gap-3 z-10">
            {/* Main image - smaller on mobile */}
            <div className="relative w-28 h-32 md:w-40 md:h-48 lg:w-48 lg:h-56 rounded-lg overflow-hidden border-4 border-blue-400 shadow-lg">
              <img
                src={destinations[bgIndex].image}
                alt="Mountain landscape"
                className="object-cover w-full h-full"
                style={{objectFit:'cover', width:'100%', height:'100%'}}
              />
            </div>
            {/* Secondary images stack - smaller on mobile */}
            <div className="flex flex-col gap-2 md:gap-3">
              <div className="relative w-24 h-20 md:w-32 md:h-24 rounded-lg overflow-hidden border-4 border-white shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=200&h=150&fit=crop"
                  alt="Hot air balloons"
                  className="object-cover w-full h-full"
                  style={{objectFit:'cover', width:'100%', height:'100%'}}
                />
              </div>
              <div className="relative w-24 h-20 md:w-32 md:h-24 rounded-lg overflow-hidden border-4 border-gray-800 shadow-lg">
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

      {/* Destinations Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-16 bg-white">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-black">Top Destinations</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {destinations.map((dest, index) => (
            <div key={index} className="flex flex-col">
              {/* Image Card */}
              <div className="relative w-full h-40 md:h-48 rounded-xl md:rounded-2xl overflow-hidden mb-3 md:mb-4 bg-gray-200 shadow-md">
                <img
                  src={dest.image || "/placeholder.svg"}
                  alt={dest.name}
                  className="object-cover hover:scale-105 transition-transform duration-300 w-full h-full"
                  style={{objectFit:'cover', width:'100%', height:'100%'}}
                />
              </div>
              
              {/* Text Content */}
              <div className="flex-1">
                <h3 className="text-base md:text-lg font-bold text-black">{dest.name}</h3>
                <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4">{dest.location}</p>
              </div>
              
              {/* Button */}
               <button className="px-3 md:px-4 py-2 md:py-3 rounded-lg md:rounded-full text-xs md:text-sm font-medium text-white transition-all hover:shadow-lg" style={{ backgroundColor: '#1CA8CB' }}>
                  Book a Cab
                </button>
            </div>
          ))}
        </div>
      </section>

      {/* Trending Stories Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-16 bg-white">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-black">Trending Stories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Featured Experience - Left */}
          <div className="lg:col-span-1">
            <div className="relative w-full h-80 md:h-96 rounded-xl md:rounded-2xl overflow-hidden mb-4 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=500&fit=crop"
                alt="Featured Experience"
                className="object-cover w-full h-full"
                style={{objectFit:'cover', width:'100%', height:'100%'}}
              />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-black mb-2 md:mb-3">Featured Experience</h3>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
              It&apos;s instant, accessible, and easy for both travel + cab booking and budgeting.
            </p>
          </div>

          {/* Stories Grid - Right */}
          <div className="md:col-span-1 lg:col-span-2 space-y-4 md:space-y-6">
            {stories.map((story, index) => (
              <div key={index} className="flex gap-3 md:gap-4 bg-gray-50 rounded-lg md:rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                {/* Thumbnail */}
                <div className="relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0">
                  <img
                    src={story.image || "/placeholder.svg"}
                    alt={story.title}
                    className="object-cover w-full h-full"
                    style={{objectFit:'cover', width:'100%', height:'100%'}}
                  />
                </div>
                
                {/* Content */}
                <div className="flex-1 py-2 md:py-3 pr-3 md:pr-4">
                  <h4 className="font-bold text-black text-xs md:text-sm">{story.title}</h4>
                  {story.subtitle && (
                    <p className="text-blue-600 text-xs font-semibold mb-1">{story.subtitle}</p>
                  )}
                  <p className="text-gray-600 text-xs line-clamp-2">{story.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative w-full h-96 overflow-hidden">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=500&fit=crop"
          alt="Mountain landscape"
          className="object-cover w-full h-full absolute inset-0"
          style={{objectFit:'cover', width:'100%', height:'100%'}}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-8 z-10">
          <h2 className="text-5xl font-bold text-white mb-4">
            Get Travel Inspiration in Your
            <br />
            Inbox
          </h2>
          <p className="text-white mb-8 max-w-md text-lg">
            Stay updated with our handpicked destinations, travel tips and exclusive access to explore.
          </p>

          {/* Newsletter Form */}
          <div className="flex gap-2 w-full max-w-md">
            <input
              type="email"
              placeholder="Your e-mail"
              className="flex-1 px-5 py-3 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-500/70 shadow-lg"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
    <div className="mt-16"></div>
    <Footer />
    </>
  )
}
