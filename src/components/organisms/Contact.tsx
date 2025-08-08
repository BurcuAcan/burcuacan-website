import Heading from '@/components/atoms/Heading';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import AnimatedSection from '@/components/molecules/AnimatedSection';

const Contact = () => {
  return (
    <AnimatedSection id="contact" className="h-[90vh] sm:min-h-[90vh] flex flex-col justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 text-center">
        <Heading level={2} className="mb-6 text-slate-900 dark:text-white">İletişim</Heading>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
          Benimle çalışmak veya bir proje hakkında görüşmek isterseniz, aşağıdaki e-posta adresinden bana ulaşabilirsiniz.
        </p>
        <a href="mailto:burcuuacann@gmail.com" className="flex flex-col justify-center md:flex-row items-center gap-2 text-xl md:text-3xl font-bold text-sky-500 dark:text-sky-600 hover:underline mb-8 sm:text-md">
          <Mail className="w-8 h-8" />
          <span>burcuuacann@gmail.com</span>
        </a>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/BurcuAcan" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-300">
            <Github className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/in/burcuacan/" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-300">
            <Linkedin className="w-8 h-8" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-300">
            <Twitter className="w-8 h-8" />
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;