"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  Phone, 
  Mail, 
  Shield, 
  ChevronDown, 
  Menu, 
  X, 
  Clock, 
  MapPin, 
  Award,
  Users,
  FileCheck,
  Zap,
  Building,
  HardHat,
  Lock,
  Camera,
  Car,
  CheckCircle2,
  PhoneCall
} from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const servicesCategories = [
    {
      title: "Guarding & Patrol",
      items: [
        { name: "Unarmed Security Services", href: "/services/unarmed-security-services" },
        { name: "Armed Security Services", href: "/services/armed-security-service" },
        { name: "Mobile Vehicle Patrol", href: "/services/mobile-patrol" },
        { name: "Executive Protection", href: "/services/executive-protection" },
      ]
    },
    {
      title: "Property & Facility Safety",
      items: [
        { name: "Residential & HOA Security", href: "/services/residential-security" },
        { name: "Commercial Properties", href: "/services/commercial-properties" },
        { name: "Construction Sites", href: "/services/construction-sites" },
        { name: "Retail Store Protection", href: "/services/retail-stores" },
        { name: "Healthcare & Hospitals", href: "/services/healthcare-institutions" },
        { name: "Hotel & Hospitality", href: "/services/hotel-security" },
      ]
    },
    {
      title: "Specialized Operations",
      items: [
        { name: "Event & Crowd Control", href: "/services/event-security" },
        { name: "Access Control & Gatekeeping", href: "/services/access-control" },
        { name: "Alarm Response Services", href: "/services/alarm-response" },
        { name: "Cash & Valuable Transport", href: "/services/cash-transport" },
        { name: "Bank Protection Services", href: "/services/bank-protection-services" },
        { name: "Private Investigations", href: "/services/private-investigations" },
      ]
    },
    {
      title: "Public & Consulting",
      items: [
        { name: "Campus & Educational Safety", href: "/services/campus-safety" },
        { name: "Campgrounds & Parks", href: "/services/campgrounds-parks" },
        { name: "Concierge & Front Desk", href: "/services/concierge-services" },
        { name: "Security Risk Consulting", href: "/services/consulting-services" },
        { name: "Employee Terminations", href: "/services/employee-terminations" },
        { name: "COVID-19 Safety", href: "/services/covid-19" },
      ]
    }
  ];

  const aboutPages = [
    { name: "About the Company", href: "/about" },
    { name: "Our Mission & Values", href: "/about/our-mission" },
    { name: "Security Officers Standards", href: "/about/security-officer" },
    { name: "Regional Offices", href: "/about/offices" },
    { name: "Operational Divisions", href: "/about/divisions" },
    { name: "Guard Training Academy", href: "/about/training" },
    { name: "Licensing & Permits", href: "/about/licensing" },
    { name: "Why Choose Act Right?", href: "/about/why-choose-us" },
    { name: "Ethics Line & Hotline", href: "/about/ethics-line" },
    { name: "Frequently Asked Questions", href: "/about/faq" },
    { name: "COVID-19 Statement", href: "/about/covid-19-statement" },
  ];

  const workPages = [
    { name: "Field Portfolio", href: "/work" },
    { name: "Client Testimonials", href: "/work/testimonials" },
    { name: "Photo Gallery", href: "/work/gallery" },
    { name: "Video Showcase", href: "/work/videos" },
    { name: "Client Case Studies", href: "/work/client-case-studies" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top utility bar */}
      <div className="bg-[#040508] border-b border-white/10 text-xs py-2 px-4 hidden lg:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-slate-300">
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-[#00ff01] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#00ff01] animate-ping mr-2"></span>
              24/7 Emergency Dispatch Active
            </span>
            <span className="flex items-center text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-[#00ff01] mr-1.5" />
              Serving Manchester, NH & Nationwide
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <a href="tel:8000000000" className="flex items-center hover:text-[#00ff01] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#00ff01] mr-1.5" />
              Direct: (800) ARS-SECURITY
            </a>
            <a href="mailto:info@actrightsecurity.com" className="flex items-center hover:text-[#00ff01] transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#00ff01] mr-1.5" />
              info@actrightsecurity.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-[#06080c]/90 backdrop-blur-xl border-b border-[#00ff01]/20 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-3"
            : "bg-[#06080c]/70 backdrop-blur-md border-b border-white/5 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-48 sm:w-56 h-12 flex items-center">
              <img
                src="/image/logo-white.png"
                alt="Act Right Security (ARS)"
                className="max-h-full object-contain filter drop-shadow-[0_0_8px_rgba(0,255,1,0.3)] transition-transform group-hover:scale-105"
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link
              href="/"
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
                pathname === "/"
                  ? "text-[#00ff01] bg-[#00ff01]/10 border border-[#00ff01]/30"
                  : "text-slate-200 hover:text-[#00ff01] hover:bg-white/5"
              }`}
            >
              Home
            </Link>

            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("about")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`px-4 py-2 text-sm font-semibold rounded-lg flex items-center transition-all ${
                  pathname.startsWith("/about")
                    ? "text-[#00ff01] bg-[#00ff01]/10 border border-[#00ff01]/30"
                    : "text-slate-200 hover:text-[#00ff01] hover:bg-white/5"
                }`}
              >
                About
                <ChevronDown className="w-4 h-4 ml-1 text-[#00ff01]" />
              </button>

              {activeDropdown === "about" && (
                <div className="absolute top-full left-0 w-72 pt-2 z-50">
                  <div className="bg-[#0c0f17]/95 backdrop-blur-2xl border border-[#00ff01]/30 rounded-xl p-3 shadow-[0_20px_50px_rgba(0,0,0,0.9)] space-y-1">
                    {aboutPages.map((page) => (
                      <Link
                        key={page.href}
                        href={page.href}
                        className="block px-3 py-2 text-xs font-medium text-slate-200 hover:text-[#00ff01] hover:bg-[#00ff01]/10 rounded-lg transition-colors"
                      >
                        {page.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Services Mega Menu Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/services"
                className={`px-4 py-2 text-sm font-semibold rounded-lg flex items-center transition-all ${
                  pathname.startsWith("/services")
                    ? "text-[#00ff01] bg-[#00ff01]/10 border border-[#00ff01]/30"
                    : "text-slate-200 hover:text-[#00ff01] hover:bg-white/5"
                }`}
              >
                Services
                <ChevronDown className="w-4 h-4 ml-1 text-[#00ff01]" />
              </Link>

              {activeDropdown === "services" && (
                <div className="absolute top-full -left-48 w-[850px] pt-2 z-50">
                  <div className="bg-[#0c0f17]/95 backdrop-blur-2xl border border-[#00ff01]/30 rounded-2xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.95)]">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                      <div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center">
                          <Shield className="w-4 h-4 text-[#00ff01] mr-2" />
                          Act Right Security Solutions
                        </h4>
                        <p className="text-xs text-slate-400">Comprehensive protective guarding & risk management</p>
                      </div>
                      <Link
                        href="/services"
                        className="text-xs font-bold text-[#00ff01] hover:underline flex items-center"
                      >
                        View All Services →
                      </Link>
                    </div>

                    <div className="grid grid-cols-4 gap-6">
                      {servicesCategories.map((cat, idx) => (
                        <div key={idx} className="space-y-2">
                          <h5 className="text-xs font-bold text-[#00ff01] uppercase tracking-wide border-b border-[#00ff01]/20 pb-1">
                            {cat.title}
                          </h5>
                          <ul className="space-y-1">
                            {cat.items.map((item) => (
                              <li key={item.href}>
                                <Link
                                  href={item.href}
                                  className="block py-1 text-xs text-slate-300 hover:text-[#00ff01] hover:translate-x-1 transition-all"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Work Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("work")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/work"
                className={`px-4 py-2 text-sm font-semibold rounded-lg flex items-center transition-all ${
                  pathname.startsWith("/work")
                    ? "text-[#00ff01] bg-[#00ff01]/10 border border-[#00ff01]/30"
                    : "text-slate-200 hover:text-[#00ff01] hover:bg-white/5"
                }`}
              >
                Work
                <ChevronDown className="w-4 h-4 ml-1 text-[#00ff01]" />
              </Link>

              {activeDropdown === "work" && (
                <div className="absolute top-full left-0 w-64 pt-2 z-50">
                  <div className="bg-[#0c0f17]/95 backdrop-blur-2xl border border-[#00ff01]/30 rounded-xl p-3 shadow-[0_20px_50px_rgba(0,0,0,0.9)] space-y-1">
                    {workPages.map((page) => (
                      <Link
                        key={page.href}
                        href={page.href}
                        className="block px-3 py-2 text-xs font-medium text-slate-200 hover:text-[#00ff01] hover:bg-[#00ff01]/10 rounded-lg transition-colors"
                      >
                        {page.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/career"
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
                pathname === "/career"
                  ? "text-[#00ff01] bg-[#00ff01]/10 border border-[#00ff01]/30"
                  : "text-slate-200 hover:text-[#00ff01] hover:bg-white/5"
              }`}
            >
              Careers
            </Link>

            <Link
              href="/contact"
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
                pathname === "/contact"
                  ? "text-[#00ff01] bg-[#00ff01]/10 border border-[#00ff01]/30"
                  : "text-slate-200 hover:text-[#00ff01] hover:bg-white/5"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Quick Contact CTA Button */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-xl bg-[#00ff01] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#00cc01] hover:shadow-[0_0_20px_rgba(0,255,1,0.5)] transition-all flex items-center transform hover:-translate-y-0.5"
            >
              <PhoneCall className="w-4 h-4 mr-2" />
              Instant Quote
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 text-[#00ff01] bg-[#00ff01]/10 rounded-xl border border-[#00ff01]/30 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[65px] bg-[#06080c]/98 backdrop-blur-3xl z-40 overflow-y-auto p-6 border-t border-[#00ff01]/20">
          <div className="space-y-4">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-3 font-bold text-lg text-[#00ff01] border-b border-white/10"
            >
              Home
            </Link>

            <div>
              <div className="font-bold text-[#00ff01] p-3 text-[#00ff01] border-b border-white/10 flex justify-between items-center">
                About ARS
              </div>
              <div className="pl-4 space-y-2 mt-2">
                {aboutPages.map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block p-2 text-sm text-slate-300 hover:text-[#00ff01]"
                  >
                    {page.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div className="font-bold text-[#00ff01] p-3 border-b border-white/10 flex justify-between items-center">
                Services (24)
              </div>
              <div className="pl-4 space-y-2 mt-2">
                <Link
                  href="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block p-2 text-sm font-bold text-[#00ff01]"
                >
                  All Services Directory →
                </Link>
                {servicesCategories.map((cat, i) => (
                  <div key={i} className="py-1">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      {cat.title}
                    </span>
                    {cat.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block p-1.5 text-xs text-slate-300 hover:text-[#00ff01]"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="font-bold text-[#00ff01] p-3 border-b border-white/10">
                Work & Gallery
              </div>
              <div className="pl-4 space-y-2 mt-2">
                {workPages.map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block p-2 text-sm text-slate-300 hover:text-[#00ff01]"
                  >
                    {page.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/career"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-3 font-bold text-lg text-slate-200 border-b border-white/10"
            >
              Careers
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block p-3 font-bold text-lg text-slate-200 border-b border-white/10"
            >
              Contact
            </Link>

            <div className="pt-4 space-y-3">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 bg-[#00ff01] text-black font-extrabold text-center rounded-xl block uppercase tracking-wider text-sm shadow-[0_0_20px_rgba(0,255,1,0.4)]"
              >
                Request Quote Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
