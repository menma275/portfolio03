"use server";

const url = process.env.UPSTASH_REDIS_REST_URL;
const token = process.env.UPSTASH_REDIS_REST_TOKEN;

const getRedisKey = (workId: string) => `portfolio:likes:${workId}`;

async function redisCommand<T>(
  command: string,
  key: string,
): Promise<T | null> {
  if (!url || !token) return null;
  const res = await fetch(`${url}/${command}/${encodeURIComponent(key)}`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });
  if (!res.ok) return null;
  const data = (await res.json()) as { result: T };
  return data.result;
}

export async function getLikes(workId: string): Promise<number> {
  try {
    const likes = await redisCommand<number>("get", getRedisKey(workId));
    return likes ?? 0;
  } catch (error) {
    console.error("Error fetching likes:", error);
    return 0;
  }
}

export async function incrementLike(workId: string): Promise<number> {
  try {
    const updatedLikes = await redisCommand<number>(
      "incr",
      getRedisKey(workId),
    );
    if (updatedLikes === null) {
      throw new Error("Redis client not initialized or request failed");
    }
    return updatedLikes;
  } catch (error) {
    console.error("Error incrementing like:", error);
    throw new Error("Failed to increment like");
  }
}
