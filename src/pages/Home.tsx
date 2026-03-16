import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Headshots } from "@/components/Headshots";
import { Showreel } from "@/components/Showreel";
import { About } from "@/components/About";
import { Credits } from "@/components/Credits";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background w-full overflow-x-hidden">
      <Navigation />
      <Hero />
      <Headshots />
      <Showreel />
      <About />
      <Credits />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
