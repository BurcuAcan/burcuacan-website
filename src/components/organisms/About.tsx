import Heading from '@/components/atoms/Heading';
import AnimatedSection from '@/components/molecules/AnimatedSection';

const About = () => {
  return (
    <AnimatedSection id="about" className="py-24 sm:py-32 bg-gradient-to-bl from-white to-slate-50  dark:from-slate-800 dark:to-slate-700">
      <div className="container mx-auto px-4 text-center">
        <Heading level={2} className="mb-6 text-slate-900 dark:text-white">Hakkımda</Heading>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
          Frontend geliştirme alanında uzmanlaşmış, yaratıcı ve çözüm odaklı bir yazılım geliştiriciyim. React ve TypeScript gibi modern teknolojilerle kullanıcı odaklı, performansı yüksek ve erişilebilir web uygulamaları geliştiriyorum.

          Teknolojiye ve tasarıma olan ilgim sayesinde, sadece işlevsel değil, aynı zamanda estetik açıdan güçlü ürünler ortaya koymayı hedefliyorum. UI/UX prensiplerini esas alarak modüler, ölçeklenebilir ve sürdürülebilir kod yapıları oluşturuyorum.

          Takım çalışmasına yatkınlığım, Agile/Scrum süreçlerindeki deneyimim ve test otomasyonu (Cypress) gibi modern geliştirme alışkanlıklarım sayesinde projelerde her zaman proaktif bir rol alıyorum.

          Kendimi sürekli geliştirmeye önem veriyorum. Öğrenmeye duyduğum merak beni yeni teknolojilere yönlendirirken, uluslararası deneyimim (Work & Travel) ve gönüllü çalışmalarım (IEEE, Blockchain toplulukları) farklı bakış açıları kazandırıyor.

          Amacım; insanların hayatını kolaylaştıran, ilham veren ve teknolojiyi insan odaklı çözümlerle birleştiren dijital ürünler üretmektir.
        </p>
      </div>
    </AnimatedSection>
  );
};

export default About;
