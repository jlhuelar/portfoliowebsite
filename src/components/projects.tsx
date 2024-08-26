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
    <div className="w-full lg:w-[45%] mb-8 lg:mb-0 bg-[#222323]">
      <div className="bg-[#222323] rounded-lg flex flex-col p-4 pb-4">
        {/* Title and Year above the image */}
        <h1 className="text-xl md:text-2xl font-bold italic bg-gradient-to-r from-[#C8AA6E] to-[#1D428A] bg-clip-text text-transparent mb-2">
          {title} <span className="text-lg text-white">{year}</span>
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
          <p className="font-bold text-lg">Languages Used: <span className="font-normal">{languages.join(', ')}</span></p>
          <p className="italic mt-2">{description}</p>
        </div>
      </div>
    </div>
  ); 
}

export function Projects() {
  return (
    <div className="bg-[#222323]" id="projects" >
      <div className="mx-auto max-w-[1300px] h-auto p-4 flex flex-col justify-center items-center">
        {/* First Row of Projects */}
        <div className="flex flex-col lg:flex-row w-full justify-between space-y-8 lg:space-y-0 lg:space-x-8">
          <ProjectCard 
            title="Flight Management Program"
            year="2024"
            languages={['C++']}
            description="In a team of 3, created a flight management program that manages and tracks the information of indivduals on an airplane. The information provided includes their names, seat number and letter which can be changed."
            imageSrc="/images/flightmangement.jpg"
          />
          <ProjectCard 
            title="Disaster Relief Program"
            year="2024"
            languages={['Java, SQL']}
            description="Created a Disaster relief system where information about individuals is tracked following natural disasters."
            imageSrc="/images/disasterrelief.png"
          />
        </div>
        
        <div className="my-8"></div> 

        {/* Second Row of Projects */}
        <div className="flex flex-col lg:flex-row w-full justify-between space-y-8 lg:space-y-0 lg:space-x-8">
          <ProjectCard 
            title="E-commerce Website"
            year="2024"
            languages={['HTML','CSS','Javascript', 'React', 'Python']}
            description="Developed a dynamic and interactive E-commerce Website where users can engage through the listed products."
            imageSrc="/images/ecommercewebsite.png"
          />
          <ProjectCard 
            title="WSBenchMarks - In Progress"
            year="2024"
            languages={['D3.js', 'Encore', 'Go', 'NextJS', 'PostgreSQL', 'React', 'TypeScript', 'TailwindCSS']}
            description="In Nullus Inc, we are in the process of creating a NextJS web-app with the goal of helping users access their investment performance. By comparing their stock performances to others in the market."
            imageSrc="/images/WIP.jpg"
          />
        </div>
      </div>
    </div>
  );
}