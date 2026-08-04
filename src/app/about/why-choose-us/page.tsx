import Link from "next/link";
import { CheckCircle2, XCircle, PhoneCall } from "lucide-react";

export default function WhyChooseUsPage() {
  const comparison = [
    { feature: "Officer Vetting", ars: "100% Criminal, Drug & Behavioral Screening", others: "Basic automated background checks" },
    { feature: "Patrol Tracking", ars: "Real-time GPS Electronic Checkpoints (DAR)", others: "Paper logbooks prone to falsification" },
    { feature: "Dispatch Support", ars: "24/7 Live Dedicated Dispatch Operators", others: "Answering machines or delayed callbacks" },
    { feature: "Officer Retention", ars: "Competitive pay, continuous academy training", others: "High guard turnover rate" },
    { feature: "Custom Orders", ars: "Tailored standing orders per site", others: "Generic one-size-fits-all instructions" },
    { feature: "Emergency Backup", ars: "Rapid on-call guard deployment < 15 min", others: "Hours or next-day replacement" },
  ];

  return (
    <div className="space-y-16 pb-20">
      <section className="relative py-16 bg-radial-gradient border-b border-white/10 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-extrabold text-[#00ff01] uppercase tracking-widest px-3 py-1 bg-[#00ff01]/10 rounded-full border border-[#00ff01]/30 inline-block">
            Comparative Advantage
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white">
            WHY CHOOSE ACT RIGHT SECURITY?
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto">
            See how Act Right Security outperforms traditional guard agencies in accountability, technology, and officer standards.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="glass-panel rounded-3xl overflow-hidden border border-white/10 p-6 sm:p-8">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-xs font-bold uppercase tracking-wider text-slate-400">
                  <th className="py-4 px-4">Key Criteria</th>
                  <th className="py-4 px-4 text-[#00ff01]">Act Right Security (ARS)</th>
                  <th className="py-4 px-4 text-slate-500">Other Guard Services</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-xs sm:text-sm">
                {comparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="py-4 px-4 font-bold text-white">{row.feature}</td>
                    <td className="py-4 px-4 font-semibold text-[#00ff01] flex items-center">
                      <CheckCircle2 className="w-4 h-4 mr-2 shrink-0" />
                      {row.ars}
                    </td>
                    <td className="py-4 px-4 text-slate-400">
                      {row.others}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center pt-4">
          <Link
            href="/contact"
            className="px-8 py-4 rounded-xl bg-[#00ff01] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-[#00cc01] transition-all shadow-[0_0_20px_rgba(0,255,1,0.4)]"
          >
            Switch to Act Right Security Today
          </Link>
        </div>
      </section>
    </div>
  );
}
