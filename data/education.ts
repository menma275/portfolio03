export interface Education {
  id: string;
  period: { ja: string; en: string };
  institution: { ja: string; en: string };
  degree: { ja: string; en: string };
  url?: string;
}

export const education: Education[] = [
  {
    id: "3",
    period: { ja: "2026/04 - 現在", en: "2026/04 - Present" },
    institution: {
      ja: "東京都立大学 システムデザイン研究科 インダストリアルアート学域 ネットワークデザインスタジオ",
      en: "Tokyo Metropolitan University, Graduate School of System Design, Industrial Art Course, Network Design Studio",
    },
    degree: { ja: "芸術工学", en: "Art and Engineering" },
    url: "https://lab.sugimototatsuo.com/",
  },
  {
    id: "2",
    period: { ja: "2023/04 - 2026/03", en: "2023/04 - 2026/03" },
    institution: {
      ja: "東京都立大学 システムデザイン学部 インダストリアルアート学科",
      en: "Tokyo Metropolitan University, Faculty of System Design, Department of Industrial Art",
    },
    degree: { ja: "芸術工学", en: "Art and Engineering" },
    url: "https://industrial-art.sd.tmu.ac.jp/",
  },
  {
    id: "1",
    period: { ja: "2018/04 - 2023/03", en: "2018/04 - 2023/03" },
    institution: {
      ja: "国立熊本高等専門学校 人間情報システム工学科",
      en: "National Institute of Technology (KOSEN), Kumamoto College, Department of Human-Oriented Information Systems Engineering",
    },
    degree: { ja: "準学士", en: "Associate Degree" },
    url: "https://www.hi.kumamoto-nct.ac.jp/",
  },
];
