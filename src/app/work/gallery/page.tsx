"use client";

import { useState } from "react";
import { Image as ImageIcon, X, ZoomIn, CheckCircle2 } from "lucide-react";

export default function GalleryPage() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const images = [
    { src: "/image/1.webp", title: "Special Event Guard Detail", category: "Events" },
    { src: "/image/patrol.webp", title: "Mobile Patrol Vehicle Fleet", category: "Patrol" },
    { src: "/image/Security Guards Patrol Services Manchest.webp", title: "Manchester Guard Post", category: "Guarding" },
    { src: "/image/armed-security-guards-manchester-nh_edited_edited_edited.webp", title: "Armed Officer Deployment", category: "Armed" },
    { src: "/image/10.webp", title: "Commercial Facility Inspection", category: "Commercial" },
    { src: "/image/11.webp", title: "Executive Escort Team", category: "VIP" },
    { src: "/image/14.webp", title: "Retail Loss Prevention Patrol", category: "Retail" },
    { src: "/image/18.webp", title: "Construction Site Watchman", category: "Construction" },
    { src: "/image/19.webp", title: "Hospital ER Guarding", category: "Healthcare" },
    { src: "/image/20.webp", title: "Armed Cash Courier Transport", category: "Transport" },
    { src: "/image/21.webp", title: "Hotel Lobby Concierge", category: "Hospitality" },
    { src: "/image/16.webp", title: "Parks & Recreation Patrol", category: "Public" },
    { src: "/image/15.webp", title: "Risk Consulting & Audit", category: "Consulting" },
    { src: "/image/apartment-security-manchester-nh-securti.webp", title: "HOA Gatehouse Control", category: "Residential" },
    { src: "/image/17.webp", title: "Financial Institution Guarding", category: "Banking" },
    { src: "/image/securtiy.jpg", title: "Act Right Security Officer Roster", category: "Guarding" },
  ];

  return (
    <div className="space-y-16 pb-20">
      <section className="relative py-16 bg-radial-gradient border-b border-white/10 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-extrabold text-[#00ff01] uppercase tracking-widest px-3 py-1 bg-[#00ff01]/10 rounded-full border border-[#00ff01]/30 inline-block">
            Field Operation Photographs
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white">
            FIELD PHOTO GALLERY
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto">
            Browse authentic photographs of Act Right Security officers, vehicle patrols, client facilities, and special operations.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setActiveImage(img.src)}
              className="glass-panel rounded-2xl overflow-hidden border border-white/10 group cursor-pointer relative"
            >
              <div className="relative h-60 overflow-hidden bg-slate-900">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06080c] via-transparent to-transparent opacity-70" />
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                  <div className="w-12 h-12 rounded-full bg-[#00ff01] text-black flex items-center justify-center shadow-lg">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                </div>

                <span className="absolute top-3 left-3 bg-[#06080c]/80 text-[#00ff01] text-[10px] font-bold px-2 py-0.5 rounded border border-[#00ff01]/30">
                  {img.category}
                </span>
              </div>

              <div className="p-4">
                <h4 className="text-xs font-bold text-white group-hover:text-[#00ff01] transition-colors">
                  {img.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-[#0c0f17] border border-[#00ff01]/40 rounded-2xl overflow-hidden shadow-2xl p-2">
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/80 text-[#00ff01] rounded-xl hover:bg-[#00ff01] hover:text-black transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={activeImage}
              alt="Enlarged Field Photo"
              className="w-full max-h-[80vh] object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}
