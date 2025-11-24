import React from 'react';

export const Logo = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="leafGradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#4ade80" />
        <stop offset="100%" stopColor="#16a34a" />
      </linearGradient>
    </defs>
    {/* Abstract Flower/Sun Shape */}
    <path d="M50 20C50 20 60 35 75 35C75 35 60 50 60 65C60 65 50 55 40 65C40 65 40 50 25 35C25 35 40 35 50 20Z" fill="url(#leafGradient)" className="drop-shadow-sm" />
    <path d="M50 20C50 20 40 35 25 35C25 35 40 50 40 65C40 65 50 55 60 65C60 65 60 50 75 35C75 35 60 35 50 20Z" stroke="#fff" strokeWidth="1.5" opacity="0.3" />
    
    {/* Center */}
    <circle cx="50" cy="48" r="6" fill="#fcd34d" />
    
    {/* Stem/Base */}
    <path d="M50 65C50 65 50 85 65 90" stroke="#15803d" strokeWidth="4" strokeLinecap="round" />
    <path d="M50 65C50 65 50 80 35 85" stroke="#15803d" strokeWidth="3" strokeLinecap="round" />
    
    {/* Outer Circle Ring */}
    <circle cx="50" cy="50" r="46" stroke="#16a34a" strokeWidth="2" className="opacity-20" strokeDasharray="4 4" />
  </svg>
);