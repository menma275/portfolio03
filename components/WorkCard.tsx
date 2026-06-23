import React, { ViewTransition } from "react";
import Link from "next/link";

interface WorkCardProps {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  technologies: string[];
}

export const WorkCard: React.FC<WorkCardProps> = ({
  id,
  title,
  category,
  imageUrl,
  technologies,
}) => {
  return (
    <Link
      href={`/works/${id}`}
      className="group relative flex flex-col gap-3 hover:bg-bg-secondary hover:opacity-90 transition-all duration-300 w-full h-full rounded-lg overflow-hidden"
    >
      <div className="relative z-10 w-full p-3 pb-0">
        <div className="relative aspect-[4/3] w-full">
          <div className="absolute inset-0 flex items-center justify-center">
            {ViewTransition ? (
              <ViewTransition name={`img-${id}`}>
                <img
                  src={imageUrl}
                  alt={title}
                  className="max-w-full max-h-full object-contain rounded-sm"
                />
              </ViewTransition>
            ) : (
              <img
                src={imageUrl}
                alt={title}
                className="max-w-full max-h-full object-contain rounded-sm"
                loading="lazy"
              />
            )}
          </div>
        </div>
      </div>
      <div className="relative z-10 flex flex-col gap-1.5 p-4 pt-2">
        <span className="text-fg-secondary text-2xs font-mono tracking-wider">
          {category}
        </span>
        <h3 className="text-fg-primary font-medium truncate">{title}</h3>
        <div className="flex flex-wrap gap-x-2">
          <span className="text-fg-secondary text-xs font-mono">
            {technologies.join(", ")}
          </span>
        </div>
      </div>
    </Link>
  );
};
