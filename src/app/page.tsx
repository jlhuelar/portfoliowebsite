import {NavBar} from "@/components/navBar";
import {Description} from "@/components/description";
import {Skills} from "@/components/skills";
import {Projects} from "@/components/projects";
import {Footer} from "@/components/footer";
import {ProjectsTitle} from "@/components/projectsTitle";
import {SkillsTitle} from "@/components/skillsTitle";

export default function Home() {
  return (
    <div className="bg-[#121212]">
      <NavBar/>
      <Description/>
      <div className="overflow-auto overflow-x-hidden container mx-auto flex-1 p-10">
        <SkillsTitle/>
        <Skills/>
        <ProjectsTitle/>
        <Projects/>
        <Footer/>
      </div>
    </div>
  );
}