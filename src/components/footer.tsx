'use client';

import React from 'react';

export function Footer() {
  return (
    <div className="bg-[#121212]" id="contact">
      <div className="py-6 pt-24">
        <div className="flex items-center justify-center">
          <h1 className="mx-4 text-xl font-semibold text-center text-white md:text-xl">
            Jericho Huelar
          </h1>
        </div>
        <div className="mt-4 flex justify-center space-x-6 text-white">
          <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 pr-4">
            CV
          </a>
          <a href="www.linkedin.com/in/jericho-huelar" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 pr-4">
            LinkedIn
          </a>
          <a href="https://github.com/jlhuelar" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 pr-4">
            GitHub
          </a>
          <a href="mailto:jllhuelar@outlook.com" className="hover:text-gray-400">
            Email
          </a>
        </div>
      </div>
    </div>
  );
}