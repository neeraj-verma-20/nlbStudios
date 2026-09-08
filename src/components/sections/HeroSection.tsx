"use client";

import React, { useState, useRef } from "react";
import { ArrowRight, ArrowDown, Play, Volume2, VolumeX } from "lucide-react";

export const HeroSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative w-full pt-12 pb-20 md:py-24 bg-[#FAF9F6] border-b border-[#E5E4E0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Hero Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Minimal Sub-tag */}
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#666663] uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-[#0A0A0C]" />
              <span>Personal Branding Studio</span>
            </div>

            {/* Large Bold Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#0A0A0C] tracking-tighter leading-[1.05] uppercase font-display mb-6">
              WE HELP <br className="hidden sm:block" />
              PROFESSIONALS <br className="hidden sm:block" />
              GET SEEN.
            </h1>

            {/* Short Subtitle Copy */}
            <p className="text-lg sm:text-xl text-[#444440] font-normal leading-relaxed max-w-2xl mb-10">
              We create professional reels, personal branding content and digital experiences for people who have something worth saying.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-[#0A0A0C] text-[#FAF9F6] px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-[#2A2A2E] transition-all duration-200"
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 bg-transparent text-[#0A0A0C] border border-[#0A0A0C] px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-[#0A0A0C] hover:text-[#FAF9F6] transition-all duration-200"
              >
                <span>See Our Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Strong Vertical 9:16 Reel Feature */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[9/16] bg-[#0A0A0C] shadow-2xl border border-[#E5E4E0] group overflow-hidden">
              <video
                ref={videoRef}
                src="https://assets.mixkit.co/videos/preview/mixkit-man-holding-a-tablet-in-an-office-41527-large.mp4"
                poster="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover"
              />

              {/* Video Overlay Info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 p-6 flex flex-col justify-between pointer-events-none">
                <div className="flex items-center justify-between pointer-events-auto">
                  <span className="bg-[#FAF9F6]/90 text-[#0A0A0C] text-[10px] font-mono uppercase tracking-widest px-2.5 py-1">
                    Featured Reel
                  </span>
                  <button
                    onClick={toggleMute}
                    className="w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
                    aria-label="Toggle Sound"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-mono text-white/70 uppercase">9:16 Vertical Content</span>
                  <h3 className="text-base font-bold text-white uppercase tracking-tight">
                    Executive Storytelling Reel
                  </h3>
                </div>
              </div>

              {/* Play Pause Button Indicator */}
              <button
                onClick={togglePlay}
                className="absolute bottom-6 right-6 z-10 w-10 h-10 rounded-full bg-[#FAF9F6] text-[#0A0A0C] flex items-center justify-center hover:scale-105 transition-transform"
                aria-label="Play/Pause Video"
              >
                <Play className="w-4 h-4 fill-current ml-0.5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
