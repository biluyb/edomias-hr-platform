"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon, Globe } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { useState } from "react";

export default function Navbar() {
  const { t, theme, setTheme, locale, setLocale } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const NAV_LINKS = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/services", label: t.nav.services },
    { href: "/clients", label: t.nav.clients },
    { href: "/news", label: t.nav.news },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--header-glass)] backdrop-blur-md border-b border-[var(--border-color)] transition-colors">
      <nav className="container-custom h-16 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[var(--brand-primary)] flex items-center justify-center font-bold text-white">E</div>
          <span className="font-display font-bold text-sm tracking-tight hidden sm:block">EDOMIAS</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`px-3 py-2 text-xs font-semibold rounded-md transition-colors ${
                  pathname === link.href ? "text-[var(--brand-primary)] bg-[var(--accent-pale)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Utilities */}
        <div className="flex items-center gap-2">
          {/* Language Switcher */}
          <div className="flex items-center bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg p-1">
            <Globe size={14} className="mx-2 text-[var(--text-muted)]" />
            <select
              value={locale}
              onChange={(e) => setLocale(e.target.value as any)}
              className="bg-transparent text-[10px] font-bold uppercase tracking-wider focus:outline-none cursor-pointer pr-2"
            >
              <option value="en">EN</option>
              <option value="am">አማ</option>
              <option value="or">ORO</option>
            </select>
          </div>

          {/* Theme Toggle */}
          <button onClick={toggleTheme} className="theme-switch" aria-label="Toggle theme">
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          {/* Portal CTA */}
          <Link href="/jobs" className="btn btn-primary text-xs py-2 px-4 shadow-none hidden sm:flex">
            {t.nav.jobs}
          </Link>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-[var(--text-primary)]">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-[var(--bg-primary)] border-b border-[var(--border-color)] p-4 animate-fade-in shadow-xl">
          <ul className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-sm font-semibold text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] rounded-xl"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/jobs"
                onClick={() => setIsOpen(false)}
                className="block text-center mt-2 btn btn-primary w-full"
              >
                {t.nav.jobs}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
