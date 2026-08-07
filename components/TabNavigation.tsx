"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { works } from "@/data/works";
import { motion } from "motion/react";
import { getPostTitle } from "@/actions/logs";

const CATEGORY_MAP: Record<string, string> = {
  "Web Application": "webapp",
  "Hardware & Electronics": "hardware",
  "Web Site": "website",
  "Interactive Art": "interactive",
  "Graphic Design": "graphic",
  "Generative Art": "generative",
};

const getQueryParamFromCategory = (category: string): string => {
  return (
    CATEGORY_MAP[category] || category.toLowerCase().replace(/[^a-z0-9]+/g, "-")
  );
};

const logTitleCache: Record<string, string> = {};

export const TabNavigation: React.FC = () => {
  const pathname = usePathname();
  const [logTitle, setLogTitle] = useState<string | null>(null);

  useEffect(() => {
    // Reset scroll position when pathname changes
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleClick = (path: string) => {
    navigator?.vibrate?.(5);
    if (pathname === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path === "/profile" && pathname === "/profile") return true;
    if (path === "/logs" && pathname.startsWith("/logs")) return true;
    return false;
  };

  const isWorkDetail = pathname.startsWith("/works/");
  const workId = isWorkDetail
    ? pathname.split("/").filter(Boolean).pop()
    : null;
  const work = works.find((w) => w.id === workId);

  const isLogDetail = pathname.startsWith("/logs/") && pathname !== "/logs";
  const logSlug = isLogDetail
    ? pathname.split("/").filter(Boolean).pop()
    : null;

  useEffect(() => {
    if (!logSlug) {
      Promise.resolve().then(() => setLogTitle(null));
      return;
    }

    if (logTitleCache[logSlug]) {
      const cached = logTitleCache[logSlug];
      Promise.resolve().then(() => setLogTitle(cached));
      return;
    }

    getPostTitle(logSlug).then((title) => {
      if (title) {
        logTitleCache[logSlug] = title;
        setLogTitle(title);
      }
    });
  }, [logSlug]);

  return (
    <div className="px-6 md:px-8 bg-bg-primary pt-0 md:pt-3 pb-6">
      <div className="flex gap-6 w-full md:w-fit p-0 md:pt-6">
        <Link
          href="/profile"
          onClick={() => handleClick("/profile")}
          className={`cursor-pointer flex-1 md:flex-none text-sm font-medium transition-all relative overflow-hidden text-center ${
            isActive("/profile")
              ? "text-fg-primary"
              : "text-fg-secondary hover:text-fg-primary"
          }`}
        >
          Profile
        </Link>
        {isWorkDetail && work ? (
          <span className="flex-1 md:flex-none inline-flex items-center gap-2 text-sm font-medium text-center justify-center md:justify-start">
            <Link
              href="/"
              onClick={() => handleClick("/")}
              className="cursor-pointer text-fg-primary lg:text-fg-secondary lg:hover:text-fg-primary transition-all relative"
            >
              Works
            </Link>
            <span className="hidden lg:inline text-fg-secondary">/</span>
            <Link
              href={`/?category=${getQueryParamFromCategory(work.category)}`}
              onClick={() => navigator?.vibrate?.(5)}
              className="hidden lg:inline cursor-pointer text-fg-secondary hover:text-fg-primary transition-all relative"
            >
              {work.category}
            </Link>
            <span className="hidden lg:inline text-fg-secondary">/</span>
            <motion.span
              key={work.id}
              initial={{ opacity: 0, x: -4 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="hidden lg:inline text-fg-primary relative"
            >
              {work.title}
            </motion.span>
          </span>
        ) : (
          <Link
            href="/"
            onClick={() => handleClick("/")}
            className={`cursor-pointer flex-1 md:flex-none text-sm font-medium transition-all relative overflow-hidden text-center ${
              isActive("/")
                ? "text-fg-primary"
                : "text-fg-secondary hover:text-fg-primary"
            }`}
          >
            Works
          </Link>
        )}
        {isLogDetail ? (
          <span className="flex-1 md:flex-none inline-flex items-center gap-2 text-sm font-medium text-center justify-center md:justify-start">
            <Link
              href="/logs"
              onClick={() => handleClick("/logs")}
              className="cursor-pointer text-fg-primary lg:text-fg-secondary lg:hover:text-fg-primary transition-all relative"
            >
              Logs
            </Link>
            <span className="hidden lg:inline text-fg-secondary">/</span>
            <motion.span
              key={logSlug || ""}
              initial={{ opacity: 0, x: -4 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="hidden lg:inline text-fg-primary relative"
            >
              {logTitle || logSlug}
            </motion.span>
          </span>
        ) : (
          <Link
            href="/logs"
            onClick={() => handleClick("/logs")}
            className={`cursor-pointer flex-1 md:flex-none text-sm font-medium transition-all relative overflow-hidden text-center ${
              isActive("/logs")
                ? "text-fg-primary"
                : "text-fg-secondary hover:text-fg-primary"
            }`}
          >
            Logs
          </Link>
        )}
      </div>
    </div>
  );
};
