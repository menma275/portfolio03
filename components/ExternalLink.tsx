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
  // classNameからtext-で始まるカラークラスを探す（!付きも考慮）
  const colorMatch = className.match(/text-[^\s!]+!?/);
  const colorClass = colorMatch ? colorMatch[0] : "text-fg-secondary";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center max-w-full hover:underline group ${className}`}
    >
      <span className={`truncate ${colorClass}`}>{children}</span>
      <FiArrowUpRight
        className={`shrink-0 ml-0.5 transition-colors ${colorClass}`}
        size={14}
      />
    </a>
  );
};
