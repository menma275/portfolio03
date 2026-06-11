import React from "react";
import { exhibitions } from "@/data";
import { InfoSection } from "./InfoSection";

interface ExhibitionsProps {
  lang?: "ja" | "en";
}

export const Exhibitions: React.FC<ExhibitionsProps> = ({ lang = "ja" }) => {
  const items = exhibitions.map((ex) => ({
    label: ex.date,
    title: ex.title[lang],
    description: `${ex.role[lang]}\n${ex.description[lang]}`,
    url: ex.url,
  }));

  return <InfoSection title="Exhibitions" items={items} />;
};
