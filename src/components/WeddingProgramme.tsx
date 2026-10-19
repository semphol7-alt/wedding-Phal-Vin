import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { KhmerOrnateDivider, KhmerCornerOrnament } from './GoldOrnament';
import { Language, ProgrammeItem } from '../types';
import { Sun, Moon } from 'lucide-react';

interface WeddingProgrammeProps {
  lang: Language;
}

export const WeddingProgramme: React.FC<WeddingProgrammeProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<'morning' | 'evening'>('morning');

  const morningProgramme: ProgrammeItem[] = [
    {
      time: '០៧:០០ ព្រឹក',
      timeEn: '07:00 AM',
      title: 'ពិធីហែជំនូនចូលរោងជ័យ',
      titleEn: 'Hai Chomnoun Procession',
      desc: 'ក្បួនហែជំនូនផ្កាស្លា និងផ្លែឈើមង្គល ចូលរោងពិធី',
      descEn: 'Traditional procession of fruit and blessing trays to the wedding hall',
    },
    {
      time: '០៨:០០ ព្រឹក',
      timeEn: '08:00 AM',
      title: 'ពិធីពិសាស្លាកំណត់ និងរាប់ផ្លែឈើ',
      titleEn: 'Betel Presentation & Dowry Ritual',
      desc: 'ពិធីសែនជំនូន និងពិសារស្លាកំណត់តាមប្រពៃណីខ្មែរ',
      descEn: 'Traditional betel sharing, dowry presentation and elders blessings',
    },
    {
      time: '០៩:០០ ព្រឹក',
      timeEn: '09:00 AM',
      title: 'ពិធីកាត់សក់បង្កក់សិរី',
      titleEn: 'Gaat Sah (Hair Cutting Blessing)',
      desc: 'ពិធីជម្រះឧបទ្រពចង្រៃ និងប្រសិទ្ធពរជ័យសិរីសួស្តីដល់គូស្វាមីភរិយាថ្មី',
      descEn: 'Cleansing ritual and haircutting blessings for eternal prosperity',
    },
    {
      time: '១០:១៥ ព្រឹក',
      timeEn: '10:15 AM',
      title: 'ពិធីបង្វិលពពិល និងសំពះសែនចងដៃ',
      titleEn: 'Bangvel Popil Candle & Knot Ceremony',
      desc: 'ពិធីបង្វិលទៀនពពិល ៧ ជុំ និងចងអំបោះក្រហមដៃជូនពរ',
      descEn: 'Sacred candle passing circle and tying of red blessing strings',
    },
    {
      time: '១១:៣០ ព្រឹក',
      timeEn: '11:30 AM',
      title: 'ពិសារអាហារថ្ងៃត្រង់ជុំគ្នាសិរីមង្គល',
      titleEn: 'Auspicious Family Lunch',
      desc: 'ពិសារអាហារថ្ងៃត្រង់ និងទទួលពរជ័យពីចាស់ទុំ',
      descEn: 'Celebration lunch with families and respected elders',
    },
  ];

  const eveningProgramme: ProgrammeItem[] = [
    {
      time: '០៥:០០ ល្ងាច',
      timeEn: '05:00 PM',
      title: 'ទទួលភ្ញៀវកិត្តិយស & ថតរូបអនុស្សាវរីយ៍',
      titleEn: 'Guest Reception & Photo Moments',
      desc: 'ទទួលបដិសណ្ឋារកិច្ច និងថតរូបអនុស្សាវរីយ៍ជាមួយកូនកំលោះកូនក្រមុំ',
      descEn: 'Welcome cocktail reception and memorial photography with couple',
    },
    {
      time: '០៦:៣០ ល្ងាច',
      timeEn: '06:30 PM',
      title: 'ពិធីកាត់នំអាពាហ៍ពិពាហ៍ & ថ្លែងអំណរគុណ',
      titleEn: 'Wedding Cake Cutting & Speeches',
      desc: 'កាត់នំមង្គលការ និងសេចក្តីថ្លែងអំណរគុណពីគូស្វាមីភរិយាថ្មី',
      descEn: 'Symbolic cake cutting ceremony and heartfelt gratitude speech',
    },
    {
      time: '០៧:០០ ល្ងាច',
      timeEn: '07:00 PM',
      title: 'ពិសារភោជនាហារ និងតន្ត្រីសម័យកំដរ',
      titleEn: 'Grand Banquet Dinner & Live Band',
      desc: 'ពិសារអាហារពេលល្ងាច និងរីករាយជាមួយបទភ្លេងពិរោះរណ្តំ',
      descEn: 'Luxury banquet dinner accompanied by live musical orchestra',
    },
    {
      time: '០៨:៣០ យប់',
      timeEn: '08:30 PM',
      title: 'ពិធីរាំកម្សាន្តបើកវង់មង្គល',
      titleEn: 'Traditional & Dance Celebration',
      desc: 'រាំបើកវង់មង្គល និងរាំកម្សាន្តសប្បាយរីករាយរហូតដល់ចប់កម្មវិធី',
      descEn: 'First dance and joy-filled dance party celebrating the union',
    },
  ];

  const currentProgramme = activeTab === 'morning' ? morningProgramme : eveningProgramme;

  return (
    <section id="programme" className="relative w-full py-10 px-4 flex flex-col items-center">
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
            {lang === 'km' ? 'កម្មវិធីអាពាហ៍ពិពាហ៍' : 'WEDDING PROGRAMME'}
          </h2>
          <p className="font-royal text-[10px] tracking-[0.25em] text-[#D4AF37] uppercase mt-1">
            {lang === 'km' ? 'WEDDING PROGRAMME' : 'SCHEDULE OF CEREMONIES'}
          </p>
        </div>

        <KhmerOrnateDivider className="my-3.5" />

        {/* Two Tabs: ពិធីពេលព្រឹក / ពិធីពេលល្ងាច */}
        <div className="flex items-center p-1 rounded-xl bg-[#03241b] border border-[#D4AF37]/40 mb-6">
          <button
            onClick={() => setActiveTab('morning')}
            className={`flex-1 py-2 px-3 rounded-lg text-xs font-khmer font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'morning'
                ? 'bg-gradient-to-r from-[#D4AF37] via-[#F5E084] to-[#B8860B] text-[#1a1402] shadow-md'
                : 'text-[#D8CCA9] hover:text-[#FFFDF5]'
            }`}
          >
            <Sun className={`w-3.5 h-3.5 ${activeTab === 'morning' ? 'text-[#8C5E13]' : 'text-[#D4AF37]'}`} />
            <span>{lang === 'km' ? 'ពិធីពេលព្រឹក' : 'Morning Ceremony'}</span>
          </button>

          <button
            onClick={() => setActiveTab('evening')}
            className={`flex-1 py-2 px-3 rounded-lg text-xs font-khmer font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'evening'
                ? 'bg-gradient-to-r from-[#D4AF37] via-[#F5E084] to-[#B8860B] text-[#1a1402] shadow-md'
                : 'text-[#D8CCA9] hover:text-[#FFFDF5]'
            }`}
          >
            <Moon className={`w-3.5 h-3.5 ${activeTab === 'evening' ? 'text-[#8C5E13]' : 'text-[#D4AF37]'}`} />
            <span>{lang === 'km' ? 'ពិធីពេលល្ងាច' : 'Evening Reception'}</span>
          </button>
        </div>

        {/* Timeline list with gold diamond markers */}
        <div className="relative pl-6 space-y-5 text-left border-l-2 border-[#D4AF37]/35 ml-3 my-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.3 }}
              className="space-y-5"
            >
              {currentProgramme.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Gold Diamond Marker on timeline */}
                  <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 bg-gradient-to-br from-[#FFF3C4] to-[#B8860B] rotate-45 border border-[#FFF8DC] shadow-[0_0_8px_rgba(212,175,55,0.6)] flex items-center justify-center">
                    <div className="w-1 h-1 bg-[#063325] rotate-45" />
                  </div>

                  {/* Time Badge */}
                  <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#084230] border border-[#D4AF37]/50 text-[11px] font-khmer text-[#FFE58F] font-semibold">
                    {lang === 'km' ? item.time : item.timeEn}
                  </div>

                  {/* Event Title */}
                  <h4 className="font-khmer text-sm font-bold text-[#FFFDF5] mt-1.5 leading-snug">
                    {lang === 'km' ? item.title : item.titleEn}
                  </h4>

                  {/* Event Description */}
                  <p className="font-khmer text-xs text-[#D8CCA9] mt-0.5 leading-relaxed">
                    {lang === 'km' ? item.desc : item.descEn}
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};
