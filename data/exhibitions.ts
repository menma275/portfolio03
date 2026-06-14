export interface Exhibition {
  id: string;
  date: string;
  title: { ja: string; en: string };
  description: { ja: string; en: string };
  role: { ja: string; en: string };
  url?: string;
}

export const exhibitions: Exhibition[] = [
  {
    id: "6",
    date: "2024/03",
    title: {
      ja: "INSTeM Convention 2024 Spring - 大人のためのリテラシー：これからの知恵と技法を考える",
      en: "INSTeM Convention 2024 Spring - Literacy for Adults: Considering Future Wisdom and Techniques",
    },
    description: {
      ja: "広範なリテラシーをテーマにした展示・ワークショップイベント",
      en: "Exhibition and workshop event themed on broad literacy",
    },
    role: { ja: "作品展示", en: "Work Exhibition" },
    url: "https://instem.jp/event/instem-convention-2024-spring/",
  },
  {
    id: "5",
    date: "2023/12",
    title: {
      ja: "fx(hash)2.0 x KUMALEON - COLORFUL",
      en: "fx(hash)2.0 x KUMALEON - COLORFUL",
    },
    description: {
      ja: "NFTプラットフォームによるGenerative Artキュレーションプログラム",
      en: "Generative Art curation program by NFT platform",
    },
    role: {
      ja: "キュレーション採択・NFT販売",
      en: "Curation selection & NFT sales",
    },
    url: "https://docs.kumaleon.com/colorful/meetup",
  },
  {
    id: "4",
    date: "2023/11",
    title: {
      ja: "東京都立大学 みやこ祭 - インスタレーション展示",
      en: "Tokyo Metropolitan University Miyako Festival - Installation Exhibition",
    },
    description: {
      ja: "大学祭での有志によるインタラクティブアート展示会",
      en: "Interactive art exhibition by volunteers at the university festival",
    },
    role: { ja: "有志作品展示", en: "Volunteer Work Exhibition" },
    url: "https://nothingof.github.io/nove2023_web/",
  },
  {
    id: "3",
    date: "2023/08",
    title: {
      ja: "CCBT - Future Ideations Camp Vol.2 : setup()：ブロックチェーンで新しいルールをつくる",
      en: "CCBT - Future Ideations Camp Vol.2 : setup(): Creating new rules with blockchain",
    },
    description: {
      ja: "NFTやDAOなど新しい創作を探求する5日間の集中キャンプ",
      en: "A 5-day intensive camp exploring new creations such as NFTs and DAOs",
    },
    role: {
      ja: "ハッカソン参加・作品展示",
      en: "Hackathon participation & Work Exhibition",
    },
    url: "https://ccbt.rekibun.or.jp/events/future-ideations-camp02",
  },
  {
    id: "2",
    date: "2023/06",
    title: {
      ja: "Processing Community Day Tokyo 2023",
      en: "Processing Community Day Tokyo 2023",
    },
    description: {
      ja: "Processing Community JapanによるGenerative Art作品展示会",
      en: "Generative Art exhibition by Processing Community Japan",
    },
    role: { ja: "作品展示", en: "Work Exhibition" },
    url: "https://www.hikarie8.com/cube/exhibition/2023/05/pcd-tokyo-2023.shtml",
  },
  {
    id: "1",
    date: "2023/06",
    title: {
      ja: "Proof of X - Blockchain As a New Medium For Art",
      en: "Proof of X - Blockchain As a New Medium For Art",
    },
    description: {
      ja: "ブロックチェーン及びスマートコントラクトにフォーカスした作品展示会",
      en: "Exhibition focusing on blockchain and smart contracts",
    },
    role: { ja: "作品展示・NFT販売", en: "Work Exhibition & NFT Sales" },
    url: "https://proofofx.art/2023",
  },
];
