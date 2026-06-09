export interface Education {
  id: string;
  period: string;
  institution: string;
  degree: string;
  url?: string;
}

export const education: Education[] = [
  {
    id: "3",
    period: "2026/04 - 現在",
    institution:
      "東京都立大学 システムデザイン研究科 インダストリアルアート学域 ネットワークデザインスタジオ",
    degree: "芸術工学",
    url: "https://lab.sugimototatsuo.com/",
  },
  {
    id: "2",
    period: "2023/04 - 2026/03",
    institution: "東京都立大学 システムデザイン学部 インダストリアルアート学科",
    degree: "芸術工学",
    url: "https://industrial-art.sd.tmu.ac.jp/",
  },
  {
    id: "1",
    period: "2018/04 - 2023/03",
    institution: "国立熊本高等専門学校 人間情報システム工学科",
    degree: "準学士",
    url: "https://www.hi.kumamoto-nct.ac.jp/",
  },
];
