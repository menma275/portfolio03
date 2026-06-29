import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/logs");

export interface PostMetadata {
  slug: string;
  title: string;
  date: string;
  thumbnail: string | null;
  excerpt: string;
  lang?: string;
}

export interface PostData extends PostMetadata {
  content: string;
}

function resolveImagePath(slug: string, imagePath?: string): string | null {
  if (!imagePath) return null;
  if (imagePath.startsWith("/") || imagePath.startsWith("http")) {
    return imagePath;
  }
  const cleanPath = imagePath.replace(/^\.\//, "");
  return `/img/logs/${slug}/${cleanPath}`;
}

export function getSortedPostsData(): PostMetadata[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const folderNames = fs.readdirSync(postsDirectory);
  const allPostsData = folderNames
    .map((slug): PostMetadata | null => {
      const folderPath = path.join(postsDirectory, slug);
      if (!fs.statSync(folderPath).isDirectory()) {
        return null;
      }

      const markdownPath = path.join(folderPath, "index.md");
      if (!fs.existsSync(markdownPath)) {
        return null;
      }

      const fileContents = fs.readFileSync(markdownPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || "",
        date: data.date || "",
        thumbnail: resolveImagePath(slug, data.thumbnail),
        excerpt: data.excerpt || "",
        lang: data.lang,
      };
    })
    .filter((post): post is PostMetadata => post !== null);

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostData(slug: string): PostData | null {
  const folderPath = path.join(postsDirectory, slug);
  const markdownPath = path.join(folderPath, "index.md");

  if (!fs.existsSync(markdownPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(markdownPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    title: data.title || "",
    date: data.date || "",
    thumbnail: resolveImagePath(slug, data.thumbnail),
    excerpt: data.excerpt || "",
    lang: data.lang,
  };
}
export function getAllPostSlugs(): { slug: string }[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const folderNames = fs.readdirSync(postsDirectory);
  return folderNames
    .filter((slug) => {
      const folderPath = path.join(postsDirectory, slug);
      return (
        fs.statSync(folderPath).isDirectory() &&
        fs.existsSync(path.join(folderPath, "index.md"))
      );
    })
    .map((slug) => ({
      slug,
    }));
}
