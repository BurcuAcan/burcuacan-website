import Heading from '@/components/atoms/Heading';

const About = () => {
  return (
    <section id="about" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto text-center">
        <Heading level={2} className="mb-4">Hakkımda</Heading>
        <p className="text-lg max-w-3xl mx-auto">
          Teknolojiye ve tasarıma olan tutkumla, kullanıcı dostu ve estetik açıdan çekici web deneyimleri oluşturuyorum. Sürekli yeni şeyler öğrenmeye ve kendimi geliştirmeye odaklanıyorum. Amacım, insanların hayatını kolaylaştıran ve onlara ilham veren dijital ürünler yaratmaktır.
        </p>
      </div>
    </section>
  );
};

export default About;
