"use client";
import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter, Globe, ArrowUp, Instagram, Facebook, ShieldCheck } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { motion } from "framer-motion";

export default function Footer() {
  const { t } = useApp();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[var(--bg-main)] border-t border-[var(--border-soft)] pt-32 pb-12 relative overflow-hidden">
      {/* Aesthetic Accents */}
      <div className="absolute bottom-0 left-0 w-full h-[6px] bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--primary)] opacity-30" />
      
      <div className="container-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
          
          {/* BRAND COLUMN */}
          <div className="lg:col-span-5 space-y-10">
            <Link href="/" className="group flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-2xl bg-[var(--primary)] flex items-center justify-center overflow-hidden shadow-xl group-hover:rotate-6 transition-all">
                 <span className="text-white font-display font-black text-2xl z-10">E</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-sm tracking-[0.2em] text-[var(--primary)] uppercase">EDOMIAS</span>
                <span className="text-[9px] font-bold text-[var(--accent)] uppercase tracking-[0.3em] -mt-1 group-hover:tracking-[0.4em] transition-all">Strategic Partner</span>
              </div>
            </Link>
            
            <p className="text-lg text-[var(--text-dim)] font-medium leading-relaxed max-w-sm italic-accent">
              "Standardizing Excellence in Human Capital for the East African Industrial Landscape since 2005."
            </p>

            <div className="flex gap-4">
              {[
                { i: <Linkedin size={18}/>, h: "#" },
                { i: <Facebook size={18}/>, h: "#" },
                { i: <Twitter size={18}/>, h: "#" },
                { i: <Instagram size={18}/>, h: "#" }
              ].map((soc, i) => (
                <a key={i} href={soc.h} className="w-12 h-12 rounded-2xl bg-[var(--bg-ghost)] flex items-center justify-center text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white hover:-translate-y-2 transition-all shadow-lux">
                  {soc.i}
                </a>
              ))}
            </div>
          </div>

          {/* NAV MATRICES */}
          <div className="lg:col-span-2 space-y-8">
             <h5 className="text-[11px] font-black uppercase tracking-[0.4em] text-[var(--primary)] border-b border-[var(--accent)] pb-3 w-fit">Expertise</h5>
             <ul className="space-y-4 text-[12px] font-bold text-[var(--text-dim)] transition-all">
                <li><Link href="/services" className="hover:text-[var(--primary)] hover:translate-x-2 inline-block transition-all">Staffing Engine</Link></li>
                <li><Link href="/services" className="hover:text-[var(--primary)] hover:translate-x-2 inline-block transition-all">Facility Logistics</Link></li>
                <li><Link href="/services" className="hover:text-[var(--primary)] hover:translate-x-2 inline-block transition-all">Labor Compliance</Link></li>
                <li><Link href="/services" className="hover:text-[var(--primary)] hover:translate-x-2 inline-block transition-all">HR Intelligence</Link></li>
             </ul>
          </div>

          <div className="lg:col-span-2 space-y-8">
             <h5 className="text-[11px] font-black uppercase tracking-[0.4em] text-[var(--primary)] border-b border-[var(--accent)] pb-3 w-fit">Enterprise</h5>
             <ul className="space-y-4 text-[12px] font-bold text-[var(--text-dim)] transition-all">
                <li><Link href="/about" className="hover:text-[var(--primary)] hover:translate-x-2 inline-block transition-all">{t.nav.about}</Link></li>
                <li><Link href="/clients" className="hover:text-[var(--primary)] hover:translate-x-2 inline-block transition-all">{t.nav.clients}</Link></li>
                <li><Link href="/news" className="hover:text-[var(--primary)] hover:translate-x-2 inline-block transition-all">{t.nav.news}</Link></li>
                <li><Link href="/contact" className="hover:text-[var(--primary)] hover:translate-x-2 inline-block transition-all">{t.nav.contact}</Link></li>
             </ul>
          </div>

          {/* CONTACT BRIEF */}
          <div className="lg:col-span-3 space-y-8">
             <h5 className="text-[11px] font-black uppercase tracking-[0.4em] text-[var(--primary)] border-b border-[var(--accent)] pb-3 w-fit">Institutional HQ</h5>
             <ul className="space-y-6">
                <li className="flex gap-4 items-start">
                   <div className="p-3 bg-[var(--bg-ghost)] rounded-xl text-[var(--accent)] mt-1"><MapPin size={18}/></div>
                   <span className="text-[12px] font-medium leading-relaxed text-[var(--text-dim)]">Mexico Square, K Kare Building, 5th Floor, Addis Ababa, Ethiopia</span>
                </li>
                <li className="flex gap-4 items-center">
                   <div className="p-3 bg-[var(--bg-ghost)] rounded-xl text-[var(--accent)]"><Mail size={18}/></div>
                   <span className="text-[12px] font-bold text-[var(--text-dim)]">communications@edomias.net</span>
                </li>
             </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-12 border-t border-[var(--border-soft)] flex flex-col md:flex-row justify-between items-center gap-10">
           <div className="flex flex-col gap-2 items-center md:items-start">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--text-dim)]">© 2026 EDOMIAS INTERNATIONAL PLC.</p>
              <p className="text-[9px] font-bold text-[var(--accent)] uppercase tracking-widest flex items-center gap-2">
                 <ShieldCheck size={12}/> Unified Institutional Partner
              </p>
           </div>

           <motion.button 
             whileHover={{ y: -10 }}
             onClick={scrollToTop}
             className="w-16 h-16 rounded-full bg-[var(--bg-ghost)] border border-[var(--border-soft)] flex items-center justify-center text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-all shadow-lux"
           >
             <ArrowUp size={24} />
           </motion.button>

           <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-[var(--text-dim)]">
              <a href="#" className="hover:text-[var(--primary)] transition-colors">Privacy Codex</a>
              <a href="#" className="hover:text-[var(--primary)] transition-colors">Terms of Engagement</a>
           </div>
        </div>
      </div>
    </footer>
  );
}
