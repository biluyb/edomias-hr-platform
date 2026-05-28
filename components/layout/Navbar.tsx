"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Briefcase } from "lucide-react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/clients", label: "Our Clients" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-[10px] gradient-green flex items-center justify-center font-bold text-white text-lg font-display">
              E
            </div>
            <div className="leading-tight">
              <div className="font-bold text-[15px] text-dark">Edomias International</div>
              <div className="text-[10px] text-gray-light uppercase tracking-widest">HR Solutions · Est. 2005</div>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === l.href
                    ? "text-green bg-green-pale"
                    : "text-gray hover:text-dark hover:bg-bg2"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-semibold text-dark border border-border rounded-full hover:border-green hover:text-green transition-all duration-200"
            >
              Contact Us
            </Link>
            <Link
              href="/jobs"
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white rounded-full gradient-green hover:-translate-y-0.5 transition-all duration-200 shadow-md shadow-green/30"
            >
              <Briefcase size={15} />
              Job Portal
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-bg2 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} className="text-dark" /> : <Menu size={22} className="text-dark" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="fixed top-[72px] left-0 right-0 z-40 bg-white border-b border-border shadow-lg fade-in">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-sm font-medium text-gray hover:text-dark hover:bg-bg2 rounded-lg transition-all"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/jobs"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 py-3 text-sm font-bold text-white rounded-full gradient-green"
            >
              <Briefcase size={15} />
              Job Portal
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
