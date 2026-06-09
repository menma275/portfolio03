import { notFound } from "next/navigation";
import { works } from "@/data";
import { ExternalLink } from "@/components/ExternalLink";
import { WorkDetailSection } from "@/components/WorkDetailSection";
import { Carousel } from "@/components/Carousel";
import { ViewTransition } from "react";
import Link from "next/link";
import { HiChevronLeft } from "react-icons/hi";

interface PageProps {
  params: Promise<{ id: string }>;
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
    <article className="max-w-2xl mx-auto flex flex-col gap-6">
      <Link
        href="/"
        className="flex items-center gap-1 text-fg-secondary hover:text-fg-primary transition-colors w-fit -ml-1 text-xs font-mono"
      >
        <HiChevronLeft size={20} />
        Back to Home
      </Link>
      <header className="flex flex-col gap-4">
        <h1 className="font-bold text-fg-primary">{work.title}</h1>

        <div className="flex flex-wrap gap-x-3 gap-y-1">
          {work.technologies.map((tech) => (
            <span key={tech} className="text-fg-secondary text-xs font-mono">
              {tech}
            </span>
          ))}
        </div>

        {work.link && (
          <ExternalLink href={work.link} className="text-primary font-medium">
            Project Page
          </ExternalLink>
        )}
      </header>

      {work.imageUrl && (
        <div className="relative rounded-lg overflow-hidden flex items-center justify-center aspect-4/3 p-3 sm:p-6 bg-bg-secondary">
          <div
            className="absolute inset-0 bg-[url('/bg.png')] bg-cover bg-center opacity-100"
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
