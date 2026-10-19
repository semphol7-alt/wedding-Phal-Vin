import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { SparklesBackground } from './components/SparklesBackground';
import { SoftRomanticCover } from './components/SoftRomanticCover';
import { OpeningEnvelope } from './components/OpeningEnvelope';
import { TopBar } from './components/TopBar';
import { MainCouplePhoto } from './components/MainCouplePhoto';
import { InvitationMessage } from './components/InvitationMessage';
import { TheEssentials } from './components/TheEssentials';
import { WeddingProgramme } from './components/WeddingProgramme';
import { OurMoments } from './components/OurMoments';
import { WeddingGift } from './components/WeddingGift';
import { RSVPAndWishes } from './components/RSVPAndWishes';
import { GratitudeApology } from './components/GratitudeApology';
import { ClosingScreen } from './components/ClosingScreen';
import { BottomNavigation } from './components/BottomNavigation';
import { Language } from './types';

export default function App() {
  const [viewMode, setViewMode] = useState<'cover' | 'envelope' | 'invitation'>('cover');
  const [lang, setLang] = useState<Language>('km');
  const [activeSection, setActiveSection] = useState('home');
  const [hasStartedMusic, setHasStartedMusic] = useState(false);

  // Handle Opening Invitation
  const handleOpenInvitation = () => {
    setViewMode('invitation');
    setHasStartedMusic(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle section navigation from bottom bar
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Intersection observer to sync active bottom tab on scroll
  useEffect(() => {
    if (viewMode !== 'invitation') return;

    const sections = ['home', 'programme', 'gift', 'rsvp'];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { threshold: 0.3 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [viewMode]);

  return (
    <div className="relative min-h-screen bg-khmer-emerald text-[#F7F3E8] selection:bg-[#D4AF37]/30 selection:text-[#FFF8DC]">
      {/* Floating Golden Sparkles */}
      <SparklesBackground />

      <AnimatePresence mode="wait">
        {viewMode === 'cover' ? (
          /* SOFT ROMANTIC KHMER WEDDING COVER (9:16 MOBILE WALLPAPER STYLE) */
          <motion.div
            key="soft-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.6 }}
            className="w-full min-h-screen flex flex-col items-center justify-center relative"
          >
            {/* Quick switcher to Royal Envelope if desired */}
            <div className="absolute top-4 right-4 z-30">
              <button
                onClick={() => setViewMode('envelope')}
                className="px-3 py-1.5 rounded-full bg-[#03241B]/80 hover:bg-[#03241B] text-[#FFE58F] border border-[#D4AF37]/50 text-xs font-khmer shadow transition-all cursor-pointer backdrop-blur-md"
              >
                {lang === 'km' ? 'សំបុត្រមាស Royal Envelope' : 'Royal Envelope'}
              </button>
            </div>

            <SoftRomanticCover
              onOpenInvitation={handleOpenInvitation}
              lang={lang}
            />
          </motion.div>
        ) : viewMode === 'envelope' ? (
          /* ROYAL GOLD ENVELOPE SCREEN */
          <motion.div
            key="envelope"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.6 }}
            className="w-full min-h-screen flex flex-col items-center justify-center relative"
          >
            {/* Quick switcher back to Soft Cover */}
            <div className="absolute top-4 right-4 z-30">
              <button
                onClick={() => setViewMode('cover')}
                className="px-3 py-1.5 rounded-full bg-[#03241B]/80 hover:bg-[#03241B] text-[#FFE58F] border border-[#D4AF37]/50 text-xs font-khmer shadow transition-all cursor-pointer backdrop-blur-md"
              >
                {lang === 'km' ? 'ក្របសំបុត្រ Soft Cover' : 'Soft Cover'}
              </button>
            </div>

            <OpeningEnvelope onOpen={handleOpenInvitation} lang={lang} />
          </motion.div>
        ) : (
          /* MAIN LUXURY INVITATION VIEW */
          <motion.div
            key="invitation-main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative min-h-screen flex flex-col items-center"
          >
            {/* Top Navigation Bar with Audio and Language Switcher */}
            <TopBar
              lang={lang}
              onLanguageChange={setLang}
              onReopenEnvelope={() => setViewMode('envelope')}
              onViewCover={() => setViewMode('cover')}
              autoPlayTrigger={hasStartedMusic}
            />

            {/* Mobile App Viewport Container (Centered on desktop with subtle gold borders) */}
            <main className="w-full max-w-[460px] mx-auto flex flex-col items-center relative z-10 px-2 sm:px-4">
              {/* SECTION 2: Main Couple Photo Screen */}
              <MainCouplePhoto lang={lang} />

              {/* SECTION 3: Invitation Message + Parents Section */}
              <InvitationMessage lang={lang} />

              {/* SECTION 4: The Essentials Section */}
              <TheEssentials lang={lang} />

              {/* SECTION 5: Wedding Programme */}
              <WeddingProgramme lang={lang} />

              {/* SECTION 6: Our Moments */}
              <OurMoments lang={lang} />

              {/* SECTION 7: Wedding Gift */}
              <WeddingGift lang={lang} />

              {/* SECTION 8: RSVP & Wishes */}
              <RSVPAndWishes lang={lang} />

              {/* SECTION 9: Gratitude & Humble Apology */}
              <GratitudeApology lang={lang} />

              {/* SECTION 10: Closing Screen */}
              <ClosingScreen lang={lang} />
            </main>

            {/* Bottom Navigation Bar */}
            <BottomNavigation
              activeSection={activeSection}
              onNavigate={handleNavigate}
              lang={lang}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
