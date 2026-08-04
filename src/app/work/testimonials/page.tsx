import Link from "next/link";
import { Star, Quote, Building2, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function TestimonialsPage() {
  const testimonials = [
    {
      quote: "Act Right Security has been guarding our industrial distribution facility for over 3 years. Zero break-ins or copper wire thefts since their mobile patrol took over shift logging.",
      author: "Director of Facilities",
      organization: "Logistics Distribution Center",
      location: "Manchester, NH",
      stars: 5,
    },
    {
      quote: "Their event security guards managed our 5,000+ attendee outdoor concert flawlessly. Polite, firm, and extremely watchful at entry gates and backstage passes.",
      author: "Event Coordinator",
      organization: "Regional Music & Entertainment Venue",
      location: "New Jersey",
      stars: 5,
    },
    {
      quote: "Top-tier executive protection. The armed bodyguards were discreet, punctual, and highly professional throughout our 4-day corporate summit.",
      author: "Vice President of Operations",
      organization: "Financial Services Corp",
      location: "New York, NY",
    },
    {
      quote: "Our residential HOA experienced immediate improvements after switching to Act Right Security gatehouse guards. Parking violations dropped 90% and residents feel safe.",
      author: "HOA Board President",
      organization: "Luxury Residential Community",
      location: "Florida",
    },
    {
      quote: "Act Right Security provided standby guards for a high-risk employee termination. Their calm demeanor ensured zero hostility or incident.",
      author: "Human Resources Director",
      organization: "Manufacturing Facility",
      location: "Pennsylvania",
    },
    {
      quote: "The 24/7 dispatch center responds to our midnight alarm triggers within minutes. We never worry about false alarm fines or sending staff into dangerous situations.",
      author: "Property Manager",
      organization: "Commercial Office Tower",
      location: "Atlanta, GA",
    },
  ];

  return (
    <div className="space-y-16 pb-20">
      <section className="relative py-16 bg-radial-gradient border-b border-white/10 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-extrabold text-[#00ff01] uppercase tracking-widest px-3 py-1 bg-[#00ff01]/10 rounded-full border border-[#00ff01]/30 inline-block">
            Client Endorsements
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white">
            CLIENT TESTIMONIALS & REVIEWS
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto">
            Read verified reviews from property directors, event planners, corporate executives, and HOA managers.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover rounded-2xl p-8 border-t-2 border-t-[#00ff01] space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-[#00ff01] space-x-1">
                    {[...Array(t.stars || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#00ff01]/30" />
                </div>
                <p className="text-xs text-slate-300 italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-1">
                <h4 className="text-sm font-bold text-white">{t.author}</h4>
                <p className="text-xs font-semibold text-[#00ff01]">{t.organization}</p>
                <span className="text-[11px] text-slate-400 block">{t.location}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
