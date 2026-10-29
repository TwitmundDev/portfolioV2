/* eslint-disable @next/next/no-img-element */
const portraits = [
  {
    src: "/pfp.jpg",
    alt: "Portrait d'Ellwane Romdhame",
    who: "Ellwane Romdhame",
    role: "Développeur Java / Vue.js, Lyon",
    text: "Disponible immédiatement en CDI, CDD, alternance ou freelance, sur place à Lyon ou à distance.",
  },
  {
    src: "/images/portrait-of-joseph-marie-jacquard-1752-1834.jpg",
    alt: "Portrait de Joseph Marie Jacquard à son atelier, tissé en soie à Lyon en 1839",
    who: "Joseph Marie Jacquard",
    role: "Portrait tissé en soie, Lyon, 1839",
    text: "Ce portrait n'est pas une gravure : un métier Jacquard l'a tissé, piloté par des milliers de cartes perforées.",
  },
  {
    src: "/images/a-jacquard-loom-showing-information-punchcards-national.jpg",
    alt: "Métier Jacquard en bois avec sa chaîne de cartes perforées suspendue",
    who: "Le métier Jacquard",
    role: "Inventé à Lyon en 1804",
    text: "Une chaîne de cartes perforées dit à la machine quels fils lever. C'est l'un des premiers programmes de l'histoire.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <div className="about-text">
        <h2 id="about-title" className="display" data-reveal>
          À propos
        </h2>
        <p data-reveal style={{ ["--d" as string]: 1 }}>
          Je code depuis le collège, et j&apos;ai surtout appris en construisant : un ERP en Java, une application interne de gestion de parc, une application de budget, des outils et des jeux.
        </p>
        <p data-reveal style={{ ["--d" as string]: 2 }}>
          Le support et la gestion de parc m&apos;ont appris à écouter les utilisateurs. C&apos;est pour eux que j&apos;écris des outils simples, qui servent vraiment.
        </p>
        <p data-reveal style={{ ["--d" as string]: 3 }}>
          À Lyon, on programme des machines depuis 1804. Je continue la tradition, en Java et en Vue.js.
        </p>
      </div>

      <div className="about-portraits">
        {portraits.map((p) => (
          <figure key={p.src} className="portrait" data-reveal>
            <div className="frame">
              <img src={p.src} alt={p.alt} width={1200} height={1500} loading="lazy" decoding="async" data-drift />
            </div>
            <figcaption>
              <span className="who">{p.who}</span>
              <br />
              <span className="role">{p.role}</span>
              <br />
              {p.text}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
