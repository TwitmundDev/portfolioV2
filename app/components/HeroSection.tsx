import ProfileImage from "./ProfileImage";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20" id="home">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 relative w-[150px] h-[150px] mx-auto">
          <ProfileImage
            src="/pfp.jpg"
            alt="Photo de profil"
            fill={true}
            sizes="(max-width: 768px) 120px, 150px"
            className="rounded-full border-4 border-white shadow-lg object-cover"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          👋 Ellwane Romdhame - Backend & Systèmes
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100">
          Développeur Backend | Logiciels
        </p>
        <p className="text-lg max-w-2xl mx-auto text-blue-50">
          Polyvalent et autonome, je combine compétences en administration système et développement backend (Java, Go, Python).<br /> 
          Disponible immédiatement.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            Me contacter
          </a>
        </div>
      </div>
    </section>
  );
}