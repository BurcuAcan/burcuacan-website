"use client";

import { motion } from 'framer-motion';

const InteractiveVisual = () => {
  return (
    <motion.div
      className="w-80 h-80 md:w-96 md:h-96 relative"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          background: [
            "radial-gradient(circle, rgba(56,189,248,1) 0%, rgba(2,132,199,1) 100%)",
            "radial-gradient(circle, rgba(96,165,250,1) 0%, rgba(37,99,235,1) 100%)",
            "radial-gradient(circle, rgba(56,189,248,1) 0%, rgba(2,132,199,1) 100%)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />
      <motion.div
        className="absolute inset-5 rounded-full bg-slate-100 dark:bg-slate-900 opacity-20"
        style={{ filter: 'blur(10px)' }}
      />
    </motion.div>
  );
};

export default InteractiveVisual;
