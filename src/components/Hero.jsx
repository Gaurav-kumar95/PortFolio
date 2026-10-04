import React, { useState } from 'react';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Check, 
  Copy, 
  Terminal, 
  Sparkles, 
  Code2, 
  Database, 
  Server,
  Layers
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

const Hero = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('gaurav639652@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden">
      {/* Background ambient glowing orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none -z-10 animate-glow"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[110px] pointer-events-none -z-10"></div>

      {/* Subtle grid pattern background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-indigo-500/30 text-indigo-300 text-xs font-medium shadow-sm backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Full-time Roles & Projects</span>
            </div>

            {/* Main Title */}
            <div className="space-y-2">
              <h2 className="text-sm sm:text-base font-semibold uppercase tracking-wider text-indigo-400 font-mono">
                Full Stack Developer
              </h2>
              <h1 className="text-4xl sm:text-6xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                Hi, I'm <span className="text-gradient">Gaurav Kumar</span>
              </h1>
            </div>

            {/* Elevator Pitch from Resume */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Full Stack Developer skilled in <strong className="text-white font-medium">React.js</strong>,{' '}
              <strong className="text-white font-medium">Node.js</strong>, and{' '}
              <strong className="text-white font-medium">Express.js</strong>. Experienced in engineering responsive 
              web applications, designing resilient <strong className="text-white font-medium">REST APIs</strong>, 
              and managing databases like <strong className="text-white font-medium">MySQL, MongoDB & Firebase</strong> with an eye for 
              performance and clean architecture.
            </p>

            {/* Contact quick metadata pill strip */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-rose-400" />
                Ghaziabad, Uttar Pradesh, India
              </span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <a 
                href="tel:+919599395781" 
                className="flex items-center gap-1.5 hover:text-indigo-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                +91 9599395781
              </a>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <button 
                onClick={copyEmail}
                className="flex items-center gap-1.5 hover:text-indigo-400 transition-colors group cursor-pointer"
                title="Click to copy email"
              >
                <Mail className="w-4 h-4 text-sky-400" />
                <span>gaurav639652@gmail.com</span>
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3 h-3 text-slate-500 group-hover:text-slate-300" />
                )}
              </button>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700 hover:border-indigo-500/50 hover:text-white transition-all duration-200 cursor-pointer"
              >
                <Download className="w-4 h-4 text-indigo-400" />
                <span>Resume / CV</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-300 hover:text-white hover:bg-slate-900/60 border border-transparent hover:border-slate-800 transition-all duration-200"
              >
                <span>Let's Talk</span>
              </a>
            </div>

            {/* Social Links & Trust Indicators */}
            <div className="pt-4 flex items-center gap-4">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-mono">Connect:</span>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:gaurav639652@gmail.com"
                className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                aria-label="Email Gaurav"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Code Terminal & Tech Preview */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Terminal Window Card */}
              <div className="rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-xl overflow-hidden">
                {/* Window Header */}
                <div className="px-4 py-3 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                    <span className="ml-2 text-xs font-mono text-slate-400">developer.profile.js</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800/40">
                    <Terminal className="w-3 h-3" />
                    <span>node v20+</span>
                  </div>
                </div>

                {/* Code Content */}
                <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed text-left text-slate-300 overflow-x-auto space-y-1">
                  <div>
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-blue-400">developer</span>{' '}
                    <span className="text-slate-400">=</span>{' '}
                    <span className="text-slate-400">{'{'}</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">name:</span>{' '}
                    <span className="text-emerald-300">'Gaurav Kumar'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">title:</span>{' '}
                    <span className="text-emerald-300">'Full Stack Developer'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">education:</span>{' '}
                    <span className="text-emerald-300">'BCA (2024-2027) @ CCSU'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">location:</span>{' '}
                    <span className="text-emerald-300">'Ghaziabad, UP, India'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">frontend:</span>{' '}
                    <span className="text-slate-400">[</span>
                    <span className="text-amber-300">'React.js'</span>,{' '}
                    <span className="text-amber-300">'Tailwind CSS'</span>,{' '}
                    <span className="text-amber-300">'JavaScript ES6+'</span>
                    <span className="text-slate-400">]</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">backend:</span>{' '}
                    <span className="text-slate-400">[</span>
                    <span className="text-amber-300">'Node.js'</span>,{' '}
                    <span className="text-amber-300">'Express.js'</span>,{' '}
                    <span className="text-amber-300">'REST APIs'</span>
                    <span className="text-slate-400">]</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">databases:</span>{' '}
                    <span className="text-slate-400">[</span>
                    <span className="text-amber-300">'MongoDB'</span>,{' '}
                    <span className="text-amber-300">'MySQL'</span>,{' '}
                    <span className="text-amber-300">'Firebase'</span>
                    <span className="text-slate-400">]</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">focus:</span>{' '}
                    <span className="text-sky-300">'End-to-End Scalable Web Applications'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">isOpenToHire:</span>{' '}
                    <span className="text-purple-400">true</span>
                  </div>
                  <div>
                    <span className="text-slate-400">{'}'}</span>;
                  </div>
                </div>

                {/* Footer preview stats bar inside card */}
                <div className="bg-slate-950/60 p-4 border-t border-slate-800/80 grid grid-cols-3 gap-2 text-center">
                  <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800/60">
                    <div className="text-xs text-slate-400">Frontend</div>
                    <div className="text-sm font-bold text-indigo-400">React + Tailwind</div>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800/60">
                    <div className="text-xs text-slate-400">Backend</div>
                    <div className="text-sm font-bold text-emerald-400">Node + Express</div>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800/60">
                    <div className="text-xs text-slate-400">Databases</div>
                    <div className="text-sm font-bold text-purple-400">SQL & NoSQL</div>
                  </div>
                </div>
              </div>

              {/* Floating tech badge 1 */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-[#0e1626] border border-indigo-500/30 rounded-xl px-4 py-2.5 shadow-xl items-center gap-3 backdrop-blur-md">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                  <Code2 className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[11px] text-slate-400">Architecture</p>
                  <p className="text-xs font-bold text-white">Modular & Clean</p>
                </div>
              </div>

              {/* Floating tech badge 2 */}
              <div className="hidden sm:flex absolute -top-5 -right-5 bg-[#0e1626] border border-purple-500/30 rounded-xl px-4 py-2.5 shadow-xl items-center gap-3 backdrop-blur-md">
                <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center">
                  <Server className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[11px] text-slate-400">APIs & Logic</p>
                  <p className="text-xs font-bold text-white">Full CRUD Operations</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Highlight strip under hero */}
        <div className="mt-16 pt-10 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">BCA</h3>
            <p className="text-xs text-slate-400 mt-1">Pursuing (2024–2027) CCSU</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <h3 className="text-2xl sm:text-3xl font-bold text-indigo-400">Full Stack</h3>
            <p className="text-xs text-slate-400 mt-1">UI + Server + Database</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <h3 className="text-2xl sm:text-3xl font-bold text-emerald-400">100%</h3>
            <p className="text-xs text-slate-400 mt-1">Cross-Browser Compatible</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
            <h3 className="text-2xl sm:text-3xl font-bold text-purple-400">REST APIs</h3>
            <p className="text-xs text-slate-400 mt-1">Robust CRUD & Error Handling</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
