import { SocialLinks } from "@/components/SocialLinks";
import { HeroVideo } from "@/components/HeroVideo";
import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="hidden md:block">
        <HeroVideo videoSrc="/river.mp4" imageSrc="/river.jpg" />
      </div>
      <div className="flex flex-col gap-2">
        <Link href="/" className="hover:opacity-70 transition-opacity">
          <h1 className="text-fg-primary">Kusuke SAKAMURA</h1>
        </Link>
        <p>go with the flow, like a river.</p>
        <SocialLinks />
      </div>
    </div>
  );
};
