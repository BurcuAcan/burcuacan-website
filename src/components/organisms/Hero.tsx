import { motion } from 'framer-motion';
import { Github, Linkedin, Download } from 'lucide-react';
import Button from '@/components/atoms/Button';
import Image from 'next/image';
import InteractiveVisual from '@/components/molecules/InteractiveVisual';
import Profile from "../../images/BurcuAcanPhoto.jpg";
import { useState, useEffect } from 'react';

const Hero = () => {
  const roles = ["Frontend Geliştirici", "React Geliştirici"];
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 1500;

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[roleIndex];

      if (isDeleting) {
        if (charIndex > 0) {
          setCurrentText(currentRole.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }
      } else {
        if (charIndex < currentRole.length) {
          setCurrentText(currentRole.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex, roles]);

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

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    const main = document.querySelector('main');

    if (element && main) {
      const originalSnapType = getComputedStyle(main).scrollSnapType;
      main.style.scrollSnapType = 'none';

      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      setTimeout(() => {
        main.style.scrollSnapType = originalSnapType;
      }, 1000);
    }
  };

  return (
    <section id="hero" className="min-h-screen px-12 flex items-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 md:pt-0 md:pb-0">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
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
            Yasar Burcu Acan
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-sky-600 dark:text-sky-400 font-semibold mb-8"
          >
            {currentText}
            <span className="animate-pulse">|</span>
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row items-center sm:justify-center md:justify-start gap-4 mb-8"
            variants={itemVariants}
          >
            <Button
              href="#projects"
              variant="primary"
              onClick={(e) => handleScrollTo(e, 'projects')}
            >
              Projelerim
            </Button>
            <Button href="/yasar burcu acan cv.pdf" variant="secondary" className="flex items-center gap-2" target="_blank" rel="noopener noreferrer" download="yasar_burcu_acan_cv.pdf">
              <Download className="w-5 h-5" />
              Özgeçmiş
            </Button>
          </motion.div>
          <motion.div
            className="flex justify-center md:justify-start space-x-6"
            variants={itemVariants}
          >
            <a href="https://github.com/BurcuAcan" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-300">
              <Github className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/in/burcuacan/" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-300">
              <Linkedin className="w-8 h-8" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hidden md:flex justify-center items-center relative"
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "backOut" }}
        >
          <InteractiveVisual />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <Image
              src={Profile}
              alt="Burcu Acan Profil Fotoğrafı"
              className="rounded-full lg:max-w-[250px] lg:max-h-[250px] md:max-w-[200px] md:max-h-[200px] object-cover border-2 border-slate-200 dark:border-slate-700 shadow-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;