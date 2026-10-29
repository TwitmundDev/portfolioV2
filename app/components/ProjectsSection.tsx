'use client';

/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";
import { projects } from "../data";
import PunchCard from "./PunchCard";

export default function ProjectsSection() {
  const [current, setCurrent] = useState(0);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const items = listRef.current?.querySelectorAll<HTMLElement>("[data-index]");
    if (!items) return;
    // Le projet courant est celui qui croise le milieu de l'écran
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setCurrent(Number((e.target as HTMLElement).dataset.index));
        }
      },
      { rootMargin: "-49% 0px -49% 0px" }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const p = projects[current];

  return (
    <section id="projects" className="work" aria-labelledby="projects-title">
      <div className="work-stage" aria-hidden="true">
        <div className="work-fact">
          <p className="kind">{p.title}</p>
          <p className="muted">{p.kind}, {p.year}</p>
          <p>{p.description}</p>
        </div>
        <div className="work-frame">
          {projects.map((proj, i) =>
            proj.picture ? (
              <img
                key={proj.name}
                src={proj.picture.src}
                alt=""
                width={1200}
                height={1200}
                loading="lazy"
                decoding="async"
                className={i === current ? "is-current" : ""}
              />
            ) : (
              <div key={proj.name} className={i === current ? "is-current" : ""} style={{ display: "grid", placeItems: "center", padding: "12%" }}>
                <PunchCard text={proj.name} minColumns={8} label="" />
              </div>
            )
          )}
        </div>
        <div className="work-fact right">
          <p className="muted">{p.stack}</p>
          {p.link && <p>{new URL(p.link).hostname.replace("www.", "")} ↗</p>}
        </div>
      </div>

      <ul className="work-list display" ref={listRef}>
        <li className="heading-line">
          <h2 id="projects-title" style={{ font: "inherit" }}>Projets</h2>
        </li>
        {projects.map((proj, i) => (
          <li key={proj.name} data-index={i} className={i === current ? "is-current" : ""}>
            {proj.link ? (
              <a href={proj.link} target="_blank" rel="noopener noreferrer" aria-label={`${proj.title}, ${proj.description}`}>
                {proj.name}
              </a>
            ) : (
              <span className="name" aria-label={`${proj.title}, ${proj.description}`}>{proj.name}</span>
            )}
            <p className="phone-desc" aria-hidden="true">
              <strong>{proj.title}</strong> · {proj.kind}, {proj.year}. {proj.description}
            </p>
          </li>
        ))}
      </ul>
      <div className="work-end" aria-hidden="true" />

      <div className="sr-only">
        <h3>Détail des projets</h3>
        <ul>
          {projects.map((proj) => (
            <li key={proj.name}>
              {proj.title} ({proj.kind}, {proj.year}) : {proj.description} Technologies : {proj.stack}.
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
