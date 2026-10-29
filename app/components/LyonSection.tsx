'use client';

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import PunchCard from "./PunchCard";

export default function LyonSection() {
  const [word, setWord] = useState("Ellwane");

  return (
    <section id="lyon" className="lyon" aria-labelledby="lyon-title">
      <h2 id="lyon-title" className="section-head" data-reveal>
        Basé à Lyon
      </h2>

      <div className="band">
        <figure>
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/metier-a-tisser-jacquard-01-poster.jpg"
            width={854}
            height={480}
            aria-hidden="true"
          >
            <source src="/images/metier-a-tisser-jacquard-01.webm" type="video/webm" />
          </video>
          <figcaption className="band-title">
            Un métier Jacquard
            <br />
            en marche
          </figcaption>
        </figure>
        <figure>
          <img src="/images/traboule-de-lyon-026.jpg" alt="Une traboule du Vieux Lyon, passage voûté vers la lumière" width={1200} height={1600} loading="lazy" decoding="async" />
        </figure>
        <figure>
          <img src="/images/un-bus-tcl-grande-rue-de-la.jpg" alt="La Grande Rue de la Croix-Rousse, quartier des canuts, avec un bus TCL" width={1920} height={1824} loading="lazy" decoding="async" />
        </figure>
        <figure>
          <img src="/images/longue-traboule-lyon-9.jpg" alt="La longue traboule du Vieux Lyon, couloir voûté éclairé" width={1920} height={1280} loading="lazy" decoding="async" />
        </figure>
      </div>
      <div className="caption">
        <p data-reveal>
          Disponible sur place à Lyon et alentours, ou en télétravail. Du Vieux Lyon à la Croix-Rousse, la colline des canuts qui tissaient la soie sur ces métiers.
        </p>
      </div>

      <div className="punch">
        <div className="punch-copy" data-reveal>
          <h3>Votre nom, perforé comme en 1804</h3>
          <p>
            Chaque colonne est une lettre, chaque trou un bit de son code. C&apos;est ainsi que le métier Jacquard lisait ses motifs.
          </p>
          <label htmlFor="punch-word">Votre mot</label>
          <input
            id="punch-word"
            value={word}
            maxLength={16}
            onChange={(e) => setWord(e.target.value)}
            autoComplete="off"
            spellCheck={false}
            aria-describedby="punch-hint"
          />
          <p id="punch-hint" className="hint">16 caractères au plus.</p>
        </div>
        <div className="punch-card" data-reveal style={{ ["--d" as string]: 2 }}>
          <PunchCard text={word || " "} minColumns={16} />
        </div>
      </div>
    </section>
  );
}
