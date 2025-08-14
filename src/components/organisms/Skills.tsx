import Heading from '@/components/atoms/Heading';
import { Code, Smartphone, Palette, GitBranch, Wind, Type, Layout, Server, Database, Bug, Terminal } from 'lucide-react';
import AnimatedSection from '@/components/molecules/AnimatedSection';
import { ReactNode } from 'react';

const SkillBadge = ({ icon, label }: { icon: ReactNode, label: string }) => (
  <div className="group skill-badge p-4 hover:scale-105 transition-all duration-300 cursor-pointer rounded-xl">
    <div className="flex items-center gap-3">
      <div className="text-accent group-hover:text-accent-secondary transition-colors duration-300">
        {icon}
      </div>
      <span className="font-medium text-primary group-hover:text-primary transition-colors duration-300">
        {label}
      </span>
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="max-h-screen h-screen flex items-center justify-center relative overflow-hidden py-8">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-skills"></div>
      <div className="absolute inset-0 bg-pattern-hero opacity-5"></div>

      <div className="container mx-auto px-4 text-center relative z-10 h-full flex flex-col justify-center">
        <Heading level={2} className="mb-8 text-primary text-2xl md:text-3xl">Yeteneklerim</Heading>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 max-w-5xl mx-auto max-h-[60vh] overflow-y-auto">
          <SkillBadge icon={<Code className="w-5 h-5" />} label="JavaScript" />
          <SkillBadge icon={<Smartphone className="w-5 h-5" />} label="React" />
          <SkillBadge icon={<Smartphone className="w-5 h-5" />} label="Next.js" />
          <SkillBadge icon={<Type className="w-5 h-5" />} label="TypeScript" />
          <SkillBadge icon={<Wind className="w-5 h-5" />} label="Tailwind" />
          <SkillBadge icon={<Palette className="w-5 h-5" />} label="Figma" />
          <SkillBadge icon={<Code className="w-5 h-5" />} label="HTML" />
          <SkillBadge icon={<Code className="w-5 h-5" />} label="CSS/SCSS" />
          <SkillBadge icon={<Layout className="w-5 h-5" />} label="Bootstrap" />
          <SkillBadge icon={<Server className="w-5 h-5" />} label="Node.js" />
          <SkillBadge icon={<Database className="w-5 h-5" />} label="Firebase" />
          <SkillBadge icon={<Bug className="w-5 h-5" />} label="Cypress" />
          <SkillBadge icon={<GitBranch className="w-5 h-5" />} label="Git/GitHub" />
          <SkillBadge icon={<Terminal className="w-5 h-5" />} label="Python" />
          <SkillBadge icon={<Server className="w-5 h-5" />} label="ASP.NET" />
        </div>
      </div>
    </section>
  );
};

export default Skills;