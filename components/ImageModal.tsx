"use client";

import { useEffect, useState, useCallback, ViewTransition } from "react";
import { motion, useIsPresent } from "motion/react";
import { HiChevronLeft, HiChevronRight, HiX } from "react-icons/hi";

interface ImageModalProps {
  onClose: () => void;
  images: string[];
  currentIndex: number;
  onChangeIndex: (index: number) => void;
  title: string;
  workId?: string;
}

export function ImageModal({
  onClose,
  images,
  currentIndex,
  onChangeIndex,
  title,
  workId,
}: ImageModalProps) {
  const isPresent = useIsPresent();
  const [isFirstRender, setIsFirstRender] = useState(true);

  const handlePrev = useCallback(() => {
    navigator?.vibrate?.(5);
    onChangeIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  }, [images.length, currentIndex, onChangeIndex]);

  const handleNext = useCallback(() => {
    navigator?.vibrate?.(5);
    onChangeIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  }, [images.length, currentIndex, onChangeIndex]);

  const handleClose = useCallback(() => {
    navigator?.vibrate?.(5);
    onClose();
  }, [onClose]);

  // Set isFirstRender to false on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFirstRender(false);
    }, 0);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      } else if (e.key === "ArrowRight" && images.length > 1) {
        handleNext();
      } else if (e.key === "ArrowLeft" && images.length > 1) {
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [images.length, handleClose, handleNext, handlePrev]);

  return (
    <div className="fixed inset-0 z-modal flex items-center justify-center select-none">
      {/* Backdrop overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 backdrop-blur-lg"
        onClick={handleClose}
      />

      {/* Close Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={(e) => {
          e.stopPropagation();
          handleClose();
        }}
        className="absolute top-4 right-4 z-modal-content p-2 text-fg-secondary hover:text-fg-primary rounded-full hover:bg-bg-secondary transition-colors duration-200 cursor-pointer"
        aria-label="Close modal"
      >
        <HiX size={28} />
      </motion.button>

      {/* Content Container */}
      <div className="relative w-full h-full flex items-center justify-center p-8 md:p-24 pointer-events-none">
        {/* Main Image */}
        <div className="relative max-w-full max-h-full flex items-center justify-center pointer-events-auto">
          <motion.div
            key={currentIndex}
            initial={isFirstRender ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative flex items-center justify-center"
          >
            {workId && typeof ViewTransition !== "undefined" && isPresent ? (
              <ViewTransition name={`img-${workId}`}>
                <img
                  src={images[currentIndex]}
                  alt={`${title} - modal image ${currentIndex + 1}`}
                  className="modal-image object-contain rounded-lg border border-border/50"
                  onClick={(e) => e.stopPropagation()}
                />
              </ViewTransition>
            ) : (
              <img
                src={images[currentIndex]}
                alt={`${title} - modal image ${currentIndex + 1}`}
                className="modal-image object-contain rounded-lg border border-border/50"
                onClick={(e) => e.stopPropagation()}
              />
            )}
          </motion.div>
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-modal-content"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="p-3 text-fg-secondary hover:text-fg-primary rounded-full hover:bg-bg-secondary transition-colors duration-200 cursor-pointer pointer-events-auto"
              aria-label="Previous image"
            >
              <HiChevronLeft size={36} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="p-3 text-fg-secondary hover:text-fg-primary rounded-full hover:bg-bg-secondary transition-colors duration-200 cursor-pointer pointer-events-auto"
              aria-label="Next image"
            >
              <HiChevronRight size={36} />
            </button>
          </motion.div>
        )}

        {/* Image indicator and title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-center pointer-events-none"
        >
          {images.length > 1 && (
            <span className="text-fg-secondary text-2xs font-mono">
              {currentIndex + 1} / {images.length}
            </span>
          )}
        </motion.div>
      </div>
    </div>
  );
}
