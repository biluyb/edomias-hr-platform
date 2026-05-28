"use client";
import { ShieldCheck, Award, History, Target, Users, CheckCircle2 } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { motion } from "framer-motion";

export default function AboutPage() {
  const { t } = useApp();

  return (
    <div className="bg-[var(--bg-main)] min-h-screen">
      {/* MAGNIFIED INSTITUTIONAL IDENTITY */}
      <section className="relative pt-64 pb-32 overflow-hidden bg-[var(--primary)] selection:bg-[var(--secondary)] selection:text-[var(--primary)]">
        <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] blend-overlay" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle,rgba(212,175,55,0.1)_0%,transparent_70%)]" />
        
        <div className="container-full relative z-10 text-center space-y-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-4 px-6 py-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10"
          >
             <div className="w-2 h-2 rounded-full bg-[var(--secondary)] animate-pulse" />
             <span className="text-[10px] font-black uppercase tracking-[4px] text-white/90">{t.about.ageLabel}</span>
          </motion.div>
          
          <div className="space-y-6">
             <motion.div 
               initial={{ scale: 0.9, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               className="text-[clamp(5rem,15vw,10rem)] font-display font-black text-white leading-none tracking-tighter"
             >
               18+
             </motion.div>
             <h1 className="text-white text-pretty max-w-4xl mx-auto leading-[1.1]">{t.about.title}</h1>
          </div>
          
          <p className="text-xl text-white/70 max-w-2xl mx-auto italic-accent font-medium leading-relaxed">
            "{t.about.subtitle}"
          </p>
        </div>
      </section>

      {/* STRATEGIC EVOLUTION TIMELINE */}
      <section className="py-40 bg-[var(--bg-soft)]">
        <div className="container-full">
          <div className="grid lg:grid-cols-12 gap-20">
            <div className="lg:col-span-5 space-y-10 lg:sticky lg:top-40 h-fit">
               <div className="emerald-badge">Our Evolution</div>
               <h2 className="text-[var(--primary)] leading-tight">{t.about.historyTitle}</h2>
               <p className="text-lg text-[var(--text-dim)] font-medium leading-relaxed max-w-md">
                 {t.about.historyIntro}
               </p>
               <div className="p-12 bg-[var(--primary)] rounded-[3rem] text-white space-y-6 shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--secondary)] opacity-10 blur-3xl group-hover:scale-150 transition-transform duration-1000" />
                  <History size={48} className="text-[var(--secondary)]" />
                  <h3 className="text-white text-3xl font-display">Proven Resilience</h3>
                  <p className="text-sm text-white/70 leading-relaxed font-bold uppercase tracking-[0.1em]">Two decades of high-trust service level agreements with global NGOs and industry leaders.</p>
               </div>
            </div>

            <div className="lg:col-span-1" />

            <div className="lg:col-span-6 space-y-0">
               {[
                 { year: "2005", title: "Institutional Inception", desc: "Edomias International Plc established, focusing on specialized recruitment for the humanitarian sector in Ethiopia." },
                 { year: "2010", title: "Industrial Diversification", desc: "Strategic expansion into manufacturing and logistics staffing for Ethiopia's emerging industrial zones." },
                 { year: "2015", title: "Digital Integration", desc: "Deployment of standardized payroll and compliant labor reporting for FDI partners." },
                 { year: "2020+", title: "Regional Expansion", desc: "Scaling operations during volatility, reinforcing our position as the primary strategic labor partner in East Africa." }
               ].map((milestone, i) => (
                 <motion.div 
                   initial={{ opacity: 0, x: 20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ delay: i * 0.1 }}
                   key={i} 
                   className="relative pl-12 pb-24 group last:pb-0"
                 >
                    {/* TIMELINE TRACK */}
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-[var(--border)] group-last:h-12" />
                    <div className="absolute left-[-6px] top-2 w-3 h-3 rounded-full bg-[var(--secondary)] border-4 border-white group-hover:scale-150 transition-transform" />
                    
                    <div className="space-y-4">
                       <span className="text-4xl font-display font-black text-[var(--secondary)]/30 group-hover:text-[var(--secondary)] transition-all">{milestone.year}</span>
                       <h4 className="text-2xl font-bold tracking-tight text-[var(--primary)]">{milestone.title}</h4>
                       <p className="text-lg text-[var(--text-dim)] leading-relaxed font-medium">{milestone.desc}</p>
                    </div>
                 </motion.div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES - SIMPLICITY & CONSISTENCY */}
      <section className="py-40 bg-[var(--bg-main)]">
        <div className="container-full text-center space-y-24">
           <div className="space-y-4">
              <h2 className="text-[var(--primary)]">Foundational Principles</h2>
              <div className="w-24 h-1 bg-[var(--secondary)] mx-auto rounded-full" />
           </div>

           <div className="grid md:grid-cols-3 gap-8">
              {[
                { t: "Excellence", d: "Zero-error tolerance in compliance and payroll management.", i: <Award size={32}/> },
                { t: "Integrity", d: "Opaque-free labor relations with 100% legal transparency.", i: <ShieldCheck size={32}/> },
                { t: "Strategic Depth", d: "Accessing Ethiopia's most specialized talent pool since 2005.", i: <Target size={32}/> }
              ].map((val, i) => (
                <div key={i} className="card-glass p-16 space-y-8 flex flex-col items-center text-center group">
                   <div className="w-20 h-20 rounded-[2rem] bg-[var(--bg-ghost)] text-[var(--primary)] flex items-center justify-center transition-all group-hover:bg-[var(--primary)] group-hover:text-white group-hover:rotate-[15deg]">
                      {val.i}
                   </div>
                   <h4 className="text-2xl font-bold tracking-tight uppercase text-[var(--primary)]">{val.t}</h4>
                   <p className="text-base text-[var(--text-dim)] leading-relaxed font-medium">{val.d}</p>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}
