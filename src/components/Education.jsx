import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, CheckCircle } from 'lucide-react';

const Education = () => {
  const educationHistory = [
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      status: 'Pursuing (2024 – 2027)',
      institution: 'Chaudhary Charan Singh University (CCSU)',
      location: 'Uttar Pradesh, India',
      highlights: [
        'Core curriculum in Object-Oriented Programming, Data Structures & Algorithms, and Database Management Systems (DBMS).',
        'Practical labs focusing on Full-Stack Web Development, Computer Networks, and Operating Systems.',
        'Actively applying coursework theory directly into hands-on React and Node.js applications.'
      ],
      current: true,
      badge: 'Undergraduate Degree'
    },
    {
      degree: '12th Standard (Senior Secondary)',
      status: 'Completed 2024',
      institution: 'Uttar Pradesh State Board (UP BOARD)',
      location: 'Uttar Pradesh, India',
      highlights: [
        'Strong academic foundation in Mathematics, Physics, and analytical problem solving.',
        'Developed early passion for computer logic, syntax, and computational thinking.'
      ],
      current: false,
      badge: 'Higher Secondary'
    },
    {
      degree: '10th Standard (Secondary Examination)',
      status: 'Completed 2022',
      institution: 'Uttar Pradesh State Board (UP BOARD)',
      location: 'Uttar Pradesh, India',
      highlights: [
        'Comprehensive foundational education across science, mathematics, and language arts.',
        'Distinguished academic standing and foundational discipline.'
      ],
      current: false,
      badge: 'Secondary School'
    }
  ];

  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-800/50">
            Academic Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
            Education & Qualifications
          </h2>
          <p className="text-slate-400 mt-4 text-base leading-relaxed">
            My formal computer applications training and educational milestones,
            fueling my passion for engineering and continuous technical development.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-3xl mx-auto relative">
          
          {/* Vertical Connecting Line */}
          <div className="absolute left-6 sm:left-8 top-3 bottom-3 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500/50 to-slate-800 hidden sm:block"></div>

          <div className="space-y-8">
            {educationHistory.map((item, idx) => (
              <div 
                key={idx}
                className="relative flex flex-col sm:flex-row items-start sm:gap-8 group text-left"
              >
                {/* Timeline node icon */}
                <div className="hidden sm:flex shrink-0 w-16 h-16 rounded-2xl bg-slate-900 border border-slate-700/80 items-center justify-center shadow-lg group-hover:scale-105 group-hover:border-indigo-500/50 transition-all z-10">
                  {item.current ? (
                    <GraduationCap className="w-8 h-8 text-indigo-400" />
                  ) : (
                    <Award className="w-7 h-7 text-purple-400" />
                  )}
                </div>

                {/* Main Card */}
                <div className="flex-1 w-full p-6 sm:p-7 rounded-2xl bg-slate-900/70 border border-slate-800/90 shadow-xl group-hover:border-indigo-500/40 transition-all">
                  
                  {/* Card Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className={`px-2.5 py-0.5 text-xs font-mono rounded-full font-medium ${
                      item.current 
                        ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-800/50' 
                        : 'bg-slate-800 text-slate-300 border border-slate-700'
                    }`}>
                      {item.badge}
                    </span>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-indigo-400">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.status}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mt-3">
                    {item.degree}
                  </h3>

                  <p className="text-sm font-medium text-indigo-300 mt-1">
                    {item.institution}
                  </p>

                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{item.location}</span>
                  </div>

                  {/* Highlights */}
                  <div className="mt-4 pt-4 border-t border-slate-800/60 space-y-2">
                    {item.highlights.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{point}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Education;
