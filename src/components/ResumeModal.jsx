import React from 'react';
import { motion } from 'framer-motion';
import { X, Printer, GraduationCap, Code2, Briefcase, FileText, ArrowDownToLine, Info } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const { personal, education, projects, coursework } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadTxt = () => {
    const resumeText = `========================================================================
AKSHAY G L - CURRICULUM VITAE
Title: ${personal.title}
Career Objective: ${personal.careerObjective}
Location: ${personal.location}
Email: ${personal.email}
GitHub: https://github.com/akshayg-l
LinkedIn: https://www.linkedin.com/in/akshay-gujjar-a76146311/
TryHackMe: https://tryhackme.com/p/akshaygl2526
========================================================================

EDUCATION
Institution: ${education.institution}
Degree: ${education.degree}
Expected Graduation: ${education.graduationYear}
Current CGPA: ${education.cgpa}
Location: ${education.location}

TECHNICAL SKILLS
- Programming: Python, Java, JavaScript, HTML, CSS
- Development: React, FastAPI, Vite, REST APIs, SQLite
- Cybersecurity: Network Security, Cybersecurity Fundamentals, Kali Linux, Cyber Threat Analysis, Network Forensics
- Tools: Git, GitHub, VS Code, Linux

FEATURED PROJECTS
1. CareDesk – AI Clinic Receptionist
   Technologies: React, Vite, Python, FastAPI, SQLite, Gemini API
   Description: An AI-powered clinic receptionist that helps patients interact with a clinic through voice and text conversations.
   Features:
   - AI voice and text receptionist
   - Appointment booking and management
   - Doctor availability checking
   - Patient registration
   - Admin and receptionist dashboard
   - Emergency query handling
   - Appointment reminder infrastructure

2. AI-Based Safety System for Women Protection
   Description: An AI-driven women safety system designed to improve personal safety through proactive threat prediction and emergency response.
   Features:
   - Threat prediction
   - Emergency alerts
   - Location tracking
   - Legal guidance
   - Emergency response support
   - Automated notifications

3. Cyber Awareness & Security Learning Platform
   Technologies: Node.js, Express.js, SQLite
   Description: A cybersecurity awareness and learning platform designed to help users understand cybersecurity threats through interactive learning and practical activities.
   Features:
   - Cybersecurity quizzes
   - Practical learning labs
   - Attack simulations
   - CAPTCHA and OTP security
   - Behavioral bot detection
   - JWT authentication
   - REST API integration

4. AI-Based Multi-Layer Firewall and Deception System [View More / Academic]
   Technologies: Flutter, Cybersecurity Tools
   Description: Final-year academic cybersecurity project focused on multiple layers of network and application security.
   Modules:
   - Network Firewall
   - Web Application Firewall (WAF)
   - AI Behaviour Firewall
   - Honeypot and deception system
   - Monitoring dashboard
   - Attack logs and alerts

RELEVANT COURSEWORK
- Network Security
- Cybersecurity Fundamentals
- Data Structures & Algorithms
- Object-Oriented Programming
- Web Technologies & REST APIs
- Operating Systems & Linux Architecture
- Database Management Systems (DBMS)
- Cyber Threat Analysis & Network Forensics

========================================================================
Generated from Akshay G L's Developer Portfolio
PDF version available at: /Akshay_GL_Resume.pdf
========================================================================`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Akshay_GL_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.2 }}
        className="w-full max-w-4xl rounded-2xl glass-card bg-[#090d16] border border-slate-700/80 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
      >
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-[#0d1322] border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-cyan-400">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span>Curriculum Vitae</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950 text-cyan-300 border border-blue-800">
                  Verified Candidate Data
                </span>
              </h3>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700"
              title="Print CV"
            >
              <Printer className="w-4 h-4" />
            </button>

            {/* Direct PDF Download */}
            <a
              href="/Akshay_GL_Resume.pdf"
              download="Akshay_GL_Resume.pdf"
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-semibold shadow transition-all border border-blue-400/30"
              title="Download PDF"
            >
              <ArrowDownToLine className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content / Formatted Resume */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-300 print:text-black print:bg-white text-xs sm:text-sm">
          
          {/* Identified Placeholder & Recruiter Summary Banner */}
          <div className="p-3.5 rounded-xl bg-blue-950/40 border border-blue-800/40 text-xs text-blue-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span className="flex items-start gap-2">
              <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>
                <strong>Resume File Identification:</strong> Official PDF is downloadable via the button above (or replace <code>public/Akshay_GL_Resume.pdf</code>). This interactive preview reflects Akshay's verified credentials.
              </span>
            </span>
            <span className="font-mono text-[11px] text-cyan-300 shrink-0 self-start sm:self-auto">
              CGPA: {education.cgpa} • Class of {education.graduationYear}
            </span>
          </div>

          {/* Resume Header */}
          <div className="border-b border-slate-800 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {personal.name}
                </h1>
                <p className="text-sm font-semibold text-cyan-400 mt-0.5">
                  {personal.title}
                </p>
              </div>

              <div className="text-xs text-slate-400 space-y-1 sm:text-right font-mono">
                <div>{personal.location}</div>
                <div className="text-slate-200">{personal.email}</div>
                <div className="text-cyan-400">github.com/akshayg-l</div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </h2>
            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800/80">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                <span className="font-bold text-white text-sm">{education.institution}</span>
                <span className="font-mono text-xs text-cyan-300">Expected: {education.graduationYear}</span>
              </div>
              <div className="text-xs text-slate-300 mb-2">{education.degree}</div>
              <div className="text-xs text-slate-400 flex items-center gap-2 font-mono">
                <span className="font-bold text-white">CGPA: {education.cgpa}</span>
                <span>•</span>
                <span>{education.location}</span>
              </div>
            </div>
          </div>

          {/* Technical Skills - 4 strict categories, NO invented proficiency */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3 flex items-center gap-2">
              <Code2 className="w-4 h-4" />
              <span>Technical Skills</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800/80">
                <strong className="text-slate-200 block mb-1">Programming:</strong>
                <span className="text-slate-400">Python, Java, JavaScript, HTML, CSS</span>
              </div>
              <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800/80">
                <strong className="text-slate-200 block mb-1">Development:</strong>
                <span className="text-slate-400">React, FastAPI, Vite, REST APIs, SQLite</span>
              </div>
              <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800/80">
                <strong className="text-slate-200 block mb-1">Cybersecurity:</strong>
                <span className="text-slate-400">Network Security, Cybersecurity Fundamentals, Kali Linux, Cyber Threat Analysis, Network Forensics</span>
              </div>
              <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800/80">
                <strong className="text-slate-200 block mb-1">Tools:</strong>
                <span className="text-slate-400">Git, GitHub, VS Code, Linux</span>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>Featured Technical Projects</span>
            </h2>
            <div className="space-y-4">
              {projects.map((proj) => (
                <div key={proj.id} className="bg-slate-900/60 p-4 rounded-xl border border-slate-800/80">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <span className="font-bold text-white text-sm">{proj.title}</span>
                    <span className="text-[11px] font-mono text-cyan-300">{proj.projectType}</span>
                  </div>
                  <p className="text-xs text-slate-300 mb-2">{proj.description}</p>
                  
                  <div className="mb-2">
                    <strong className="text-[11px] font-mono text-slate-400 block mb-1">
                      {proj.id === 'firewall-deception' ? 'Security Modules:' : 'Key Features:'}
                    </strong>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                      {(proj.features || proj.modules || []).map((item, idx) => (
                        <li key={idx} className="text-xs text-slate-400 flex items-start gap-1.5">
                          <span className="text-cyan-400">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {proj.techStack && proj.techStack.length > 0 && (
                    <div className="flex flex-wrap gap-1 pt-1">
                      {proj.techStack.map((tech) => (
                        <span key={tech} className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-slate-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Relevant Coursework */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-2 flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span>Academic Coursework</span>
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {coursework.map((c) => (
                <span key={c.name} className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-xs text-slate-300">
                  {c.name}
                </span>
              ))}
            </div>
          </div>

          {/* Online Profiles */}
          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
            <span className="text-slate-500">Verified Profiles:</span>
            <div className="flex items-center space-x-4">
              <a href="https://github.com/akshayg-l" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                github.com/akshayg-l
              </a>
              <a href="https://www.linkedin.com/in/akshay-gujjar-a76146311/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                linkedin.com/in/akshay-gujjar-a76146311
              </a>
              <a href="https://tryhackme.com/p/akshaygl2526" target="_blank" rel="noopener noreferrer" className="text-rose-400 hover:underline">
                tryhackme.com/p/akshaygl2526
              </a>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#0d1322] border-t border-slate-800 flex items-center justify-between">
          <button
            onClick={handleDownloadTxt}
            className="text-xs font-mono text-slate-400 hover:text-white transition-colors underline decoration-slate-700"
          >
            Download Plain Text (.txt)
          </button>

          <div className="flex items-center space-x-2">
            <a
              href="/Akshay_GL_Resume.pdf"
              download="Akshay_GL_Resume.pdf"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-semibold shadow transition-all border border-blue-400/30 flex items-center gap-1.5"
            >
              <ArrowDownToLine className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
