import { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { getPostData, getAllPostSlugs } from "@/lib/blog";
import { FadeIn } from "@/components/FadeIn";
import { ViewTransition } from "react";

interface BlogPostProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPostSlugs();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostData(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.thumbnail ? [{ url: post.thumbnail }] : [],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = getPostData(slug);

  if (!post) {
    notFound();
  }

  const isJa =
    post.lang === "ja" ||
    (!post.lang &&
      /[\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\uFF00-\uFFEF\u4E00-\u9FAF]/.test(
        post.title + post.content,
      ));

  const components = {
    img: ({
      src,
      alt,
      ...props
    }: React.ImgHTMLAttributes<HTMLImageElement>) => {
      const resolvedSrc =
        typeof src === "string" &&
        (src.startsWith("./") || !src.startsWith("/"))
          ? `/img/blog/${slug}/${src.replace(/^\.\//, "")}`
          : src;
      return (
        <span className="block my-8">
          <img
            src={resolvedSrc}
            alt={alt}
            className="rounded-lg max-w-full h-auto mx-auto object-contain"
            loading="lazy"
            {...props}
          />
          {alt && (
            <span className="block text-center text-xs text-fg-secondary mt-2">
              {alt}
            </span>
          )}
        </span>
      );
    },
    h1: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h1
        className="font-sans text-xl font-bold mt-10 mb-4 border-b border-border pb-2 text-fg-primary"
        {...props}
      >
        {children}
      </h1>
    ),
    h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h2
        className={`${
          isJa ? "font-sans" : "font-mono"
        } text-lg font-bold mt-8 mb-3 text-fg-primary`}
        {...props}
      >
        {children}
      </h2>
    ),
    h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h3
        className="font-sans text-base font-bold mt-6 mb-2 text-fg-primary"
        {...props}
      >
        {children}
      </h3>
    ),
    p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
      <p className="leading-relaxed text-sm text-fg-primary my-4" {...props}>
        {children}
      </p>
    ),
    ul: ({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
      <ul
        className="list-disc pl-5 my-4 text-sm flex flex-col gap-1.5 text-fg-primary"
        {...props}
      >
        {children}
      </ul>
    ),
    ol: ({ children, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
      <ol
        className="list-decimal pl-5 my-4 text-sm flex flex-col gap-1.5 text-fg-primary"
        {...props}
      >
        {children}
      </ol>
    ),
    li: ({ children, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
      <li className="leading-relaxed" {...props}>
        {children}
      </li>
    ),
    blockquote: ({
      children,
      ...props
    }: React.HTMLAttributes<HTMLQuoteElement>) => (
      <blockquote
        className="border-l-4 border-accent pl-4 my-6 italic text-fg-secondary bg-bg-secondary p-4 rounded"
        {...props}
      >
        {children}
      </blockquote>
    ),
    code: ({
      children,
      className,
      ...props
    }: React.HTMLAttributes<HTMLElement>) => {
      const isInline = !className?.includes("language-");
      if (isInline) {
        return (
          <code
            className="bg-bg-secondary px-1.5 py-0.5 rounded text-xs font-mono border border-border text-fg-primary"
            {...props}
          >
            {children}
          </code>
        );
      }
      return (
        <pre className="bg-bg-secondary p-4 rounded-lg overflow-x-auto my-6 border border-border font-mono text-xs text-fg-primary">
          <code className={className} {...props}>
            {children}
          </code>
        </pre>
      );
    },
    a: ({
      children,
      href,
      ...props
    }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
      <a
        href={href}
        className="text-accent hover:underline"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    ),
  };

  return (
    <FadeIn>
      <article className="max-w-2xl mx-auto flex flex-col gap-6 pt-4 pb-16">
        {post.thumbnail && (
          <div className="w-full aspect-[16/9] relative overflow-hidden bg-bg-secondary rounded-xl mb-4">
            {ViewTransition ? (
              <ViewTransition name={`blog-img-${slug}`}>
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="object-cover w-full h-full"
                />
              </ViewTransition>
            ) : (
              <img
                src={post.thumbnail}
                alt={post.title}
                className="object-cover w-full h-full"
              />
            )}
          </div>
        )}
        <header className="flex flex-col gap-2">
          <span className="text-fg-secondary text-xs font-mono">
            {post.date}
          </span>
          <h1 className="font-sans text-2xl md:text-3xl font-bold tracking-tight text-fg-primary leading-tight">
            {post.title}
          </h1>
        </header>
        <div className="border-t border-border mt-4">
          <ReactMarkdown components={components}>{post.content}</ReactMarkdown>
        </div>
      </article>
    </FadeIn>
  );
}
