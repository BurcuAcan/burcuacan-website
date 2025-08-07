import { ReactNode } from 'react';
import Heading from '@/components/atoms/Heading';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  icon?: ReactNode; // New prop for icon
  technologies?: string[];
}

const ProjectCard = ({ title, description, link, icon, technologies }: ProjectCardProps) => {
  return (
    <div className="bg-transparent p-6 rounded-lg shadow-md hover:bg-slate-100 dark:hover:bg-slate-800 hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col">
      {icon && (
        <div className="mb-4 text-sky-500 dark:text-sky-400 text-4xl">
          {icon}
        </div>
      )}
      <Heading level={5} className="mb-2 text-slate-900 dark:text-white">{title}</Heading>
      <p className="mb-4 text-slate-600 dark:text-slate-400 flex-grow text-xs">{description}</p>
      {technologies && technologies.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span key={tech} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
              {tech}
            </span>
          ))}
        </div>
      )}
      <a href={link} className="inline-flex items-center gap-2 text-sky-500 dark:text-sky-400 hover:underline font-semibold mt-auto">
        <span>Daha Fazla Bilgi</span>
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
};

export default ProjectCard;
