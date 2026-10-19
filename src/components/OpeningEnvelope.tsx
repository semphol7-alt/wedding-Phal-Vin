import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GoldenButterfly, KhmerCornerOrnament } from './GoldOrnament';
import { Language } from '../types';

interface OpeningEnvelopeProps {
  onOpen: () => void;
  lang: Language;
}

export const OpeningEnvelope: React.FC<OpeningEnvelopeProps> = ({ onOpen, lang }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenClick = () => {
    setIsOpening(true);
    setTimeout(() => {
      onOpen();
    }, 1200);
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center p-4 bg-khmer-emerald overflow-hidden">
      {/* Background radial gold glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.18)_0%,transparent_70%)] pointer-events-none" />

      {/* Floating butterflies in background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[32%] left-[22%] butterfly-anim-1">
          <GoldenButterfly size={34} />
        </div>
        <div className="absolute top-[28%] right-[20%] butterfly-anim-2">
          <GoldenButterfly size={38} />
        </div>
        <div className="absolute top-[40%] left-[48%] butterfly-anim-3">
          <GoldenButterfly size={26} />
        </div>
      </div>

      {/* Central Envelope Card Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-[380px] flex flex-col items-center"
      >
        {/* Envelope Graphic Wrapper */}
        <div className="relative w-full aspect-[4/3] max-w-[340px] flex items-center justify-center">
          {/* Peeking White & Gold Card */}
          <motion.div
            initial={{ y: 0 }}
            animate={isOpening ? { y: -80, scale: 1.05 } : { y: [-2, 2, -2] }}
            transition={
              isOpening
                ? { duration: 1, ease: 'easeInOut' }
                : { repeat: Infinity, duration: 4, ease: 'easeInOut' }
            }
            className="absolute top-2 w-[82%] bg-[#FFFDF9] rounded-t-xl p-4 shadow-2xl border-2 border-[#D4AF37]/70 text-center flex flex-col items-center justify-start z-10"
            style={{ height: '75%' }}
          >
            <div className="w-8 h-[2px] bg-[#D4AF37] mb-2" />
            <p className="font-khmer-title text-[#8C5E13] text-sm tracking-wider">
              លិខិតអញ្ជើញ
            </p>
            <p className="font-royal text-[10px] tracking-widest text-[#B37C1C] uppercase mt-0.5">
              Wedding Invitation
            </p>
            <div className="mt-2 text-[#996515] font-cursive text-xl leading-none">
              Sem Sophal &amp; Mak Kanhadavin
            </div>
            <div className="mt-1 font-khmer text-xs text-[#063325] font-semibold">
              ស៊ឹម សុផល &amp; ម៉ាក់ កញ្ញាដាវីន
            </div>
            <div className="w-10 h-[1px] bg-[#D4AF37]/50 mt-2" />
          </motion.div>

          {/* Envelope Body (Golden & Emerald Royal Finish) */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] border-2 border-[#E5C365]/80 bg-gradient-to-b from-[#0B4F3B] to-[#04241B] z-20">
            {/* Ornate corner filigree */}
            <KhmerCornerOrnament position="top-left" size={28} />
            <KhmerCornerOrnament position="top-right" size={28} />
            <KhmerCornerOrnament position="bottom-left" size={28} />
            <KhmerCornerOrnament position="bottom-right" size={28} />

            {/* Envelope flap creases and gold borders */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              preserveAspectRatio="none"
              viewBox="0 0 340 255"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Top V Flap outline */}
              <motion.path
                animate={isOpening ? { d: 'M0 0 L170 -60 L340 0' } : { d: 'M0 0 L170 120 L340 0' }}
                transition={{ duration: 0.6 }}
                stroke="#F5E084"
                strokeWidth="2.5"
                fill="rgba(11, 79, 59, 0.4)"
              />
              {/* Bottom V Pocket */}
              <path d="M0 255 L170 115 L340 255" stroke="#D4AF37" strokeWidth="2" fill="rgba(4, 36, 27, 0.7)" />
              {/* Side fold lines */}
              <path d="M0 0 L140 135 L0 255" stroke="#D4AF37" strokeWidth="1.2" strokeOpacity="0.4" />
              <path d="M340 0 L200 135 L340 255" stroke="#D4AF37" strokeWidth="1.2" strokeOpacity="0.4" />
            </svg>

            {/* Golden Royal Wax Seal Medallion in center */}
            <motion.div
              animate={isOpening ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-[#FFEAA0] via-[#D4AF37] to-[#8C5E13] p-[2px] shadow-[0_4px_20px_rgba(212,175,55,0.6)] flex items-center justify-center z-30"
            >
              <div className="w-full h-full rounded-full border border-[#FFF8DC]/60 flex flex-col items-center justify-center bg-gradient-to-b from-[#C49726] to-[#885A14] text-white">
                <span className="font-cursive text-2xl text-[#FFF9D2] drop-shadow">S &amp; D</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Action Button & Instruction Text */}
        <div className="mt-8 flex flex-col items-center gap-3 w-full">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleOpenClick}
            disabled={isOpening}
            className="btn-gold px-9 py-3.5 rounded-full text-base tracking-wide flex items-center justify-center gap-2.5 cursor-pointer shadow-lg w-full max-w-[260px]"
          >
            <span className="font-khmer font-bold text-[#1a1402] text-lg">
              {lang === 'km' ? 'បើកសំបុត្រ' : 'Open Invitation'}
            </span>
            <span className="text-[#8C5E13] text-sm">✦</span>
          </motion.button>

          <p className="font-khmer text-xs tracking-wider text-[#ECC876]/90 text-center">
            {lang === 'km'
              ? 'សូមបើកសំបុត្រដើម្បីមើលព័ត៌មាន'
              : 'Please open the invitation to view wedding details'}
          </p>
        </div>
      </motion.div>
    </div>
  );
};
