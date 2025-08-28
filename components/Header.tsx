"use client"

import { useRouter } from "next/navigation";
import { LuUndo2 } from "react-icons/lu";
import { useAtom } from "jotai";
import { titleAtom } from "@/state/atom";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

function Header({ isBackButton = true }: { isBackButton?: boolean }) {
  const [title, setTitle] = useAtom(titleAtom);
  const router = useRouter()
  const [hovered, setHovered] = useState<boolean>(false)

  const handleBack = () => {
    if (isBackButton) {
      setTitle("Kusuke Sakamura");
      router.back();
    }
  }

  return (
    <button onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onClick={handleBack} className="group cursor-pointer z-100 bg-gradient-to-b from-accent-light to-accent text-foreground flex flex-row items-center justify-between max-w-xl w-fit md:w-full h-fit px-3 md:px-4 py-2 rounded-full fixed aspect-square md:aspect-auto top-6 right-6 md:left-1/2 md:-translate-x-1/2">
      <h1 className="relative hidden md:block">
        <AnimatePresence mode="wait" initial={false}>
          {hovered ? (
            <motion.span
              key="hover"
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              transition={{ duration: 0.2 }}
            >
              back to Home
            </motion.span>
          ) : (
            <motion.span
              key="title"
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              {title}
            </motion.span>
          )}
        </AnimatePresence>
      </h1>
      {isBackButton && (
        <LuUndo2 className="text-lg opacity-100 md:opacity-0" />
      )}
    </button>

  )
}

export default Header;
