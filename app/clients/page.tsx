"use client";
import { CLIENTS } from "@/data";
import { CheckCircle, Award, Users, Shield } from "lucide-react";

export default function ClientsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-white via-bg2 to-green-pale pt-[140px] pb-20 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <div className="label"><div className="label-dot" /><span>Our Clients</span></div>
            <h1 className="text-4xl md:text-5xl font-extrabold font-display text-dark leading-tight mt-3">
              Trusted by 500+ <span className="gradient-text">Organizations</span>
            </h1>
            <p className="text-lg text-gray mt-5 leading-relaxed">
              We serve a diverse portfolio of clients, from global multi-nationals and NGOs to major Ethiopian industries and governmental institutions.
            </p>
          </div>
        </div>
      </section>

      {/* Grid of Clients by Category */}
      <section className="section-py bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(CLIENTS).map(([category, list], i) => (
              <div key={category} className="fade-up" style={{ animationDelay: `${i * 0.05}s` }}>
                <div className="bg-bg2 border border-border rounded-3xl p-8 h-full hover:border-green hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-green/10 flex items-center justify-center text-green text-xl font-bold">
                       {i + 1}
                    </div>
                    <h3 className="text-lg font-bold text-dark">{category}</h3>
                  </div>
                  <div className="flex flex-col gap-3">
                    {list.map((client) => (
                      <div key={client} className="flex items-start gap-3 group">
                        <div className="w-5 h-5 rounded-full border border-border bg-white flex items-center justify-center text-[10px] text-green group-hover:bg-green group-hover:text-white transition-all mt-1 flex-shrink-0">✓</div>
                        <span className="text-sm text-gray leading-tight group-hover:text-dark transition-colors">{client}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials or Stats */}
      <section className="section-py-sm bg-bg2">
        <div className="max-w-6xl mx-auto px-6">
           <div className="bg-white rounded-3xl p-10 md:p-16 border border-border shadow-xl grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
              <div>
                 <h2 className="text-3xl font-extrabold font-display text-dark mb-6">Why Organizations Choose Edomias</h2>
                 <div className="flex flex-col gap-6">
                    {[
                      { t: "18+ Years Experience", d: "Deep understanding of the Ethiopian labor market and regulatory environment." },
                      { t: "Full Compliance", d: "100% adherence to labor laws, tax regulations, and ethical standards." },
                      { t: "Scalability", d: "Ability to provide hundreds of staff members within short timeframes." },
                      { t: "24/7 Support", d: "Dedicated account managers and rapid response teams for all operations." }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center text-orange flex-shrink-0 mt-1"><Award size={20}/></div>
                        <div>
                          <h4 className="font-bold text-dark text-[15px]">{item.t}</h4>
                          <p className="text-gray text-sm">{item.d}</p>
                        </div>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="bg-bg3 rounded-2xl p-10 flex flex-col items-center justify-center text-center">
                 <div className="w-20 h-20 rounded-full bg-green text-white flex items-center justify-center text-3xl mb-6 shadow-lg shadow-green/20">
                    <Users size={36}/>
                 </div>
                 <div className="text-4xl font-extrabold text-dark font-display mb-2">500+</div>
                 <div className="text-gray-light uppercase tracking-widest text-[10px] font-bold mb-4">Active & Past Clients</div>
                 <p className="text-sm text-gray leading-relaxed max-w-[300px]">
                   Maintaining long-term relationships through consistent quality and professional personnel management.
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* Global Presence / Industries */}
      <section className="section-py bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="heading">Sectors We <span>Specialize In</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-12">
            {[
              { l: "Manufacturing", i: "🏭" },
              { l: "NGOs", i: "🌍" },
              { l: "Finance", i: "🏦" },
              { l: "Tourism", i: "🏔️" },
              { l: "Technology", i: "💻" },
              { l: "Logistics", i: "📦" }
            ].map((s, i) => (
              <div key={i} className="p-6 bg-bg2 border border-border rounded-2xl hover:border-green hover:bg-white hover:shadow-lg transition-all">
                <div className="text-3xl mb-3">{s.i}</div>
                <div className="text-sm font-bold text-dark">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
