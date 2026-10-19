import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Share2, Send } from 'lucide-react';
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
import { ShareModal } from './components/ShareModal';
import { Language } from './types';

export default function App() {
  const [viewMode, setViewMode] = useState<'cover' | 'envelope' | 'invitation'>('cover');
  const [lang, setLang] = useState<Language>('km');
  const [activeSection, setActiveSection] = useState('home');
  const [hasStartedMusic, setHasStartedMusic] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);

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
              onOpenShare={() => setIsShareOpen(true)}
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
            {/* Top Navigation Bar with Audio, Share and Language Switcher */}
            <TopBar
              lang={lang}
              onLanguageChange={setLang}
              onReopenEnvelope={() => setViewMode('envelope')}
              onViewCover={() => setViewMode('cover')}
              onOpenShare={() => setIsShareOpen(true)}
              autoPlayTrigger={hasStartedMusic}
            />

            {/* Mobile App Viewport Container (Centered on desktop with subtle gold borders) */}
            <main className="w-full max-w-[460px] mx-auto flex flex-col items-center relative z-10 px-2 sm:px-4 pb-24">
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

              {/* Quick Share Banner for Guests/Host */}
              <div className="w-full my-6 p-4 rounded-2xl bg-[#03241B]/90 border border-[#D4AF37]/50 shadow-xl text-center">
                <p className="font-khmer text-xs text-[#E8DCC0] mb-2.5">
                  {lang === 'km'
                    ? 'សូមចែករំលែកសេចក្តីរីករាយ និងផ្ញើធៀបនេះទៅកាន់បងប្អូនមិត្តភក្តិតាម Telegram / Messenger'
                    : 'Share this digital wedding invitation with loved ones via Telegram or Messenger'}
                </p>
                <button
                  onClick={() => setIsShareOpen(true)}
                  className="py-2.5 px-5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F5E084] to-[#B8860B] text-[#1a1402] font-khmer font-bold text-xs inline-flex items-center gap-2 shadow-lg hover:scale-105 transition-all cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{lang === 'km' ? 'ផ្ញើធៀបតាម Telegram / Messenger' : 'Share Invitation Link'}</span>
                </button>
              </div>

              {/* SECTION 9: Gratitude & Humble Apology */}
              <GratitudeApology lang={lang} />

              {/* SECTION 10: Closing Screen */}
              <ClosingScreen lang={lang} />
            </main>

            {/* Floating Share Button on Right Side */}
            <div className="fixed right-4 bottom-24 z-30">
              <button
                onClick={() => setIsShareOpen(true)}
                title={lang === 'km' ? 'ផ្ញើធៀបតាម Telegram / Messenger' : 'Share Invitation'}
                className="flex items-center gap-1.5 py-2 px-3 rounded-full bg-[#0088CC] hover:bg-[#0077B5] text-white shadow-[0_4px_16px_rgba(0,136,204,0.5)] border border-white/30 text-xs font-khmer font-bold cursor-pointer transition-all hover:scale-105"
              >
                <Send className="w-3.5 h-3.5 fill-current" />
                <span className="hidden sm:inline">{lang === 'km' ? 'ផ្ញើធៀប' : 'Share'}</span>
              </button>
            </div>

            {/* Bottom Navigation Bar */}
            <BottomNavigation
              activeSection={activeSection}
              onNavigate={handleNavigate}
              lang={lang}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Share Modal for Telegram / Messenger / Copy Message */}
      <ShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        lang={lang}
      />
    </div>
  );
}
