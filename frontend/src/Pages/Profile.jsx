import React, { useState } from 'react';
import { 
  User, Mail, Phone, MapPin, Calendar, Edit2, Camera, 
  CreditCard, Bell, Shield, LogOut, ChevronRight, Globe,
  Heart, Bookmark, Clock, Award, Star, Settings, Lock
} from 'lucide-react';
import Footer from '../components/home/Footer';

export default function Profile() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEditing, setIsEditing] = useState(false);

  const userData = {
    name: "Sarah Anderson",
    email: "sarah.anderson@email.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    memberSince: "January 2023",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    coverImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=300&fit=crop",
    bio: "Travel enthusiast | Digital nomad | Adventure seeker exploring the world one destination at a time.",
    stats: {
      trips: 24,
      reviews: 18,
      wishlist: 32,
      points: 2850
    }
  };

  const recentBookings = [
    {
      id: 1,
      destination: "Jaisalmer, Rajasthan",
      date: "Dec 15, 2025",
      status: "Completed",
      image: "https://images.unsplash.com/photo-1609920658906-8223bd289001?w=200&h=150&fit=crop",
      price: "₹35,092"
    },
    {
      id: 2,
      destination: "Gokul, Mathura",
      date: "Jan 20, 2026",
      status: "Upcoming",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=200&h=150&fit=crop",
      price: "₹12,000"
    },
    {
      id: 3,
      destination: "Ayodhya, Ram Mandir",
      date: "Nov 10, 2025",
      status: "Completed",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=200&h=150&fit=crop",
      price: "₹5,000"
    }
  ];

  const savedPlaces = [
    {
      id: 1,
      name: "Madurai Temple",
      location: "Tamil Nadu, India",
      image: "https://images.unsplash.com/photo-1633189678902-a32d8b4d4ecb?w=200&h=150&fit=crop",
      rating: 4.9
    },
    {
      id: 2,
      name: "Golden Temple",
      location: "Amritsar, Punjab",
      image: "https://images.unsplash.com/photo-1585262331821-09f4623a9f4d?w=200&h=150&fit=crop",
      rating: 4.8
    },
    {
      id: 3,
      name: "Taj Mahal",
      location: "Agra, UP",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=200&h=150&fit=crop",
      rating: 5.0
    },
    {
      id: 4,
      name: "Kerala Backwaters",
      location: "Kerala, India",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=200&h=150&fit=crop",
      rating: 4.7
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Cover Image */}
      <div className="relative h-72 bg-gradient-to-r from-blue-500 to-purple-600">
        <img 
          src={userData.coverImage} 
          alt="Cover" 
          className="w-full h-full object-cover opacity-80"
        />
        <button className="absolute bottom-4 right-4 bg-white text-gray-700 px-4 py-2 rounded-lg shadow-lg hover:bg-gray-50 transition flex items-center gap-2">
          <Camera size={18} />
          Change Cover
        </button>
      </div>

      {/* Profile Header */}
      <div className="w-full px-24">
        <div className="relative -mt-20 mb-3">
          <div className="bg-white rounded-2xl shadow-xl p-3">
            <div className="flex flex-col md:flex-row items-start md:items-end gap-6">
              {/* Avatar */}
              <div className="relative">
                <img 
                  src={userData.avatar} 
                  alt={userData.name}
                  className="w-40 h-40 rounded-2xl object-cover border-4 border-white shadow-lg"
                />
                <button className="absolute bottom-2 right-2 bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition">
                  <Camera size={16} />
                </button>
              </div>

              {/* Profile Info */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">{userData.name}</h1>
                    <p className="text-gray-600 mt-1">{userData.bio}</p>
                    <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        {userData.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        Member since {userData.memberSince}
                      </div>
                      <div className="flex items-center gap-1">
                        <Award size={16} className="text-yellow-500" />
                        Gold Member
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => setIsEditing(!isEditing)}
                    className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition flex items-center gap-2 whitespace-nowrap"
                  >
                    <Edit2 size={18} />
                    Edit Profile
                  </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                    <div className="text-2xl font-bold text-blue-600">{userData.stats.trips}</div>
                    <div className="text-sm text-gray-600 mt-1">Trips Completed</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                    <div className="text-2xl font-bold text-purple-600">{userData.stats.reviews}</div>
                    <div className="text-sm text-gray-600 mt-1">Reviews</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl">
                    <div className="text-2xl font-bold text-pink-600">{userData.stats.wishlist}</div>
                    <div className="text-sm text-gray-600 mt-1">Wishlist</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                    <div className="text-2xl font-bold text-green-600">{userData.stats.points}</div>
                    <div className="text-sm text-gray-600 mt-1">Reward Points</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-10 gap-1 md:gap-2 pb-4 md:pb-6">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-3">
            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-lg p-3">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Mail size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Email</div>
                    <div className="text-sm">{userData.email}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="p-2 bg-green-50 rounded-lg">
                    <Phone size={20} className="text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Phone</div>
                    <div className="text-sm">{userData.phone}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <MapPin size={20} className="text-purple-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Location</div>
                    <div className="text-sm">{userData.location}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-lg p-3">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
              <div className="space-y-2">
                <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition text-left">
                  <div className="flex items-center gap-3">
                    <Settings size={20} className="text-gray-600" />
                    <span className="text-gray-700">Account Settings</span>
                  </div>
                  <ChevronRight size={18} className="text-gray-400" />
                </button>
                <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition text-left">
                  <div className="flex items-center gap-3">
                    <CreditCard size={20} className="text-gray-600" />
                    <span className="text-gray-700">Payment Methods</span>
                  </div>
                  <ChevronRight size={18} className="text-gray-400" />
                </button>
                <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition text-left">
                  <div className="flex items-center gap-3">
                    <Bell size={20} className="text-gray-600" />
                    <span className="text-gray-700">Notifications</span>
                  </div>
                  <ChevronRight size={18} className="text-gray-400" />
                </button>
                <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition text-left">
                  <div className="flex items-center gap-3">
                    <Lock size={20} className="text-gray-600" />
                    <span className="text-gray-700">Privacy & Security</span>
                  </div>
                  <ChevronRight size={18} className="text-gray-400" />
                </button>
                <button className="w-full flex items-center justify-between p-3 hover:bg-red-50 rounded-lg transition text-left text-red-600">
                  <div className="flex items-center gap-3">
                    <LogOut size={20} />
                    <span>Log Out</span>
                  </div>
                  <ChevronRight size={18} className="text-red-400" />
                </button>
              </div>
            </div>
          </div>

          {/* Empty Space */}
          <div className="lg:col-span-2"></div>

          {/* Main Content */}
          <div className="lg:col-span-7 space-y-4">
            {/* Tabs */}
            <div className="bg-white rounded-2xl shadow-lg p-2">
              <div className="flex gap-2 overflow-x-auto">
                <button 
                  onClick={() => setActiveTab('overview')}
                  className={`px-6 py-2.5 rounded-lg font-medium whitespace-nowrap transition ${
                    activeTab === 'overview' 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  Overview
                </button>
                <button 
                  onClick={() => setActiveTab('bookings')}
                  className={`px-6 py-2.5 rounded-lg font-medium whitespace-nowrap transition ${
                    activeTab === 'bookings' 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  My Bookings
                </button>
                <button 
                  onClick={() => setActiveTab('saved')}
                  className={`px-6 py-2.5 rounded-lg font-medium whitespace-nowrap transition ${
                    activeTab === 'saved' 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  Saved Places
                </button>
              </div>
            </div>

            {/* Tab Content */}
            {activeTab === 'bookings' && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">My Bookings</h2>
                <div className="space-y-4">
                  {recentBookings.map(booking => (
                    <div key={booking.id} className="flex gap-4 p-4 border border-gray-200 rounded-xl hover:shadow-md transition">
                      <img 
                        src={booking.image} 
                        alt={booking.destination}
                        className="w-32 h-24 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-gray-900">{booking.destination}</h3>
                            <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                              <div className="flex items-center gap-1">
                                <Calendar size={14} />
                                {booking.date}
                              </div>
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                booking.status === 'Completed' 
                                  ? 'bg-green-100 text-green-700'
                                  : 'bg-blue-100 text-blue-700'
                              }`}>
                                {booking.status}
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-blue-600">{booking.price}</div>
                            <button className="text-sm text-blue-600 hover:text-blue-700 mt-2">
                              View Details →
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'saved' && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Saved Places</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {savedPlaces.map(place => (
                    <div key={place.id} className="group relative overflow-hidden rounded-xl border border-gray-200 hover:shadow-lg transition">
                      <img 
                        src={place.image} 
                        alt={place.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition duration-300"
                      />
                      <div className="absolute top-3 right-3">
                        <button className="p-2 bg-white rounded-full shadow-lg hover:bg-red-50 transition">
                          <Heart size={18} className="text-red-500 fill-red-500" />
                        </button>
                      </div>
                      <div className="p-4 bg-white">
                        <h3 className="font-semibold text-gray-900">{place.name}</h3>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-1 text-sm text-gray-600">
                            <MapPin size={14} />
                            {place.location}
                          </div>
                          <div className="flex items-center gap-1 text-sm font-medium text-yellow-600">
                            <Star size={14} className="fill-yellow-500 text-yellow-500" />
                            {place.rating}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Recent Activity */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Activity</h2>
                  <div className="space-y-4">
                    <div className="flex gap-4 p-4 bg-blue-50 rounded-xl">
                      <div className="p-2 bg-blue-100 rounded-lg h-fit">
                        <Clock size={20} className="text-blue-600" />
                      </div>
                      <div>
                        <p className="text-gray-900 font-medium">Booked a trip to Gokul, Mathura</p>
                        <p className="text-sm text-gray-600 mt-1">3 days ago</p>
                      </div>
                    </div>
                    <div className="flex gap-4 p-4 bg-green-50 rounded-xl">
                      <div className="p-2 bg-green-100 rounded-lg h-fit">
                        <Star size={20} className="text-green-600" />
                      </div>
                      <div>
                        <p className="text-gray-900 font-medium">Left a 5-star review for Jaisalmer tour</p>
                        <p className="text-sm text-gray-600 mt-1">1 week ago</p>
                      </div>
                    </div>
                    <div className="flex gap-4 p-4 bg-purple-50 rounded-xl">
                      <div className="p-2 bg-purple-100 rounded-lg h-fit">
                        <Heart size={20} className="text-purple-600" />
                      </div>
                      <div>
                        <p className="text-gray-900 font-medium">Saved 4 new destinations to wishlist</p>
                        <p className="text-sm text-gray-600 mt-1">2 weeks ago</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Achievements</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl">
                      <Award size={32} className="text-yellow-500 mx-auto mb-2" />
                      <p className="text-sm font-medium text-gray-700">Explorer</p>
                      <p className="text-xs text-gray-600 mt-1">10+ trips</p>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                      <Star size={32} className="text-blue-500 mx-auto mb-2" />
                      <p className="text-sm font-medium text-gray-700">Reviewer</p>
                      <p className="text-xs text-gray-600 mt-1">15+ reviews</p>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                      <Globe size={32} className="text-green-500 mx-auto mb-2" />
                      <p className="text-sm font-medium text-gray-700">Globe Trotter</p>
                      <p className="text-xs text-gray-600 mt-1">5+ states</p>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                      <Shield size={32} className="text-purple-500 mx-auto mb-2" />
                      <p className="text-sm font-medium text-gray-700">Verified</p>
                      <p className="text-xs text-gray-600 mt-1">ID verified</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
 