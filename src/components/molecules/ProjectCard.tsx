import { ReactNode } from 'react';
import Heading from '@/components/atoms/Heading';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  link?: string;
  icon?: ReactNode;
  technologies?: string[];
}

const ProjectCard = ({ title, description, link, icon, technologies }: ProjectCardProps) => {
  return (
    <div className="group card-modern p-8 flex flex-col h-full relative overflow-hidden rounded-3xl">
      {/* Gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

      <div className="relative z-10">
        {icon && (
          <div className="mb-6 text-accent text-5xl transform group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        )}

        <Heading level={4} className="mb-4 text-primary group-hover:text-accent transition-colors duration-300">
          {title}
        </Heading>

        <p className="mb-6 text-secondary flex-grow text-sm leading-relaxed">
          {description}
        </p>

        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="glass-modern text-primary text-xs font-medium px-3 py-1 rounded-full border-primary hover:bg-white/20 dark:hover:bg-white/10 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-secondary font-semibold mt-auto group/link transition-colors duration-300"
          >
            <span>Projeyi Görüntüle</span>
            <ExternalLink className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" />
          </a>
        )}
      </div>

      {/* Hover effect border */}
      <div className="absolute inset-0 border-2 border-transparent bg-gradient-accent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
      <div className="absolute inset-0.5 bg-surface-primary rounded-3xl -z-10"></div>
    </div>
  );
};

export default ProjectCard;
