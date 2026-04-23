export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Mes projets
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Portfolio */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
              <span className="text-white text-4xl">💼</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Portfolio
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Portfolio personnel développé avec Vue.js et Vite.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm">
                  Vue.js
                </span>
                <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded text-sm">
                  JavaScript
                </span>
                <span className="bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 px-2 py-1 rounded text-sm">
                  CSS
                </span>
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-sm">
                  Vite
                </span>
                <span className="bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 px-2 py-1 rounded text-sm">
                  CI/CD
                </span>
              </div>
              <div className="flex gap-4">
                <a href="/" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Voir le projet
                </a>
              </div>
            </div>
          </div>

          {/* Site vitrine Rescue Electro Informatique */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-48 bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
              <span className="text-white text-4xl">🌐</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Site vitrine Rescue Electro Informatique
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Refonte du site vitrine de l&apos;entreprise avec Wordpress, installation et configuration de plugins, optimisation SEO, création de contenu et gestion du site. Stage de 8 semaines en Mars - Juin 2025.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded text-sm">
                  Wordpress
                </span>
                <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded text-sm">
                  PHP
                </span>
                <span className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-2 py-1 rounded text-sm">
                  OVH
                </span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-sm">
                  SEO
                </span>
              </div>
              <div className="flex gap-4">
                <a href="https://rescuenow.fr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Voir le projet
                </a>
              </div>
            </div>
          </div>

          {/* MC Anti VPN */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-48 bg-gradient-to-br from-red-400 to-pink-500 flex items-center justify-center">
              <span className="text-white text-4xl">🛡️</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                MC Anti VPN
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Plugin Minecraft développé en Java pour protéger les serveurs contre les connexions via VPN. Le plugin est customisable au besoin de l&apos;utilisateur et utilise une API externe pour vérifier les adresses IP. Disponible sur SpigotMC, Modrinth et GitHub.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded text-sm">
                  Java
                </span>
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-sm">
                  Minecraft
                </span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm">
                  API Spigot
                </span>
                <span className="bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 px-2 py-1 rounded text-sm">
                  API externe
                </span>
                <span className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-2 py-1 rounded text-sm">
                  Gestion d&apos;événements
                </span>
              </div>
              <div className="flex gap-4">
                <a href="https://modrinth.com/plugin/mc-anti-vpn" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Voir le projet
                </a>
              </div>
            </div>
          </div>

          {/* H20h */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-48 bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center">
              <span className="text-white text-4xl">💧</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                H20h
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Plugin Minecraft développé en Java pour intégrer un système d&apos;hydratation dans le jeu. Le plugin ajoute une nouvelle mécanique de jeu où les joueurs doivent boire de l&apos;eau régulièrement pour rester hydratés. Disponible sur Modrinth et GitHub.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded text-sm">
                  Java
                </span>
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-sm">
                  Minecraft
                </span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm">
                  API Spigot
                </span>
                <span className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-2 py-1 rounded text-sm">
                  Gestion d&apos;événements
                </span>
              </div>
              <div className="flex gap-4">
                <a href="https://modrinth.com/plugin/h2oh" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Voir le projet
                </a>
              </div>
            </div>
          </div>

          {/* Participation traduction Modrinth */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-48 bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center">
              <span className="text-white text-4xl">🌍</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Traduction Modrinth
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Participation à la traduction du site et de l&apos;application Modrinth en français via Crowdin, plateforme de traduction collaborative.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm">
                  Traduction
                </span>
                <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-2 py-1 rounded text-sm">
                  Crowdin
                </span>
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-sm">
                  Modrinth
                </span>
              </div>
              <div className="flex gap-4">
                <a href="https://crowdin.com/project/modrinth-platform" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                  Voir le projet
                </a>
              </div>
            </div>
          </div>

          {/* ERP HazielDev */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-48 bg-gradient-to-br from-teal-400 to-green-500 flex items-center justify-center">
              <span className="text-white text-4xl">📊</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                ERP HazielDev
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Stage de 8 semaines en Mars - Juin 2023. Développement d&apos;une API REST pour un ERP (Entreprise Ressource Planning) en Java avec Spark et d&apos;une application front-end en utilisant un framework JavaScript maison. Installation et configuration d&apos;une infrastructure réseau (Proxmox, Pfsense, Docker, Drone, Gitea).
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded text-sm">
                  Java
                </span>
                <span className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-2 py-1 rounded text-sm">
                  SysAdmin
                </span>
                <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded text-sm">
                  JavaScript
                </span>
                <span className="bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-2 py-1 rounded text-sm">
                  Spark
                </span>
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm">
                  Docker
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}