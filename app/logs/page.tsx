import { Metadata } from "next";
import { getSortedPostsData } from "@/lib/logs";
import { FadeIn } from "@/components/FadeIn";
import { LogCard } from "@/components/LogCard";

export const metadata: Metadata = {
  title: "Logs",
};

export default function LogsPage() {
  const posts = getSortedPostsData();

  return (
    <div className="flex flex-col gap-6">
      <div className="transition-all duration-300">
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <FadeIn key={post.slug} delay={index * 0.05}>
                <LogCard post={post} />
              </FadeIn>
            ))}
          </div>
          {posts.length === 0 && (
            <p className="text-fg-secondary font-mono text-sm py-12 text-center">
              No posts found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
