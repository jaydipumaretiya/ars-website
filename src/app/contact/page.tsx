"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Shield, PhoneCall } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceNeeded: "Armed Security Services",
    location: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceNeeded: "Armed Security Services",
        location: "",
        message: "",
      });
    }, 5000);
  };

  return (
    <div className="space-y-16 pb-20">
      {/* Header Banner */}
      <section className="relative py-16 bg-radial-gradient border-b border-white/10 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-extrabold text-[#00ff01] uppercase tracking-widest px-3 py-1 bg-[#00ff01]/10 rounded-full border border-[#00ff01]/30 inline-block">
            24/7 Live Emergency Dispatch
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white">
            CONTACT ACT RIGHT SECURITY
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto">
            Get in touch with our security dispatch team for instant quotes, emergency guard requests, or contract inquiries.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="glass-panel p-8 rounded-3xl border border-[#00ff01]/40 space-y-6 bg-radial-gradient">
              <div className="space-y-2">
                <span className="text-xs font-extrabold text-[#00ff01] uppercase tracking-wider block">
                  24/7 Emergency Line
                </span>
                <h3 className="text-2xl font-black text-white">Direct Dispatch Center</h3>
              </div>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 space-y-2">
                  <div className="flex items-center space-x-2 text-white font-bold text-base">
                    <Phone className="w-5 h-5 text-[#00ff01]" />
                    <a href="tel:9732890436" className="hover:text-[#00ff01]">(973) 289-0436</a>
                  </div>
                  <p className="text-[11px] text-slate-400">Headquarters Direct Dispatch Line</p>
                </div>

                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 space-y-2">
                  <div className="flex items-center space-x-2 text-white font-bold text-base">
                    <PhoneCall className="w-5 h-5 text-[#00ff01]" />
                    <a href="tel:8000000000" className="hover:text-[#00ff01]">(800) ARS-SECURITY</a>
                  </div>
                  <p className="text-[11px] text-slate-400">Toll-Free Nationwide Line</p>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-[#00ff01] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-white">Headquarters</h4>
                      <p className="text-slate-400">Newark, NJ 03101 & Regional Outposts Nationwide</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-[#00ff01] shrink-0" />
                    <div>
                      <h4 className="font-bold text-white">Email Us</h4>
                      <a href="mailto:info@actrightsecurity.com" className="text-slate-300 hover:text-[#00ff01]">
                        info@actrightsecurity.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-[#00ff01] shrink-0" />
                    <div>
                      <h4 className="font-bold text-white">Hours of Operation</h4>
                      <p className="text-[#00ff01] font-bold">Open 24 Hours a Day, 365 Days a Year</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Follow Act Right Security</h4>
              <div className="flex space-x-3">
                <a
                  href="https://www.facebook.com/Act-Right-Security-910824245762443"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-slate-300 hover:bg-[#00ff01] hover:text-black transition-all"
                >
                  Facebook Page
                </a>
                <a
                  href="https://www.instagram.com/actrightsecurity/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-slate-300 hover:bg-[#00ff01] hover:text-black transition-all"
                >
                  Instagram @actrightsecurity
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel border border-[#00ff01]/30 rounded-3xl p-8 sm:p-12 space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-black text-white">SEND US A MESSAGE</h2>
                <p className="text-xs text-slate-400">Fill out your security requirements below and a dispatch officer will reply promptly.</p>
              </div>

              {submitted ? (
                <div className="bg-[#00ff01]/10 border border-[#00ff01] text-[#00ff01] p-8 rounded-2xl text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 mx-auto" />
                  <h3 className="text-xl font-bold">Message Sent!</h3>
                  <p className="text-xs text-slate-300">
                    Thank you for contacting Act Right Security. A dispatch manager will be in touch within 15 minutes.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-300 block mb-1">Your Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-[#0c0f17] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#00ff01]"
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
                        className="w-full bg-[#0c0f17] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#00ff01]"
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
                        placeholder="(973) 289-0436"
                        className="w-full bg-[#0c0f17] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#00ff01]"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-300 block mb-1">Required Service</label>
                      <select
                        value={formData.serviceNeeded}
                        onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                        className="w-full bg-[#0c0f17] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#00ff01]"
                      >
                        <option>Armed Security Services</option>
                        <option>Unarmed Security Services</option>
                        <option>Mobile Patrol</option>
                        <option>Event Security & Crowd Control</option>
                        <option>Residential / HOA Security</option>
                        <option>Construction Site Security</option>
                        <option>Executive Protection</option>
                        <option>Retail Loss Prevention</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1">Property Location / City</label>
                    <input
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Manchester, NH or Newark, NJ"
                      className="w-full bg-[#0c0f17] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#00ff01]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1">Message / Guard Requirements</label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please describe your security needs, hours required, or start date..."
                      className="w-full bg-[#0c0f17] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-[#00ff01]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#00ff01] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-[#00cc01] hover:shadow-[0_0_30px_rgba(0,255,1,0.5)] transition-all flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Contact Request</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* Map Embed Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl overflow-hidden border border-[#00ff01]/30 p-2">
          <div className="relative h-96 w-full rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6249398.30418408!2d-79.0206318876113!3d40.10966159896507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c0fb959e00409f%3A0x2cd27b07f83f6d8d!2sNew%20Jersey%2C%20USA!5e0!3m2!1sen!2sin!4v1649136503493!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="filter grayscale contrast-125 hover:grayscale-0 transition-all"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
