import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ParcoursSection from "./components/ParcoursSection";
import SkillsSection from "./components/SkillsSection";
import LyonSection from "./components/LyonSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Motion from "./components/Motion";

export default function Home() {
  return (
    <>
      <HeroSection />
      <main>
        <ProjectsSection />
        <AboutSection />
        <ParcoursSection />
        <SkillsSection />
        <LyonSection />
        <ContactSection />
      </main>
      <Footer />
      <Motion />
    </>
  );
}
