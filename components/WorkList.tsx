import React from "react";
import { works } from "@/data";
import { WorkCard } from "./WorkCard";

export const WorkList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {works.map((work) => (
        <WorkCard
          key={work.id}
          id={work.id}
          title={work.title}
          imageUrl={work.imageUrl}
          technologies={work.technologies}
        />
      ))}
    </div>
  );
};
