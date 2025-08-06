import Heading from '@/components/atoms/Heading';
import { Code, Smartphone, Palette, GitBranch, Wind, Type } from 'lucide-react';
import AnimatedSection from '@/components/molecules/AnimatedSection';

const SkillBadge = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
  <div className="flex items-center gap-2 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 px-4 py-2 rounded-full font-medium">
    {icon}
    <span>{label}</span>
  </div>
);

const Skills = () => {
  return (
    <AnimatedSection id="skills" className="py-24 sm:py-32 bg-gradient-to-br from-white to-slate-50 dark:from-slate-850 dark:to-slate-800">
      <div className="container mx-auto px-4 text-center">
        <Heading level={2} className="mb-12 text-slate-900 dark:text-white">Yeteneklerim</Heading>
        <div className="flex flex-wrap justify-center gap-4">
          <SkillBadge icon={<Code className="w-5 h-5" />} label="JavaScript" />
          <SkillBadge icon={<Smartphone className="w-5 h-5" />} label="React" />
          <SkillBadge icon={<Smartphone className="w-5 h-5" />} label="Next.js" />
          <SkillBadge icon={<Type className="w-5 h-5" />} label="TypeScript" />
          <SkillBadge icon={<Wind className="w-5 h-5" />} label="Tailwind CSS" />
          <SkillBadge icon={<Palette className="w-5 h-5" />} label="Figma" />
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Skills;