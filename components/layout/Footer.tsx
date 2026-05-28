"use client";
import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function Footer() {
  const { t } = useApp();

  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border-color)] py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[var(--brand-primary)] flex items-center justify-center font-bold text-white">E</div>
              <span className="font-display font-bold text-sm tracking-tight text-[var(--text-primary)]">EDOMIAS</span>
            </Link>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed max-w-[240px]">
              Strategic workforce solutions providing enterprise-grade HR outsourcing in Ethiopia since 2005.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded bg-[var(--bg-primary)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--brand-primary)] transition-colors">
                <Linkedin size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded bg-[var(--bg-primary)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--brand-primary)] transition-colors">
                <Twitter size={14} />
              </a>
            </div>
          </div>

          <div>
             <h5 className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-primary)] mb-6">Capabilities</h5>
             <ul className="space-y-3 text-xs text-[var(--text-secondary)]">
                <li><Link href="/services" className="hover:text-[var(--brand-primary)] transition-colors">Staffing & Recruitment</Link></li>
                <li><Link href="/services" className="hover:text-[var(--brand-primary)] transition-colors">Facility Management</Link></li>
                <li><Link href="/services" className="hover:text-[var(--brand-primary)] transition-colors">Labor Relations</Link></li>
                <li><Link href="/services" className="hover:text-[var(--brand-primary)] transition-colors">Compliance Auditing</Link></li>
             </ul>
          </div>

          <div>
             <h5 className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-primary)] mb-6">Corporate</h5>
             <ul className="space-y-3 text-xs text-[var(--text-secondary)]">
                <li><Link href="/about" className="hover:text-[var(--brand-primary)] transition-colors">Company Story</Link></li>
                <li><Link href="/clients" className="hover:text-[var(--brand-primary)] transition-colors">Our Clients</Link></li>
                <li><Link href="/news" className="hover:text-[var(--brand-primary)] transition-colors">News Room</Link></li>
                <li><Link href="/contact" className="hover:text-[var(--brand-primary)] transition-colors">Inquiries</Link></li>
             </ul>
          </div>

          <div>
             <h5 className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-primary)] mb-6">Headquarters</h5>
             <ul className="space-y-4 text-xs text-[var(--text-secondary)]">
                <li className="flex gap-3 items-start">
                   <MapPin size={14} className="text-[var(--brand-primary)] mt-0.5" />
                   <span>Mexico Square, K Kare Building<br/>5th Floor, Addis Ababa</span>
                </li>
                <li className="flex gap-3 items-center">
                   <Phone size={14} className="text-[var(--brand-primary)]" />
                   <span>+251 115 50 79 05</span>
                </li>
                <li className="flex gap-3 items-center">
                   <Mail size={14} className="text-[var(--brand-primary)]" />
                   <span>info@hroutsourcingethiopia.net</span>
                </li>
             </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[var(--border-color)] flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-[var(--text-muted)] font-semibold uppercase tracking-widest">
           <p>© 2026 Edomias International Plc. All Rights Reserved.</p>
           <div className="flex gap-6">
              <a href="#" className="hover:text-[var(--brand-primary)]">Privacy Policy</a>
              <a href="#" className="hover:text-[var(--brand-primary)]">Terms of Service</a>
           </div>
        </div>
      </div>
    </footer>
  );
}
