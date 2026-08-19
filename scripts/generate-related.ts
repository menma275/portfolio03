import { works } from "../data/works";
import fs from "fs";
import path from "path";

function calculateScore(
  workA: (typeof works)[0],
  workB: (typeof works)[0],
): number {
  let score = 0;
  if (workA.category === workB.category) score += 3;
  const commonTech = workA.technologies.filter((t) =>
    workB.technologies.includes(t),
  );
  score += commonTech.length;
  return score;
}

function main() {
  const relatedMap: { [id: string]: string[] } = {};

  for (const workA of works) {
    const similarities = works
      .filter((workB) => workB.id !== workA.id)
      .map((workB) => ({
        id: workB.id,
        score: calculateScore(workA, workB),
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 4)
      .map((item) => item.id);

    relatedMap[workA.id] = similarities;
  }

  const outputPath = path.join(process.cwd(), "data", "related-works.json");
  fs.writeFileSync(outputPath, JSON.stringify(relatedMap, null, 2));
  console.log(`Successfully saved to ${outputPath}`);
}

main();
