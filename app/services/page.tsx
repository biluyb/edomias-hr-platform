"use client";
import Image from "next/image";
import { CheckCircle2, Briefcase, Shield, Activity, Users, Target, ArrowRight, Zap, Award } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const { t } = useApp();

  const SERVICES_LIST = [
    {
      id: "HR-001",
      title: "Strategic Recruitment Engine",
      desc: "Precision-engineered talent acquisition mapping Ethiopia's elite 5% professional human capital to your institutional objectives.",
      icon: <Briefcase size={32}/>,
      img: "/images/skilled_labor.png",
      features: ["Verified Competency Audits", "Global NGO-Standard Vetting", "Rapid Placement Cycles"]
    },
    {
      id: "FM-001",
      title: "Integrated Facility Logistics",
      desc: "Standardized operational management for industrial parks and corporate HQ's, ensuring zero-latency in resource handling.",
      icon: <Zap size={32}/>,
      img: "/images/landscaping_service.png",
      features: ["ISO-Standard Safety Protocols", "24/7 Strategic Support", "Predictive Maintenance Reporting"]
    },
    {
      id: "LC-001",
      title: "Opaque-Free Labor Compliance",
      desc: "Complete regulatory legal shields for international investors, absorbing 100% of local institutional labor risks.",
      icon: <Shield size={32}/>,
      img: "/images/security_service.png",
      features: ["100% Legal Transparency", "Real-time Compliance Tracking", "Proactive Risk Shielding"]
    }
  ];

  return (
    <div className="bg-[var(--bg-main)] min-h-screen">
      {/* MAGNIFIED SERVICE HEADER */}
      <section className="relative pt-48 pb-24 overflow-hidden bg-[var(--bg-ghost)] border-b border-[var(--border-soft)]">
        <div className="container-full">
           <div className="grid lg:grid-cols-2 gap-16 items-center reveal">
              <div className="space-y-8">
                 <div className="emerald-badge">{t.services.title}</div>
                 <h1 className="text-[var(--primary)] uppercase tracking-tight">Institutional <span className="text-[var(--accent)] italic-accent text-4xl lg:text-7xl">Solutions.</span></h1>
                 <p className="text-xl text-[var(--text-dim)] font-medium max-w-xl leading-relaxed">
                    {t.services.subtitle}
                 </p>
              </div>
              <div className="hidden lg:flex justify-end">
                 <motion.div 
                   animate={{ rotate: 360 }}
                   transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                   className="w-96 h-96 border border-dashed border-[var(--accent)] rounded-full flex items-center justify-center opacity-30"
                 >
                    <div className="w-64 h-64 border border-dashed border-[var(--primary)] rounded-full flex items-center justify-center">
                       <Award size={80} className="text-[var(--primary)]" />
                    </div>
                 </motion.div>
              </div>
           </div>
        </div>
      </section>

      {/* LUXURY SERVICE PORTFOLIO */}
      <section className="py-32">
         <div className="container-full space-y-40">
            {SERVICES_LIST.map((serv, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                key={serv.id} 
                className={`flex flex-col lg:flex-row items-center gap-20 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                  <div className="flex-1 space-y-10 group">
                    <div className="space-y-6">
                       <div className="flex items-center gap-4">
                          <div className="w-16 h-16 rounded-2xl bg-[var(--bg-ghost)] text-[var(--primary)] flex items-center justify-center transition-all group-hover:bg-[var(--primary)] group-hover:text-white group-hover:rotate-[15deg] shadow-lux">
                            {serv.icon}
                          </div>
                          <div className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--accent)]">Capability {idx+1}</div>
                       </div>
                       <h2 className="text-4xl lg:text-5xl font-display">{serv.title}</h2>
                       <p className="text-lg text-[var(--text-dim)] leading-relaxed font-medium">{serv.desc}</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                       {serv.features.map((feat, i) => (
                         <div key={i} className="flex gap-3 items-center p-5 bg-[var(--bg-ghost)] border border-[var(--border-soft)] rounded-2xl hover:border-[var(--primary)] transition-all group/item">
                            <CheckCircle2 size={18} className="text-[var(--primary)] group-hover/item:scale-125 transition-transform" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-[var(--text-main)]">{feat}</span>
                         </div>
                       ))}
                    </div>

                    <div className="pt-6">
                       <button className="btn-elite btn-accent-elite group flex items-center gap-4">
                          Initiate Solution Mapping <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                       </button>
                    </div>
                  </div>

                  <div className="flex-1 relative">
                     <div className="card-luxury p-3 bg-white rotate-[3deg] group-hover:rotate-0 transition-all duration-1000 shadow-2xl relative z-10">
                        <div className="relative aspect-video rounded-[1.5rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                           <Image src={serv.img} alt={serv.title} fill className="object-cover group-hover:scale-110 transition-transform duration-[2s]" />
                        </div>
                     </div>
                     <div className="absolute -inset-10 bg-[var(--accent)] opacity-[0.05] rounded-full blur-3xl z-0" />
                  </div>
              </motion.div>
            ))}
         </div>
      </section>

      {/* INSTITUTIONAL CALL TO ACTION */}
      <section className="py-40 bg-[var(--primary)] relative overflow-hidden">
        <div className="container-full relative z-10 text-center space-y-12">
            <motion.h2 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="text-white text-pretty max-w-4xl mx-auto"
            >
              Precision Engineering For Ethiopia's <br/> <span className="text-[var(--accent)] italic-accent text-3xl lg:text-7xl">Resource Demands.</span>
            </motion.h2>
            <div className="flex justify-center">
               <button className="btn-elite bg-[var(--accent)] text-[var(--primary)] shadow-2xl hover:scale-105 active:scale-95 transition-all outline-none">
                  Consultation Headquarters
               </button>
            </div>
        </div>
      </section>
    </div>
  );
}
