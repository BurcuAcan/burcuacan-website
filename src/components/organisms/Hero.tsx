import { motion } from 'framer-motion';
import { Github, Linkedin, Download } from 'lucide-react';
import Button from '@/components/atoms/Button';
import InteractiveVisual from '../molecules/InteractiveVisual';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="hero" className="min-h-screen flex items-center bg-slate-100 dark:bg-slate-900">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Sol Sütun: Metin İçeriği */}
        <motion.div
          className="text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-4"
            variants={itemVariants}
          >
            Burcu Acan
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-sky-600 dark:text-sky-400 font-semibold mb-8"
            variants={itemVariants}
          >
            Frontend Geliştirici & UI/UX Tasarımcısı
          </motion.p>
          <motion.div
            className="flex justify-center md:justify-start gap-4 mb-8"
            variants={itemVariants}
          >
            <Button href="#projects" variant="primary">Projelerim</Button>
            <Button href="/resume.pdf" variant="secondary" className="flex items-center gap-2">
              <Download className="w-5 h-5" />
              Özgeçmiş
            </Button>
          </motion.div>
          <motion.div
            className="flex justify-center md:justify-start space-x-6"
            variants={itemVariants}
          >
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-300">
              <Github className="w-8 h-8" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-300">
              <Linkedin className="w-8 h-8" />
            </a>
          </motion.div>
        </motion.div>

        {/* Sağ Sütun: Görsel Element */}
        <motion.div
          className="hidden md:flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "backOut" }}
        >
          <InteractiveVisual />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
