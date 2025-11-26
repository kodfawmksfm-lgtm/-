import React from 'react';

export const Logo = ({ className = "w-32 h-12" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 300 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="logoGradient" x1="0" y1="0" x2="100%" y2="0" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#15803d" /> {/* Primary Green */}
        <stop offset="100%" stopColor="#166534" /> {/* Dark Green */}
      </linearGradient>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    
    {/* Pure Text Logo - Arabic Calligraphy Style Simulation */}
    <text 
      x="50%" 
      y="65" 
      textAnchor="middle" 
      fontFamily="'Cairo', sans-serif" 
      fontWeight="800" 
      fontSize="42" 
      fill="url(#logoGradient)"
      style={{ filter: 'drop-shadow(0px 2px 2px rgba(0,0,0,0.1))' }}
    >
      حدائق الياسمين
    </text>
    
    {/* Subtle Decorative accent line underneath */}
    <path 
      d="M100 80 Q150 90 200 80" 
      stroke="#d97706" 
      strokeWidth="3" 
      strokeLinecap="round" 
      fill="none"
    />
    
    {/* Small leaf accent */}
    <path 
      d="M150 25 Q160 10 170 25 Q160 40 150 25 Z" 
      fill="#d97706"
    />
  </svg>
);