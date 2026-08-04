"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Shield,
  ShieldAlert,
  PhoneCall,
  ChevronRight,
  CheckCircle2,
  Award,
  Users,
  Building2,
  Clock,
  MapPin,
  Car,
  Lock,
  Zap,
  Play,
  X,
  Send,
  Star,
  FileText
} from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // Form State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "Armed Security Services",
    location: "",
    details: "",
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceType: "Armed Security Services",
        location: "",
        details: "",
      });
    }, 4000);
  };

  const services = [
    {
      id: "unarmed",
      category: "guarding",
      title: "Unarmed Security Services",
      desc: "Highly trained, professional unarmed officers for access control, customer assistance, and site protection.",
      href: "/services/unarmed-security-services",
      icon: Shield,
      features: ["Vetted & Certified Guards", "Access Control & Log", "De-escalation Experts"],
    },
    {
      id: "armed",
      category: "guarding",
      title: "Armed Security Services",
      desc: "Tactical armed security personnel for high-risk environments, valuable asset protection, and deterrence.",
      href: "/services/armed-security-service",
      icon: ShieldAlert,
      features: ["Lethal/Non-lethal Firearms", "Military/Law Enforcement Background", "Threat Neutralization"],
    },
    {
      id: "patrol",
      category: "patrol",
      title: "Mobile Vehicle Patrol",
      desc: "Randomized, high-visibility marked vehicle patrols with real-time GPS tracking and instant incident response.",
      href: "/services/mobile-patrol",
      icon: Car,
      features: ["Marked Security Fleet", "GPS Time-Stamped Logs", "Lock-Up & Alarm Check"],
    },
    {
      id: "events",
      category: "specialized",
      title: "Event & Crowd Control",
      desc: "Comprehensive security planning and crowd management for concerts, corporate galas, and VIP gatherings.",
      href: "/services/event-security",
      icon: Users,
      features: ["Crowd Flow Management", "Bag Checks & Metal Screening", "VIP Area Escort"],
    },
    {
      id: "residential",
      category: "property",
      title: "Residential & HOA Security",
      desc: "Dedicated gatehouse, perimeter patrol, and community protection for luxury apartments and HOAs.",
      href: "/services/residential-security",
      icon: Building2,
      features: ["Visitor Screening", "Perimeter Surveillance", "Parking Enforcement"],
    },
    {
      id: "construction",
      category: "property",
      title: "Construction Site Security",
      desc: "Prevent tool theft, equipment vandalism, and unauthorized intrusion with 24/7 site guards and log monitoring.",
      href: "/services/construction-sites",
      icon: Lock,
      features: ["Material Theft Protection", "Overnight Watchmen", "Safety Compliance Logs"],
    },
    {
      id: "retail",
      category: "property",
      title: "Retail Loss Prevention",
      desc: "Uniformed and plainclothes officers trained to deter shoplifting, manage incidents, and protect assets.",
      href: "/services/retail-stores",
      icon: Zap,
      features: ["Shoplifting Prevention", "Customer Service Presence", "Emergency Evacuation"],
    },
    {
      id: "executive",
      category: "specialized",
      title: "Executive Protection",
      desc: "Discreet personal bodyguards and armed escorts for corporate executives, celebrities, and high-net-worth individuals.",
      href: "/services/executive-protection",
      icon: Award,
      features: ["Advance Route Planning", "Discreet Close Protection", "Threat Assessment"],
    },
  ];

  const filteredServices =
    activeTab === "all"
      ? services
      : services.filter((s) => s.category === activeTab);

  const stats = [
    { label: "Licensed Officers", value: "500+", icon: Users },
    { label: "Client Retention Rate", value: "99.8%", icon: Shield },
    { label: "Avg Emergency Response", value: "<15 Min", icon: Clock },
    { label: "Offices & Outposts", value: "Nationwide", icon: MapPin },
  ];

  const clientLogos = [
    { name: "Comcast", img: "/image/comcast.webp" },
    { name: "Pine Acres", img: "/image/pine-acres.webp" },
    { name: "Evergreen", img: "/image/everygreen.webp" },
    { name: "Playhouse", img: "/image/playhouse.webp" },
    { name: "Saint Anselm", img: "/image/saint-.webp" },
    { name: "Holiday", img: "/image/holiday.webp" },
  ];

  const videos = [
    {
      title: "Act Right Security Field Operations",
      desc: "Watch our security officers in active patrol and strategic tactical drills.",
      src: "/image/20190324_031443_2.mp4",
      poster: "/image/patrol.webp",
    },
    {
      title: "Tactical Event Security & VIP Escort",
      desc: "High-level event protection and crowd management in action.",
      src: "/image/Raekwon the chef .mp4",
      poster: "/image/1.webp",
    },
    {
      title: "ARS Patrol Fleet & Site Inspections",
      desc: "Overview of our mobile vehicle patrol operations and property surveillance.",
      src: "/image/dj.mp4",
      poster: "/image/10.webp",
    },
  ];

  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-12 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-radial-gradient">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00ff01]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#00ff01]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Column: Headline & Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8 text-left"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#00ff01]/10 border border-[#00ff01]/40 text-[#00ff01] text-xs font-extrabold uppercase tracking-widest shadow-[0_0_15px_rgba(0,255,1,0.2)]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00ff01] animate-ping" />
              <span>Act Right Security — Your Security Partner</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none text-white">
              ELITE PROTECTIVE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff01] via-[#33ff33] to-white neon-text-glow">
                GUARDING & RISK MITIGATION
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              <strong>Act Right Security (ARS)</strong> delivers top-tier licensed armed & unarmed security officers, 24/7 mobile patrols, commercial facility protection, and VIP executive escort services tailored to safeguard your people and assets.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl bg-[#00ff01] text-black font-extrabold text-sm uppercase tracking-wider hover:bg-[#00cc01] hover:shadow-[0_0_30px_rgba(0,255,1,0.6)] transition-all flex items-center justify-center transform hover:-translate-y-1"
              >
                <PhoneCall className="w-5 h-5 mr-2" />
                Get Instant Quote Now
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 rounded-xl bg-white/5 border border-white/15 text-white font-bold text-sm uppercase tracking-wider hover:bg-[#00ff01]/10 hover:border-[#00ff01]/50 hover:text-[#00ff01] transition-all flex items-center justify-center"
              >
                Explore 24 Services
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </div>

            {/* Quick Badges */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-xs text-slate-400">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#00ff01]" />
                <span>100% Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#00ff01]" />
                <span>24/7 Live Supervision</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#00ff01]" />
                <span>Rapid Dispatch Ready</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden glass-panel border border-[#00ff01]/30 p-2 shadow-[0_0_50px_rgba(0,255,1,0.15)] group">
              <div className="relative h-[420px] rounded-2xl overflow-hidden">
                <img
                  src="/image/Security Guards Patrol Services Manchest.webp"
                  alt="Act Right Security Patrol Guard"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06080c] via-transparent to-transparent opacity-80" />
              </div>

              {/* Floating Badge 1 */}
              <div className="absolute top-6 right-6 bg-[#06080c]/90 backdrop-blur-xl border border-[#00ff01]/40 rounded-2xl p-4 shadow-2xl flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-[#00ff01]/20 flex items-center justify-center text-[#00ff01]">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#00ff01] block">Status</span>
                  <span className="text-xs font-bold text-white">24/7 Active Patrol</span>
                </div>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#0c0f17]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-[#00ff01] flex items-center justify-center text-black font-extrabold">
                    ARS
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Act Right Security Patrol</h4>
                    <p className="text-[11px] text-slate-400">Serving Manchester & Regional Outposts</p>
                  </div>
                </div>
                <a
                  href="tel:8000000000"
                  className="px-3 py-1.5 rounded-lg bg-[#00ff01]/20 text-[#00ff01] text-xs font-bold border border-[#00ff01]/40 hover:bg-[#00ff01] hover:text-black transition-all"
                >
                  Call Dispatch
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Trust & Accreditations Banner */}
      <section className="border-y border-white/10 bg-[#040508] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <span className="text-xs font-bold text-[#00ff01] uppercase tracking-wider block">
                Certified & Recognized Security Standard
              </span>
              <h3 className="text-lg font-bold text-white">Official Industry Licenses & Accreditations</h3>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="flex items-center space-x-3 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
                <img src="/image/sia.png" alt="SIA Certified" className="h-9 object-contain" />
                <span className="text-xs font-bold text-slate-300">SIA Certified</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
                <img src="/image/ifpo.png" alt="IFPO Member" className="h-9 object-contain" />
                <span className="text-xs font-bold text-slate-300">IFPO Member</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
                <img src="/image/bbb.png" alt="BBB Accredited" className="h-9 object-contain" />
                <span className="text-xs font-bold text-slate-300">BBB Accredited</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
                <img src="/image/license.webp" alt="State Licensed" className="h-9 object-contain" />
                <span className="text-xs font-bold text-slate-300">State Licensed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Ticker */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((st, idx) => {
            const Icon = st.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel glass-panel-hover rounded-2xl p-6 border-t-2 border-t-[#00ff01] relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#00ff01]/10 border border-[#00ff01]/30 flex items-center justify-center text-[#00ff01]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="w-2 h-2 rounded-full bg-[#00ff01] animate-pulse" />
                </div>
                <h3 className="text-3xl sm:text-4xl font-black text-white neon-text-glow mb-1">{st.value}</h3>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{st.label}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Services Showcase Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <span className="text-xs font-extrabold text-[#00ff01] uppercase tracking-widest px-3 py-1 bg-[#00ff01]/10 rounded-full border border-[#00ff01]/30">
            Comprehensive Protective Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            OUR CORE SECURITY SERVICES
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            From uniformed armed guarding to mobile patrols and event crowd control, Act Right Security delivers tailored security protocols for every sector.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {[
              { id: "all", label: "All Services (24)" },
              { id: "guarding", label: "Armed & Unarmed Guarding" },
              { id: "patrol", label: "Mobile Patrol" },
              { id: "property", label: "Facility & Construction" },
              { id: "specialized", label: "Events & Executive" },
            ].map((tb) => (
              <button
                key={tb.id}
                onClick={() => setActiveTab(tb.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === tb.id
                    ? "bg-[#00ff01] text-black shadow-[0_0_20px_rgba(0,255,1,0.4)]"
                    : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {tb.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((svc, idx) => {
            const SvcIcon = svc.icon;
            return (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="glass-panel glass-panel-hover rounded-2xl p-6 border-t-2 border-t-[#00ff01]/40 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#00ff01]/10 border border-[#00ff01]/30 flex items-center justify-center text-[#00ff01] group-hover:scale-110 transition-transform">
                    <SvcIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#00ff01] transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {svc.desc}
                  </p>

                  <ul className="space-y-1.5 pt-2 border-t border-white/10">
                    {svc.features.map((ft, fidx) => (
                      <li key={fidx} className="text-[11px] text-slate-300 flex items-center">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00ff01] mr-1.5 shrink-0" />
                        {ft}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6">
                  <Link
                    href={svc.href}
                    className="w-full py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-slate-200 hover:text-black hover:bg-[#00ff01] hover:border-[#00ff01] transition-all flex items-center justify-center group/btn"
                  >
                    Learn Details
                    <ChevronRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center pt-10">
          <Link
            href="/services"
            className="inline-flex items-center px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#00ff01] to-[#00cc01] text-black font-extrabold text-xs uppercase tracking-wider hover:shadow-[0_0_30px_rgba(0,255,1,0.5)] transition-all"
          >
            Explore Complete Directory of 24 Services
            <ChevronRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>

      {/* Why Choose Act Right Security */}
      <section className="bg-[#040508] border-y border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-extrabold text-[#00ff01] uppercase tracking-widest px-3 py-1 bg-[#00ff01]/10 rounded-full border border-[#00ff01]/30">
                The Act Right Security Advantage
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                WHY LEADING ENTERPRISES TRUST ACT RIGHT SECURITY
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Traditional guard services often suffer from poor supervision and unvetted personnel. Act Right Security sets a higher benchmark with rigorous background screening, real-time GPS tracking, and continuous supervisor oversight.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  {
                    title: "Rigorous Officer Vetting & Background Checks",
                    desc: "100% state criminal background checks, drug screening, and behavioral assessments before placement.",
                  },
                  {
                    title: "24/7 Live Field Supervision & GPS Tracking",
                    desc: "Every officer logs patrol checkpoints via mobile GPS technology for verified shift accountability.",
                  },
                  {
                    title: "Rapid Emergency Response Guarantee",
                    desc: "24/7 live dispatch team ready to deploy additional backup officers on short notice.",
                  },
                  {
                    title: "Custom Security Protocols & Site Directives",
                    desc: "Tailored standing orders written specifically for your property, business, or event.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#00ff01]/30 transition-all">
                    <div className="w-8 h-8 rounded-lg bg-[#00ff01]/20 flex items-center justify-center text-[#00ff01] shrink-0 mt-1">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{item.title}</h4>
                      <p className="text-xs text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  href="/about/why-choose-us"
                  className="px-6 py-3 rounded-xl bg-[#00ff01] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#00cc01] transition-all inline-block"
                >
                  Read Full Comparison Matrix
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="glass-panel p-3 rounded-3xl border border-[#00ff01]/30 shadow-[0_0_50px_rgba(0,255,1,0.15)] relative">
                <img
                  src="/image/patrol.webp"
                  alt="Act Right Security Officers on Duty"
                  className="w-full h-[450px] object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06080c] via-transparent to-transparent opacity-80 rounded-2xl" />

                <div className="absolute bottom-8 left-8 right-8 bg-[#0c0f17]/95 backdrop-blur-xl p-5 rounded-2xl border border-[#00ff01]/30">
                  <div className="flex items-center space-x-3 mb-2">
                    <Shield className="w-5 h-5 text-[#00ff01]" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">Act Right Guard Protocol</span>
                  </div>
                  <p className="text-xs text-slate-300">
                    "Act Right Security provided immediate armed officer presence during our facility renovation. Total professionalism."
                  </p>
                  <span className="text-[11px] font-bold text-[#00ff01] block mt-2">— Commercial Property Director</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Video Showcase Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <span className="text-xs font-extrabold text-[#00ff01] uppercase tracking-widest px-3 py-1 bg-[#00ff01]/10 rounded-full border border-[#00ff01]/30">
            Real Action & Field Footage
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            ACT RIGHT SECURITY VIDEO SHOWCASE
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            Watch real video footage of Act Right Security field patrols, tactical operations, and event security enforcement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((vid, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel glass-panel-hover rounded-2xl overflow-hidden border border-white/10 group cursor-pointer"
              onClick={() => setSelectedVideo(vid.src)}
            >
              <div className="relative h-48 overflow-hidden bg-slate-900">
                <img
                  src={vid.poster}
                  alt={vid.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-75"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#00ff01] text-black flex items-center justify-center shadow-[0_0_25px_rgba(0,255,1,0.6)] group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-current ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 text-[#00ff01] text-[10px] font-bold px-2 py-0.5 rounded">
                  PLAY VIDEO
                </div>
              </div>

              <div className="p-5 space-y-2">
                <h3 className="text-sm font-bold text-white group-hover:text-[#00ff01] transition-colors">
                  {vid.title}
                </h3>
                <p className="text-xs text-slate-400">{vid.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Video Player Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-[#0c0f17] border border-[#00ff01]/40 rounded-2xl overflow-hidden shadow-2xl">
            <div className="flex justify-between items-center p-4 border-b border-white/10">
              <h4 className="text-sm font-bold text-[#00ff01] flex items-center">
                <Play className="w-4 h-4 mr-2" />
                Act Right Security Video Player
              </h4>
              <button
                onClick={() => setSelectedVideo(null)}
                className="p-1 rounded-lg bg-white/10 hover:bg-[#00ff01] hover:text-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative aspect-video bg-black">
              <video
                src={selectedVideo}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* Client Logos & Testimonials */}
      <section className="bg-[#040508] border-y border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Trusted By Reputable Corporations & Partners
            </span>
            <div className="flex flex-wrap items-center justify-center gap-10 pt-6">
              {clientLogos.map((cl, i) => (
                <div key={i} className="p-3 bg-white/5 border border-white/10 rounded-xl hover:border-[#00ff01]/40 transition-all">
                  <img src={cl.img} alt={cl.name} className="h-10 object-contain filter grayscale hover:grayscale-0 transition-all" />
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            {[
              {
                quote: "Act Right Security has been guarding our industrial park for over 3 years. Zero break-ins since their mobile patrol took over.",
                name: "Operations Director",
                company: "Industrial Logistics Facility",
              },
              {
                quote: "Their event security guards managed our 5,000+ guest concert flawlessly. Calm, polite, and extremely watchful.",
                name: "Event Coordinator",
                company: "Manchester Entertainment Venue",
              },
              {
                quote: "Top tier executive protection. The armed guards were discreet, punctual, and highly professional throughout our summit.",
                name: "Corporate VP",
                company: "Financial Services Corp",
              },
            ].map((t, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-2xl border-t-2 border-t-[#00ff01] space-y-4">
                <div className="flex text-[#00ff01] space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-slate-300 italic leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="pt-2 border-t border-white/10">
                  <h4 className="text-xs font-bold text-white">{t.name}</h4>
                  <span className="text-[11px] text-slate-400">{t.company}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Quick Security Estimator & Contact Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel border border-[#00ff01]/30 rounded-3xl p-8 sm:p-12 relative overflow-hidden bg-radial-gradient">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-8">
            <span className="text-xs font-extrabold text-[#00ff01] uppercase tracking-widest px-3 py-1 bg-[#00ff01]/10 rounded-full border border-[#00ff01]/30">
              Immediate Security Response
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              REQUEST A FAST SECURITY QUOTE
            </h2>
            <p className="text-slate-300 text-sm">
              Need armed guards, mobile patrol, or event coverage? Fill out the form below or call our 24/7 dispatch hotline directly.
            </p>
          </div>

          {formSubmitted ? (
            <div className="bg-[#00ff01]/10 border border-[#00ff01] text-[#00ff01] rounded-2xl p-8 text-center space-y-3 max-w-xl mx-auto">
              <CheckCircle2 className="w-12 h-12 mx-auto" />
              <h3 className="text-xl font-bold">Quote Request Received!</h3>
              <p className="text-xs text-slate-300">
                An Act Right Security dispatch manager will contact you within 15 minutes to confirm details and dispatch personnel.
              </p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="max-w-2xl mx-auto space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full bg-[#0c0f17] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00ff01]"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@company.com"
                    className="w-full bg-[#0c0f17] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00ff01]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(603) 555-0199"
                    className="w-full bg-[#0c0f17] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00ff01]"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">Required Service</label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full bg-[#0c0f17] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#00ff01]"
                  >
                    <option>Armed Security Services</option>
                    <option>Unarmed Security Services</option>
                    <option>Mobile Patrol</option>
                    <option>Event Security & Crowd Control</option>
                    <option>Construction Site Security</option>
                    <option>Residential / HOA Security</option>
                    <option>Executive Protection</option>
                    <option>Commercial Property Security</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Location / Site Address</label>
                <input
                  type="text"
                  required
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="Manchester, NH or City/State"
                  className="w-full bg-[#0c0f17] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00ff01]"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Security Needs & Timeline</label>
                <textarea
                  rows={3}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="Describe your security requirements, hours needed, or start date..."
                  className="w-full bg-[#0c0f17] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00ff01]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#00ff01] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-[#00cc01] hover:shadow-[0_0_30px_rgba(0,255,1,0.5)] transition-all flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Security Request</span>
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
