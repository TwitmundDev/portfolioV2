export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Certification en cours */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                🎓
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Introduction to Cloud Computing
                </h3>
                <p className="text-blue-600 text-sm font-medium">
                  IBM Developer Skills Network
                </p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Formation en cours sur les bases du cloud computing, incluant les concepts
              fondamentaux, les services cloud et les architectures distribuées.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                En cours - 2026
              </span>
              <span className="text-xs bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded">
                En cours
              </span>
            </div>
            <div className="mt-4">
              <a
                href="https://apps.cognitiveclass.ai/learning/course/course-v1:IBMDeveloperSkillsNetwork+CO0101EN+v1/home"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium"
              >
                Voir la formation →
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">1</div>
              <div className="text-gray-600 dark:text-gray-300">Formation en cours</div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-green-600 mb-2">1</div>
              <div className="text-gray-600 dark:text-gray-300">Organisme</div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-purple-600 mb-2">2026</div>
              <div className="text-gray-600 dark:text-gray-300">Année</div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-yellow-600 mb-2">🔄</div>
              <div className="text-gray-600 dark:text-gray-300">En progression</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}