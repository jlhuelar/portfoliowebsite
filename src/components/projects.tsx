'use client';

import React from 'react';

interface ProjectCardProps {
  title: string;
  year: string;
  languages: string[];
  description: string;
  imageSrc: string;
}

function ProjectCard({ title, year, languages, description, imageSrc }: ProjectCardProps) {
  return (
    <div className="w-full lg:w-[45%] bg-[#222323] rounded-lg flex flex-col p-4 pb-4">
      {/* Title and Year above the image */}
      <h1 className="text-xl md:text-2xl font-bold italic bg-gradient-to-r from-[#C8AA6E] to-[#1D428A] bg-clip-text text-transparent mb-4 flex justify-between items-center">
        <span>{title}</span>
        <span className="text-lg text-white">{year}</span>
      </h1>

      {/* Image */}
      <div className="bg-[#222323] w-full mb-4 rounded-lg">
        <img
          src={imageSrc}
          alt={title}
          className="object-cover h-[150px] sm:h-[180px] md:h-[220px] lg:h-[270px] w-full rounded-lg"
        />
      </div>

      {/* Text Below the Image */}
      <div className="text-white mt-4">
        <p className="font-bold text-lg">Tech Stack: <span className="font-normal">{languages.join(', ')}</span></p>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  ); 
}

interface Project {
  title: string;
  year: string;
  languages: string[];
  description: string;
  imageSrc: string;
}

// Smart ProjectsGrid that maintains your exact spacing and layout
function ProjectsGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col lg:flex-row flex-wrap w-full justify-between gap-y-24">
      {children}
    </div>
  );
}

export function Projects() {
  const projects: Project[] = [
    {
      title: "Commandle",
      year: "2025",
      languages: ['Next.JS, Typescript, Neon PostgreSQL, Drizzle ORM, Cloudflare R2, AWS'],
      description: "Developed a Linux-themed daily puzzle game inspired by Wordle where users complete terminal based challenges using real Linux commands, with scoring based on golf-style \"par\" system.",
      imageSrc: "/images/Commandle.png"
    },
    {
      title: "NFL Spread Predictor",
      year: "2025",
      languages: ['Python, Pandas, Scikit-Learn'],
      description: "Developed an NFL spread predictor using XGBoost and Random Forest with feature importance analysis, achieving 65% balanced accuracy against Vegas lines on 2024 validation data.",
      imageSrc: "/images/NFLSpreadPredictor.png"
    },
    {
      title: "BrokeNoMo",
      year: "2025",
      languages: ['Next.JS, Python, Flask'],
      description: "For a school project about software architecture in a team of 6, created microservices finance app for beginner investors. Features include through real-time stock prices, trending news, and, historical market charts through the use of Flask API calls and personalized AI financial advisor chatbot through Google Gemini 2.0 LLM.",
      imageSrc: "/images/BrokeNoMo.png"
    },
    {
      title: "Nullus",
      year: "2025",
      languages: ['Next.JS, Typescript'],
      description: "Company website that I co-founded with friends as a student-led software web development team for individuals, clubs, and businesses.",
      imageSrc: "/images/NullusWebsite.png"
    },
    // Add more projects here
  ];

  return (
    <div className="bg-[#121212]" id="projects">
      <div className="mx-auto max-w-[1300px] h-auto p-4 flex flex-col justify-center items-center">
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              year={project.year}
              languages={project.languages}
              description={project.description}
              imageSrc={project.imageSrc}
            />
          ))}
        </ProjectsGrid>
      </div>
    </div>
  );
}