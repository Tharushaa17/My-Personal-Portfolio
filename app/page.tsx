import About from "@/components/About";
import Intro from "@/components/Intro";
import SectionDevider from "@/components/Section-Devider";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Expiriance";


export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro/>
      <SectionDevider/>
      <About/>
      <Projects/>
      <Skills/>
      <Experience/>
    </main>
  )
}
