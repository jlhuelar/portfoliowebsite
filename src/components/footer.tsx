'use client';

import React from 'react';

export function Footer() {
  return (
    <div className="bg-base" id="contact">
      <div className="pt-24">
        <div className="flex items-center justify-center">
          <h1 className="mx-4 text-xl font-semibold text-center text-primary md:text-xl">
            Jericho Huelar
          </h1>
        </div>
        <div className="mt-4 flex flex-col items-center space-y-3">
          <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="w-64 flex items-center gap-3 px-6 py-3 rounded-full bg-primary text-[rgb(var(--color-base))] hover:bg-secondary transition-colors duration-200">
            <img src="/images/cv.png" alt="CV" className="h-6 w-6 object-contain flex-shrink-0" />
            <div className="flex flex-col text-left">
              <span className="font-semibold text-sm leading-tight">CV</span>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/jericho-huelar" target="_blank" rel="noopener noreferrer" className="w-64 flex items-center gap-3 px-6 py-3 rounded-full bg-primary text-[rgb(var(--color-base))] hover:bg-secondary transition-colors duration-200">
            <img src="/images/LinkedIn.png" alt="LinkedIn" className="h-6 w-6 object-contain flex-shrink-0 scale-125" />
            <div className="flex flex-col text-left">
              <span className="font-semibold text-sm leading-tight">LinkedIn</span>
              <span className="text-xs opacity-75 leading-tight">jericho-huelar</span>
            </div>
          </a>
          <a href="https://github.com/jlhuelar" target="_blank" rel="noopener noreferrer" className="w-64 flex items-center gap-3 px-6 py-3 rounded-full bg-primary text-[rgb(var(--color-base))] hover:bg-secondary transition-colors duration-200">
            <img src="/images/github.png" alt="GitHub" className="h-6 w-6 object-contain flex-shrink-0" />
            <div className="flex flex-col text-left">
              <span className="font-semibold text-sm leading-tight">GitHub</span>
              <span className="text-xs opacity-75 leading-tight">jlhuelar</span>
            </div>
          </a>
          <a href="mailto:jlhuelar@outlook.com" className="w-64 flex items-center gap-3 px-6 py-3 rounded-full bg-primary text-[rgb(var(--color-base))] hover:bg-secondary transition-colors duration-200">
            <img src="/images/email.png" alt="Email" className="h-6 w-6 object-contain flex-shrink-0" />
            <div className="flex flex-col text-left">
              <span className="font-semibold text-sm leading-tight">Email</span>
              <span className="text-xs opacity-75 leading-tight">jlhuelar@outlook.com</span>
            </div>
          </a>
        </div>
        <div className="mt-6 pb-4 text-center text-sm text-muted">
          © 2026 Jericho Huelar · Software Engineer · All Rights Reserved
        </div>
      </div>
    </div>
  );
}
