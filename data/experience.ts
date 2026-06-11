export interface Experience {
  id: string;
  company: string;
  position: { ja: string; en: string };
  period: { ja: string; en: string };
  description: { ja: string; en: string };
  url?: string;
}

export const experiences: Experience[] = [
  {
    id: "3",
    company: "NEORT",
    position: { ja: "エンジニア", en: "Engineer" },
    period: { ja: "2025/10 - 現在", en: "2025/10 - Present" },
    description: {
      ja: "デジタルアート・ブロックチェーンシステムの企画・開発",
      en: "Planning and development of digital art and blockchain systems",
    },
    url: "https://www.neort.io/",
  },
  {
    id: "2",
    company: "Luigi's Box",
    position: { ja: "フロントエンドエンジニア", en: "Frontend Engineer" },
    period: { ja: "2024/06 - 2025/02", en: "2024/06 - 2025/02" },
    description: {
      ja: "中欧スロバキア拠点のECサイト機能拡張サービス",
      en: "E-commerce function expansion service based in Slovakia, Central Europe",
    },
    url: "https://www.luigisbox.com/",
  },
  {
    id: "1",
    company: "NOT A HOTEL",
    position: {
      ja: "プロジェクトマネージャー・デザイナー",
      en: "Project Manager & Designer",
    },
    period: { ja: "2024/04 - 2024/05", en: "2024/04 - 2024/05" },
    description: {
      ja: "ひとつの物件を複数人で所有、新たな家の持ち方を提案するサービス",
      en: "A service that proposes a new way of owning a home by co-owning a single property among multiple people",
    },
    url: "https://notahotel.com/",
  },
];
