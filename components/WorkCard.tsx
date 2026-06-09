import React, { ViewTransition } from "react";
import Link from "next/link";

interface WorkCardProps {
  id: string;
  title: string;
  imageUrl: string;
  technologies: string[];
}

export const WorkCard: React.FC<WorkCardProps> = ({
  id,
  title,
  imageUrl,
  technologies,
}) => {
  return (
    <Link
      href={`/works/${id}`}
      className="group flex flex-col gap-3 hover:opacity-70 transition-opacity w-full bg-bg-secondary rounded-lg"
    >
      <div className="w-full p-3">
        {ViewTransition ? (
          <ViewTransition name={`img-${id}`}>
            <img
              src={imageUrl}
              alt={title}
              className="h-full aspect-4/3 object-contain"
            />
          </ViewTransition>
        ) : (
          <img
            src={imageUrl}
            alt={title}
            className="h-full aspect-4/3 object-contain"
          />
        )}
      </div>
      <div className="flex flex-col gap-2 p-4">
        <h3 className="text-fg-primary font-medium group-hover:underline">
          {title}
        </h3>
        <div className="flex flex-wrap gap-x-2">
          {technologies.map((tech) => (
            <span key={tech} className="text-fg-secondary text-xs font-mono">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};
