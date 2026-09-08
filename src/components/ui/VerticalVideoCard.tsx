"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Play, Volume2, VolumeX, Maximize2 } from "lucide-react";
import { PortfolioItem } from "@/data/portfolio";
import { Modal } from "./Modal";

interface VerticalVideoCardProps {
  item: PortfolioItem;
}

export const VerticalVideoCard: React.FC<VerticalVideoCardProps> = ({ item }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isPlayingModal, setIsPlayingModal] = useState(false);
  const [isMutedModal, setIsMutedModal] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay may be restricted by browser policy
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const openModal = () => {
    setIsPlayingModal(true);
  };

  const closeModal = () => {
    setIsPlayingModal(false);
  };

  return (
    <>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={openModal}
        className="group relative aspect-[9/16] w-full overflow-hidden bg-studio-dark border border-studio-border hover:border-studio-accent/60 transition-all duration-500 cursor-pointer shadow-xl"
      >
        {/* Background Image / Video Poster */}
        <Image
          src={item.posterUrl}
          alt={item.videoTitle}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`object-cover transition-transform duration-700 group-hover:scale-105 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Hover Video Preview */}
        <video
          ref={videoRef}
          src={item.videoUrl}
          muted
          loop
          playsInline
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Overlay Dark Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-studio-black via-studio-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

        {/* Category Pill Tag */}
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-block px-3 py-1 text-[10px] md:text-xs font-semibold uppercase tracking-widest bg-studio-black/80 backdrop-blur-md text-studio-accent border border-studio-accent/30">
            {item.category}
          </span>
        </div>

        {/* Center Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-studio-accent/90 text-studio-black flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-studio-accent shadow-2xl">
            <Play className="w-6 h-6 md:w-7 md:h-7 fill-current ml-1" />
          </div>
        </div>

        {/* Bottom Content Metadata */}
        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 z-10 flex flex-col justify-end">
          <div className="text-xs text-studio-accent font-medium mb-1 tracking-wider uppercase">
            {item.clientTitle} • {item.clientRole}
          </div>
          <h4 className="text-base md:text-lg font-bold text-studio-text leading-tight group-hover:text-studio-accent transition-colors line-clamp-2 uppercase">
            {item.videoTitle}
          </h4>

          {/* Metric Highlight Badge */}
          <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between">
            <span className="text-[11px] text-studio-text-muted uppercase tracking-wider">
              {item.metrics.label}
            </span>
            <span className="text-xs font-bold text-studio-accent">
              {item.metrics.value}
            </span>
          </div>
        </div>
      </div>

      {/* Fullscreen 9:16 Video Player Modal */}
      <Modal isOpen={isPlayingModal} onClose={closeModal} maxWidth="md">
        <div className="flex flex-col items-center">
          <div className="relative aspect-[9/16] w-full max-w-sm overflow-hidden bg-black border border-studio-accent/40 shadow-2xl">
            <video
              ref={modalVideoRef}
              src={item.videoUrl}
              controls
              autoPlay
              muted={isMutedModal}
              playsInline
              className="h-full w-full object-cover"
            />
          </div>

          <div className="mt-6 text-center w-full max-w-md">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest bg-studio-accent/20 text-studio-accent mb-2">
              {item.categoryLabel}
            </span>
            <h3 className="text-xl font-bold uppercase text-studio-text mb-2">
              {item.videoTitle}
            </h3>
            <p className="text-sm text-studio-text-muted leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};
