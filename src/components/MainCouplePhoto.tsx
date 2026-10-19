import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { KhmerOrnateDivider, KhmerCornerOrnament } from './GoldOrnament';
import { Language } from '../types';

interface MainCouplePhotoProps {
  lang: Language;
}

export const MainCouplePhoto: React.FC<MainCouplePhotoProps> = ({ lang }) => {
  // Target Wedding Date: March 14, 2027 07:00:00 AM (Cambodia time / UTC+7)
  const targetDate = new Date('2027-03-14T07:00:00+07:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section id="home" className="relative w-full pt-8 pb-12 px-4 flex flex-col items-center text-center">
      {/* Top Greeting Badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-3"
      >
        <span className="font-royal text-[11px] tracking-[0.25em] text-[#E5C365] uppercase font-semibold">
          THE ROYAL WEDDING OF
        </span>
      </motion.div>

      {/* Large Ornate Gold Teardrop / Oval Frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative my-4 flex items-center justify-center"
      >
        {/* Glow halo behind frame */}
        <div className="absolute w-[280px] h-[370px] rounded-[50%_50%_46%_46%_/_60%_60%_40%_40%] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.35)_0%,transparent_70%)] filter blur-md pointer-events-none" />

        {/* Ornate Gold Filigree Oval Frame Wrapper */}
        <div className="relative p-[5px] rounded-[50%_50%_46%_46%_/_60%_60%_40%_40%] bg-gradient-to-b from-[#FFF2A3] via-[#D4AF37] to-[#8C5E13] shadow-[0_12px_35px_rgba(0,0,0,0.7)]">
          {/* Inner gold rope rim */}
          <div className="relative p-[3px] rounded-[50%_50%_46%_46%_/_60%_60%_40%_40%] border border-[#6B470A] bg-[#021811]">
            {/* The Photo Container */}
            <div className="w-[240px] h-[320px] sm:w-[260px] sm:h-[350px] overflow-hidden rounded-[50%_50%_46%_46%_/_60%_60%_40%_40%] relative">
              <img
                src="/src/assets/images/khmer_wedding_couple_main_1792411431628.jpg"
                alt="Sem Sophal and Mak Kanhadavin Cambodian Wedding"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
              />
              {/* Subtle gold gradient vignette on bottom of photo */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#021811]/70 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Ornate Top Crown Brooch */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center justify-center text-[#FFE898] drop-shadow-md">
            <svg width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18 2L23 11L31 6L28 20H8L5 6L13 11L18 2Z"
                fill="url(#crownGrad)"
                stroke="#FFF4B8"
                strokeWidth="0.8"
              />
              <circle cx="18" cy="14" r="2" fill="#FFFFFF" />
              <circle cx="9" cy="8" r="1.2" fill="#FFEAA0" />
              <circle cx="27" cy="8" r="1.2" fill="#FFEAA0" />
              <defs>
                <linearGradient id="crownGrad" x1="5" y1="2" x2="31" y2="20" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFF4B8" />
                  <stop offset="0.5" stopColor="#D4AF37" />
                  <stop offset="1" stopColor="#8C5E13" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </motion.div>

      {/* Names in elegant gold cursive */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="mt-3"
      >
        <h1 className="font-cursive text-4xl sm:text-5xl gold-text-gradient drop-shadow leading-tight tracking-wide">
          Sem Sophal &amp; Mak Kanhadavin
        </h1>

        {/* Khmer Names below */}
        <h2 className="font-khmer-title text-xl sm:text-2xl text-[#F9E79F] mt-1 tracking-wider drop-shadow-sm">
          ស៊ឹម សុផល &amp; ម៉ាក់ កញ្ញាដាវីន
        </h2>
      </motion.div>

      <KhmerOrnateDivider className="my-3" />

      {/* Wedding Date in Khmer & English */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-[340px] px-3 py-2.5 rounded-xl bg-[#063325]/75 border border-[#D4AF37]/35 shadow-inner"
      >
        <p className="font-khmer text-xs sm:text-sm text-[#FDF4D4] leading-relaxed font-medium">
          ថ្ងៃអាទិត្យ ៧កើត ខែផល្គុន ឆ្នាំមមី អដ្ឋស័ក ពុទ្ធសករាជ ២៥៧០
        </p>
        <p className="font-khmer text-sm sm:text-base text-[#FFE58F] font-bold mt-1">
          ត្រូវនឹងថ្ងៃទី ១៤ ខែមីនា ឆ្នាំ ២០២៧
        </p>
        {lang === 'en' && (
          <p className="font-royal text-xs text-[#E5C365] mt-1 tracking-wider uppercase">
            Sunday, 14 March 2027
          </p>
        )}
      </motion.div>

      {/* Countdown Timer in 4 Gold Circles */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-6 flex items-center justify-center gap-2.5 sm:gap-3.5"
      >
        {[
          { value: timeLeft.days, labelKm: 'ថ្ងៃ', labelEn: 'Days' },
          { value: timeLeft.hours, labelKm: 'ម៉ោង', labelEn: 'Hours' },
          { value: timeLeft.minutes, labelKm: 'នាទី', labelEn: 'Mins' },
          { value: timeLeft.seconds, labelKm: 'វិនាទី', labelEn: 'Secs' },
        ].map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            {/* Gold Ring Circle */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full p-[2px] bg-gradient-to-br from-[#FFF3C4] via-[#D4AF37] to-[#8C5E13] shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
              <div className="w-full h-full rounded-full bg-[#03231a] border border-[#D4AF37]/40 flex flex-col items-center justify-center">
                <span className="font-royal font-bold text-lg sm:text-xl text-[#FFF3C4] tabular-nums leading-none">
                  {String(item.value).padStart(2, '0')}
                </span>
              </div>
            </div>
            <span className="font-khmer text-[11px] sm:text-xs text-[#E5C365] mt-1.5 font-medium tracking-wide">
              {lang === 'km' ? item.labelKm : item.labelEn}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};
