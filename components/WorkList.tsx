import React from "react";
import { works } from "@/data";
import { WorkCard } from "./WorkCard";
import { FadeIn } from "./FadeIn";

export const WorkList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {works.map((work, index) => (
        <FadeIn key={work.id} delay={index * 0.05}>
          <WorkCard
            id={work.id}
            title={work.title}
            imageUrl={work.imageUrl}
            technologies={work.technologies}
          />
        </FadeIn>
      ))}
    </div>
  );
};
