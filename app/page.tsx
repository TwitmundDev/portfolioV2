import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import ParcoursSection from "./components/ParcoursSection";
import SkillsSection from "./components/SkillsSection";
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
        <ContactSection />
      </main>
      <Footer />
      <Motion />
    </>
  );
}
