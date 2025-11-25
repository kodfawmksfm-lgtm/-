import React from 'react';

export const Logo = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="mainGradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#15803d" /> {/* Primary Green */}
        <stop offset="100%" stopColor="#052e16" /> {/* Dark Green */}
      </linearGradient>
      <linearGradient id="goldGradient" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="50%" stopColor="#d97706" />
        <stop offset="100%" stopColor="#b45309" />
      </linearGradient>
    </defs>
    
    {/* Geometric Hexagon Base - Represents Structure/Pergolas */}
    <path 
      d="M50 5 L93.3 30 V80 L50 105 L6.7 80 V30 Z" 
      fill="white" 
      stroke="url(#mainGradient)" 
      strokeWidth="2"
      className="drop-shadow-sm"
    />
    
    {/* Inner stylized J/Leaf shape */}
    <path 
      d="M50 20 C50 20 70 35 70 60 C70 80 55 90 35 85 C45 85 50 75 50 60 L50 20 Z" 
      fill="url(#mainGradient)" 
    />
    
    {/* Golden Accent / Sun / Flower Center */}
    <circle cx="50" cy="45" r="8" fill="url(#goldGradient)" className="drop-shadow-md" />
    
    {/* Abstract Lines for Landscape/Architecture */}
    <path d="M20 30 L50 45" stroke="#d97706" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M80 30 L50 45" stroke="#d97706" strokeWidth="1.5" strokeLinecap="round" />
    
    {/* Arabic Calligraphy hint (abstract dot) */}
    <circle cx="50" cy="15" r="2.5" fill="#15803d" />
  </svg>
);