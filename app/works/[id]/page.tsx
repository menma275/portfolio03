import { notFound } from "next/navigation";
import { works } from "@/data";
import { Metadata } from "next";
import { ExternalLink } from "@/components/ExternalLink";
import { WorkDetailSection } from "@/components/WorkDetailSection";
import { Carousel } from "@/components/Carousel";
import { ViewTransition } from "react";
import Link from "next/link";
import { HiChevronLeft } from "react-icons/hi";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const work = works.find((w) => w.id === id);

  if (!work) return {};

  return {
    title: work.title,
    openGraph: {
      title: work.title,
      description: work.description,
      images: [work.imageUrl],
    },
  };
}

export async function generateStaticParams() {
  return works.map((work) => ({
    id: work.id,
  }));
}

export default async function WorkDetailPage({ params }: PageProps) {
  const { id } = await params;
  const work = works.find((w) => w.id === id);

  if (!work) {
    notFound();
  }

  return (
    <article className="max-w-2xl mx-auto flex flex-col gap-6 p-0 md:pt-8">
      <Link
        href="/"
        className="flex items-center gap-1 text-fg-secondary hover:text-fg-primary transition-colors w-fit -ml-1 text-xs font-mono"
      >
        <HiChevronLeft size={20} />
        Back to Home
      </Link>
      <div className="flex flex-wrap gap-x-3 gap-y-1">
        <span className="text-fg-secondary text-xs font-mono">
          {work.technologies.join(", ")}
        </span>
      </div>
      <header className="flex flex-wrap w-full justify-between">
        <h1 className="font-bold text-fg-primary">{work.title}</h1>
      </header>

      {work.imageUrl && (
        <div className="relative rounded-lg overflow-hidden flex items-center justify-center aspect-4/3 p-3 sm:p-6 bg-bg-secondary">
          <div
            className="absolute inset-0 bg-[url('/bg.png')] bg-cover bg-center animate-fade-in opacity-0"
            aria-hidden="true"
          />
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            {work.images && work.images.length > 1 ? (
              <Carousel images={work.images} title={work.title} id={id} />
            ) : ViewTransition ? (
              <ViewTransition name={`img-${id}`}>
                <img
                  src={work.imageUrl}
                  alt={work.title}
                  className="max-w-full max-h-full object-contain"
                />
              </ViewTransition>
            ) : (
              <img
                src={work.imageUrl}
                alt={work.title}
                className="max-w-full max-h-full object-contain"
              />
            )}
          </div>
        </div>
      )}
      {work.link && (
        <div className="flex items-center justify-between gap-4 bg-bg-secondary px-4 py-2 rounded-lg">
          <p className="shrink-0 text-fg-secondary text-sm">Project Page</p>
          <div className="min-w-0 flex justify-end">
            <ExternalLink href={work.link} className="text-primary font-medium">
              {work.link}
            </ExternalLink>
          </div>
        </div>
      )}
      <div className="flex flex-col gap-12">
        {work.details?.overview && (
          <WorkDetailSection
            title="Overview"
            ja={work.details.overview.ja}
            en={work.details.overview.en}
          />
        )}

        {work.details?.concept && (
          <WorkDetailSection
            title="Concept"
            ja={work.details.concept.ja}
            en={work.details.concept.en}
          />
        )}
      </div>
    </article>
  );
}
