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
    <main className="min-h-screen">
      <NavLinks />
      <HomePage />
      <AboutMe />
      <Skills />
      <Education />
      <Certificates />
      <Projects />
      <Voluenteer />
      <GetInTouch />
      <Footer />
    </main>
  );
}
