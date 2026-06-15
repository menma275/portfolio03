"use server";

import { redis } from "@/lib/redis";

const getRedisKey = (workId: string) => `portfolio:likes:${workId}`;

export async function getLikes(workId: string): Promise<number> {
  if (!redis) {
    console.warn("Redis client not initialized. Returning 0 likes.");
    return 0;
  }
  try {
    const likes = await redis.get<number>(getRedisKey(workId));
    return likes ?? 0;
  } catch (error) {
    console.error("Error fetching likes:", error);
    return 0;
  }
}

export async function incrementLike(workId: string): Promise<number> {
  if (!redis) {
    throw new Error("Redis client not initialized");
  }
  try {
    const updatedLikes = await redis.incr(getRedisKey(workId));
    return updatedLikes;
  } catch (error) {
    console.error("Error incrementing like:", error);
    throw new Error("Failed to increment like");
  }
}
