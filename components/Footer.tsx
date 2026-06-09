import React from "react";
import { HeroVideo } from "@/components/HeroVideo";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-0 md:py-12">
      <div className="relative max-w-2xl mx-auto text-center">
        <div className="block sm:hidden">
          <HeroVideo videoSrc="/river.mp4" imageSrc="/river.jpg" />
        </div>
        <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white mix-blend-difference text-xs font-mono pointer-events-none">
          © {currentYear} Kusuke Sakamura. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
