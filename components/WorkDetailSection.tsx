import React from "react";

interface WorkDetailSectionProps {
  title: string;
  ja: string;
  en: string;
}

export const WorkDetailSection: React.FC<WorkDetailSectionProps> = ({
  title,
  ja,
  en,
}) => {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="font-mono">{title}</h2>
      <div className="flex flex-col gap-4">
        <p className="text-fg-primary leading-relaxed whitespace-pre-wrap">
          {ja}
        </p>
        <p className="text-fg-secondary leading-relaxed whitespace-pre-wrap italic">
          {en}
        </p>
      </div>
    </section>
  );
};
