import HomePage from "@/components/HomePage";
import NavLinks from "@/components/NavLinks";
import Skills from "@/components/Skills/Skills";


export default function Home() {
  return (
    <div>
      <NavLinks></NavLinks>
       <section id="home">
       <HomePage></HomePage>
       </section>
       <section id="skills">
        <Skills></Skills>
       </section>
    </div>
  );
}
