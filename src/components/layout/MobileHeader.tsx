import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Moon, Sun, Globe } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { useTheme } from '@/hooks/useTheme';

export const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.education, href: '#education' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.35,
        ease: 'easeOut',
        delay: 0.2,
      }}
    >
      <header
        className="
        fixed top-0 left-0 right-0 z-50
        bg-background/70
        backdrop-blur-xl
        border-b border-border/50
        py-3
      "
      >
        <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="font-display text-lg font-bold gradient-text">
            Kelvin.dev {'{ }'}
          </a>

          {/* Controls */}
          <div className="flex items-center gap-2">
            {/* Language */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
              aria-label="Toggle language"
            >
              <Globe className="w-5 h-5" />
              <span className="text-xs font-semibold uppercase w-6 text-center">
                {language}
              </span>
            </button>

            {/* Theme */}
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

            {/* Menu */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-secondary/60 hover:bg-secondary transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu (ANIMADO) */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="bg-background/95 backdrop-blur-xl border-t border-border overflow-hidden mt-3"
            >
              <ul className="px-6 py-6 space-y-2">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        setIsMenuOpen(false);
                        setTimeout(() => {
                          const target = document.querySelector(item.href);
                          if (target) {
                            target.scrollIntoView({ behavior: 'smooth' });
                          }
                        }, 80);
                      }}
                      className="block px-4 py-3 rounded-xl text-lg font-medium hover:bg-secondary transition-colors"
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}

                {/* CTA */}
                <motion.li
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.05 }}
                  className="pt-4"
                >
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMenuOpen(false);

                      setTimeout(() => {
                        document
                          .querySelector('#contact')
                          ?.scrollIntoView({ behavior: 'smooth' });
                      }, 80);
                    }}
                    className="
                    block w-full px-4 py-3 rounded-xl
                    text-center font-medium text-primary-foreground
                  "
                    style={{ background: 'var(--gradient-primary)' }}
                  >
                    {t.nav.getInTouch}
                  </a>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </motion.header>
  );
};
