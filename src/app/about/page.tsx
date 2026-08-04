import Link from "next/link";
import { Shield, Award, Users, CheckCircle2, PhoneCall, Building, Lock, FileCheck, ArrowRight } from "lucide-react";

export default function AboutPage() {
  const pillars = [
    {
      title: "Your Safety Comes First",
      desc: "Our leadership team brings decades of combined experience in high-level security management, threat assessment, and emergency response.",
    },
    {
      title: "Professional & Reliable Guards",
      desc: "Our officers are our greatest resource. We invest heavily in ongoing tactical education, de-escalation, and field certification.",
    },
    {
      title: "State-of-the-Art Guard Tech",
      desc: "We continuously integrate real-time GPS patrol tracking, digital Incident Logging (DAR), and automated dispatch monitoring.",
    },
    {
      title: "Personalized Security Programs",
      desc: "Every contract is tailored to specific client needs—from multi-family HOAs to high-risk executive escorts and retail store guarding.",
    },
    {
      title: "24/7 Live Dispatch Center",
      desc: "Our live dispatch operators perform continuous radio and phone supervision, ready to respond at 3:00 AM or 3:00 PM.",
    },
    {
      title: "Full License & Indemnification",
      desc: "Act Right Security carries full general liability, worker's compensation, and state licensing compliance across all operating regions.",
    },
  ];

  const subPages = [
    { name: "Our Mission & Values", href: "/about/our-mission", desc: "Our core principles of integrity, vigilance, and service excellence." },
    { name: "Security Officers Standards", href: "/about/security-officer", desc: "Rigorous screening, background checks, and training standards." },
    { name: "Regional Offices", href: "/about/offices", desc: "Our headquarters in Newark, NJ & offices across NH, NY, FL, GA, CA, NC, PA, and NV." },
    { name: "Operational Divisions", href: "/about/divisions", desc: "Armed, Unarmed, Patrol, Corporate & Special Operations branches." },
    { name: "Guard Training Academy", href: "/about/training", desc: "De-escalation, firearms, medical emergency, and state license training." },
    { name: "Licensing & Accreditations", href: "/about/licensing", desc: "SIA, IFPO, BBB, and state licensing compliance details." },
    { name: "Why Choose Act Right?", href: "/about/why-choose-us", desc: "Comparative analysis of ARS vs traditional security guard companies." },
    { name: "Ethics Line & Hotline", href: "/about/ethics-line", desc: "Confidential hotline for ethical reporting and compliance." },
    { name: "Frequently Asked Questions", href: "/about/faq", desc: "Answers to common questions regarding quotes, contracts, and guard dispatch." },
    { name: "COVID-19 Policy", href: "/about/covid-19-statement", desc: "Health, sanitation, and safety protocols for field operations." },
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* Header Banner */}
      <section className="relative py-16 bg-radial-gradient border-b border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <span className="text-xs font-extrabold text-[#00ff01] uppercase tracking-widest px-3 py-1 bg-[#00ff01]/10 rounded-full border border-[#00ff01]/30 inline-block">
            About Act Right Security (ARS)
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white">
            SERVICE WITH EXCELLENCE, GUARANTEED.
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            We at Act Right Security focus on fully meeting the needs of our clients, developing a relationship of mutual trust, and providing top-level expert security solutions.
          </p>
        </div>
      </section>

      {/* Main Company Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6 text-slate-300 text-sm leading-relaxed">
            <h2 className="text-3xl font-black text-white">
              YOUR TRUSTED SECURITY PARTNER
            </h2>
            <p>
              For the convenience of our clients, we offer a full suite of security and protective services. Our goal is to provide a custom-tailored security program to meet each of our clients' individual needs.
            </p>
            <p>
              We accomplish this through a multi-layered management approach that includes a security needs assessment, experienced management personnel, stringent selection of security personnel, training processes, and quality assurance procedures that provide our clients with the highest return on their investment.
            </p>
            <p>
              With the training, experience, preparation, and professionalism of our security officers, we are able to meet all safety and security requirements, regardless of their complexity. Our satisfied clients speak to the amount of trust customers place in our company on a daily basis.
            </p>

            <div className="pt-4 flex items-center space-x-4">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl bg-[#00ff01] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-[#00cc01] transition-all shadow-[0_0_20px_rgba(0,255,1,0.4)]"
              >
                Request Security Quote
              </Link>
              <a
                href="tel:9732890436"
                className="px-6 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-bold text-xs uppercase tracking-wider hover:bg-[#00ff01]/10 hover:text-[#00ff01] transition-all"
              >
                Call (973) 289-0436
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="glass-panel p-3 rounded-3xl border border-[#00ff01]/30 shadow-2xl relative">
              <img
                src="/image/securtiy.jpg"
                alt="Act Right Security Headquarters & Guards"
                className="w-full h-[400px] object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06080c] via-transparent to-transparent opacity-80 rounded-2xl" />
              
              <div className="absolute bottom-6 left-6 right-6 bg-[#0c0f17]/95 backdrop-blur-xl p-4 rounded-2xl border border-[#00ff01]/30 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-white">Act Right Security HQ</h4>
                  <p className="text-[11px] text-slate-400">Headquarters in Newark, NJ & Offices Nationwide</p>
                </div>
                <span className="text-xs font-bold text-[#00ff01] bg-[#00ff01]/10 px-3 py-1 rounded-lg border border-[#00ff01]/30">
                  OPEN 24/7/365
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Core Service Pillars */}
      <section className="bg-[#040508] border-y border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3">
            <span className="text-xs font-extrabold text-[#00ff01] uppercase tracking-widest px-3 py-1 bg-[#00ff01]/10 rounded-full border border-[#00ff01]/30">
              Guaranteed Security Excellence
            </span>
            <h2 className="text-3xl font-black text-white">
              WHAT SETS ACT RIGHT SECURITY APART
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pl, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl border-t-2 border-t-[#00ff01] space-y-3 glass-panel-hover"
              >
                <h3 className="text-base font-bold text-white flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-[#00ff01] mr-2 shrink-0" />
                  {pl.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {pl.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subpage Explorer Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-black text-white">
            EXPLORE ABOUT ACT RIGHT SECURITY
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Learn more about our mission, guard standards, regional offices, licensing, and company policies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subPages.map((sp) => (
            <Link
              key={sp.href}
              href={sp.href}
              className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/10 space-y-3 group block"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-white group-hover:text-[#00ff01] transition-colors">
                  {sp.name}
                </h3>
                <ArrowRight className="w-4 h-4 text-[#00ff01] group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {sp.desc}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
