export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    id: "1",
    company: "NOT A HOTEL",
    position: "プロジェクトマネージャー・デザイナー",
    period: "2025/04 - 2025/05",
    description:
      "ひとつの物件を複数人で所有、新たな家の持ち方を提案するサービス",
  },
  {
    id: "2",
    company: "NEORT",
    position: "フロントエンドエンジニア",
    period: "2025/05 - 現在",
    description: "デジタルアート・ブロックチェーンシステムの企画・開発",
  },
  {
    id: "3",
    company: "Luigi's Box",
    position: "フロントエンドエンジニア",
    period: "2024/06 - 2025/02",
    description: "中欧スロバキア拠点のECサイト機能拡張サービス",
  },
];
