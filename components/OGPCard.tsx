import React from "react";
import { OGPData } from "@/lib/ogp";

interface OGPCardProps {
  data: OGPData;
}

export const OGPCard: React.FC<OGPCardProps> = ({ data }) => {
  const { url, domain, title, description, imageUrl, siteName } = data;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group my-6 flex flex-row justify-between overflow-hidden rounded-lg border border-transparent hover:border-border bg-bg-secondary transition-all duration-300 text-decoration-none min-h-[100px]"
    >
      <div className="flex flex-1 flex-col justify-between p-4 min-w-0">
        <div className="flex flex-col gap-1">
          <span className="text-fg-primary font-bold text-sm line-clamp-1 group-hover:text-fg-primary">
            {title || url}
          </span>
          {description && (
            <p className="text-fg-secondary text-xs line-clamp-2 leading-relaxed m-0">
              {description}
            </p>
          )}
        </div>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-fg-secondary text-2xs font-mono line-clamp-1">
            {domain || siteName}
          </span>
        </div>
      </div>
      {imageUrl && (
        <div className="w-28 sm:w-36 flex-shrink-0 relative bg-bg-primary border-l border-transparent group-hover:border-border transition-colors duration-300 overflow-hidden">
          <img
            src={imageUrl}
            alt={title || domain}
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
            loading="lazy"
          />
        </div>
      )}
    </a>
  );
};
