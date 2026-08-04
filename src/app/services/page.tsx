"use client";

import { useState } from "react";
import Link from "next/link";
import { servicesData } from "@/data/allContent";
import { Shield, Search, ChevronRight, CheckCircle2, PhoneCall, Filter } from "lucide-react";

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const servicesList = Object.values(servicesData);

  const categories = [
    "all",
    "Guarding & Patrol",
    "Property & Facility",
    "Specialized Operations",
    "Public & Consulting",
  ];

  const filteredServices = servicesList.filter((s) => {
    const matchesSearch =
      s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.description.some((d) => d.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory =
      selectedCategory === "all" || s.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-16 pb-20">
      {/* Header Banner */}
      <section className="relative py-16 bg-radial-gradient border-b border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <span className="text-xs font-extrabold text-[#00ff01] uppercase tracking-widest px-3 py-1 bg-[#00ff01]/10 rounded-full border border-[#00ff01]/30 inline-block">
            Act Right Security Directory
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white">
            COMPREHENSIVE PROTECTIVE SERVICES
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Act Right Security provides licensed, customized guarding and risk management solutions across 24 dedicated security sectors.
          </p>

          {/* Search & Category Filter */}
          <div className="max-w-4xl mx-auto pt-6 space-y-4">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search services (e.g. Armed, Patrol, Construction, Event...)"
                className="w-full bg-[#0c0f17] border border-[#00ff01]/40 rounded-2xl pl-12 pr-4 py-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00ff01] shadow-[0_0_20px_rgba(0,255,1,0.1)]"
              />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    selectedCategory === cat
                      ? "bg-[#00ff01] text-black shadow-[0_0_15px_rgba(0,255,1,0.4)]"
                      : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10"
                  }`}
                >
                  {cat === "all" ? "All Services (24)" : cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((svc) => (
            <div
              key={svc.slug}
              className="glass-panel glass-panel-hover rounded-2xl overflow-hidden border border-white/10 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06080c] via-transparent to-transparent opacity-80" />
                  <span className="absolute top-3 right-3 bg-[#06080c]/90 text-[#00ff01] text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md border border-[#00ff01]/30">
                    {svc.category}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#00ff01] transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {svc.subtitle}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-white/10">
                    {svc.features.slice(0, 3).map((ft, idx) => (
                      <div key={idx} className="text-[11px] text-slate-300 flex items-center">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00ff01] mr-1.5 shrink-0" />
                        <span>{ft}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={`/services/${svc.slug}`}
                  className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-slate-200 hover:text-black hover:bg-[#00ff01] hover:border-[#00ff01] transition-all flex items-center justify-center group/btn"
                >
                  View Full Details & Protocol
                  <ChevronRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-16 glass-panel rounded-2xl space-y-4">
            <Shield className="w-12 h-12 text-[#00ff01] mx-auto opacity-50" />
            <h3 className="text-lg font-bold text-white">No Services Found</h3>
            <p className="text-xs text-slate-400">Try adjusting your search query or filter category.</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
              className="px-4 py-2 bg-[#00ff01] text-black font-bold text-xs rounded-xl"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
