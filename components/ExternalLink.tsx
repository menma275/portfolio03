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
      className={`w-fit inline-flex items-center gap-0.5 hover:underline group ${className}`}
    >
      {children}
      <span>
        <FiArrowUpRight
          className="text-fg-secondary group-hover:text-fg-primary transition-colors"
          size={14}
        />
      </span>
    </a>
  );
};
