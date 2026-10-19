import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Copy, Check, QrCode, Sparkles, Upload, Image as ImageIcon } from 'lucide-react';
import confetti from 'canvas-confetti';
import { KhmerOrnateDivider, KhmerCornerOrnament } from './GoldOrnament';
import { Language } from '../types';

interface WeddingGiftProps {
  lang: Language;
}

export const WeddingGift: React.FC<WeddingGiftProps> = ({ lang }) => {
  const [activeSide, setActiveSide] = useState<'groom' | 'bride'>('groom');
  const [copiedAccount, setCopiedAccount] = useState(false);
  const [customQrImage, setCustomQrImage] = useState<string | null>(() => {
    return localStorage.getItem('khmer_wedding_custom_qr') || null;
  });

  const groomGift = {
    nameKm: 'ស៊ឹម សុផល',
    nameEn: 'SIM SOPHAL',
    bank: 'Canadia Bank (ធនាគារ កាណាឌីយ៉ា KHQR)',
    accountNumber: '001 889 246 (USD / KHR)',
    note: 'គណនីខាងកូនប្រុស',
  };

  const brideGift = {
    nameKm: 'ម៉ាក់ កញ្ញាដាវីន',
    nameEn: 'MAK KANHADAVIN',
    bank: 'Canadia Bank (ធនាគារ កាណាឌីយ៉ា KHQR)',
    accountNumber: '002 678 912 (USD / KHR)',
    note: 'គណនីខាងកូនស្រី',
  };

  const currentGift = activeSide === 'groom' ? groomGift : brideGift;

  const handleCopyAccount = () => {
    navigator.clipboard.writeText(currentGift.accountNumber.replace(/[^0-9]/g, ''));
    setCopiedAccount(true);
    confetti({
      particleCount: 35,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#D4AF37', '#F5E084', '#0B4F3B', '#FFEAA0'],
    });
    setTimeout(() => setCopiedAccount(false), 2000);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setCustomQrImage(result);
        localStorage.setItem('khmer_wedding_custom_qr', result);
        confetti({
          particleCount: 30,
          spread: 50,
          origin: { y: 0.7 },
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="gift" className="relative w-full py-10 px-4 flex flex-col items-center">
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
            {lang === 'km' ? 'អំណោយអាពាហ៍ពិពាហ៍' : 'WEDDING GIFT'}
          </h2>
          <p className="font-royal text-[10px] tracking-[0.25em] text-[#D4AF37] uppercase mt-1">
            {lang === 'km' ? 'WEDDING GIFT' : 'KHQR BLESSING & CONTRIBUTIONS'}
          </p>
        </div>

        <KhmerOrnateDivider className="my-3.5" />

        {/* Explanation text about KHQR */}
        <p className="font-khmer text-xs text-[#E8DCC0] leading-relaxed text-center px-1 mb-5">
          {lang === 'km'
            ? 'វត្តមានដ៏ថ្លៃថ្លារបស់លោកអ្នកគឺជាកាដូដ៏មានតម្លៃបំផុតសម្រាប់ពួកយើង។ ប្រសិនបើលោកអ្នកមានបំណងផ្ញើចំណងដៃអាពាហ៍ពិពាហ៍ លោកអ្នកអាចស្កេនតាមរយៈ Canadia Bank KHQR ខាងក្រោមបានដោយក្តីរីករាយ។'
            : 'Your esteemed presence is our greatest honor. If you wish to bestow a wedding blessing gift, you may scan the official Canadia Bank KHQR code below.'}
        </p>

        {/* Two buttons: ខាងកូនប្រុស / ខាងកូនស្រី */}
        <div className="flex items-center p-1 rounded-xl bg-[#03241b] border border-[#D4AF37]/40 mb-6">
          <button
            onClick={() => setActiveSide('groom')}
            className={`flex-1 py-2 px-3 rounded-lg text-xs font-khmer font-bold transition-all cursor-pointer ${
              activeSide === 'groom'
                ? 'bg-gradient-to-r from-[#D4AF37] via-[#F5E084] to-[#B8860B] text-[#1a1402] shadow-md'
                : 'text-[#D8CCA9] hover:text-[#FFFDF5]'
            }`}
          >
            {lang === 'km' ? 'ខាងកូនប្រុស' : "Groom's Side"}
          </button>

          <button
            onClick={() => setActiveSide('bride')}
            className={`flex-1 py-2 px-3 rounded-lg text-xs font-khmer font-bold transition-all cursor-pointer ${
              activeSide === 'bride'
                ? 'bg-gradient-to-r from-[#D4AF37] via-[#F5E084] to-[#B8860B] text-[#1a1402] shadow-md'
                : 'text-[#D8CCA9] hover:text-[#FFFDF5]'
            }`}
          >
            {lang === 'km' ? 'ខាងកូនស្រី' : "Bride's Side"}
          </button>
        </div>

        {/* KHQR Card Styled after Canadia Bank KHQR Standard */}
        <div className="relative w-full flex flex-col items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSide}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-[310px]"
            >
              <div className="relative rounded-2xl overflow-hidden bg-white text-slate-900 border-2 border-[#D4AF37] shadow-[0_12px_30px_rgba(0,0,0,0.5)]">
                {/* Red Bakong / Canadia Header Banner */}
                <div className="bg-[#D3121B] px-4 py-2.5 flex items-center justify-between text-white">
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs">
                      ៛
                    </div>
                    <span className="font-royal font-black tracking-wider text-sm">KHQR</span>
                  </div>
                  <span className="text-[11px] font-khmer opacity-95 tracking-wide font-bold">
                    CANADIA BANK · កាណាឌីយ៉ា
                  </span>
                </div>

                {/* Account Name */}
                <div className="pt-3 pb-1 px-4 text-center border-b border-slate-100">
                  <h4 className="font-khmer text-base font-bold text-[#8C5E13]">
                    {currentGift.nameKm}
                  </h4>
                  <p className="font-royal text-[11px] font-semibold text-slate-500 tracking-wider">
                    {currentGift.nameEn}
                  </p>
                </div>

                {/* QR Code Container with Canadia Bank Logo */}
                <div className="p-4 flex flex-col items-center justify-center">
                  <div className="relative p-2.5 bg-white rounded-xl border border-slate-200 shadow-sm flex items-center justify-center">
                    {customQrImage ? (
                      <img
                        src={customQrImage}
                        alt="Canadia Bank KHQR Code"
                        className="w-[190px] h-[190px] object-contain rounded-lg"
                      />
                    ) : (
                      /* Authentic Canadia Bank KHQR SVG matching uploaded 722.jpg */
                      <svg width="190" height="190" viewBox="0 0 190 190" className="text-slate-900">
                        {/* Outer White Card Background */}
                        <rect width="190" height="190" fill="#FFFFFF" />

                        {/* Top Left Locator Eye */}
                        <rect x="12" y="12" width="42" height="42" rx="4" fill="none" stroke="#000000" strokeWidth="6" />
                        <rect x="23" y="23" width="20" height="20" rx="2" fill="#000000" />

                        {/* Top Right Locator Eye */}
                        <rect x="136" y="12" width="42" height="42" rx="4" fill="none" stroke="#000000" strokeWidth="6" />
                        <rect x="147" y="23" width="20" height="20" rx="2" fill="#000000" />

                        {/* Bottom Left Locator Eye */}
                        <rect x="12" y="136" width="42" height="42" rx="4" fill="none" stroke="#000000" strokeWidth="6" />
                        <rect x="23" y="147" width="20" height="20" rx="2" fill="#000000" />

                        {/* Dense Authentic QR Data Modules */}
                        <g fill="#000000">
                          {/* Timing Lines */}
                          <line x1="60" y1="30" x2="130" y2="30" stroke="#000" strokeWidth="4" strokeDasharray="4 4" />
                          <line x1="30" y1="60" x2="30" y2="130" stroke="#000" strokeWidth="4" strokeDasharray="4 4" />

                          {/* Data Blocks top region */}
                          <rect x="62" y="14" width="7" height="7" />
                          <rect x="76" y="14" width="7" height="14" />
                          <rect x="90" y="14" width="14" height="7" />
                          <rect x="111" y="14" width="7" height="7" />
                          <rect x="125" y="14" width="7" height="7" />

                          <rect x="62" y="35" width="14" height="7" />
                          <rect x="83" y="35" width="7" height="14" />
                          <rect x="97" y="35" width="14" height="7" />
                          <rect x="118" y="35" width="14" height="7" />

                          {/* Left data modules */}
                          <rect x="14" y="62" width="7" height="7" />
                          <rect x="28" y="62" width="7" height="14" />
                          <rect x="42" y="62" width="14" height="7" />
                          <rect x="14" y="76" width="14" height="7" />
                          <rect x="35" y="76" width="7" height="14" />
                          <rect x="49" y="76" width="7" height="7" />
                          <rect x="14" y="97" width="7" height="14" />
                          <rect x="28" y="97" width="14" height="7" />
                          <rect x="49" y="97" width="7" height="14" />
                          <rect x="14" y="118" width="14" height="7" />
                          <rect x="35" y="118" width="14" height="7" />

                          {/* Right data modules */}
                          <rect x="136" y="62" width="14" height="7" />
                          <rect x="157" y="62" width="7" height="14" />
                          <rect x="171" y="62" width="7" height="7" />
                          <rect x="143" y="76" width="7" height="14" />
                          <rect x="164" y="76" width="14" height="7" />
                          <rect x="136" y="97" width="14" height="7" />
                          <rect x="157" y="97" width="7" height="14" />
                          <rect x="171" y="97" width="7" height="14" />
                          <rect x="143" y="118" width="7" height="7" />
                          <rect x="157" y="118" width="14" height="7" />

                          {/* Bottom modules */}
                          <rect x="62" y="136" width="7" height="14" />
                          <rect x="76" y="136" width="14" height="7" />
                          <rect x="97" y="136" width="7" height="7" />
                          <rect x="111" y="136" width="14" height="14" />
                          <rect x="136" y="136" width="7" height="7" />
                          <rect x="150" y="136" width="14" height="7" />
                          <rect x="171" y="136" width="7" height="14" />

                          <rect x="62" y="157" width="14" height="7" />
                          <rect x="83" y="157" width="7" height="14" />
                          <rect x="97" y="157" width="14" height="7" />
                          <rect x="118" y="157" width="7" height="14" />
                          <rect x="136" y="157" width="14" height="7" />
                          <rect x="157" y="157" width="7" height="14" />

                          <rect x="62" y="171" width="7" height="7" />
                          <rect x="76" y="171" width="14" height="7" />
                          <rect x="97" y="171" width="7" height="7" />
                          <rect x="111" y="171" width="14" height="7" />
                          <rect x="136" y="171" width="7" height="7" />
                          <rect x="150" y="171" width="14" height="7" />
                          <rect x="171" y="171" width="7" height="7" />

                          {/* Mid quadrants surround logo */}
                          <rect x="62" y="62" width="14" height="7" />
                          <rect x="83" y="62" width="7" height="14" />
                          <rect x="104" y="62" width="14" height="7" />
                          <rect x="125" y="62" width="7" height="14" />
                          <rect x="62" y="118" width="7" height="14" />
                          <rect x="76" y="118" width="14" height="7" />
                          <rect x="97" y="118" width="7" height="14" />
                          <rect x="111" y="118" width="14" height="7" />
                        </g>

                        {/* Central Canadia Bank Emblem (Matching 722.jpg) */}
                        <circle cx="95" cy="95" r="22" fill="#FFFFFF" />
                        <circle cx="95" cy="95" r="19" fill="#D3121B" stroke="#FFFFFF" strokeWidth="2" />
                        
                        {/* Canadia Bank 8-point geometric star/flower icon */}
                        <g transform="translate(95, 95) scale(0.9)">
                          <polygon
                            points="0,-12 3.5,-5 11,-8 6,-1 12,3 4.5,4 7,11 0,6 -7,11 -4.5,4 -12,3 -6,-1 -11,-8 -3.5,-5"
                            fill="#FFFFFF"
                          />
                          <polygon
                            points="0,-5 2.5,-2 4.5,0 2.5,2 0,5 -2.5,2 -4.5,0 -2.5,-2"
                            fill="#D3121B"
                          />
                          <circle cx="0" cy="0" r="1.5" fill="#FFFFFF" />
                        </g>
                      </svg>
                    )}
                  </div>

                  <p className="font-khmer text-[11px] text-slate-500 mt-2 font-medium">
                    {lang === 'km'
                      ? 'ស្កេនជាមួយគ្រប់កម្មវិធីធនាគារ (Bakong / Canadia KHQR)'
                      : 'Scan with any banking app in Cambodia'}
                  </p>

                  {/* Optional File Upload button to swap / reload image */}
                  <label className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 text-[10px] font-khmer cursor-pointer transition-colors border border-slate-300">
                    <Upload className="w-3 h-3 text-slate-500" />
                    <span>{customQrImage ? (lang === 'km' ? 'ប្តូររូបភាព QR ផ្សេង' : 'Change QR Image') : (lang === 'km' ? 'ផ្ទុកឡើងរូប QR ផ្ទាល់ខ្លួន' : 'Upload Custom QR')}</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                </div>

                {/* Account Number Box */}
                <div className="bg-slate-50 border-t border-slate-200 p-3 flex items-center justify-between">
                  <div className="text-left">
                    <span className="text-[10px] text-slate-500 font-khmer block font-medium">
                      {currentGift.bank}
                    </span>
                    <span className="font-mono text-xs font-bold text-slate-800 tracking-wider">
                      {currentGift.accountNumber}
                    </span>
                  </div>
                  <button
                    onClick={handleCopyAccount}
                    className="py-1.5 px-3 rounded-lg bg-[#0B4F3B] hover:bg-[#0E5C46] text-white text-xs font-khmer font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    {copiedAccount ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedAccount ? (lang === 'km' ? 'បានចម្លង' : 'Copied') : (lang === 'km' ? 'ចម្លងលេខកុង' : 'Copy')}</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};
