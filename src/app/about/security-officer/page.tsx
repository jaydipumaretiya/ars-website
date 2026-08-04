import Link from "next/link";
import { ShieldCheck, UserCheck, Award, FileCheck, CheckCircle2 } from "lucide-react";

export default function SecurityOfficerPage() {
  return (
    <div className="space-y-16 pb-20">
      <section className="relative py-16 bg-radial-gradient border-b border-white/10 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-extrabold text-[#00ff01] uppercase tracking-widest px-3 py-1 bg-[#00ff01]/10 rounded-full border border-[#00ff01]/30 inline-block">
            Guard Selection & Standards
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white">
            ACT RIGHT SECURITY OFFICERS
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto">
            Our security officers are our greatest asset. Learn how we screen, train, and manage personnel to uphold the highest security standards.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-slate-300 text-sm leading-relaxed">
            <h2 className="text-3xl font-black text-white">
              RIGOROUS SCREENING & CODE OF CONDUCT
            </h2>
            <p>
              Before an officer wears the Act Right Security uniform, they undergo an extensive background investigation process. We verify employment history, perform 10-panel drug screenings, and check state criminal registries.
            </p>
            <p>
              Many of our guards bring prior experience from military service, law enforcement, or specialized security operations. They adhere to a strict code of conduct emphasizing punctuality, sharp uniform presentation, and courteous guest interactions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                "100% Criminal Background Clearance",
                "Mandatory Drug & Alcohol Testing",
                "Verifiable Military/Law Enforcement Exp.",
                "Customer Service & Communication Training",
                "Continuous Field Supervision",
                "First Aid / CPR / AED Certified"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-xs font-bold text-white">
                  <CheckCircle2 className="w-4 h-4 text-[#00ff01]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="glass-panel p-3 rounded-3xl border border-[#00ff01]/30 shadow-2xl">
              <img
                src="/image/1.brand.webp"
                alt="Act Right Security Guard Standards"
                className="w-full h-96 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
