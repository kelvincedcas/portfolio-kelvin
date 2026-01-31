import { Heart, ArrowUp } from 'lucide-react';

import { motion } from 'motion/react';
import { useLanguage } from '@/hooks/useLanguage';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className="relative py-12 px-6 border-t border-border bg-secondary/20">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="decorative-blob w-75 h-75 bg-primary/5 -bottom-48 left-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-3">
            <span className="font-display text-2xl font-bold gradient-text">
              Kelvin.dev {'{ }'}
            </span>
            <span className="text-muted-foreground">|</span>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Kelvin.dev
            </p>
          </div>

          {/* Made with love */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            {t.footer.craftedWith}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-accent fill-accent" />
            </motion.span>
            {t.footer.andCoffee}
          </motion.p>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {t.footer.backToTop}
            <span className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <ArrowUp className="w-4 h-4" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};
