'use client'

import React from 'react';
// import './SkillSection.css'; 

export function Skills() {
  return (
    <div className="bg-[#222323] pb-4" id="skills">
      <div className="bg-[#222323] flex justify-center items-center pb-8">
        <div className="w-full max-w-[1300px] p-4 flex flex-col items-center">
        <h2 className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#C8AA6E] to-[#1D428A] font-bold italic mt-4">Languages</h2>
        <div className="flex flex-wrap justify-center mt-4 gap-2 pb-4">
            <SkillCard name="HTML" imageSrc="/images/html.png" customClass="bg-[#e1cb8a]" />
            <SkillCard name="CSS" imageSrc="/images/css.png" customClass="bg-[#e1cb8a]" />
            <SkillCard name="JavaScript" imageSrc="/images/javascript-logo.png" customClass="bg-[#e1cb8a]" />
            <SkillCard name="TypeScript" imageSrc="/images/TypeScript.png" customClass="bg-[#e1cb8a]" />
            <SkillCard name="SQL" imageSrc="/images/SQL.png" customClass="bg-[#e1cb8a]" />
            <SkillCard name="Python" imageSrc="/images/Python.png" customClass="bg-[#e1cb8a]" />
            <SkillCard name="Java" imageSrc="/images/java.png" customClass="bg-[#e1cb8a]" />
            <SkillCard name="Go" imageSrc="/images/Go.png" customClass="bg-[#e1cb8a]" />
            <SkillCard name="C" imageSrc="/images/C_Logo.png" customClass="bg-[#e1cb8a]" />
            <SkillCard name="C++" imageSrc="/images/C++.png" customClass="bg-[#e1cb8a]" />
            <SkillCard name="RISC-V" imageSrc="/images/RISCV.png" customClass="bg-[#e1cb8a]" />
          </div>

          <h2 className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#C8AA6E] to-[#1D428A] font-bold italic mt-4">Libraries/Frameworks</h2>
          <div className="flex flex-wrap justify-center mt-4 gap-2 pb-4">
            <SkillCard name="React" imageSrc="/images/React.png" customClass="bg-[#3ddae1]"  />
            <SkillCard name="NextJs" imageSrc="/images/Nextjs.png" customClass="bg-[#3ddae1]" />
            <SkillCard name="NodeJS" imageSrc="/images/nodejs.png" customClass="bg-[#3ddae1]" />
            <SkillCard name="TailwindCSS" imageSrc="/images/Tailwind.png" customClass="bg-[#3ddae1]" />
            <SkillCard name="D3" imageSrc="/images/d3.png" customClass="bg-[#3ddae1]" />
            <SkillCard name="Numpy" imageSrc="/images/Numpy.png" customClass="bg-[#3ddae1]" />
            <SkillCard name="JUnit" imageSrc="/images/JUNIT.png" customClass="bg-[#3ddae1]" />
            <SkillCard name="Swing" imageSrc="/images/JavaSwing.png" customClass="bg-[#3ddae1]" />
           




          </div>

          <h2 className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#C8AA6E] to-[#1D428A] font-bold italic mt-4">Software Programs</h2>
          <div className="flex flex-wrap justify-center mt-4 gap-2">

            <SkillCard name="Bash" imageSrc="/images/Bash.png" customClass="bg-[#4d6372]" />
            <SkillCard name="Linux" imageSrc="/images/Linux.png" customClass="bg-[#4d6372]" />
            <SkillCard name="Vercel" imageSrc="/images/Vercel.png" customClass="bg-[#4d6372]" />
            <SkillCard name="Git" imageSrc="/images/git-logo.png" customClass="bg-[#4d6372]" />
            <SkillCard name="MySQL" imageSrc="/images/MySQL.png" customClass="bg-[#4d6372]" />
            <SkillCard name="PostgreSQL" imageSrc="/images/postgres.png" customClass="bg-[#4d6372]" />
            <SkillCard name="Encore" imageSrc="/images/Encore.png" customClass="bg-[#4d6372]" />
            <SkillCard name="Baselime" imageSrc="/images/Baselime.png" customClass="bg-[#4d6372]" />
            <SkillCard name="Postman" imageSrc="/images/Postman.png" customClass="bg-[#4d6372]" />
            


          </div>
        </div>
      </div>
    </div>
  );
}

function SkillCard({ name, imageSrc, customClass, imgClass = "" }: { name: string, imageSrc: string, customClass: string, imgClass?: string }) {
  return (
    <div className={`relative flex items-center justify-center h-[70px] w-[70px] md:h-[90px] md:w-[90px] ${customClass} rounded-lg`}>
      <img src={imageSrc} alt={`${name} Logo`} className={`w-10 h-10 md:w-14 md:h-14 object-contain ${imgClass}`} />
      <div className="absolute inset-0 flex items-center justify-center backdrop-filter backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity duration-300">
        <span className="text-black font-bold text-xs md:text-sm">{name}</span>
      </div>
    </div>
  );
}