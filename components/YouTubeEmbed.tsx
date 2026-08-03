"use client";

import { useState } from "react";
import { FaPlay } from "react-icons/fa6";

interface YouTubeEmbedProps {
  embedUrl: string;
  title: string;
}

export function YouTubeEmbed({ embedUrl, title }: YouTubeEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Extract 11-char video ID from the embed url
  const getYouTubeId = (url: string): string | null => {
    const regExp = /^.*(embed\/|v\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    if (match && match[2].length === 11) {
      return match[2];
    }
    return null;
  };

  const videoId = getYouTubeId(embedUrl);
  const [imgSrc, setImgSrc] = useState<string | null>(
    videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null,
  );

  const handleImgError = () => {
    if (videoId && imgSrc && imgSrc.includes("maxresdefault")) {
      // Fallback to hqdefault if maxresdefault doesn't exist
      setImgSrc(`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`);
    }
  };

  if (!videoId) return null;

  if (isPlaying) {
    return (
      <iframe
        src={`${embedUrl}?autoplay=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full border-0 animate-fade-in"
      />
    );
  }

  return (
    <div
      onClick={() => setIsPlaying(true)}
      className="absolute inset-0 w-full h-full cursor-pointer flex items-center justify-center group bg-black"
    >
      {imgSrc && (
        <img
          src={imgSrc}
          alt={title}
          onError={handleImgError}
          className="w-full h-full object-cover opacity-90 transition-opacity duration-300 group-hover:opacity-100"
        />
      )}

      {/* Substack-style Play Button overlay */}
      <div className="absolute w-[64px] h-[44px] md:w-[88px] md:h-[60px] bg-black/75 rounded-[14px] md:rounded-[18px] flex items-center justify-center backdrop-blur-[4px] shadow-lg pointer-events-none">
        <FaPlay className="w-[18px] h-[18px] md:w-[26px] md:h-[26px] text-white ml-0.5 md:ml-1" />
      </div>
    </div>
  );
}
