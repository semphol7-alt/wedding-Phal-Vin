import React from 'react';
import { Mail, Globe, Send, Share2 } from 'lucide-react';
import { KhmerAudioController } from './AudioPlayer';
import { Language } from '../types';

interface TopBarProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onReopenEnvelope: () => void;
  onViewCover?: () => void;
  onOpenShare?: () => void;
  autoPlayTrigger?: boolean;
}

export const TopBar: React.FC<TopBarProps> = ({
  lang,
  onLanguageChange,
  onReopenEnvelope,
  onViewCover,
  onOpenShare,
  autoPlayTrigger,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full flex justify-center px-3 py-2.5 bg-[#03231a]/85 backdrop-blur-md border-b border-[#D4AF37]/35 shadow-sm">
      <div className="w-full max-w-[420px] flex items-center justify-between gap-1">
        {/* Left: Re-open envelope & Cover buttons */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={onReopenEnvelope}
            title={lang === 'km' ? 'មើលសំបុត្រឡើងវិញ' : 'View Envelope Again'}
            className="flex items-center gap-1 px-2 py-1 rounded-full border border-[#D4AF37]/40 bg-[#063325]/80 text-[#FFE58F] hover:bg-[#094230] text-xs font-khmer transition-colors cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5" />
            <span className="hidden sm:inline text-[11px]">
              {lang === 'km' ? 'សំបុត្រ' : 'Envelope'}
            </span>
          </button>

          {onViewCover && (
            <button
              onClick={onViewCover}
              title={lang === 'km' ? 'មើលក្របសំបុត្រ Soft Cover' : 'View Romantic Cover'}
              className="px-2 py-1 rounded-full border border-[#D4AF37]/40 bg-[#063325]/80 text-[#FFE58F] hover:bg-[#094230] text-[11px] font-khmer transition-colors cursor-pointer flex items-center gap-1"
            >
              <span>{lang === 'km' ? 'ក្របសំបុត្រ' : 'Cover'}</span>
            </button>
          )}

          {onOpenShare && (
            <button
              onClick={onOpenShare}
              title={lang === 'km' ? 'ចែករំលែកធៀបតាម Telegram / Messenger' : 'Share Invitation'}
              className="p-1.5 rounded-full border border-[#D4AF37]/40 bg-[#0B4F3B]/90 text-[#FFE58F] hover:bg-[#0E5C46] transition-colors cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Center: Names */}
        <div className="flex items-center truncate max-w-[130px] sm:max-w-none">
          <span className="font-cursive text-base sm:text-lg gold-text-gradient leading-none truncate">
            Sem Sophal &amp; Mak Kanhadavin
          </span>
        </div>

        {/* Right Zone: Audio Controller + Language Switcher (ខ្មែរ / EN) */}
        <div className="flex items-center gap-1.5">
          {/* Audio controller */}
          <KhmerAudioController autoStartTrigger={autoPlayTrigger} lang={lang} />

          {/* Language Switcher */}
          <div className="flex items-center rounded-full p-[2px] bg-[#021811] border border-[#D4AF37]/60 shadow-inner">
            <button
              onClick={() => onLanguageChange('km')}
              className={`px-2 py-1 rounded-full text-xs font-khmer font-bold transition-colors cursor-pointer ${
                lang === 'km'
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#F5E084] text-[#1a1402] shadow-sm'
                  : 'text-[#D8CCA9] hover:text-[#FFFDF5]'
              }`}
            >
              ខ្មែរ
            </button>
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-2 py-1 rounded-full text-xs font-royal font-bold transition-colors cursor-pointer ${
                lang === 'en'
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#F5E084] text-[#1a1402] shadow-sm'
                  : 'text-[#D8CCA9] hover:text-[#FFFDF5]'
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
