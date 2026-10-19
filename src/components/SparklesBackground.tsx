import React, { useMemo } from 'react';

export const SparklesBackground: React.FC = () => {
  // Pre-generate static random sparkles to prevent re-renders
  const sparkles = useMemo(() => {
    return Array.from({ length: 28 }).map((_, i) => ({
      id: i,
      top: `${(i * 3.7) % 100}%`,
      left: `${(i * 13.9 + 5) % 96}%`,
      size: (i % 3 === 0 ? 3 : i % 2 === 0 ? 2 : 1.5),
      duration: 3 + (i % 4) * 1.5,
      delay: (i % 6) * 0.8,
      opacity: 0.2 + (i % 5) * 0.15,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {sparkles.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full bg-[#FFEAA0] shadow-[0_0_6px_#FFD700]"
          style={{
            top: s.top,
            left: s.left,
            width: `${s.size}px`,
            height: `${s.size}px`,
            opacity: s.opacity,
            animation: `twinkle ${s.duration}s ease-in-out infinite alternate ${s.delay}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes twinkle {
          0% {
            transform: scale(0.6) translateY(0);
            opacity: 0.15;
          }
          50% {
            opacity: 0.85;
          }
          100% {
            transform: scale(1.3) translateY(-30px);
            opacity: 0.25;
          }
        }
      `}</style>
    </div>
  );
};
