"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Briefcase, Shield, Sparkles, Sprout, Hammer, Users } from "lucide-react";
import { SERVICES } from "@/data";

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-white via-bg2 to-green-pale pt-[140px] pb-20 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <div className="label"><div className="label-dot" /><span>Our Services</span></div>
            <h1 className="text-4xl md:text-5xl font-extrabold font-display text-dark leading-tight mt-3">
              Comprehensive <span className="gradient-text">Workforce Solutions</span>
            </h1>
            <p className="text-lg text-gray mt-5 leading-relaxed">
              From specialized professional recruitment to large-scale facility management, we handle the complexities of HR so you can focus on your core business.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Detail */}
      <section className="section-py bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col gap-24">
            {SERVICES.map((s, i) => (
              <div key={s.id} id={s.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center scroll-mt-[100px] ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`${i % 2 !== 0 ? 'lg:order-2' : ''} fade-up`}>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-6 ${s.color === "green" ? "bg-green-pale" : "bg-orange-pale"}`}>
                    {s.icon}
                  </div>
                  <h2 className="text-3xl font-extrabold font-display text-dark mb-4">{s.title}</h2>
                  <p className="text-gray text-base leading-relaxed mb-6">{s.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {[
                      "End-to-end management",
                      "Full legal compliance",
                      "Insurance coverage",
                      "Quality assurance",
                      "SLA-driven approach",
                      "Experienced personnel"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-dark2">
                        <CheckCircle size={16} className="text-green flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-6 bg-bg2 rounded-2xl border border-border">
                    <h4 className="text-xs font-extrabold uppercase tracking-widest text-gray mb-3">Key Clients for this Service</h4>
                    <div className="flex flex-wrap gap-2">
                       {s.clients.map((client, idx) => (
                         <span key={idx} className="px-3 py-1.5 bg-white border border-border rounded-full text-xs font-semibold text-gray-dark">{client}</span>
                       ))}
                    </div>
                  </div>

                  <div className="mt-8">
                    <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white gradient-green shadow-lg shadow-green/20">
                      Request this Service <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>

                <div className={`relative ${i % 2 !== 0 ? 'lg:order-1' : ''} fade-up`} style={{ animationDelay: "0.1s" }}>
                  <div className="rounded-3xl overflow-hidden shadow-2xl bg-bg3 aspect-[4/3] relative">
                    <Image 
                      src={`/images/${s.id === 'skilled' ? 'skilled_labor' : s.id === 'general' ? 'hero_banner' : s.id + '_service'}.png`} 
                      alt={s.title} 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                  <div className="absolute top-6 -right-6 bg-white border border-border rounded-2xl p-4 shadow-xl hidden md:block">
                     <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-green/10 flex items-center justify-center text-green font-bold">100%</div>
                        <div className="text-xs font-bold text-dark">Compliant &<br/>Professional</div>
                     </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Services */}
      <section className="section-py bg-dark text-white overflow-hidden relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-5 pointer-events-none">
           <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 100L1440 100M0 200L1440 200M0 300L1440 300M0 400L1440 400" stroke="white" strokeWidth="1" />
           </svg>
        </div>
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold font-display mb-4">Benefit from Our Experience</h2>
            <p className="text-white/60">We bring over 18 years of industry knowledge to simplify your human resource and facility needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Shield />, t: "Risk Mitigation", d: "We assume all labor-related risks and liability." },
              { icon: <Briefcase />, t: "Cost Effective", d: "Reduce overhead by outsourcing non-core functions." },
              { icon: <Users />, t: "Expert Staffing", d: "Access to a pre-vetted database of thousands." },
              { icon: <TrendingUp />, t: "Focus on Growth", d: "Free up your management time for core tasks." }
            ].map((b, i) => (
              <div key={i} className="text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl border border-white/20 bg-white/5 flex items-center justify-center text-green text-2xl mb-6">
                  {b.icon}
                </div>
                <h4 className="font-bold text-lg mb-2">{b.t}</h4>
                <p className="text-sm text-white/50 leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-py-sm bg-bg2">
        <div className="max-w-4xl mx-auto px-6 bg-white border border-border rounded-3xl p-10 md:p-16 shadow-xl text-center">
           <h2 className="text-3xl font-extrabold font-display text-dark mb-4">Ready to Partner with Us?</h2>
           <p className="text-gray mb-8">Discuss your organization's needs with our expert team today.</p>
           <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="px-8 py-3.5 rounded-full text-sm font-bold text-white gradient-green shadow-lg">Get a Consultation</Link>
              <Link href="/about" className="px-8 py-3.5 rounded-full text-sm font-bold text-dark border-2 border-border hover:border-green transition-all">Learn More</Link>
           </div>
        </div>
      </section>
    </>
  );
}

function TrendingUp() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
  );
}
