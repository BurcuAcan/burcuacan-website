import Heading from '@/components/atoms/Heading';
import AnimatedSection from '@/components/molecules/AnimatedSection';

const About = () => {
  return (
    <AnimatedSection id="about" className="py-24 sm:py-32 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4 text-center">
        <Heading level={2} className="mb-6 text-slate-900 dark:text-white">Hakkımda</Heading>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
          Teknolojiye ve tasarıma olan tutkumla, kullanıcı dostu ve estetik açıdan çekici web deneyimleri oluşturuyorum. Sürekli yeni şeyler öğrenmeye ve kendimi geliştirmeye odaklanıyorum. Amacım, insanların hayatını kolaylaştıran ve onlara ilham veren dijital ürünler yaratmaktır.
        </p>
      </div>
    </AnimatedSection>
  );
};

export default About;
