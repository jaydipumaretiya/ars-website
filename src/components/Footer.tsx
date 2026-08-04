import Link from "next/link";
import Image from "next/image";
import { Shield, Phone, Mail, MapPin, CheckCircle2, ChevronRight, Lock, Award } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#030406] border-t border-[#00ff01]/20 pt-16 pb-8 relative overflow-hidden text-slate-300">
      {/* Glow Backdrop */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-[#00ff01]/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block">
              <img
                src="/image/logo-white.png"
                alt="Act Right Security (ARS)"
                className="h-12 object-contain"
              />
            </Link>
            
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              <strong className="text-white">Act Right Security (ARS)</strong> is your premier licensed security partner. Providing elite armed & unarmed guarding, mobile patrols, executive protection, and security consulting across Manchester, NH, and nationwide.
            </p>

            <div className="flex items-center space-x-2 text-xs font-semibold text-[#00ff01] bg-[#00ff01]/10 px-3 py-2 rounded-lg border border-[#00ff01]/30 w-fit">
              <Shield className="w-4 h-4" />
              <span>Licensed, Bonded & Insured Security Partner</span>
            </div>

            {/* Accreditations */}
            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                Official Certifications & Partners
              </span>
              <div className="flex items-center space-x-4 bg-white/5 p-3 rounded-xl border border-white/10 w-fit">
                <img src="/image/sia.png" alt="SIA Certified" className="h-8 object-contain filter grayscale hover:grayscale-0 transition-all" />
                <img src="/image/ifpo.png" alt="IFPO Member" className="h-8 object-contain filter grayscale hover:grayscale-0 transition-all" />
                <img src="/image/bbb.png" alt="BBB Accredited" className="h-8 object-contain filter grayscale hover:grayscale-0 transition-all" />
                <img src="/image/license.webp" alt="Licensed Security" className="h-8 object-contain filter grayscale hover:grayscale-0 transition-all" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-[#00ff01]/30 pb-2 flex items-center">
              <ChevronRight className="w-4 h-4 text-[#00ff01] mr-1" />
              About ARS
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/about" className="hover:text-[#00ff01] transition-colors flex items-center">
                  About the Company
                </Link>
              </li>
              <li>
                <Link href="/about/our-mission" className="hover:text-[#00ff01] transition-colors flex items-center">
                  Our Mission & Values
                </Link>
              </li>
              <li>
                <Link href="/about/security-officer" className="hover:text-[#00ff01] transition-colors flex items-center">
                  Security Officers Standards
                </Link>
              </li>
              <li>
                <Link href="/about/offices" className="hover:text-[#00ff01] transition-colors flex items-center">
                  Regional Offices
                </Link>
              </li>
              <li>
                <Link href="/about/divisions" className="hover:text-[#00ff01] transition-colors flex items-center">
                  Operational Divisions
                </Link>
              </li>
              <li>
                <Link href="/about/training" className="hover:text-[#00ff01] transition-colors flex items-center">
                  Guard Training Academy
                </Link>
              </li>
              <li>
                <Link href="/about/licensing" className="hover:text-[#00ff01] transition-colors flex items-center">
                  Licensing & Compliance
                </Link>
              </li>
              <li>
                <Link href="/about/why-choose-us" className="hover:text-[#00ff01] transition-colors flex items-center">
                  Why Choose Us?
                </Link>
              </li>
              <li>
                <Link href="/about/ethics-line" className="hover:text-[#00ff01] transition-colors flex items-center text-[#00ff01]">
                  Ethics Line & Hotline
                </Link>
              </li>
              <li>
                <Link href="/about/faq" className="hover:text-[#00ff01] transition-colors flex items-center">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Top Services */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-[#00ff01]/30 pb-2 flex items-center">
              <ChevronRight className="w-4 h-4 text-[#00ff01] mr-1" />
              Core Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/services/unarmed-security-services" className="hover:text-[#00ff01] transition-colors">
                  Unarmed Security Guards
                </Link>
              </li>
              <li>
                <Link href="/services/armed-security-service" className="hover:text-[#00ff01] transition-colors">
                  Armed Security Services
                </Link>
              </li>
              <li>
                <Link href="/services/event-security" className="hover:text-[#00ff01] transition-colors">
                  Event & Crowd Security
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-patrol" className="hover:text-[#00ff01] transition-colors">
                  Mobile Vehicle Patrol
                </Link>
              </li>
              <li>
                <Link href="/services/residential-security" className="hover:text-[#00ff01] transition-colors">
                  Residential & HOA Guarding
                </Link>
              </li>
              <li>
                <Link href="/services/construction-sites" className="hover:text-[#00ff01] transition-colors">
                  Construction Site Safety
                </Link>
              </li>
              <li>
                <Link href="/services/retail-stores" className="hover:text-[#00ff01] transition-colors">
                  Retail Loss Prevention
                </Link>
              </li>
              <li>
                <Link href="/services/executive-protection" className="hover:text-[#00ff01] transition-colors">
                  Executive Protection
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[#00ff01] font-bold hover:underline block pt-2">
                  View All 24 Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Emergency & Direct Contact */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-[#00ff01]/30 pb-2 flex items-center">
              <Phone className="w-4 h-4 text-[#00ff01] mr-1" />
              24/7 Dispatch
            </h4>

            <div className="space-y-4 text-xs">
              <div className="p-3 bg-[#0c0f17] border border-[#00ff01]/30 rounded-xl space-y-2">
                <span className="text-[#00ff01] font-bold block uppercase tracking-wider text-[11px]">
                  Emergency Security Hotline
                </span>
                <a href="tel:8000000000" className="text-lg font-black text-white hover:text-[#00ff01] block">
                  (800) ARS-SECURITY
                </a>
                <p className="text-[11px] text-slate-400">Available 24 Hours a Day, 365 Days a Year</p>
              </div>

              <div className="space-y-2 pt-2">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-[#00ff01] shrink-0 mt-0.5" />
                  <span>Act Right Security HQ<br />Manchester, NH & Offices Nationwide</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-[#00ff01] shrink-0" />
                  <a href="mailto:info@actrightsecurity.com" className="hover:text-[#00ff01]">info@actrightsecurity.com</a>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="w-full py-2.5 bg-[#00ff01] text-black font-extrabold text-center rounded-xl block text-xs uppercase tracking-wider hover:bg-[#00cc01] transition-all shadow-[0_0_15px_rgba(0,255,1,0.3)]"
                >
                  Request Fast Quote
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Act Right Security (ARS). All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/about/licensing" className="hover:text-slate-300">Licensing Information</Link>
            <Link href="/about/ethics-line" className="hover:text-slate-300">Ethics Line</Link>
            <Link href="/about/covid-19-statement" className="hover:text-slate-300">COVID-19 Policy</Link>
            <Link href="/contact" className="hover:text-slate-300">Privacy & Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
