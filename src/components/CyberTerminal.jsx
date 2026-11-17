import React, { useState, useRef, useEffect } from 'react';
import { Terminal, CornerDownLeft, Trash2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function CyberTerminal() {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: "Kali Linux / Defensive Security Shell [v2.4.0-release]" },
    { type: 'system', text: "Target: Akshay G L (CSE Cybersecurity @ ACS College of Engineering)." },
    { type: 'system', text: "Type 'help' or click the quick command chips below to inspect candidate profile." },
  ]);

  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdStr) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setHistory([
        { type: 'system', text: "Terminal reset. Type 'help' for available commands." },
      ]);
      setInputVal('');
      return;
    }

    let response = '';
    const commands = portfolioData.terminalCommands;

    if (trimmed === 'help') {
      response = commands.help;
    } else if (trimmed === 'whoami') {
      response = commands.whoami;
    } else if (trimmed === 'about') {
      response = commands.about;
    } else if (trimmed === 'skills') {
      response = commands.skills;
    } else if (trimmed === 'projects') {
      response = commands.projects;
    } else if (trimmed === 'education') {
      response = commands.education;
    } else if (trimmed === 'coursework') {
      response = commands.coursework;
    } else if (trimmed === 'profiles') {
      response = commands.profiles;
    } else if (trimmed === 'contact') {
      response = commands.contact;
    } else {
      response = `bash: command not found: "${trimmed}". Type 'help' for supported commands.`;
    }

    setHistory((prev) => [
      ...prev,
      { type: 'user', text: cmdStr },
      { type: 'output', text: response },
    ]);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCommand(inputVal);
    }
  };

  const quickCommands = ['help', 'skills', 'projects', 'education', 'coursework', 'profiles', 'contact', 'clear'];

  return (
    <section id="terminal" className="py-20 relative bg-[#07090e] border-t border-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40 text-cyan-400 text-xs font-mono font-medium mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>INTERACTIVE CLI</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Cybersecurity <span className="text-gradient">Console Playground</span>
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Query Akshay's credentials, skills, projects, and coursework via an interactive terminal.
          </p>
        </div>

        {/* Quick Command Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
          <span className="text-xs font-mono text-slate-500 mr-2">Quick Run:</span>
          {quickCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-300 text-xs font-mono transition-all active:scale-95"
            >
              ${cmd}
            </button>
          ))}
        </div>

        {/* Terminal Window Box */}
        <div 
          onClick={() => inputRef.current?.focus()}
          className="rounded-2xl overflow-hidden border border-slate-800 bg-[#090d16] shadow-2xl shadow-black/80 font-mono text-xs sm:text-sm cursor-text"
        >
          {/* Header Bar */}
          <div className="px-4 py-3 bg-[#0d121f] border-b border-slate-800 flex items-center justify-between select-none">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80 hover:opacity-100 transition-opacity" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80 hover:opacity-100 transition-opacity" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80 hover:opacity-100 transition-opacity" />
              <span className="ml-2 text-xs text-slate-400 font-mono">akshay@kali-node:~</span>
            </div>
            <div className="flex items-center space-x-3 text-slate-500 text-xs">
              <span className="hidden sm:inline">bash 5.2 (x86_64)</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleCommand('clear');
                }}
                className="hover:text-slate-300 transition-colors p-1"
                title="Clear screen"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Terminal Screen & Outputs */}
          <div className="p-5 min-h-[300px] max-h-[460px] overflow-y-auto space-y-3">
            {history.map((item, idx) => (
              <div key={idx} className="leading-relaxed">
                {item.type === 'system' && (
                  <div className="text-slate-400 italic flex items-center gap-1.5">
                    <span className="text-cyan-400">?</span>
                    <span>{item.text}</span>
                  </div>
                )}
                {item.type === 'user' && (
                  <div className="flex items-center gap-2 text-slate-200">
                    <span className="text-emerald-400 font-semibold">akshay@kali:~$</span>
                    <span>{item.text}</span>
                  </div>
                )}
                {item.type === 'output' && (
                  <div className="text-slate-300 whitespace-pre-line pl-4 border-l border-slate-800 my-1 font-mono text-xs sm:text-sm text-cyan-200/90">
                    {item.text}
                  </div>
                )}
              </div>
            ))}

            {/* Active Input Line */}
            <div className="flex items-center gap-2 text-slate-200 pt-1">
              <span className="text-emerald-400 font-semibold shrink-0">akshay@kali:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent text-white focus:outline-none font-mono text-xs sm:text-sm border-none p-0"
                placeholder="type a command (e.g. 'help', 'skills', 'projects', 'coursework')..."
                autoComplete="off"
                spellCheck="false"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleCommand(inputVal);
                }}
                className="p-1 text-slate-500 hover:text-cyan-400 transition-colors"
                title="Execute command"
              >
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </div>
            <div ref={terminalEndRef} />
          </div>
        </div>

      </div>
    </section>
  );
}
