"use client";
import Image from "next/image";
import { ShieldCheck, Award, Target, Globe, Users, CheckCircle2, History } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function AboutPage() {
  const { t } = useApp();

  return (
    <div className="bg-[var(--bg-main)] min-h-screen">
      {/* MAGNIFIED COMPANY AGE HERO */}
      <section className="relative pt-48 pb-32 overflow-hidden bg-[var(--primary)]">
        <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] blend-overlay" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle,rgba(212,175,55,0.15)_0%,transparent_70%)]" />
        
        <div className="container-full relative z-10 text-center space-y-10 reveal">
          <div className="inline-flex items-center gap-4 px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
             <div className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
             <span className="text-[10px] font-black uppercase tracking-[4px] text-white underline decoration-[var(--accent)] underline-offset-4">{t.about.ageLabel}</span>
          </div>
          
          <div className="space-y-4">
             <div className="text-[clamp(6rem,15vw,12rem)] font-display font-black text-white leading-none tracking-tighter hover:text-[var(--accent)] transition-colors duration-700">
               18+
             </div>
             <h1 className="text-white text-pretty max-w-4xl mx-auto">{t.about.title}</h1>
          </div>
          
          <p className="text-xl text-white/70 max-w-2xl mx-auto italic-accent font-medium leading-relaxed">
            "{t.about.subtitle}"
          </p>
        </div>
      </section>

      {/* MAGNIFIED INSTITUTIONAL TIMELINE (No Images) */}
      <section className="py-32 bg-[var(--bg-ghost)]">
        <div className="container-full">
          <div className="grid lg:grid-cols-12 gap-20">
            <div className="lg:col-span-5 space-y-8 sticky top-32 h-fit">
               <div className="emerald-badge">Our Evolution</div>
               <h2 className="text-[var(--primary)]">{t.about.historyTitle}</h2>
               <p className="text-lg text-[var(--text-dim)] font-medium leading-relaxed">
                 {t.about.historyIntro}
               </p>
               <div className="p-10 bg-[var(--primary)] rounded-[3rem] text-white space-y-4 shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent)] opacity-10 blur-3xl group-hover:scale-150 transition-transform duration-1000" />
                  <History size={48} className="text-[var(--accent)]" />
                  <h3 className="text-white text-2xl">Proven Resilience</h3>
                  <p className="text-xs text-white/70 leading-relaxed font-bold uppercase tracking-widest">Two decades of high-trust service level agreements with global NGOs and local industry giants.</p>
               </div>
            </div>

            <div className="lg:col-span-1" />

            <div className="lg:col-span-6 space-y-0">
               {[
                 { year: "2005", title: "Institutional Inception", desc: "Edomias International Plc established in Addis Ababa, focusing on specialized recruitment for the humanitarian sector." },
                 { year: "2010", title: "Industrial Diversification", desc: "Strategic expansion into manufacturing and logistics staffing, supporting Ethiopia's emerging industrial zones." },
                 { year: "2015", title: "Digital Integration", desc: "First deployment of centralized payroll and labor compliance systems, standardizing HR reporting for FDI partners." },
                 { year: "2020", title: "Resilient Leadership", desc: "Scaling operations during global volatility, reinforcing our position as the primary strategic labor partner in East Africa." },
                 { year: "2024+", title: "The Next Frontier", desc: "Pioneering integrated facility management and high-fidelity recruiter-to-candidate dashboards." }
               ].map((milestone, i) => (
                 <div key={i} className="timeline-item group">
                    <div className="space-y-4 py-4">
                       <span className="text-3xl font-display font-black text-[var(--accent)] group-hover:text-[var(--primary)] transition-all">{milestone.year}</span>
                       <h4 className="text-2xl font-bold tracking-tight">{milestone.title}</h4>
                       <p className="text-body text-[var(--text-dim)] leading-relaxed">{milestone.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* INSTITUTIONAL CORE VALUES - PRETTY UI */}
      <section className="py-32 bg-[var(--bg-main)]">
        <div className="container-full text-center space-y-20">
           <div className="space-y-4">
              <h2 className="text-[var(--primary)]">Foundational Principles</h2>
              <div className="w-24 h-1 bg-[var(--accent)] mx-auto rounded-full" />
           </div>

           <div className="grid md:grid-cols-3 gap-8">
              {[
                { t: "Excellence", d: "Zero-error tolerance in compliance and payroll management.", i: <Award size={32}/> },
                { t: "Integrity", d: "Opaque-free labor relations with 100% legal transparency.", i: <ShieldCheck size={32}/> },
                { t: "Efficiency", d: "Rapid response staffing cycles synced with ERP data.", i: <CheckCircle2 size={32}/> }
              ].map((val, i) => (
                <div key={i} className="card-luxury p-12 space-y-6 text-center group">
                   <div className="w-16 h-16 rounded-2xl bg-[var(--bg-ghost)] text-[var(--primary)] flex items-center justify-center mx-auto transition-all group-hover:bg-[var(--primary)] group-hover:text-white group-hover:rotate-[15deg]">
                      {val.i}
                   </div>
                   <h4 className="text-xl font-bold tracking-tight uppercase">{val.t}</h4>
                   <p className="text-sm text-[var(--text-dim)] leading-relaxed">{val.d}</p>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}
