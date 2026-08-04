import Link from "next/link";
import { GraduationCap, BookOpen, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function TrainingPage() {
  const modules = [
    { title: "Verbal De-escalation & Conflict Resolution", desc: "Techniques for defusing hostile arguments peacefully before physical force is ever required." },
    { title: "Firearms & Tactical Marksmanship", desc: "Mandatory qualification for armed personnel covering safe weapon handling, holster draw, and situational judgment." },
    { title: "Emergency Medical & CPR/AED Response", desc: "First responder training for medical emergencies, trauma care, and cardiac arrest events." },
    { title: "Report Writing & Daily Activity Logs", desc: "Professional incident documentation, chain of evidence logging, and daily log submission protocols." },
    { title: "Legal Authority & Arrest Laws", desc: "Comprehensive education on citizen's arrest laws, trespass notices, and physical detention boundaries." },
    { title: "Active Shooter & Evacuation Drills", desc: "Tactical containment, crowd directional evacuation, and law enforcement interop." },
  ];

  return (
    <div className="space-y-16 pb-20">
      <section className="relative py-16 bg-radial-gradient border-b border-white/10 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-extrabold text-[#00ff01] uppercase tracking-widest px-3 py-1 bg-[#00ff01]/10 rounded-full border border-[#00ff01]/30 inline-block">
            ARS Academy Standard
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white">
            GUARD TRAINING ACADEMY
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto">
            Act Right Security invests continuously in guard education, exceeding state-mandated training minimums across all operational sectors.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((m, i) => (
            <div key={i} className="glass-panel p-6 rounded-2xl border-t-2 border-t-[#00ff01] space-y-3">
              <h3 className="text-base font-bold text-white flex items-center">
                <CheckCircle2 className="w-4 h-4 text-[#00ff01] mr-2 shrink-0" />
                {m.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
