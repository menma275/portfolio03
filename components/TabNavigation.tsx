"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { useWebHaptics } from "web-haptics/react";
import { works } from "@/data/works";
import { motion } from "motion/react";

export const TabNavigation: React.FC = () => {
  const pathname = usePathname();
  const { trigger } = useWebHaptics();

  useEffect(() => {
    // Reset scroll position of the main container when pathname changes
    const main = document.querySelector("main");
    if (main) {
      main.scrollTo(0, 0);
    }
  }, [pathname]);

  const handleHaptic = () => {
    trigger([5]);
  };

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path === "/profile" && pathname === "/profile") return true;
    return false;
  };

  const isWorkDetail = pathname.startsWith("/works/");
  const workId = isWorkDetail
    ? pathname.split("/").filter(Boolean).pop()
    : null;
  const work = works.find((w) => w.id === workId);

  return (
    <div className="sticky px-6 md:px-8 top-0 z-50 bg-bg-primary pt-3 pb-6 ">
      <div className="flex gap-6 w-full md:w-fit p-0 md:pt-6">
        <Link
          href="/profile"
          onClick={handleHaptic}
          className={`cursor-pointer flex-1 md:flex-none text-sm font-medium transition-all relative overflow-hidden text-center ${
            isActive("/profile")
              ? "text-fg-primary"
              : "text-fg-secondary hover:text-fg-primary"
          }`}
        >
          Profile
        </Link>
        <Link
          href="/"
          onClick={handleHaptic}
          className={`cursor-pointer flex-1 md:flex-none text-sm font-medium transition-all relative overflow-hidden text-center ${
            isActive("/")
              ? "text-fg-primary"
              : isWorkDetail
                ? "text-fg-primary lg:text-fg-secondary hover:text-fg-primary"
                : "text-fg-secondary hover:text-fg-primary"
          }`}
        >
          <span className="inline-flex items-center gap-2 text-inherit">
            <span className="text-inherit">Works</span>
            {isWorkDetail && work && (
              <>
                <span className="hidden lg:inline text-fg-secondary">/</span>
                <motion.span
                  key={work.id}
                  initial={{ opacity: 0, x: -4 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="hidden lg:inline text-fg-primary"
                >
                  {work.title}
                </motion.span>
              </>
            )}
          </span>
        </Link>
      </div>
    </div>
  );
};
