import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import type { Variants } from 'motion/react';
import { useLanguage } from '@/hooks/useLanguage';
import { useIsMobile } from '@/hooks/useIsMobile';

/* =======================
   Animation Variants
======================= */

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const fadeUpSoft: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

/* =======================
   Static Data
======================= */

const projectTags = [
  ['React', 'TypeScript', 'Tailwind', 'Vercel serverless', 'Shadcn'],
  ['React', 'Express.js', 'MongoDB', 'Tailwind', 'Resend'],
  ['React', 'Shadcn', 'Motion', 'Tailwind', 'Vercel serverless'],
  ['React', 'Express.js', 'MongoDB', 'Tailwind', 'Resend'],
  ['Figma', 'Prototype'],
  ['JavaScript', 'Tailwind', 'WeatherApp API'],
];

const projectColors = [
  'from-blue-500/20 to-cyan-500/20',
  'from-purple-500/20 to-pink-500/20',
  'from-orange-500/20 to-red-500/20',
  'from-green-500/20 to-emerald-500/20',
  'from-teal-500/20 to-cyan-500/20',
  'from-indigo-500/20 to-violet-500/20',
];

/* =======================
   Component
======================= */

const Projects = () => {
  const { t } = useLanguage();

  const isMobile = useIsMobile();
  const reduceMotion = useReducedMotion();

  const shouldAnimate = !isMobile && !reduceMotion;

  const featuredProjects = t.projects.projectsData.slice(0, 4);
  const otherProjects = t.projects.projectsData.slice(4);

  return (
    <section
      id="projects"
      className="section-padding bg-secondary/30 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="decorative-blob w-175 h-175 bg-primary/5 -top-64 -left-64" />
        <div className="decorative-blob w-125 h-125 bg-accent/5 bottom-0 right-0" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial={shouldAnimate ? 'hidden' : false}
          whileInView={shouldAnimate ? 'visible' : undefined}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            {t.projects.badge}
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {t.projects.title}
            <span className="gradient-text">{t.projects.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.projects.description}
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          variants={shouldAnimate ? container : undefined}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-120px' }}
          className="space-y-8 mb-20"
        >
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={shouldAnimate ? fadeUp : undefined}
              className="group"
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center glass-card rounded-2xl p-5 hover-lift cursor-default">
                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div
                    className={`relative aspect-16/10 rounded-3xl overflow-hidden glass-card p-3 hover-lift bg-linear-to-br ${projectColors[index]}`}
                  >
                    <div className="w-full h-full rounded-2xl bg-card relative overflow-hidden">
                      <div className="absolute top-0 left-0 right-0 h-8 bg-secondary/50 flex items-center px-4 gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                      </div>

                      <img
                        src={project.imageURL}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        width={800}
                        height={500}
                        className="w-full h-full object-cover"
                      />

                      <div className="absolute inset-0 bg-foreground/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                        <a
                          href={project.projectURL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 rounded-full bg-background flex items-center justify-center hover:scale-110 transition-transform"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                        <a
                          href={project.gitHubURL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 rounded-full bg-background flex items-center justify-center hover:scale-110 transition-transform"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={index % 2 === 1 ? 'lg:order-1 lg:px-8' : 'lg:px-8'}
                >
                  <span className="text-primary text-sm font-medium uppercase tracking-wider">
                    {project.subtitle}
                  </span>
                  <h3 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4 group-hover:text-transparent group-hover:[background-image:var(--gradient-primary)] group-hover:[-webkit-background-clip:text] bg-clip-text transition-all">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {projectTags[index].map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1.5 text-sm font-medium bg-secondary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-6">
                    <a
                      href={project.projectURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-medium hover:text-primary transition-colors"
                    >
                      {t.projects.viewLive}
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                    <a
                      href={project.gitHubURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-medium hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      {t.projects.sourceCode}
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Other Projects */}
        <div>
          <motion.h3
            variants={fadeUpSoft}
            initial={shouldAnimate ? 'hidden' : false}
            whileInView={shouldAnimate ? 'visible' : undefined}
            viewport={{ once: true, margin: '-60px' }}
            className="text-2xl font-display font-semibold mb-10 text-center"
          >
            {t.projects.moreProjects}
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
                whileInView={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="group glass-card rounded-2xl p-6 hover-lift"
              >
                <div
                  className={`aspect-video rounded-xl mb-5 bg-linear-to-br ${projectColors[index + 3]} p-2`}
                >
                  <div className="w-full h-full rounded-lg bg-card/80 overflow-hidden">
                    <img
                      src={project.imageURL}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      width={400}
                      height={250}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <span className="text-xs text-primary font-medium uppercase tracking-wider">
                  {project.subtitle}
                </span>
                <h4 className="font-display text-xl font-semibold mt-1 mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex gap-4">
                  <a
                    href={project.projectURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  {project.gitHubURL && (
                    <a
                      href={project.gitHubURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
