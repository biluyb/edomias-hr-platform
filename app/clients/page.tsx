"use client";
import { CLIENTS } from "@/data";
import { ShieldCheck, Award, Globe, CheckCircle2, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function ClientsPage() {
  return (
    <div className="bg-[var(--bg-soft)] min-h-screen pt-48 pb-24">
      <div className="container-full">
        {/* INSTITUTIONAL TRUST HUB */}
        <div className="grid lg:grid-cols-2 gap-20 items-end mb-32 reveal">
          <div className="space-y-8">
            <div className="emerald-badge">Institutional Trust</div>
            <h1 className="text-[var(--primary)] uppercase tracking-tight">The <span className="text-[var(--accent)] italic-accent text-4xl lg:text-7xl">Standard.</span></h1>
            <p className="text-xl text-[var(--text-dim)] font-medium leading-relaxed max-w-xl">
               Maintaining strategic, decade-long partnerships through standardized recruitment excellence and 100% legal labor compliance across East Africa.
            </p>
          </div>
          <div className="flex gap-6 pb-4">
             <div className="p-10 bg-white border border-[var(--border-soft)] rounded-[3rem] shadow-2xl flex items-center gap-6 relative overflow-hidden group">
                <div className="absolute inset-0 bg-[var(--primary)] opacity-0 group-hover:opacity-[0.02] transition-opacity" />
                <div className="p-4 bg-[var(--bg-ghost)] text-[var(--accent)] rounded-2xl group-hover:rotate-12 transition-transform"><Star size={32} /></div>
                <div className="flex flex-col">
                   <span className="text-4xl font-display font-black text-[var(--primary)]">18+</span>
                   <span className="text-[10px] font-black uppercase text-[var(--text-dim)] tracking-[0.2em]">Years of Integrity</span>
                </div>
             </div>
          </div>
        </div>

        {/* DYNAMIC PARTNER MATRIX */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(CLIENTS).map(([category, list], i) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              key={category} 
              className="card-luxury p-12 bg-white space-y-10 group border-b-8 border-b-[var(--bg-ghost)] hover:border-b-[var(--accent)]"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-black uppercase tracking-[0.3em] text-[var(--text-main)]">{category}</h3>
                <span className="text-2xl font-display font-black text-[var(--bg-ghost)] group-hover:text-[var(--accent)] transition-colors">0{i+1}</span>
              </div>
              
              <div className="h-px bg-[var(--border-soft)] w-full" />

              <ul className="space-y-5">
                {list.map((client) => (
                  <li key={client} className="flex items-start gap-4 group/item">
                    <CheckCircle2 size={18} className="text-[var(--accent)] shrink-0 mt-0.5 opacity-30 group-hover/item:opacity-100 transition-all group-hover/item:scale-110" />
                    <span className="text-sm font-bold text-[var(--text-dim)] group-hover/item:text-[var(--text-main)] transition-colors leading-tight">{client}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* RELATIONAL ASSURANCE */}
        <div className="mt-40 p-20 bg-[var(--primary)] rounded-[4rem] text-white relative overflow-hidden shadow-2xl reveal">
           <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] blend-overlay" />
           <div className="relative z-10 grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-8 space-y-8 text-center lg:text-left">
                 <h2 className="text-white text-4xl lg:text-5xl">Validated Selection Standard.</h2>
                 <p className="text-sm text-white/70 font-black uppercase tracking-[0.3em] leading-loose max-w-3xl">
                    Every partner affiliation is governed by the Edomias Institutional Excellence Performance Guarantee, ensuring ISO-benchmarked workforce management at every operational tier.
                 </p>
              </div>
              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                 <button className="btn-elite bg-[var(--accent)] text-[var(--primary)] shadow-2xl hover:bg-white active:scale-95 transition-all outline-none uppercase font-black">
                    Initiate Partnership
                 </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
