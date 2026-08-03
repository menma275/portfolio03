"use client";

import React, { Suspense } from "react";
import { works } from "@/data";
import { WorkCard } from "./WorkCard";
import { FadeIn } from "./FadeIn";
import { useWebHaptics } from "web-haptics/react";
import { motion } from "motion/react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

const CATEGORY_MAP: Record<string, string> = {
  "Web Application": "webapp",
  "Hardware & Electronics": "hardware",
  "Web Site": "website",
  "Interactive Art": "interactive",
  "Graphic Design": "graphic",
  "Generative Art": "generative",
};

const REVERSE_CATEGORY_MAP = Object.fromEntries(
  Object.entries(CATEGORY_MAP).map(([key, value]) => [value, key]),
);

const getQueryParamFromCategory = (category: string): string => {
  return (
    CATEGORY_MAP[category] || category.toLowerCase().replace(/[^a-z0-9]+/g, "-")
  );
};

const getCategoryFromQueryParam = (param: string | null): string => {
  if (!param) return "All";
  const mapped = REVERSE_CATEGORY_MAP[param];
  if (mapped) return mapped;

  // Case-insensitive/slugified fallback search
  const found = Object.keys(CATEGORY_MAP).find(
    (key) => getQueryParamFromCategory(key) === param,
  );
  return found || "All";
};

const WorkListContent: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { trigger } = useWebHaptics();

  const queryCategory = searchParams.get("category");
  const selectedCategory = getCategoryFromQueryParam(queryCategory);

  // Extract unique categories dynamically and add "All" at the beginning
  const categories = [
    "All",
    ...Array.from(new Set(works.map((work) => work.category))),
  ];

  const handleCategoryChange = (category: string) => {
    trigger([5]); // Web Haptics tactile feedback
    const queryVal = getQueryParamFromCategory(category);
    const query = category === "All" ? "" : `?category=${queryVal}`;
    router.push(`${pathname}${query}`, { scroll: false });
  };

  const filteredWorks =
    selectedCategory === "All"
      ? works
      : works.filter((work) => work.category === selectedCategory);

  return (
    <div className="flex flex-col gap-6">
      {/* Category Filter Tabs */}
      <div className="hidden sm:flex flex-wrap gap-x-6 gap-y-3 sticky top-47 md:top-20 bg-bg-primary z-30 pb-2">
        {categories.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`cursor-pointer text-xs font-mono transition-colors relative pb-2 ${
                isActive
                  ? "text-fg-primary font-medium"
                  : "text-fg-secondary hover:text-fg-primary"
              }`}
            >
              {category}
              {isActive && (
                <motion.div
                  layoutId="activeCategoryBorder"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-fg-primary"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Work Cards Grid */}
      <div
        key={selectedCategory}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4"
      >
        {filteredWorks.map((work, index) => (
          <FadeIn key={work.id} delay={index * 0.05} className="h-full">
            <WorkCard
              id={work.id}
              title={work.title}
              category={work.category}
              imageUrl={work.imageUrl}
              technologies={work.technologies}
            />
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

const WorkCardSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col gap-3 bg-bg-secondary border border-transparent rounded-lg overflow-hidden w-full h-full">
      <div className="w-full p-3 pb-0">
        <div className="aspect-4/3 w-full bg-bg-primary rounded-sm" />
      </div>
      <div className="flex flex-col gap-2 p-4 pt-2">
        <div className="h-3 w-16 bg-bg-primary rounded-xs" />
        <div className="h-5 w-3/4 bg-bg-primary rounded-xs" />
        <div className="h-3 w-1/2 bg-bg-primary rounded-xs mt-1" />
      </div>
    </div>
  );
};

export const WorkList: React.FC = () => {
  return (
    <Suspense
      fallback={
        <div className="flex flex-col gap-6">
          {/* Category Filter Tabs Skeleton */}
          <div className="hidden sm:flex flex-wrap gap-x-6 gap-y-3 sticky top-47 md:top-20 bg-bg-primary z-30 pb-2">
            <div className="h-4 w-10 bg-bg-secondary rounded-xs" />
            <div className="h-4 w-24 bg-bg-secondary rounded-xs" />
            <div className="h-4 w-32 bg-bg-secondary rounded-xs" />
            <div className="h-4 w-20 bg-bg-secondary rounded-xs" />
          </div>

          {/* Work Cards Grid Skeleton */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <WorkCardSkeleton key={index} />
            ))}
          </div>
        </div>
      }
    >
      <WorkListContent />
    </Suspense>
  );
};
