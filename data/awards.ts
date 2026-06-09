export interface Award {
  id: string;
  title: string;
  description: string;
  date: string;
  prize?: string;
  url?: string;
  workId?: string;
}

export const awards: Award[] = [
  {
    id: "6",
    title: "WIRED Creative Hack Award 2025",
    description: "雑誌Wiredによる次世代クリエイターを発掘・支援するアワード",
    date: "2025/12",
    prize: "ファイナリスト",
    url: "https://wired.jp/article/creative-hack-award-2025-final/",
    workId: "turnie",
  },
  {
    id: "5",
    title: "TMU EntreBloom ビジネスアイデアチャレンジ 2025",
    description: "東京都立大学主催のビジネスコンテスト",
    date: "2025/12",
    prize: "最優秀賞",
    url: "https://research-miyacology.tmu.ac.jp/news/27493/",
    workId: "turnie",
  },
  {
    id: "3",
    title: "Hack-1グランプリ",
    description: "デザイナー・エンジニア志望学生向けの1ヶ月間開発ハッカソン",
    date: "2025/06",
    prize: "DesignShip賞",
    url: "https://hack-1.com/",
    workId: "moss",
  },
  {
    id: "2",
    title: "Mercoin Hackathon",
    description: "価値交換の新しい未来を作るプロダクト/機能の開発",
    date: "2023/12",
    prize: "優勝",
    url: "https://careers.mercari.com/mercan/articles/40371/",
  },
  {
    id: "1",
    title: "CREATIVE HACK AWARD 2023",
    description: "雑誌Wiredによる次世代クリエイターを発掘・支援するアワード",
    date: "2023/11",
    prize: "ファイナリスト",
    url: "https://hack2023.wired.jp/",
    workId: "gundi",
  },
];
