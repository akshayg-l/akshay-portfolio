import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Copy, Check, MessageSquare, Sparkles, AlertCircle, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [preparedDraft, setPreparedDraft] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedDraft, setCopiedDraft] = useState(false);

  const contactEmail = portfolioData.personal.email || 'akshaygl2526@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validateForm = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please provide your name (at least 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide a message (at least 10 characters).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Generate formatted draft without pretending fake backend transmission
    const subjectLine = formData.subject.trim() || 'Portfolio Inquiry for Akshay G L';
    const bodyContent = `Hello Akshay,\n\n${formData.message.trim()}\n\n---\nFrom: ${formData.name.trim()}\nEmail: ${formData.email.trim()}`;

    setPreparedDraft({
      subject: subjectLine,
      body: bodyContent,
      mailtoUrl: `mailto:${contactEmail}?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(bodyContent)}`,
    });
  };

  const handleCopyDraft = () => {
    if (!preparedDraft) return;
    const fullText = `Subject: ${preparedDraft.subject}\nTo: ${contactEmail}\n\n${preparedDraft.body}`;
    navigator.clipboard.writeText(fullText);
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 2500);
  };

  const handleResetForm = () => {
    setPreparedDraft(null);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setErrors({});
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-950/80 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40 text-cyan-400 text-xs font-mono font-medium mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>DIRECT INQUIRIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Open for internships, junior software development roles, and cybersecurity engineering opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Connect & Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-2xl p-7 sm:p-8 border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-2">Connect Directly</h3>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                Whether you have an internship opportunity, an open junior developer role, or want to discuss CareDesk or the Multi-Layer Firewall project, feel free to reach out.
              </p>

              <div className="space-y-4">
                {/* Email card with copy button */}
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-xs text-slate-500 block font-mono">Email Address</span>
                      <span className="text-sm font-medium text-slate-200 truncate block">
                        {contactEmail}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700 shrink-0"
                    title="Copy Email Address"
                    aria-label="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location card */}
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block font-mono">Location</span>
                    <span className="text-sm font-medium text-slate-200">{portfolioData.personal.location}</span>
                  </div>
                </div>

                {/* Social Quick Links */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3">
                  <a
                    href="https://www.linkedin.com/in/akshay-gujjar-a76146311/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-blue-900/30 border border-slate-800 hover:border-blue-500/40 text-slate-300 hover:text-blue-300 text-xs font-semibold flex items-center justify-center gap-2 transition-all"
                  >
                    <LinkedinIcon className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/akshayg-l"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Recruiter Guarantee Card */}
            <div className="p-5 rounded-2xl bg-blue-950/30 border border-blue-900/40 text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-2 text-cyan-400 font-semibold font-mono">
                <Sparkles className="w-4 h-4" />
                <span>OPPORTUNITIES & ROLES</span>
              </div>
              <p className="leading-relaxed">
                Actively seeking Junior Software Developer, Full-Stack Developer, and Cybersecurity Internships. Responsive to technical evaluations, code reviews, and discussions.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form with Validation */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-7 sm:p-9 border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                <span>Send a Message</span>
              </h3>
              <p className="text-sm text-slate-400 mb-6">
                Fill in the details below to format your message and dispatch via your email client or copy directly.
              </p>

              {preparedDraft ? (
                /* Honest prepared-message state (no fake claims of background email sending) */
                <div className="p-6 rounded-2xl bg-slate-900/90 border border-cyan-500/30 space-y-5 animate-in fade-in duration-200">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30 shrink-0">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">Draft Formatted & Ready</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Client-side message generated. No server relay is pretended. Use the options below to dispatch immediately.
                      </p>
                    </div>
                  </div>

                  <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-2 text-xs font-mono">
                    <div className="text-slate-400">
                      <strong className="text-slate-200">To:</strong> {contactEmail}
                    </div>
                    <div className="text-slate-400">
                      <strong className="text-slate-200">Subject:</strong> {preparedDraft.subject}
                    </div>
                    <div className="pt-2 border-t border-slate-800 text-slate-300 whitespace-pre-wrap">
                      {preparedDraft.body}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href={preparedDraft.mailtoUrl}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-medium text-xs shadow-lg shadow-blue-500/25 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Open in Default Email Client</span>
                    </a>

                    <button
                      onClick={handleCopyDraft}
                      className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors"
                    >
                      {copiedDraft ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      <span>{copiedDraft ? 'Copied to Clipboard!' : 'Copy Formatted Draft'}</span>
                    </button>

                    <button
                      onClick={handleResetForm}
                      className="inline-flex items-center gap-1.5 px-3 py-3 rounded-xl text-slate-400 hover:text-white text-xs transition-colors ml-auto"
                    >
                      <span>New Message</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Interactive Form with Validation */
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: null });
                        }}
                        placeholder="e.g. Recruiter / Hiring Lead"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-900 border ${
                          errors.name ? 'border-rose-500 focus:border-rose-500' : 'border-slate-800 focus:border-cyan-500'
                        } text-white placeholder-slate-500 text-sm focus:outline-none transition-colors`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: null });
                        }}
                        placeholder="recruiter@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-900 border ${
                          errors.email ? 'border-rose-500 focus:border-rose-500' : 'border-slate-800 focus:border-cyan-500'
                        } text-white placeholder-slate-500 text-sm focus:outline-none transition-colors`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                      Subject / Role Focus
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Junior Software Developer / Internship Opportunity"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: null });
                      }}
                      placeholder="Share details regarding the role, interview timeline, or project inquiry..."
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900 border ${
                        errors.message ? 'border-rose-500 focus:border-rose-500' : 'border-slate-800 focus:border-cyan-500'
                      } text-white placeholder-slate-500 text-sm focus:outline-none transition-colors resize-none`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-medium text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:from-blue-500 hover:to-purple-500 transition-all border border-blue-400/30 active:scale-95"
                    >
                      <Send className="w-4 h-4" />
                      <span>Prepare Draft Message</span>
                    </button>

                    <a
                      href={`mailto:${contactEmail}?subject=Inquiry%20regarding%20Akshay%20G%20L`}
                      className="text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors underline decoration-slate-700"
                    >
                      Or open mail client directly ?
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
