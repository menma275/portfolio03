export interface Exhibition {
  id: string;
  date: string;
  title: string;
  description: string;
  role: string;
}

export const exhibitions: Exhibition[] = [
  {
    id: "1",
    date: "2023 / 06",
    title: "Proof of X - Blockchain As a New Medium For Art",
    description: "ブロックチェーン及びスマートコントラクトにフォーカスした作品展示会",
    role: "作品展示・NFT販売",
  },
  {
    id: "2",
    date: "2023 / 06",
    title: "Processing Community Day Tokyo 2023",
    description: "Processing Community JapanによるGenerative Art作品展示会",
    role: "作品展示",
  },
  {
    id: "3",
    date: "2023 / 08",
    title: "CCBT - Future Ideations Camp Vol.2 : setup()：ブロックチェーンで新しいルールをつくる",
    description: "NFTやDAOなど新しい創作を探求する5日間の集中キャンプ",
    role: "ハッカソン参加・作品展示",
  },
  {
    id: "4",
    date: "2023 / 11",
    title: "東京都立大学 みやこ祭 - インスタレーション展示",
    description: "大学祭での有志によるインタラクティブアート展示会",
    role: "有志作品展示",
  },
  {
    id: "5",
    date: "2023 / 12",
    title: "fx(hash)2.0 x KUMALEON - COLORFUL",
    description: "NFTプラットフォームによるGenerative Artキュレーションプログラム",
    role: "キュレーション採択・NFT販売",
  },
  {
    id: "6",
    date: "2024 / 03",
    title: "INSTeM Convention 2024 Spring - 大人のためのリテラシー：これからの知恵と技法を考える",
    description: "広範なリテラシーをテーマにした展示・ワークショップイベント",
    role: "作品展示",
  },
];
