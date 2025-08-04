import Heading from '@/components/atoms/Heading';
import ProjectCard from '@/components/molecules/ProjectCard';
import AnimatedSection from '@/components/molecules/AnimatedSection';

const Projects = () => {
  return (
    <AnimatedSection id="projects" className="py-24 sm:py-32 bg-slate-100 dark:bg-slate-900">
      <div className="container mx-auto px-4 text-center">
        <Heading level={2} className="mb-12 text-slate-900 dark:text-white">Projelerim</Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard 
            title="Proje Adı" 
            description="Proje açıklaması burada yer alacak. Projenin amacı, kullanılan teknolojiler ve elde edilen sonuçlar hakkında bilgi verebilirsiniz."
            link="#"
          />
          {/* Diğer proje kartları buraya eklenebilir */}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Projects;
