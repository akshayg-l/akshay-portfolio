import React from 'react';
import { GraduationCap, Calendar, Award, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 relative bg-slate-950/70 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40 text-cyan-400 text-xs font-mono font-medium mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & <span className="text-gradient">Academics</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Formal technical education combining Computer Science fundamentals with specialized Cybersecurity curriculum.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="max-w-4xl mx-auto glass-card rounded-2xl p-8 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Affiliated Engineering Institution</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                {education.institution}
              </h3>
              <p className="text-base text-slate-300 font-medium mt-1">
                {education.degree}
              </p>
              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono mt-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{education.location}</span>
              </div>
            </div>

            <div className="flex flex-row md:flex-col items-center md:items-end justify-between gap-3">
              <div className="px-5 py-2.5 rounded-xl bg-blue-950/60 border border-blue-800/60 text-center">
                <span className="text-xs text-slate-400 block font-mono">Academic CGPA</span>
                <span className="text-2xl font-black text-white font-mono">{education.cgpa}</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                <span>Expected: {education.graduationYear}</span>
              </div>
            </div>
          </div>

          {/* Academic Highlights & Specialization */}
          <div className="pt-8">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
              <Award className="w-4 h-4 text-purple-400" />
              <span>Program Highlights & Lab Specializations</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {education.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recruiter Evaluation Banner */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono flex-wrap gap-2">
            <span>ACS College of Engineering • Bengaluru, India</span>
            <span className="text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
              Class of {education.graduationYear} (Active Student)
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
