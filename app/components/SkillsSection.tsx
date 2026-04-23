export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Mes compétences
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Frontend
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">React/Next.js</span>
                <span className="font-medium text-blue-600">50%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{width: '50%'}}></div>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">Vue.js</span>
                <span className="font-medium text-green-600">70%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{width: '70%'}}></div>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">TypeScript</span>
                <span className="font-medium text-purple-600">70%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{width: '70%'}}></div>
              </div>

            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Backend
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">Node.js</span>
                <span className="font-medium text-green-600">75%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{width: '75%'}}></div>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">Express.js</span>
                <span className="font-medium text-blue-600">70%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{width: '70%'}}></div>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">MariaDB</span>
                <span className="font-medium text-yellow-600">65%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-yellow-600 h-2 rounded-full" style={{width: '65%'}}></div>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">Java</span>
                <span className="font-medium text-red-600">80%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-red-600 h-2 rounded-full" style={{width: '80%'}}></div>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">Spring Boot</span>
                <span className="font-medium text-teal-600">70%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-teal-600 h-2 rounded-full" style={{width: '70%'}}></div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Outils
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">Git</span>
                <span className="font-medium text-red-600">85%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-red-600 h-2 rounded-full" style={{width: '85%'}}></div>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">Docker</span>
                <span className="font-medium text-blue-600">60%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{width: '60%'}}></div>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-300">Tailwind CSS</span>
                <span className="font-medium text-cyan-600">60%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-cyan-600 h-2 rounded-full" style={{width: '60%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}