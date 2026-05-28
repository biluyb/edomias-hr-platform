import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

const SERVICES_LINKS = ["Cleaning Services","Landscaping","Security Services","Skilled Labor","General Labor","Recruitment"];
const QUICK_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/clients", label: "Our Clients" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact Us" },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white/70">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-[10px] gradient-green flex items-center justify-center font-bold text-white text-lg">E</div>
              <div className="leading-tight">
                <div className="font-bold text-[15px] text-white">Edomias International</div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest">Est. 2005 · Ethiopia</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5 max-w-[260px]">
              Ethiopia's premier HR outsourcing and workforce solutions partner — helping organisations focus on growth since 2005.
            </p>
            <div className="flex gap-2">
              {["f","in","𝕏"].map((s) => (
                <div key={s} className="w-9 h-9 rounded-[9px] bg-white/8 border border-white/10 flex items-center justify-center text-sm cursor-pointer hover:bg-green hover:border-green hover:text-white transition-all duration-200">
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h5 className="text-xs font-extrabold uppercase tracking-widest text-white mb-5">Company</h5>
            <div className="flex flex-col gap-2">
              {QUICK_LINKS.map((l) => (
                <Link key={l.href} href={l.href} className="text-sm text-white/55 hover:text-green hover:pl-1.5 transition-all duration-200">{l.label}</Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-xs font-extrabold uppercase tracking-widest text-white mb-5">Services</h5>
            <div className="flex flex-col gap-2">
              {SERVICES_LINKS.map((s) => (
                <Link key={s} href="/services" className="text-sm text-white/55 hover:text-green hover:pl-1.5 transition-all duration-200">{s}</Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-xs font-extrabold uppercase tracking-widest text-white mb-5">Contact</h5>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-start">
                <MapPin size={15} className="text-green mt-0.5 flex-shrink-0" />
                <span className="text-sm leading-relaxed">Mexico Square, K Kare Building<br/>5th Floor, Office No. 60</span>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={15} className="text-green flex-shrink-0" />
                <a href="tel:+251115507905" className="text-sm hover:text-green transition-colors">+251 115 50 79 05</a>
              </div>
              <div className="flex gap-3 items-center">
                <Mail size={15} className="text-green flex-shrink-0" />
                <a href="mailto:info@hroutsourcingethiopia.net" className="text-sm hover:text-green transition-colors">info@hroutsourcingethiopia.net</a>
              </div>
            </div>
            <div className="mt-5 inline-flex items-center gap-2 bg-green-pale border border-green/30 rounded-full px-3 py-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-green animate-pulse-dot" />
              <span className="text-xs font-bold text-green-dark">ERP Integrated · Live</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <span>© 2026 Edomias International Plc. All rights reserved.</span>
          <span>Mexico Square, K Kare Building, 5th Floor — Addis Ababa, Ethiopia</span>
        </div>
      </div>
    </footer>
  );
}
