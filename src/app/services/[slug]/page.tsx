import { servicesData } from "@/data/allContent";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Shield, CheckCircle2, ChevronRight, PhoneCall, Building2, Award, Clock } from "lucide-react";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="space-y-16 pb-20">
      {/* Header Banner */}
      <section className="relative py-16 bg-radial-gradient border-b border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-8 space-y-4 text-left">
            <Link
              href="/services"
              className="text-xs font-bold text-[#00ff01] hover:underline flex items-center mb-2"
            >
              ← Back to All Services
            </Link>
            <span className="text-xs font-extrabold text-[#00ff01] uppercase tracking-widest px-3 py-1 bg-[#00ff01]/10 rounded-full border border-[#00ff01]/30 inline-block">
              {service.category}
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
              {service.title}
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {service.subtitle}
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-end">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#00ff01] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-[#00cc01] hover:shadow-[0_0_30px_rgba(0,255,1,0.5)] transition-all flex items-center justify-center"
            >
              <PhoneCall className="w-4 h-4 mr-2" />
              Request {service.title} Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Full Copy & Protocols */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Featured Image */}
            <div className="glass-panel rounded-3xl p-2 border border-[#00ff01]/30 overflow-hidden shadow-2xl">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-80 object-cover rounded-2xl filter brightness-95"
              />
            </div>

            {/* Detailed Description Paragraphs */}
            <div className="glass-panel rounded-2xl p-8 space-y-6 text-sm text-slate-300 leading-relaxed border border-white/10">
              <h3 className="text-xl font-bold text-white border-b border-[#00ff01]/30 pb-3 flex items-center">
                <Shield className="w-5 h-5 text-[#00ff01] mr-2" />
                Service Overview & Operational Standard
              </h3>
              {service.description.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Key Features & Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="glass-panel rounded-2xl p-6 border-t-2 border-t-[#00ff01] space-y-4">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center">
                  <CheckCircle2 className="w-4 h-4 text-[#00ff01] mr-2" />
                  Key Operational Features
                </h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  {service.features.map((ft, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00ff01] mt-1.5 mr-2 shrink-0" />
                      <span>{ft}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-panel rounded-2xl p-6 border-t-2 border-t-[#00ff01] space-y-4">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center">
                  <Award className="w-4 h-4 text-[#00ff01] mr-2" />
                  Client Benefits
                </h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  {service.benefits.map((bn, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00ff01] mt-1.5 mr-2 shrink-0" />
                      <span>{bn}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tailored Industries */}
            <div className="glass-panel rounded-2xl p-6 border border-white/10 space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center">
                <Building2 className="w-4 h-4 text-[#00ff01] mr-2" />
                Target Industries & Facilities Served
              </h4>
              <div className="flex flex-wrap gap-2">
                {service.industries.map((ind, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-slate-300"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Sidebar: Contact & Quick Estimator */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="glass-panel rounded-2xl p-6 border border-[#00ff01]/40 space-y-6 bg-radial-gradient">
              <h3 className="text-lg font-bold text-white border-b border-white/10 pb-3">
                Request {service.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Contact our 24/7 dispatch manager to set up customized standing orders for your property or event.
              </p>

              <div className="space-y-3">
                <a
                  href="tel:8000000000"
                  className="w-full py-3 bg-[#00ff01] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl block text-center shadow-[0_0_20px_rgba(0,255,1,0.4)] hover:bg-[#00cc01]"
                >
                  Call (800) ARS-SECURITY
                </a>
                <Link
                  href="/contact"
                  className="w-full py-3 bg-white/5 border border-white/15 text-white font-bold text-xs uppercase tracking-wider rounded-xl block text-center hover:bg-[#00ff01]/10 hover:text-[#00ff01]"
                >
                  Submit Quote Form
                </Link>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs text-slate-400 space-y-2">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 text-[#00ff01] mr-2" />
                  <span>Deployment: Same-day or scheduled</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-4 h-4 text-[#00ff01] mr-2" />
                  <span>Full General Liability Insurance</span>
                </div>
              </div>
            </div>

            {/* Other Services Navigation */}
            <div className="glass-panel rounded-2xl p-6 border border-white/10 space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2">
                Other Security Offerings
              </h4>
              <ul className="space-y-2 text-xs">
                {Object.values(servicesData)
                  .filter((s) => s.slug !== service.slug)
                  .slice(0, 6)
                  .map((other) => (
                    <li key={other.slug}>
                      <Link
                        href={`/services/${other.slug}`}
                        className="text-slate-300 hover:text-[#00ff01] flex items-center justify-between py-1 border-b border-white/5"
                      >
                        <span>{other.title}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-[#00ff01]" />
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
