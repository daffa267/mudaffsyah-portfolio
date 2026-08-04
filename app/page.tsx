import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import EduAndExp from "@/components/EduandEXP";
import Footer from "@/components/Footer"; 
import NeuronBG from "@/components/NeuronBG";

export default function Home() {
  return (
    <main className="min-h-screen relative z-0 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
      
      <NeuronBG />
      <div className="relative z-10">
        <Navbar />
        
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 space-y-32 pb-32">
          <section id="home" className="pt-12 md:pt-16 scroll-mt-32">
            <Hero />
          </section>

          <section id="about" className="scroll-mt-24">
            <About />
          </section>

          <section id="education" className="scroll-mt-24">
            <EduAndExp />
          </section>

          <section id="skills" className="scroll-mt-24">
            <Skills />
          </section>

          <section id="projects" className="scroll-mt-24">
            <Projects />
          </section>
        </div>
        
        <Footer />
      </div>
    </main>
  );
}