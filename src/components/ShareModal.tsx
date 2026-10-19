import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Copy, Check, X, Share2, MessageCircle, Link, CheckCircle2, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Language } from '../types';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose, lang }) => {
  const [guestName, setGuestName] = useState('');
  const [copiedMessage, setCopiedMessage] = useState(false);
  const [copiedLinkOnly, setCopiedLinkOnly] = useState(false);

  // Get current app URL or pre-production URL
  const appUrl =
    typeof window !== 'undefined' && window.location.href.startsWith('http')
      ? window.location.href
      : 'https://ais-pre-tb6dzknqzanf32fpt3cylb-404351727716.asia-northeast1.run.app';

  // Formulate personalized invitation message exactly as requested
  const guestSalutation = guestName.trim() ? ` [${guestName.trim()}]` : '';
  const personalizedMessage = guestName.trim()
    ? `ជម្រាបសួរ ${guestName.trim()}! នាងខ្ញុំ/ខ្ញុំបាទសូមអញ្ជើញទៅចូលរួមពិធីអាពាហ៍ពិពាហ៍តាមរយៈធៀបឌីជីថលនេះ៖\n${appUrl}`
    : `ជម្រាបសួរ [ឈ្មោះភ្ញៀវ]! នាងខ្ញុំ/ខ្ញុំបាទសូមអញ្ជើញទៅចូលរួមពិធីអាពាហ៍ពិពាហ៍តាមរយៈធៀបឌីជីថលនេះ៖\n${appUrl}`;

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(personalizedMessage);
    setCopiedMessage(true);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#0B4F3B', '#FFEAA0', '#0088CC'],
    });
    setTimeout(() => setCopiedMessage(false), 2500);
  };

  const handleCopyLinkOnly = () => {
    navigator.clipboard.writeText(appUrl);
    setCopiedLinkOnly(true);
    confetti({
      particleCount: 30,
      spread: 50,
      origin: { y: 0.7 },
      colors: ['#D4AF37', '#FFEAA0'],
    });
    setTimeout(() => setCopiedLinkOnly(false), 2000);
  };

  const handleShareTelegram = () => {
    const text = guestName.trim()
      ? `ជម្រាបសួរ ${guestName.trim()}! នាងខ្ញុំ/ខ្ញុំបាទសូមអញ្ជើញទៅចូលរួមពិធីអាពាហ៍ពិពាហ៍តាមរយៈធៀបឌីជីថលនេះ៖`
      : `ជម្រាបសួរ! នាងខ្ញុំ/ខ្ញុំបាទសូមអញ្ជើញទៅចូលរួមពិធីអាពាហ៍ពិពាហ៍តាមរយៈធៀបឌីជីថលនេះ៖`;
    const tgUrl = `https://t.me/share/url?url=${encodeURIComponent(appUrl)}&text=${encodeURIComponent(text)}`;
    window.open(tgUrl, '_blank', 'noopener,noreferrer');
  };

  const handleShareWebOrMessenger = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'សិរីមង្គលអាពាហ៍ពិពាហ៍ ស៊ឹម សុផល & ម៉ាក់ កញ្ញាដាវីន',
          text: personalizedMessage,
          url: appUrl,
        });
      } catch {
        // User cancelled share
      }
    } else {
      handleCopyMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.93, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.93, y: 15 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-[440px] rounded-2xl bg-[#03241b] border-2 border-[#D4AF37] p-5 sm:p-6 text-[#F7F3E8] shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden my-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#063325] border border-[#D4AF37]/50 flex items-center justify-center text-[#FFF3C4] hover:bg-[#094230] cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header */}
          <div className="text-center pt-1 mb-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#084230] border border-[#D4AF37]/60 text-xs font-khmer text-[#FFE58F] font-bold mb-2">
              <Share2 className="w-3.5 h-3.5 text-[#FFE58F]" />
              <span>{lang === 'km' ? 'ផ្ញើធៀបតាម Telegram / Messenger' : 'Share Invitation Link'}</span>
            </div>
            <h3 className="font-khmer-title text-lg text-[#FFF3C4]">
              {lang === 'km' ? 'ចែករំលែកធៀបមង្គលការឌីជីថល' : 'Send Invitation to Guests'}
            </h3>
            <p className="font-khmer text-xs text-[#D8CCA9] mt-0.5">
              {lang === 'km'
                ? 'ពេល Copy Link ផ្ញើតាម Chat នឹងលោតចេញរូបភាព Cover, Title & ឈ្មោះកូនកំលោះកូនក្រមុំស្អាត'
                : 'Rich OpenGraph preview card automatically displays on Telegram & Messenger'}
            </p>
          </div>

          {/* Live Telegram/Messenger Link Preview Simulation */}
          <div className="mb-4 rounded-xl overflow-hidden border border-[#D4AF37]/60 bg-[#021811] shadow-inner text-left">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
              <img
                src="/og-image.jpg"
                alt="OpenGraph Wedding Cover Preview"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-[10px] font-mono text-[#FFE58F] border border-[#D4AF37]/40 flex items-center gap-1">
                <span>✦</span> Open Graph Social Preview
              </div>
            </div>
            <div className="p-3 bg-[#05291F] border-t border-[#D4AF37]/40">
              <span className="text-[10px] font-mono text-[#D4AF37] block uppercase tracking-wider">
                {typeof window !== 'undefined' ? window.location.hostname : 'wedding-invitation'}
              </span>
              <h4 className="font-khmer text-xs font-bold text-[#FFF3C4] mt-0.5">
                សិរីមង្គលអាពាហ៍ពិពាហ៍ ស៊ឹម សុផល &amp; ម៉ាក់ កញ្ញាដាវីន
              </h4>
              <p className="font-khmer text-[11px] text-[#C5BBA2] mt-0.5 line-clamp-2 leading-relaxed">
                សូមគោរពអញ្ជើញ ឯកឧត្តម លោកជំទាវ អ្នកឧកញ៉ា លោក លោកស្រី អ្នកនាងកញ្ញា ចូលរួមពិធីមង្គលការ ថ្ងៃអាទិត្យ ទី១៤ ខែមីនា ឆ្នាំ២០២៧ នៅភូមិស្នោរ សង្កាត់រកាក្នុង ក្រុងដូនកែវ ខេត្តតាកែវ
              </p>
            </div>
          </div>

          {/* Guest Name Input */}
          <div className="mb-3 text-left">
            <label className="block font-khmer text-xs text-[#FFE58F] font-semibold mb-1">
              {lang === 'km' ? 'ឈ្មោះភ្ញៀវដែលត្រូវផ្ញើជូន (កែសម្រួលបាន):' : 'Guest Name (Personalized):'}
            </label>
            <input
              type="text"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              placeholder={lang === 'km' ? 'ឧ. លោកពូ សុខា, បង វណ្ណា & ភរិយា...' : 'e.g., Uncle Sokha & Family'}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#021811] border border-[#D4AF37]/50 text-[#FFFDF5] placeholder-[#7E9689] font-khmer text-xs focus:outline-none focus:border-[#FFE58F]"
            />
          </div>

          {/* Formatted Message Preview Box */}
          <div className="mb-4 p-3 rounded-xl bg-[#021811] border border-[#D4AF37]/35 text-left text-xs font-khmer text-[#E8DCC0] leading-relaxed relative">
            <div className="text-[10px] text-[#D4AF37] font-semibold mb-1 uppercase tracking-wide">
              {lang === 'km' ? 'សារដែលត្រូវផ្ញើទៅភ្ញៀវ:' : 'Message to Send:'}
            </div>
            <p className="whitespace-pre-line text-[11.5px] select-all font-medium text-[#FFFDF5]">
              {personalizedMessage}
            </p>
          </div>

          {/* Action Buttons: Telegram / Messenger / Copy Message */}
          <div className="space-y-2">
            <button
              onClick={handleShareTelegram}
              className="w-full py-2.5 px-4 rounded-xl bg-[#0088CC] hover:bg-[#0077B5] text-white font-khmer font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
            >
              <Send className="w-4 h-4 fill-current" />
              <span>{lang === 'km' ? 'បើកផ្ញើក្នុងកម្មវិធី Telegram ផ្ទាល់' : 'Share Directly via Telegram'}</span>
            </button>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={handleCopyMessage}
                className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F5E084] to-[#B8860B] text-[#1a1402] font-khmer font-bold text-xs flex items-center justify-center gap-1.5 shadow-md hover:opacity-95 transition-all cursor-pointer"
              >
                {copiedMessage ? <Check className="w-3.5 h-3.5 text-emerald-950 stroke-[3]" /> : <Copy className="w-3.5 h-3.5 text-slate-900" />}
                <span>{copiedMessage ? (lang === 'km' ? 'បានចម្លងរួច!' : 'Copied!') : (lang === 'km' ? 'ចម្លងសារ & លីង' : 'Copy Message')}</span>
              </button>

              <button
                onClick={handleShareWebOrMessenger}
                className="py-2.5 px-3 rounded-xl bg-[#0B4F3B] hover:bg-[#0E5C46] border border-[#D4AF37]/60 text-[#FFF3C4] font-khmer font-semibold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#FFE58F]" />
                <span>{lang === 'km' ? 'Messenger / Share' : 'Messenger / Share'}</span>
              </button>
            </div>

            <button
              onClick={handleCopyLinkOnly}
              className="w-full py-2 px-3 rounded-xl bg-[#04241B] hover:bg-[#073627] border border-[#D4AF37]/40 text-[#ECC876] font-khmer text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
            >
              <Link className="w-3.5 h-3.5" />
              <span>{copiedLinkOnly ? (lang === 'km' ? 'បានចម្លងតំណភ្ជាប់រួចរាល់!' : 'Link Copied!') : (lang === 'km' ? 'ចម្លងតែតំណភ្ជាប់ (Copy Link Only)' : 'Copy Link Only')}</span>
            </button>
          </div>

          {/* User Guidance Instructions (Matches user request exact instructions) */}
          <div className="mt-4 pt-3 border-t border-[#D4AF37]/30 text-left bg-[#021811]/60 p-3 rounded-xl">
            <h5 className="font-khmer text-xs text-[#FFE58F] font-bold mb-1.5 flex items-center gap-1">
              <span>💡</span>
              <span>{lang === 'km' ? 'របៀបផ្ញើធៀបទៅកាន់ភ្ញៀវ:' : 'How to send to your guests:'}</span>
            </h5>
            <ol className="font-khmer text-[11px] text-[#D8CCA9] space-y-1 list-decimal list-inside leading-relaxed">
              <li>
                {lang === 'km' ? (
                  <>ចុចប៊ូតុង <span className="text-[#FFE58F] font-bold">"ចម្លងសារ & លីង"</span></>
                ) : (
                  'Click "Copy Message"'
                )}
              </li>
              <li>
                {lang === 'km' ? (
                  <>បើកកម្មវិធី <span className="text-[#FFE58F] font-bold">Telegram ឬ Messenger</span></>
                ) : (
                  'Open Telegram or Messenger'
                )}
              </li>
              <li>
                {lang === 'km' ? (
                  <>ចុច <span className="text-[#FFE58F] font-bold">Paste (បិទភ្ជាប់)</span> លីងនោះផ្ញើទៅកាន់ Chat របស់ភ្ញៀវ</>
                ) : (
                  'Paste the link directly into your guest’s chat'
                )}
              </li>
            </ol>
            <p className="font-khmer text-[10px] text-[#A69E89] mt-2 italic">
              {lang === 'km'
                ? '✨ កម្មវិធី Telegram/Facebook នឹងបង្ហាញរូបភាព Cover និងឈ្មោះ ស៊ឹម សុផល & ម៉ាក់ កញ្ញាដាវីន ភ្លាមៗ!'
                : '✨ Rich preview with cover photo and names will automatically appear!'}
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
