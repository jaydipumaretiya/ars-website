"use client";

import { useState } from "react";
import { Play, X, Video, Shield } from "lucide-react";

export default function VideosPage() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videoList = [
    {
      title: "Act Right Security Tactical Patrol Operations",
      desc: "Watch real video footage of our mobile patrol officers conducting property inspections.",
      src: "/image/20190324_031443_2.mp4",
      poster: "/image/patrol.webp",
    },
    {
      title: "Special Event Crowd Control & VIP Protection",
      desc: "High-level event crowd security and backstage VIP escort enforcement.",
      src: "/image/Raekwon the chef .mp4",
      poster: "/image/1.webp",
    },
    {
      title: "ARS Patrol Vehicle Fleet & Site Security",
      desc: "Overview of our marked patrol fleet, officer inspections, and emergency dispatch.",
      src: "/image/dj.mp4",
      poster: "/image/10.webp",
    },
    {
      title: "Tactical Response & Field Drills",
      desc: "Officer training drills and tactical field deployment protocols.",
      src: "/image/kavslay.mp4",
      poster: "/image/securtiy.jpg",
    },
    {
      title: "Commercial Property Nighttime Watchman",
      desc: "Overnight property surveillance, door checks, and perimeter logging.",
      src: "/image/VID_6260627_202424_559.mp4",
      poster: "/image/18.webp",
    },
  ];

  return (
    <div className="space-y-16 pb-20">
      <section className="relative py-16 bg-radial-gradient border-b border-white/10 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-extrabold text-[#00ff01] uppercase tracking-widest px-3 py-1 bg-[#00ff01]/10 rounded-full border border-[#00ff01]/30 inline-block">
            Field Video Footage
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white">
            VIDEO SHOWCASE & DEMONSTRATIONS
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto">
            Watch original video footage of Act Right Security field patrols, tactical maneuvers, and event safety enforcement.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoList.map((vid, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedVideo(vid.src)}
              className="glass-panel glass-panel-hover rounded-2xl overflow-hidden border border-white/10 group cursor-pointer"
            >
              <div className="relative h-52 overflow-hidden bg-slate-900">
                <img
                  src={vid.poster}
                  alt={vid.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-75"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#00ff01] text-black flex items-center justify-center shadow-[0_0_30px_rgba(0,255,1,0.6)] group-hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 fill-current ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/80 text-[#00ff01] text-[10px] font-bold px-2 py-1 rounded border border-[#00ff01]/30">
                  PLAY VIDEO
                </div>
              </div>

              <div className="p-5 space-y-2">
                <h3 className="text-base font-bold text-white group-hover:text-[#00ff01] transition-colors">
                  {vid.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">{vid.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Modal Player */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-[#0c0f17] border border-[#00ff01]/40 rounded-2xl overflow-hidden shadow-2xl">
            <div className="flex justify-between items-center p-4 border-b border-white/10">
              <h4 className="text-sm font-bold text-[#00ff01] flex items-center">
                <Video className="w-4 h-4 mr-2" />
                Act Right Security Video Player
              </h4>
              <button
                onClick={() => setSelectedVideo(null)}
                className="p-1.5 rounded-lg bg-white/10 text-white hover:bg-[#00ff01] hover:text-black transition-colors"
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
    </div>
  );
}
