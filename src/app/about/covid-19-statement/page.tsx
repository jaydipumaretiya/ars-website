import Link from "next/link";
import { ShieldCheck, Heart, Activity, CheckCircle2 } from "lucide-react";

export default function CovidStatementPage() {
  return (
    <div className="space-y-16 pb-20">
      <section className="relative py-16 bg-radial-gradient border-b border-white/10 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-extrabold text-[#00ff01] uppercase tracking-widest px-3 py-1 bg-[#00ff01]/10 rounded-full border border-[#00ff01]/30 inline-block">
            Health & Safety Policy
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white">
            COVID-19 SAFETY STATEMENT
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto">
            Act Right Security maintains strict health and sanitation protocols to ensure the safety of our security personnel, clients, and community members.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <h2 className="text-xl font-bold text-white border-b border-[#00ff01]/30 pb-3 flex items-center">
            <Activity className="w-5 h-5 text-[#00ff01] mr-2" />
            Field Security Operational Protocols
          </h2>

          <p>
            Act Right Security officers adhere strictly to CDC and local health department guidance during shift assignments. All security personnel are required to complete pre-shift wellness self-assessments and report any symptoms prior to entering client facilities.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {[
              "Mandatory Pre-Shift Symptom Screening",
              "Personal Protective Equipment (PPE) Compliance",
              "Sanitization of Guard Gatehouses & Vehicles",
              "Social Distancing Protocol Enforcement",
              "Immediate Sick Leave & Isolation Policies",
              "Touchless Access Control & Visitor Log Options"
            ].map((ft, idx) => (
              <div key={idx} className="flex items-center space-x-2 text-xs font-bold text-white">
                <CheckCircle2 className="w-4 h-4 text-[#00ff01]" />
                <span>{ft}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
