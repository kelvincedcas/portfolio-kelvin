import { ArrowDown, Sparkles } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import type { Variants } from 'motion/react';

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: 'easeOut' },
  },
};

export const Hero = () => {
  const { t } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);
  const [blurLoaded, setBlurLoaded] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    // Delay de blur para no congelar scroll en mobile
    const timer = setTimeout(() => setBlurLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden">
      {/* Background */}
      <div
        className={`absolute inset-0 pointer-events-none ${
          blurLoaded ? 'backdrop-blur-xl' : ''
        } transition-[backdrop-filter] duration-500`}
      >
        <div className="decorative-blob w-150 h-150 bg-primary/20 -top-48 -right-48" />
        <div className="decorative-blob w-125 h-125 bg-accent/20 -bottom-32 -left-32" />
        <div className="decorative-blob w-75 h-75 bg-primary/10 top-1/3 left-1/4" />

        {!isMobile && (
          <>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
              className="absolute top-20 right-20 w-32 h-32 border border-primary/10 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
              className="absolute bottom-32 left-20 w-24 h-24 border border-accent/10 rounded-2xl"
            />
          </>
        )}

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative max-w-5xl mx-auto text-center z-10"
      >
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border mb-8 shadow-soft"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium">{t.hero.available}</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="block">{t.hero.greeting}</span>
          <span className="block mt-2 gradient-text pb-2">
            Kelvin.dev {'{ }'}
          </span>
        </motion.h1>

        {/* Roles */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap items-center justify-center gap-3 mb-8"
        >
          {t.hero.roles.map((role) => (
            <motion.span
              key={role}
              variants={scaleIn}
              className="px-4 py-2 bg-secondary rounded-full text-sm font-medium text-muted-foreground"
            >
              {role}
            </motion.span>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {t.hero.description}
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center justify-center px-8 py-4 font-medium rounded-xl overflow-hidden"
            style={{ background: 'var(--gradient-primary)' }}
          >
            <span className="relative z-10 text-white flex items-center gap-2">
              {t.hero.exploreWork}
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 font-medium rounded-xl border-2 border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
          >
            {t.hero.letsConnect}
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={fadeUp}
          className="grid grid-cols-3 gap-8 max-w-lg mx-auto mt-20"
        >
          {t.hero.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
