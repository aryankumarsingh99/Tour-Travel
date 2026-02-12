import React, { useEffect, useState } from 'react';
import { Mail, Phone } from 'lucide-react';

export default function LoginModal({
  loginModalOpen,
  setLoginModalOpen,
  isSignup,
  setIsSignup,
}) {
  if (!loginModalOpen) return null;

  const positions = [
    { x: 0, y: 0 }, { x: 160, y: 0 },
    { x: 0, y: 160 }, { x: 160, y: 160 },
    { x: 0, y: 320 }, { x: 160, y: 320 },
  ];

  const [order, setOrder] = useState([0, 1, 2, 3, 4, 5]);

  useEffect(() => {
    const interval = setInterval(() => {
      setOrder((prev) => {
        const next = [...prev];
        const a = Math.floor(Math.random() * next.length);
        const b = Math.floor(Math.random() * next.length);
        [next[a], next[b]] = [next[b], next[a]];
        return next;
      });
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  /* 🎨 UPDATED TILE COLORS */
  const tiles = [
    { text: 'Total Care.\nTotal Different.', bg: 'bg-[#0892D0]' },
    { text: 'Own your power', bg: 'bg-[#4B0082]' },
    { text: 'Building trust\nin technology', bg: 'bg-gradient-to-br from-[#0892D0] to-[#4B0082]' },
    { icon: '◆', bg: 'bg-[#4B0082]' },
    { icon: '＋', bg: 'bg-[#0892D0]' },
    { icon: '⚡', bg: 'bg-gradient-to-br from-[#0892D0] to-[#4B0082]' },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md p-4 font-[Poppins]"
      onClick={() => {
        setLoginModalOpen(false);
        setIsSignup(false);
      }}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden flex"
        onClick={(e) => e.stopPropagation()}
      >
        {/* LEFT SIDE */}
        <div className="hidden md:block w-1/2 relative p-6">
          <div className="relative w-[320px] h-[480px] mx-auto">
            {tiles.map((tile, i) => {
              const pos = positions[order[i]];
              return (
                <div
                  key={i}
                  className={`${tile.bg} text-white rounded-2xl absolute flex items-center justify-center text-center font-semibold shadow-lg`}
                  style={{
                    width: 140,
                    height: 140,
                    transform: `translate(${pos.x}px, ${pos.y}px)`,
                    transition: 'transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  {tile.text ? (
                    <span className="whitespace-pre-line px-4 text-lg">
                      {tile.text}
                    </span>
                  ) : (
                    <span className="text-4xl">{tile.icon}</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {isSignup ? 'Create Account' : 'Welcome Back'}
              </h2>
              <button
                className="text-gray-400 hover:text-red-500 text-2xl"
                onClick={() => {
                  setLoginModalOpen(false);
                  setIsSignup(false);
                }}
              >
                ×
              </button>
            </div>

            {/* LOGIN OPTIONS */}
            <div className="space-y-4">
              <button className="w-full py-3 rounded-full border font-semibold hover:bg-gray-50 transition flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                Login with Number
              </button>

              <button className="w-full py-3 rounded-full border flex items-center justify-center gap-3 font-semibold hover:bg-gray-50 transition">
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google"
                  className="w-5 h-5"
                />
                Login with Google
              </button>
            </div>

            {/* EMAIL LOGIN */}
            <div className="mt-6 space-y-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0892D0] outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0892D0] outline-none"
              />

              <button className="w-full py-3 rounded-full text-white font-semibold bg-gradient-to-r from-[#0892D0] to-[#4B0082] flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition-all duration-300">
                <Mail className="w-4 h-4" />
                {isSignup ? 'Sign Up with Email' : 'Login with Email'}
              </button>
            </div>
          </div>

          {/* FOOTER ACTION */}
          <div className="text-center text-sm mt-6">
            {isSignup ? (
              <button
                onClick={() => setIsSignup(false)}
                className="text-[#0892D0] font-medium"
              >
                Already have an account? Login
              </button>
            ) : (
              <button
                onClick={() => setIsSignup(true)}
                className="text-[#0892D0] font-medium"
              >
                Don’t have an account? Sign Up
              </button>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
      `}</style>
    </div>
  );
}