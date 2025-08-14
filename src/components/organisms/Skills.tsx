import Heading from '@/components/atoms/Heading';
import { Code, Smartphone, Palette, GitBranch, Wind, Type, Layout, Server, Database, Bug, Terminal } from 'lucide-react';
import AnimatedSection from '@/components/molecules/AnimatedSection';

const SkillBadge = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
  <div className="flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-medium">
    {icon}
    <span>{label}</span>
  </div>
);

const Skills = () => {
  return (
    <AnimatedSection id="skills" className="h-screen flex flex-col justify-center bg-gradient-skills pt-20 pb-10 md:pt-0 md:pb-0">
      <div className="container mx-auto px-4 text-center">
        <Heading level={2} className="mb-12 text-foreground">Yeteneklerim</Heading>
        <div className="flex flex-wrap justify-center gap-4">
          <SkillBadge icon={<Code className="w-5 h-5" />} label="JavaScript" />
          <SkillBadge icon={<Smartphone className="w-5 h-5" />} label="React" />
          <SkillBadge icon={<Smartphone className="w-5 h-5" />} label="Next.js" />
          <SkillBadge icon={<Type className="w-5 h-5" />} label="TypeScript" />
          <SkillBadge icon={<Wind className="w-5 h-5" />} label="Tailwind CSS" />
          <SkillBadge icon={<Palette className="w-5 h-5" />} label="Figma" />
          <SkillBadge icon={<Code className="w-5 h-5" />} label="HTML" />
          <SkillBadge icon={<Code className="w-5 h-5" />} label="CSS/SCSS" />
          <SkillBadge icon={<Layout className="w-5 h-5" />} label="Bootstrap" />
          <SkillBadge icon={<Server className="w-5 h-5" />} label="Node.js" />
          <SkillBadge icon={<Database className="w-5 h-5" />} label="Firebase" />
          <SkillBadge icon={<Bug className="w-5 h-5" />} label="Cypress" />
          <SkillBadge icon={<GitBranch className="w-5 h-5" />} label="Git/GitHub" />
          <SkillBadge icon={<Terminal className="w-5 h-5" />} label="Python" />
          <SkillBadge icon={<Server className="w-5 h-5" />} label="ASP.NET Core" />

        </div>
      </div>
    </AnimatedSection>
  );
};

export default Skills;