import React from 'react';
import { Shield, ArrowUp, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TryHackMeIcon } from './SocialIcons';

const currentYear = new Date().getFullYear();

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070a] border-t border-slate-900 text-slate-400 text-xs py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          
          {/* Logo & Tagline */}
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white border border-blue-400/30">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-white tracking-wider font-mono text-sm">
                AKSHAY<span className="text-cyan-400">.G.L</span>
              </span>
              <p className="text-[11px] text-slate-500 font-mono">
                Full-Stack Developer • Cybersecurity Enthusiast
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-slate-400">
            <a href="#about" className="hover:text-cyan-300 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-300 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-300 transition-colors">Projects</a>
            <a href="#education" className="hover:text-cyan-300 transition-colors">Education</a>
            <a href="#coursework" className="hover:text-cyan-300 transition-colors">Coursework</a>
            <a href="#terminal" className="hover:text-cyan-300 transition-colors">Terminal</a>
            <a href="#profiles" className="hover:text-cyan-300 transition-colors">Profiles</a>
            <a href="#contact" className="hover:text-cyan-300 transition-colors">Contact</a>
            <button
              onClick={onOpenResume}
              className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
            >
              Resume CV
            </button>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center space-x-3">
            <a
              href="https://github.com/akshayg-l"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors border border-slate-800"
              title="GitHub"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/akshay-gujjar-a76146311/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-blue-400 transition-colors border border-slate-800"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="https://tryhackme.com/p/akshaygl2526"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-rose-400 transition-colors border border-slate-800"
              title="TryHackMe"
              aria-label="TryHackMe"
            >
              <TryHackMeIcon className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 text-cyan-400 border border-blue-500/30 transition-all hover:-translate-y-0.5"
              title="Scroll to Top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Credits & Telemetry */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <div>
            © {currentYear} Akshay G L. Built with React, Vite & Tailwind CSS.
          </div>
          <div className="flex items-center space-x-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-slate-400">All systems operational</span>
            <span>•</span>
            <span className="text-slate-400 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-cyan-400" />
              Bengaluru, India
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
