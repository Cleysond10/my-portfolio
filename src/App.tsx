import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, FileText, ChevronDown, Building2, GraduationCap, Calendar, MapPin, Menu, X } from 'lucide-react';
import { projects } from './projects'

const skills = [
  "JavaScript", "TypeScript", "React", "React Native", "Node.js", "NestJS",
  "Python", "Java", "FastAPI", "Spring Boot", "PostgreSQL", "MongoDB", "Docker", "AWS",
   "Git", "CI/CD"
]

function App() {
  const [changeNavTitle, setChangeNavTitle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBadgeTitle, setShowBadgeTitle] = useState({
    github: false,
    linkedin: false,
    email: false,
    resume: false
  });

  useEffect(() => {
    const handleScroll = () => {
      setChangeNavTitle(window.scrollY > 500);
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors"
            >
              {changeNavTitle ? 'Cleyson Duarte' : 'Portfolio'}
            </button>

            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('experiences')} className="text-gray-600 hover:text-gray-900">Experiences</button>
              <button onClick={() => scrollToSection('education')} className="text-gray-600 hover:text-gray-900">Education</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-600 hover:text-gray-900">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-600 hover:text-gray-900">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-gray-900">Contact</button>
            </div>

            <button
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden absolute top-20 left-0 right-0 bg-white shadow-lg border-t">
              <div className="px-4 py-2 space-y-2">
                <button
                  onClick={() => scrollToSection('experiences')}
                  className="block w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded"
                >
                  Experiences
                </button>
                <button
                  onClick={() => scrollToSection('education')}
                  className="block w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded"
                >
                  Education
                </button>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="block w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection('skills')}
                  className="block w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded"
                >
                  Skills
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <section id="hero" className="min-h-screen flex flex-col justify-center relative px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 opacity-50"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full z-10">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Cleyson Duarte
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-2xl">
            Experienced <b>software engineer</b> skilled in contributing across the full lifecycle of digital products - developing, maintaining, and testing web and mobile applications.
          </p>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/cleysonduarte" target="_blank" rel="noopener noreferrer"
               onMouseEnter={() => setShowBadgeTitle(prev => ({...prev, linkedin: true}))}
               onMouseLeave={() => setShowBadgeTitle(prev => ({...prev, linkedin: false}))}
               className="flex items-center gap-2 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-colors hover:w-28">
              <Linkedin size={24} />
              {showBadgeTitle.linkedin && (
              <p className="text-sm sm:text-md text-white max-w-2xl">
                LinkedIn
              </p>
              )}
            </a>
            <a href="https://github.com/Cleysond10" target="_blank" rel="noopener noreferrer"
               onMouseEnter={() => setShowBadgeTitle(prev => ({...prev, github: true}))}
               onMouseLeave={() => setShowBadgeTitle(prev => ({...prev, github: false}))}
               className="flex items-center gap-1 p-2 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors hover:w-24">
              <Github size={24} />
              {showBadgeTitle.github && (
              <p className="text-sm sm:text-md text-white max-w-2xl">
                GitHub
              </p>
              )}
            </a>
            <a href="mailto:cleysonduarte99@gmail.com"
               onMouseEnter={() => setShowBadgeTitle(prev => ({...prev, email: true}))}
               onMouseLeave={() => setShowBadgeTitle(prev => ({...prev, email: false}))}
               className="flex items-center gap-1 p-2 bg-red-500 text-white rounded-full hover:bg-red-400 transition-colors hover:w-20">
              <Mail size={24} />
              {showBadgeTitle.email && (
              <p className="text-sm sm:text-md text-white max-w-2xl">
                Email
              </p>
              )}
            </a>
            <a href="https://docs.google.com/document/d/1ZC7Xxmak8VESn_6wX_bP5fCWFXtzjBKO/edit?usp=sharing&ouid=105958868606140462677&rtpof=true&sd=true"
               target="_blank"
               rel="noopener noreferrer"
               onMouseEnter={() => setShowBadgeTitle(prev => ({...prev, resume: true}))}
               onMouseLeave={() => setShowBadgeTitle(prev => ({...prev, resume: false}))}
               className="flex items-center gap-1 p-2 bg-green-600 text-white rounded-full hover:bg-green-500 transition-colors hover:w-24">
              <FileText size={24} />
              {showBadgeTitle.resume && (
              <p className="text-sm sm:text-md text-white max-w-2xl">
                Resume
              </p>
              )}
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </section>

      <section id="experiences" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Professional Experiences</h2>
          <div className="space-y-12">
            <div className="border-l-4 border-blue-500 pl-6 space-y-4">
              <div className="flex items-center space-x-2">
                <Building2 className="text-blue-500" size={24} />
                <h3 className="text-2xl font-semibold">Full Stack Engineer</h3>
              </div>
              <div className="flex items-center space-x-4 text-gray-600">
                <span className="flex items-center">
                  <Calendar className="mr-2" size={16} />
                  Apr 2025 - Present
                </span>
                <span className="flex items-center">
                  <MapPin className="mr-2" size={16} />
                  CI&T
                </span>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Maintaining frontend and backend of a financial client's platform</li>
                <li>Collaborating with a global and diverse team to deliver high-quality software solutions</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Angular</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">NestJS</span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Java</span>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 pl-6 space-y-4">
              <div className="flex items-center space-x-2">
                <Building2 className="text-blue-500" size={24} />
                <h3 className="text-2xl font-semibold">Software Engineer</h3>
              </div>
              <div className="flex items-center space-x-4 text-gray-600">
                <span className="flex items-center">
                  <Calendar className="mr-2" size={16} />
                  Feb 2023 - Mar 2025
                </span>
                <span className="flex items-center">
                  <MapPin className="mr-2" size={16} />
                  Abletech
                </span>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Educational content creation: Authored tech articles published on the company's social media</li>
                <li>Frontend architecture improvement: Proposed a new frontend architecture and enhanced request performance using custom hooks and React-Query</li>
                <li>White-label system development: Created a system allowing application theme customization</li>
                <li>Performance optimization of 98.75%: Reduced compilation time from 32 seconds to 400 milliseconds by replacing a legacy validation tool</li>
                <li>Real-time messaging implementation: Integrated an in-app chat system using Firebase</li>
                <li>State management enhancement: Optimized state handling with Redux</li>
                <li>Backend contributions: Developed new API endpoints in NestJS, following clean architecture principles</li>
                <li>Technical leadership: Led a team in developing a responsive web app for mobile browsers</li>
                <li>Microservice Development: Created a Python API for image manipulation using OpenCV</li>
                <li>Monolithic Maintenance: Enhanced a Spring Boot application with MVC architecture</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Spring Boot</span>
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">NestJS</span>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 pl-6 space-y-4">
              <div className="flex items-center space-x-2">
                <Building2 className="text-blue-500" size={24} />
                <h3 className="text-2xl font-semibold">Junior Software Engineer</h3>
              </div>
              <div className="flex items-center space-x-4 text-gray-600">
                <span className="flex items-center">
                  <Calendar className="mr-2" size={16} />
                  Mar 2021 - Feb 2023
                </span>
                <span className="flex items-center">
                  <MapPin className="mr-2" size={16} />
                  Abletech
                </span>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Frontend development: Built new UI screens using React Hooks, Navigation and MUI + Styled Components</li>
                <li>Knowledge sharing: Delivered a talk on best practices and clean code for interns</li>
                <li>Cross-platform mobile app development: Contributed to React Native project (Android/iOS)</li>
                <li>Onboarding support: Assisted new hires with project setup and product overviews</li>
                <li>Test automation: Wrote unit, integration and e2e tests</li>
                <li>Technical feasibility analysis: Researched tools and libraries for project implementation</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">React Native</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">MUI</span>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 pl-6 space-y-4">
              <div className="flex items-center space-x-2">
                <Building2 className="text-blue-500" size={24} />
                <h3 className="text-2xl font-semibold">Full Stack Web Developer</h3>
              </div>
              <div className="flex items-center space-x-4 text-gray-600">
                <span className="flex items-center">
                  <Calendar className="mr-2" size={16} />
                  Feb 2022 - Mar 2024
                </span>
                <span className="flex items-center">
                  <MapPin className="mr-2" size={16} />
                  Law Office (Freelance)
                </span>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Reduced loading time by over 80% by improving the style library modules in frontend</li>
                <li>Frontend development: Created screens and functionalities using Next.js and Tailwind CSS</li>
                <li>Backend contributions: Implemented new API routes in Node.js</li>
                <li>Client collaboration: Participated in requirement-gathering meetings</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Next.js</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm">Tailwind</span>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 pl-6 space-y-4">
              <div className="flex items-center space-x-2">
                <Building2 className="text-blue-500" size={24} />
                <h3 className="text-2xl font-semibold">IT Intern</h3>
              </div>
              <div className="flex items-center space-x-4 text-gray-600">
                <span className="flex items-center">
                  <Calendar className="mr-2" size={16} />
                  Nov 2020 - Apr 2021
                </span>
                <span className="flex items-center">
                  <MapPin className="mr-2" size={16} />
                  Federal University of Pernambuco
                </span>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Technical support: Assisted with research projects and system maintenance</li>
                <li>Software documentation: Contributed to technical documentation</li>
                <li>Presentation preparation: Created materials on system requirements</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Education</h2>
          <div className="space-y-12">
            <div className="border-l-4 border-indigo-500 pl-6 space-y-4">
              <div className="flex items-center space-x-2">
                <GraduationCap className="text-indigo-500" size={24} />
                <h3 className="text-2xl font-semibold">Software Engineering, Post Graduation</h3>
              </div>
              <div className="flex items-center space-x-4 text-gray-600">
                <span className="flex items-center">
                  <Calendar className="mr-2" size={16} />
                  May 2024 - Present
                </span>
                <span className="flex items-center">
                  <MapPin className="mr-2" size={16} />
                  University of São Paulo
                </span>
              </div>
            </div>

            <div className="border-l-4 border-indigo-500 pl-6 space-y-4">
              <div className="flex items-center space-x-2">
                <GraduationCap className="text-indigo-500" size={24} />
                <h3 className="text-2xl font-semibold">Computer Science, Bachelor's Degree</h3>
              </div>
              <div className="flex items-center space-x-4 text-gray-600">
                <span className="flex items-center">
                  <Calendar className="mr-2" size={16} />
                  Jun 2018 - Dec 2022
                </span>
                <span className="flex items-center">
                  <MapPin className="mr-2" size={16} />
                  Catholic University of Pernambuco
                </span>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Thesis: Use of Computational Statistics in Improving the Contrast of Photographic Images - Developed research in digital image processing using computational statistics with Python</li>
                <li>CNPq Undergraduate Research Student (Feb 2019 - Dec 2021): Participated in interdisciplinary projects involving technology, chemistry, and biology for the construction of an intelligent bioreactor using fuzzy logic and Arduino microcontroller</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-white">
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

      <section id="skills" className="py-20 bg-gray-50">
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

      <section id="contact" className="py-20 bg-white">
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
