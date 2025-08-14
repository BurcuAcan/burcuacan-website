import { ReactNode } from 'react';
import Heading from '@/components/atoms/Heading';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  link?: string;
  icon?: ReactNode;
  technologies?: string[];
}

const ProjectCard = ({ title, description, link, icon, technologies }: ProjectCardProps) => {
  return (
    <div className="bg-card p-6 rounded-lg shadow-md hover:bg-secondary hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col border border-border">
      {icon && (
        <div className="mb-4 text-primary text-4xl">
          {icon}
        </div>
      )}
      <Heading level={5} className="mb-2 text-card-foreground">{title}</Heading>
      <p className="mb-4 text-muted-foreground flex-grow text-xs">{description}</p>
      {technologies && technologies.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span key={tech} className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-0.5 rounded">
              {tech}
            </span>
          ))}
        </div>
      )}
      {link && (
        <a href={link} className="inline-flex items-center gap-2 text-primary hover:underline font-semibold mt-auto">
          <span>Daha Fazla Bilgi</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      )}

    </div>
  );
};

export default ProjectCard;
