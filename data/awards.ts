export interface Award {
  id: string;
  title: { ja: string; en: string };
  description: { ja: string; en: string };
  date: string;
  prize?: { ja: string; en: string };
  url?: string;
  workId?: string;
}

export const awards: Award[] = [
  {
    id: "6",
    title: {
      ja: "WIRED Creative Hack Award 2025",
      en: "WIRED Creative Hack Award 2025",
    },
    description: {
      ja: "雑誌Wiredによる次世代クリエイターを発掘・支援するアワード",
      en: "An award to discover and support next-generation creators by Wired magazine",
    },
    date: "2025/12",
    prize: { ja: "ファイナリスト", en: "Finalist" },
    url: "https://wired.jp/article/creative-hack-award-2025-final/",
    workId: "turnie",
  },
  {
    id: "5",
    title: {
      ja: "TMU EntreBloom ビジネスアイデアチャレンジ 2025",
      en: "TMU EntreBloom Business Idea Challenge 2025",
    },
    description: {
      ja: "東京都立大学主催のビジネスコンテスト",
      en: "Business contest organized by Tokyo Metropolitan University",
    },
    date: "2025/12",
    prize: { ja: "最優秀賞", en: "Grand Prize" },
    url: "https://research-miyacology.tmu.ac.jp/news/27493/",
    workId: "turnie",
  },
  {
    id: "3",
    title: { ja: "Hack-1グランプリ", en: "Hack-1 Grand Prix" },
    description: {
      ja: "デザイナー・エンジニア志望学生向けの1ヶ月間開発ハッカソン",
      en: "A one-month development hackathon for students aspiring to be designers and engineers",
    },
    date: "2025/06",
    prize: { ja: "DesignShip賞", en: "DesignShip Award" },
    url: "https://hack-1.com/",
    workId: "moss",
  },
  {
    id: "2",
    title: { ja: "Mercoin Hackathon", en: "Mercoin Hackathon" },
    description: {
      ja: "価値交換の新しい未来を作るプロダクト/機能の開発",
      en: "Development of products/functions that create a new future of value exchange",
    },
    date: "2023/12",
    prize: { ja: "優勝", en: "Winner" },
    url: "https://careers.mercari.com/mercan/articles/40371/",
  },
  {
    id: "1",
    title: { ja: "CREATIVE HACK AWARD 2023", en: "CREATIVE HACK AWARD 2023" },
    description: {
      ja: "雑誌Wiredによる次世代クリエイターを発掘・支援するアワード",
      en: "An award to discover and support next-generation creators by Wired magazine",
    },
    date: "2023/11",
    prize: { ja: "ファイナリスト", en: "Finalist" },
    url: "https://hack2023.wired.jp/",
    workId: "gundi",
  },
];
