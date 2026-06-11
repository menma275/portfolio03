import React from "react";
import { education } from "@/data";
import { InfoSection } from "./InfoSection";

interface EducationProps {
  lang?: "ja" | "en";
}

export const Education: React.FC<EducationProps> = ({ lang = "ja" }) => {
  const items = education.map((edu) => ({
    label: edu.period[lang],
    title: edu.institution[lang],
    description: edu.degree[lang],
    url: edu.url,
  }));

  return <InfoSection title="Education" items={items} />;
};
