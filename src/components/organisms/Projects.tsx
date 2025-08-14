import { Utensils, Share2, Satellite } from 'lucide-react';
import Heading from '@/components/atoms/Heading';
import ProjectCard from '@/components/molecules/ProjectCard';
import AnimatedSection from '@/components/molecules/AnimatedSection';

const Projects = () => {
  return (
    <section id="projects" className="max-h-screen h-screen flex items-center justify-center py-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-projects"></div>
      <div className="absolute inset-0 bg-pattern-hero opacity-10"></div>

      <div className="container mx-auto px-4 text-center relative z-10 h-full flex flex-col justify-center">
        <Heading level={2} className="mb-6 text-inverse text-2xl md:text-3xl">Projelerim</Heading>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-6xl mx-auto max-h-[70vh] overflow-y-auto">
          <ProjectCard
            title="Restaurant Comparator"
            description="Kullanıcıların restoranları karşılaştırabilmesini sağlayan web uygulaması. Web scraping ve Firebase ile geliştirildi."
            link="https://github.com/BurcuAcan/obur"
            icon={<Utensils size={36} />}
            technologies={["Python", "Flask", "Firebase"]}
          />
          <ProjectCard
            title="Mebi – Sosyal Medya"
            description="Tam kapsamlı sosyal medya uygulaması. React, Flutter ve ASP.NET Core ile geliştirildi."
            icon={<Share2 size={36} />}
            technologies={["React", "Flutter", "ASP.NET Core"]}
          />
          <ProjectCard
            title="Teknofest Model Uydu"
            description="Yer ve uçuş yazılımları geliştirme projesi. Raspberry Pi ve gömülü sistemler kullanıldı."
            icon={<Satellite size={36} />}
            technologies={["Python", "C", "Raspberry Pi"]}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
