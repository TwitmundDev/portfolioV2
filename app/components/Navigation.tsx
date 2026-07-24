'use client';

import type { MouseEvent } from 'react';

export default function Navigation() {
  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    if (!href?.startsWith('#')) return;

    const id = href.substring(1);
    const section = document.getElementById(id);
    if (!section) return;

    section.classList.remove('nav-click-animate');
    void section.offsetWidth;
    section.classList.add('nav-click-animate');
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="#home" onClick={handleNavClick} className="text-xl font-bold text-gray-900 dark:text-white">
              Romdhame Ellwane
            </a>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" onClick={handleNavClick} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              À propos
            </a>
            <a href="#parcours" onClick={handleNavClick} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Parcours
            </a>
            <a href="#certifications" onClick={handleNavClick} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Certifications
            </a>
            <a href="#skills" onClick={handleNavClick} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Compétences
            </a>
            <a href="#projects" onClick={handleNavClick} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Projets
            </a>
            <a href="#contact" onClick={handleNavClick} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}