import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  truncate?: boolean;
}

export const ExternalLink: React.FC<ExternalLinkProps> = ({
  href,
  children,
  className = "text-fg-secondary",
  truncate = false,
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group hover:text-accent transition-colors duration-75 ${
        truncate ? "inline-flex items-center max-w-full" : "inline"
      } ${className}`}
    >
      <span className={truncate ? "truncate" : ""}>{children}</span>
      <FiArrowUpRight
        className={`shrink-0 ${
          truncate ? "ml-0.5" : "inline-block ml-0.5 align-middle"
        }`}
        size={14}
      />
    </a>
  );
};
