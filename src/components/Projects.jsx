import React, { useState } from 'react';
import { 
  ExternalLink, 
  Layers, 
  Server, 
  ShieldCheck, 
  CheckCircle2, 
  Calendar, 
  ArrowUpRight,
  Info,
  X
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'phishing-detector',
      title: 'Phishing Website Detector (Admin Dashboard)',
      category: 'fullstack',
      categoryLabel: 'Full Stack & Security',
      date: 'July 2026',
      badge: 'Featured Project',
      summary: 'A responsive administrative dashboard and security management system built using Express.js, JavaScript, and REST APIs.',
      techStack: ['Node.js', 'Express.js', 'JavaScript (ES6+)', 'HTML5/CSS3', 'JSON Database', 'REST APIs'],
      highlights: [
        'Built a responsive admin dashboard using Express.js and JavaScript for tracking students, courses, attendance, and fees.',
        'Designed and tested REST APIs supporting full CRUD operations for core data entities.',
        'Implemented input validation and robust error handling to ensure secure and reliable data management.'
      ],
      details: {
        problem: 'Institutions and web administrators needed a centralized, responsive interface to track records while monitoring suspicious URL patterns and ensuring reliable data persistence.',
        solution: 'Engineered an end-to-end dashboard powered by Express.js routing, custom middleware for sanitization, and structured JSON data handling with zero database downtime.',
        architecture: 'Client-Server Architecture with modular controller/route separation, RESTful status codes (200, 201, 400, 404, 500), and accessible UI templates.',
        keyMetrics: ['Full CRUD support', 'Sub-50ms API response', '100% Data validation pass rate']
      },
      liveUrl: '#',
      githubUrl: 'https://github.com'
    },
    {
      id: 'portfolio-website',
      title: 'Modern Personal Portfolio Website',
      category: 'frontend',
      categoryLabel: 'Frontend & UI Engineering',
      date: 'January 2026',
      badge: 'Production Showcase',
      summary: 'High-performance developer portfolio built with React and Tailwind CSS, featuring reusable component architecture and cross-browser testing.',
      techStack: ['React 19', 'Tailwind CSS', 'Node.js', 'Firebase', 'Netlify', 'Vite'],
      highlights: [
        'Designed and built a personal portfolio website in React and Tailwind CSS to showcase projects and technical skills.',
        'Ensured cross-browser compatibility across Chrome, Firefox, and Edge through systematic testing.',
        'Deployed the site on Netlify using reusable, modular component architecture for easy maintenance.'
      ],
      details: {
        problem: 'Traditional resumes lack interactive verification of responsive design, modern component structure, and real-world UI engineering capabilities.',
        solution: 'Built a sleek, dark-slate themed portfolio with single-page fluid navigation, accessible modals, copy-to-clipboard interactions, and instant responsive layouts.',
        architecture: 'Modular component architecture organized into atomic layouts, Tailwind v4 styling, and optimized client build chunks via Vite.',
        keyMetrics: ['A+ Lighthouse score', 'Chrome/Firefox/Edge verified', 'Sub-second initial load']
      },
      liveUrl: '#',
      githubUrl: 'https://github.com'
    },
    {
      id: 'student-portal-api',
      title: 'Student & Academic Course REST API',
      category: 'backend',
      categoryLabel: 'Backend Engineering',
      date: 'May 2026',
      badge: 'API Engine',
      summary: 'Robust backend service with comprehensive CRUD endpoints, role-based queries, and Postman-tested request validation.',
      techStack: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Postman', 'RESTful API'],
      highlights: [
        'Architected modular REST endpoints for student records, enrollment catalogs, and fee status tracking.',
        'Implemented centralized error handling middleware and structured JSON error responses.',
        'Thoroughly validated payloads and edge cases using Postman collections.'
      ],
      details: {
        problem: 'Academic portals require strict data integrity, preventing conflicting records and invalid fee data submissions.',
        solution: 'Developed a schema-first API layer with strict parameter verification, modular router controllers, and dual database support for MySQL and MongoDB.',
        architecture: 'MVC pattern with Controller-Service-Repository separation for maintainability and scalability.',
        keyMetrics: ['20+ CRUD Endpoints', '100% Postman test coverage', 'Role-based access validation']
      },
      liveUrl: '#',
      githubUrl: 'https://github.com'
    },
    {
      id: 'firebase-notes-hub',
      title: 'Cloud Task & Notes Sync Hub',
      category: 'fullstack',
      categoryLabel: 'Cloud & Database',
      date: 'March 2026',
      badge: 'Cloud Sync',
      summary: 'Real-time collaborative task workspace with Firebase Authentication and Cloud Firestore live listeners.',
      techStack: ['React.js', 'Firebase Auth', 'Firestore', 'Tailwind CSS', 'Netlify'],
      highlights: [
        'Integrated Firebase Authentication for secure user logins and multi-device session continuity.',
        'Leveraged Firestore real-time listeners for instant synchronization across open browser tabs.',
        'Crafted a minimalist, accessible interface with keyboard shortcuts and responsive design.'
      ],
      details: {
        problem: 'Users need instant multi-device synchronization without having to manually refresh or manage local state drift.',
        solution: 'Integrated Firebase Firestore onSnapshot listeners with optimistic UI updates in React for real-time responsiveness.',
        architecture: 'Event-driven serverless architecture using Google Cloud Firebase backend services.',
        keyMetrics: ['Instant real-time sync', 'Zero local data loss', 'Secure Firestore rules']
      },
      liveUrl: '#',
      githubUrl: 'https://github.com'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 relative border-t border-slate-800/80 bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-800/50">
            Portfolio Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
            Featured Projects & Implementations
          </h2>
          <p className="text-slate-400 mt-4 text-base leading-relaxed">
            Real-world applications showcasing full-stack feature ownership, REST API design, 
            security implementations, and responsive frontend architectures.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'fullstack', label: 'Full Stack' },
            { id: 'frontend', label: 'Frontend' },
            { id: 'backend', label: 'Backend & APIs' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 cursor-pointer ${
                filter === tab.id
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-slate-900/70 border border-slate-800/90 hover:border-indigo-500/40 p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 shadow-xl group text-left"
            >
              <div>
                {/* Card Top Strip */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-indigo-950/80 border border-indigo-800/50 text-indigo-300">
                    {project.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{project.date}</span>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-xs font-mono text-indigo-400 mt-1">
                  {project.categoryLabel}
                </p>

                <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                  {project.summary}
                </p>

                {/* Bullet Highlights straight from Resume */}
                <div className="mt-5 space-y-2.5">
                  {project.highlights.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-400">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-slate-950/80 border border-slate-800 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Footer */}
              <div className="mt-8 pt-5 border-t border-slate-800/80 flex items-center justify-between gap-4">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer"
                >
                  <Info className="w-4 h-4" />
                  <span>Architecture & Details</span>
                </button>

                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                    title="View GitHub Repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={project.liveUrl}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md shadow-indigo-600/20 transition-colors"
                  >
                    <span>Live Preview</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Interactive Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto text-left">
            
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Title & Meta */}
            <div className="pr-10">
              <span className="text-xs font-mono text-indigo-400 bg-indigo-950/60 px-2.5 py-1 rounded border border-indigo-900/50">
                {selectedProject.categoryLabel} • {selectedProject.date}
              </span>
              <h3 className="text-2xl font-bold text-white mt-3">
                {selectedProject.title}
              </h3>
            </div>

            {/* Modal Content Sections */}
            <div className="mt-6 space-y-5 text-sm text-slate-300">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Problem & Objective</h4>
                <p className="mt-1.5 leading-relaxed text-slate-300 bg-slate-950/50 p-3.5 rounded-xl border border-slate-800">
                  {selectedProject.details.problem}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Technical Solution</h4>
                <p className="mt-1.5 leading-relaxed text-slate-300 bg-slate-950/50 p-3.5 rounded-xl border border-slate-800">
                  {selectedProject.details.solution}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Architecture & Patterns</h4>
                <p className="mt-1.5 leading-relaxed text-slate-300 bg-slate-950/50 p-3.5 rounded-xl border border-slate-800">
                  {selectedProject.details.architecture}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">Key Engineering Metrics</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-2">
                  {selectedProject.details.keyMetrics.map((metric, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-indigo-950/30 border border-indigo-800/40 text-xs font-semibold text-indigo-300 text-center">
                      {metric}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.techStack.map((tech, i) => (
                    <span key={i} className="px-2.5 py-1 text-xs font-mono rounded bg-slate-800 border border-slate-700 text-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="mt-8 pt-5 border-t border-slate-800 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors cursor-pointer"
              >
                Close
              </button>
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors flex items-center gap-1.5"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Source Code</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default Projects;
