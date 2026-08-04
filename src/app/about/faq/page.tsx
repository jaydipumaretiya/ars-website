"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, Search, PhoneCall } from "lucide-react";
import Link from "next/link";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState("");

  const faqs = [
    {
      q: "How quickly can Act Right Security deploy guards to my location?",
      a: "For emergency response, our 24/7 dispatch center can deploy armed or unarmed officers within 15 to 60 minutes depending on location. Scheduled contracts can begin immediately upon standing order approval.",
    },
    {
      q: "Are Act Right Security officers licensed, bonded, and insured?",
      a: "Yes. 100% of Act Right Security officers are fully licensed with state security registries, bonded, and covered by our comprehensive General Liability and Worker's Compensation insurance policies.",
    },
    {
      q: "Should I hire armed or unarmed security guards?",
      a: "Unarmed guards are ideal for low-risk environments such as retail stores, corporate lobbies, and residential HOAs where a welcoming customer service presence is preferred. Armed guards are recommended for high-risk assets, banks, jewelry transport, and executive escorts.",
    },
    {
      q: "How do I know the guard is actively patrolling my property?",
      a: "We utilize GPS-enabled electronic checkpoint tracking. Officers scan digital NFC/QR checkpoints on their shifts, generating real-time time-stamped Daily Activity Reports (DAR) accessible to clients.",
    },
    {
      q: "What regions and states does Act Right Security service?",
      a: "Our primary headquarters is in Newark, NJ, with active regional outposts across Manchester, NH, New York, Pennsylvania, Florida, Georgia, California, North Carolina, and Las Vegas, Nevada.",
    },
    {
      q: "Can I request customized standing orders for my guard?",
      a: "Absolutely. Before deployment, an ARS account representative writes detailed standing operating procedures (SOPs) matching your exact rules, access logging, and emergency contact protocols.",
    },
    {
      q: "How does billing and contract length work?",
      a: "We offer flexible terms—from short-term one-day event contracts to long-term annual facility management contracts with transparent hourly or fixed rates.",
    },
  ];

  const filteredFaqs = faqs.filter(
    (f) =>
      f.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.a.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-16 pb-20">
      <section className="relative py-16 bg-radial-gradient border-b border-white/10 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-extrabold text-[#00ff01] uppercase tracking-widest px-3 py-1 bg-[#00ff01]/10 rounded-full border border-[#00ff01]/30 inline-block">
            Frequently Asked Questions
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white">
            QUESTIONS & ANSWERS
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto">
            Find instant answers regarding guard deployment, licensing, insurance, and service protocols.
          </p>

          <div className="max-w-2xl mx-auto pt-4 relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search FAQ questions..."
              className="w-full bg-[#0c0f17] border border-[#00ff01]/40 rounded-2xl pl-12 pr-4 py-3.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00ff01]"
            />
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {filteredFaqs.map((faq, idx) => (
          <div
            key={idx}
            className="glass-panel rounded-2xl border border-white/10 overflow-hidden transition-all"
          >
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full p-6 text-left font-bold text-sm text-white flex justify-between items-center hover:text-[#00ff01] transition-colors"
            >
              <span className="flex items-center">
                <HelpCircle className="w-4 h-4 text-[#00ff01] mr-3 shrink-0" />
                {faq.q}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-[#00ff01] transition-transform ${
                  openIndex === idx ? "rotate-180" : ""
                }`}
              />
            </button>

            {openIndex === idx && (
              <div className="px-6 pb-6 text-xs text-slate-300 leading-relaxed border-t border-white/5 pt-4">
                {faq.a}
              </div>
            )}
          </div>
        ))}

        <div className="text-center pt-8 space-y-3">
          <p className="text-xs text-slate-400">Have a specific question not listed here?</p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 rounded-xl bg-[#00ff01] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-[#00cc01]"
          >
            <PhoneCall className="w-4 h-4 mr-2" />
            Contact Our Dispatch Team
          </Link>
        </div>
      </section>
    </div>
  );
}
