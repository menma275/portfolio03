"use client";

import { useState, startTransition } from "react";
import { HazeBackground } from "./HazeBackground";
import { Carousel } from "./Carousel";
import { ViewTransition } from "react";
import { Work } from "../data/works";
import { ImageModal } from "./ImageModal";
import { AnimatePresence } from "motion/react";

interface WorkDetailClientProps {
  work: Work;
}

export function WorkDetailClient({ work }: WorkDetailClientProps) {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (index: number) => {
    startTransition(() => {
      setCarouselIndex(index);
      setIsModalOpen(true);
    });
  };

  const handleCloseModal = () => {
    startTransition(() => {
      setIsModalOpen(false);
    });
  };

  const images =
    work.images && work.images.length > 1
      ? work.images
      : work.imageUrl
        ? [work.imageUrl]
        : [];

  return (
    <>
      {work.imageUrl && (
        <div className="relative w-auto -mx-6 md:-mx-8 md:rounded-lg overflow-hidden aspect-[4/3] bg-bg-secondary">
          <div className="absolute inset-0 opacity-75">
            <HazeBackground />
          </div>
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            {work.images && work.images.length > 1 ? (
              <Carousel
                images={work.images}
                title={work.title}
                id={work.id}
                onImageClick={handleOpenModal}
                isModalOpen={isModalOpen}
                currentIndex={carouselIndex}
                onChangeIndex={setCarouselIndex}
              />
            ) : typeof ViewTransition !== "undefined" && !isModalOpen ? (
              <div className="w-full h-full flex items-center justify-center p-4 md:p-12">
                <ViewTransition name={`img-${work.id}`}>
                  <img
                    src={work.imageUrl}
                    alt={work.title}
                    className="max-w-full max-h-full object-contain rounded-lg border-2 md:border-[3px] border-border/50 cursor-zoom-in hover:scale-[1.01] transition-transform duration-300"
                    onClick={() => handleOpenModal(0)}
                  />
                </ViewTransition>
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center p-4 md:p-12">
                <img
                  src={work.imageUrl}
                  alt={work.title}
                  className="max-w-full max-h-full object-contain rounded-lg border-2 md:border-[3px] border-border/50 cursor-zoom-in hover:scale-[1.01] transition-transform duration-300"
                  onClick={() => handleOpenModal(0)}
                />
              </div>
            )}
          </div>
        </div>
      )}

      <AnimatePresence>
        {isModalOpen && images.length > 0 && (
          <ImageModal
            onClose={handleCloseModal}
            images={images}
            currentIndex={carouselIndex}
            onChangeIndex={setCarouselIndex}
            title={work.title}
            workId={work.id}
          />
        )}
      </AnimatePresence>
    </>
  );
}
