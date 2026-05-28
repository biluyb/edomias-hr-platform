"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Briefcase, CheckCircle, ChevronRight, Star, Users, TrendingUp, Shield } from "lucide-react";
import { JOBS, SERVICES, STATS, WHY_POINTS } from "@/data";

// ── Counter hook
function useCounter(target: number, duration = 1800) {
  const [val, setVal] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting && !started) setStarted(true); }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [started]);
  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start = Math.min(start + step, target);
      setVal(Math.floor(start));
      if (start >= target) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);
  return { val, ref };
}

// ── Stat card
function StatCard({ label, value, suffix }: { label: string; value: number; suffix: string }) {
  const { val, ref } = useCounter(value);
  return (
    <div ref={ref} className="bg-white border border-border rounded-2xl p-5 shadow-sm hover:border-green hover:shadow-lg transition-all duration-300 text-center">
      <div className="text-3xl font-extrabold text-dark font-display">
        <span className="text-green">{val}</span>{suffix}
      </div>
      <div className="text-xs text-gray mt-1">{label}</div>
    </div>
  );
}

// ── Client marquee data
const MARQUEE_CLIENTS = [
  { icon: "🍺", name: "Heineken Brewery" }, { icon: "🥤", name: "East Africa Bottling" },
  { icon: "📡", name: "Huawei Technologies" }, { icon: "✈️", name: "Lufthansa Airlines" },
  { icon: "📦", name: "DHL WorldWide Express" }, { icon: "🏦", name: "Buna International Bank" },
  { icon: "🌍", name: "CARE Ethiopia" }, { icon: "🏥", name: "Clinton Health Access" },
  { icon: "🚜", name: "ILRI" }, { icon: "🏨", name: "Addis Ababa Hilton" },
  { icon: "🥤", name: "Coca-Cola ECCWA" }, { icon: "🌐", name: "UNICEF" },
  { icon: "🌾", name: "UN World Food Programme" }, { icon: "🔒", name: "Norwegian Refugee Council" },
];

