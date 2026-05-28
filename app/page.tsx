"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Briefcase, Globe, Zap, History, Users } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { motion } from "framer-motion";

export default function HomePage() {
  const { t } = useApp();

  return (
    <div className="flex flex-col bg-[var(--bg-main)]">
      {/* PERFECT HERO ARCHITECTURE */}
      <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
        <div className="container-full">
          <div className="grid lg:grid-cols-2 gap-16 lg:items-center">
            
            {/* HERO CONTENT */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="space-y-10"
            >
              <div className="inline-flex items-center gap-3 px-5 py-2 bg-[var(--bg-ghost)] rounded-full border border-[var(--border)]">
                 <div className="w-2 h-2 rounded-full bg-[var(--secondary)] animate-pulse" />
                 <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--primary)]">{t.hero.badge}</span>
              </div>

              <h1 className="text-pretty leading-[1.05] tracking-tighter">
                {t.hero.title} <br/>
                <span className="text-[var(--primary)]">Human Capital</span> <br/>
                <span className="italic-accent text-[var(--secondary)] tracking-normal low-case">Excellence.</span>
              </h1>

              <p className="text-xl text-[var(--text-dim)] max-w-xl font-medium leading-relaxed">
                {t.hero.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-5">
                <Link href="/jobs" className="px-10 py-5 bg-[var(--primary)] text-white rounded-2xl text-[11px] font-black uppercase tracking-widest shadow-2xl hover:shadow-emerald-900/30 active:scale-95 transition-all flex items-center justify-center gap-4">
                  {t.hero.cta} <ArrowRight size={18} />
                </Link>
                <Link href="/contact" className="px-10 py-5 bg-white border border-[var(--border)] text-[var(--primary)] rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-[var(--bg-ghost)] active:scale-95 transition-all text-center">
                  {t.hero.quote}
                </Link>
              </div>

              {/* UPDATED ACTUAL DATA STATS */}
              <div className="flex items-center gap-12 pt-10 border-t border-[var(--border)]">
                 {[
                   { v: "18+", l: "Years Of Legacy", i: <History size={20}/> },
                   { v: "500+", l: "Strategic Partners", i: <Users size={20}/> }
                 ].map((stat, i) => (
                   <div key={i} className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <div className="text-[var(--secondary)]">{stat.i}</div>
                        <div className="text-2xl font-display font-black text-[var(--primary)]">{stat.v}</div>
                      </div>
                      <div className="text-[9px] font-black uppercase tracking-[0.15em] text-[var(--text-muted)]">{stat.l}</div>
                   </div>
                 ))}
              </div>
            </motion.div>

            {/* SIMPLIFIED HERO VISUAL */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1, delay: 0.2 }}
               className="relative lg:block hidden"
            >
               <div className="relative z-10 w-full aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                  <Image src="/images/hero_banner.png" alt="Edomias Excellence" fill className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/40 to-transparent" />
               </div>
               {/* Abstract Geometry instead of cluttered cards */}
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--secondary)]/10 rounded-full blur-3xl animate-pulse" />
               <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[var(--primary)]/5 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES - SIMPLICITY FIRST */}
      <section className="py-32 bg-[var(--bg-ghost)]">
        <div className="container-full">
           <div className="max-w-3xl mb-24 space-y-6">
              <div className="emerald-badge">Strategic Solutions</div>
              <h2 className="text-[var(--primary)]">Engineering High-Compliance <br/> <span className="text-[var(--secondary)]">Workforce Landscapes.</span></h2>
              <p className="text-lg text-[var(--text-dim)] font-medium italic-accent">
                 "Handling the complexities of institutional labor relations so you can focus on exponential growth."
              </p>
           </div>

           <div className="grid md:grid-cols-3 gap-8">
              {[
                { t: "Recruitment Precision", d: "Access Ethiopia's top talent through our rigorous evaluation engine.", i: <Briefcase size={24}/> },
                { t: "Legal & Labor Shield", d: "We absorb all institutional risks and regulatory management on your behalf.", i: <ShieldCheck size={24}/> },
                { t: "Global Standard QA", d: "Standardizing HR operations to ISO 9001 and ILO benchmarks.", i: <Globe size={24}/> }
              ].map((serv, i) => (
                <div key={i} className="card-glass group">
                   <div className="w-14 h-14 rounded-2xl bg-[var(--bg-ghost)] text-[var(--primary)] flex items-center justify-center mb-8 transition-all group-hover:bg-[var(--primary)] group-hover:text-white group-hover:rotate-12">
                      {serv.i}
                   </div>
                   <h4 className="text-xl font-display font-bold mb-4">{serv.t}</h4>
                   <p className="text-sm text-[var(--text-dim)] leading-relaxed">{serv.d}</p>
                   <div className="mt-8 pt-8 border-t border-[var(--border)]">
                      <Link href="/services" className="text-[10px] font-black uppercase tracking-widest text-[var(--primary)] flex items-center gap-2 hover:text-[var(--secondary)] transition-all">
                        Discover Service <ArrowRight size={14} />
                      </Link>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}
