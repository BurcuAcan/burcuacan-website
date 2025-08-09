"use client";

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

const InteractiveVisual = () => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { stiffness: 400, damping: 80 };

  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const rotateX = useTransform(springY, [-100, 100], [10, -10]);
  const rotateY = useTransform(springX, [-100, 100], [-10, 10]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className="lg:w-100 lg:h-100 md:w-75 md:h-75 relative flex items-center justify-center rounded-full"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
      transition={{
        duration: 8,
        repeat: Infinity,
        repeatType: "mirror",
      }}
    >
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 shadow-xl"
        style={{ rotateX, rotateY }}
        animate={{
          background: [
            "linear-gradient(135deg, #38bdf8, #0284c7)",
            "linear-gradient(135deg, #60a5fa, #2563eb)",
            "linear-gradient(135deg, #38bdf8, #0284c7)",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />
      <motion.div
        className="absolute inset-5 rounded-full bg-slate-100 dark:bg-slate-900 opacity-20"
        style={{ filter: 'blur(15px)', rotateX, rotateY }}
      />
    </motion.div>
  );
};

export default InteractiveVisual;