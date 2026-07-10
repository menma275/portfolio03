import { notFound } from "next/navigation";
import { works, awards } from "@/data";
import { Metadata } from "next";
import { ExternalLink } from "@/components/ExternalLink";
import { WorkDetailSection } from "@/components/WorkDetailSection";
import { FadeIn } from "@/components/FadeIn";
import { WorkCard } from "@/components/WorkCard";
import relatedWorksData from "@/data/related-works.json";
import { WorkDetailClient } from "@/components/WorkDetailClient";
import { LikeButton } from "@/components/LikeButton";

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

function getYouTubeEmbedUrl(url: string | undefined): string | null {
  if (!url) return null;
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  if (match && match[2].length === 11) {
    return `https://www.youtube.com/embed/${match[2]}`;
  }
  return null;
}

export default async function WorkDetailPage({ params }: PageProps) {
  const { id } = await params;
  const work = works.find((w) => w.id === id);

  if (!work) {
    notFound();
  }

  const workAwards = awards.filter((a) => a.workId === id);
  const embedUrl = getYouTubeEmbedUrl(work.youtube);

  return (
    <article className="max-w-2xl mx-auto flex flex-col gap-6 p-0 md:pt-8">
      <WorkDetailClient work={work} />
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

        {embedUrl && (
          <FadeIn delay={0.28}>
            <section className="flex flex-col gap-2">
              <h2 className="font-mono">Video</h2>
              <div className="relative w-full md:max-w-lg mx-auto aspect-video rounded-lg overflow-hidden border border-fg-secondary/10 bg-bg-secondary">
                <iframe
                  src={embedUrl}
                  title={`${work.title} video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>
            </section>
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

        {workAwards.length > 0 && (
          <FadeIn delay={0.35}>
            <section className="flex flex-col gap-4">
              <h2 className="font-mono">Awards</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left">
                  <tbody>
                    {workAwards.map((award) => (
                      <tr
                        key={award.id}
                        className="border-b border-fg-secondary/10 last:border-0 align-top"
                      >
                        {/* Date Column */}
                        <td className="py-4 pr-4 w-20 text-fg-secondary font-mono text-xs whitespace-nowrap">
                          {award.date}
                        </td>
                        {/* Content Column */}
                        <td className="py-4">
                          <div className="flex flex-col gap-3">
                            {/* Title & Prize */}
                            <div className="flex flex-col gap-1">
                              <div className="flex items-center gap-2 flex-wrap">
                                {award.url ? (
                                  <ExternalLink
                                    href={award.url}
                                    className="text-fg-primary font-semibold"
                                  >
                                    {award.title.ja}
                                  </ExternalLink>
                                ) : (
                                  <span className="text-fg-primary font-semibold">
                                    {award.title.ja}
                                  </span>
                                )}
                                {award.prize && (
                                  <span className="bg-accent-light px-2 py-0.5 rounded-full text-accent font-medium text-2xs w-fit shrink-0">
                                    {award.prize.ja}
                                  </span>
                                )}
                              </div>

                              {/* English translation for Title / Prize if they are different from Japanese */}
                              {(award.title.en !== award.title.ja ||
                                (award.prize &&
                                  award.prize.en !== award.prize.ja)) && (
                                <div className="flex items-center gap-2 text-fg-secondary italic text-xs flex-wrap">
                                  <span>{award.title.en}</span>
                                  {award.prize && (
                                    <span className="text-2xs opacity-80">
                                      ({award.prize.en})
                                    </span>
                                  )}
                                </div>
                              )}
                            </div>

                            {/* Descriptions */}
                            <div className="flex flex-col gap-1">
                              <p className="text-fg-primary leading-relaxed whitespace-pre-wrap">
                                {award.description.ja}
                              </p>
                              <p className="text-fg-secondary leading-relaxed whitespace-pre-wrap italic">
                                {award.description.en}
                              </p>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </FadeIn>
        )}
      </div>

      <LikeButton workId={work.id} />

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
              <FadeIn
                key={relatedWork.id}
                delay={0.45 + index * 0.05}
                className="h-full"
              >
                <WorkCard
                  id={relatedWork.id}
                  title={relatedWork.title}
                  category={relatedWork.category}
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
