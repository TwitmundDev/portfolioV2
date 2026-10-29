/* eslint-disable @next/next/no-img-element */
export default function AboutSection() {
  return (
    <section id="histoire" className="letter" aria-labelledby="histoire-title">
      <div className="letter-col">
        <img className="avatar" src="/pfp.jpg" alt="Portrait d'Ellwane Romdhame" width={88} height={88} data-reveal />
        <h2 id="histoire-title" className="letter-title" data-reveal>
          Tout a commencé sur Minecraft
        </h2>
        <p data-reveal>
          J&apos;ai écrit mes premières lignes de code au collège, pour un jeu : Minecraft. Je voulais changer les règles des serveurs sur lesquels je jouais, alors j&apos;ai appris Java en codant des plugins et des mods.
        </p>
        <p data-reveal>
          Certains de ces plugins sont encore en ligne. <mark>H2Oh et McAntiVPN cumulent plus de 600 téléchargements</mark> par des administrateurs de serveurs que je ne connais pas.
        </p>
        <p data-reveal>
          Ensuite sont venus les bots Discord en Python, un backend Spring Boot pour mon chef-d&apos;œuvre au lycée, le site de vente de fleurs du CVL en Vue.js, puis des stages où j&apos;ai développé un ERP et une application de gestion de parc.
        </p>
        <p data-reveal>
          Aujourd&apos;hui je cherche une équipe où construire des API, des outils métier et des applications web, en CDI, en alternance ou en mission.
        </p>
        <p className="sign" data-reveal>
          <span className="sign-name">Ellwane Romdhame</span>
          <span className="sign-role">Développeur Java et Vue.js</span>
        </p>
      </div>
    </section>
  );
}
