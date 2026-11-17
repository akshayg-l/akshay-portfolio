import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowRight, Download, ArrowDownToLine, MapPin, Lock, Code2, Cpu, Sparkles, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const { personal } = portfolioData;

  return (
    <section className="relative min-h-[94vh] pt-32 pb-20 flex items-center justify-center overflow-hidden bg-cyber-grid">
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/10 to-purple-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-12 -left-12 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status / Availability Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-inner mb-6"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono font-medium text-emerald-300">
                {personal.availability}
              </span>
              <span className="text-slate-600">|</span>
              <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-cyan-400" />
                {personal.location}
              </span>
            </motion.div>

            {/* Name & Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-4">
                Hi, I'm <span className="text-gradient font-black">{personal.name}</span>
              </h1>
              <div className="text-lg sm:text-2xl font-semibold text-slate-300 flex items-center flex-wrap gap-2 mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">
                  Full-Stack Developer
                </span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-300 flex items-center gap-1.5 text-base sm:text-xl">
                  <Lock className="w-4 h-4 text-purple-400 inline" />
                  Cybersecurity Enthusiast
                </span>
              </div>
            </motion.div>

            {/* Elevator Pitch */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mb-8"
            >
              B.E. Computer Science and Engineering student specializing in <strong className="text-slate-200 font-semibold">Cybersecurity</strong> at{' '}
              <strong className="text-slate-200 font-semibold">{personal.college}</strong>, Bengaluru (CGPA: <span className="text-cyan-400 font-mono font-bold">{personal.cgpa}</span>, Class of <span className="text-purple-400 font-mono font-bold">{personal.expectedGraduation}</span>). 
              Targeting <span className="text-blue-300 font-medium">Junior Software Developer / Full-Stack Developer</span> roles by building resilient applications with <span className="text-blue-300 font-medium">React</span> and <span className="text-blue-300 font-medium">FastAPI</span> while engineering multi-layered defensive security solutions, honeypots, and network firewalls.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium text-sm shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all border border-blue-400/30"
              >
                <span>Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/Akshay_GL_Resume.pdf"
                download="Akshay_GL_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-medium text-sm border border-slate-700 hover:border-slate-600 hover:text-white transition-all shadow-md active:scale-[0.98]"
              >
                <ArrowDownToLine className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-slate-300 hover:text-white font-medium text-sm bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 transition-colors"
              >
                <Download className="w-4 h-4 text-purple-400" />
                <span>Preview CV</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl text-slate-400 hover:text-cyan-300 font-medium text-sm hover:bg-slate-800/40 transition-colors"
              >
                <span>Get In Touch</span>
              </a>
            </motion.div>

            {/* Quick Metrics Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-4 sm:gap-8 w-full max-w-lg"
            >
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">{personal.cgpa}</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">B.E. CGPA</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono">{personal.expectedGraduation}</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">Graduation</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-purple-400 font-mono">CSE</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">Cybersecurity</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Cyber-Code Telemetry Card */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full max-w-md rounded-2xl glass-card border border-slate-700/80 shadow-2xl relative overflow-hidden group"
            >
              {/* Subtle top glow bar */}
              <div className="h-1 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500" />
              
              {/* Card Terminal Header */}
              <div className="px-5 py-3.5 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400">akshay-identity.sh</span>
                </div>
                <span className="text-[11px] font-mono text-cyan-400/90 flex items-center gap-1 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-800/40">
                  <Shield className="w-3 h-3 text-cyan-400" />
                  NODE ONLINE
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-5 text-sm font-mono">
                {/* Profile Identity Row */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider">CANDIDATE PROFILE</div>
                    <div className="text-base font-bold text-white">{personal.name}</div>
                    <div className="text-xs text-slate-400">{personal.college}</div>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/30 to-purple-600/30 border border-blue-500/30 flex items-center justify-center text-cyan-300 font-bold text-lg">
                    AG
                  </div>
                </div>

                {/* Core Stack Highlights */}
                <div>
                  <div className="text-xs text-slate-500 mb-2 flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>CORE REPERTOIRE</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['Python', 'Java', 'JavaScript', 'React', 'FastAPI', 'SQLite', 'Kali Linux', 'Git'].map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs text-slate-300 font-sans font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Profile Focus and Academic Details */}
                <div className="bg-slate-950/70 rounded-xl p-3.5 border border-slate-800/90 space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5 text-purple-400" />
                      Academic Major:
                    </span>
                    <span className="text-purple-300 font-medium">B.E. CSE (Cybersecurity)</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                      Academic Standing:
                    </span>
                    <span className="text-cyan-300 font-medium">{personal.cgpa} CGPA (Class of {personal.expectedGraduation})</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                      Featured App:
                    </span>
                    <span className="text-emerald-300 font-medium">CareDesk AI Reception</span>
                  </div>
                </div>

                {/* Quick Link Buttons inside widget */}
                <div className="pt-2 flex items-center justify-between text-xs border-t border-slate-800">
                  <span className="text-slate-500">Profiles:</span>
                  <div className="flex items-center space-x-3 text-slate-400 font-sans">
                    <a
                      href="https://github.com/akshayg-l"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-cyan-400 transition-colors flex items-center gap-1"
                    >
                      <span>GitHub</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <span>•</span>
                    <a
                      href="https://tryhackme.com/p/akshaygl2526"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-rose-400 transition-colors flex items-center gap-1"
                    >
                      <span>TryHackMe</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
