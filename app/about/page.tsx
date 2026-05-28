"use client";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Users, Award, Shield, Target, Briefcase } from "lucide-react";
import { STATS, WHY_POINTS } from "@/data";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-white via-bg2 to-green-pale pt-[140px] pb-20 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="label"><div className="label-dot" /><span>About Us</span></div>
            <h1 className="text-4xl md:text-5xl font-extrabold font-display text-dark leading-tight mt-3">
              We Are Ethiopia's Premier <span className="gradient-text">Human Resource</span> Partner
            </h1>
            <p className="text-lg text-gray mt-5 leading-relaxed">
              Established in 2005, Edomias International Plc has been at the forefront of the HR industry in Ethiopia, providing world-class outsourcing and recruitment solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-py bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="fade-up">
              <h2 className="heading">Our <span>Story</span></h2>
              <p className="text-gray mt-5 leading-relaxed">
                Edomias International Plc, established in 2005, is the premier Human Resource solutions provider in Ethiopia. We provide a full range of cost-effective Human Resources solutions to help organizations take their business to the next level.
              </p>
              <p className="text-gray mt-4 leading-relaxed">
                Edomias International PLC is not just a service provider, but also a strategic business partner. We have extensive experience helping clients in various industries, from manufacturing to international NGOs.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-10">
                <div className="p-5 bg-bg2 rounded-2xl border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-green/10 flex items-center justify-center text-green text-xl"><Award /></div>
                    <h4 className="font-bold text-dark text-sm">Excellence</h4>
                  </div>
                  <p className="text-xs text-gray leading-relaxed">Commitment to the highest standards of service delivery since 2005.</p>
                </div>
                <div className="p-5 bg-bg2 rounded-2xl border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center text-orange text-xl"><Shield /></div>
                    <h4 className="font-bold text-dark text-sm">Integrity</h4>
                  </div>
                  <p className="text-xs text-gray leading-relaxed">Building trust through transparent and ethical business practices.</p>
                </div>
              </div>
            </div>
            <div className="relative fade-up" style={{ animationDelay: "0.1s" }}>
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/images/about_us_top_1779973104242.png" alt="Edomias Office" width={600} height={450} className="w-full h-[450px] object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white border border-border rounded-2xl p-6 shadow-xl max-w-[240px]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full gradient-green flex items-center justify-center text-white"><Target /></div>
                  <div className="text-sm font-bold text-dark">Our Mission</div>
                </div>
                <p className="text-xs text-gray leading-relaxed">To be the most preferred strategic business partner by providing premium HR solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Management / Team */}
      <section className="section-py bg-bg2">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="label justify-center"><div className="label-dot" /><span>Leadership</span></div>
          <h2 className="heading mt-2">Management <span>Members</span></h2>
          <p className="subheading mx-auto mt-4">The experienced professionals driving Edomias towards excellence.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
             {/* Mock Management Profiles */}
             {[
               { name: "Edomias International", role: "General Manager", img: "/images/management_top_1779974253474.png" },
               { name: "HR Director", role: "Strategic Operations", img: "/images/skilled_labor.png" },
               { name: "Operations Lead", role: "Facility Management", img: "/images/cleaning_service.png" }
             ].map((m, i) => (
                <div key={i} className="bg-white rounded-3xl p-6 border border-border group hover:border-green hover:shadow-xl transition-all duration-300">
                  <div className="w-full h-64 rounded-2xl overflow-hidden bg-bg3 mb-6">
                    <img src={m.img} alt={m.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h4 className="font-bold text-dark text-lg">{m.name}</h4>
                  <p className="text-sm text-green font-semibold mt-1">{m.role}</p>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-py bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-dark rounded-3xl p-12 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-green/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-extrabold font-display text-white mb-6">Our Core Values</h2>
                <div className="flex flex-col gap-6">
                   {[
                     { t: "Customer Focus", d: "We prioritize our clients' needs and strive to exceed their expectations." },
                     { t: "Innovation", d: "Continuously improving our processes and adopting new technologies." },
                     { t: "Teamwork", d: "Collaborating to achieve success for our clients and candidates." }
                   ].map((v, i) => (
                     <div key={i} className="flex items-start gap-4">
                        <div className="w-6 h-6 rounded-full bg-green text-white flex items-center justify-center flex-shrink-0 mt-1">✓</div>
                        <div>
                          <h4 className="font-bold text-white text-lg">{v.t}</h4>
                          <p className="text-white/60 text-sm">{v.d}</p>
                        </div>
                     </div>
                   ))}
                </div>
              </div>
              <div className="hidden lg:block">
                <Image src="/images/about_us_mid_1779973292152.png" alt="Team values" width={500} height={400} className="rounded-2xl shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-py-sm bg-bg2">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-dark mb-6">Want to learn more about our specific services?</h2>
          <div className="flex justify-center gap-4">
            <Link href="/services" className="px-8 py-3.5 rounded-full text-sm font-bold text-white gradient-green shadow-lg">View Services</Link>
            <Link href="/contact" className="px-8 py-3.5 rounded-full text-sm font-bold text-dark border-2 border-border hover:border-green transition-all">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
