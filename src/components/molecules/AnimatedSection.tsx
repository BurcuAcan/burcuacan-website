"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const AnimatedSection = ({ children, className, id }: AnimatedSectionProps) => {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
