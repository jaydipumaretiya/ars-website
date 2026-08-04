import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Shield, Globe } from "lucide-react";

export default function OfficesPage() {
  const offices = [
    {
      state: "New Jersey (Headquarters)",
      address: "Newark, NJ 03101",
      phone: "(973) 289-0436",
      email: "info@actrightsecurity.com",
      status: "HQ & 24/7 Dispatch Center",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6249398.30418408!2d-79.0206318876113!3d40.10966159896507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c0fb959e00409f%3A0x2cd27b07f83f6d8d!2sNew%20Jersey%2C%20USA!5e0!3m2!1sen!2sin!4v1649136503493!5m2!1sen!2sin",
    },
    {
      state: "New Hampshire",
      address: "Manchester, NH 03101",
      phone: "(973) 289-0436",
      email: "info@actrightsecurity.com",
      status: "Regional Office & Patrol Outpost",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.27990907297!2d-74.25987368715491!3d40.697670064588735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1649136628807!5m2!1sen!2sin",
    },
    {
      state: "New York",
      address: "New York Metro Area, NY",
      phone: "(973) 289-0436",
      email: "info@actrightsecurity.com",
      status: "Corporate & Event Operations",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.27990907297!2d-74.25987368715491!3d40.697670064588735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1649136628807!5m2!1sen!2sin",
    },
    {
      state: "Pennsylvania",
      address: "Philadelphia / State Region, PA",
      phone: "(973) 289-0436",
      email: "info@actrightsecurity.com",
      status: "Armed & Unarmed Guard Division",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3078769.063648601!2d-79.84839409407684!3d41.099358061921116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882d80261e32e589%3A0xc24621475022b43d!2sPennsylvania%2C%20USA!5e0!3m2!1sen!2sin!4v1649136712577!5m2!1sen!2sin",
    },
    {
      state: "Florida",
      address: "Miami / State Region, FL",
      phone: "(973) 289-0436",
      email: "info@actrightsecurity.com",
      status: "Resort & Event Security Division",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7245787.637879275!2d-88.30094670847048!3d27.532010719162397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c1766591562abf%3A0xf72e13d35bc74ed0!2sFlorida%2C%20USA!5e0!3m2!1sen!2sin!4v1649136789050!5m2!1sen!2sin",
    },
    {
      state: "California",
      address: "Los Angeles / Statewide CA",
      phone: "(973) 289-0436",
      email: "info@actrightsecurity.com",
      status: "Executive Protection & Retail",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13445482.873312376!2d-128.30414479191833!3d34.63983549189389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sin!4v1649136844553!5m2!1sen!2sin",
    },
    {
      state: "Georgia",
      address: "Atlanta, GA",
      phone: "(973) 289-0436",
      email: "info@actrightsecurity.com",
      status: "Commercial & Event Operations",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212258.72195036316!2d-84.55382446554793!3d33.772485518081105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5045d6993098d%3A0x66fede2f990b630b!2sAtlanta%2C%20GA%2C%20USA!5e0!3m2!1sen!2sin!4v1649136893343!5m2!1sen!2sin",
    },
    {
      state: "North Carolina",
      address: "Charlotte / Statewide NC",
      phone: "(973) 289-0436",
      email: "info@actrightsecurity.com",
      status: "Patrol & Construction Security",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3340382.487781394!2d-82.10505971022864!3d35.15431943754629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88541fc4fc381a81%3A0xad3f30f5e922ae19!2sNorth%20Carolina%2C%20USA!5e0!3m2!1sen!2sin!4v1649137234278!5m2!1sen!2sin",
    },
    {
      state: "Nevada",
      address: "Las Vegas, NV",
      phone: "(973) 289-0436",
      email: "info@actrightsecurity.com",
      status: "Casino & VIP Executive Escort",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6401478.817975925!2d-121.51575247224214!3d38.4247871644886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80990aa1f8deb471%3A0xcf47038aaafc95b3!2sNevada%2C%20USA!5e0!3m2!1sen!2sin!4v1649137318361!5m2!1sen!2sin",
    },
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* Header Banner */}
      <section className="relative py-16 bg-radial-gradient border-b border-white/10 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-extrabold text-[#00ff01] uppercase tracking-widest px-3 py-1 bg-[#00ff01]/10 rounded-full border border-[#00ff01]/30 inline-block">
            Nationwide Presence
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white">
            ACT RIGHT SECURITY OFFICES & LOCATIONS
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto">
            Headquartered in Newark, NJ with regional outposts in New Hampshire, New York, Pennsylvania, Florida, Georgia, California, North Carolina, and Las Vegas, Nevada.
          </p>
        </div>
      </section>

      {/* Offices Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offices.map((off, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover rounded-2xl overflow-hidden border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 bg-slate-900 border-b border-white/10">
                  <iframe
                    src={off.mapSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className="filter grayscale contrast-125 hover:grayscale-0 transition-all"
                  ></iframe>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-white">{off.state}</h3>
                    <span className="text-[10px] font-bold text-[#00ff01] bg-[#00ff01]/10 px-2.5 py-1 rounded border border-[#00ff01]/30">
                      {off.status}
                    </span>
                  </div>

                  <div className="space-y-2 text-xs text-slate-300">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-[#00ff01] shrink-0" />
                      <span>{off.address}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-[#00ff01] shrink-0" />
                      <a href={`tel:${off.phone.replace(/[^0-9]/g, "")}`} className="hover:text-[#00ff01]">
                        {off.phone}
                      </a>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-[#00ff01] shrink-0" />
                      <a href={`mailto:${off.email}`} className="hover:text-[#00ff01]">
                        {off.email}
                      </a>
                    </div>
                    <div className="flex items-center space-x-2 text-[#00ff01] pt-1 font-bold">
                      <Clock className="w-4 h-4 shrink-0" />
                      <span>Hours: Open 24/7/365</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href="/contact"
                  className="w-full py-2.5 bg-[#00ff01] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl block text-center hover:bg-[#00cc01] transition-all"
                >
                  Contact This Location
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
