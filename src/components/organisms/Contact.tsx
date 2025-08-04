import Heading from '@/components/atoms/Heading';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-800 text-white py-20">
      <div className="container mx-auto text-center">
        <Heading level={2} className="mb-4">İletişim</Heading>
        <p className="text-lg mb-8">Benimle çalışmak veya bir proje hakkında görüşmek isterseniz, aşağıdaki e-posta adresinden bana ulaşabilirsiniz.</p>
        <a href="mailto:burcu.acan@example.com" className="text-2xl text-blue-400 hover:underline">burcu.acan@example.com</a>
      </div>
    </section>
  );
};

export default Contact;
