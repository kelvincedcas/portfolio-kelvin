import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, Moon, Sun, Globe } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useTheme } from '@/hooks/useTheme';
import type { Variants } from 'motion/react';

const mobileMenuVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -12,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.25,
      ease: 'easeOut',
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    scale: 0.98,
    transition: { duration: 0.2 },
  },
};

const mobileItem: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.25 } },
};

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const rafRef = useRef<number | null>(null);

  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.education, href: '#education' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.contact, href: '#contact' },
  ];

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current) return;

      rafRef.current = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 40);

        for (const item of navItems) {
          const section = document.getElementById(item.href.slice(1));
          if (!section) continue;
          const top = section.getBoundingClientRect().top;
          if (top <= 160) {
            setActiveSection(item.href.slice(1));
            break;
          }
        }

        rafRef.current = null;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [navItems]);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 ${
        isScrolled
          ? 'bg-background/70 backdrop-blur-xl border-b border-border/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-display text-2xl font-bold gradient-text">
          Kelvin.dev {'{ }'}
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-full ${
                  activeSection === item.href.slice(1)
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                    transition={{ type: 'spring', bounce: 0.2 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
            className="px-3 py-2 rounded-xl bg-secondary/50"
          >
            <Globe className="w-4 h-4" />
          </button>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-secondary/50"
          >
            {theme === 'dark' ? <Sun /> : <Moon />}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-secondary"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-full left-0 right-0 md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <ul className="px-6 py-6 space-y-2">
              {navItems.map((item) => (
                <motion.li key={item.label} variants={mobileItem}>
                  <a
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 rounded-xl text-lg font-medium hover:bg-secondary"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}

              <motion.li variants={mobileItem} className="pt-4">
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
