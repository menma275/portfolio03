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
        <div className="relative w-auto -mx-6 md:mx-0 md:rounded-lg overflow-hidden aspect-[4/3] bg-bg-secondary">
          <div className="absolute inset-0 opacity-75">
            <HazeBackground />
          </div>
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            {work.images && work.images.length > 1 ? (
              <Carousel images={work.images} title={work.title} id={work.id} />
            ) : ViewTransition ? (
              <div className="w-full h-full flex items-center justify-center p-4 md:p-12">
                <ViewTransition name={`img-${work.id}`}>
                  <img
                    src={work.imageUrl}
                    alt={work.title}
                    className="max-w-full max-h-full object-contain rounded-lg border border-border"
                  />
                </ViewTransition>
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center p-4 md:p-12">
                <img
                  src={work.imageUrl}
                  alt={work.title}
                  className="max-w-full max-h-full object-contain rounded-lg border border-border"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
