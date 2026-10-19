import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Send, Heart, CheckCircle2, XCircle, Users } from 'lucide-react';
import confetti from 'canvas-confetti';
import { KhmerOrnateDivider, KhmerCornerOrnament } from './GoldOrnament';
import { Language, Wish } from '../types';

interface RSVPAndWishesProps {
  lang: Language;
}

const INITIAL_WISHES: Wish[] = [
  {
    id: '1',
    name: 'លោក ឧកញ៉ា ចាន់ សុខា & ភរិយា',
    attending: true,
    guestsCount: 2,
    message: 'សូមជូនពរឱ្យប្អូនទាំងពីរស្រឡាញ់គ្នារហូតដល់ចាស់កោងខ្នង រកស៊ីមានបាន ត្រជាក់ត្រជុំ និងសុភមង្គលជារៀងរហូត!',
    createdAt: '១ ម៉ោងមុន',
    relation: 'មិត្តភក្តិគ្រួសារ',
  },
  {
    id: '2',
    name: 'Dara & Sophea Chan',
    attending: true,
    guestsCount: 2,
    message: 'Heartfelt congratulations to Sophal and Davin! May your marriage be filled with endless joy, laughter, and timeless blessings!',
    createdAt: '២ ម៉ោងមុន',
    relation: 'Groom’s Colleague',
  },
  {
    id: '3',
    name: 'អ្នកមីង គឹម ឡេង',
    attending: true,
    guestsCount: 1,
    message: 'សូមទេវតា និងវត្ថុស័ក្តិសិទ្ធិក្នុងលោក តាមជួយបីបាច់ថែរក្សាគូស្វាមីភរិយាថ្មី ស៊ឹម សុផល និងម៉ាក់ កញ្ញាដាវីន ឱ្យជួបតែសិរីសួស្តី ជ័យមង្គល វិបុលសុខគ្រប់ប្រការ!',
    createdAt: 'ម្សិលមិញ',
    relation: 'សាច់ញាតិខាងកូនស្រី',
  },
];

