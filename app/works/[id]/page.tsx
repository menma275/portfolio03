import Header from "@/components/Header";
import Card from "@/components/Card"
import Image from "next/image";
import works from "../../data/works.json"
import { notFound } from "next/navigation";

export default async function WorkPage({ params }: { params: { id: string } }) {

  const post = works.works.find((w) => w.path === params.id);
  if (!post) return notFound();

  return (
    <div className="box-border flex flex-col items-center justify-center text-sm relative w-full min-h-dvh">
      <Header />
      <div className="w-full max-w-4xl mt-0 md:mt-20">
        <div className="flex min-h-[50dvh] items-center justify-center relative">
          <Image
            src={post.images[0]}
            alt="portrait"
            fill
            className="flex justify-center p-6 aspect-square object-center object-contain"
          />
        </div>
        <div className="flex flex-col w-full h-full justify-between gap-6 p-6 md:p-12 overflow-y-auto">
          <p>{post.texts}</p>
        </div>
      </div>
      <h1>Similar Projects</h1>
      <div className="w-full h-full flex flex-wrap gap-12 items-center justify-center">
        {works.map((work: { path: string, title: string, images: string[], texts: string }) => (
          <Card key={work.path} path={work.path} image={work.images[0]} title={work.title} />
        ))}
      </div>
    </div>
  )
}
