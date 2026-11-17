import React from 'react';
import { ExternalLink, Globe, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TryHackMeIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export default function Profiles() {
  const { profiles } = portfolioData;

  const getProfileIcon = (name) => {
    switch (name.toLowerCase()) {
      case 'github':
        return <GithubIcon className="w-6 h-6 text-white" />;
      case 'linkedin':
        return <LinkedinIcon className="w-6 h-6 text-blue-400" />;
      case 'tryhackme':
        return <TryHackMeIcon className="w-6 h-6 text-rose-400" />;
      default:
        return <Globe className="w-6 h-6 text-slate-300" />;
    }
  };

  return (
    <section id="profiles" className="py-24 relative bg-[#07090e] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40 text-cyan-400 text-xs font-mono font-medium mb-3">
            <Globe className="w-3.5 h-3.5" />
            <span>EXTERNAL PROFILES & VERIFICATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Online <span className="text-gradient">Profiles</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Inspect source code, professional credentials, and hands-on cybersecurity room completions directly.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {profiles.map((prof) => (
            <a
              key={prof.name}
              href={prof.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card glass-card-hover rounded-2xl p-7 border border-slate-800 flex flex-col justify-between group cursor-pointer relative overflow-hidden"
            >
              {/* Subtle accent border on hover */}
              <div 
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r opacity-50 group-hover:opacity-100 transition-opacity"
                style={{
                  backgroundImage: `linear-gradient(to right, ${prof.accent}, transparent)`
                }}
              />

              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform shadow-md">
                    {getProfileIcon(prof.name)}
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
                    {prof.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                  <span>{prof.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </h3>
                
                <div className="text-xs font-mono text-cyan-400 mb-3 font-medium">
                  @{prof.username}
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {prof.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-medium text-slate-300 group-hover:text-cyan-400 transition-colors">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Verified Profile
                </span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
