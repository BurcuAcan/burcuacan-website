import Heading from '@/components/atoms/Heading';
import ProjectCard from '@/components/molecules/ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-800 text-white py-20">
      <div className="container mx-auto text-center">
        <Heading level={2} className="mb-8">Projelerim</Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard 
            title="Proje Adı" 
            description="Proje açıklaması burada yer alacak. Projenin amacı, kullanılan teknolojiler ve elde edilen sonuçlar hakkında bilgi verebilirsiniz."
            link="#"
          />
          {/* Diğer proje kartları buraya eklenebilir */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
