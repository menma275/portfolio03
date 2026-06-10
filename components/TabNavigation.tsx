"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useWebHaptics } from "web-haptics/react";

export const TabNavigation: React.FC = () => {
  const pathname = usePathname();
  const { trigger } = useWebHaptics();

  const handleHaptic = () => {
    trigger([5]);
  };

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path === "/profile" && pathname === "/profile") return true;
    if (path === "/" && pathname.startsWith("/works")) return true;
    return false;
  };

  return (
    <div className="sticky px-6 md:px-8 top-0 z-30 bg-bg-primary pt-3 pb-6 sm:mx-0 sm:px-0">
      <div className="flex gap-6 w-full sm:w-fit p-0 md:pt-6">
        <Link
          href="/"
          onClick={handleHaptic}
          className={`cursor-pointer flex-1 sm:flex-none text-sm font-medium transition-all relative overflow-hidden text-center ${
            isActive("/")
              ? "text-fg-primary"
              : "text-fg-secondary hover:text-fg-primary"
          }`}
        >
          Works
        </Link>
        <Link
          href="/profile"
          onClick={handleHaptic}
          className={`cursor-pointer flex-1 sm:flex-none text-sm font-medium transition-all relative overflow-hidden text-center ${
            isActive("/profile")
              ? "text-fg-primary"
              : "text-fg-secondary hover:text-fg-primary"
          }`}
        >
          Profile
        </Link>
      </div>
    </div>
  );
};
