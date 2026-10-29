/* eslint-disable @next/next/no-img-element */
import { skills } from "../data";

function Slot({ src, position, alt, zoom }: { src: string; position: string; alt: string; zoom: number }) {
  return (
    <span className="slot" style={{ ["--zoom" as string]: zoom }}>
      <img src={src} alt={alt} width={1600} height={1000} loading="lazy" decoding="async" style={{ objectPosition: position, transformOrigin: position }} />
    </span>
  );
}

export default function SkillsSection() {
  return (
    <section id="competences" className="skills" aria-labelledby="competences-title">
      <h2 id="competences-title" className="sr-only">Compétences</h2>
      <p className="skills-statement" data-reveal>
        J&apos;écris des plugins et des API en Java{" "}
        <span className="slot slot-code" data-ui><code>@EventHandler</code></span>, des interfaces en Vue.js{" "}
        <span className="slot slot-langs" data-ui role="img" aria-label="Langages du dépôt CVL-FLOWER : Vue 49,7 %, Java 35,7 %, CSS 6,8 %, autres 7,8 %"><i style={{ flexGrow: 49.7, background: "#41b883" }} /><i style={{ flexGrow: 35.7, background: "#b07219" }} /><i style={{ flexGrow: 6.8, background: "#663399" }} /><i style={{ flexGrow: 7.8, background: "#8a9aa1" }} /></span>, et des outils que les gens utilisent vraiment{" "}
        <Slot src="/shots/cercles-magiques.jpg" position="50% 45%" zoom={1.5} alt="Cercle doré du générateur de cercles magiques" />.
      </p>
      <dl className="skills-list">
        {skills.map((s, i) => (
          <div key={s.group} data-reveal style={{ ["--d" as string]: i }}>
            <dt>{s.group}</dt>
            <dd>{s.items}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
