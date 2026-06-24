import { Metadata } from "next";
import Link from "next/link";
import { getSortedPostsData } from "@/lib/blog";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  const posts = getSortedPostsData();

  return (
    <div className="flex flex-col gap-6">
      <div className="transition-all duration-300">
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <FadeIn key={post.slug} delay={index * 0.05}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col gap-3 bg-bg-secondary hover:opacity-90 border border-transparent hover:border-border transition-all duration-300 rounded-lg overflow-hidden h-full"
                >
                  {post.thumbnail && (
                    <div className="w-full aspect-[16/9] relative overflow-hidden bg-bg-primary">
                      <img
                        src={post.thumbnail}
                        alt={post.title}
                        className="object-cover w-full h-full group-hover:scale-[1.02] transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="flex flex-col gap-2 p-4 pt-2">
                    <span className="text-fg-secondary text-2xs font-mono">
                      {post.date}
                    </span>
                    <h3 className="text-fg-primary font-medium line-clamp-2 leading-snug group-hover:text-fg-primary transition-colors">
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p className="text-fg-secondary text-xs line-clamp-3 leading-relaxed mt-1">
                        {post.excerpt}
                      </p>
                    )}
                  </div>
                </Link>
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
