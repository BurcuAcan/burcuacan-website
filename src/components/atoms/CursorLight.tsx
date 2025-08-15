"use client";

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const CursorLight = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Theme-aware colors
  const lightEffect = resolvedTheme === 'dark' 
    ? 'rgba(125, 211, 252, 0.15)' // sky-300 for dark theme - cool blue
    : 'rgba(244, 63, 94, 0.12)';   // rose-500 for light theme - warm rose

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-colors duration-500"
      style={{
        background: `radial-gradient(600px at ${position.x}px ${position.y}px, ${lightEffect}, transparent 70%)`,
      }}
    />
  );
};

export default CursorLight;
