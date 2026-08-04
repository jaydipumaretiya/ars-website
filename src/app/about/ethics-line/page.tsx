"use client";

import { useState } from "react";
import { ShieldCheck, Send, CheckCircle2, AlertTriangle, Lock } from "lucide-react";

export default function EthicsLinePage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    reportDetails: "",
    isAnonymous: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        reportDetails: "",
        isAnonymous: true,
      });
    }, 5000);
  };

  return (
    <div className="space-y-16 pb-20">
      <section className="relative py-16 bg-radial-gradient border-b border-white/10 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-extrabold text-[#00ff01] uppercase tracking-widest px-3 py-1 bg-[#00ff01]/10 rounded-full border border-[#00ff01]/30 inline-block">
            Confidential Reporting
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white">
            ETHICS LINE & COMPLIANCE HOTLINE
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto">
            Act Right Security is committed to absolute integrity. Use this confidential hotline to report ethics concerns, officer misconduct, or compliance issues directly to executive management.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel border border-[#00ff01]/30 rounded-3xl p-8 sm:p-12 space-y-6">
          <div className="flex items-center space-x-3 text-xs text-[#00ff01] bg-[#00ff01]/10 p-4 rounded-xl border border-[#00ff01]/30">
            <Lock className="w-5 h-5 shrink-0" />
            <span>Reports submitted here are sent directly to the Act Right Security Executive Ethics Board and can be submitted anonymously.</span>
          </div>

          {submitted ? (
            <div className="bg-[#00ff01]/10 border border-[#00ff01] text-[#00ff01] p-8 rounded-2xl text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 mx-auto" />
              <h3 className="text-xl font-bold">Report Submitted Successfully</h3>
              <p className="text-xs text-slate-300">
                Your report has been logged confidentially for immediate executive review.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="anon"
                  checked={formData.isAnonymous}
                  onChange={(e) => setFormData({ ...formData, isAnonymous: e.target.checked })}
                  className="rounded accent-[#00ff01]"
                />
                <label htmlFor="anon" className="text-xs text-slate-300 font-bold">
                  Submit Anonymously (Do not require name or email)
                </label>
              </div>

              {!formData.isAnonymous && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1">Your Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Optional"
                      className="w-full bg-[#0c0f17] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#00ff01]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Optional"
                      className="w-full bg-[#0c0f17] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#00ff01]"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Subject / Location</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Specify location, shift, or officer name..."
                  className="w-full bg-[#0c0f17] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#00ff01]"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Detailed Incident Description</label>
                <textarea
                  rows={5}
                  required
                  value={formData.reportDetails}
                  onChange={(e) => setFormData({ ...formData, reportDetails: e.target.value })}
                  placeholder="Provide all relevant details regarding the incident or ethics concern..."
                  className="w-full bg-[#0c0f17] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#00ff01]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#00ff01] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-[#00cc01] transition-all flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Confidential Ethics Report</span>
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
