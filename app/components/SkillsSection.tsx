import { skills } from "../data";

export default function SkillsSection() {
  return (
    <section id="skills" className="skills" aria-labelledby="skills-title">
      <h2 id="skills-title" className="section-head" data-reveal>
        Compétences
      </h2>
      <dl>
        {skills.map((s, i) => (
          <div key={s.group} data-reveal style={{ ["--d" as string]: i + 1 }}>
            <dt>{s.group}</dt>
            <dd>{s.items}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
