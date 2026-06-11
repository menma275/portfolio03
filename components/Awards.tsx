import React from "react";
import { awards } from "@/data";
import { InfoSection } from "./InfoSection";

interface AwardsProps {
  lang?: "ja" | "en";
}

export const Awards: React.FC<AwardsProps> = ({ lang = "ja" }) => {
  const items = awards.map((award) => ({
    label: award.date,
    title: award.title[lang],
    prize: award.prize ? award.prize[lang] : undefined,
    description: award.description[lang],
    url: award.url,
    workId: award.workId,
  }));

  return <InfoSection title="Awards" items={items} />;
};
