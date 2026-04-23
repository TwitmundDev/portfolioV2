export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            À propos de moi
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Mon parcours
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Profil hybride entre l&apos;administration système et le développement backend, je me suis formé en grande partie de manière autonome en construisant des projets concrets et en explorant des architectures réelles (virtualisation, microservices, APIs).
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              J&apos;aime comprendre comment les systèmes fonctionnent en profondeur, optimiser les architectures et résoudre des problèmes techniques complexes.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Aujourd&apos;hui, je cherche à intégrer une équipe où je peux contribuer aussi bien côté dev que côté infra, et continuer à progresser rapidement.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                React
              </span>
              <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">
                Vue.js
              </span>
              <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
                TypeScript
              </span>
              <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm">
                JavaScript
              </span>
              <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-3 py-1 rounded-full text-sm">
                Java
              </span>
              <span className="bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-3 py-1 rounded-full text-sm">
                Spring Boot
              </span>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg">
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Informations rapides
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">Expérience:</span>
                <span className="font-medium text-gray-900 dark:text-white">3 ans</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">Projets complétés:</span>
                <span className="font-medium text-gray-900 dark:text-white">8+</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">Technologies:</span>
                <span className="font-medium text-gray-900 dark:text-white">Java, Spring Boot, React, Next.js, Vue.js</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">Localisation:</span>
                <span className="font-medium text-gray-900 dark:text-white">Lyon</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}