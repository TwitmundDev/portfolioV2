'use client';

import { useEffect } from "react";

// Entrées au défilement (une seule fois) et légère dérive des portraits
export default function Motion() {
  useEffect(() => {
    const reveal = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            reveal.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px 10% 0px" }
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => reveal.observe(el));

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // La vidéo reste sur son image d'affiche
      document.querySelectorAll("video").forEach((v) => v.pause());
      return () => reveal.disconnect();
    }

    const drift = Array.from(document.querySelectorAll<HTMLElement>("[data-drift]"));
    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      for (const el of drift) {
        const r = el.getBoundingClientRect();
        if (r.bottom < 0 || r.top > vh) continue;
        const progress = (r.top + r.height / 2 - vh / 2) / vh;
        el.style.transform = `scale(1.12) translateY(${(progress * -6).toFixed(2)}%)`;
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      reveal.disconnect();
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
