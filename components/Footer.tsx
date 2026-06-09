import React from "react";
import { HeroVideo } from "@/components/HeroVideo";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-0 md:py-12">
      <div className="relative max-w-2xl mx-auto text-center">
        <div className="block sm:hidden relative">
          <HeroVideo videoSrc="/river.mp4" imageSrc="/river.jpg" />
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
          <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[10px] font-mono pointer-events-none w-full px-4">
            © {currentYear} Kusuke Sakamura. All rights reserved.
          </p>
        </div>
        <p className="hidden sm:block text-fg-secondary text-xs font-mono">
          © {currentYear} Kusuke Sakamura. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
