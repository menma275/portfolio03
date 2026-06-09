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
      className="group relative flex flex-col gap-3 hover:opacity-90 transition-opacity w-full bg-bg-secondary rounded-lg overflow-hidden"
    >
      <div className="relative z-10 w-full p-3 pb-0">
        <div className="relative aspect-4/3 flex items-center justify-center">
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
            />
          )}
        </div>
      </div>
      <div className="relative z-10 flex flex-col gap-2 p-4 pt-2">
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
