'use client';

import { useRef, useState } from "react";
import { career } from "../data";

export default function ParcoursSection() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  // Flèches du clavier entre les onglets, comme un vrai tablist
  const onKey = (e: React.KeyboardEvent, i: number) => {
    const delta = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : e.key === "ArrowUp" || e.key === "ArrowLeft" ? -1 : 0;
    if (!delta) return;
    e.preventDefault();
    const next = (i + delta + career.length) % career.length;
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <section id="parcours" className="career" aria-labelledby="parcours-title">
      <div className="career-head" data-reveal>
        <h2 id="parcours-title" className="section-title">
          <span className="muted">Parcours,</span>
          <br />
          du stage à aujourd&apos;hui
        </h2>
        <a href="#contact" className="btn">Me contacter</a>
      </div>

      <div className="career-body">
        <div className="tabs" role="tablist" aria-label="Parcours" aria-orientation="vertical">
          {career.map((c, i) => (
            <button
              key={c.tab}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              role="tab"
              id={`tab-${i}`}
              aria-selected={i === active}
              aria-controls={`panel-${i}`}
              tabIndex={i === active ? 0 : -1}
              className={i === active ? "tab is-active" : "tab"}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKey(e, i)}
            >
              <span className="tab-name">{c.tab}</span>
              <span className="tab-count">{c.rows.length} lignes</span>
            </button>
          ))}
        </div>

        {career.map((c, i) => (
          <ul
            key={c.tab}
            role="tabpanel"
            id={`panel-${i}`}
            aria-labelledby={`tab-${i}`}
            hidden={i !== active}
            className="bands"
          >
            {c.rows.map((r) => (
              <li key={r.what} className="band-row">
                <span className="b-when">{r.when}</span>
                <span className="b-what">
                  {r.what}
                  <span className="b-note">{r.note}</span>
                </span>
                <span className="b-kind">{r.kind}</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
