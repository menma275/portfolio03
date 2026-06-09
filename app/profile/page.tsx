import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Awards } from "@/components/Awards";
import { Exhibitions } from "@/components/Exhibitions";
import { TabNavigation } from "@/components/TabNavigation";
import { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Profile",
};

export default function ProfilePage() {
  return (
    <div className="flex flex-col gap-6">
      <TabNavigation activeTab="profile" />
      <div className="transition-all duration-300">
        <div className="flex flex-col gap-16">
          <FadeIn>
            <p>
              2002年東京都生まれ <br />
              WebやGenerativeArtを中心に、テクノロジーを使ったデザイン・アート表現を探求。
              <br />
              情報系高専在学時にGenerative
              Artの制作を始め、ブロックチェーン技術を使用したNFTとして作品を発表、多くの人々からのリアクションを得たことをきっかけにテクノロジーによる作品制作に強い関心を持つ。
              <br />
              多様な技術領域に関心を持ち、核となるアイデアを大切にしながら、アルゴリズムによって動作する論理性と感性的な心地よさの両立を追求して作品制作を行う。
              <br />
              ハッカソンや作品展示などに積極的に参加しながら、多くの人々と意見やアイデアを交換することで常に新しい表現手法を模索している。
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Education />
          </FadeIn>
          <FadeIn delay={0.2}>
            <Experience />
          </FadeIn>
          <FadeIn delay={0.3}>
            <Awards />
          </FadeIn>
          <FadeIn delay={0.4}>
            <Exhibitions />
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
