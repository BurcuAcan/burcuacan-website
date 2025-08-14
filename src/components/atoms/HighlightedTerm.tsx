"use client";

import { useState, ReactNode } from 'react';
import { IconType } from 'react-icons';

interface HighlightedTermProps {
  children: ReactNode;
  Icon: IconType;
}

const HighlightedTerm: React.FC<HighlightedTermProps> = ({ children, Icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      className="relative inline-flex items-center group cursor-help font-semibold text-sky-500 dark:text-sky-400"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      {isHovered && (
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-sky-600 text-white text-xs px-2 py-1 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 whitespace-nowrap flex items-center gap-1 transform scale-90">
          <Icon className="w-4 h-4" />
        </span>
      )}
    </span>
  );
};

export default HighlightedTerm;
