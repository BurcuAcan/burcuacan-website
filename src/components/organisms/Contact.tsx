import Heading from '@/components/atoms/Heading';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import AnimatedSection from '@/components/molecules/AnimatedSection';

const Contact = () => {
  return (
    <section id="contact" className="max-h-screen h-screen flex items-center justify-center relative overflow-hidden py-8">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-contact"></div>
      <div className="absolute inset-0 bg-pattern-hero opacity-10"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-2xl mx-auto glass-modern p-6 md:p-8 rounded-3xl">
          <Heading level={2} className="mb-6 text-inverse text-2xl md:text-3xl">İletişim</Heading>
          <p className="text-base text-secondary max-w-xl mx-auto mb-6 leading-relaxed">
            Benimle çalışmak veya bir proje hakkında görüşmek isterseniz, aşağıdaki e-posta adresinden bana ulaşabilirsiniz.
          </p>

          <a
            href="mailto:burcuuacann@gmail.com"
            className="group inline-flex flex-col md:flex-row items-center justify-center gap-3 text-xl md:text-2xl font-bold text-accent hover:text-accent-secondary transition-colors duration-300 mb-8 p-4 glass-modern rounded-2xl hover:bg-white/20 dark:hover:bg-white/10"
          >
            <Mail className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
            <span className="group-hover:scale-105 transition-transform duration-300">burcuuacann@gmail.com</span>
          </a>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/BurcuAcan"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-modern p-4 rounded-full text-inverse hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/burcuacan/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-modern p-4 rounded-full text-inverse hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-modern p-4 rounded-full text-inverse hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 hover:scale-110"
            >
              <Twitter className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;