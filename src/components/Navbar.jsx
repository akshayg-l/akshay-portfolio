import React, { useState, useEffect } from 'react';
import { Shield, Menu, X, FileText, ArrowDownToLine } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TryHackMeIcon } from './SocialIcons';

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Coursework', href: '#coursework' },
    { name: 'Terminal', href: '#terminal' },
    { name: 'Profiles', href: '#profiles' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07090e]/95 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Identity */}
          <a
            href="#"
            className="flex items-center space-x-3 group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/25 border border-blue-400/30 group-hover:scale-105 transition-transform">
              <Shield className="w-5 h-5 text-white" />
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#07090e]" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-wider text-white flex items-center gap-1 font-mono">
                AKSHAY<span className="text-cyan-400">.G.L</span>
              </span>
              <span className="text-[10px] text-slate-400 font-mono tracking-tight flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                B.E. CSE (Cybersecurity) '27
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-xs xl:text-sm font-medium text-slate-300 hover:text-cyan-300 transition-colors rounded-lg hover:bg-slate-800/60"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-2.5">
            {/* Quick Profile Links */}
            <a
              href="https://github.com/akshayg-l"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/80 rounded-lg transition-colors border border-transparent hover:border-slate-700"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/akshay-gujjar-a76146311/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-blue-400 hover:bg-slate-800/80 rounded-lg transition-colors border border-transparent hover:border-slate-700"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="https://tryhackme.com/p/akshaygl2526"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-rose-400 hover:bg-slate-800/80 rounded-lg transition-colors border border-transparent hover:border-slate-700"
              title="TryHackMe Profile"
              aria-label="TryHackMe Profile"
            >
              <TryHackMeIcon className="w-4 h-4" />
            </a>

            {/* Direct PDF Download Link */}
            <a
              href="/Akshay_GL_Resume.pdf"
              download="Akshay_GL_Resume.pdf"
              className="flex items-center space-x-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-600 transition-all shadow-sm active:scale-95"
              title="Download Resume PDF directly"
            >
              <ArrowDownToLine className="w-3.5 h-3.5 text-cyan-400" />
              <span>Resume PDF</span>
            </a>

            {/* Resume Preview Modal Trigger */}
            <button
              onClick={onOpenResume}
              className="flex items-center space-x-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-md shadow-blue-500/20 hover:shadow-blue-500/40 transition-all border border-blue-400/30 active:scale-95"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Preview CV</span>
            </button>
          </div>

          {/* Mobile Menu Actions */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={onOpenResume}
              className="p-2 text-xs font-semibold rounded-lg bg-blue-600 text-white border border-blue-400/30"
              title="Preview CV"
            >
              <FileText className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl bg-[#090d16]/98 border border-slate-800 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-2.5 text-sm font-medium text-slate-300 hover:text-cyan-300 hover:bg-slate-900/90 rounded-xl transition-colors"
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <a
                      href="https://github.com/akshayg-l"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 text-slate-400 hover:text-white rounded-xl bg-slate-900 border border-slate-800"
                      aria-label="GitHub"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/akshay-gujjar-a76146311/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 text-slate-400 hover:text-blue-400 rounded-xl bg-slate-900 border border-slate-800"
                      aria-label="LinkedIn"
                    >
                      <LinkedinIcon className="w-4 h-4" />
                    </a>
                    <a
                      href="https://tryhackme.com/p/akshaygl2526"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 text-slate-400 hover:text-rose-400 rounded-xl bg-slate-900 border border-slate-800"
                      aria-label="TryHackMe"
                    >
                      <TryHackMeIcon className="w-4 h-4" />
                    </a>
                  </div>

                  <a
                    href="/Akshay_GL_Resume.pdf"
                    download="Akshay_GL_Resume.pdf"
                    className="flex items-center space-x-1.5 px-3 py-2 text-xs font-semibold rounded-xl bg-slate-900 border border-slate-700 text-slate-200"
                  >
                    <ArrowDownToLine className="w-3.5 h-3.5 text-cyan-400" />
                    <span>PDF</span>
                  </a>
                </div>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 text-xs font-semibold rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Preview Full Resume</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
