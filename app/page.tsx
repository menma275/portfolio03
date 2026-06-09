"use client";

import { useState } from "react";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Awards } from "@/components/Awards";
import { Exhibitions } from "@/components/Exhibitions";
import { WorkList } from "@/components/WorkList";

type Tab = "profile" | "works";

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("works");

  return (
    <div className="flex flex-col gap-6">
      <div className="sticky top-0 z-30 bg-bg-primary py-4 -mx-4 px-4 sm:mx-0 sm:px-0">
        <div className="flex gap-6 w-full sm:w-fit p-0 md:pt-6">
          <button
            onClick={() => setActiveTab("works")}
            className={`cursor-pointer flex-1 sm:flex-none text-sm font-medium transition-all relative overflow-hidden text-center ${
              activeTab === "works"
                ? "text-fg-primary"
                : "text-fg-secondary hover:text-fg-primary"
            }`}
          >
            Works
          </button>
          <button
            onClick={() => setActiveTab("profile")}
            className={`cursor-pointer flex-1 sm:flex-none text-sm font-medium transition-all relative overflow-hidden text-center ${
              activeTab === "profile"
                ? "text-fg-primary"
                : "text-fg-secondary hover:text-fg-primary"
            }`}
          >
            Profile
          </button>
        </div>
      </div>

      <div className="transition-all duration-300">
        {activeTab === "profile" ? (
          <div className="flex flex-col gap-16">
            <Education />
            <Experience />
            <Awards />
            <Exhibitions />
          </div>
        ) : (
          <div className="flex flex-col gap-8">
            <WorkList />
          </div>
        )}
      </div>
    </div>
  );
}
