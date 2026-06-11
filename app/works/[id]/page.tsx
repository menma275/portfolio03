import { notFound } from "next/navigation";
import { works } from "@/data";
import { Metadata } from "next";
import { ExternalLink } from "@/components/ExternalLink";
import { WorkDetailSection } from "@/components/WorkDetailSection";
import { Carousel } from "@/components/Carousel";
import { ViewTransition } from "react";
import { FadeIn } from "@/components/FadeIn";
import { WorkCard } from "@/components/WorkCard";
import relatedWorksData from "@/data/related-works.json";

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
      <FadeIn delay={0.1}>
        <div className="flex flex-wrap gap-x-3 gap-y-1">
          <span className="text-fg-secondary text-xs font-mono">
            {work.technologies.join(", ")}
          </span>
        </div>
      </FadeIn>

      <FadeIn delay={0.15}>
        <header className="flex flex-wrap w-full justify-between">
          <h1 className="font-bold text-fg-primary">{work.title}</h1>
        </header>
      </FadeIn>

      {work.imageUrl && (
        <div className="relative rounded-lg overflow-hidden flex items-center justify-center aspect-4/3 bg-bg-secondary">
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
                  className="max-w-full max-h-full object-contain rounded-lg p-3 sm:p-6"
                />
              </ViewTransition>
            ) : (
              <img
                src={work.imageUrl}
                alt={work.title}
                className="max-w-full max-h-full object-contain rounded-lg p-3 sm:p-6"
              />
            )}
          </div>
        </div>
      )}

      {work.link && (
        <FadeIn delay={0.2}>
          <div className="flex items-center justify-between gap-4 bg-bg-secondary px-4 py-2 rounded-lg">
            <p className="shrink-0 text-fg-secondary text-sm">Project Page</p>
            <div className="min-w-0 flex justify-end">
              <ExternalLink
                href={work.link}
                className="text-fg-secondary font-medium"
                truncate={true}
              >
                {work.link}
              </ExternalLink>
            </div>
          </div>
        </FadeIn>
      )}

      <div className="flex flex-col gap-12">
        {work.details?.overview && (
          <FadeIn delay={0.25}>
            <WorkDetailSection
              title="Overview"
              ja={work.details.overview.ja}
              en={work.details.overview.en}
            />
          </FadeIn>
        )}

        {work.details?.concept && (
          <FadeIn delay={0.3}>
            <WorkDetailSection
              title="Concept"
              ja={work.details.concept.ja}
              en={work.details.concept.en}
            />
          </FadeIn>
        )}
      </div>

      <section className="mt-20 flex flex-col gap-8 pb-20">
        <FadeIn delay={0.4}>
          <h2 className="font-mono">Related Works</h2>
          <span className="text-fg-secondary text-xs font-mono">
            Generated via vector embeddings
          </span>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {((relatedWorksData as Record<string, string[]>)[id] || [])
            .map((relatedId) => works.find((w) => w.id === relatedId))
            .filter((w): w is (typeof works)[number] => !!w)
            .map((relatedWork, index) => (
              <FadeIn key={relatedWork.id} delay={0.45 + index * 0.05}>
                <WorkCard
                  id={relatedWork.id}
                  title={relatedWork.title}
                  imageUrl={relatedWork.imageUrl}
                  technologies={relatedWork.technologies}
                />
              </FadeIn>
            ))}
        </div>
      </section>
    </article>
  );
}
