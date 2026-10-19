import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Clock, MapPin, ExternalLink, Copy, Check } from 'lucide-react';
import { KhmerOrnateDivider, KhmerCornerOrnament } from './GoldOrnament';
import { Language } from '../types';

interface TheEssentialsProps {
  lang: Language;
}

export const TheEssentials: React.FC<TheEssentialsProps> = ({ lang }) => {
  const [copied, setCopied] = useState(false);

  const venueAddress = 'ភូមិស្នោរ សង្កាត់រកាក្នុង ក្រុងដូនកែវ ខេត្តតាកែវ (Google Map: XQHP+HM5 Doun Kaev)';

  const handleCopy = () => {
    navigator.clipboard.writeText(venueAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const openGoogleMaps = () => {
    const query = encodeURIComponent('XQHP+HM5 Doun Kaev');
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank', 'noopener,noreferrer');
  };

  const dressCodes = [
    { nameKm: 'បៃតងចាស់', nameEn: 'Emerald Green', color: '#0B4F3B', border: '#1C7C5E' },
    { nameKm: 'ពណ៌ក្រែម', nameEn: 'Cream', color: '#F4EBD9', border: '#E2D5BA' },
    { nameKm: 'ពណ៌មាស', nameEn: 'Gold', color: '#D4AF37', border: '#F5E084' },
    { nameKm: 'ពណ៌ទឹកក្រូចឥដ្ឋ', nameEn: 'Terracotta', color: '#C46D4E', border: '#DE8B6D' },
  ];

  return (
    <section id="essentials" className="relative w-full py-10 px-4 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-[420px] rounded-2xl p-6 emerald-card relative shadow-2xl overflow-hidden"
      >
        <KhmerCornerOrnament position="top-left" size={26} />
        <KhmerCornerOrnament position="top-right" size={26} />
        <KhmerCornerOrnament position="bottom-left" size={26} />
        <KhmerCornerOrnament position="bottom-right" size={26} />

        {/* Section Header */}
        <div className="text-center pt-2">
          <h2 className="font-khmer-title text-xl sm:text-2xl text-[#FFF3C4] drop-shadow">
            {lang === 'km' ? 'ព័ត៌មានសំខាន់' : 'THE ESSENTIALS'}
          </h2>
          <p className="font-royal text-[10px] tracking-[0.25em] text-[#D4AF37] uppercase mt-1">
            {lang === 'km' ? 'THE ESSENTIALS' : 'DATE, TIME & VENUE'}
          </p>
        </div>

        <KhmerOrnateDivider className="my-3.5" />

        {/* Date & Time */}
        <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#03241b]/80 border border-[#D4AF37]/30 mb-3.5">
          <div className="w-10 h-10 rounded-full bg-[#084230] border border-[#D4AF37]/60 flex items-center justify-center shrink-0 text-[#FFE58F]">
            <Clock className="w-5 h-5" />
          </div>
          <div className="flex-1 text-left">
            <h3 className="font-khmer text-sm font-bold text-[#FFF3C4]">
              {lang === 'km' ? 'កាលបរិច្ឆេទ & ពេលវេលា' : 'Date & Time'}
            </h3>
            <p className="font-khmer text-xs text-[#E8DCC0] mt-0.5">
              {lang === 'km' ? 'ថ្ងៃអាទិត្យ ទី១៤ ខែមីនា ឆ្នាំ២០២៧' : 'Sunday, 14 March 2027'}
            </p>
            <div className="mt-1.5 flex flex-col gap-1 text-[11px] font-khmer text-[#D4AF37]">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFE58F]" />
                {lang === 'km' ? 'ពិធីពេលព្រឹក: ០៧:០០ ព្រឹក - ១១:៣០ ព្រឹក' : 'Morning Ceremony: 07:00 AM - 11:30 AM'}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFE58F]" />
                {lang === 'km' ? 'ពិសារភោជនាហារពេលល្ងាច: ០៥:០០ ល្ងាច' : 'Evening Reception: 05:00 PM onwards'}
              </span>
            </div>
          </div>
        </div>

        {/* Location & Map Preview */}
        <div className="p-3.5 rounded-xl bg-[#03241b]/80 border border-[#D4AF37]/30 mb-4 text-left">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-full bg-[#084230] border border-[#D4AF37]/60 flex items-center justify-center shrink-0 text-[#FFE58F]">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <h3 className="font-khmer text-sm font-bold text-[#FFF3C4]">
                {lang === 'km' ? 'ទីតាំងរៀបចំពិធី' : 'Wedding Location'}
              </h3>
              <p className="font-khmer text-xs text-[#FFFDF5] font-semibold mt-0.5 leading-snug">
                {lang === 'km'
                  ? 'ភូមិស្នោរ សង្កាត់រកាក្នុង ក្រុងដូនកែវ ខេត្តតាកែវ'
                  : 'Phum Snor, Sangkat Roka Knong, Krong Doun Kaev, Takeo Province'}
              </p>
              <p className="font-mono text-[11px] text-[#FFE58F] mt-1 flex items-center gap-1">
                <span className="px-1.5 py-0.5 rounded bg-[#063325] border border-[#D4AF37]/40">
                  Google Map: XQHP+HM5 Doun Kaev
                </span>
              </p>
            </div>
          </div>

          {/* Stylized Map Preview Graphic */}
          <div className="mt-3 relative h-28 w-full rounded-lg overflow-hidden border border-[#D4AF37]/40 bg-[#021811]">
            {/* Map visual representation */}
            <div className="absolute inset-0 bg-[#05261d] opacity-90">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="gridMap" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(212,175,55,0.12)" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#gridMap)" />
                {/* Major routes and Stung Takeo canal curves */}
                <path d="M 0 55 Q 160 30 420 65" stroke="rgba(212,175,55,0.45)" strokeWidth="4" fill="none" />
                <path d="M 140 0 L 155 120" stroke="rgba(212,175,55,0.35)" strokeWidth="3" fill="none" />
                <path d="M 270 0 Q 240 60 260 120" stroke="rgba(212,175,55,0.35)" strokeWidth="3" fill="none" />
              </svg>
            </div>

            {/* Pin in center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="px-2 py-0.5 rounded bg-[#0B4F3B] border border-[#D4AF37] text-[10px] text-[#FFF3C4] font-khmer shadow mb-1 whitespace-nowrap">
                ភូមិស្នោរ · XQHP+HM5 Doun Kaev
              </div>
              <div className="relative flex items-center justify-center">
                <span className="w-4 h-4 rounded-full bg-[#D4AF37] animate-ping absolute opacity-70" />
                <div className="w-5 h-5 rounded-full bg-[#D4AF37] border-2 border-white flex items-center justify-center shadow">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#063325]" />
                </div>
              </div>
            </div>
          </div>

          {/* Action buttons: Open Maps & Copy */}
          <div className="mt-3 flex items-center gap-2">
            <button
              onClick={openGoogleMaps}
              className="flex-1 py-2 px-3 rounded-lg bg-[#0B4F3B] hover:bg-[#0E5C46] border border-[#D4AF37]/50 text-xs font-khmer text-[#FFE58F] font-medium flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>{lang === 'km' ? 'បើកផែនទី Google' : 'Open in Google Maps'}</span>
            </button>
            <button
              onClick={handleCopy}
              className="py-2 px-3 rounded-lg bg-[#04241B] hover:bg-[#073627] border border-[#D4AF37]/40 text-xs font-khmer text-[#E5C365] flex items-center justify-center gap-1 transition-colors cursor-pointer"
              title="Copy Address"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? (lang === 'km' ? 'បានចម្លង' : 'Copied') : (lang === 'km' ? 'ចម្លង' : 'Copy')}</span>
            </button>
          </div>
        </div>

        {/* Dress Code Section with 4 Color Circles */}
        <div className="p-3.5 rounded-xl bg-[#03241b]/80 border border-[#D4AF37]/30 text-center">
          <h3 className="font-khmer text-xs font-bold text-[#E5C365] tracking-wide uppercase">
            {lang === 'km' ? 'សម្លៀកបំពាក់ចូលរួម (Dress Code)' : 'WEDDING DRESS CODE'}
          </h3>
          <p className="font-khmer text-[11px] text-[#D8CCA9] mt-0.5">
            {lang === 'km'
              ? 'សូមចូលរួមក្នុងពណ៌ប្រពៃណី និងសម្លៀកបំពាក់ខាងក្រោម:'
              : 'Suggested palette for traditional Khmer wedding attire:'}
          </p>

          <div className="grid grid-cols-4 gap-2 mt-3.5">
            {dressCodes.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div
                  className="w-10 h-10 rounded-full shadow-md transition-transform hover:scale-110"
                  style={{
                    backgroundColor: item.color,
                    border: `2px solid ${item.border}`,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
                  }}
                />
                <span className="font-khmer text-[10px] text-[#FFFDF5] mt-1.5 font-medium leading-tight">
                  {lang === 'km' ? item.nameKm : item.nameEn}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
