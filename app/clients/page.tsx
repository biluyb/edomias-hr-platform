"use client";
import { CLIENTS } from "@/data";
import { ShieldCheck, Award, Globe } from "lucide-react";

export default function ClientsPage() {
  return (
    <div className="bg-[var(--bg-secondary)] min-h-screen pt-32 pb-20">
      <div className="container-custom">
        <div className="max-w-2xl mb-12">
          <span className="text-[10px] font-bold text-[var(--brand-primary)] uppercase tracking-wider">Institutional Trust</span>
          <h1 className="text-4xl font-display font-extrabold mt-4 mb-6">Global & Domestic <span className="text-[var(--brand-primary)]">Partnerships</span></h1>
          <p className="text-[var(--text-secondary)] leading-relaxed">
             Maintaining long-term relationships through consistent quality, professional personnel management, and 100% legal compliance across all sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(CLIENTS).map(([category, list]) => (
            <div key={category} className="card p-8 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-[var(--accent-pale)] text-[var(--brand-primary)] flex items-center justify-center font-bold text-xs ring-4 ring-[var(--bg-primary)]">
                  {category[0]}
                </div>
                <h3 className="text-sm font-bold uppercase tracking-tight">{category}</h3>
              </div>
              <ul className="space-y-3">
                {list.map((client) => (
                  <li key={client} className="flex items-center gap-3 group/item">
                    <div className="w-1 h-1 rounded-full bg-[var(--text-muted)] group-hover/item:bg-[var(--brand-primary)] transition-colors" />
                    <span className="text-xs text-[var(--text-secondary)] group-hover/item:text-[var(--text-primary)] transition-colors">{client}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 card bg-[var(--text-primary)] text-white p-10 md:p-16 text-center relative overflow-hidden border-none">
           <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--brand-primary)_0%,_transparent_70%)]" />
           <div className="max-w-xl mx-auto space-y-6 relative z-10">
              <ShieldCheck className="mx-auto text-[var(--brand-primary)]" size={48} />
              <h2 className="text-2xl font-bold">Rigorous Selection Standard</h2>
              <p className="text-xs text-white/60 leading-relaxed uppercase tracking-widest font-bold">Institutional Excellence Performance Guarantee</p>
           </div>
        </div>
      </div>
    </div>
  );
}
