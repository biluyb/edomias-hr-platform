"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Globe, Moon, Sun, ChevronRight } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { t, theme, setTheme, locale, setLocale } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NAV_LINKS = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/services", label: t.nav.services },
    { href: "/clients", label: t.nav.clients },
    { href: "/news", label: t.nav.news },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled ? "h-20 glass-ui shadow-lux" : "h-24 bg-transparent"
      }`}
    >
      <div className="container-full h-full flex items-center justify-between">
        {/* LOGO ARCHITECTURE */}
        <Link href="/" className="group flex items-center gap-4">
          <div className="relative w-12 h-12 rounded-2xl bg-[var(--primary)] flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:rotate-[10deg] shadow-xl">
             <span className="text-white font-display font-black text-2xl z-10">E</span>
             <div className="absolute inset-0 bg-[var(--accent)] translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-20" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-black text-sm tracking-[0.2em] text-[var(--primary)] uppercase">EDOMIAS</span>
            <span className="text-[9px] font-bold text-[var(--accent)] uppercase tracking-[0.3em] -mt-1 group-hover:tracking-[0.4em] transition-all">Strategic Partner</span>
          </div>
        </Link>

        {/* DESKTOP NAV - CENTERED */}
        <nav className="hidden lg:flex items-center gap-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-5 py-2 text-[11px] font-bold uppercase tracking-widest transition-all hover:text-[var(--primary)] group ${
                pathname === link.href ? "text-[var(--primary)]" : "text-[var(--text-dim)]"
              }`}
            >
              {link.label}
              <span className={`absolute bottom-0 left-5 right-5 h-[2px] bg-[var(--accent)] transition-all duration-300 ${
                pathname === link.href ? "opacity-100" : "opacity-0 group-hover:opacity-50"
              }`} />
            </Link>
          ))}
        </nav>

        {/* UTILITIES HUB */}
        <div className="flex items-center gap-4">
           {/* LOCALE DROPDOWN - CUSTOM STYLED */}
           <div className="hidden sm:flex items-center bg-[var(--bg-ghost)] border border-[var(--border-soft)] rounded-full pl-4 pr-1 py-1 gap-2 hover:border-[var(--primary)] transition-all">
              <Globe size={14} className="text-[var(--primary)]" />
              <select
                value={locale}
                onChange={(e) => setLocale(e.target.value as any)}
                className="bg-transparent text-[10px] font-black uppercase tracking-widest focus:outline-none cursor-pointer pr-8 py-2"
              >
                <option value="en">English</option>
                <option value="am">አማርኛ</option>
                <option value="or">Oromoo</option>
              </select>
           </div>

           {/* THEME TOGGLE - ANIMATED */}
           <button 
             onClick={() => setTheme(theme === "light" ? "dark" : "light")}
             className="w-10 h-10 rounded-full flex items-center justify-center text-[var(--primary)] hover:bg-[var(--bg-ghost)] transition-all relative overflow-hidden"
           >
             <div className={`transition-all duration-500 ${theme === "light" ? "rotate-0 scale-100" : "rotate-90 scale-0"}`}>
               <Moon size={18} />
             </div>
             <div className={`absolute transition-all duration-500 ${theme === "dark" ? "rotate-0 scale-100" : "rotate-90 scale-0"}`}>
               <Sun size={18} />
             </div>
           </button>

           <Link href="/jobs" className="btn-elite btn-primary-elite hidden md:flex active:scale-95">
              {t.nav.jobs}
           </Link>

           {/* MOBILE TRIGGER */}
           <button 
             onClick={() => setIsOpen(!isOpen)} 
             className="lg:hidden w-12 h-12 flex items-center justify-center rounded-2xl bg-[var(--bg-ghost)] text-[var(--primary)] active:scale-90 transition-all"
           >
             {isOpen ? <X size={24} /> : <Menu size={24} />}
           </button>
        </div>
      </div>

      {/* MOBILE FULLSCREEN OVERLAY */}
      <div className={`lg:hidden fixed inset-0 top-0 bg-[var(--bg-main)] z-[200] transition-all duration-700 ${
        isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}>
        <div className="h-20 container-full flex items-center justify-between border-b border-[var(--border-soft)]">
           <span className="font-display font-black text-sm tracking-widest text-[var(--primary)]">MENU</span>
           <button onClick={() => setIsOpen(false)} className="w-12 h-12 flex items-center justify-center bg-[var(--bg-ghost)] rounded-2xl">
             <X size={24} />
           </button>
        </div>
        
        <div className="p-8 space-y-10">
          <nav className="flex flex-col gap-6">
            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-4xl font-display font-bold text-[var(--text-main)] hover:text-[var(--primary)] transition-all flex items-center justify-between group"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {link.label}
                <ChevronRight className="opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all text-[var(--accent)]" />
              </Link>
            ))}
          </nav>

          <div className="pt-10 border-t border-[var(--border-soft)] space-y-6">
             <div className="flex flex-col gap-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-[var(--text-dim)]">Regional Accessibility</span>
                <div className="grid grid-cols-3 gap-2">
                   {["en", "am", "or"].map((lang) => (
                      <button 
                        key={lang}
                        onClick={() => { setLocale(lang as any); setIsOpen(false); }}
                        className={`py-3 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all ${
                          locale === lang ? "bg-[var(--primary)] text-white border-[var(--primary)] shadow-lg" : "border-[var(--border-soft)] text-[var(--text-dim)]"
                        }`}
                      >
                         {lang === "en" ? "ENG" : lang === "am" ? "አማርኛ" : "ORO"}
                      </button>
                   ))}
                </div>
             </div>
             <Link href="/jobs" onClick={() => setIsOpen(false)} className="btn-elite btn-primary-elite w-full py-5 text-sm">
                Open Career Portal
             </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
