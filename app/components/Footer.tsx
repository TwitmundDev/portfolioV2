import { links } from "../data";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="muted">Ellwane Romdhame, développeur Java</p>
      <ul>
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} target="_blank" rel="noopener noreferrer" className="link">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <p className="muted right">© {new Date().getFullYear()} · Site en Next.js</p>
    </footer>
  );
}
