import Heading from '@/components/atoms/Heading';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({ title, description, link }: ProjectCardProps) => {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col">
      <Heading level={3} className="mb-2 text-slate-900 dark:text-white">{title}</Heading>
      <p className="mb-4 text-slate-600 dark:text-slate-400 flex-grow">{description}</p>
      <a href={link} className="inline-flex items-center gap-2 text-sky-500 dark:text-sky-400 hover:underline font-semibold">
        <span>Daha Fazla Bilgi</span>
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
};

export default ProjectCard;
