import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useRef, useMemo } from 'react';
import { Menu, X, Moon, Sun, Globe } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useTheme } from '@/hooks/useTheme';

export const DesktopHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const navItems = useMemo(
    () => [
      { label: t.nav.about, href: '#about' },
      { label: t.nav.skills, href: '#skills' },
      { label: t.nav.education, href: '#education' },
      { label: t.nav.projects, href: '#projects' },
      { label: t.nav.contact, href: '#contact' },
    ],
    [t],
  );

  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const compute = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.href.substring(1));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= 150) {
          setActiveSection(section);
          break;
        }
      }
    };

    const onScroll = () => {
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        compute();
      });
    };

    compute();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [navItems]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${
          isScrolled
            ? 'bg-background/70 backdrop-blur-xl border-b border-border/50 py-3'
            : 'bg-transparent py-5'
        }
      `}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="relative group">
          <span className="font-display text-lg font-bold gradient-text">
            Kelvin.dev {'{ }'}
          </span>
          <span
            className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
            style={{ background: 'var(--gradient-primary)' }}
          />
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const active = activeSection === item.href.substring(1);
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors
                    ${
                      active
                        ? 'text-primary'
                        : 'text-muted-foreground hover:text-foreground'
                    }
                  `}
                >
                  {item.label}
                  {active && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                      transition={{ type: 'spring', duration: 0.5 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
            className="
    flex items-center gap-1.5
    px-3 py-2
    rounded-xl
    bg-secondary/50
    hover:bg-secondary
    transition-colors
  "
            aria-label="Toggle language"
          >
            <Globe className="w-4 h-4" />
            <span className="text-xs font-semibold uppercase w-6 text-center">
              {language}
            </span>
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-secondary/50"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-primary-foreground transition-all duration-300 hover:opacity-90 hover:scale-105"
            style={{ background: 'var(--gradient-primary)' }}
          >
            {t.nav.getInTouch}
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-xl bg-secondary"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown (solo desktop width pequeña) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <ul className="px-6 py-6 space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 rounded-xl hover:bg-secondary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
