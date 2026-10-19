import React from 'react';
import { Home, Calendar, Gift, Heart } from 'lucide-react';
import { Language } from '../types';

interface BottomNavigationProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  lang: Language;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({
  activeSection,
  onNavigate,
  lang,
}) => {
  const navItems = [
    {
      id: 'home',
      labelKm: 'ទំព័រដើម',
      labelEn: 'Home',
      icon: Home,
    },
    {
      id: 'programme',
      labelKm: 'កម្មវិធី',
      labelEn: 'Calendar',
      icon: Calendar,
    },
    {
      id: 'gift',
      labelKm: 'ចំណងដៃ',
      labelEn: 'Gift',
      icon: Gift,
    },
    {
      id: 'rsvp',
      labelKm: 'ពរជ័យ',
      labelEn: 'RSVP',
      icon: Heart,
    },
  ];

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 flex justify-center pointer-events-none pb-safe"
      aria-label="Wedding Mobile Navigation"
    >
      <div className="w-full max-w-[420px] px-4 pb-3 pointer-events-auto">
        <div className="h-16 rounded-2xl bg-[#041F17]/90 backdrop-blur-md border border-[#D4AF37]/50 shadow-[0_10px_30px_rgba(0,0,0,0.8)] grid grid-cols-4 items-center px-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex flex-col items-center justify-center h-full transition-all cursor-pointer relative ${
                  isActive ? 'text-[#FFF3C4]' : 'text-[#8E846D] hover:text-[#C7BC9F]'
                }`}
              >
                {isActive && (
                  <div className="absolute top-1.5 w-6 h-[2px] rounded-full bg-[#D4AF37] shadow-[0_0_6px_#FFEAA0]" />
                )}
                <Icon
                  className={`w-5 h-5 transition-transform ${
                    isActive ? 'scale-110 text-[#FFE58F] stroke-[2.2]' : 'stroke-[1.8]'
                  }`}
                />
                <span className="text-[10px] font-khmer mt-1 font-medium tracking-tight">
                  {lang === 'km' ? item.labelKm : item.labelEn}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
