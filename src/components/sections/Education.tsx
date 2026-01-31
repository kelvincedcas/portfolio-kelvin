import { useRef } from 'react';
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useLanguage } from '@/hooks/useLanguage';

const courseColors = [
  'from-blue-500 to-cyan-500',
  'from-purple-500 to-pink-500',
  'from-orange-500 to-red-500',
  'from-green-500 to-emerald-500',
  'from-indigo-500 to-violet-500',
  'from-teal-500 to-cyan-500',
];
export const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();
  const educationIcons = [GraduationCap, Award];
  return (
    <section
      id="education"
      className="section-padding relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="decorative-blob w-150 h-150 bg-primary/5 -bottom-48 -right-48" />
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
            {t.education.badge}
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            {t.education.title}
            <span className="gradient-text">{t.education.titleHighlight}</span>
          </h2>
        </motion.div>

        {/* Education Timeline */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl font-display font-semibold mb-10 flex items-center gap-3"
          >
            <div
              className="w-3 h-3 rounded-full"
              style={{ background: 'var(--gradient-primary)' }}
            />
            {t.education.formalEducation}
          </motion.h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-linear-to-b from-primary/50 via-accent/50 to-transparent hidden md:block" />

            <div className="space-y-8">
              {t.education.educationData.map((item, index) => {
                const Icon = educationIcons[index] || GraduationCap;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
                    className="relative md:pl-20"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-6 top-8 w-5 h-5 rounded-full bg-background border-4 border-primary hidden md:block" />

                    <div className="glass-card rounded-2xl p-8 hover-lift">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div className="flex items-center gap-4">
                          <div
                            className="w-14 h-14 rounded-2xl flex items-center justify-center"
                            style={{ background: 'var(--gradient-primary)' }}
                          >
                            <Icon className="w-7 h-7 text-white" />
                          </div>
                          <div>
                            <h4 className="font-display text-xl font-semibold">
                              {item.title}
                            </h4>
                            <p className="text-primary font-medium">
                              {item.institution}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm bg-secondary px-3 py-1.5 rounded-full">
                          <Calendar className="w-4 h-4" />
                          {item.period}
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {item.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-2xl font-display font-semibold mb-10 flex items-center gap-3"
          >
            <div
              className="w-3 h-3 rounded-full"
              style={{ background: 'var(--gradient-primary)' }}
            />
            {t.education.coursesTitle}
          </motion.h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.education.coursesData.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.08 }}
                className="group glass-card rounded-2xl p-5 hover-lift cursor-default"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-linear-to-br ${courseColors[index % courseColors.length]} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}
                  >
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-medium text-sm leading-tight mb-1 line-clamp-2">
                      {course.title}
                    </h4>
                    <p className="text-muted-foreground text-xs">
                      {course.platform} · {course.year}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
