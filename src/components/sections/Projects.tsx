import { useRef } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useLanguage } from '@/hooks/useLanguage';

const projectTags = [
  ['React', 'TypeScript', 'Tailwind', 'Vercel serverless', 'Shadcn'],
  ['React', 'Express.js', 'MongoDB', 'Tailwind', 'Resend'],
  ['React', 'Shadcn', 'TanStack', 'Tailwind', 'Zustand'],
  ['React', 'Flowbite', 'Firebase'],
  ['React', 'Expo', 'Firebase', 'HealthKit'],
  ['Vue.js', 'Web3.js', 'CoinGecko API', 'Chart.js'],
];

const projectColors = [
  'from-blue-500/20 to-cyan-500/20',
  'from-purple-500/20 to-pink-500/20',
  'from-orange-500/20 to-red-500/20',
  'from-green-500/20 to-emerald-500/20',
  'from-teal-500/20 to-cyan-500/20',
  'from-indigo-500/20 to-violet-500/20',
];
export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  //   const [activeFilter, setActiveFilter] = useState(0);
  const { t } = useLanguage();

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

      <div className="max-w-7xl mx-auto relative" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
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

        {/* Filter Tabs
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-2 mb-16"
        >
          {t.projects.filters.map((filter, index) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(index)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === index
                  ? 'text-primary-foreground'
                  : 'bg-card border border-border hover:border-primary/50'
              }`}
              style={
                activeFilter === index
                  ? { background: 'var(--gradient-primary)' }
                  : {}
              }
            >
              {filter}
            </button>
          ))}
        </motion.div> */}

        {/* Featured Projects */}
        <div className="space-y-8 mb-20">
          {featuredProjects.map((project, index) => (
            <div className="group">
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.15 }}
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center glass-card rounded-2xl p-5 hover-lift cursor-default">
                  {/* Image */}
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div
                      className={`relative aspect-16/10 rounded-3xl overflow-hidden glass-card p-3 hover-lift bg-linear-to-br ${projectColors[index]}`}
                    >
                      <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center relative overflow-hidden">
                        {/* Mockup Window Chrome */}
                        <div className="absolute top-0 left-0 right-0 h-8 bg-secondary/50 flex items-center px-4 gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-400" />
                          <div className="w-3 h-3 rounded-full bg-yellow-400" />
                          <div className="w-3 h-3 rounded-full bg-green-400" />
                        </div>
                        <img
                          src={project.imageURL}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        {/* Hover Overlay */}
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
                    className={`${index % 2 === 1 ? 'lg:order-1' : ''} lg:px-8`}
                  >
                    <span className="text-primary text-sm font-medium uppercase tracking-wider">
                      {project.subtitle}
                    </span>
                    <h3 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4 transition-all duration-500 text-foreground group-hover:text-transparent group-hover:[background-image:var(--gradient-primary)] group-hover:[-webkit-background-clip:text] group-hover:bg-clip-text pb-1">
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
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project.projectURL}
                        className="inline-flex items-center gap-2 font-medium hover:text-primary transition-colors group/link"
                      >
                        {t.projects.viewLive}
                        <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
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
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-2xl font-display font-semibold mb-10 text-center"
          >
            {t.projects.moreProjects}
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                className="group glass-card rounded-2xl p-6 hover-lift"
              >
                {/* Mini Preview */}
                <div
                  className={`aspect-video rounded-xl mb-5 bg-linear-to-br ${projectColors[index + 3]} p-2`}
                >
                  <div className="w-full h-full rounded-lg bg-card/80 flex items-center justify-center overflow-hidden">
                    <img
                      src={project.imageURL}
                      alt={project.title}
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

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {projectTags[index + 3]?.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs bg-secondary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.projectURL}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  {project.gitHubURL !== '' && (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={project.gitHubURL}
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
