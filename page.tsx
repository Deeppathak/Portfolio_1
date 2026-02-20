import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Education } from "@/components/education"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ParticlesCanvas } from "@/components/particles-canvas"

export default function Page() {
  return (
    <>
      <ParticlesCanvas />
      <div className="relative z-[1] mx-auto max-w-[1320px]">
        <Navbar />
        <main className="relative z-[1]">
          <Hero />
          <About />
          <Skills />
          <Education />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
