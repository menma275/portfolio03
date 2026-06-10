import { works } from "../data/works";
import fs from "fs";
import path from "path";
import { pipeline } from "@huggingface/transformers";

// コサイン類似度を計算する関数
function cosineSimilarity(vecA: number[], vecB: number[]): number {
  let dotProduct = 0;
  let mA = 0;
  let mB = 0;
  for (let i = 0; i < vecA.length; i++) {
    dotProduct += vecA[i] * vecB[i];
    mA += vecA[i] * vecA[i];
    mB += vecB[i] * vecB[i];
  }
  return dotProduct / (Math.sqrt(mA) * Math.sqrt(mB));
}

async function main() {
  console.log("Loading embedding pipeline...");
  // 軽量なモデルを使用 (feature-extraction: 埋め込み抽出)
  const extractor = await pipeline(
    "feature-extraction",
    "Xenova/all-MiniLM-L6-v2",
  );

  console.log("Generating embeddings for each work...");
  const embeddings: { [id: string]: number[] } = {};

  for (const work of works) {
    // タイトル、カテゴリ、技術、概要、コンセプトを結合してテキストを作成
    const text = [
      work.title,
      work.category,
      work.technologies.join(" "),
      work.details?.overview.en || "",
      work.details?.concept?.en || "",
    ]
      .join(" ")
      .replace(/\s+/g, " ")
      .trim();

    console.log(`Processing: ${work.id}`);
    const output = await extractor(text, { pooling: "mean", normalize: true });
    embeddings[work.id] = Array.from(output.data as Float32Array);
  }

  console.log("Calculating similarities...");
  const relatedMap: { [id: string]: string[] } = {};

  for (const workA of works) {
    const similarities = works
      .filter((workB) => workB.id !== workA.id)
      .map((workB) => ({
        id: workB.id,
        score: cosineSimilarity(embeddings[workA.id], embeddings[workB.id]),
      }))
      // 類似度が高い順にソート
      .sort((a, b) => b.score - a.score)
      // 上位3つを抽出
      .slice(0, 3)
      .map((item) => item.id);

    relatedMap[workA.id] = similarities;
  }

  const outputPath = path.join(process.cwd(), "data", "related-works.json");
  fs.writeFileSync(outputPath, JSON.stringify(relatedMap, null, 2));
  console.log(`Successfully saved to ${outputPath}`);
}

main().catch(console.error);
