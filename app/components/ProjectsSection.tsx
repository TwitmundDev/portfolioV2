'use client';

/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";
import { featured, others } from "../data";

export default function ProjectsSection() {
  const [current, setCurrent] = useState(0);
  const pinRef = useRef<HTMLDivElement>(null);

  // Chaque projet occupe une tranche du défilement ; la tranche courante choisit l'image
  useEffect(() => {
    const pin = pinRef.current;
    if (!pin) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const r = pin.getBoundingClientRect();
      const travel = pin.offsetHeight - window.innerHeight;
      const p = Math.min(0.999, Math.max(0, -r.top / travel));
      setCurrent(Math.floor(p * featured.length));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  const p = featured[current];

  return (
    <section id="projets" className="work" aria-labelledby="projets-title">
      <div className="work-pin" ref={pinRef}>
        <div className="work-stage">
          <div className="work-left">
            <h2 id="projets-title" className="work-title">
              Ce que
              <br />
              j&apos;ai construit
            </h2>
            <div className="work-current" aria-live="polite">
              <p>{p.summary}</p>
              <p className="muted">{p.facts}</p>
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="link">
                {p.linkLabel} <span aria-hidden="true">↗</span>
              </a>
            </div>
            <ol className="work-index">
              {featured.map((proj, i) => (
                <li key={proj.name} className={i === current ? "is-current" : ""}>
                  <a href={proj.link} target="_blank" rel="noopener noreferrer">
                    <span className="name">{proj.name}</span>
                    <span className="disc">{proj.disciplines}</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
          <div className="work-picture">
            {featured.map((proj, i) => (
              <figure
                key={proj.name}
                className={i === current ? "shot is-current" : i < current ? "shot is-past" : "shot"}
                aria-hidden={i !== current}
              >
                <div className="shot-bar">
                  <span className="dots" aria-hidden="true"><i /><i /><i /></span>
                  <span className="shot-url">{proj.shot.url}</span>
                </div>
                <img
                  src={proj.shot.src}
                  alt={proj.shot.alt}
                  width={2400}
                  height={1600}
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding="async"
                  className={proj.shot.native ? "native" : undefined}
                  style={{
                    objectPosition: proj.shot.position,
                    ["--nat" as string]: proj.shot.native ? `${proj.shot.native}px` : undefined,
                    ["--off" as string]: `${-(proj.shot.offset ?? 0)}px`,
                  }}
                />
              </figure>
            ))}
          </div>
        </div>
      </div>

      <div className="work-phone">
        {featured.map((proj) => (
          <article key={proj.name} className="phone-project" data-reveal>
            <figure className="shot">
              <div className="shot-bar">
                <span className="dots" aria-hidden="true"><i /><i /><i /></span>
                <span className="shot-url">{proj.shot.url}</span>
              </div>
              <img src={proj.shot.src} alt={proj.shot.alt} width={2400} height={1600} loading="lazy" decoding="async" style={{ objectPosition: proj.shot.position }} />
            </figure>
            <h3>{proj.name}</h3>
            <p className="muted">{proj.disciplines}</p>
            <p>{proj.summary}</p>
            <p className="muted">{proj.facts}</p>
            <a href={proj.link} target="_blank" rel="noopener noreferrer" className="link">
              {proj.linkLabel} <span aria-hidden="true">↗</span>
            </a>
          </article>
        ))}
      </div>

      <div className="others">
        <h3 className="others-title" data-reveal>Et aussi</h3>
        <ul>
          {others.map((o, i) => (
            <li key={o.name} data-reveal style={{ ["--d" as string]: i % 4 }}>
              <span className="o-year">{o.year}</span>
              <span className="o-name">
                {o.link ? (
                  <a href={o.link} target="_blank" rel="noopener noreferrer" className="link">{o.name}</a>
                ) : (
                  o.name
                )}
              </span>
              <span className="o-what">{o.what}</span>
              <span className="o-stack">{o.stack}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
