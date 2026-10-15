import AboutMe from "@/components/AboutMe/AboutMe";
import HomePage from "@/components/HomePage";
import NavLinks from "@/components/NavLinks";
import Skills from "@/components/Skills/Skills";
import Education from "@/components/Education/Education";


export default function Home() {
  return (
    <div>
      <NavLinks></NavLinks>
       <section id="home">
       <HomePage></HomePage>
       </section>
        <section id="abourMe">
        <AboutMe></AboutMe>
       </section>
       <section id="skills">
        <Skills></Skills>
       </section>
       <section id="education">
        <Education></Education>
       </section>
    </div>
  );
}
