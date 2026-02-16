import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Repeat,
  Star,
  ShieldCheck,
  Users,
  Quote,
} from "lucide-react";
import { motion, useAnimation } from "framer-motion";

 import Navigation from "../components/home/Navigation";
import Footer from "../components/home/Footer";
import LoginModal from "../components/home/LoginModal"; // ✅ REQUIRED

export default function RepeatCustomer() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false); // ✅ REQUIRED
  const [isSignup, setIsSignup] = useState(false); // ✅ REQUIRED

  return (
    <div className="min-h-screen bg-white">
      <TopBar />

      <Navigation
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        setLoginModalOpen={setLoginModalOpen}
      />

      {/* ✅ LOGIN MODAL */}
      <LoginModal
        loginModalOpen={loginModalOpen}
        setLoginModalOpen={setLoginModalOpen}
        isSignup={isSignup}
        setIsSignup={setIsSignup}
      />

      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">

          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Trusted by Thousands of Repeat Customers
            </h2>
            <p className="mt-2 md:mt-3 lg:mt-4 text-sm sm:text-base md:text-lg text-gray-600">
              People who travel with us once, choose us again.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16">
            <StatCard icon={Repeat} value="65%" label="Repeat Bookings" />
            <StatCard icon={Users} value="50K+" label="Happy Customers" />
            <StatCard icon={Star} value="4.8/5" label="Average Rating" />
            <StatCard icon={ShieldCheck} value="100%" label="Verified Trips" />
          </div>

          {/* Happy Customers */}
          <HappyCustomersRow />

          {/* Trust Strip */}
          <div className="mt-16 bg-gray-50 rounded-2xl px-6 py-6 sm:px-10 sm:py-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm sm:text-base text-gray-700 text-center md:text-left max-w-2xl">
              Over <span className="font-semibold text-gray-900">65%</span> of our
              bookings come from customers who have already traveled with us.
            </p>

            <Link to="/car-rental">
              <button className="px-6 py-3 rounded-full text-sm sm:text-base font-semibold text-white bg-[#1CA8CB] hover:opacity-90 transition">
                Book with Confidence
              </button>
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}

/* -------------------- STAT CARD -------------------- */
function StatCard({ icon: Icon, value, label }) {
  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition">
      <div className="flex justify-center mb-3">
        <Icon className="w-6 h-6 text-[#1CA8CB]" />
      </div>
      <div className="text-xl sm:text-2xl font-bold text-gray-900">
        {value}
      </div>
      <div className="mt-1 text-xs sm:text-sm text-gray-600">
        {label}
      </div>
    </div>
  );
}

/* -------------------- HAPPY CUSTOMERS ROW -------------------- */
function HappyCustomersRow() {
  const controls = useAnimation();
  const [duration, setDuration] = useState(40);

  const customers = [
    {
      name: "Rahul Sharma",
      place: "Delhi",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      review: "Very reliable service. I book all my trips here.",
    },
    {
      name: "Anita Verma",
      place: "Mumbai",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      review: "Clean cars and polite drivers every time.",
    },
    {
      name: "Karan Singh",
      place: "Jaipur",
      image: "https://randomuser.me/api/portraits/men/56.jpg",
      review: "Smooth booking and great support.",
    },
    {
      name: "Priya Mehta",
      place: "Ahmedabad",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      review: "Perfect for family trips.",
    },
    {
      name: "Amit Patel",
      place: "Surat",
      image: "https://randomuser.me/api/portraits/men/71.jpg",
      review: "Always on time and professional.",
    },
    {
      name: "Sneha Iyer",
      place: "Bangalore",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      review: "My go-to travel partner.",
    },
  ];

  useEffect(() => {
    const onScroll = () => {
      const speed = Math.max(25, 60 - window.scrollY / 40);
      setDuration(speed);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        repeat: Infinity,
        ease: "linear",
        duration,
      },
    });
  }, [controls, duration]);

  return (
    <div className="relative overflow-hidden mb-20">
      <h3 className="text-center text-lg sm:text-xl font-semibold text-gray-900 mb-8">
        Loved by Our Customers
      </h3>

      <motion.div
        className="flex gap-8 w-max cursor-grab active:cursor-grabbing"
        animate={controls}
        onMouseEnter={() => controls.stop()}
        onMouseLeave={() =>
          controls.start({
            x: ["0%", "-50%"],
            transition: { repeat: Infinity, ease: "linear", duration },
          })
        }
        onTouchStart={() => controls.stop()}
        onTouchEnd={() =>
          controls.start({
            x: ["0%", "-50%"],
            transition: { repeat: Infinity, ease: "linear", duration },
          })
        }
        drag="x"
        dragConstraints={{ left: -1000, right: 0 }}
      >
        {[...customers, ...customers].map((c, i) => (
          <CustomerCard key={i} customer={c} />
        ))}
      </motion.div>
    </div>
  );
}

/* -------------------- CUSTOMER CARD -------------------- */
function CustomerCard({ customer }) {
  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition w-[260px] sm:w-[280px] p-6 flex flex-col items-center text-center">
      <img
        src={customer.image}
        alt={customer.name}
        className="w-20 h-20 rounded-full object-cover border-2 border-[#1CA8CB] mb-4"
      />
      <p className="font-semibold text-gray-900">{customer.name}</p>
      <p className="text-sm text-gray-500 mb-4">{customer.place}</p>
      <div className="opacity-0 group-hover:opacity-100 transition duration-300">
        <Quote className="w-4 h-4 mx-auto mb-2 text-[#1CA8CB]" />
        <p className="text-sm text-gray-700">{customer.review}</p>
      </div>
    </div>
  );
}