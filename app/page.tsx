"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Briefcase, Globe, Zap, History, Users, Star, Upload, Clock, MapPin } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { motion, AnimatePresence } from "framer-motion";
import { DB } from "@/data/database";

export default function HomePage() {
  const { t, locale } = useApp();

  const featuredJobs = DB.jobs.filter(j => j.is_featured || j.is_urgent).slice(0, 3);

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
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--primary)]">{t.hero.badge}</span>
              </div>

              <h1 className="text-pretty leading-[1.05] tracking-tighter">
                {t.hero.title} <br/>
                <span className="text-[var(--primary)]">{locale === 'am' ? 'የሰው ኃይል' : locale === 'or' ? 'Humna Namaa' : 'Human Capital'}</span> <br/>
                <span className="italic-accent text-[var(--secondary)] tracking-normal low-case">{locale === 'am' ? 'ብቃት::' : locale === 'or' ? 'Ga’umsa.' : 'Excellence.'}</span>
              </h1>

              <p className="text-xl text-[var(--text-dim)] max-w-xl font-medium leading-relaxed">
                {t.hero.subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-5">
                <Link href="/jobs" className="px-10 py-5 btn-primary-glow rounded-2xl text-[11px] font-black uppercase tracking-widest flex items-center justify-center gap-4">
                  {t.hero.cta} <ArrowRight size={18} />
                </Link>
                <Link href="/contact" className="px-10 py-5 btn-secondary-glass text-[var(--text-main)] rounded-2xl text-[11px] font-black uppercase tracking-widest flex items-center justify-center text-center">
                  {t.hero.quote}
                </Link>
              </div>

              {/* STATS */}
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

            {/* HERO VISUAL */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1, delay: 0.2 }}
               className="relative lg:block hidden"
            >
               <div className="relative z-10 w-full aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                  <Image src="/images/hero_banner.png" alt="Edomias" fill className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/40 to-transparent" />
               </div>
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--secondary)]/10 rounded-full blur-3xl" />
               <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[var(--primary)]/5 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURED VACANCIES - PHASE 1 REQUIREMENT */}
      <section className="py-32 bg-[var(--bg-ghost)] border-y border-[var(--border)]">
        <div className="container-full">
           <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="space-y-6">
                 <div className="emerald-badge">Opportunity Radar</div>
                 <h2 className="text-[var(--primary)]">Featured & <span className="text-[var(--secondary)]">Urgent Vacancies.</span></h2>
              </div>
              <Link href="/jobs" className="text-[10px] font-black uppercase tracking-widest text-[var(--primary)] flex items-center gap-2 hover:translate-x-2 transition-all">
                View Full Terminal <ArrowRight size={18} />
              </Link>
           </div>

           <div className="grid md:grid-cols-3 gap-8">
              {featuredJobs.map((job, i) => (
                <motion.div 
                  whileHover={{ y: -10 }}
                  key={job.id} 
                  className="card-glass p-10 relative overflow-hidden group"
                >
                   {job.is_urgent && (
                     <div className="absolute top-0 right-0 px-6 py-2 bg-red-500 text-white text-[9px] font-black uppercase tracking-widest">Urgent</div>
                   )}
                   <div className="space-y-6">
                      <div className="space-y-2">
                         <div className="text-[10px] font-black uppercase text-[var(--secondary)] tracking-widest">{job.company}</div>
                         <h3 className="text-2xl font-bold text-[var(--primary)] leading-tight">{job.title}</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                         <div className="px-3 py-1 bg-[var(--bg-ghost)] rounded-lg text-[9px] font-bold text-[var(--text-dim)] border border-[var(--border)] flex items-center gap-2"><MapPin size={12}/> {job.location}</div>
                         <div className="px-3 py-1 bg-[var(--bg-ghost)] rounded-lg text-[9px] font-bold text-[var(--primary)] border border-emerald-100 flex items-center gap-2"><Clock size={12}/> {job.type}</div>
                      </div>
                      <Link href={`/jobs`} className="w-full h-14 btn-secondary-glass rounded-xl flex items-center justify-center font-black uppercase text-[10px] tracking-widest">
                         Review Details
                      </Link>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* TALENT POOL REGISTRATION - PHASE 1 REQUIREMENT */}
      <section className="py-32 bg-[var(--bg-main)]">
        <div className="container-full">
           <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-6 space-y-10">
                 <div className="emerald-badge">Recruitment Database</div>
                 <h2 className="text-[var(--primary)] text-4xl md:text-6xl">No Suitable Vacancy <span className="text-[var(--secondary)]">Today?</span></h2>
                 <p className="text-xl text-[var(--text-dim)] leading-relaxed font-medium">
                   Join our Strategic Talent Pool. We proactively match elite candidates with upcoming high-compliance opportunities in Manufacturing, NGOs, and Corporate sectors.
                 </p>
                 <div className="flex gap-12 pt-6">
                    <div className="space-y-2">
                       <div className="text-3xl font-black text-[var(--primary)]">15k+</div>
                       <div className="text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)]">Passive Candidates</div>
                    </div>
                    <div className="space-y-2">
                       <div className="text-3xl font-black text-[var(--secondary)]">100+</div>
                       <div className="text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)]">Monthly Matches</div>
                    </div>
                 </div>
              </div>
              <div className="lg:col-span-6">
                 <div className="card-glass p-12 bg-[var(--bg-ghost)] border-dashed border-4 border-[var(--border)] text-center space-y-8 relative overflow-hidden group hover:border-[var(--primary)] transition-all">
                    <div className="w-24 h-24 bg-[var(--bg-main)] rounded-[2rem] flex items-center justify-center mx-auto text-[var(--primary)] shadow-xl group-hover:scale-110 transition-all">
                       <Upload size={40} />
                    </div>
                    <div className="space-y-2">
                       <h3 className="text-2xl font-bold">Upload Your Professional CV</h3>
                       <p className="text-sm font-medium text-[var(--text-muted)]">PDF, TIFF, DOCX (Max 20MB Artifact)</p>
                    </div>
                    <button className="w-full py-6 btn-primary-glow rounded-2xl font-black uppercase tracking-widest">
                       Join Global Talent Pool
                    </button>
                    <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[var(--primary)] opacity-[0.02] rounded-full blur-3xl" />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-32 bg-[var(--bg-ghost)]">
        <div className="container-full">
           <div className="max-w-3xl mb-24 space-y-6">
              <div className="emerald-badge">Core Capabilities</div>
              <h2 className="text-[var(--primary)]">Standardizing East African <br/> <span className="text-[var(--secondary)]">Labor Ecosystems.</span></h2>
           </div>

           <div className="grid md:grid-cols-3 gap-8">
              {[
                { t: "Recruitment Precision", d: "Access Ethiopia's top talent through our rigorous evaluation engine.", i: <Briefcase size={24}/> },
                { t: "Legal & Labor Shield", d: "We absorb all institutional risks and regulatory management on your behalf.", i: <ShieldCheck size={24}/> },
                { t: "Global Standard QA", d: "Standardizing HR operations to ISO 9001 and ILO benchmarks.", i: <Globe size={24}/> }
              ].map((serv, i) => (
                <div key={i} className="card-glass p-12 group hover:translate-y-[-10px] transition-all">
                   <div className="w-14 h-14 rounded-2xl bg-[var(--bg-ghost)] text-[var(--primary)] flex items-center justify-center mb-8 transition-all group-hover:bg-[var(--primary)] group-hover:text-white">
                      {serv.i}
                   </div>
                   <h4 className="text-xl font-display font-bold mb-4">{serv.t}</h4>
                   <p className="text-sm text-[var(--text-dim)] leading-relaxed mb-8">{serv.d}</p>
                   <Link href="/services" className="text-[10px] font-black uppercase tracking-widest text-[var(--primary)] flex items-center gap-2 hover:text-[var(--secondary)] transition-all">
                     Service Brief <ArrowRight size={14} />
                   </Link>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}
