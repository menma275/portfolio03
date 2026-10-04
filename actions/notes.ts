"use server";

import { getPostData } from "@/lib/notes";

export async function getPostTitle(slug: string): Promise<string | null> {
  try {
    const post = getPostData(slug);
    return post ? post.title : null;
  } catch (error) {
    console.error("Error in getPostTitle:", error);
    return null;
  }
}
