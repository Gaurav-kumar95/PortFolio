import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, CheckCircle, ExternalLink } from 'lucide-react';

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      {/* Container */}
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            <span className="text-sm font-semibold text-white">Gaurav Kumar - Resume Preview</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Area */}
        <div className="overflow-y-auto p-6 sm:p-10 bg-slate-950/60 print:bg-white print:text-black">
          <div className="max-w-3xl mx-auto bg-white text-slate-900 p-8 sm:p-12 rounded-xl shadow-lg border border-slate-200 text-left font-sans">
            
            {/* Resume Header */}
            <div className="text-center border-b border-slate-300 pb-5">
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 uppercase">
                Gaurav Kumar
              </h1>
              <p className="text-base font-semibold text-indigo-700 mt-1">
                Full Stack Developer
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-slate-600 mt-2">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-slate-500" />
                  Ghaziabad, Uttar Pradesh, India
                </span>
                <span>|</span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3 h-3 text-slate-500" />
                  +91 9599395781
                </span>
                <span>|</span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3 h-3 text-slate-500" />
                  gaurav639652@gmail.com
                </span>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="mt-5">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
                Professional Summary
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 mt-2 leading-relaxed text-justify">
                Full Stack Developer skilled across React (web), with hands-on experience building responsive web 
                applications and cross-platform Android/iOS using JavaScript, Node.js. Proficient in REST API 
                design and integration, database management (MySQL, MongoDB). Comfortable owning a feature 
                end-to-end — from UI development and state management to backend logic and deployment — 
                with a consistent focus on performance, responsive UI/UX, and secure data handling.
              </p>
            </div>

            {/* Core Skills */}
            <div className="mt-5">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
                Core Skills
              </h2>
              <div className="mt-2 space-y-1.5 text-xs sm:text-sm text-slate-800">
                <div>
                  <strong className="text-slate-950">• Frontend:</strong> React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Component-Based Architecture
                </div>
                <div>
                  <strong className="text-slate-950">• Backend:</strong> Node.js, Express.js, REST API Design & Integration
                </div>
                <div>
                  <strong className="text-slate-950">• Databases & Cloud:</strong> Firebase (Firestore, Authentication), MySQL, MongoDB, XAMPP
                </div>
                <div>
                  <strong className="text-slate-950">• Tools & Platforms:</strong> Git, GitHub, Postman, Netlify, VS Code
                </div>
                <div>
                  <strong className="text-slate-950">• Practices:</strong> CRUD Operations, Data Validation & Error Handling, Cross-Browser/Device Compatibility, Agile/Iterative Development.
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className="mt-5">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
                Projects
              </h2>

              {/* Project 1 */}
              <div className="mt-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-950">
                    Phishing Website Detector (Admin Dashboard)
                  </h3>
                  <span className="text-xs font-semibold text-slate-600">July 2026</span>
                </div>
                <p className="text-xs italic text-indigo-700">
                  HTML5, CSS3, JavaScript, Node.js, Express.js, JSON Database
                </p>
                <ul className="list-disc list-inside text-xs sm:text-sm text-slate-700 mt-1.5 space-y-1">
                  <li>Built a responsive admin dashboard using Express.js and JavaScript for tracking students, courses, attendance, and fees.</li>
                  <li>Designed and tested REST APIs supporting full CRUD operations for core data entities.</li>
                  <li>Implemented input validation and error handling to ensure secure and reliable data management.</li>
                </ul>
              </div>

              {/* Project 2 */}
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-950">
                    Portfolio Website
                  </h3>
                  <span className="text-xs font-semibold text-slate-600">January 2026</span>
                </div>
                <p className="text-xs italic text-indigo-700">
                  React, Tailwind CSS, Node.js, Firebase, Netlify
                </p>
                <ul className="list-disc list-inside text-xs sm:text-sm text-slate-700 mt-1.5 space-y-1">
                  <li>Designed and built a personal portfolio website in React and Tailwind CSS to showcase projects and technical skills.</li>
                  <li>Ensured cross-browser compatibility across Chrome, Firefox, and Edge through systematic testing.</li>
                  <li>Deployed the site on Netlify using reusable, modular component architecture for easy maintenance.</li>
                </ul>
              </div>
            </div>

            {/* Education */}
            <div className="mt-5">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
                Education
              </h2>

              <div className="mt-3 space-y-2 text-xs sm:text-sm">
                <div>
                  <div className="flex justify-between font-bold text-slate-950">
                    <span>Bachelor of Computer Applications (BCA) - Pursuing</span>
                    <span>2024 – 2027</span>
                  </div>
                  <div className="italic text-slate-600">Chaudhary Charan Singh University (CCSU)</div>
                </div>

                <div>
                  <div className="flex justify-between font-bold text-slate-950">
                    <span>12th Standard (UP BOARD)</span>
                    <span>2024</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-bold text-slate-950">
                    <span>10th Standard (UP BOARD)</span>
                    <span>2022</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ResumeModal;
