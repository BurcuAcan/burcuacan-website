import { motion } from 'framer-motion';
import { Github, Linkedin, Download } from 'lucide-react';
import Button from '@/components/atoms/Button';
import Image from 'next/image';
import InteractiveVisual from '@/components/molecules/InteractiveVisual';
import Profile from "../../images/BurcuAcanPhoto.jpg";
import { useState, useEffect } from 'react';

const roles = ["Frontend", "React JS", "Next.JS", "JavaScript", "TypeScript"];

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const [developerLeft, setDeveloperLeft] = useState(`calc(${roles[0].length}ch + 0ch)`);

  const typingSpeed = 50;
  const deletingSpeed = 50;
  const pauseTime = 1000;

  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (!isDeleting && charIndex === 0) {
      setDeveloperLeft(`calc(${currentRole.length - 1}ch + 0.5ch)`);
    }

    const handleTyping = () => {
      if (isDeleting) {
        if (charIndex > 0) {
          setCurrentText(currentRole.substring(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      } else {
        if (charIndex < currentRole.length) {
          setCurrentText(currentRole.substring(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        } else {

          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

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

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>, id: string) => {
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
    <section id="hero" className="max-h-screen h-screen px-4 flex items-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="absolute inset-0 opacity-20 bg-pattern-hero"></div>

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center relative z-10 h-full">
        <motion.div
          className="text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-inverse mb-4"
            variants={itemVariants}
          >
            <span className="gradient-text-primary">Yasar Burcu Acan</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-secondary font-semibold mb-8 relative flex flex-col md:block"
            variants={itemVariants}
          >
            <span className="inline-block text-center md:text-left min-w-[120px]">
              {currentText || '\u00A0'}
            </span>

            <span
              className="md:absolute text-accent"
              style={{
                left: developerLeft,
                transition: 'left 0.18s ease',
              }}
            >
              Geliştirici
            </span>
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center sm:justify-center md:justify-start gap-4 mb-8"
            variants={itemVariants}
          >
            <Button
              href="#projects"
              variant="gradient"
              size="lg"
              onClick={(e) => handleScrollTo(e, 'projects')}
            >
              Projelerim
            </Button>
            <Button
              href="/yasar_burcu_acan_cv.pdf"
              variant="glass"
              size="lg"
              className="flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
              download="yasar_burcu_acan_cv.pdf"
            >
              <Download className="w-5 h-5" />
              Özgeçmiş
            </Button>
          </motion.div>

          <motion.div
            className="flex justify-center md:justify-start space-x-6"
            variants={itemVariants}
          >
            <a
              href="https://github.com/BurcuAcan"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-modern p-3 rounded-full text-inverse hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/burcuacan/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-modern p-3 rounded-full text-inverse hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
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
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-accent rounded-full blur-lg opacity-75 animate-pulse"></div>
              <Image
                src={Profile}
                alt="Burcu Acan Profil Fotoğrafı"
                className="relative rounded-full lg:max-w-[250px] lg:max-h-[250px] md:max-w-[200px] md:max-h-[200px] object-cover border-4 border-white/20 dark:border-white/10 shadow-2xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
