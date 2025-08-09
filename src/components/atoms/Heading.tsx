import { JSX, ReactNode } from 'react';
import React from 'react';

interface HeadingProps {
  children: ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

const Heading = ({ children, level, className }: HeadingProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const baseClasses = "font-bold";
  const levelClasses = {
    1: 'text-5xl',
    2: 'text-4xl',
    3: 'text-3xl',
    4: 'text-2xl',
    5: 'text-xl',
    6: 'text-lg',
  };

  return (
    <Tag className={`${baseClasses} ${levelClasses[level]} ${className}`}>
      {children}
    </Tag>
  );
};

export default Heading;
