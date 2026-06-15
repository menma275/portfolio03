"use client";

import { useState, useEffect, startTransition } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { motion, AnimatePresence } from "motion/react";
import { incrementLike } from "@/actions/likes";
import { useWebHaptics } from "web-haptics/react";

interface LikeButtonProps {
  workId: string;
  initialLikes: number;
}

export function LikeButton({ workId, initialLikes }: LikeButtonProps) {
  const [likes, setLikes] = useState(initialLikes);
  const [hasLiked, setHasLiked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const { trigger } = useWebHaptics();

  useEffect(() => {
    const liked = localStorage.getItem(`liked_${workId}`);
    if (liked) {
      startTransition(() => {
        setHasLiked(true);
      });
    }
  }, [workId]);

  const handleLike = async () => {
    if (hasLiked) return;

    // Haptic feedback
    trigger([5]);

    // Optimistic update
    setLikes((prev) => prev + 1);
    setHasLiked(true);
    setIsAnimating(true);
    localStorage.setItem(`liked_${workId}`, "true");

    try {
      const updatedLikes = await incrementLike(workId);
      setLikes(updatedLikes);
    } catch (error) {
      console.error("Failed to sync like:", error);
      // Fallback if needed, but for simplicity we keep the optimistic state
    } finally {
      setTimeout(() => setIsAnimating(false), 1000);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-center gap-2">
      <AnimatePresence>
        {isAnimating && (
          <motion.div
            initial={{ opacity: 1, y: 0, scale: 0.5 }}
            animate={{ opacity: 0, y: -40, scale: 1.5 }}
            exit={{ opacity: 0 }}
            className="absolute text-accent pointer-events-none"
          >
            <AiFillHeart size={24} />
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={handleLike}
        disabled={hasLiked}
        className={`
          flex items-center gap-2 px-4 py-2 rounded-full transition-all backdrop-blur-sm
          ${
            hasLiked
              ? "bg-bg-secondary/40 text-fg-primary cursor-default"
              : "bg-bg-primary/40 text-fg-primary hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
          }
        `}
      >
        {hasLiked ? (
          <AiFillHeart className="text-accent" size={20} />
        ) : (
          <AiOutlineHeart size={20} />
        )}
        <span className="font-mono text-sm font-bold">{likes}</span>
      </button>
    </div>
  );
}
