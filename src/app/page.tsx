import {NavBar} from "@/components/navBar";
import {Description} from "@/components/description";
import {Skills} from "@/components/skills";
import {Projects} from "@/components/projects";
import {Footer} from "@/components/footer";
import {ProjectsTitle} from "@/components/projectsTitle";
import {SkillsTitle} from "@/components/skillsTitle";
import {DescriptionTitle} from "@/components/descriptionTitle";

export default function Home() {
  return (
    <div>
      <NavBar/>
      <DescriptionTitle/>
      <Description/>
      <SkillsTitle/>
      <Skills/>
      <ProjectsTitle/>
      <Projects/>
      <Footer/>
      
    </div>
  );
}