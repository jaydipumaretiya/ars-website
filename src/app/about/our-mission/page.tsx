import Link from "next/link";
import { Shield, Target, Eye, HeartHandshake, CheckCircle2 } from "lucide-react";

export default function OurMissionPage() {
  return (
    <div className="space-y-16 pb-20">
      <section className="relative py-16 bg-radial-gradient border-b border-white/10 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-extrabold text-[#00ff01] uppercase tracking-widest px-3 py-1 bg-[#00ff01]/10 rounded-full border border-[#00ff01]/30 inline-block">
            Our Purpose & Ethos
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white">
            OUR MISSION & CORE VALUES
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto">
            At Act Right Security, our mission is to safeguard lives, communities, and corporate assets through uncompromising vigilance and integrity.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-panel p-8 rounded-2xl border-t-2 border-t-[#00ff01] space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#00ff01]/10 border border-[#00ff01]/30 flex items-center justify-center text-[#00ff01]">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Our Mission</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              To deliver customized, high-reliability security services that protect human life, eliminate physical threats, and provide peace of mind for every client we serve.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-2xl border-t-2 border-t-[#00ff01] space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#00ff01]/10 border border-[#00ff01]/30 flex items-center justify-center text-[#00ff01]">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Our Vision</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              To be recognized as the nation's premier security partner, setting the industry benchmark in officer professionalism, technology integration, and customer trust.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-2xl border-t-2 border-t-[#00ff01] space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#00ff01]/10 border border-[#00ff01]/30 flex items-center justify-center text-[#00ff01]">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Our Commitment</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              We hold ourselves to the highest ethical and legal standards, treating clients, visitors, and employees with dignity, respect, and steadfast protection.
            </p>
          </div>
        </div>

        {/* 4 Core Pillars */}
        <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
          <h2 className="text-2xl font-black text-white border-b border-white/10 pb-4">
            CORE OPERATIONAL PILLARS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "1. Integrity Without Compromise",
                desc: "Honesty and transparency guide every patrol report, client contract, and officer interaction.",
              },
              {
                title: "2. Vigilance & Constant Readiness",
                desc: "Our 24/7 dispatch center and field supervisors ensure officers remain alert and prepared for any contingency.",
              },
              {
                title: "3. Continuous Education & Training",
                desc: "We continuously invest in tactical training, de-escalation methods, medical response, and firearms recertification.",
              },
              {
                title: "4. Rapid Response & Accountability",
                desc: "Verified electronic reporting and GPS location logging give clients complete audit proof of active guard presence.",
              },
            ].map((pillar, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <h4 className="text-sm font-bold text-[#00ff01]">{pillar.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
