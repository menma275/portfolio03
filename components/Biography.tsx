import React from "react";
import { timeline } from "@/data";
import { InfoSection } from "./InfoSection";

export const Biography: React.FC = () => {
  const items = timeline.map((event) => ({
    label: event.year,
    title: event.title,
    description: event.description,
    url: event.url,
  }));

  return <InfoSection title="Biography" items={items} />;
};
