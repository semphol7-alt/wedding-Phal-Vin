import React from 'react';
import { motion } from 'motion/react';
import { KhmerOrnateDivider, KhmerCornerOrnament } from './GoldOrnament';
import { Language } from '../types';

interface ClosingScreenProps {
  lang: Language;
}

export const ClosingScreen: React.FC<ClosingScreenProps> = ({ lang }) => {
  return (
    <section id="closing" className="relative w-full pt-10 pb-28 px-4 flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-[420px] rounded-2xl p-6 sm:p-7 emerald-card relative shadow-2xl overflow-hidden flex flex-col items-center"
      >
        <KhmerCornerOrnament position="top-left" size={26} />
        <KhmerCornerOrnament position="top-right" size={26} />
        <KhmerCornerOrnament position="bottom-left" size={26} />
        <KhmerCornerOrnament position="bottom-right" size={26} />

        {/* Closing Title */}
        <div className="pt-2">
          <h2 className="font-khmer-title text-2xl sm:text-3xl text-[#FFF3C4] drop-shadow-md">
            {lang === 'km' ? 'សូមអរគុណ' : 'THANK YOU'}
          </h2>
          <p className="font-royal text-[11px] tracking-[0.25em] text-[#D4AF37] uppercase mt-1">
            {lang === 'km' ? 'WITH LOVE & GRATITUDE' : 'WITH LOVE & SINCERE GRATITUDE'}
          </p>
        </div>

        <KhmerOrnateDivider className="my-3.5" />

        {/* Couple photo in ornate gold frame */}
        <div className="relative my-3 p-[4px] rounded-2xl bg-gradient-to-b from-[#FFF3C4] via-[#D4AF37] to-[#8C5E13] shadow-[0_8px_25px_rgba(0,0,0,0.6)]">
          <div className="w-[220px] h-[260px] sm:w-[240px] sm:h-[280px] rounded-xl overflow-hidden border border-[#D4AF37]/40 relative bg-[#021811]">
            <img
              src="/src/assets/images/khmer_couple_prewedding_1792411486018.jpg"
              alt="Sophal and Davin Closing Portrait"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#021811]/60 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* White jasmine garland hanging below the frame */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative -mt-6 z-10 flex flex-col items-center"
        >
          {/* Jasmine Garland Image */}
          <div className="w-28 h-28 sm:w-32 sm:h-32 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] filter">
            <img
              src="/src/assets/images/khmer_jasmine_garland_1792411469754.jpg"
              alt="White Jasmine Wedding Garland (Phka Malis)"
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain rounded-full border border-[#D4AF37]/40"
            />
          </div>
          <p className="font-khmer text-[11px] text-[#FFEAA0] mt-1 italic tracking-wide">
            {lang === 'km' ? 'ផ្កាម្លិះមង្គល និងពរជ័យសិរីសួស្តី' : 'Sacred Jasmine of Love & Prosperity'}
          </p>
        </motion.div>

        {/* Couple Names */}
        <div className="mt-5 text-center">
          <h3 className="font-khmer-title text-xl sm:text-2xl text-[#F9E79F] drop-shadow-sm">
            ស៊ឹម សុផល &amp; ម៉ាក់ កញ្ញាដាវីន
          </h3>
          <p className="font-cursive text-2xl text-[#FFF3C4] mt-0.5">
            Sem Sophal &amp; Mak Kanhadavin
          </p>
          <p className="font-royal text-[11px] text-[#D4AF37] tracking-widest mt-1 uppercase font-semibold">
            14 . 03 . 2027 · DOUN KAEV, TAKEO
          </p>
        </div>
      </motion.div>
    </section>
  );
};
