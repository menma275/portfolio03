"use client";

import { LikeButton } from "./LikeButton";
import { HazeBackground } from "./HazeBackground";
import { Carousel } from "./Carousel";
import { ViewTransition } from "react";
import { Work } from "../data/works";

interface WorkDetailClientProps {
  work: Work;
}

export function WorkDetailClient({ work }: WorkDetailClientProps) {
  return (
    <>
      <LikeButton workId={work.id} />

      {work.imageUrl && (
        <div className="relative rounded-lg overflow-hidden flex items-center justify-center aspect-4/3 bg-bg-secondary">
          <div className="absolute inset-0">
            <HazeBackground />
          </div>
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            {work.images && work.images.length > 1 ? (
              <Carousel images={work.images} title={work.title} id={work.id} />
            ) : ViewTransition ? (
              <ViewTransition name={`img-${work.id}`}>
                <img
                  src={work.imageUrl}
                  alt={work.title}
                  className="max-w-full max-h-full object-contain rounded-lg p-3 sm:p-6"
                />
              </ViewTransition>
            ) : (
              <img
                src={work.imageUrl}
                alt={work.title}
                className="max-w-full max-h-full object-contain rounded-lg p-3 sm:p-6"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
