import Heading from '@/components/atoms/Heading';
import { Mail } from 'lucide-react';
import AnimatedSection from '@/components/molecules/AnimatedSection';

const Contact = () => {
  return (
    <AnimatedSection id="contact" className="py-24 sm:py-32 bg-slate-100 dark:bg-slate-900">
      <div className="container mx-auto px-4 text-center">
        <Heading level={2} className="mb-6 text-slate-900 dark:text-white">İletişim</Heading>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
          Benimle çalışmak veya bir proje hakkında görüşmek isterseniz, aşağıdaki e-posta adresinden bana ulaşabilirsiniz.
        </p>
        <a href="mailto:burcu.acan@example.com" className="inline-flex items-center gap-2 text-2xl md:text-3xl font-bold text-sky-500 dark:text-sky-400 hover:underline">
          <Mail className="w-8 h-8" />
          <span>burcu.acan@example.com</span>
        </a>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
