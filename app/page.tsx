"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shield, Award, Users, TrendingUp } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function HomePage() {
  const { t } = useApp();

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-[-1] opacity-[0.03]" 
             style={{ backgroundImage: "radial-gradient(var(--brand-primary) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-[var(--accent-pale)] text-[var(--brand-dark)] mb-6 border border-[var(--brand-primary)]/10">
                {t.hero.badge}
              </span>
              <h1 className="text-4xl md:text-6xl font-display font-extrabold text-[var(--text-primary)] leading-[1.1] mb-6">
                {t.hero.title}
              </h1>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8 max-w-lg">
                {t.hero.subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/jobs" className="btn btn-primary">
                  {t.hero.cta} <ArrowRight size={16} className="ml-2" />
                </Link>
                <Link href="/contact" className="btn border border-[var(--border-color)] text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]">
                  {t.hero.quote}
                </Link>
              </div>
            </div>

            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-[var(--bg-secondary)] rounded-[2rem] p-4 border border-[var(--border-color)]">
                <div className="rounded-[1.5rem] overflow-hidden aspect-[4/3] relative">
                  <Image 
                    src="/images/hero_banner.png" 
                    alt="Workforce Collaboration" 
                    fill 
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              {/* Performance Indicator - CSS Only */}
              <div className="absolute -bottom-6 -left-6 card py-4 px-6 max-w-[200px] hidden md:block">
                <div className="text-[10px] font-bold text-[var(--text-muted)] uppercase mb-1">Success Rate</div>
                <div className="text-2xl font-bold text-[var(--brand-primary)]">99.8%</div>
                <div className="text-[10px] text-[var(--text-secondary)] mt-1">Verified Placements</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-[var(--bg-secondary)] py-12 border-y border-[var(--border-color)] overflow-hidden">
        <div className="container-custom">
          <p className="text-center text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] mb-8">Trusted by Global Organizations</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all">
             {/* Text-based logos for maximum performance */}
             {["Huawei", "UNICEF", "Coca-Cola", "DHL", "Heineken", "UNHCR"].map(brand => (
               <span key={brand} className="text-xl font-display font-extrabold text-[var(--text-primary)]">{brand}</span>
             ))}
          </div>
        </div>
      </section>

      {/* Core Values / Why Us */}
      <section className="section-py">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Shield size={24}/>, t: "Legal Mastery", d: "100% compliance with Ethiopian labor laws and regulations." },
              { icon: <Award size={24}/>, t: "Quality Assurance", d: "Rigorous vetting process ensuring elite candidate placement." },
              { icon: <Users size={24}/>, t: "Massive Network", d: "Access to a pre-vetted database of thousands of professionals." },
              { icon: <TrendingUp size={24}/>, t: "Operational Efficiency", d: "Sub-24h response time for all staffing requirements." }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-start">
                <div className="w-12 h-12 rounded-xl bg-[var(--accent-pale)] text-[var(--brand-primary)] flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-3">{feature.t}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{feature.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-py bg-[var(--text-primary)] text-[var(--bg-primary)] overflow-hidden relative">
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-extrabold mb-8 max-w-2xl mx-auto leading-tight">
            Ready to Amplify Your Organizational Performance?
          </h2>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="btn btn-primary bg-white text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)]">
              Partner With Us
            </Link>
            <Link href="/about" className="btn border border-white/20 hover:bg-white/5">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
