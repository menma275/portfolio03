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
  className = "",
  truncate = false,
}) => {
  // classNameからtext-で始まるカラークラスを探す（!付きも考慮）
  const colorMatch = className.match(/text-[^\s!]+!?/);
  const colorClass = colorMatch ? colorMatch[0] : "text-fg-secondary";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`hover:underline group ${className} ${
        truncate ? "inline-flex items-center max-w-full" : "inline"
      }`}
    >
      <span className={`${truncate ? "truncate" : ""} ${colorClass}`}>
        {children}
      </span>
      <FiArrowUpRight
        className={`transition-colors ${colorClass} ${
          truncate ? "shrink-0 ml-0.5" : "inline-block ml-0.5 align-middle"
        }`}
        size={14}
      />
    </a>
  );
};
