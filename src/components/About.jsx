import React from 'react';
import { 
  CheckCircle2, 
  Code, 
  Database, 
  Layout, 
  Server, 
  ShieldCheck, 
  Smartphone, 
  Zap, 
  UserCheck,
  FolderGit2
} from 'lucide-react';

const About = () => {
  const coreCompetencies = [
    {
      icon: <Layout className="w-5 h-5 text-indigo-400" />,
      title: "Frontend & Responsive UI",
      desc: "Architecting responsive, mobile-first interfaces with React.js, Tailwind CSS, and modern JavaScript (ES6+) with smooth component lifecycles."
    },
    {
      icon: <Server className="w-5 h-5 text-emerald-400" />,
      title: "Backend & RESTful APIs",
      desc: "Building reliable backend services with Node.js and Express.js, featuring clean route architecture, middleware, and full CRUD capabilities."
    },
    {
      icon: <Database className="w-5 h-5 text-purple-400" />,
      title: "Database Management",
      desc: "Hands-on experience structuring and querying data with MySQL, MongoDB, and Firebase (Firestore & Authentication) with optimized performance."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-amber-400" />,
      title: "Validation & Error Handling",
      desc: "Implementing rigorous input validation, data sanitization, and graceful error handling to safeguard data integrity and application uptime."
    },
    {
      icon: <FolderGit2 className="w-5 h-5 text-sky-400" />,
      title: "Version Control & Deployment",
      desc: "Daily proficiency with Git, GitHub, Postman API testing, and deploying continuous production builds on Netlify and cloud providers."
    },
    {
      icon: <Zap className="w-5 h-5 text-pink-400" />,
      title: "End-to-End Feature Ownership",
      desc: "Comfortable owning a feature end-to-end — from database schema and backend endpoints to intuitive frontend UI and deployment."
    }
  ];

  return (
    <section id="about" className="py-24 relative border-t border-slate-800/80 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-800/50">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
            Passionate Developer Building End-to-End Solutions
          </h2>
          <p className="text-slate-400 mt-4 text-base leading-relaxed">
            Bridging the gap between design and scalable logic with modern web technologies,
            focusing on speed, security, and exceptional user experience.
          </p>
        </div>

        {/* Two-column layout: Story / Summary on Left, Highlights on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left card: Professional Narrative */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-900/50 border border-slate-800 shadow-xl">
            <div className="space-y-5 text-slate-300 text-left">
              <div className="inline-flex items-center gap-2 text-indigo-400 font-mono text-xs uppercase tracking-wider">
                <UserCheck className="w-4 h-4" />
                <span>Professional Background</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white">
                Who I am & What drives me
              </h3>
              
              <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                I am a <strong className="text-white">Full Stack Developer</strong> based in Ghaziabad, Uttar Pradesh, 
                currently pursuing my <strong className="text-indigo-300">Bachelor of Computer Applications (BCA)</strong> at Chaudhary Charan Singh University (2024–2027).
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                My passion lies in crafting responsive web applications with <strong className="text-white">React</strong> and 
                scalable backends with <strong className="text-white">Node.js & Express</strong>. I take pride in taking ideas from a blank canvas all the way through to deployment.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                Whether developing secure admin dashboards, designing tested REST APIs, or fine-tuning cross-browser rendering, 
                I emphasize clean architecture, proactive error handling, and intuitive UX.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 text-left">
                  <div className="text-xs text-slate-400">Current Academic Track</div>
                  <div className="text-sm font-semibold text-white mt-1">BCA (2024 – 2027)</div>
                  <div className="text-[11px] text-indigo-400 mt-0.5">CCSU University</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 text-left">
                  <div className="text-xs text-slate-400">Working Style</div>
                  <div className="text-sm font-semibold text-white mt-1">Agile & Iterative</div>
                  <div className="text-[11px] text-emerald-400 mt-0.5">Fast Learner & Adaptable</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right card grid: 6 pillars of expertise */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {coreCompetencies.map((comp, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/40 hover:bg-slate-900/90 transition-all duration-200 text-left flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-slate-800/90 border border-slate-700/60 flex items-center justify-center mb-3 group-hover:scale-105 group-hover:bg-indigo-950/40 group-hover:border-indigo-500/40 transition-all">
                    {comp.icon}
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {comp.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                    {comp.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800/40 flex items-center gap-1.5 text-[11px] text-slate-500 group-hover:text-indigo-400 transition-colors">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Resume Verified Skill</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
