import React from "react";
import { experiences } from "@/data";
import { InfoSection } from "./InfoSection";

export const Experience: React.FC = () => {
  const items = experiences.map((exp) => ({
    label: exp.period,
    title: exp.company,
    description: `${exp.position}\n${exp.description}`,
    url: exp.url,
  }));

  return <InfoSection title="Work Experience" items={items} />;
};
