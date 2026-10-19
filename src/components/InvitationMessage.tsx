import React from 'react';
import { motion } from 'motion/react';
import { KhmerOrnateDivider, KhmerCornerOrnament } from './GoldOrnament';
import { Language } from '../types';

interface InvitationMessageProps {
  lang: Language;
}

export const InvitationMessage: React.FC<InvitationMessageProps> = ({ lang }) => {
  return (
    <section id="invitation" className="relative w-full py-10 px-4 flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-[420px] relative rounded-2xl p-6 sm:p-7 emerald-card shadow-2xl overflow-hidden"
      >
        {/* Ornate Gold Corners */}
        <KhmerCornerOrnament position="top-left" size={30} />
        <KhmerCornerOrnament position="top-right" size={30} />
        <KhmerCornerOrnament position="bottom-left" size={30} />
        <KhmerCornerOrnament position="bottom-right" size={30} />

        {/* Header Title */}
        <div className="pt-2">
          <h2 className="font-khmer-title text-xl sm:text-2xl text-[#FFF3C4] drop-shadow-md">
            {lang === 'km' ? 'សូមអញ្ជើញ' : 'YOU ARE CORDIALLY INVITED'}
          </h2>
          <p className="font-royal text-[10px] tracking-[0.25em] text-[#D4AF37] uppercase mt-1">
            {lang === 'km' ? 'YOU ARE CORDIALLY INVITED' : 'WEDDING CEREMONY & RECEPTION'}
          </p>
        </div>

        <KhmerOrnateDivider className="my-3.5" />

        {/* Parents Section - Two columns */}
        <div className="grid grid-cols-2 gap-3 my-4 text-center">
          {/* Groom's Parents */}
          <div className="p-3 rounded-xl bg-[#03241b]/80 border border-[#D4AF37]/30 flex flex-col items-center">
            <span className="font-khmer text-xs text-[#E5C365] font-semibold tracking-wide">
              {lang === 'km' ? 'ខាងកូនប្រុស' : "Groom's Parents"}
            </span>
            <div className="w-8 h-[1px] bg-[#D4AF37]/40 my-1.5" />
            <p className="font-khmer text-sm text-[#FFFDF5] font-bold leading-relaxed">
              ស៊ឹម សុផាត
            </p>
            <p className="font-khmer text-xs text-[#ECC876]">&amp;</p>
            <p className="font-khmer text-sm text-[#FFFDF5] font-bold leading-relaxed">
              ឆែម ហ៊ុច
            </p>
          </div>

          {/* Bride's Parents */}
          <div className="p-3 rounded-xl bg-[#03241b]/80 border border-[#D4AF37]/30 flex flex-col items-center">
            <span className="font-khmer text-xs text-[#E5C365] font-semibold tracking-wide">
              {lang === 'km' ? 'ខាងកូនស្រី' : "Bride's Parents"}
            </span>
            <div className="w-8 h-[1px] bg-[#D4AF37]/40 my-1.5" />
            <p className="font-khmer text-sm text-[#FFFDF5] font-bold leading-relaxed">
              ម៉ាក់ គង់
            </p>
            <p className="font-khmer text-xs text-[#ECC876]">&amp;</p>
            <p className="font-khmer text-sm text-[#FFFDF5] font-bold leading-relaxed">
              ឆិល វណ្ណា
            </p>
          </div>
        </div>

        {/* Full Formal Khmer Invitation Text */}
        <div className="my-4 px-2">
          <p className="font-khmer text-xs sm:text-sm text-[#F7F3E8] leading-relaxed text-justify sm:text-center">
            {lang === 'km' ? (
              <>
                យើងខ្ញុំមានកិត្តិយស និងសេចក្តីសោមនស្សរីករាយឥតឧបមា សូមគោរពអញ្ជើញ ឯកឧត្តម លោកជំទាវ អ្នកឧកញ៉ា លោក លោកស្រី អ្នកនាងកញ្ញា និងប្រិយមិត្តជិតឆ្ងាយទាំងអស់ មេត្តាអញ្ជើញចូលរួមជាអធិបតី និងជាភ្ញៀវកិត្តិយស ដើម្បីប្រសិទ្ធពរជ័យ សិរីសួស្តី ជ័យមង្គល ក្នុងពិធីរៀបអាពាហ៍ពិពាហ៍កូនប្រុស កូនស្រី របស់យើងខ្ញុំ។
              </>
            ) : (
              <>
                Together with our families, we cordially invite you to celebrate our wedding and bestow your warmest blessings upon the union of our bride and groom.
              </>
            )}
          </p>
        </div>

        {/* Names of the couple in large gold */}
        <div className="mt-5 pt-3 border-t border-[#D4AF37]/30 flex flex-col items-center">
          <span className="font-royal text-[10px] tracking-widest text-[#E5C365] uppercase">
            {lang === 'km' ? 'កូនប្រុស & កូនស្រី' : 'Groom & Bride'}
          </span>
          <h3 className="font-khmer-title text-2xl sm:text-3xl gold-text-gradient mt-1.5 drop-shadow">
            ស៊ឹម សុផល &amp; ម៉ាក់ កញ្ញាដាវីន
          </h3>
          <p className="font-cursive text-xl text-[#F5E084] mt-0.5">
            Sem Sophal &amp; Mak Kanhadavin
          </p>
        </div>
      </motion.div>
    </section>
  );
};
