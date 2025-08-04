import Heading from '@/components/atoms/Heading';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({ title, description, link }: ProjectCardProps) => {
  return (
    <div className="bg-gray-700 p-6 rounded-lg">
      <Heading level={3} className="mb-2">{title}</Heading>
      <p className="mb-4">{description}</p>
      <a href={link} className="text-blue-400 hover:underline">Daha Fazla Bilgi</a>
    </div>
  );
};

export default ProjectCard;
