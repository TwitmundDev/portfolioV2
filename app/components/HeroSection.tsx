'use client';

import { useEffect, useRef } from "react";
import ServerConsole from "./ServerConsole";
import ThemeToggle from "./ThemeToggle";
import { ConfigFragment, JavaFragment } from "./CodeFragments";

const captions = [
  "Connectez un joueur : le plugin décide en direct.",
  "Le vrai code qui prend la décision.",
  "La configuration que règlent les admins de serveur.",
];

export default function HeroSection() {
  const stageRef = useRef<HTMLElement>(null);
  const reelRef = useRef<HTMLDivElement>(null);
  const captionRef = useRef<HTMLParagraphElement>(null);

  // La bande de fragments avance d'un cran par écran de défilement, la phrase reste en place
  useEffect(() => {
    const stage = stageRef.current;
    const reel = reelRef.current;
    if (!stage || !reel) return;
    const wide = window.matchMedia("(min-width: 900px)");
    let frame = 0;
    const update = () => {
      frame = 0;
      if (!wide.matches) {
        reel.style.transform = "";
        return;
      }
      const r = stage.getBoundingClientRect();
      const travel = stage.offsetHeight - window.innerHeight;
      const p = Math.min(1, Math.max(0, -r.top / travel));
      const step = Math.min(2, Math.round(p * 2));
      const first = reel.children[0] as HTMLElement;
      const pitch = first.offsetHeight + 24;
      reel.style.transform = `translateY(${-step * pitch}px)`;
      Array.from(reel.children).forEach((c, i) => c.classList.toggle("is-current", i === step));
      if (captionRef.current) captionRef.current.textContent = captions[step];
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header className="hero" ref={stageRef} id="top">
      <div className="hero-stage">
        <div className="hero-bar">
          <a href="#top" className="wordmark">Ellwane Romdhame</a>
          <nav aria-label="Navigation principale">
            <a href="#projets" className="link">Projets</a>
            <a href="#histoire" className="link hide-phone">Histoire</a>
            <a href="#parcours" className="link hide-phone">Parcours</a>
            <ThemeToggle />
            <a href="#contact" className="btn btn-small">Me contacter</a>
          </nav>
        </div>

        <h1 className="hero-title">
          <span className="half left" data-rise style={{ ["--i" as string]: 0 }}>Du plugin Minecraft</span>
          <span className="half right" data-rise style={{ ["--i" as string]: 1 }}>à l&apos;API Java</span>
        </h1>

        <div className="hero-window">
          <div className="reel" ref={reelRef}>
            <div className="frame is-current"><ServerConsole /></div>
            <div className="frame"><JavaFragment /></div>
            <div className="frame"><ConfigFragment /></div>
          </div>
        </div>

        <div className="hero-foot" data-fade>
          <p>
            Développeur Java et Vue.js. J&apos;ai appris en codant des plugins et des mods Minecraft ; aujourd&apos;hui je construis des API, des outils métier et des applications web.
          </p>
          <p className="caption" ref={captionRef} aria-live="polite">{captions[0]}</p>
        </div>
      </div>
    </header>
  );
}
