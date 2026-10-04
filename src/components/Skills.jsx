import React, { useState } from 'react';
import { 
  Code2, 
  Server, 
  Database, 
  Wrench, 
  Layers, 
  CheckCircle,
  Cpu,
  Globe,
  Shield,
  Workflow
} from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend & APIs' },
    { id: 'database', name: 'Databases & Cloud' },
    { id: 'tools', name: 'Tools & Practices' },
  ];

  const skillGroups = [
    {
      id: 'frontend',
      category: 'Frontend Development',
      icon: <Code2 className="w-5 h-5 text-indigo-400" />,
      description: 'Building dynamic, accessible, and high-performance user interfaces',
      skills: [
        { name: 'React.js', level: 'Advanced', highlight: 'Hooks, Virtual DOM, Component LifeCycle' },
        { name: 'JavaScript (ES6+)', level: 'Advanced', highlight: 'Async/Await, Promises, Closures' },
        { name: 'Tailwind CSS', level: 'Advanced', highlight: 'Utility-first, Responsive Layouts' },
        { name: 'HTML5 & CSS3', level: 'Advanced', highlight: 'Semantic Markup, Flexbox, Grid' },
        { name: 'Component Architecture', level: 'Proficient', highlight: 'Reusable, Clean & Modular' },
        { name: 'Responsive UI/UX', level: 'Advanced', highlight: 'Mobile-first, Cross-Device' },
      ]
    },
    {
      id: 'backend',
      category: 'Backend & API Engineering',
      icon: <Server className="w-5 h-5 text-emerald-400" />,
      description: 'Designing scalable server logic, routing, and robust RESTful APIs',
      skills: [
        { name: 'Node.js', level: 'Proficient', highlight: 'Event-driven, Non-blocking I/O' },
        { name: 'Express.js', level: 'Proficient', highlight: 'Routing, Custom Middleware' },
        { name: 'REST API Design', level: 'Proficient', highlight: 'CRUD Endpoints, Status Codes' },
        { name: 'Data Validation', level: 'Proficient', highlight: 'Sanitization & Schema Checks' },
        { name: 'Error Handling', level: 'Proficient', highlight: 'Centralized error catchers' },
        { name: 'JSON Databases', level: 'Proficient', highlight: 'Lightweight & Structured Storage' },
      ]
    },
    {
      id: 'database',
      category: 'Databases & Cloud',
      icon: <Database className="w-5 h-5 text-purple-400" />,
      description: 'Storing, securing, and querying structured and NoSQL databases',
      skills: [
        { name: 'MongoDB', level: 'Proficient', highlight: 'Collections, Document Models' },
        { name: 'MySQL', level: 'Proficient', highlight: 'Relational Schemas, SQL Queries' },
        { name: 'Firebase Firestore', level: 'Proficient', highlight: 'Real-time sync, Cloud DB' },
        { name: 'Firebase Auth', level: 'Proficient', highlight: 'Secure User Authentication' },
        { name: 'XAMPP', level: 'Proficient', highlight: 'Local Apache & MySQL Server' },
      ]
    },
    {
      id: 'tools',
      category: 'Tools, Platforms & Practices',
      icon: <Wrench className="w-5 h-5 text-amber-400" />,
      description: 'Development environment, testing suites, and workflow best practices',
      skills: [
        { name: 'Git & GitHub', level: 'Daily', highlight: 'Branches, PRs, Version History' },
        { name: 'Postman', level: 'Proficient', highlight: 'API Testing & Documentation' },
        { name: 'Netlify', level: 'Proficient', highlight: 'Continuous CI/CD Deployment' },
        { name: 'VS Code & Vite', level: 'Daily', highlight: 'Fast HMR & Dev Environment' },
        { name: 'Cross-Browser Testing', level: 'Proficient', highlight: 'Chrome, Firefox, Edge' },
        { name: 'Agile & Iterative Dev', level: 'Proficient', highlight: 'Sprint-based feature delivery' },
      ]
    }
  ];

  const filteredGroups = activeCategory === 'all' 
    ? skillGroups 
    : skillGroups.filter(g => g.id === activeCategory);

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-800/50">
            Technical Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
            Core Skills & Technologies
          </h2>
          <p className="text-slate-400 mt-4 text-base leading-relaxed">
            A comprehensive overview of my technical toolbelt, acquired through coursework, 
            hands-on projects, and real-world implementation.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 cursor-pointer ${
                activeCategory === category.id
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredGroups.map((group) => (
            <div
              key={group.id}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800/90 shadow-xl text-left flex flex-col justify-between hover:border-indigo-500/40 transition-all duration-200"
            >
              <div>
                {/* Header of group */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center border border-slate-700/60">
                    {group.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{group.category}</h3>
                    <p className="text-xs text-slate-400">{group.description}</p>
                  </div>
                </div>

                {/* Skills list items */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {group.skills.map((skill, idx) => (
                    <div 
                      key={idx}
                      className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/60 hover:border-slate-700 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-sm text-slate-200">{skill.name}</span>
                        <span className="text-[10px] font-mono text-indigo-400 px-2 py-0.5 rounded bg-indigo-950/60 border border-indigo-900/50">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1.5 leading-snug">
                        {skill.highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tag row */}
              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 font-mono text-[11px] text-slate-400">
                  <Workflow className="w-3.5 h-3.5 text-indigo-400" />
                  Production Ready
                </span>
                <span className="text-[11px] text-slate-400 font-mono">
                  {group.skills.length} competencies
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Highlights banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-purple-950/20 to-slate-900/60 border border-indigo-500/20 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center shrink-0">
              <Shield className="w-6 h-6 text-indigo-400" />
            </div>
            <div>
              <h4 className="text-white font-bold text-base">Consistent Focus on Performance & Security</h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                Clean coding principles, strict input validation, and cross-browser testing across Chrome, Firefox, and Edge.
              </p>
            </div>
          </div>
          <a
            href="#projects"
            className="px-4 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold whitespace-nowrap transition-colors"
          >
            See in Action
          </a>
        </div>

      </div>
    </section>
  );
};

export default Skills;
