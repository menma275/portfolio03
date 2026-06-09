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
    id: "4",
    title: "CREATIVE HACK AWARD 2026",
    organization: "雑誌Wiredによる次世代クリエイターを発掘・支援するアワード",
    date: "2026/11",
    description: "ファイナリスト",
    url: "https://hack.wired.jp/",
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
