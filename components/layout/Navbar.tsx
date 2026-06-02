"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Globe, Moon, Sun, ChevronDown } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { t, theme, setTheme, locale, setLocale } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showLang, setShowLang] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
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

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'am', label: 'አማርኛ' },
    { code: 'or', label: 'Oromoo' }
  ];

  return (
    <header 
      style={{ zIndex: 9999 }}
      className="fixed top-0 left-0 right-0 h-20 bg-[var(--bg-main)] border-b border-[var(--border)] shadow-sm flex items-center transition-all duration-300"
    >
      <div className="container-full h-full flex items-center justify-between gap-4">
        {/* LOGO - ARCHITECTURAL BRANDING */}
        <Link href="/" className="group flex items-center gap-3 shrink-0">
          <div className="relative w-12 h-12 flex items-center justify-center">
             <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-500 group-hover:rotate-12">
               <path d="M24 4L4 44H44L24 4Z" stroke="var(--primary)" strokeWidth="4" strokeLinejoin="round" />
               <path d="M24 16L12 40H36L24 16Z" fill="var(--secondary)" />
               <rect x="22" y="32" width="4" height="12" fill="var(--primary)" />
             </svg>
          </div>
          <div className="flex flex-col -gap-1">
            <span className="font-display font-black text-lg tracking-tight text-[var(--primary)] transition-colors">EDOMIAS</span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--secondary)]">International Plc</span>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden xl:flex items-center gap-2 bg-[var(--bg-ghost)]/50 p-1.5 rounded-full border border-[var(--border)]">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all ${
                pathname === link.href ? "bg-[var(--primary)] text-white shadow-lg" : "text-[var(--text-dim)] hover:text-[var(--primary)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* UTILS HUB */}
        <div className="flex items-center gap-3">
           {/* THEME TOGGLE */}
           <button 
             onClick={() => setTheme(theme === "light" ? "dark" : "light")}
             className="w-11 h-11 rounded-2xl bg-[var(--bg-ghost)] border border-[var(--border)] flex items-center justify-center text-[var(--primary)] active:scale-90 transition-all hover:border-[var(--secondary)]"
           >
             {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
           </button>

           {/* HIGH-END LANG SELECTOR */}
           <div className="relative hidden sm:block">
              <button 
                onClick={() => setShowLang(!showLang)}
                className="lang-dropdown flex items-center gap-4 active:scale-95"
              >
                <Globe size={16} className="text-[var(--primary)]" />
                <span className="uppercase tracking-widest text-[10px]">{locale === 'en' ? 'English' : locale === 'am' ? 'አማርኛ' : 'Oromoo'}</span>
                <ChevronDown size={14} className={`transition-transform duration-300 ${showLang ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {showLang && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-full right-0 mt-3 w-64 bg-[var(--bg-main)] border border-[var(--border)] rounded-[2rem] shadow-2xl p-3 overflow-hidden z-[9999]"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => { setLocale(lang.code as any); setShowLang(false); }}
                        className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all ${locale === lang.code ? 'bg-[var(--primary)] text-white shadow-lg' : 'hover:bg-[var(--bg-ghost)]'}`}
                      >
                        <div className="flex flex-col items-start">
                          <span className="text-sm font-bold">{lang.label}</span>
                        </div>
                        {locale === lang.code && <div className="w-2 h-2 rounded-full bg-[var(--secondary)]" />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
           </div>

           <Link href="/jobs" className="hidden lg:flex px-8 py-4 bg-[var(--primary)] text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl hover:shadow-emerald-900/20 active:scale-95 transition-all">
              {t.nav.jobs}
           </Link>

           {/* MOBILE TRIGGER */}
           <button 
             onClick={() => setIsOpen(!isOpen)} 
             className="xl:hidden btn-mobile-trigger"
           >
             {isOpen ? <X size={20} /> : <Menu size={20} />}
           </button>
        </div>
      </div>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[var(--bg-main)] z-[9999] overflow-y-auto"
          >
            <div className="h-24 container-full flex items-center justify-between border-b border-[var(--border)] mb-8">
               <span className="text-[10px] font-black tracking-[0.3em] uppercase text-[var(--primary)]">Gateway Access</span>
               <button onClick={() => setIsOpen(false)} className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[var(--bg-ghost)] shadow-inner">
                  <X size={24} />
               </button>
            </div>
            
            <div className="px-6 space-y-6 pb-20">
               <nav className="flex flex-col gap-1">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between px-5 py-4 rounded-2xl text-base font-bold transition-all ${
                        pathname === link.href 
                          ? 'bg-[var(--primary)] text-white shadow-lg' 
                          : 'text-[var(--text-main)] hover:bg-[var(--bg-ghost)]'
                      }`}
                    >
                      <span>{link.label}</span>
                      {pathname === link.href && <div className="w-2 h-2 rounded-full bg-[var(--secondary)]" />}
                    </Link>
                  ))}
               </nav>

               <div className="pt-6 border-t border-[var(--border)] space-y-4">
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[var(--text-muted)] px-2">Language</span>
                  <div className="grid grid-cols-3 gap-2">
                     {languages.map((lang) => (
                       <button
                         key={lang.code}
                         onClick={() => { setLocale(lang.code as any); setIsOpen(false); }}
                         className={`flex items-center justify-center p-3.5 rounded-xl border text-sm font-bold transition-all ${locale === lang.code ? 'bg-[var(--primary)] border-[var(--primary)] text-white shadow-lg' : 'border-[var(--border)] text-[var(--text-dim)] hover:bg-[var(--bg-ghost)]'}`}
                       >
                          {lang.label}
                       </button>
                     ))}
                  </div>
               </div>
               <Link href="/jobs" onClick={() => setIsOpen(false)} className="block w-full py-4 btn-primary-glow rounded-2xl text-center font-black uppercase tracking-[0.15em] text-sm">
                 {t.nav.jobs}
               </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
