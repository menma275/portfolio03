import React from "react";
import { socials } from "@/data";
import { ExternalLink } from "./ExternalLink";

export const SocialLinks: React.FC = () => {
  return (
    <div className="flex flex-wrap md:flex-col gap-2">
      {socials.map((social) => (
        <ExternalLink key={social.label} href={social.href}>
          {social.label}
        </ExternalLink>
      ))}
    </div>
  );
};
