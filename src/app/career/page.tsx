"use client";

import { useState } from "react";
import { Briefcase, Send, CheckCircle2, UserCheck, Shield, Upload } from "lucide-react";

export default function CareerPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "Armed Security Officer",
    experience: "1-3 Years",
    resumeName: "",
    coverLetter: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        position: "Armed Security Officer",
        experience: "1-3 Years",
        resumeName: "",
        coverLetter: "",
      });
    }, 5000);
  };

  const jobs = [
    { title: "Armed Security Officer", type: "Full-Time", location: "Manchester, NH / Newark, NJ", exp: "2+ Years Exp / Guard License Required" },
    { title: "Unarmed Security Guard", type: "Full-Time / Part-Time", location: "Multi-State Outposts", exp: "Customer Service & Clean Record" },
    { title: "Mobile Patrol Driver", type: "Full-Time (Night Shift)", location: "Regional Coverage", exp: "Valid Driver's License & Clean Driving Record" },
    { title: "Event Security Guard", type: "Flexible Shifts", location: "Regional Arenas & Venues", exp: "Crowd Control & Guest Relations" },
    { title: "24/7 Dispatch Operator", type: "Full-Time", location: "Headquarters (Newark, NJ)", exp: "Radio Dispatch & Computer Literacy" },
  ];

  return (
    <div className="space-y-16 pb-20">
      <section className="relative py-16 bg-radial-gradient border-b border-white/10 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-extrabold text-[#00ff01] uppercase tracking-widest px-3 py-1 bg-[#00ff01]/10 rounded-full border border-[#00ff01]/30 inline-block">
            Join Our Security Team
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white">
            CAREERS AT ACT RIGHT SECURITY
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto">
            Act Right Security is among the top-leading quality security providers. Join a reputable employer committed to a diverse, equal-opportunity workplace.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Open Positions Grid */}
        <div className="space-y-6">
          <h2 className="text-2xl font-black text-white border-b border-white/10 pb-3 flex items-center">
            <Briefcase className="w-5 h-5 text-[#00ff01] mr-2" />
            Open Security Positions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((j, i) => (
              <div key={i} className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-[#00ff01] bg-[#00ff01]/10 px-2.5 py-0.5 rounded border border-[#00ff01]/30">
                    {j.type}
                  </span>
                  <h3 className="text-lg font-bold text-white">{j.title}</h3>
                  <p className="text-xs text-slate-400">{j.location}</p>
                  <p className="text-xs font-semibold text-slate-300 pt-1">{j.exp}</p>
                </div>
                <button
                  onClick={() => setFormData({ ...formData, position: j.title })}
                  className="w-full py-2 bg-white/5 border border-white/10 text-xs font-bold text-slate-200 hover:bg-[#00ff01] hover:text-black transition-all rounded-xl mt-4"
                >
                  Apply For This Role
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Online Application Form */}
        <div className="glass-panel border border-[#00ff01]/30 rounded-3xl p-8 sm:p-12 space-y-6 max-w-3xl mx-auto">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-black text-white">ONLINE JOB APPLICATION</h2>
            <p className="text-xs text-slate-400">Fill out your details below to apply for a security officer position.</p>
          </div>

          {submitted ? (
            <div className="bg-[#00ff01]/10 border border-[#00ff01] text-[#00ff01] p-8 rounded-2xl text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 mx-auto" />
              <h3 className="text-xl font-bold">Application Submitted!</h3>
              <p className="text-xs text-slate-300">
                Our HR recruitment team will review your qualifications and contact you for an interview.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">Full Legal Name</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="John Doe"
                    className="w-full bg-[#0c0f17] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#00ff01]"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full bg-[#0c0f17] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#00ff01]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(973) 555-0199"
                    className="w-full bg-[#0c0f17] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#00ff01]"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">Applying For Position</label>
                  <select
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    className="w-full bg-[#0c0f17] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#00ff01]"
                  >
                    {jobs.map((j, i) => (
                      <option key={i}>{j.title}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Security Experience & Licenses</label>
                <textarea
                  rows={4}
                  value={formData.coverLetter}
                  onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                  placeholder="Detail your security guard licenses, armed certifications, military or law enforcement background..."
                  className="w-full bg-[#0c0f17] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#00ff01]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#00ff01] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-[#00cc01] transition-all flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Job Application</span>
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
