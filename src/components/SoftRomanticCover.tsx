import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Download, Heart, ArrowRight, Send } from 'lucide-react';
import { Language } from '../types';

interface SoftRomanticCoverProps {
  onOpenInvitation: () => void;
  onOpenShare?: () => void;
  lang: Language;
}

export const SoftRomanticCover: React.FC<SoftRomanticCoverProps> = ({
  onOpenInvitation,
  onOpenShare,
  lang,
}) => {
  const handleDownloadWallpaper = () => {
    const link = document.createElement('a');
    link.href = '/src/assets/images/khmer_wedding_cover_soft_1792413125230.jpg';
    link.download = 'Sophal_and_Mak_Kanhadavin_Wedding_Cover.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-2 sm:p-4 bg-[#F7F6F2] overflow-hidden select-none">
      {/* 9:16 Mobile Invitation Frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-[420px] aspect-[9/16] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(50,70,60,0.25)] border-2 border-[#D4DFD7] flex flex-col items-center justify-between p-6 sm:p-7 text-center"
      >
        {/* Background Image: Classical white arched portal with white roses, orchids & green foliage */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/khmer_wedding_cover_soft_1792413125230.jpg"
            alt="Soft Romantic Khmer Wedding Cover"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle center illumination overlay for text legibility */}
          <div className="absolute inset-0 bg-radial from-white/40 via-white/10 to-transparent pointer-events-none" />
        </div>

        {/* Floating Soft White Sparkles & Dust in the air */}
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
          {[
            { top: '15%', left: '20%', size: 4, dur: 4, delay: 0 },
            { top: '25%', left: '75%', size: 3, dur: 5, delay: 1 },
            { top: '45%', left: '30%', size: 5, dur: 4.5, delay: 0.5 },
            { top: '60%', left: '80%', size: 4, dur: 6, delay: 1.5 },
            { top: '70%', left: '25%', size: 3, dur: 5.5, delay: 2 },
            { top: '35%', left: '60%', size: 6, dur: 4.8, delay: 0.8 },
          ].map((sp, i) => (
            <span
              key={i}
              className="absolute rounded-full bg-white/90 shadow-[0_0_8px_rgba(255,255,255,0.9)] animate-pulse"
              style={{
                top: sp.top,
                left: sp.left,
                width: `${sp.size}px`,
                height: `${sp.size}px`,
                animationDuration: `${sp.dur}s`,
                animationDelay: `${sp.delay}s`,
              }}
            />
          ))}
        </div>

        {/* TOP ZONE: Top line in traditional Khmer font: "សិរីមង្គលអាពាហ៍ពិពាហ៍" */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-20 pt-4 flex flex-col items-center"
        >
          {/* Ornate subtle olive leaf ornament */}
          <div className="flex items-center gap-2 mb-2 text-[#4A5D4E]/80">
            <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#4A5D4E]/60" />
            <span className="text-xs">❀</span>
            <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#4A5D4E]/60" />
          </div>

          <h3 className="font-khmer-title text-base sm:text-lg text-[#3E5242] tracking-wider drop-shadow-sm font-bold">
            សិរីមង្គលអាពាហ៍ពិពាហ៍
          </h3>
          <p className="font-royal text-[10px] tracking-[0.25em] text-[#556B5A] uppercase mt-0.5 font-semibold">
            THE CELEBRATION OF HOLY MATRIMONY
          </p>
        </motion.div>

        {/* CENTER ZONE: Large centered stylized Khmer calligraphy with leaf decorations */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="relative z-20 my-auto py-6 px-4 rounded-2xl bg-white/45 backdrop-blur-[2px] border border-white/60 shadow-sm max-w-[340px]"
        >
          {/* Leaf sprig decoration above */}
          <div className="flex items-center justify-center text-[#4A5D4E]/75 mb-1.5">
            <svg width="40" height="16" viewBox="0 0 40 16" fill="none">
              <path
                d="M20 14C20 14 14 7 8 9C3 11 2 6 7 4C12 2 17 9 20 14Z"
                fill="#4A5D4E"
                fillOpacity="0.4"
              />
              <path
                d="M20 14C20 14 26 7 32 9C37 11 38 6 33 4C28 2 23 9 20 14Z"
                fill="#4A5D4E"
                fillOpacity="0.4"
              />
              <circle cx="20" cy="14" r="1.5" fill="#4A5D4E" />
            </svg>
          </div>

          {/* Large centered stylized elegant Khmer names */}
          <h1 className="font-khmer-title text-2xl sm:text-3xl text-[#2F4234] leading-tight drop-shadow tracking-wide">
            សុផល &amp; កញ្ញាដាវីន
          </h1>

          {/* Couple English Names */}
          <div className="mt-2 flex flex-col items-center">
            <p className="font-cursive text-2xl sm:text-3xl text-[#415646] font-medium leading-none">
              Sophal &amp; Kanhadavin
            </p>
            <span className="font-royal text-[11px] tracking-[0.2em] text-[#3E5242] font-bold uppercase mt-1">
              SOPHAL &amp; KANHADAVIN
            </span>
          </div>

          {/* Leaf sprig decoration below */}
          <div className="flex items-center justify-center text-[#4A5D4E]/75 mt-2">
            <svg width="32" height="12" viewBox="0 0 32 12" fill="none">
              <path
                d="M16 2C16 2 11 7 6 6C2 5 2 9 6 10C10 11 14 5 16 2Z"
                fill="#4A5D4E"
                fillOpacity="0.35"
              />
              <path
                d="M16 2C16 2 21 7 26 6C30 5 30 9 26 10C22 11 18 5 16 2Z"
                fill="#4A5D4E"
                fillOpacity="0.35"
              />
            </svg>
          </div>

          {/* Wedding Date in Olive */}
          <p className="font-khmer text-xs text-[#415646] mt-2 font-semibold">
            ថ្ងៃអាទិត្យ ទី១៤ ខែមីនា ឆ្នាំ២០២៧
          </p>
        </motion.div>

        {/* BOTTOM ZONE: Bottom line in soft Khmer font: "សូមស្វាគមន៍អញ្ជើញ" */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative z-20 pb-2 w-full flex flex-col items-center gap-3"
        >
          {/* Bottom line text in soft olive green */}
          <p className="font-khmer text-sm sm:text-base text-[#3E5242] font-bold tracking-wide drop-shadow-sm">
            សូមស្វាគមន៍អញ្ជើញ
          </p>

          {/* Action Buttons: Open Invitation, Share & Download Wallpaper */}
          <div className="flex flex-col items-center gap-2 w-full max-w-[320px]">
            <button
              onClick={onOpenInvitation}
              className="w-full py-3 px-5 rounded-full bg-gradient-to-r from-[#3E5242] via-[#4F6955] to-[#2E3E32] text-white hover:opacity-95 font-khmer font-bold text-sm tracking-wide shadow-[0_8px_20px_rgba(46,62,50,0.3)] flex items-center justify-center gap-2 transition-all hover:scale-[1.02] cursor-pointer"
            >
              <span>{lang === 'km' ? 'បើកសំបុត្រមង្គលការ' : 'Open Wedding Invitation'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2 w-full">
              {onOpenShare && (
                <button
                  onClick={onOpenShare}
                  className="flex-1 py-2 px-3 rounded-full bg-[#0088CC] hover:bg-[#0077B5] text-white text-xs font-khmer font-semibold flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer whitespace-nowrap"
                >
                  <Send className="w-3.5 h-3.5 fill-current" />
                  <span>{lang === 'km' ? 'ផ្ញើធៀប Telegram' : 'Share Link'}</span>
                </button>
              )}

              <button
                onClick={handleDownloadWallpaper}
                title="Save 9:16 Mobile Wallpaper"
                className="flex-1 py-2 px-3 rounded-full bg-white/85 hover:bg-white text-[#3E5242] border border-[#BAC9BE] text-xs font-khmer font-semibold flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer whitespace-nowrap"
              >
                <Download className="w-3.5 h-3.5 text-[#3E5242]" />
                <span>{lang === 'km' ? 'Wallpaper 9:16' : 'Wallpaper'}</span>
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
