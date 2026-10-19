import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X, Heart, Eye } from 'lucide-react';
import { KhmerOrnateDivider, KhmerCornerOrnament } from './GoldOrnament';
import { Language } from '../types';

interface OurMomentsProps {
  lang: Language;
}

export const OurMoments: React.FC<OurMomentsProps> = ({ lang }) => {
  const [activePhoto, setActivePhoto] = useState<string | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const photos = [
    {
      src: '/src/assets/images/khmer_wedding_couple_main_1792411431628.jpg',
      titleKm: 'សម្លៀកបំពាក់មង្គលការប្រពៃណីខ្មែរ',
      titleEn: 'Royal Khmer Traditional Attire',
    },
    {
      src: '/src/assets/images/khmer_wedding_ceremony_1792411447782.jpg',
      titleKm: 'ពិធីកាត់សក់បង្កក់សិរី និងប្រសិទ្ធពរជ័យ',
      titleEn: 'Sacred Hair-Cutting Blessing Ceremony',
    },
    {
      src: '/src/assets/images/khmer_couple_prewedding_1792411486018.jpg',
      titleKm: 'រូបថត Pre-Wedding នៅប្រាសាទបុរាណ',
      titleEn: 'Romantic Pre-Wedding at Ancient Temple',
    },
    {
      src: '/src/assets/images/khmer_jasmine_garland_1792411469754.jpg',
      titleKm: 'កម្រងផ្កាម្លិះមង្គលប្រពៃណី',
      titleEn: 'Traditional Phka Malis Jasmine Garland',
    },
    {
      src: '/src/assets/images/khmer_wedding_couple_main_1792411431628.jpg',
      titleKm: 'ស្នាមញញឹមនៃក្តីស្រលាញ់ដ៏អស់កល្ប',
      titleEn: 'Timeless Smiles of Everlasting Love',
    },
    {
      src: '/src/assets/images/khmer_couple_prewedding_1792411486018.jpg',
      titleKm: 'ការសន្យានៅចំពោះមុខធម្មជាតិ និងចាស់ទុំ',
      titleEn: 'Eternal Vows & Auspicious Promises',
    },
  ];

  return (
    <section id="moments" className="relative w-full py-10 px-4 flex flex-col items-center">
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
            {lang === 'km' ? 'គ្រាដ៏ស្រស់ស្អាតរបស់យើង' : 'OUR MOMENTS'}
          </h2>
          <p className="font-royal text-[10px] tracking-[0.25em] text-[#D4AF37] uppercase mt-1">
            {lang === 'km' ? 'OUR MOMENTS' : 'CINEMATIC TEASER & PHOTO GALLERY'}
          </p>
        </div>

        <KhmerOrnateDivider className="my-3.5" />

        {/* Large Video Thumbnail of the couple with play button */}
        <div className="relative w-full aspect-video rounded-xl overflow-hidden border-2 border-[#D4AF37]/60 shadow-[0_8px_25px_rgba(0,0,0,0.6)] mb-6 group cursor-pointer">
          <img
            src="/src/assets/images/khmer_couple_prewedding_1792411486018.jpg"
            alt="Wedding Highlights Video Teaser"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#021811]/90 via-[#021811]/30 to-transparent" />

          {/* Center Play Button with Pulsing Gold Rings */}
          <button
            onClick={() => setIsVideoModalOpen(true)}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-gradient-to-br from-[#FFF3C4] via-[#D4AF37] to-[#8C5E13] p-1 flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.7)] group-hover:scale-110 transition-transform cursor-pointer"
            aria-label="Play Wedding Teaser Video"
          >
            <div className="w-full h-full rounded-full bg-[#04241B] flex items-center justify-center pl-1 text-[#FFF3C4]">
              <Play className="w-6 h-6 fill-current text-[#FFE58F]" />
            </div>
          </button>

          {/* Bottom Video Badge */}
          <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-xs text-[#FFFDF5]">
            <span className="font-khmer font-semibold drop-shadow flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              {lang === 'km' ? 'វីដេអូអនុស្សាវរីយ៍អាពាហ៍ពិពាហ៍' : 'Wedding Highlights Teaser'}
            </span>
            <span className="font-royal text-[10px] tracking-wider text-[#E5C365]">HD 4K</span>
          </div>
        </div>

        {/* Grid of 6 photo frames in arched gold frames */}
        <div className="grid grid-cols-2 gap-3">
          {photos.map((photo, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -3 }}
              onClick={() => setActivePhoto(photo.src)}
              className="relative aspect-[3/4] rounded-t-full rounded-b-lg p-[2px] bg-gradient-to-b from-[#FFF2A3] via-[#D4AF37] to-[#8C5E13] shadow-md cursor-pointer group overflow-hidden"
            >
              <div className="w-full h-full rounded-t-full rounded-b-lg overflow-hidden relative bg-[#021811]">
                <img
                  src={photo.src}
                  alt={photo.titleKm}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#021811]/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                
                {/* Hover overlay hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 rounded-full bg-[#063325]/85 border border-[#D4AF37] flex items-center justify-center text-[#FFE58F]">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>

                {/* Micro caption */}
                <div className="absolute bottom-1.5 left-1.5 right-1.5 text-center">
                  <p className="font-khmer text-[10px] text-[#FFFDF5] font-medium truncate drop-shadow">
                    {lang === 'km' ? photo.titleKm : photo.titleEn}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Lightbox Photo Modal */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePhoto(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-sm w-full rounded-2xl overflow-hidden border-2 border-[#D4AF37] bg-[#03241b] shadow-2xl p-2"
            >
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/60 border border-[#D4AF37] flex items-center justify-center text-[#FFF3C4] hover:bg-black"
              >
                <X className="w-4 h-4" />
              </button>
              <img
                src={activePhoto}
                alt="Enlarged wedding moment"
                referrerPolicy="no-referrer"
                className="w-full max-h-[75vh] object-contain rounded-xl"
              />
              <div className="p-3 text-center">
                <p className="font-khmer text-sm text-[#FFE58F] font-semibold">
                  ស៊ឹម សុផល &amp; ម៉ាក់ កញ្ញាដាវីន · គ្រាដ៏ស្រស់ស្អាត
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Teaser Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoModalOpen(false)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-md w-full rounded-2xl overflow-hidden border-2 border-[#D4AF37] bg-[#03241b] shadow-2xl p-3"
            >
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/60 border border-[#D4AF37] flex items-center justify-center text-[#FFF3C4] hover:bg-black"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="relative aspect-video rounded-xl overflow-hidden bg-black flex flex-col items-center justify-center text-center p-4 border border-[#D4AF37]/40">
                <img
                  src="/src/assets/images/khmer_wedding_ceremony_1792411447782.jpg"
                  alt="Video background preview"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover opacity-40 filter blur-[1px]"
                />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-[#D4AF37]/90 flex items-center justify-center text-[#063325] shadow-lg mb-2">
                    <Heart className="w-6 h-6 fill-current animate-pulse text-[#881337]" />
                  </div>
                  <h4 className="font-khmer-title text-base text-[#FFF3C4]">
                    រឿងរ៉ាវនៃសេចក្តីស្រឡាញ់
                  </h4>
                  <p className="font-cursive text-xl text-[#F5E084] mt-0.5">
                    Sem Sophal &amp; Mak Kanhadavin Wedding Story
                  </p>
                  <p className="font-khmer text-xs text-[#E8DCC0] mt-2 max-w-xs">
                    {lang === 'km'
                      ? 'ខ្សែវីដេអូពេញលេញនឹងចាក់បញ្ចាំងក្នុងរាត្រីមង្គលការ ថ្ងៃទី ១៤ ខែមីនា ឆ្នាំ ២០២៧'
                      : 'Full cinematic highlights premiering on our wedding night, 14 March 2027'}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
