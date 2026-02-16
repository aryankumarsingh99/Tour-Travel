import React, { useState } from 'react';
import { 
  LayoutDashboard, Users, FileText, Car, Plane, Hotel, MapPin, Mail, 
  Settings, BarChart3, Calendar, DollarSign, TrendingUp, Activity,
  Home, Compass, Briefcase, MessageSquare, Package, ShoppingCart,
  Eye, Edit, Trash2, Plus, Search, Filter, Download, Upload,
  Bell, User, LogOut, ChevronDown, Menu, X, Check, AlertCircle,
  Clock, Star, ArrowUp, ArrowDown, MoreVertical, RefreshCw, FileBarChart
} from 'lucide-react';

export default function Admin() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [dateFilter, setDateFilter] = useState('7days');
  const [openService, setOpenService] = useState(null);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, color: 'blue' },
    { id: 'bookings', label: 'Bookings', icon: Calendar, color: 'green' },
    { id: 'users', label: 'Users', icon: Users, color: 'orange' },
    { id: 'cars', label: 'Car Rentals', icon: Car, color: 'red' },
    { id: 'destinations', label: 'Destinations', icon: MapPin, color: 'cyan' },
    { id: 'services', label: 'Services', icon: Briefcase, color: 'indigo' },
    { id: 'reviews', label: 'Reviews', icon: Star, color: 'yellow' },
    { id: 'analytics', label: 'Analytics', icon: BarChart3, color: 'pink' },
    { id: 'messages', label: 'Messages', icon: MessageSquare, color: 'teal' },
    { id: 'settings', label: 'Settings', icon: Settings, color: 'gray' }
  ];

  const stats = [
    { label: 'Total Bookings', value: '2,547', change: '+12.5%', icon: Calendar, color: 'blue', positive: true },
    { label: 'Active Users', value: '15,234', change: '+8.2%', icon: Users, color: 'green', positive: true },
    { label: 'Revenue', value: '₹45.2L', change: '+23.1%', icon: DollarSign, color: 'purple', positive: true },
    { label: 'Destinations', value: '156', change: '+5', icon: MapPin, color: 'orange', positive: true }
  ];

  const recentBookings = [
    { id: 'BK001', user: 'Rahul Sharma', email: 'rahul@example.com', service: 'Flight to Dubai', date: '2026-01-20', time: '14:30', amount: '₹45,000', status: 'confirmed', payment: 'Credit Card' },
    { id: 'BK002', user: 'Priya Patel', email: 'priya@example.com', service: 'Hotel in Goa', date: '2026-01-22', time: '10:15', amount: '₹12,500', status: 'pending', payment: 'UPI' },
    { id: 'BK003', user: 'Amit Kumar', email: 'amit@example.com', service: 'Car Rental', date: '2026-01-18', time: '09:00', amount: '₹3,500', status: 'confirmed', payment: 'Debit Card' },
    { id: 'BK004', user: 'Neha Singh', email: 'neha@example.com', service: 'Cruise Package', date: '2026-02-01', time: '16:45', amount: '₹78,000', status: 'confirmed', payment: 'Net Banking' },
    { id: 'BK005', user: 'Vikram Mehta', email: 'vikram@example.com', service: 'Tour Package', date: '2026-01-25', time: '11:20', amount: '₹25,000', status: 'cancelled', payment: 'Credit Card' },
    { id: 'BK006', user: 'Anita Desai', email: 'anita@example.com', service: 'Flight to Singapore', date: '2026-01-19', time: '13:00', amount: '₹52,000', status: 'confirmed', payment: 'Credit Card' },
    { id: 'BK007', user: 'Rohan Joshi', email: 'rohan@example.com', service: 'Hotel Booking', date: '2026-01-21', time: '15:30', amount: '₹18,500', status: 'pending', payment: 'UPI' }
  ];

  const users = [
    { id: 1, name: 'Rahul Sharma', email: 'rahul@example.com', role: 'Customer', joined: '2025-12-15', bookings: 8, status: 'active', lastLogin: '2 hours ago' },
    { id: 2, name: 'Priya Patel', email: 'priya@example.com', role: 'Customer', joined: '2026-01-05', bookings: 3, status: 'active', lastLogin: '1 day ago' },
    { id: 3, name: 'Admin User', email: 'admin@swiftrise.com', role: 'Admin', joined: '2024-01-01', bookings: 0, status: 'active', lastLogin: 'Just now' },
    { id: 4, name: 'Amit Kumar', email: 'amit@example.com', role: 'Customer', joined: '2025-11-20', bookings: 12, status: 'active', lastLogin: '3 hours ago' },
    { id: 5, name: 'Neha Singh', email: 'neha@example.com', role: 'Customer', joined: '2025-10-10', bookings: 15, status: 'active', lastLogin: '5 hours ago' },
    { id: 6, name: 'Vikram Mehta', email: 'vikram@example.com', role: 'Customer', joined: '2025-09-05', bookings: 6, status: 'inactive', lastLogin: '2 weeks ago' }
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Filter Bar */}
      <div className="flex items-center justify-between bg-white rounded-2xl shadow-lg p-4">
        <div className="flex items-center gap-3">
          <Calendar className="w-5 h-5 text-gray-600" />
          <select 
            value={dateFilter} 
            onChange={(e) => setDateFilter(e.target.value)}
            className="border-2 border-gray-200 rounded-lg px-4 py-2 text-sm focus:border-blue-500 focus:outline-none"
          >
            <option value="today">Today</option>
            <option value="7days">Last 7 Days</option>
            <option value="30days">Last 30 Days</option>
            <option value="year">This Year</option>
          </select>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border-2 border-gray-200 rounded-lg hover:border-gray-300 transition text-sm font-medium">
            <Download className="w-4 h-4" /> Export Report
          </button>
          <button
            style={{ backgroundColor: '#1CA8CB' }}
            className="flex items-center gap-2 px-4 py-2 text-white rounded-lg transition text-sm font-medium"
          >
            <RefreshCw className="w-4 h-4" /> Refresh Data
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const Arrow = stat.positive ? ArrowUp : ArrowDown;
          
          const colorClasses = {
            blue: { bg: 'bg-blue-100', text: 'text-blue-600' },
            green: { bg: 'bg-green-100', text: 'text-green-600' },
            purple: { bg: 'bg-purple-100', text: 'text-purple-600' },
            orange: { bg: 'bg-orange-100', text: 'text-orange-600' }
          };
          
          const colors = colorClasses[stat.color] || colorClasses.blue;
          
          return (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition cursor-pointer group">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center group-hover:scale-110 transition`}>
                  <Icon className={`w-6 h-6 ${colors.text}`} />
                </div>
                <div className={`flex items-center gap-1 text-sm font-semibold ${stat.positive ? 'text-green-600' : 'text-red-600'}`}>
                  <Arrow className="w-4 h-4" />
                  {stat.change}
                </div>
              </div>
              <h3 className="text-gray-600 text-sm mb-1">{stat.label}</h3>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
            </div>
          );
        })}
      </div>

      {/* Charts Row */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Revenue Overview</h3>
          <div className="h-64 flex items-end justify-between gap-2">
            {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 95, 70].map((height, i) => (
              <div key={i} className="flex-1 bg-linear-to-t from-blue-600 to-blue-400 rounded-t-lg" style={{ height: `${height}%` }}></div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-xs text-gray-600">
            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
            <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Services</h3>
          <div className="flex items-center gap-3">
            <button
              style={{ color: '#1CA8CB' }}
              className="font-medium text-sm flex items-center gap-2"
            >
              <FileBarChart className="w-4 h-4" /> Export
            </button>
            <button
              style={{ color: '#1CA8CB' }}
              className="font-medium text-sm"
            >
              View All
            </button>
          </div>
        </div>
      </div>

      {/* Recent Bookings - Full Width */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Recent Bookings</h3>
          <div className="flex items-center gap-3">
            <button
              style={{ color: '#1CA8CB' }}
              className="font-medium text-sm flex items-center gap-2"
            >
              <FileBarChart className="w-4 h-4" /> Export
            </button>
            <button
              style={{ color: '#1CA8CB' }}
              className="font-medium text-sm"
            >
              View All
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">ID</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Customer</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Service</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Date & Time</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Payment</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Amount</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Status</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentBookings.map((booking) => (
                <tr key={booking.id} className="border-b hover:bg-gray-50 transition">
                  <td className="py-4 px-4 text-sm font-medium text-blue-600">{booking.id}</td>
                  <td className="py-4 px-4">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{booking.user}</p>
                      <p className="text-xs text-gray-500">{booking.email}</p>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-700">{booking.service}</td>
                  <td className="py-4 px-4">
                    <div>
                      <p className="text-sm text-gray-700">{booking.date}</p>
                      <p className="text-xs text-gray-500">{booking.time}</p>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-600">{booking.payment}</td>
                  <td className="py-4 px-4 text-sm font-semibold text-gray-900">{booking.amount}</td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      booking.status === 'confirmed' ? 'bg-green-100 text-green-700' :
                      booking.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                      <MoreVertical className="w-4 h-4 text-gray-600" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderUsers = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">User Management</h2>
        <button
          style={{ backgroundColor: '#1CA8CB' }}
          className="text-white px-6 py-3 rounded-xl font-semibold transition flex items-center gap-2"
        >
          <Plus className="w-5 h-5" /> Add User
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search users by name or email..."
              className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none"
            />
          </div>
          <select className="border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-blue-500 focus:outline-none">
            <option>All Roles</option>
            <option>Admin</option>
            <option>Customer</option>
          </select>
          <select className="border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-blue-500 focus:outline-none">
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">User</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Role</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Status</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Joined Date</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Total Bookings</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Last Login</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b hover:bg-gray-50 transition">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{user.name}</p>
                        <p className="text-xs text-gray-500">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      user.role === 'Admin' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      user.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-600">{user.joined}</td>
                  <td className="py-4 px-4 text-sm font-medium text-gray-900">{user.bookings}</td>
                  <td className="py-4 px-4 text-sm text-gray-600">{user.lastLogin}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-1">
                      <button
                        style={{ color: '#1CA8CB' }}
                        className="p-2 rounded-lg transition"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-purple-50 rounded-lg text-purple-600 transition">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-red-50 rounded-lg text-red-600 transition">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
  const renderBookings = () => (
  <div className="space-y-6">
    {/* Header */}
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <h2 className="text-3xl font-poppins text-gray-900">Customer Bookings</h2>
        <p className="text-gray-500">Manage your upcoming reservations.</p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button
          style={{ backgroundColor: '#1CA8CB' }}
          className="text-white px-5 py-2 rounded-lg font-medium"
        >
          New Booking
        </button>

        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
          />
        </div>

        <select className="border border-gray-300 rounded-lg px-4 py-2">
          <option>Date filter</option>
          <option>Today</option>
          <option>This Week</option>
          <option>This Month</option>
        </select>
      </div>
    </div>

    {/* Table */}
    <div className="bg-white rounded-2xl shadow-lg overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-linear-to-r from-gray-900 to-gray-800 text-white text-sm">
            <th className="text-left px-6 py-4">CUSTOMER NAME</th>
            <th className="text-left px-6 py-4">SERVICE</th>
            <th className="text-left px-6 py-4">DATE & TIME</th>
            <th className="text-left px-6 py-4">STATUS</th>
            <th className="text-left px-6 py-4">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {[
            {
              name: 'Alexandra Chen',
              service: 'Puri Trip Package',
              date: 'Oct 28, 2024, 10:00 AM',
              status: 'Confirmed'
            },
            {
              name: 'Michael Davis',
              service: 'Bhuvaneshwar City Tour',
              date: 'Oct 27, 2024, 2:30 PM',
              status: 'Pending'
            },
            {
              name: 'Sarah Jenkins',
              service: 'Lingraj Temple Visit',
              date: 'Oct 28, 2024, 11:15 AM',
              status: 'Confirmed'
            },
            {
              name: 'David Wilson',
              service: 'Konark Sun Temple Tour',
              date: 'Oct 29, 2024, 4:00 PM',
              status: 'Cancelled'
            },
            {
              name: 'Emily Carter',
              service: 'Chilika Lake Excursion',
              date: 'Oct 30, 2024, 1:45 PM',
              status: 'Confirmed'
            }
          ].map((row, i) => (
            <tr key={i} className="border-b last:border-none">
              <td className="px-6 py-4 font-medium text-gray-900">
                {row.name}
              </td>
              <td className="px-6 py-4 text-gray-700">
                {row.service}
              </td>
              <td className="px-6 py-4 text-gray-700">
                {row.date}
              </td>
              <td className="px-6 py-4">
                <span
                  className={`px-4 py-1 rounded-full text-sm font-semibold ${
                    row.status === 'Confirmed'
                      ? 'bg-blue-900 text-white'
                      : row.status === 'Pending'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-gray-300 text-gray-700'
                  }`}
                >
                  {row.status}
                </span>
              </td>
              <td className="px-6 py-4">
                <button className="border border-gray-800 px-4 py-1 rounded-lg font-medium hover:bg-gray-100">
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
const renderCarRentals = () => (
  <div className="flex gap-6">
    {/* LEFT FILTER PANEL */}
    <div className="w-72 bg-white rounded-2xl shadow-lg p-6 space-y-6 hidden lg:block">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold">Filter Plans</h3>
        <button className="text-sm text-gray-500">Reset</button>
      </div>

      <div>
        <input
          type="text"
          placeholder="Search"
          className="w-full border rounded-lg px-4 py-2"
        />
      </div>

      <div>
        <h4 className="font-semibold mb-2">Price & Budget</h4>
        <p className="text-sm text-gray-500 mb-3">Average range $240</p>

        <div className="flex gap-3">
          <div className="border rounded-lg p-3 w-full">
            <p className="text-xs text-gray-400">Min Price</p>
            <p className="font-semibold">$120</p>
          </div>
          <div className="border rounded-lg p-3 w-full">
            <p className="text-xs text-gray-400">Max Price</p>
            <p className="font-semibold">$480</p>
          </div>
        </div>
      </div>

      <div>
        <h4 className="font-semibold mb-2">Brand & Model</h4>
        <div className="space-y-2 text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" /> Honda
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" /> Hyundai
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" /> Toyota
          </label>
        </div>
      </div>
    </div>

    {/* RIGHT CONTENT */}
    <div className="flex-1 space-y-6">
      {/* TOP BAR */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">32 Results</h2>

        <select className="border rounded-lg px-4 py-2">
          <option>Newest to Oldest</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>

      {/* CAR LIST */}
      <div className="space-y-6">
        {[
          {
            brand: 'Honda',
            model: 'Civic 2009',
            price: '$300',
            discount: '10%',
            Image:'https://imgs.search.brave.com/EicMnBBLWYX-CUVeA_yc-hcAv9Aj_m_sVyD9t_G-17M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdk/LmFlcGxjZG4uY29t/LzM3MHgyMDgvbi9j/dy9lYy8yNzA3NC9j/aXZpYy1leHRlcmlv/ci1sZWZ0LXNpZGUt/dmlldy5qcGVnP3E9/ODA'
          },
          {
            brand: 'Hyundai',
            model: 'Ioniq 2023',
            price: '$540',
            discount: '40%',
            Image:'https://cdn.pixabay.com/photo/2016/11/18/14/45/car-1835506_1280.jpg'
          },
        ].map((car, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row items-center gap-6"
          >
            {/* CAR IMAGE */}
            <img
  src={car.image}
  alt={car.name}
  className="w-full md:w-64 h-32 object-cover rounded-lg"
/>
            {/* DETAILS */}
            <div className="flex-1 space-y-2">
              <span className="inline-block bg-green-700 text-white text-xs px-3 py-1 rounded-full">
                Discount {car.discount}
              </span>

              <p className="text-sm text-gray-500">{car.brand}</p>
              <h3 className="text-xl font-bold">{car.model}</h3>

              <div className="flex gap-3 text-sm text-gray-600">
                <span className="bg-gray-100 px-3 py-1 rounded-full">
                  1 Unit Available
                </span>
                <span className="bg-gray-100 px-3 py-1 rounded-full">
                  1–8 Seat
                </span>
                <span className="bg-gray-100 px-3 py-1 rounded-full">
                  +3 Etc
                </span>
              </div>
            </div>

            {/* PRICE */}
            <div className="text-right">
              <p className="text-2xl font-bold">
                {car.price}
                <span className="text-sm text-gray-500">/day</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
const renderServices = () => {
  const services = [
    {
      id: 'hotel',
      title: 'Hotel & Accommodation',
      customers: [
        { name: 'Rahul Sharma', payment: '₹12,500', date: '12 Jan 2026', time: '10:30 AM' },
        { name: 'Priya Patel', payment: '₹18,200', date: '14 Jan 2026', time: '2:15 PM' }
      ]
    },
    {
      id: 'planner',
      title: 'Travel Planner',
      customers: [
        { name: 'Amit Kumar', payment: '₹5,000', date: '10 Jan 2026', time: '9:00 AM' }
      ]
    },
    {
      id: 'guide',
      title: 'Tour Guides',
      customers: [
        { name: 'Neha Singh', payment: '₹3,200', date: '15 Jan 2026', time: '11:45 AM' }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">Services</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map(service => (
          <div key={service.id} className="bg-white rounded-2xl shadow-lg p-6">
            
            {/* SERVICE BUTTON */}
            <button
  onClick={() =>
    setOpenService(openService === service.id ? null : service.id)
  }
  className="w-full flex items-center justify-between px-6 py-5 rounded-2xl 
             bg-linear-to-r from-blue-900 to-blue-800 
             text-white font-semibold text-lg
             hover:from-blue-800 hover:to-blue-700
             transition-all duration-300"
>
  <div className="flex items-center gap-3">
    <Briefcase className="w-6 h-6" />
    <span>{service.title}</span>
  </div>

  <ChevronDown
    className={`w-5 h-5 transition-transform duration-300 ${
      openService === service.id ? 'rotate-180' : ''
    }`}
  />
</button>

            {/* DROPDOWN */}
            {openService === service.id && (
              <div className="mt-6 space-y-4">
                {service.customers.map((c, i) => (
                 <div
  key={i}
  className="bg-white rounded-xl p-4 flex items-start justify-between
             shadow-sm hover:shadow-md transition"
>
                    <div className="flex items-center gap-4">
  <div className="w-10 h-10 rounded-full bg-blue-900 text-white 
                  flex items-center justify-center font-bold">
    {c.name.charAt(0)}
  </div>

  <div>
    <p className="font-semibold text-gray-900">{c.name}</p>
    <div className="flex items-center gap-3 text-sm text-gray-500 mt-1">
  <div className="flex items-center gap-1">
    <Calendar className="w-4 h-4 text-gray-400" />
    <span>{c.date}</span>
  </div>

  <span className="text-gray-300">|</span>

  <div className="flex items-center gap-1">
    <Clock className="w-4 h-4 text-gray-400" />
    <span>{c.time}</span>
  </div>
</div>
  </div>
</div>

<p className="font-bold text-blue-900 text-lg">{c.payment}</p>
                  </div>
                ))}
              </div>
            )}

          </div>
        ))}
      </div>
    </div>
  );
};


  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard': return renderDashboard();
      case 'bookings': return renderBookings();
      case 'users': return renderUsers();
      case 'cars': return renderCarRentals();
      case 'services': return renderServices();
      
      default: return (
        <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
          <Package className="w-16 h-16 mx-auto text-gray-400 mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}</h3>
          <p className="text-gray-600">This section is under development</p>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
     <aside
  className={`${sidebarOpen ? 'w-72' : 'w-20'} 
  bg-linear-to-b from-gray-900 to-gray-800 text-white 
  transition-all duration-300 flex flex-col 
  sticky top-0 h-screen`}
>
        <div className="p-6 border-b border-gray-700 flex items-center justify-between">
          {sidebarOpen && <h1 className="text-2xl font-bold">Admin Panel</h1>}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-gray-700 rounded-lg">
            {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                  activeSection === item.id
                    ? ''
                    : 'hover:bg-gray-700 text-gray-300'
                }`}
                style={activeSection === item.id ? { backgroundColor: '#1CA8CB', color: '#fff', boxShadow: '0 4px 24px 0 rgba(28,168,203,0.15)' } : {}}
              >
                <Icon className="w-5 h-5 shrink-0" />
                {sidebarOpen && <span className="font-medium">{item.label}</span>}
              </button>
            );
          })}
        </nav>

        {sidebarOpen && (
          <div className="p-4 border-t border-gray-700">
            <div className="bg-gray-700 rounded-xl p-4">
              <p className="text-sm text-gray-400 mb-2">Storage Used</p>
              <div className="w-full bg-gray-600 rounded-full h-2 mb-2">
                <div className="h-2 rounded-full" style={{ width: '65%', backgroundColor: '#1CA8CB' }}></div>
              </div>
              <p className="text-xs text-gray-400">6.5 GB of 10 GB</p>
            </div>
          </div>
        )}
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-bold text-gray-900">
                {menuItems.find(item => item.id === activeSection)?.label || 'Dashboard'}
              </h2>
            </div>

            <div className="flex items-center gap-4">
              <button className="relative p-2 hover:bg-gray-100 rounded-lg">
                <Bell className="w-6 h-6 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 rounded-xl transition"
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1CA8CB' }}>
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900 text-sm">Admin User</p>
                    <p className="text-xs text-gray-500">admin@swiftrise.com</p>
                  </div>
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </button>

                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50">
                    <a href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-gray-700">
                      <User className="w-5 h-5" /> Profile
                    </a>
                    <a href="#" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-gray-700">
                      <Settings className="w-5 h-5" /> Settings
                    </a>
                    <hr className="my-2" />
                    <a href="/" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 text-red-600">
                      <LogOut className="w-5 h-5" /> Logout
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
