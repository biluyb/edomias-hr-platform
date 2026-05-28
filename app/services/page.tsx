"use client";
import Image from "next/image";
import { CheckCircle, Briefcase, Shield, TrendingUp, Users, Target } from "lucide-react";
import { SERVICES } from "@/data";

export default function ServicesPage() {
  return (
    <>
      <section className="bg-[var(--bg-secondary)] pt-32 pb-20 border-b border-[var(--border-color)]">
        <div className="container-custom">
          <div className="max-w-2xl">
            <span className="text-[10px] font-bold text-[var(--brand-primary)] uppercase tracking-wider">Service Catalog</span>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold mt-4 mb-6">
              Specialized <span className="text-[var(--brand-primary)]">Workforce</span> Solutions
            </h1>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              Precision-engineered recruitment and facility management systems designed for institutional excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="section-py bg-[var(--bg-primary)]">
        <div className="container-custom">
          <div className="flex flex-col gap-24">
            {SERVICES.map((s, i) => (
              <div key={s.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                   <h2 className="text-2xl font-bold mb-4">{s.title}</h2>
                   <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-8">{s.description}</p>
                   
                   <div className="grid grid-cols-2 gap-y-3 mb-8">
                     {[
                       "ISO Aligned",
                       "Fully Insured",
                       "24/7 Support",
                       "ERP Integrated"
                     ].map((feat) => (
                       <div key={feat} className="flex items-center gap-2 text-xs text-[var(--text-primary)] font-semibold">
                         <CheckCircle size={14} className="text-[var(--brand-primary)]" /> {feat}
                       </div>
                     ))}
                   </div>

                   <div className="card bg-[var(--bg-secondary)] p-6">
                     <h5 className="text-[10px] font-bold text-[var(--text-muted)] uppercase mb-3">Key Partners</h5>
                     <div className="flex flex-wrap gap-2">
                       {s.clients.map(c => (
                         <span key={c} className="px-2 py-1 bg-[var(--bg-primary)] border border-[var(--border-color)] text-[8px] font-bold uppercase rounded">{c}</span>
                       ))}
                     </div>
                   </div>
                </div>

                <div className={`relative ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                   <div className="rounded-3xl overflow-hidden shadow-lg aspect-video bg-[var(--bg-tertiary)] relative">
                      <Image 
                        src={`/images/${s.id === 'skilled' ? 'skilled_labor' : s.id === 'general' ? 'hero_banner' : s.id + '_service'}.png`} 
                        alt={s.title} 
                        fill 
                        className="object-cover" 
                      />
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
