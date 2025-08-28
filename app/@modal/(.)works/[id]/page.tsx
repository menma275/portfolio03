import Modal from "@/components/Modal";
import works from "../../../data/works.json"
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function WorkModal({ params }: { params: { id: string } }) {

  const post = works.find((w) => w.path === params.id);
  if (!post) return notFound();

  return (
    <Modal>
      <div className="flex min-h-[50dvh] items-center justify-center bg-foreground relative">
        <Image
          src={post.images[0]}
          alt="portrait"
          fill
          className="flex justify-center p-6 aspect-square object-center object-contain"
        />
      </div>
      <div className="flex min-h-[50dvh] flex-col w-full h-full justify-between gap-6 p-6 md:p-12 overflow-y-auto">
        <h1>{post.title}</h1>
        <p>{post.texts}</p>
      </div>
    </Modal>
  )
}
