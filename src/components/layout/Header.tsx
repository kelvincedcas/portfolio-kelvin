import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useRef, useMemo } from 'react';
import { Menu, X, Moon, Sun, Globe } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useTheme } from '@/hooks/useTheme';
// import type { Variants } from 'motion/react';
import { useIsMobile } from '@/hooks/useIsMobile';

// const mobileMenuVariants: Variants = {
//   hidden: { opacity: 0, y: -10 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.25, staggerChildren: 0.05 },
//   },
//   exit: { opacity: 0, y: -6, transition: { duration: 0.2 } },
// };

// const mobileItem: Variants = {
//   hidden: { opacity: 0, x: -16 },
//   visible: { opacity: 1, x: 0, transition: { duration: 0.25 } },
// };

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const isMobile = useIsMobile();

  const navItems = useMemo(
    () => [
      { label: t.nav.about, href: '#about' },
      { label: t.nav.skills, href: '#skills' },
      { label: t.nav.education, href: '#education' },
      { label: t.nav.projects, href: '#projects' },
      { label: t.nav.contact, href: '#contact' },
    ],
    [t.nav.about, t.nav.skills, t.nav.education, t.nav.projects, t.nav.contact],
  );

  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const compute = () => {
      setIsScrolled(window.scrollY > 50);

      // Active section tracking is only needed for desktop nav highlighting.
      if (!isMobile) {
        const sections = navItems.map((item) => item.href.substring(1));
        for (const section of sections.reverse()) {
          const element = document.getElementById(section);
          if (!element) continue;
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const onScroll = () => {
      // Throttle scroll work to the next animation frame.
      if (rafRef.current != null) return;
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = null;
        compute();
      });
    };

    // Compute once on mount.
    compute();

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current != null) window.cancelAnimationFrame(rafRef.current);
    };
  }, [isMobile, navItems]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? isMobile
            ? 'bg-background/90 border-b border-border/50 py-3'
            : 'bg-background/70 backdrop-blur-xl border-b border-border/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="relative group">
          <span className="font-display text-2xl font-bold gradient-text">
            JD
          </span>
          <span
            className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
            style={{ background: 'var(--gradient-primary)' }}
          />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full ${
                  activeSection === item.href.substring(1)
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                    transition={{ type: 'spring', duration: 0.5 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side Controls */}
        <div className="flex items-center gap-2">
          {/* Language Toggle */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
            aria-label="Toggle language"
          >
            <Globe className="w-4 h-4" />
            <span className="text-xs font-semibold uppercase">{language}</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-primary-foreground transition-all hover:opacity-90 hover:scale-105"
            style={{ background: 'var(--gradient-primary)' }}
          >
            {t.nav.getInTouch}
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-secondary"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <ul className="px-6 py-6 space-y-2">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 rounded-xl text-lg font-medium hover:bg-secondary transition-colors"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                className="pt-4"
              >
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full px-4 py-3 rounded-xl text-center font-medium text-primary-foreground"
                  style={{ background: 'var(--gradient-primary)' }}
                >
                  {t.nav.getInTouch}
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
