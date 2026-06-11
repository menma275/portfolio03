import React from "react";
import { experiences } from "@/data";
import { InfoSection } from "./InfoSection";

interface ExperienceProps {
  lang?: "ja" | "en";
}

export const Experience: React.FC<ExperienceProps> = ({ lang = "ja" }) => {
  const items = experiences.map((exp) => ({
    label: exp.period[lang],
    title: exp.company,
    description: `${exp.position[lang]}\n${exp.description[lang]}`,
    url: exp.url,
  }));

  return <InfoSection title="Work Experience" items={items} />;
};
