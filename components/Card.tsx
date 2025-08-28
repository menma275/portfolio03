"use client";
import Link from "next/link";
import Image from "next/image";
import { useAtom } from "jotai";
import { titleAtom } from "@/state/atom";

export default function Card({ path, image, title }: { path: string, image: string, title: string }) {
  const [, setTitle] = useAtom(titleAtom);

  const handleClick = () => {
    setTitle(title);
  }

  return (
    <Link onClick={handleClick} href={`/works/${path}`} className="w-fit h-fit relative rounded-md overflow-hidden border border-transparent hover:border-foreground ring-4 ring-background-transparent z-100 transition-all duration-300">
      <Image
        src={image}
        alt={title}
        width={150}
        height={150}
        className="object-contain object-center"
      />
      <div className="z-10 absolute top-0 left-0 backdrop-blur-[10px] [mask-image:linear-gradient(to_bottom,transparent_0%,black_90%)] w-full h-full" />
      <h1 className="absolute z-50 bottom-3 left-3">{title}</h1>
    </Link>
  )
}
