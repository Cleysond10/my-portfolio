import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { projects } from './projects'

function App() {
  const skills = [
    "JavaScript", "TypeScript", "React", "React Native", "Node.js", "NestJS",
    "Python", "Java", "FastAPI", "Spring Boot", "Docker", "AWS",
    "MongoDB", "PostgreSQL", "Git", "CI/CD"
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="min-h-screen flex flex-col justify-center relative px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 opacity-50"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full z-10">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Cleyson Duarte
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-2xl">
            Experienced <b>software engineer</b> skilled in contributing across the full lifecycle of digital products.
          </p>
          <div className="flex space-x-4">
            <a href="https://github.com/Cleysond10" target="_blank" rel="noopener noreferrer"
               className="p-2 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/cleysonduarte" target="_blank" rel="noopener noreferrer"
               className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:cleysonduarte99@gmail.com"
               className="p-2 bg-red-500 text-white rounded-full hover:bg-red-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => window.open(project.url, "_blank", "noopener,noreferrer")}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:bg-slate-100 cursor-pointer hover:scale-105 transition"
              >
                <img
                  src={project.img}
                  alt="Project preview"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 h-full">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center self-end">
                    <div className="flex space-x-2">
                      {project.stack.map(({ name, color }) => (
                        <span key={name} className={`px-2 py-1 rounded-full text-sm ${color || "bg-gray-100 text-gray-800"}`}>
                          {name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div key={skill} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <p className="text-lg font-medium text-gray-900">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Get in Touch</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-600 mb-8">
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <a
              href="mailto:cleysonduarte99@gmail.com"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors"
            >
              <Mail className="mr-2" size={20} />
              Send me an email
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© {new Date().getFullYear()} Cleyson Duarte. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
