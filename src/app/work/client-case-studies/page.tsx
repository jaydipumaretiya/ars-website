import Link from "next/link";
import { FileText, CheckCircle2, Shield, ArrowRight } from "lucide-react";

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "Eliminating Copper Theft at a 40-Acre Construction Project",
      client: "Commercial Construction Enterprise",
      challenge: "Repeated nighttime scrap wire theft and equipment vandalism causing $150k+ in project delays.",
      solution: "Deployed 24/7 fixed watchmen, electronic fence checkpoint scans, and high-visibility marked vehicle patrols.",
      result: "100% elimination of unauthorized intrusions and zero site material losses over a 14-month build phase.",
    },
    {
      title: "Rapid Armed Guard Deployment for High-Risk Retail Chain",
      client: "Luxury Retail Boutique Outlet",
      challenge: "Surge in organized retail theft attempts threatening store staff safety and merchandise.",
      solution: "Stationed armed uniformed security officers at main entrances with loss-prevention receipt checks.",
      result: "85% reduction in inventory shrinkage within 60 days and enhanced staff confidence.",
    },
    {
      title: "Turnkey Crowd Control for 10,000+ Guest Outdoor Festival",
      client: "Metropolitan Event Organizer",
      challenge: "Managing dense crowd surges, alcohol perimeter control, and VIP backstage access.",
      solution: "50+ Act Right Security officers equipped with metal detection wands, bag screening, and stage escorts.",
      result: "Flawless event execution with zero major safety incidents and praise from local police department.",
    },
  ];

  return (
    <div className="space-y-16 pb-20">
      <section className="relative py-16 bg-radial-gradient border-b border-white/10 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-extrabold text-[#00ff01] uppercase tracking-widest px-3 py-1 bg-[#00ff01]/10 rounded-full border border-[#00ff01]/30 inline-block">
            Risk Mitigation Analytics
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white">
            CLIENT CASE STUDIES
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto">
            In-depth analysis of how Act Right Security custom protocols solved complex security challenges.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {caseStudies.map((cs, idx) => (
          <div
            key={idx}
            className="glass-panel rounded-3xl p-8 border border-white/10 space-y-6 hover:border-[#00ff01]/40 transition-all"
          >
            <div className="border-b border-white/10 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h2 className="text-xl font-bold text-white flex items-center">
                <FileText className="w-5 h-5 text-[#00ff01] mr-2 shrink-0" />
                {cs.title}
              </h2>
              <span className="text-xs font-bold text-[#00ff01] bg-[#00ff01]/10 px-3 py-1 rounded-lg border border-[#00ff01]/30 w-fit">
                {cs.client}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300">
              <div className="p-4 rounded-xl bg-white/5 space-y-2">
                <h4 className="font-bold text-white uppercase text-[11px] text-slate-400">The Challenge</h4>
                <p className="leading-relaxed">{cs.challenge}</p>
              </div>
              <div className="p-4 rounded-xl bg-[#00ff01]/5 border border-[#00ff01]/20 space-y-2">
                <h4 className="font-bold text-[#00ff01] uppercase text-[11px]">The ARS Solution</h4>
                <p className="leading-relaxed">{cs.solution}</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 space-y-2">
                <h4 className="font-bold text-white uppercase text-[11px] text-slate-400">The Result</h4>
                <p className="leading-relaxed font-semibold text-white">{cs.result}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
