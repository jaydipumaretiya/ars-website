import Link from "next/link";
import { Shield, ShieldAlert, Car, Award, Users, ChevronRight } from "lucide-react";

export default function DivisionsPage() {
  const divisions = [
    {
      title: "Armed Guarding Division",
      desc: "Tactical armed security detail for banks, jewelry operations, high-value asset escorts, and sensitive corporate events.",
      icon: ShieldAlert,
      link: "/services/armed-security-service",
    },
    {
      title: "Unarmed Guarding Division",
      desc: "Uniformed officers providing access control, visitor screening, and customer service for commercial towers and residential communities.",
      icon: Shield,
      link: "/services/unarmed-security-services",
    },
    {
      title: "Mobile Patrol Division",
      desc: "Marked vehicle fleet performing randomized nighttime inspections, lock-ups, parking enforcement, and emergency alarm response.",
      icon: Car,
      link: "/services/mobile-patrol",
    },
    {
      title: "Executive Protection Division",
      desc: "Discreet close-protection bodyguards and armed motorcade escorts for C-suite executives, VIPs, and high-net-worth clients.",
      icon: Award,
      link: "/services/executive-protection",
    },
    {
      title: "Special Events & Crowd Control Division",
      desc: "Turnkey security teams for concerts, festivals, sports arenas, and political galas including bag checking and stage safety.",
      icon: Users,
      link: "/services/event-security",
    },
  ];

  return (
    <div className="space-y-16 pb-20">
      <section className="relative py-16 bg-radial-gradient border-b border-white/10 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-extrabold text-[#00ff01] uppercase tracking-widest px-3 py-1 bg-[#00ff01]/10 rounded-full border border-[#00ff01]/30 inline-block">
            Specialized Branches
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white">
            OPERATIONAL DIVISIONS
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto">
            Act Right Security is structured into specialized operational divisions, each managed by subject matter experts.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {divisions.map((div, idx) => {
            const Icon = div.icon;
            return (
              <div
                key={idx}
                className="glass-panel glass-panel-hover rounded-2xl p-8 border-t-2 border-t-[#00ff01] space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-[#00ff01]/10 border border-[#00ff01]/30 flex items-center justify-center text-[#00ff01]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{div.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{div.desc}</p>
                </div>
                <Link
                  href={div.link}
                  className="inline-flex items-center text-xs font-bold text-[#00ff01] hover:underline pt-4"
                >
                  Explore Division Services <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
