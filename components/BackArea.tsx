"use client"

import { useRouter } from "next/navigation";
import { useAtom } from "jotai";
import { titleAtom } from "@/state/atom";

function BackArea() {

  const router = useRouter()
  const [, setTitle] = useAtom(titleAtom);

  const handleClick = () => {
    setTitle("Kusuke Sakamura");
    router.back();
  }

  return <div className="fixed top-0 left-0 z-30 w-full h-full" onClick={handleClick} />
}

export default BackArea;
