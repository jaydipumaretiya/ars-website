import Link from "next/link";
import { ShieldCheck, Award, FileCheck, CheckCircle2 } from "lucide-react";

export default function LicensingPage() {
  return (
    <div className="space-y-16 pb-20">
      <section className="relative py-16 bg-radial-gradient border-b border-white/10 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-extrabold text-[#00ff01] uppercase tracking-widest px-3 py-1 bg-[#00ff01]/10 rounded-full border border-[#00ff01]/30 inline-block">
            Compliance & Insurance
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white">
            LICENSING & ACCREDITATIONS
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto">
            Act Right Security is fully licensed, bonded, and insured across all jurisdictions of operation, maintaining full compliance with state security guard licensing boards.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "SIA Certified", img: "/image/sia.png", desc: "Security Industry Association recognized operational standards." },
            { name: "IFPO Member", img: "/image/ifpo.png", desc: "International Foundation for Protection Officers credentialing." },
            { name: "BBB Accredited", img: "/image/bbb.png", desc: "Better Business Bureau verified customer satisfaction." },
            { name: "State Licensed", img: "/image/license.webp", desc: "Fully registered and authorized by State Licensing Boards." },
          ].map((acc, i) => (
            <div key={i} className="glass-panel p-6 rounded-2xl border border-white/10 text-center space-y-4">
              <div className="h-16 flex items-center justify-center">
                <img src={acc.img} alt={acc.name} className="h-12 object-contain" />
              </div>
              <h3 className="text-base font-bold text-white">{acc.name}</h3>
              <p className="text-xs text-slate-400">{acc.desc}</p>
            </div>
          ))}
        </div>

        <div className="glass-panel p-8 rounded-3xl border border-[#00ff01]/30 space-y-4">
          <h2 className="text-2xl font-black text-white border-b border-white/10 pb-4">
            INSURANCE & LIABILITY PROTECTION
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Act Right Security carries comprehensive General Liability Insurance, Worker's Compensation, and Commercial Auto Coverage exceeding standard municipal requirements. We provide formal certificates of insurance naming our clients as additional insureds prior to deployment.
          </p>
        </div>
      </section>
    </div>
  );
}
