import Header from "@/components/Header";
import Card from "@/components/Card"
import Image from "next/image";
import works from "./data/works.json"

export default function Home() {
  return (
    <div className="text-foreground box-border flex flex-col items-center justify-center text-sm relative w-full min-h-dvh">
      <Image
        src="/img/cloud-mono.jpeg"
        alt="background"
        fill
        className="fixed top-0 left-0 w-full h-full object-cover -z-50"
        priority
      />
      <div
      // className="fixed top-0 left-0 w-full h-full object-cover -z-40 bg-blue-300 mix-blend-overlay [mask-image:linear-gradient(to_bottom,transparent_0%,black_50%)]"
      />
      <Header />
      <div className="fixed top-0 left-0 w-full h-full flex flex-wrap gap-12 items-center justify-center">
        {works.map((work: { path: string, title: string, images: string[], texts: string }) => (
          <Card key={work.path} path={work.path} image={work.images[0]} title={work.title} />
        ))}
      </div>
    </div>
  )
}
