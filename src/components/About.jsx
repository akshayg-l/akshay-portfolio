import React from 'react';
import { GraduationCap, ShieldAlert, Code2, CheckCircle, Terminal, Sparkles, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personal, education } = portfolioData;

  const pillars = [
    {
      title: "Full-Stack Development",
      icon: Code2,
      color: "from-cyan-500/20 to-blue-500/10 border-cyan-500/30 text-cyan-400",
      description:
        "Building responsive, high-performance web applications with React & Vite on the frontend and scalable asynchronous REST APIs with Python & FastAPI on the backend.",
      points: [
        "Component-based architecture with modern React state management and clean UX",
        "Asynchronous FastAPI endpoints and structured SQLite database models",
        "Robust client-server integration with RESTful standards and error boundaries",
      ],
    },
    {
      title: "Defensive Cybersecurity",
      icon: ShieldAlert,
      color: "from-purple-500/20 to-indigo-500/10 border-purple-500/30 text-purple-400",
      description:
        "Formal engineering specialization in cybersecurity at ACS College of Engineering, with focus on defensive network protocols, intrusion prevention, and deception.",
      points: [
        "Multi-layer defense: Network packet filtering, WAF rules, and behavioral anomaly analysis",
        "Honeypot deception systems to divert threats and securely capture forensic signatures",
        "Regular hands-on defensive security labs and room challenges on TryHackMe",
      ],
    },
    {
      title: "Core Software Discipline",
      icon: Terminal,
      color: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-400",
      description:
        "Rooted in object-oriented programming (Java & Python), data structures, algorithms, and strict Git/GitHub collaborative workflows.",
      points: [
        "Solid OOP principles, algorithmic efficiency, and maintainable codebase discipline",
        "Version control best practices: atomic commits, branch isolation, and documentation",
        "Proficient in Linux environment operations and VS Code development tooling",
      ],
    },
  ];

  return (
    <section id="about" className="py-24 relative bg-slate-950/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40 text-cyan-400 text-xs font-mono font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BACKGROUND & IDENTITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient">Akshay G L</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            A developer who combines modern full-stack engineering with proactive cybersecurity defenses.
          </p>
        </div>

        {/* Narrative & Academic Summary Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Main Narrative Card */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-7 sm:p-9 border border-slate-800 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span>The Engineering Philosophy</span>
              </h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                I am a Computer Science & Engineering student at <strong className="text-white">{personal.college}</strong> in Bengaluru, 
                specializing in <strong className="text-cyan-400">Cybersecurity</strong> (Expected Graduation: <strong>{personal.expectedGraduation}</strong>, current CGPA: <strong>{personal.cgpa} / 10.0</strong>).
              </p>
              <p className="text-slate-400 leading-relaxed mb-4">
                My career goal is to work as a <strong className="text-white">Junior Software Developer / Full-Stack Developer</strong>, 
                writing clean, high-performance code while applying a security-first mindset. From engineering <span className="text-slate-200 font-medium">CareDesk</span>—an AI clinic receptionist web app built with React, FastAPI, SQLite, and voice/text interaction—to designing an 
                <span className="text-slate-200 font-medium"> AI-Based Multi-Layer Firewall and Deception System</span> incorporating network filtering, WAF, AI behavioral analysis, and honeypots, I build software that is fast, usable, and defensively resilient.
              </p>
              <p className="text-slate-400 leading-relaxed">
                I actively practice cybersecurity challenges on 
                <a 
                  href="https://tryhackme.com/p/akshaygl2526" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-rose-400 font-mono hover:underline ml-1"
                >
                  TryHackMe
                </a> and maintain all my code repositories openly on 
                <a 
                  href="https://github.com/akshayg-l" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-cyan-400 font-mono hover:underline ml-1"
                >
                  GitHub
                </a>.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle className="w-4 h-4" /> Ready for Internships & Junior Roles
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                {personal.location}
              </span>
            </div>
          </div>

          {/* Academic Profile Card */}
          <div className="lg:col-span-5 glass-card rounded-2xl p-7 sm:p-9 border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-cyan-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-blue-950/60 text-cyan-300 text-xs font-mono border border-blue-800/50">
                  Undergraduate
                </span>
              </div>

              <h4 className="text-lg font-bold text-white mb-1">{education.institution}</h4>
              <p className="text-sm text-cyan-400 font-medium mb-4">{education.degree}</p>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center py-2 border-b border-slate-800/70 text-sm">
                  <span className="text-slate-400">Academic Standing</span>
                  <span className="text-white font-mono font-bold">{education.cgpa} CGPA</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-800/70 text-sm">
                  <span className="text-slate-400">Expected Graduation</span>
                  <span className="text-white font-mono font-bold">{education.graduationYear}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-800/70 text-sm">
                  <span className="text-slate-400">Location</span>
                  <span className="text-slate-200">{education.location}</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/80 rounded-xl p-4 border border-slate-800 text-xs text-slate-400">
              <strong className="text-slate-200 block mb-1 font-semibold">Recruiter Summary:</strong>
              Dual-competency profile possessing both practical full-stack web engineering skills (Python, React, FastAPI, SQLite) and formal academic cybersecurity grounding.
            </div>
          </div>

        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="glass-card glass-card-hover rounded-2xl p-7 border border-slate-800 flex flex-col"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-5 border`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{pillar.title}</h3>
                <p className="text-sm text-slate-400 mb-5 leading-relaxed">{pillar.description}</p>
                
                <ul className="mt-auto space-y-2.5 pt-4 border-t border-slate-800/80">
                  {pillar.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
