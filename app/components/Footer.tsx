import { credits } from "../data";

const links = [
  { label: "GitHub", href: "https://github.com/TwitmundDev" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ellwane-romdhame-aa1a88238/" },
  { label: "LeetCode", href: "https://leetcode.com/u/twitmunddev/" },
  { label: "Discord", href: "https://discord.gg/YBhya3SauB" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="invite">
          <p>
            Un poste, une mission ?
            <br />
            Parlons-en.
          </p>
          <a href="mailto:contact@twitmund.fr" className="btn">
            Écrire un email <span className="arrow" aria-hidden="true">→</span>
          </a>
        </div>
        <ul className="footer-links">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} target="_blank" rel="noopener noreferrer" className="link">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="footer-legal">
        <p>© {new Date().getFullYear()} Ellwane Romdhame. Site construit avec Next.js.</p>
        <details>
          <summary>Crédits des images et de la vidéo</summary>
          <ul>
            {credits.map((c) => (
              <li key={c.page}>
                <a href={c.page} target="_blank" rel="noopener noreferrer" className="link">{c.title}</a>, {c.creator}, {c.license}
              </li>
            ))}
          </ul>
        </details>
      </div>
      <p className="wordmark display" aria-hidden="true">
        Romdhame
      </p>
    </footer>
  );
}
