import React from 'react';
import { BookOpen, ShieldCheck, Binary, Cpu, Database, Globe, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Coursework() {
  const { coursework } = portfolioData;

  const getCourseIcon = (category) => {
    switch (category) {
      case 'Cybersecurity':
        return <ShieldCheck className="w-5 h-5 text-purple-400" />;
      case 'Computer Science':
        return <Binary className="w-5 h-5 text-cyan-400" />;
      case 'Development':
        return <Globe className="w-5 h-5 text-blue-400" />;
      case 'Systems':
        return <Cpu className="w-5 h-5 text-emerald-400" />;
      case 'Databases':
        return <Database className="w-5 h-5 text-amber-400" />;
      default:
        return <BookOpen className="w-5 h-5 text-slate-400" />;
    }
  };

  return (
    <section id="coursework" className="py-24 relative bg-[#07090e] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40 text-cyan-400 text-xs font-mono font-medium mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>CURRICULUM & KNOWLEDGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Relevant <span className="text-gradient">Coursework</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Academic foundations covering core computer science principles and specialized cybersecurity defense engineering.
          </p>
        </div>

        {/* Coursework Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {coursework.map((course, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getCourseIcon(course.category)}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400">
                    {course.category}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {course.name}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {course.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                  ACS College of Eng.
                </span>
                <span className="text-cyan-400">Core Subject</span>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Footer Pill */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Comprehensive syllabus aligned with modern software engineering & network security standards.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
