import Heading from '@/components/atoms/Heading';

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto text-center">
        <Heading level={2} className="mb-8">Yeteneklerim</Heading>
        <div className="flex flex-wrap justify-center gap-4">
          <span className="bg-gray-700 text-white px-4 py-2 rounded-full">JavaScript</span>
          <span className="bg-gray-700 text-white px-4 py-2 rounded-full">React</span>
          <span className="bg-gray-700 text-white px-4 py-2 rounded-full">Next.js</span>
          <span className="bg-gray-700 text-white px-4 py-2 rounded-full">TypeScript</span>
          <span className="bg-gray-700 text-white px-4 py-2 rounded-full">Tailwind CSS</span>
          <span className="bg-gray-700 text-white px-4 py-2 rounded-full">Figma</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
