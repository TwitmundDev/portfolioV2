export default function HeroSection() {
  return (
    <header className="hero" id="home">
      <div className="hero-bar">
        <a href="#home" className="monogram" aria-label="Ellwane Romdhame, retour en haut">
          ER
        </a>
        <nav aria-label="Navigation principale">
          <a href="#projects" className="link">Projets</a>
          <a href="#parcours" className="link hide-phone">Parcours</a>
          <a href="#about" className="link hide-phone">À propos</a>
          <a href="#contact" className="link">Contact</a>
        </nav>
      </div>

      <h1 className="hero-title display">
        <span className="line">
          <span data-line style={{ ["--i" as string]: 0 }}>Ellwane</span>
        </span>
        <span className="line second">
          <span data-line style={{ ["--i" as string]: 1 }}>Romdhame</span>
        </span>
      </h1>

      <div className="hero-foot">
        <div>
          <p data-fade>
            Développeur Java / Vue.js à Lyon. Je construis des applications web et des outils métier simples et utilisés.
          </p>
          <div className="actions" data-fade>
            <a href="#projects" className="link">Voir les projets</a>
            <a href="#contact" className="btn">
              Me contacter <span className="arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
