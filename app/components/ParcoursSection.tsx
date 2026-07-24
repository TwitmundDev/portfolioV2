export default function ParcoursSection() {
  return (
    <section id="parcours" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Mon Parcours
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-600 hidden md:block"></div>

          <div className="space-y-12">
            {/* Équipier polyvalent Burger King */}
            <div className="relative flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl hidden md:flex">
                🍔
              </div>
              <div className="ml-0 md:ml-8 bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-sm flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Équipier polyvalent
                  </h3>
                  <span className="text-orange-600 font-medium mt-2 md:mt-0">
                    Juin 2026 - Actuellement
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  <strong>Burger King</strong>
                </p>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• Préparation et service des commandes</li>
                  <li>• Nettoyage et entretien des locaux</li>
                  <li>• Réception et rangement des livraisons</li>
                  <li>• Préparation des ingrédients</li>
                  <li>• Service en salle</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded text-sm">
                    Normes d&apos;hygiène
                  </span>
                  <span className="bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 px-2 py-1 rounded text-sm">
                    Service en salle
                  </span>
                  <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded text-sm">
                    Préparation des commandes
                  </span>
                  <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded text-sm">
                    Travail en équipe
                  </span>
                </div>
              </div>
            </div>



          {/* Gestionnaire de parc informatique */}
            <div className="relative flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-xl hidden md:flex">
                🖥️
              </div>
              <div className="ml-0 md:ml-8 bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-sm flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Gestionnaire de parc informatique
                  </h3>
                  <span className="text-cyan-600 font-medium mt-2 md:mt-0">
                    Février - Mars 2026
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  <strong>Général Frigorifique France</strong>
                </p>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li>• Support utilisateur (niveau 1/2)</li>
                  <li>• Résolution d&apos;incidents (Active Directory, postes, réseau)</li>
                  <li>• Gestion et renouvellement du parc informatique</li>
                  <li>• Déploiement et configuration de postes</li>
                  <li>• Développement d&apos;une application web interne de gestion du parc</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 px-2 py-1 rounded text-sm">
                    Active Directory
                  </span>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm">
                    Réseau
                  </span>
                  <span className="bg-sky-100 dark:bg-sky-900 text-sky-800 dark:text-sky-200 px-2 py-1 rounded text-sm">
                    Support IT
                  </span>
                  <span className="bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-2 py-1 rounded text-sm">
                    Développement Web
                  </span>
                </div>
              </div>
            </div>

            {/* Stage WordPress */}
            <div className="relative flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-xl hidden md:flex">
                💼
              </div>
              <div className="ml-0 md:ml-8 bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-sm flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Stage WordPress - Refonte site vitrine
                  </h3>
                  <span className="text-amber-600 font-medium mt-2 md:mt-0">
                    Mars - Juin 2025
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  <strong>Rescue Electro Informatique</strong> - Stage
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Refonte complète du site vitrine de l&apos;entreprise avec WordPress. Installation et configuration de plugins, optimisation SEO, création de contenu et gestion complète du site.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 px-2 py-1 rounded text-sm">
                    WordPress
                  </span>
                  <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded text-sm">
                    PHP
                  </span>
                  <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded text-sm">
                    OVH
                  </span>
                  <span className="bg-lime-100 dark:bg-lime-900 text-lime-800 dark:text-lime-200 px-2 py-1 rounded text-sm">
                    SEO
                  </span>
                </div>
                <div className="mt-4">
                  <a
                    href="https://rescuenow.fr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-600 hover:text-amber-800 dark:text-amber-400 dark:hover:text-amber-300 text-sm font-medium"
                  >
                    Voir le résultat →
                  </a>
                </div>
              </div>
            </div>

            {/* Technicien Helpdesk */}
            <div className="relative flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-rose-600 rounded-full flex items-center justify-center text-white font-bold text-xl hidden md:flex">
                🛠️
              </div>
              <div className="ml-0 md:ml-8 bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-sm flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Technicien Helpdesk
                  </h3>
                  <span className="text-rose-600 font-medium mt-2 md:mt-0">
                    Juin - Août 2024
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  <strong>Helpline</strong> - Intérim
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Dépannage à distance de postes de travail et d&apos;imprimantes. Gestion des tickets d&apos;incident, installation de logiciels et configuration de systèmes d&apos;exploitation.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="bg-rose-100 dark:bg-rose-900 text-rose-800 dark:text-rose-200 px-2 py-1 rounded text-sm">
                    Prise en main à distance
                  </span>
                  <span className="bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 px-2 py-1 rounded text-sm">
                    Tickets
                  </span>
                  <span className="bg-fuchsia-100 dark:bg-fuchsia-900 text-fuchsia-800 dark:text-fuchsia-200 px-2 py-1 rounded text-sm">
                    Office 365
                  </span>
                  <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded text-sm">
                    Windows
                  </span>
                </div>
              </div>
            </div>

            {/* Stage Développeur Java, JavaScript, SysAdmin */}
            <div className="relative flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-violet-600 rounded-full flex items-center justify-center text-white font-bold text-xl hidden md:flex">
                💻
              </div>
              <div className="ml-0 md:ml-8 bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-sm flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Stage Développeur Java, JavaScript, SysAdmin
                  </h3>
                  <span className="text-violet-600 font-medium mt-2 md:mt-0">
                    Mars - Juin 2023
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  <strong>HazielDev</strong> - Stage
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Installation et configuration d&apos;une infrastructure réseau complète (Proxmox, pfSense, Docker, Drone, Gitea). Développement d&apos;une API REST pour un ERP en Java avec Spark et création d&apos;une application front-end utilisant un framework JavaScript maison.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded text-sm">
                    Java
                  </span>
                  <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded text-sm">
                    JavaScript
                  </span>
                  <span className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 px-2 py-1 rounded text-sm">
                    SysAdmin
                  </span>
                  <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 px-2 py-1 rounded text-sm">
                    Spark
                  </span>
                  <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-2 py-1 rounded text-sm">
                    Docker
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}