import Button from '@/components/atoms/Button';
import Heading from '@/components/atoms/Heading';

const Hero = () => {
  return (
    <section id="hero" className="bg-gray-800 text-white h-screen flex items-center justify-center text-center">
      <div className="container mx-auto">
        <Heading level={1} className="mb-4">Merhaba, ben Burcu Acan</Heading>
        <p className="text-2xl mb-8">Frontend Geliştirici & UI/UX Tasarımcısı</p>
        <Button href="#projects">
          Projelerimi İncele
        </Button>
      </div>
    </section>
  );
};

export default Hero;
