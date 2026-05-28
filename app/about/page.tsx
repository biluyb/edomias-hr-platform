"use client";
import Image from "next/image";
import { CheckCircle, Award, Shield, Target } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function AboutPage() {
  const { t } = useApp();

  return (
    <>
      <section className="bg-[var(--bg-secondary)] pt-32 pb-20 border-b border-[var(--border-color)]">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-[10px] font-bold text-[var(--brand-primary)] uppercase tracking-wider">Corporate Profile</span>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold mt-4 mb-6">
               Leading Human Capital <span className="text-[var(--brand-primary)]">Strategies</span>
            </h1>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              Established in 2005, Edomias International Plc provides a full range of cost-effective Human Resources solutions to help organizations scale with precision.
            </p>
          </div>
        </div>
      </section>

      <section className="section-py bg-[var(--bg-primary)]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Legacy</h2>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                 Edomias International PLC is not just a service provider, but a strategic business partner. We handle all labor relations, disputes, and compliance, allowing our partners to focus on core growth.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
                 {[
                   { t: "Excellence", d: "Standardizing service delivery in the Ethiopian market." },
                   { t: "Integrity", d: "Ethical frameworks in every recruitment cycle." }
                 ].map((v, i) => (
                   <div key={i} className="card p-6">
                      <h4 className="font-bold text-sm mb-2">{v.t}</h4>
                      <p className="text-xs text-[var(--text-secondary)]">{v.d}</p>
                   </div>
                 ))}
              </div>
            </div>
            <div className="relative">
               <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/3] bg-[var(--bg-tertiary)] relative">
                  <Image src="/images/about_us_top_1779973104242.png" alt="Corporate Environment" fill className="object-cover" />
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-py bg-[var(--bg-secondary)]">
        <div className="container-custom text-center">
           <h2 className="text-3xl font-bold mb-12">Executive Leadership</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { n: "Edomias International", r: "Management Unit", i: "/images/management_top_1779974253474.png" },
                { n: "Operations Group", r: "Strategic Division", i: "/images/skilled_labor.png" },
                { n: "HR Directorate", r: "Compliance Unit", i: "/images/cleaning_service.png" }
              ].map((m, i) => (
                <div key={m.n} className="card p-4 group">
                   <div className="rounded-2xl overflow-hidden aspect-square mb-6 bg-[var(--bg-tertiary)]">
                      <Image src={m.i} alt={m.n} width={400} height={400} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                   </div>
                   <h4 className="font-bold">{m.n}</h4>
                   <p className="text-xs text-[var(--brand-primary)] font-bold mt-1 uppercase tracking-wider">{m.r}</p>
                </div>
              ))}
           </div>
        </div>
      </section>
    </>
  );
}
