import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Play, Pause, Music } from 'lucide-react';
import { Language } from '../types';

interface AudioControllerProps {
  autoStartTrigger?: boolean;
  lang?: Language;
}

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export const KhmerAudioController: React.FC<AudioControllerProps> = ({
  autoStartTrigger = false,
  lang = 'km',
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const playerRef = useRef<any>(null);
  const containerId = 'youtube-wedding-audio-player';

  const YOUTUBE_VIDEO_ID = '3HbqAPore6w'; // Shayne Ward - Until You

  useEffect(() => {
    // Load YouTube IFrame API if not already present
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);
    }

    const initPlayer = () => {
      if (!window.YT || !window.YT.Player) return;

      try {
        playerRef.current = new window.YT.Player(containerId, {
          height: '1',
          width: '1',
          videoId: YOUTUBE_VIDEO_ID,
          playerVars: {
            autoplay: 0,
            controls: 0,
            disablekb: 1,
            enablejsapi: 1,
            loop: 1,
            playlist: YOUTUBE_VIDEO_ID,
            playsinline: 1,
            rel: 0,
            origin: window.location.origin,
          },
          events: {
            onReady: (event: any) => {
              setIsPlayerReady(true);
              // Set volume to pleasant level
              event.target.setVolume(80);
              if (autoStartTrigger) {
                event.target.playVideo();
                setIsPlaying(true);
              }
            },
            onStateChange: (event: any) => {
              // 1 = playing, 2 = paused, 0 = ended
              if (event.data === 1) {
                setIsPlaying(true);
              } else if (event.data === 2 || event.data === 0) {
                setIsPlaying(false);
              }
            },
          },
        });
      } catch (err) {
        console.warn('YouTube Player init error:', err);
      }
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      window.onYouTubeIframeAPIReady = () => {
        initPlayer();
      };
    }

    return () => {
      try {
        if (playerRef.current && playerRef.current.destroy) {
          playerRef.current.destroy();
        }
      } catch {
        // ignore cleanup error
      }
    };
  }, []);

  // When autoStartTrigger turns true, play video
  useEffect(() => {
    if (autoStartTrigger && playerRef.current && isPlayerReady) {
      try {
        playerRef.current.playVideo();
        setIsPlaying(true);
      } catch {
        // Autoplay policy might block until user gesture
      }
    }
  }, [autoStartTrigger, isPlayerReady]);

  const togglePlayback = () => {
    if (!playerRef.current || !isPlayerReady) return;

    try {
      if (isPlaying) {
        playerRef.current.pauseVideo();
        setIsPlaying(false);
      } else {
        playerRef.current.playVideo();
        setIsPlaying(true);
      }
    } catch (e) {
      console.warn('Playback toggle error', e);
    }
  };

  return (
    <>
      {/* Hidden YouTube container for official video audio playback */}
      <div className="fixed -top-[9999px] -left-[9999px] pointer-events-none opacity-0">
        <div id={containerId} />
      </div>

      {/* Top Bar Audio Toggle Button */}
      <button
        onClick={togglePlayback}
        title={isPlaying ? 'Pause Song' : 'Play Wedding Song'}
        aria-label="Toggle Wedding Music"
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all cursor-pointer shadow-md text-xs ${
          isPlaying
            ? 'border-[#FFE58F] bg-[#0B4F3B] text-[#FFF3C4] shadow-[0_0_12px_rgba(212,175,55,0.4)]'
            : 'border-[#D4AF37]/50 bg-[#063325]/80 text-[#E5C365] hover:bg-[#084230]'
        }`}
      >
        {isPlaying ? (
          <>
            <span className="flex items-center gap-0.5 h-3">
              <span className="w-0.5 h-2 bg-[#FFE58F] animate-pulse" />
              <span className="w-0.5 h-3.5 bg-[#FFF3C4] animate-pulse delay-75" />
              <span className="w-0.5 h-1.5 bg-[#FFE58F] animate-pulse delay-150" />
            </span>
            <span className="font-khmer text-[11px] font-bold tracking-wide">
              {lang === 'km' ? 'កំពុងចាក់' : 'PLAYING'}
            </span>
          </>
        ) : (
          <>
            <Play className="w-3.5 h-3.5 text-[#FFE58F] fill-current" />
            <span className="font-khmer text-[11px] tracking-wide opacity-90">
              {lang === 'km' ? 'ចាក់បទចំរៀង' : 'PLAY SONG'}
            </span>
          </>
        )}
      </button>

      {/* Floating Mini Music Bar for Until You - Shayne Ward */}
      {showBanner && (
        <div className="fixed bottom-20 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-20 z-30 max-w-[340px] pointer-events-auto">
          <div className="p-2.5 rounded-xl bg-[#03241b]/95 border border-[#D4AF37]/60 shadow-[0_8px_25px_rgba(0,0,0,0.6)] backdrop-blur-md flex items-center justify-between gap-2.5">
            <button
              onClick={togglePlayback}
              className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFF3C4] via-[#D4AF37] to-[#8C5E13] p-0.5 flex items-center justify-center shrink-0 cursor-pointer shadow"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              <div className="w-full h-full rounded-full bg-[#04241B] flex items-center justify-center text-[#FFE58F]">
                {isPlaying ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current pl-0.5" />}
              </div>
            </button>

            <div className="flex-1 min-w-0 text-left">
              <p className="font-royal text-xs font-bold text-[#FFF3C4] truncate">
                Until You — Shayne Ward
              </p>
              <p className="font-khmer text-[10px] text-[#E5C365] truncate">
                {lang === 'km' ? 'បទចំរៀងមង្គលការដ៏មានអត្ថន័យ' : 'Official Wedding Love Song'}
              </p>
            </div>

            <button
              onClick={() => setShowBanner(false)}
              className="text-[#A69E89] hover:text-[#FFFDF5] text-xs px-1"
              title="Close banner"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};
