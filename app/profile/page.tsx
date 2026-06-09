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
