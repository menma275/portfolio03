"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useWebHaptics } from "web-haptics/react";
import { works } from "@/data/works";
import { motion } from "motion/react";
import { getPostTitle } from "@/actions/blog";

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

const blogTitleCache: Record<string, string> = {};

export const TabNavigation: React.FC = () => {
  const pathname = usePathname();
  const { trigger } = useWebHaptics();
  const [blogTitle, setBlogTitle] = useState<string | null>(null);

  useEffect(() => {
    // Reset scroll position when pathname changes
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleClick = (path: string) => {
    trigger([5]);
    if (pathname === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path === "/profile" && pathname === "/profile") return true;
    if (path === "/blog" && pathname.startsWith("/blog")) return true;
    return false;
  };

  const isWorkDetail = pathname.startsWith("/works/");
  const workId = isWorkDetail
    ? pathname.split("/").filter(Boolean).pop()
    : null;
  const work = works.find((w) => w.id === workId);

  const isBlogDetail = pathname.startsWith("/blog/") && pathname !== "/blog";
  const blogSlug = isBlogDetail
    ? pathname.split("/").filter(Boolean).pop()
    : null;

  useEffect(() => {
    if (!blogSlug) {
      Promise.resolve().then(() => setBlogTitle(null));
      return;
    }

    if (blogTitleCache[blogSlug]) {
      const cached = blogTitleCache[blogSlug];
      Promise.resolve().then(() => setBlogTitle(cached));
      return;
    }

    getPostTitle(blogSlug).then((title) => {
      if (title) {
        blogTitleCache[blogSlug] = title;
        setBlogTitle(title);
      }
    });
  }, [blogSlug]);

  return (
    <div className="px-6 md:px-8 bg-bg-primary pt-3 pb-6">
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
              onClick={() => trigger([5])}
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
        {isBlogDetail ? (
          <span className="flex-1 md:flex-none inline-flex items-center gap-2 text-sm font-medium text-center justify-center md:justify-start">
            <Link
              href="/blog"
              onClick={() => handleClick("/blog")}
              className="cursor-pointer text-fg-primary lg:text-fg-secondary lg:hover:text-fg-primary transition-all relative"
            >
              Blog
            </Link>
            <span className="hidden lg:inline text-fg-secondary">/</span>
            <motion.span
              key={blogSlug || ""}
              initial={{ opacity: 0, x: -4 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="hidden lg:inline text-fg-primary relative"
            >
              {blogTitle || blogSlug}
            </motion.span>
          </span>
        ) : (
          <Link
            href="/blog"
            onClick={() => handleClick("/blog")}
            className={`cursor-pointer flex-1 md:flex-none text-sm font-medium transition-all relative overflow-hidden text-center ${
              isActive("/blog")
                ? "text-fg-primary"
                : "text-fg-secondary hover:text-fg-primary"
            }`}
          >
            Blog
          </Link>
        )}
      </div>
    </div>
  );
};
