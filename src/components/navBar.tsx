'use client'

import { useEffect, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`sticky top-0 z-[999] h-20 flex justify-center items-center transition-all duration-300 ${isScrolled ? "bg-white/90 dark:bg-[#131313] shadow-lg backdrop-blur-sm backdrop-opacity-15 rounded-xl w-2/3 mx-auto top-5 bg-opacity-40" : "backdrop-blur-sm"}`}>
      <div className="flex justify-between items-center w-full max-w-[1300px] mx-auto px-6 md:px-12">
        <a href="/" id="navbar__logo" className="text-[24px] sm:text-[28px] md:text-[32px] text-gray-900 dark:text-white flex items-center cursor-pointer">
          <i className="fas fa-gem mr-2"></i>JH
        </a>
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            {theme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.166 17.834a.75.75 0 00-1.06 1.06l1.59 1.591a.75.75 0 001.061-1.06l-1.59-1.591zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.166 7.106a.75.75 0 001.06-1.06L5.635 4.455a.75.75 0 10-1.06 1.06l1.59 1.591z"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd"/>
              </svg>
            )}
          </button>
          <div id="mobile-menu" onClick={toggleMenu} className="flex flex-col justify-between h-5 cursor-pointer">
            <span className={`block w-6 h-[2px] bg-gray-900 dark:bg-white transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-[2px] bg-gray-900 dark:bg-white transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-[2px] bg-gray-900 dark:bg-white transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </div>
        <ul className={`flex-col items-center list-none text-center absolute top-20 left-0 w-full bg-white dark:bg-[#131313] md:static md:flex md:flex-row md:bg-transparent md:dark:bg-transparent md:w-auto transition-all duration-300 ease-in-out ${isMenuOpen ? 'flex' : 'hidden'}`}>
          <li className="h-20">
            <a href="#aboutpage" className="text-gray-900 dark:text-white flex items-center justify-center px-2 sm:px-4 h-full hover:text-[#f77062] dark:hover:text-[#f77062] transition-all duration-300">About</a>
          </li>
          <li className="h-20">
            <a href="#skills" className="text-gray-900 dark:text-white flex items-center justify-center px-2 sm:px-4 h-full hover:text-[#f77062] dark:hover:text-[#f77062] transition-all duration-300">Skills</a>
          </li>
          <li className="h-20">
            <a href="#projects" className="text-gray-900 dark:text-white flex items-center justify-center px-2 sm:px-4 h-full hover:text-[#f77062] dark:hover:text-[#f77062] transition-all duration-300">Projects</a>
          </li>
          <li className="h-20">
            <a href="#contact" className="text-gray-900 dark:text-white flex items-center justify-center px-2 sm:px-4 h-full hover:text-[#f77062] dark:hover:text-[#f77062] transition-all duration-300">Contact</a>
          </li>
          <li className="h-20">
            <a href="/Resume.pdf" className="text-gray-900 dark:text-white flex items-center justify-center px-2 sm:px-4 h-full hover:text-[#f77062] dark:hover:text-[#f77062] transition-all duration-300" target='_blank' rel='noopener noreferrer'>CV</a>
          </li>
          <li className="h-20 hidden md:flex items-center pl-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-full text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              {theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.166 17.834a.75.75 0 00-1.06 1.06l1.59 1.591a.75.75 0 001.061-1.06l-1.59-1.591zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.166 7.106a.75.75 0 001.06-1.06L5.635 4.455a.75.75 0 10-1.06 1.06l1.59 1.591z"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd"/>
                </svg>
              )}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
