import { ReactNode, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Heading from '@/components/atoms/Heading';
import { ArrowRight } from 'lucide-react';
import { playClickSound, playClickSoundWithDelay, SoundTypes } from '@/utils/soundUtils';

interface ProjectCardProps {
  title: string;
  description: string;
  link?: string;
  icon?: ReactNode;
  technologies?: string[];
}

const ProjectCard = ({ title, description, link, icon, technologies }: ProjectCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className="bg-card p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex flex-col border border-border group relative overflow-hidden"
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      data-interactive
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(var(--primary), 0.1) 0%, transparent 50%)',
        }}
        animate={{
          background: [
            'radial-gradient(circle at 50% 50%, rgba(var(--primary), 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, rgba(var(--secondary), 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 80%, rgba(var(--primary), 0.1) 0%, transparent 50%)',
          ]
        }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Floating icon */}
      {icon && (
        <motion.div
          className="mb-4 text-primary text-4xl"
          whileHover={{
            y: -5,
            rotate: [0, -10, 10, 0],
            scale: 1.1
          }}
          transition={{
            rotate: { duration: 0.5 },
            y: { type: "spring", stiffness: 400, damping: 10 },
            scale: { duration: 0.2 }
          }}
        >
          {icon}
        </motion.div>
      )}

      <Heading level={5} className="mb-2 text-card-foreground relative z-10">{title}</Heading>

      <motion.p
        className="mb-4 text-muted-foreground flex-grow text-xs relative z-10"
        initial={{ opacity: 0.8 }}
        whileHover={{ opacity: 1 }}
      >
        {description}
      </motion.p>

      {technologies && technologies.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4 relative z-10">
          {technologies.map((tech, index) => (
            <motion.span
              key={tech}
              className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-0.5 rounded"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(var(--primary), 0.2)"
              }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      )}

      {link && (
        <motion.a
          href={link}
          className="inline-flex items-center gap-2 text-primary hover:underline font-semibold mt-auto relative z-10"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          onClick={(e) => {
            e.preventDefault();
            playClickSoundWithDelay(SoundTypes.PROJECT, () => {
              window.open(link, '_blank');
            });
          }}
        >
          <span>Daha Fazla Bilgi</span>
          <motion.div
            whileHover={{ x: 3 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <ArrowRight className="w-4 h-4" />
          </motion.div>
        </motion.a>
      )}

      {/* Corner accent */}
      <motion.div
        className="absolute top-0 right-0 w-0 h-0 border-l-[40px] border-l-transparent border-t-[40px] border-t-primary/20 opacity-0 group-hover:opacity-100"
        initial={{ scale: 0, rotate: 0 }}
        whileHover={{ scale: 1, rotate: 360 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default ProjectCard;
