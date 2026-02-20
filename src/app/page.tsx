import Navbar from '@/components/layout/Navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';
import Hero from '@/components/sections/Hero/Hero';
import About from '@/components/sections/About/About';
import Skills from '@/components/sections/Skills/Skills';
import Work from '@/components/sections/Work/Work';
import Contact from '@/components/sections/Contact/Contact';
import GradientGlow from '@/components/background/GradientGlow';

export default function Home() {
  return (
    <>
      <GradientGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
