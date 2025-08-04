import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-slate-600 dark:text-slate-400 mb-4 md:mb-0">
          &copy; 2025 Burcu Acan. Tüm hakları saklıdır.
        </p>
        <div className="flex space-x-4">
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-300">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-300">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-300">
            <Twitter className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
