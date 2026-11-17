import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CyberTerminal from './components/CyberTerminal';
import Education from './components/Education';
import Coursework from './components/Coursework';
import Profiles from './components/Profiles';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import { ShieldAlert, Home } from 'lucide-react';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [is404, setIs404] = useState(false);

  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === '#404') {
        setIs404(true);
      } else if (is404) {
        setIs404(false);
      }
    };
    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, [is404]);

  if (is404) {
    return (
      <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col items-center justify-center p-6 bg-cyber-grid">
        <div className="max-w-md w-full glass-card rounded-2xl p-8 border border-slate-800 text-center space-y-6 shadow-2xl">
          <div className="w-16 h-16 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center mx-auto text-rose-400">
            <ShieldAlert className="w-8 h-8" />
          </div>
          <div>
            <span className="text-xs font-mono text-rose-400 uppercase tracking-widest block mb-1">
              Error 404 • Access Anomaly
            </span>
            <h1 className="text-3xl font-extrabold text-white">Node Not Found</h1>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              The requested perimeter address does not exist or has been relocated outside the current security boundary.
            </p>
          </div>
          <button
            onClick={() => {
              window.location.hash = '';
              setIs404(false);
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium text-xs shadow-lg shadow-blue-500/25 transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Portfolio Home</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Fixed Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Page Content */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* 2. About Me Section */}
        <About />

        {/* 3. Technical Skills Section */}
        <Skills />

        {/* 4. Featured Projects Section */}
        <Projects />

        {/* 5. Interactive Cybersecurity Terminal */}
        <CyberTerminal />

        {/* 6. Education Section */}
        <Education />

        {/* 7. Relevant Coursework Section */}
        <Coursework />

        {/* 8. Online Profiles (GitHub, LinkedIn, TryHackMe) */}
        <Profiles />

        {/* 9. Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Printable / Downloadable Resume CV Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
