import React from 'react';
import { ArrowUp, Mail, Phone, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

const Footer = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-12 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center font-bold text-white shadow-md">
                GK
              </div>
              <div>
                <span className="font-bold text-lg text-white tracking-tight">Gaurav Kumar</span>
                <span className="block text-xs text-indigo-400 font-mono">Full Stack Developer</span>
              </div>
            </div>
            
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Specialized in building high-performance web applications with React.js, 
              scalable RESTful APIs with Node.js and Express, and structured databases.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:gaurav639652@gmail.com"
                className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="tel:+919599395781"
                className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white">Quick Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-indigo-400 transition-colors">About Background</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-indigo-400 transition-colors">Technical Stack</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-indigo-400 transition-colors">Projects Showcase</a>
              </li>
              <li>
                <a href="#education" className="hover:text-indigo-400 transition-colors">Education & Degrees</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact Information</a>
              </li>
            </ul>
          </div>

          {/* Quick Contact & Actions */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white">Direct Reach</h4>
            <div className="text-xs space-y-1.5 text-slate-400">
              <p className="text-slate-300 font-medium">Ghaziabad, Uttar Pradesh, India</p>
              <p>Phone: +91 9599395781</p>
              <p>Email: gaurav639652@gmail.com</p>
            </div>
            <div className="pt-2">
              <button
                onClick={onOpenResume}
                className="px-3.5 py-2 text-xs font-semibold rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-indigo-300 hover:text-white transition-colors cursor-pointer"
              >
                View / Print Resume
              </button>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Gaurav Kumar. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Built with React & Tailwind CSS
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
