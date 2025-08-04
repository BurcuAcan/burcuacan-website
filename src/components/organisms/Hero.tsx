import Button from '@/components/atoms/Button';
import Heading from '@/components/atoms/Heading';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center text-center bg-slate-100 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <Heading level={1} className="text-sky-500 dark:text-sky-400 mb-4">
          Merhaba, ben Burcu Acan
        </Heading>
        <p className="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
          Frontend Geliştirici & UI/UX Tasarımcısı
        </p>
        <Button href="#projects">
          Projelerimi İncele
        </Button>
      </div>
    </section>
  );
};

export default Hero;
