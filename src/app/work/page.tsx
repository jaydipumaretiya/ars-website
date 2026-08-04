import Link from "next/link";
import { Award, Image as ImageIcon, Video, Star, FileText, ArrowRight } from "lucide-react";

export default function WorkPage() {
  const categories = [
    {
      title: "Client Testimonials",
      href: "/work/testimonials",
      desc: "Read verified reviews and endorsements from event hosts, property directors, and corporate managers.",
      icon: Star,
      btn: "View Testimonials",
    },
    {
      title: "Field Photo Gallery",
      href: "/work/gallery",
      desc: "High-resolution photo gallery showcasing Act Right Security officers on duty, vehicle fleets, and event access control.",
      icon: ImageIcon,
      btn: "View Photo Gallery",
    },
    {
      title: "Video Showcase",
      href: "/work/videos",
      desc: "Watch real video footage of our mobile patrols, tactical drills, and live event crowd control enforcement.",
      icon: Video,
      btn: "Watch Field Videos",
    },
    {
      title: "Client Case Studies",
      href: "/work/client-case-studies",
      desc: "Detailed case studies documenting risk reduction, copper theft elimination, and rapid emergency responses.",
      icon: FileText,
      btn: "Read Case Studies",
    },
  ];

  return (
    <div className="space-y-16 pb-20">
      <section className="relative py-16 bg-radial-gradient border-b border-white/10 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-extrabold text-[#00ff01] uppercase tracking-widest px-3 py-1 bg-[#00ff01]/10 rounded-full border border-[#00ff01]/30 inline-block">
            Proven Performance & Field Operations
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white">
            OUR PORTFOLIO & WORK PROOF
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto">
            Explore our real-world security achievements through client testimonials, photo galleries, video showcases, and case studies.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="glass-panel glass-panel-hover rounded-3xl p-8 border border-white/10 space-y-6 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#00ff01]/10 border border-[#00ff01]/30 flex items-center justify-center text-[#00ff01] group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h2 className="text-2xl font-bold text-white group-hover:text-[#00ff01] transition-colors">
                    {cat.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {cat.desc}
                  </p>
                </div>

                <div>
                  <Link
                    href={cat.href}
                    className="w-full py-3.5 rounded-xl bg-white/5 border border-white/15 text-xs font-bold text-white hover:bg-[#00ff01] hover:text-black transition-all flex items-center justify-center space-x-2"
                  >
                    <span>{cat.btn}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
