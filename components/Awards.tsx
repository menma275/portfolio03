import React from "react";
import { awards } from "@/data";
import { InfoSection } from "./InfoSection";

export const Awards: React.FC = () => {
  const items = awards.map((award) => ({
    label: award.date,
    title: award.title,
    description: `${award.organization}${award.description ? ` - ${award.description}` : ""}`,
    url: award.url,
  }));

  return <InfoSection title="Awards" items={items} />;
};
