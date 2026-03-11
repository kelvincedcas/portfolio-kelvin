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

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="
      fixed top-0 left-0 right-0
      z-50
      bg-background/80
      backdrop-blur-md
      border-b border-border/50
      will-change-transform
      "
    >
      {/* top bar */}
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#" className="font-display text-lg font-bold gradient-text">
          Kelvin.dev {'{ }'}
        </a>

        <div className="flex items-center gap-2">
          {/* language */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
            className="flex items-center gap-1 px-3 py-2 rounded-xl bg-secondary/60 hover:bg-secondary transition-colors"
          >
            <Globe className="w-5 h-5" />
            <span className="text-xs font-semibold uppercase">{language}</span>
          </button>

          {/* theme */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-secondary/60 hover:bg-secondary transition-colors"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          {/* menu button */}
          <button
            onClick={toggleMenu}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-secondary/60 hover:bg-secondary transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="
            border-t border-border
            bg-background/95
            backdrop-blur-md
            "
          >
            <ul className="px-6 py-6 space-y-2">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="
                    block px-4 py-3
                    rounded-xl
                    text-lg font-medium
                    hover:bg-secondary
                    transition-colors
                    "
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}

              <motion.li
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                className="pt-4"
              >
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="
                  block w-full
                  text-center
                  px-4 py-3
                  rounded-xl
                  font-medium
                  text-primary-foreground
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
    </motion.header>
  );
};
