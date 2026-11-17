import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layers,
  CheckCircle,
  ArrowUpRight,
  Cpu,
  Eye,
  X,
  Sparkles,
  ChevronDown,
  ShieldAlert,
  Terminal,
  Activity,
  ShieldCheck,
  ExternalLink,
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const { projects } = portfolioData;

  const mainProjects = projects
    .filter((p) => p.isMain !== false)
    .sort((a, b) => (a.order || 0) - (b.order || 0));

  const additionalProjects = projects.filter((p) => p.isMain === false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    if (selectedProject) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const getProjectVisualIcon = (id) => {
    switch (id) {
      case 'caredesk':
        return <Activity className="w-5 h-5 text-cyan-400" />;
      case 'women-safety':
        return <ShieldAlert className="w-5 h-5 text-rose-400" />;
      case 'cyber-awareness':
        return <Terminal className="w-5 h-5 text-teal-400" />;
      case 'firewall-deception':
        return <ShieldCheck className="w-5 h-5 text-purple-400" />;
      default:
        return <Layers className="w-5 h-5 text-blue-400" />;
    }
  };

  const renderProjectCard = (proj, isAdditional = false) => {
    const hasTechStack = Array.isArray(proj.techStack) && proj.techStack.length > 0;
    const hasGithub = typeof proj.githubUrl === 'string' && proj.githubUrl.trim().length > 0;
    const hasLiveDemo = typeof proj.liveDemoUrl === 'string' && proj.liveDemoUrl.trim().length > 0;
    const featuresList = proj.features || proj.modules || [];

    return (
      <div
        key={proj.id}
        className={`glass-card rounded-2xl border border-slate-800/90 overflow-hidden flex flex-col justify-between group hover:border-slate-700 transition-all duration-300 relative ${
          isAdditional ? 'max-w-4xl mx-auto w-full' : ''
        }`}
      >
        {/* Accent Glow Top Border */}
        <div
          className="h-1 w-full bg-gradient-to-r"
          style={{
            backgroundImage:
              proj.id === 'caredesk'
                ? 'linear-gradient(to right, #38bdf8, #6366f1, #06b6d4)'
                : proj.id === 'women-safety'
                ? 'linear-gradient(to right, #f43f5e, #ec4899, #a855f7)'
                : proj.id === 'cyber-awareness'
                ? 'linear-gradient(to right, #14b8a6, #06b6d4, #3b82f6)'
                : 'linear-gradient(to right, #a855f7, #6366f1, #3b82f6)',
          }}
        />

        <div className="p-6 sm:p-7 flex-1 flex flex-col">
          {/* Header Metadata Pill & Icon */}
          <div className="flex items-center justify-between gap-2 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 shadow-inner">
                {getProjectVisualIcon(proj.id)}
              </div>
              <span className="px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-mono text-cyan-300 font-medium">
                {proj.category}
              </span>
            </div>

            <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{proj.projectType}</span>
            </span>
          </div>

          {/* Title & Description */}
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
            {proj.title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
            {proj.description}
          </p>

          {/* Key Features List */}
          <div className="mb-6 space-y-2">
            <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>
                {proj.id === 'firewall-deception'
                  ? 'Core Defensive Modules'
                  : 'Important Features'}
              </span>
            </div>

            {featuresList.slice(0, 5).map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
            {featuresList.length > 5 && (
              <div className="text-[11px] text-slate-500 font-mono pl-6">
                + {featuresList.length - 5} more capabilities (view details)
              </div>
            )}
          </div>

          {/* Technology Badges (Only where verified) */}
          <div className="mt-auto pt-5 border-t border-slate-800/80">
            <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-2">
              {hasTechStack ? 'Verified Technologies' : 'Stack Specification'}
            </div>
            {hasTechStack ? (
              <div className="flex flex-wrap gap-1.5">
                {proj.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            ) : (
              <div className="text-xs text-slate-500 italic font-mono">
                Architecture & safety protocol specifications (view deep dive)
              </div>
            )}
          </div>
        </div>

        {/* Card Action Buttons */}
        <div className="px-6 py-4 bg-slate-950/90 border-t border-slate-800/80 flex items-center justify-between gap-3 flex-wrap">
          <button
            onClick={() => setSelectedProject(proj)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors py-1.5 px-3 rounded-lg hover:bg-slate-900 border border-transparent hover:border-slate-800"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Architecture Deep Dive</span>
          </button>

          <div className="flex items-center gap-2">
            {hasGithub && (
              <a
                href={proj.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-medium border border-slate-700 hover:border-slate-600 transition-all"
                title="View GitHub Repository"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Repository</span>
                <ArrowUpRight className="w-3 h-3 text-slate-400" />
              </a>
            )}

            {hasLiveDemo && (
              <a
                href={proj.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 text-cyan-300 text-xs font-medium border border-blue-500/40 transition-all"
                title="Open Live Application"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-24 relative bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40 text-cyan-400 text-xs font-mono font-medium mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>FEATURED SYSTEMS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Engineered systems demonstrating AI integration, full-stack application development, proactive safety, and cybersecurity architecture.
          </p>
        </div>

        {/* 1. Main 3 Projects Grid (Prominently displayed in exact order) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-14">
          {mainProjects.map((proj) => renderProjectCard(proj, false))}
        </div>

        {/* 2. "View More Projects" Expandable Section */}
        {additionalProjects.length > 0 && (
          <div className="max-w-4xl mx-auto">
            {/* View More Trigger Button Banner */}
            <div className="text-center mb-6">
              <button
                onClick={() => setShowMore(!showMore)}
                aria-expanded={showMore}
                className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl glass-card border border-slate-800 hover:border-purple-500/50 hover:bg-slate-900/90 text-slate-200 transition-all shadow-lg shadow-black/40 cursor-pointer"
              >
                <div className="w-8 h-8 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-semibold text-white flex items-center gap-2">
                    <span>{showMore ? 'Hide Additional Projects' : 'View More Projects'}</span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-purple-950 border border-purple-800/60 text-purple-300">
                      Academic Cybersecurity System
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono">
                    {showMore ? 'Collapse archived projects' : 'Inspect AI Multi-Layer Firewall and Deception System'}
                  </div>
                </div>
                <div className="ml-2 w-7 h-7 rounded-lg bg-slate-800/80 flex items-center justify-center text-slate-400 group-hover:text-white transition-colors">
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      showMore ? 'rotate-180 text-cyan-400' : ''
                    }`}
                  />
                </div>
              </button>
            </div>

            {/* Expandable Project Display */}
            <AnimatePresence>
              {showMore && (
                <motion.div
                  initial={{ opacity: 0, y: 15, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: 'auto' }}
                  exit={{ opacity: 0, y: 10, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden pt-2"
                >
                  <div className="space-y-6">
                    {additionalProjects.map((proj) => renderProjectCard(proj, true))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* Project Architecture Deep Dive Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.2 }}
                className="w-full max-w-3xl rounded-2xl glass-card bg-[#090d16] border border-slate-800 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
              >
                {/* Modal Header */}
                <div className="px-6 py-5 border-b border-slate-800 flex items-center justify-between bg-slate-900/70">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400">
                      {getProjectVisualIcon(selectedProject.id)}
                    </div>
                    <div>
                      <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-0.5">
                        {selectedProject.category}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {selectedProject.title}
                      </h3>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Body */}
                <div className="p-6 overflow-y-auto space-y-6 text-sm">
                  {/* Overview */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                      System Overview & Objective
                    </h4>
                    <p className="text-slate-300 leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Technology Used (If Verified) */}
                  {Array.isArray(selectedProject.techStack) &&
                    selectedProject.techStack.length > 0 && (
                      <div>
                        <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                          Verified Technologies & Modules
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-cyan-300 font-mono text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                  {/* Architecture Breakdown */}
                  {Array.isArray(selectedProject.architecture) &&
                    selectedProject.architecture.length > 0 && (
                      <div>
                        <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                          <Cpu className="w-4 h-4 text-cyan-400" />
                          <span>Architecture & Modular Layers</span>
                        </h4>
                        <div className="space-y-3">
                          {selectedProject.architecture.map((layer, idx) => (
                            <div
                              key={idx}
                              className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/90 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                            >
                              <div>
                                <div className="font-semibold text-white text-sm">
                                  {layer.layer}
                                </div>
                                <div className="text-xs text-slate-400 mt-0.5">
                                  {layer.details}
                                </div>
                              </div>
                              <span className="px-2.5 py-1 rounded bg-slate-800 text-cyan-300 font-mono text-xs border border-slate-700 shrink-0 self-start sm:self-auto">
                                {layer.tech}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                  {/* Full List of Features / Modules */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                      {selectedProject.id === 'firewall-deception'
                        ? 'Core Defensive Modules'
                        : 'Key Features & Capabilities'}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {(selectedProject.features || selectedProject.modules || []).map(
                        (item, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2.5 text-xs text-slate-300 bg-slate-900/50 p-2.5 rounded-lg border border-slate-800/60"
                          >
                            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* Recruiter Technical Takeaway */}
                  <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-800/40 text-xs text-slate-300">
                    <strong className="text-cyan-300 block mb-1">
                      Recruiter Engineering Note:
                    </strong>
                    {selectedProject.id === 'caredesk'
                      ? 'Demonstrates full-stack fluency in asynchronous Python (FastAPI), modern component UX (React), and practical generative AI conversational integration.'
                      : selectedProject.id === 'women-safety'
                      ? 'Emphasizes proactive safety design, location intelligence, and automated emergency telemetry workflows for personal defense.'
                      : selectedProject.id === 'cyber-awareness'
                      ? 'Highlights hands-on cybersecurity education engineering, interactive sandbox isolation, JWT authentication, and zero-trust perimeter defense.'
                      : 'Showcases multi-layer defensive cybersecurity engineering spanning network packet filtering, application-layer WAF rules, anomaly detection, and deception.'}
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="px-6 py-4 bg-slate-900/60 border-t border-slate-800 flex items-center justify-between">
                  {typeof selectedProject.githubUrl === 'string' &&
                  selectedProject.githubUrl.trim().length > 0 ? (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>View Repository on GitHub</span>
                    </a>
                  ) : (
                    <span className="text-xs font-mono text-slate-500">
                      Verified Academic Portfolio Implementation
                    </span>
                  )}
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium transition-colors"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
