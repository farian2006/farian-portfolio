import AboutMe from "@/components/AboutMe/AboutMe";
import HomePage from "@/components/HomePage";
import NavLinks from "@/components/NavLinks";
import Skills from "@/components/Skills/Skills";
import Education from "@/components/Education/Education";
import Certificates from "@/components/Certificates/Certificates";
import Projects from "@/components/Projects/Projects";
import Voluenteer from "@/components/Voluenteer/Voluenteer";
import GetInTouch from "@/components/GetInTouch/GetInTouch";
import Footer from "@/components/Footer/Footer";


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
       <section id="certificates">
        <Certificates></Certificates>
       </section>
       <section id="projects">
        <Projects></Projects>
       </section>
       <section id="voluenteer">
        <Voluenteer></Voluenteer>
       </section>
       <section id="getintouch">
        <GetInTouch></GetInTouch>
       </section>
       <Footer></Footer>
    </div>
  );
}
