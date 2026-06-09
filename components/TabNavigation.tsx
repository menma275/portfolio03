"use client";

import Link from "next/link";
import React from "react";
import { useWebHaptics } from "web-haptics/react";

type Tab = "profile" | "works";

interface TabNavigationProps {
  activeTab: Tab;
}

export const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab }) => {
  const { trigger } = useWebHaptics();

  const handleHaptic = () => {
    trigger([5]);
  };

  return (
    <div className="sticky top-0 z-30 bg-bg-primary py-4 -mx-4 px-4 sm:mx-0 sm:px-0">
      <div className="flex gap-6 w-full sm:w-fit p-0 md:pt-6">
        <Link
          href="/"
          onClick={handleHaptic}
          className={`cursor-pointer flex-1 sm:flex-none text-sm font-medium transition-all relative overflow-hidden text-center ${
            activeTab === "works"
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
            activeTab === "profile"
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
