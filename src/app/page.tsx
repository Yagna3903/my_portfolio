import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Certification } from "@/components/Certification";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certification />
      <Contact />
      <Footer />
      {/* Other sections will be added here */}
    </main>
  );
}
