import React from 'react';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-md z-50 flex items-center justify-center">
      <div className="relative w-full max-w-md px-8">
        {/* Road */}
        <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden mb-8">
          <div className="absolute inset-0 flex gap-4">
            <div className="w-12 h-full bg-gray-400 rounded-full animate-road"></div>
            <div className="w-12 h-full bg-gray-400 rounded-full animate-road" style={{animationDelay: '0.3s'}}></div>
            <div className="w-12 h-full bg-gray-400 rounded-full animate-road" style={{animationDelay: '0.6s'}}></div>
          </div>
        </div>

        {/* Car Animation */}
        <div className="relative h-24 overflow-hidden">
          <div className="absolute inset-0 animate-carSlide">
            <svg
              className="w-28 h-28 drop-shadow-xl"
              viewBox="0 0 240 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Car Body - SUV Style */}
              <path
                d="M35 65 L35 55 L45 45 L75 40 L105 40 L125 45 L135 55 L205 55 L205 65 L200 65 L200 85 L40 85 L40 65 Z"
                fill="url(#carGradient)"
                className="drop-shadow-lg"
              />
              
              {/* Roof */}
              <path
                d="M80 40 L105 40 L115 50 L95 50 Z"
                fill="url(#roofGradient)"
              />
              
              {/* Front Windshield */}
              <path
                d="M48 45 L70 42 L70 52 L55 55 Z"
                fill="#BFDBFE"
                opacity="0.85"
              />
              
              {/* Rear Window */}
              <path
                d="M110 42 L122 45 L120 52 L110 52 Z"
                fill="#BFDBFE"
                opacity="0.85"
              />
              
              {/* Door Lines */}
              <line x1="85" y1="55" x2="85" y2="82" stroke="#1E40AF" strokeWidth="1.5" opacity="0.3"/>
              
              {/* Front Wheel */}
              <circle cx="70" cy="85" r="14" fill="#1F2937" />
              <circle cx="70" cy="85" r="9" fill="#374151" />
              <circle cx="70" cy="85" r="4" fill="#6B7280" />
              <circle cx="70" cy="85" r="2" fill="#9CA3AF" />
              
              {/* Back Wheel */}
              <circle cx="170" cy="85" r="14" fill="#1F2937" />
              <circle cx="170" cy="85" r="9" fill="#374151" />
              <circle cx="170" cy="85" r="4" fill="#6B7280" />
              <circle cx="170" cy="85" r="2" fill="#9CA3AF" />
              
              {/* Headlight */}
              <ellipse cx="198" cy="60" rx="4" ry="5" fill="#FEF08A" opacity="0.9" />
              <circle cx="198" cy="60" r="2" fill="#FBBF24" />
              
              {/* Tail Light */}
              <ellipse cx="42" cy="60" rx="3" ry="4" fill="#FCA5A5" opacity="0.8" />
              
              {/* Side Mirror */}
              <rect x="130" y="48" width="8" height="6" rx="2" fill="#60A5FA" />
              
              {/* Bumper */}
              <rect x="195" y="70" width="8" height="10" rx="2" fill="#1E3A8A" opacity="0.6" />
              
              <defs>
                <linearGradient id="carGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1E40AF" />
                  <stop offset="50%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>
                <linearGradient id="roofGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#60A5FA" />
                  <stop offset="100%" stopColor="#3B82F6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-center mt-8">
          <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3">
            Loading Your Journey
          </h2>
          <div className="flex gap-2 justify-center">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-cyan-600 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
