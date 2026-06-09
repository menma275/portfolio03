export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
  url?: string;
}

export const experiences: Experience[] = [
  {
    id: "3",
    company: "NEORT",
    position: "エンジニア",
    period: "2025/10 - 現在",
    description: "デジタルアート・ブロックチェーンシステムの企画・開発",
    url: "https://www.neort.io/",
  },
  {
    id: "2",
    company: "Luigi's Box",
    position: "フロントエンドエンジニア",
    period: "2024/06 - 2025/02",
    description: "中欧スロバキア拠点のECサイト機能拡張サービス",
    url: "https://www.luigisbox.com/",
  },
  {
    id: "1",
    company: "NOT A HOTEL",
    position: "プロジェクトマネージャー・デザイナー",
    period: "2024/04 - 2024/05",
    description:
      "ひとつの物件を複数人で所有、新たな家の持ち方を提案するサービス",
    url: "https://notahotel.com/",
  },
];
