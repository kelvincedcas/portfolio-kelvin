import { Toaster } from 'sonner';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';
import { Education } from './components/sections/Education';
import { Hero } from './components/sections/Hero';

import { lazy, Suspense } from 'react';

const Projects = lazy(() => import('./components/sections/Projects'));
const Skills = lazy(() => import('./components/sections/Skills'));

export const PortfolioKelvin = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Toaster />
      <Header />
      <main>
        <Hero />
        <About />
        <Suspense fallback={null}>
          <Skills />
        </Suspense>
        <Education />
        <Suspense fallback={null}>
          <Projects />
        </Suspense>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};
