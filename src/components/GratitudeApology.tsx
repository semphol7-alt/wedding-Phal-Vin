import React from 'react';
import { motion } from 'motion/react';
import { KhmerOrnateDivider, KhmerCornerOrnament } from './GoldOrnament';
import { Language } from '../types';

interface GratitudeApologyProps {
  lang: Language;
}

export const GratitudeApology: React.FC<GratitudeApologyProps> = ({ lang }) => {
  return (
    <section id="gratitude" className="relative w-full py-10 px-4 flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-[420px] rounded-2xl p-6 sm:p-7 emerald-card relative shadow-2xl overflow-hidden"
      >
        <KhmerCornerOrnament position="top-left" size={26} />
        <KhmerCornerOrnament position="top-right" size={26} />
        <KhmerCornerOrnament position="bottom-left" size={26} />
        <KhmerCornerOrnament position="bottom-right" size={26} />

        {/* Section Title */}
        <div className="pt-2">
          <h2 className="font-khmer-title text-lg sm:text-xl text-[#FFF3C4] drop-shadow leading-snug">
            {lang === 'km'
              ? 'សេចក្ដីថ្លែងអំណរគុណ និងសុំទោសដោយស្មោះ'
              : 'GRATITUDE & HUMBLE APOLOGY'}
          </h2>
          <p className="font-royal text-[10px] tracking-[0.25em] text-[#D4AF37] uppercase mt-1">
            {lang === 'km' ? 'WITH HUMBLE GRATITUDE & APOLOGIES' : 'OUR SINCEREST APPRECIATION'}
          </p>
        </div>

        <KhmerOrnateDivider className="my-3.5" />

        {/* Long formal Khmer apology/gratitude text in a decorative box */}
        <div className="p-4 rounded-xl bg-[#021c15]/90 border border-[#D4AF37]/40 text-justify relative">
          <p className="font-khmer text-xs sm:text-[13px] text-[#F7F3E8] leading-relaxed">
            {lang === 'km' ? (
              <>
                យើងខ្ញុំជាមាតាបិតា និងកូនទាំងពីរ សូមក្រាបថ្វាយបង្គំ និងលំឱនកាយថ្លែងនូវអំណរគុណយ៉ាងជ្រាលជ្រៅបំផុត ចំពោះវត្តមានដ៏ឧត្តុង្គឧត្តមរបស់ សម្តេច ឯកឧត្តម លោកជំទាវ អ្នកឧកញ៉ា លោក លោកស្រី អ្នកនាងកញ្ញា និងញាតិមិត្តទាំងអស់ ដែលបានចំណាយពេលវេលាដ៏មានតម្លៃអញ្ជើញមកចូលរួមជាកិត្តិយស និងប្រសិទ្ធពរជ័យដល់កូនប្រុស កូនស្រីរបស់យើងខ្ញុំ។
                <br /><br />
                ប្រសិនបើក្នុងដំណើរការរៀបចំពិធីមង្គលការនេះ មានការខ្វះខាត បង្កការអាក់អន់ស្រពន់ចិត្ត ឬមិនសមរម្យដោយប្រការណាមួយ កើតឡើងដោយអចេតនាក្តី សូមមេត្តាអភ័យទោស និងសន្តោសប្រណីដល់យើងខ្ញុំទាំងអស់គ្នាដោយក្តីអនុគ្រោះដ៏ខ្ពង់ខ្ពស់។
              </>
            ) : (
              <>
                We, the parents, along with the bride and groom, express our deepest humility and gratitude to all distinguished guests, relatives, and cherished friends for honoring us with your presence and blessings.
                <br /><br />
                Should there be any unintentional shortcomings or oversights throughout the proceedings of this celebration, we humbly ask for your gracious forgiveness and understanding.
              </>
            )}
          </p>
        </div>

        {/* Small couple photo at the bottom in gold frame */}
        <div className="mt-5 flex flex-col items-center">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-[2px] bg-gradient-to-br from-[#FFF3C4] via-[#D4AF37] to-[#8C5E13] shadow-lg">
            <div className="w-full h-full rounded-full overflow-hidden border border-[#D4AF37]">
              <img
                src="/src/assets/images/khmer_wedding_couple_main_1792411431628.jpg"
                alt="Sem Sophal and Mak Kanhadavin Wedding"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          <span className="font-khmer text-xs text-[#FFE58F] font-bold mt-2">
            ស៊ឹម សុផល &amp; ម៉ាក់ កញ្ញាដាវីន
          </span>
          <span className="font-royal text-[10px] text-[#D4AF37] tracking-wider uppercase">
            Sem Sophal &amp; Mak Kanhadavin
          </span>
        </div>
      </motion.div>
    </section>
  );
};
