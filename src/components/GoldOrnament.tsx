import React from 'react';

export const KhmerOrnateDivider: React.FC<{ className?: string; subtitle?: string }> = ({
  className = '',
  subtitle,
}) => {
  return (
    <div className={`flex flex-col items-center justify-center my-4 ${className}`}>
      <div className="flex items-center w-full max-w-[280px] gap-2">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-[#D4AF37]" />
        
        {/* Ornate Khmer Lotus Medallion */}
        <div className="relative flex items-center justify-center text-[#D4AF37]">
          <svg width="34" height="20" viewBox="0 0 34 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17 1C17 1 12 7 12 11C12 13.8 14.2 16 17 16C19.8 16 22 13.8 22 11C22 7 17 1 17 1Z"
              fill="url(#goldGrad)"
              stroke="#F5E084"
              strokeWidth="0.75"
            />
            <path
              d="M12 11C9.5 7.5 5 7 5 11C5 13.5 7 15.5 9.5 15.5C11.5 15.5 13.5 14 13.5 12"
              stroke="url(#goldGrad)"
              strokeWidth="1"
              strokeLinecap="round"
            />
            <path
              d="M22 11C24.5 7.5 29 7 29 11C29 13.5 27 15.5 24.5 15.5C22.5 15.5 20.5 14 20.5 12"
              stroke="url(#goldGrad)"
              strokeWidth="1"
              strokeLinecap="round"
            />
            <circle cx="17" cy="11" r="1.5" fill="#FFF9D2" />
            <defs>
              <linearGradient id="goldGrad" x1="0" y1="0" x2="34" y2="20" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F5E084" />
                <stop offset="0.5" stopColor="#D4AF37" />
                <stop offset="1" stopColor="#996515" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#D4AF37]/80 to-[#D4AF37]" />
      </div>
      {subtitle && (
        <span className="text-[11px] tracking-widest text-[#E5C365] uppercase mt-1 font-royal font-medium">
          {subtitle}
        </span>
      )}
    </div>
  );
};

export const KhmerCornerOrnament: React.FC<{
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  size?: number;
}> = ({ position, size = 32 }) => {
  const rotation =
    position === 'top-left'
      ? 'rotate-0'
      : position === 'top-right'
      ? 'rotate-90'
      : position === 'bottom-right'
      ? 'rotate-180'
      : '-rotate-90';

  const positionClass =
    position === 'top-left'
      ? 'top-2 left-2'
      : position === 'top-right'
      ? 'top-2 right-2'
      : position === 'bottom-left'
      ? 'bottom-2 left-2'
      : 'bottom-2 right-2';

  return (
    <div className={`absolute ${positionClass} pointer-events-none transform ${rotation}`}>
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2 38V12C2 6.47715 6.47715 2 12 2H38"
          stroke="url(#cornerGrad)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M6 34V15C6 10.0294 10.0294 6 15 6H34"
          stroke="#D4AF37"
          strokeWidth="1"
          strokeOpacity="0.6"
        />
        <path
          d="M12 12C12 16 16 20 20 20C24 20 24 16 20 12C16 8 12 12 12 12Z"
          fill="url(#cornerGrad)"
          fillOpacity="0.4"
        />
        <circle cx="2" cy="2" r="2.5" fill="#FFE898" />
        <defs>
          <linearGradient id="cornerGrad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFF2A3" />
            <stop offset="0.5" stopColor="#D4AF37" />
            <stop offset="1" stopColor="#8C5E13" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export const GoldenButterfly: React.FC<{ className?: string; size?: number; delay?: string }> = ({
  className = '',
  size = 32,
}) => {
  return (
    <div className={`inline-block ${className}`}>
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Left Wing */}
        <g className="flap-left">
          <path
            d="M19 20C19 20 14 8 6 10C2 11 1 17 5 21C8 24 18 22 19 20Z"
            fill="url(#bfWingL)"
            stroke="#FFF4B8"
            strokeWidth="0.75"
          />
          <path
            d="M18 21C18 21 12 25 7 28C4 30 5 35 9 34C13 33 18 24 18 21Z"
            fill="url(#bfWingL2)"
            stroke="#FFF4B8"
            strokeWidth="0.5"
          />
        </g>
        {/* Right Wing */}
        <g className="flap-right">
          <path
            d="M21 20C21 20 26 8 34 10C38 11 39 17 35 21C32 24 22 22 21 20Z"
            fill="url(#bfWingR)"
            stroke="#FFF4B8"
            strokeWidth="0.75"
          />
          <path
            d="M22 21C22 21 28 25 33 28C36 30 35 35 31 34C27 33 22 24 22 21Z"
            fill="url(#bfWingR2)"
            stroke="#FFF4B8"
            strokeWidth="0.5"
          />
        </g>
        {/* Center Body & Antennae */}
        <ellipse cx="20" cy="21" rx="1.5" ry="7" fill="#885A14" />
        <circle cx="20" cy="13" r="1.5" fill="#FFEAA0" />
        <path d="M19.5 12C18 9 15 8 13 8" stroke="#FFEAA0" strokeWidth="0.8" strokeLinecap="round" />
        <path d="M20.5 12C22 9 25 8 27 8" stroke="#FFEAA0" strokeWidth="0.8" strokeLinecap="round" />
        <defs>
          <linearGradient id="bfWingL" x1="2" y1="10" x2="19" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFF2A3" />
            <stop offset="0.6" stopColor="#D4AF37" />
            <stop offset="1" stopColor="#9C6B17" />
          </linearGradient>
          <linearGradient id="bfWingL2" x1="5" y1="22" x2="18" y2="34" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFDE7A" />
            <stop offset="1" stopColor="#B37C1C" />
          </linearGradient>
          <linearGradient id="bfWingR" x1="38" y1="10" x2="21" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFF2A3" />
            <stop offset="0.6" stopColor="#D4AF37" />
            <stop offset="1" stopColor="#9C6B17" />
          </linearGradient>
          <linearGradient id="bfWingR2" x1="35" y1="22" x2="22" y2="34" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFDE7A" />
            <stop offset="1" stopColor="#B37C1C" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
