import { motion } from 'motion/react';
import type { Variants } from 'motion/react';
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

/* =======================
   Variants
======================= */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const Skills = () => {
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

      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
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
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20 overflow-hidden"
        >
          <div className="overflow-hidden">
            <div className="flex will-change-transform animate-[marquee_20s_linear_infinite] md:animate-[marquee_25s_linear_infinite]">
              {[...technologies, ...technologies].map((tech, index) => (
                <span
                  key={index}
                  className="shrink-0 mx-3 md:mx-6 px-4 md:px-6 py-2 md:py-3 bg-card rounded-full border border-border text-sm font-medium hover:border-primary/50 hover:bg-primary/5 transition-colors cursor-default whitespace-nowrap"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-2 gap-8"
        >
          {t.skills.categories.map((category) => (
            <motion.div
              key={category.title}
              variants={fadeUp}
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
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          ease: 'easeOut',
                        }}
                        style={{
                          transformOrigin: 'left',
                          background: 'var(--gradient-primary)',
                        }}
                        className="h-full rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