export default function HomePage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="min-h-screen flex items-center pt-[72px] relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #fff 0%, #f8fafc 55%, #f0f9e3 100%)" }}>
        {/* Subtle grid bg */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(circle, #8DC63F 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

        <div className="max-w-6xl mx-auto px-6 w-full py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left */}
            <div className="fade-up">
              <div className="inline-flex items-center gap-2 bg-green-pale border border-green/25 rounded-full px-4 py-2 text-sm font-semibold text-green-dark mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-green animate-pulse-dot" />
                Ethiopia's #1 HR Outsourcing Partner Since 2005
              </div>
              <h1 className="text-[clamp(2.6rem,5vw,4rem)] font-extrabold font-display leading-[1.1] text-dark mb-5">
                People-First<br />
                <span className="gradient-text">HR Solutions</span><br />
                for <span className="text-orange">Ethiopia</span>
              </h1>
              <p className="text-lg text-gray leading-relaxed mb-8 max-w-[480px]">
                From recruitment and staffing to cleaning, security, and landscaping — Edomias International Plc is your strategic workforce partner.
              </p>
              <div className="flex gap-3 flex-wrap mb-10">
                <Link href="/jobs"
                  className="flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-white gradient-green shadow-lg shadow-green/30 hover:-translate-y-0.5 transition-all duration-200">
                  Browse Open Jobs <ArrowRight size={16} />
                </Link>
                <Link href="/about"
                  className="flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-dark border-2 border-border hover:border-green hover:text-green transition-all duration-200">
                  Learn More
                </Link>
                <Link href="/contact"
                  className="flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-white gradient-orange shadow-lg shadow-orange/25 hover:-translate-y-0.5 transition-all duration-200">
                  Get a Quote
                </Link>
              </div>
              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3">
                {STATS.slice(0, 3).map((s) => (
                  <StatCard key={s.label} label={s.label} value={s.value} suffix={s.suffix} />
                ))}
              </div>
            </div>

            {/* Right visual */}
            <div className="relative fade-up" style={{ animationDelay: "0.15s" }}>
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/images/hero_banner.png" alt="Edomias HR professionals" width={600} height={440}
                  className="w-full h-[420px] object-cover" priority />
              </div>
              {/* Floating cards */}
              <div className="absolute -top-4 -left-6 bg-white border border-border rounded-2xl p-4 shadow-xl min-w-[170px]">
                <div className="text-[10px] uppercase tracking-widest text-gray-light mb-1">Open Positions</div>
                <div className="text-3xl font-extrabold text-dark font-display">48</div>
                <div className="text-xs text-green font-semibold mt-1">Live from ERP · Now</div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white border border-border rounded-2xl p-4 shadow-xl min-w-[180px]">
                <div className="text-[10px] uppercase tracking-widest text-gray-light mb-2">Latest Roles</div>
                {[
                  { dot: "bg-green", label: "Security Officer" },
                  { dot: "bg-orange", label: "Cleaning Supervisor" },
                  { dot: "bg-green", label: "HR Coordinator" },
                ].map((r) => (
                  <div key={r.label} className="flex items-center gap-2 py-1.5 px-2 bg-bg2 rounded-lg mb-1 last:mb-0">
                    <div className={`w-2 h-2 rounded-full ${r.dot} flex-shrink-0`} />
                    <span className="text-xs font-semibold text-dark2">{r.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section id="services" className="section-py bg-bg2">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <div className="label justify-center"><div className="label-dot" /><span>What We Do</span></div>
            <h2 className="heading mt-2">End-to-End <span>HR Services</span></h2>
            <p className="subheading mt-3 mx-auto">Comprehensive workforce solutions trusted by 500+ organisations across Ethiopia</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((svc, i) => (
              <div key={svc.id}
                className="top-accent bg-white border border-border rounded-2xl p-7 hover:border-transparent hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
                style={{ animationDelay: `${i * 0.08}s` }}>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-5 ${svc.color === "green" ? "bg-green-pale" : "bg-orange-pale"}`}>
                  {svc.icon}
                </div>
                <h3 className="text-[15px] font-bold text-dark mb-2">{svc.title}</h3>
                <p className="text-sm text-gray leading-relaxed mb-4">{svc.description}</p>
                <Link href={`/services#${svc.id}`}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-green hover:gap-3 transition-all duration-200">
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═══ */}
      <section className="section-py bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image src="/images/skilled_labor.png" alt="Edomias professional team" width={600} height={440}
                className="w-full h-[420px] object-cover" />
            </div>
            <div>
              <div className="label"><div className="label-dot" /><span>Why Edomias</span></div>
              <h2 className="heading mt-2">Your Strategic <span>Workforce Partner</span></h2>
              <p className="subheading mt-3">Not just a service provider — a partner who reduces management burden so you focus on what matters most.</p>
              <div className="flex flex-col gap-4 mt-7">
                {WHY_POINTS.map((p) => (
                  <div key={p.title}
                    className="flex items-start gap-4 p-4 rounded-xl border border-border bg-white hover:border-green hover:shadow-sm transition-all duration-200">
                    <div className="w-10 h-10 rounded-xl bg-green-pale flex items-center justify-center text-xl flex-shrink-0">
                      {p.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-dark">{p.title}</h4>
                      <p className="text-xs text-gray leading-relaxed mt-0.5">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-3 mt-7 flex-wrap">
                <Link href="/about" className="px-6 py-3 rounded-full text-sm font-bold text-white gradient-green shadow-md shadow-green/25 hover:-translate-y-0.5 transition-all">
                  Our Story
                </Link>
                <Link href="/contact" className="px-6 py-3 rounded-full text-sm font-bold text-dark border-2 border-border hover:border-green hover:text-green transition-all">
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FEATURED JOBS ═══ */}
      <section className="section-py bg-bg2">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <div className="label"><div className="label-dot" /><span>Job Portal</span></div>
              <h2 className="heading mt-1">Featured <span>Open Positions</span></h2>
              <p className="subheading mt-2">Live vacancies synced directly from our ERP system</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 bg-green-pale border border-green/25 rounded-full px-3 py-1.5 text-xs font-bold text-green-dark">
                <div className="w-1.5 h-1.5 rounded-full bg-green animate-pulse-dot" />ERP Integrated · Live
              </div>
              <Link href="/jobs" className="px-4 py-2 rounded-full text-sm font-bold text-green border-2 border-green hover:bg-green hover:text-white transition-all">
                All Jobs →
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {JOBS.filter((j) => j.featured).map((job) => (
              <Link key={job.id} href={`/jobs#${job.id}`}
                className="bg-white border border-border rounded-2xl p-6 flex flex-col gap-4 hover:border-green hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-bg2 border border-border flex items-center justify-center text-2xl">
                    {job.icon}
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-orange-pale text-orange-dark">
                    {job.type}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-dark text-[15px] mb-1">{job.title}</div>
                  <div className="text-sm text-gray">{job.company}</div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-green-pale text-green-dark font-semibold">📍 {job.location}</span>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-bg3 text-gray font-semibold">💰 {job.salary}</span>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs text-gray-light">{job.posted}</span>
                  <span className="text-xs font-bold text-green group-hover:gap-2 flex items-center gap-1 transition-all">
                    Apply <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/jobs"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white gradient-green shadow-lg shadow-green/30 hover:-translate-y-0.5 transition-all">
              Browse All 48 Open Positions <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ CLIENTS MARQUEE ═══ */}
      <section className="section-py bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-lg mx-auto mb-10">
            <div className="label justify-center"><div className="label-dot" /><span>Trusted By Many</span></div>
            <h2 className="heading mt-2">Our <span>Clients</span></h2>
            <p className="subheading mt-3 mx-auto">Serving 500+ organisations across Ethiopia since 2005</p>
          </div>
          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              { n: "5+", l: "Breweries & Beverages" },
              { n: "7+", l: "FMCG Manufacturers" },
              { n: "11+", l: "Travel & Hospitality" },
              { n: "7+", l: "Travel & Logistics" },
            ].map((s) => (
              <div key={s.l} className="bg-bg2 border border-border rounded-2xl p-5 text-center hover:border-green hover:shadow-md transition-all duration-200">
                <div className="text-3xl font-extrabold gradient-text font-display">{s.n}</div>
                <div className="text-xs text-gray mt-1">{s.l}</div>
              </div>
            ))}
          </div>
          {/* Marquee */}
          <div className="overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            <div className="flex gap-3 animate-marquee" style={{ width: "max-content" }}>
              {[...MARQUEE_CLIENTS, ...MARQUEE_CLIENTS].map((c, i) => (
                <div key={i}
                  className="flex items-center gap-2.5 bg-bg2 border border-border rounded-full px-5 py-3 text-sm font-semibold text-dark2 whitespace-nowrap flex-shrink-0 hover:border-green hover:text-green transition-all duration-200 cursor-default">
                  <span className="text-base">{c.icon}</span>
                  {c.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="section-py-sm bg-bg2">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-dark rounded-3xl p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-extrabold font-display text-white mb-2">
                Ready to Build a Stronger Workforce?
              </h2>
              <p className="text-white/60 text-base">Partner with Ethiopia's leading HR outsourcing company today.</p>
            </div>
            <div className="flex gap-3 flex-wrap flex-shrink-0 relative">
              <Link href="/contact"
                className="px-6 py-3.5 rounded-full text-sm font-bold text-white gradient-green shadow-lg hover:-translate-y-0.5 transition-all">
                Get a Free Consultation
              </Link>
              <Link href="/jobs"
                className="px-6 py-3.5 rounded-full text-sm font-bold text-white/80 border-2 border-white/15 hover:border-green hover:text-white transition-all">
                Browse Jobs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
