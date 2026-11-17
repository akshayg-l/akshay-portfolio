import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Layout, ShieldCheck, Terminal, Cpu, Search, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const { categories } = portfolioData.skills;

  const getCategoryIcon = (id) => {
    switch (id) {
      case 'programming':
        return <Code2 className="w-4 h-4 text-cyan-400" />;
      case 'development':
        return <Layout className="w-4 h-4 text-blue-400" />;
      case 'cybersecurity':
        return <ShieldCheck className="w-4 h-4 text-purple-400" />;
      case 'tools':
        return <Terminal className="w-4 h-4 text-emerald-400" />;
      default:
        return <Cpu className="w-4 h-4 text-slate-400" />;
    }
  };

  const allSkills = categories.flatMap((cat) =>
    cat.items.map((item) => ({
      ...item,
      categoryId: cat.id,
      categoryTitle: cat.title,
    }))
  );

  const filteredSkills = allSkills.filter((skill) => {
    const matchesCategory = activeCategory === 'all' || skill.categoryId === activeCategory;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.categoryTitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const filterTabs = [
    { id: 'all', label: 'All Skills', count: allSkills.length },
    { id: 'programming', label: 'Programming', count: categories.find((c) => c.id === 'programming')?.items.length },
    { id: 'development', label: 'Development', count: categories.find((c) => c.id === 'development')?.items.length },
    { id: 'cybersecurity', label: 'Cybersecurity', count: categories.find((c) => c.id === 'cybersecurity')?.items.length },
    { id: 'tools', label: 'Tools', count: categories.find((c) => c.id === 'tools')?.items.length },
  ];

  return (
    <section id="skills" className="py-24 relative bg-[#07090e] bg-cyber-dots border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/40 text-cyan-400 text-xs font-mono font-medium mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Categorized technical capabilities grounded in practical coursework, academic laboratories, and full-stack project implementations.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 max-w-4xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center gap-2 border ${
                  activeCategory === tab.id
                    ? 'bg-blue-600 text-white border-blue-400/40 shadow-lg shadow-blue-600/25'
                    : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-white hover:bg-slate-800'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono ${
                    activeCategory === tab.id ? 'bg-blue-700 text-white' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills..."
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="glass-card glass-card-hover rounded-xl p-5 border border-slate-800/90 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                      {getCategoryIcon(skill.categoryId)}
                      <span>{skill.categoryTitle}</span>
                    </span>
                    <span className="w-2 h-2 rounded-full bg-cyan-400/60 group-hover:bg-cyan-400 transition-colors" />
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                    <span>{skill.name}</span>
                  </h3>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/70">
                  <p className="text-xs text-slate-400 leading-relaxed flex items-start gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{skill.description}</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 text-slate-500 text-sm font-mono">
            No technical skills matching "{searchQuery}".
          </div>
        )}

        {/* Four Distinct Category Buckets Snapshot */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat) => {
            return (
              <div
                key={cat.id}
                className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80 flex flex-col"
              >
                <div className="flex items-center gap-2 mb-3">
                  {getCategoryIcon(cat.id)}
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                    {cat.title}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {cat.items.map((item) => (
                    <span
                      key={item.name}
                      className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs text-slate-300 font-medium"
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