export const RSVPAndWishes: React.FC<RSVPAndWishesProps> = ({ lang }) => {
  const [wishes, setWishes] = useState<Wish[]>(() => {
    const saved = localStorage.getItem('khmer_wedding_wishes');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return INITIAL_WISHES;
      }
    }
    return INITIAL_WISHES;
  });

  const [name, setName] = useState('');
  const [attending, setAttending] = useState<'yes' | 'no'>('yes');
  const [guestsCount, setGuestsCount] = useState('2');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    localStorage.setItem('khmer_wedding_wishes', JSON.stringify(wishes));
  }, [wishes]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newWish: Wish = {
      id: Date.now().toString(),
      name: name.trim(),
      attending: attending === 'yes',
      guestsCount: attending === 'yes' ? parseInt(guestsCount, 10) || 1 : 0,
      message: message.trim(),
      createdAt: lang === 'km' ? 'ទើបតែផ្ញើ' : 'Just now',
    };

    setWishes([newWish, ...wishes]);
    setSubmitted(true);

    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#D4AF37', '#FFF3C4', '#0B4F3B', '#FFD700', '#F43F5E'],
    });

    setName('');
    setMessage('');
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="rsvp" className="relative w-full py-10 px-4 flex flex-col items-center">
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
            {lang === 'km' ? 'សូមផ្ញើការឆ្លើយតប & ពរជ័យ' : 'RSVP & WISHES'}
          </h2>
          <p className="font-royal text-[10px] tracking-[0.25em] text-[#D4AF37] uppercase mt-1">
            {lang === 'km' ? 'RSVP & WISHES' : 'BLESSINGS FOR SOPHAL & MAK KANHADAVIN'}
          </p>
        </div>

        <KhmerOrnateDivider className="my-3.5" />

        {/* RSVP Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          {/* Guest Name */}
          <div>
            <label className="block font-khmer text-xs text-[#FFE58F] font-semibold mb-1">
              {lang === 'km' ? 'ឈ្មោះភ្ញៀវកិត្តិយស *' : 'Your Full Name *'}
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={lang === 'km' ? 'ឧ. លោក ឈុន វណ្ណា' : 'e.g., Sophal Vanna'}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#03241b] border border-[#D4AF37]/50 text-[#FFFDF5] placeholder-[#7E9689] focus:outline-none focus:border-[#F5E084] font-khmer text-xs shadow-inner"
            />
          </div>

          {/* Attending / Not Attending Radio */}
          <div>
            <label className="block font-khmer text-xs text-[#FFE58F] font-semibold mb-1.5">
              {lang === 'km' ? 'ការឆ្លើយតបចូលរួម *' : 'Will you attend? *'}
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setAttending('yes')}
                className={`py-2 px-3 rounded-xl border text-xs font-khmer font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  attending === 'yes'
                    ? 'bg-[#0B4F3B] border-[#F5E084] text-[#FFF3C4] shadow-[0_0_10px_rgba(212,175,55,0.3)]'
                    : 'bg-[#03241b] border-[#D4AF37]/30 text-[#A69E89]'
                }`}
              >
                <CheckCircle2 className={`w-3.5 h-3.5 ${attending === 'yes' ? 'text-[#FFE58F]' : 'opacity-40'}`} />
                <span>{lang === 'km' ? 'នឹងចូលរួម' : 'Will Attend'}</span>
              </button>

              <button
                type="button"
                onClick={() => setAttending('no')}
                className={`py-2 px-3 rounded-xl border text-xs font-khmer font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  attending === 'no'
                    ? 'bg-[#3b1219] border-rose-400 text-rose-200 shadow-[0_0_10px_rgba(244,63,94,0.3)]'
                    : 'bg-[#03241b] border-[#D4AF37]/30 text-[#A69E89]'
                }`}
              >
                <XCircle className={`w-3.5 h-3.5 ${attending === 'no' ? 'text-rose-300' : 'opacity-40'}`} />
                <span>{lang === 'km' ? 'មិនអាចចូលរួម' : 'Cannot Attend'}</span>
              </button>
            </div>
          </div>

          {/* Number of Guests (if attending) */}
          {attending === 'yes' && (
            <div>
              <label className="block font-khmer text-xs text-[#FFE58F] font-semibold mb-1">
                {lang === 'km' ? 'ចំនួនភ្ញៀវចូលរួម' : 'Number of Guests'}
              </label>
              <div className="relative">
                <select
                  value={guestsCount}
                  onChange={(e) => setGuestsCount(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#03241b] border border-[#D4AF37]/50 text-[#FFFDF5] focus:outline-none focus:border-[#F5E084] font-khmer text-xs shadow-inner appearance-none pr-8 cursor-pointer"
                >
                  <option value="1" className="bg-[#03241b]">1 {lang === 'km' ? 'នាក់' : 'person'}</option>
                  <option value="2" className="bg-[#03241b]">2 {lang === 'km' ? 'នាក់' : 'people'}</option>
                  <option value="3" className="bg-[#03241b]">3 {lang === 'km' ? 'នាក់' : 'people'}</option>
                  <option value="4" className="bg-[#03241b]">4+ {lang === 'km' ? 'នាក់' : 'people'}</option>
                </select>
                <Users className="w-4 h-4 text-[#D4AF37] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          )}

          {/* Wishes Message Box */}
          <div>
            <label className="block font-khmer text-xs text-[#FFE58F] font-semibold mb-1">
              {lang === 'km' ? 'សេចក្តីជូនពរមង្គលការ *' : 'Your Warm Wishes for the Couple *'}
            </label>
            <textarea
              required
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={
                lang === 'km'
                  ? 'សូមសរសេរពរជ័យមង្គលជូនកូនកំលោះ និងកូនក្រមុំ...'
                  : 'Write your blessings for Sophal & Davin...'
              }
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#03241b] border border-[#D4AF37]/50 text-[#FFFDF5] placeholder-[#7E9689] focus:outline-none focus:border-[#F5E084] font-khmer text-xs shadow-inner resize-none"
            />
          </div>

          {/* Big Gold Submit Button */}
          <button
            type="submit"
            className="w-full py-3.5 rounded-full btn-gold font-khmer font-bold text-base text-[#1a1402] flex items-center justify-center gap-2 shadow-xl cursor-pointer mt-3"
          >
            <Send className="w-4 h-4 text-[#8C5E13]" />
            <span>
              {lang === 'km' ? 'ផ្ញើការឆ្លើយតប & ពរជ័យ' : 'Send RSVP & Wishes'}
            </span>
          </button>

          {submitted && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center font-khmer text-xs text-emerald-300 font-semibold mt-2"
            >
              {lang === 'km'
                ? 'សូមអរគុណ! ការឆ្លើយតប និងពរជ័យត្រូវបានផ្ញើរួចរាល់។'
                : 'Thank you! Your RSVP and blessings have been sent.'}
            </motion.p>
          )}
        </form>

        {/* Guest Wishes Wall Header */}
        <div className="mt-8 pt-5 border-t border-[#D4AF37]/35 text-left">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-khmer text-xs font-bold text-[#E5C365] tracking-wide uppercase flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 text-rose-400 fill-current" />
              <span>{lang === 'km' ? 'ពរជ័យពីភ្ញៀវកិត្តិយស' : 'WISHES FROM ESTEEMED GUESTS'}</span>
            </h3>
            <span className="text-[11px] font-mono text-[#D4AF37]/80">
              {wishes.length} {lang === 'km' ? 'សារ' : 'wishes'}
            </span>
          </div>

          {/* List of sample & real wishes */}
          <div className="space-y-3 max-h-[290px] overflow-y-auto pr-1">
            {wishes.map((item) => (
              <div
                key={item.id}
                className="p-3 rounded-xl bg-[#03241b]/90 border border-[#D4AF37]/25 text-left shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="font-khmer text-xs font-bold text-[#FFF3C4]">
                    {item.name}
                  </span>
                  <span className="text-[10px] text-[#A69E89] font-khmer">
                    {item.createdAt}
                  </span>
                </div>
                <p className="font-khmer text-xs text-[#E8DCC0] mt-1.5 leading-relaxed">
                  “{item.message}”
                </p>
                {item.relation && (
                  <span className="inline-block mt-1.5 text-[10px] text-[#D4AF37] font-khmer opacity-90">
                    · {item.relation}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
