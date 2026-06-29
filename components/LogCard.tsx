import React from "react";
import Link from "next/link";
import { ViewTransition } from "react";
import { PostMetadata } from "@/lib/logs";

interface LogCardProps {
  post: PostMetadata;
}

export const LogCard: React.FC<LogCardProps> = ({ post }) => {
  return (
    <Link
      href={`/logs/${post.slug}`}
      className="group flex flex-col gap-3 bg-bg-secondary hover:opacity-90 border border-transparent hover:border-border transition-all duration-300 rounded-lg overflow-hidden h-full"
    >
      {post.thumbnail && (
        <div className="w-full aspect-[16/9] relative overflow-hidden bg-bg-primary">
          {ViewTransition ? (
            <ViewTransition name={`log-img-${post.slug}`}>
              <img
                src={post.thumbnail}
                alt={post.title}
                className="object-cover object-center w-full h-full group-hover:scale-[1.02] transition-transform duration-500"
              />
            </ViewTransition>
          ) : (
            <img
              src={post.thumbnail}
              alt={post.title}
              className="object-cover object-center w-full h-full group-hover:scale-[1.02] transition-transform duration-500"
              loading="lazy"
            />
          )}
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
  );
};
