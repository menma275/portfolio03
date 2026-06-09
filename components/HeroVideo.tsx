import React from "react";

interface HeroVideoProps {
  videoSrc: string;
  imageSrc: string;
}

export const HeroVideo: React.FC<HeroVideoProps> = ({ videoSrc, imageSrc }) => {
  return (
    <div className="relative w-full aspect-video overflow-hidden">
      <video
        src={videoSrc}
        poster={imageSrc}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      >
        <img
          src={imageSrc}
          alt="Hero background fallback"
          className="w-full h-full object-cover"
        />
      </video>
    </div>
  );
};
