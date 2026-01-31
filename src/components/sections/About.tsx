import { useRef } from 'react';
import { Code2, Palette, Lightbulb, Coffee } from 'lucide-react';

import { motion, useInView } from 'motion/react';
import { useLanguage } from '@/hooks/useLanguage';

const icons = [Code2, Palette, Lightbulb, Coffee];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="decorative-blob w-100 h-100 bg-accent/10 top-0 right-0" />
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
            {t.about.badge}
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            {t.about.title}
            <span className="block gradient-text pb-3">
              {t.about.titleHighlight}
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image & Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative aspect-4/5 rounded-3xl overflow-hidden glass-card p-2">
              <div className="w-full h-full rounded-2xl bg-linear-to-br from-primary/5 via-secondary to-accent/5 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="size-60 mx-auto mb-6 rounded-full bg-linear-to-br from-primary/20 to-accent/20 flex items-center justify-center border-4 border-background shadow-xl overflow-hidden">
                    <img
                      loading="lazy"
                      decoding="async"
                      src="/images/profile.webp"
                      alt="profile"
                      className="object-cover"
                    />
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {t.about.photoPlaceholder}
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -right-6 w-24 h-24 rounded-2xl glass-card flex items-center justify-center"
            >
              <span className="text-4xl">🚀</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -bottom-4 -left-4 w-32 h-20 rounded-2xl glass-card flex items-center justify-center gap-2"
            >
              <span className="text-lg">💻</span>
              <span className="text-sm font-medium">{t.about.coding}</span>
            </motion.div>

            {/* Decorative Shapes */}
            <div className="absolute -z-10 -bottom-8 -right-8 w-full h-full rounded-3xl bg-linear-to-br from-primary/10 to-accent/10" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-10">
              {t.about.paragraphs.map((paragraph, index) => (
                <p key={index}>
                  {index === 0 && (
                    <span className="text-foreground font-semibold">
                      Hello!{' '}
                    </span>
                  )}
                  {index === 0 ? paragraph.replace('Hello! ', '') : paragraph}
                </p>
              ))}
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {t.about.highlights.map((item, index) => {
                const Icon = icons[index];
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="group p-4 rounded-2xl bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-10 rounded-md bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">
                          {item.title}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
