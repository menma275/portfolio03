"use client";

import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Awards } from "@/components/Awards";
import { Exhibitions } from "@/components/Exhibitions";
import { FadeIn } from "@/components/FadeIn";
import { useState } from "react";

export default function ProfileContent() {
  const [lang, setLang] = useState<"ja" | "en">("ja");

  const toggleLang = () => {
    setLang((prev) => (prev === "ja" ? "en" : "ja"));
  };

  const profileContent = {
    ja: (
      <>
        2002年東京都生まれ <br />
        WebやGenerativeArtを中心に、テクノロジーを使ったデザイン・アート表現を探求。
        <br />
        情報系高専在学時にGenerative
        Artの制作を始め、ブロックチェーン技術を使用したNFTとして作品を発表、多くの人々からのリアクションを得たことをきっかけにテクノロジーによる作品制作に強い関心を持つ。
        <br />
        多様な技術領域に関心を持ち、核となるアイデアを大切にしながら、アルゴリズムによって動作する論理性と感性的な心地よさの両立を追求して作品制作を行う。
        <br />
        ハッカソンや作品展示などに積極的に参加しながら、多くの人々と意見やアイデアを交換することで常に新しい表現手法を模索している。
      </>
    ),
    en: (
      <>
        Born in Tokyo, 2002. <br />
        Exploring design and artistic expression through technology, focusing on
        Web and Generative Art.
        <br />
        I started creating Generative Art while studying at a National Institute
        of Technology (KOSEN). After releasing my works as NFTs using blockchain
        technology and receiving widespread reactions, I developed a strong
        interest in creating art through technology.
        <br />
        With an interest in diverse technical fields, I prioritize core ideas
        while striving to balance algorithmic logic with aesthetic comfort in my
        creative process.
        <br />I actively participate in hackathons and exhibitions, constantly
        seeking new forms of expression by exchanging ideas and opinions with
        many people.
      </>
    ),
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-start">
        <button
          onClick={toggleLang}
          className="text-xs font-mono text-fg-secondary cursor-pointer group"
        >
          {lang === "ja" ? (
            <p>
              <span className="text-fg-primary group-hover:text-fg-secondary">
                JA
              </span>
              <span> / </span>
              <span className="text-fg-secondary group-hover:text-fg-primary">
                EN
              </span>
            </p>
          ) : (
            <p>
              <span className="text-fg-secondary group-hover:text-fg-primary">
                JA
              </span>
              <span> / </span>
              <span className="text-fg-primary group-hover:text-fg-secondary">
                EN
              </span>
            </p>
          )}
        </button>
      </div>
      <div className="transition-all duration-300">
        <div className="flex flex-col gap-16">
          <FadeIn>
            <p className="leading-relaxed">{profileContent[lang]}</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Education lang={lang} />
          </FadeIn>
          <FadeIn delay={0.2}>
            <Experience lang={lang} />
          </FadeIn>
          <FadeIn delay={0.3}>
            <Awards lang={lang} />
          </FadeIn>
          <FadeIn delay={0.4}>
            <Exhibitions lang={lang} />
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
