export interface Award {
  id: string;
  title: string;
  organization: string;
  date: string;
  description?: string;
  url?: string;
  workId?: string;
}

export const awards: Award[] = [
  {
    id: "6",
    title: "WIRED Creative Hack Award 2025",
    organization:
      "「なにを、なぜ、いかにハックしたのか？」を問う次世代クリエイターのためのアワード。過剰なデジタルコミュニケーションへのアンチテーゼとして、ハードウェアを通じて人間の繋がりを再定義した点が高く評価された。",
    date: "2025/12",
    description: "ファイナリスト",
    url: "https://wired.jp/article/creative-hack-award-2025-final/",
    workId: "turnie",
  },
  {
    id: "5",
    title: "TMU EntreBloom ビジネスアイデアチャレンジ 2025",
    organization:
      "東京都立大学主催のコンテスト。シリコンバレーでのピッチを通じて、機能を引き算したアナログな体験が言語や文化の壁を越えて強い共感と評価を獲得した。",
    date: "2025/12",
    description: "最優秀賞",
    url: "https://research-miyacology.tmu.ac.jp/news/27493/",
    workId: "turnie",
  },
  {
    id: "3",
    title: "Hack-1グランプリ",
    organization: "デザイナー・エンジニア志望学生向けの1ヶ月間開発ハッカソン",
    date: "2025/06",
    description: "DesignShip賞",
    url: "https://hack-1.com/",
    workId: "moss",
  },
  {
    id: "2",
    title: "Mercoin Hackathon",
    organization: "価値交換の新しい未来を作るプロダクト/機能の開発",
    date: "2023/12",
    description: "優勝",
    url: "https://careers.mercari.com/mercan/articles/40371/",
  },
  {
    id: "1",
    title: "CREATIVE HACK AWARD 2023",
    organization: "雑誌Wiredによる次世代クリエイターを発掘・支援するアワード",
    date: "2023/11",
    description: "ファイナリスト",
    url: "https://hack2023.wired.jp/",
    workId: "gundi",
  },
];
