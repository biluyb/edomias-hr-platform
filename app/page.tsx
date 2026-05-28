"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Award, Briefcase, Globe, CheckCircle, Zap } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { motion } from "framer-motion";

export default function HomePage() {
  const { t } = useApp();

  return (
    <div className="flex flex-col bg-[var(--bg-main)]">
      {/* PERFECT HERO ARCHITECTURE */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-[-1] overflow-hidden">
           {/* Dynamic Gradient Shapes */}
           <motion.div 
             animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
             transition={{ duration: 20, repeat: Infinity }}
             className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] bg-[radial-gradient(circle,rgba(33,91,48,0.06)_0%,transparent_70%)]" 
           />
           <motion.div 
             animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
             transition={{ duration: 25, repeat: Infinity }}
             className="absolute -bottom-[10%] -left-[10%] w-[50%] h-[50%] bg-[radial-gradient(circle,rgba(212,175,55,0.04)_0%,transparent_70%)]" 
           />
        </div>

        <div className="container-full grid lg:grid-cols-12 gap-16 lg:items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-10"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 glass-ui rounded-full border-[var(--primary)]/10">
               <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-ping" />
               <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--primary)]">{t.hero.badge}</span>
            </div>

            <h1 className="text-pretty">
              {t.hero.title} <br/>
              <span className="text-[var(--primary)]">Human Capital</span> <br/>
              <span className="italic-accent text-[var(--accent)] tracking-normal low-case">Excellence.</span>
            </h1>

            <p className="text-xl text-[var(--text-dim)] max-w-xl font-medium leading-relaxed reveal" style={{ animationDelay: '0.4s' }}>
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <Link href="/jobs" className="btn-elite btn-primary-elite reveal" style={{ animationDelay: '0.6s' }}>
                {t.hero.cta} <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="btn-elite btn-accent-elite reveal" style={{ animationDelay: '0.8s' }}>
                {t.hero.quote}
              </Link>
            </div>

            <div className="flex items-center gap-8 pt-8 border-t border-[var(--border-soft)] reveal" style={{ animationDelay: '1s' }}>
               {[
                 { v: "18+", l: "Years Of Legacy" },
                 { v: "500+", l: "Strategic Partners" }
               ].map((stat, i) => (
                 <div key={i} className="space-y-1">
                    <div className="text-2xl font-display font-black text-[var(--primary)]">{stat.v}</div>
                    <div className="text-[9px] font-black uppercase tracking-widest text-[var(--text-dim)]">{stat.l}</div>
                 </div>
               ))}
            </div>
          </motion.div>

          {/* PRETTY UI FEATURE BOX */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative z-10 glass-ui p-4 rounded-[2.5rem] shadow-2xl rotate-[2deg] hover:rotate-0 transition-all duration-700 group">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden">
                <Image src="/images/hero_banner.png" alt="Corporate" fill className="object-cover group-hover:scale-110 transition-transform duration-1000" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/60 to-transparent opacity-40" />
              </div>

              {/* Floating Performance Indicator */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -right-8 top-1/4 glass-ui p-6 rounded-3xl shadow-2xl space-y-3 border-l-4 border-[var(--accent)]"
              >
                 <div className="flex items-center gap-3">
                    <div className="p-2 bg-emerald-50 text-[var(--primary)] rounded-xl"><Zap size={20} /></div>
                    <div>
                       <div className="text-[10px] font-black uppercase tracking-widest text-[var(--text-dim)]">Efficiency</div>
                       <div className="text-lg font-black text-[var(--primary)]">99.2%</div>
                    </div>
                 </div>
              </motion.div>

              {/* Recruitment Counter */}
              <div className="absolute -left-10 -bottom-6 bg-[var(--primary)] text-white p-8 rounded-[2.5rem] shadow-2xl space-y-2 group">
                 <div className="text-3xl font-display font-black group-hover:text-[var(--accent)] transition-colors">10k+</div>
                 <div className="text-[9px] font-black uppercase tracking-[0.2em] opacity-70">Successful Placements</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STRATEGIC CAPABILITIES - MODERN GRID */}
      <section className="py-32 bg-[var(--bg-ghost)]">
        <div className="container-full">
           <div className="grid lg:grid-cols-2 gap-20 items-end mb-24">
              <div className="space-y-6">
                 <div className="emerald-badge">Core Solutions</div>
                 <h2 className="text-[var(--primary)]">Engineering High-Compliance <br/> <span className="text-[var(--accent)]">Workforce Landscapes.</span></h2>
              </div>
              <p className="text-lg text-[var(--text-dim)] font-medium leading-relaxed max-w-lg italic-accent">
                 "We handle the complexities of labor relations and institutional staffing so you can focus on exponential growth."
              </p>
           </div>

           <div className="grid md:grid-cols-3 gap-8">
              {[
                { t: "Recruitment Precision", d: "Access Ethiopia's top 5% talent through our rigorous evaluation engine.", i: <Briefcase size={28}/> },
                { t: "Legal & Labor Shield", d: "We absorb all institutional risks and regulatory management on your behalf.", i: <ShieldCheck size={28}/> },
                { t: "Global Standard QA", d: "Standardizing HR operations to ISO 9001 and ILO benchmarks.", i: <Globe size={28}/> }
              ].map((serv, i) => (
                <div key={i} className="card-luxury p-12 space-y-8 bg-white overflow-hidden group">
                   <div className="w-16 h-16 rounded-2xl bg-[var(--bg-ghost)] text-[var(--primary)] flex items-center justify-center transition-all group-hover:bg-[var(--primary)] group-hover:text-white group-hover:-translate-y-2">
                      {serv.i}
                   </div>
                   <div className="space-y-4">
                      <h4 className="text-xl font-bold tracking-tight">{serv.t}</h4>
                      <p className="text-sm text-[var(--text-dim)] leading-relaxed">{serv.d}</p>
                   </div>
                   <div className="pt-4">
                      <Link href="/services" className="text-[10px] font-black uppercase tracking-widest text-[var(--primary)] flex items-center gap-2 hover:text-[var(--accent)] transition-colors">
                        Discover Service <ArrowRight size={14} />
                      </Link>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* INSTITUTIONAL CTA - THE FINAL TOUCH */}
      <section className="py-40 bg-[var(--primary)] relative overflow-hidden">
         <div className="absolute inset-0 opacity-5 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] blend-overlay" />
         <div className="container-full relative z-10 text-center space-y-12 reveal">
            <h2 className="text-white text-pretty max-w-4xl mx-auto">Modernizing East Africa's <span className="text-[var(--accent)]">Human Capital</span> Strategy Since 2005.</h2>
            <div className="flex flex-wrap justify-center gap-6">
               <Link href="/contact" className="btn-elite bg-[var(--accent)] text-[var(--primary)] shadow-2xl hover:bg-white active:scale-95">
                  Consultation Hub
               </Link>
               <Link href="/jobs" className="btn-elite border border-white/20 text-white hover:bg-white/10 active:scale-95">
                  Open Career Portal
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
}
