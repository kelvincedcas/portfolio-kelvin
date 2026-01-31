import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { useLanguage } from '@/hooks/useLanguage';

const technologies = [
  'React',
  'TypeScript',
  'Node.js',
  'PostgreSQL',
  'MongoDB',
  'Tailwind',
  'Figma',
  'Docker',
  'Git',
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();
  return (
    <section
      id="skills"
      className="section-padding bg-secondary/30 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="decorative-blob w-125 h-125 bg-primary/10 -top-64 -left-64" />
        <div className="decorative-blob w-100 h-100 bg-accent/10 -bottom-32 right-0" />
      </div>

      <div className="max-w-6xl mx-auto relative" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            {t.skills.badge}
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            {t.skills.title}
            <span className="gradient-text">{t.skills.titleHighlight}</span>
          </h2>
        </motion.div>

        {/* Technology Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20 overflow-hidden"
        >
          <div className="overflow-hidden">
            <div className="flex animate-[marquee_40s_linear_infinite] md:animate-[marquee_25s_linear_infinite]">
              {[...technologies, ...technologies].map((tech, index) => (
                <span
                  key={index}
                  className="shrink-0 mx-6 px-6 py-3 bg-card rounded-full border border-border text-sm font-medium hover:border-primary/50 hover:bg-primary/5 transition-colors cursor-default whitespace-nowrap"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {t.skills.categories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + categoryIndex * 0.1 }}
              className="glass-card rounded-2xl p-6"
            >
              <h3 className="font-display text-xl font-semibold mb-6 flex items-center gap-3">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: 'var(--gradient-primary)' }}
                />
                {category.title}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: 'easeOut',
                        }}
                        className="h-full rounded-full"
                        style={{ background: 'var(--gradient-primary)' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
