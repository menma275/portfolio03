import React from "react";
import { ExternalLink } from "./ExternalLink";
import Link from "next/link";
import { HiChevronRight } from "react-icons/hi";

export interface InfoItem {
  label: string;
  title: string;
  description?: string;
  url?: string;
  workId?: string;
}

interface InfoSectionProps {
  title: string;
  items: InfoItem[];
}

export const InfoSection: React.FC<InfoSectionProps> = ({ title, items }) => {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="font-bold">{title}</h2>
      <div className="flex flex-col gap-4">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-1 md:gap-4">
            <div className="md:w-48 shrink-0">
              <p className="text-fg-secondary font-mono text-sm md:pt-1">
                {item.label}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              {item.url ? (
                <ExternalLink
                  href={item.url}
                  className="text-fg-primary font-medium hover:opacity-70 transition-opacity"
                >
                  {item.title}
                </ExternalLink>
              ) : (
                <p className="text-fg-primary font-medium">{item.title}</p>
              )}
              {item.description && (
                <p className="text-fg-secondary text-sm whitespace-pre-wrap">
                  {item.description}
                </p>
              )}
              {item.workId && (
                <Link
                  href={`/works/${item.workId}`}
                  className="text-fg-primary text-xs font-medium hover:underline inline-flex items-center gap-0 w-fit mt-1 group/work"
                >
                  View Project
                  <HiChevronRight
                    size={16}
                    className="transition-transform group-hover/work:translate-x-0.5"
                  />
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
