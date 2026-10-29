'use client';

import { useEffect } from "react";

// Entrées au défilement, déclenchées une seule fois
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
    return () => reveal.disconnect();
  }, []);

  return null;
}
