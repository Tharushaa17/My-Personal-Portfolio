import About from "@/components/About";
import Intro from "@/components/Intro";
import SectionDevider from "@/components/Section-Devider";


export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro/>
      <SectionDevider/>
      <About/>
    </main>
  )
}
