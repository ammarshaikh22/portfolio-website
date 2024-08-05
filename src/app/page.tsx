import Banner from "@/components/Banner";
import AboutMe from "@/components/AboutMe";
import Resume from "@/components/Resume";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Project from "@/components/Project";
import Freelancing from "@/components/Freelancing"
import Contact from "@/components/Contact";
export default function Home() {
  return (
    <main>
      <Banner />
      <AboutMe />
      <Resume />
      <Services />
      <Skills />
      <Project />
      <Freelancing />
      <Contact />
    </main>
  );
}
