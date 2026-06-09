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
      className={`inline hover:underline group ${className}`}
    >
      {children}
      <FiArrowUpRight
        className="inline-block ml-0.5 text-fg-secondary group-hover:text-fg-primary transition-colors align-middle"
        size={14}
      />
    </a>
  );
};
