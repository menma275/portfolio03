"use client";

import React, { useEffect, useState } from "react";
import { socials } from "@/data";
import { ExternalLink } from "./ExternalLink";

export const SocialLinks: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const mainElement = document.querySelector("main");
    if (!mainElement) return;

    const handleScroll = () => {
      // Hide links when scrolled more than 20px
      if (mainElement.scrollTop > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    mainElement.addEventListener("scroll", handleScroll);
    return () => mainElement.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`flex flex-wrap md:flex-col gap-2 transition-all duration-500 overflow-hidden ${
        isScrolled
          ? "max-md:opacity-0 max-md:max-h-0 max-md:mt-[-8px] pointer-events-none"
          : "max-md:opacity-100 max-md:max-h-40"
      }`}
    >
      {socials.map((social) => (
        <ExternalLink key={social.label} href={social.href}>
          {social.label}
        </ExternalLink>
      ))}
    </div>
  );
};
