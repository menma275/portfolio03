import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const ExternalLink: React.FC<ExternalLinkProps> = ({
  href,
  children,
  className = "",
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center max-w-full hover:underline group ${className}`}
    >
      <span className="truncate">{children}</span>
      <FiArrowUpRight
        className="shrink-0 ml-0.5 text-fg-secondary group-hover:text-fg-primary transition-colors"
        size={14}
      />
    </a>
  );
};
