"use client";
import { Calendar, User, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function NewsPage() {
  const posts = [
    {
      id: 1,
      title: "18 Years of Operational Excellence in the Ethiopian Human Capital Market",
      tag: "Corporate",
      date: "May 2026",
      img: "/images/about_us_top_1779973104242.png"
    },
    {
      id: 2,
      title: "Strategic ERP Integration: Synchronizing Local Talent with Global Demand",
      tag: "Technology",
      date: "May 2026",
      img: "/images/homepage_mid_1779972981736.png"
    }
  ];

  return (
    <div className="bg-[var(--bg-secondary)] min-h-screen pt-32 pb-20">
      <div className="container-custom">
        <div className="max-w-2xl mb-12">
          <span className="text-[10px] font-bold text-[var(--brand-primary)] uppercase tracking-wider">News Room</span>
          <h1 className="text-4xl font-display font-extrabold mt-4 mb-6">Corporate <span className="text-[var(--brand-primary)]">Insights</span></h1>
          <p className="text-[var(--text-secondary)] leading-relaxed">
             Official updates, industry analysis, and strategic announcements from Edomias International Plc.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {posts.map(post => (
             <article key={post.id} className="card group p-0 overflow-hidden flex flex-col md:flex-row">
                <div className="w-full md:w-48 h-48 md:h-full relative shrink-0">
                   <Image src={post.img} alt={post.title} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <div className="p-8 flex flex-col justify-between">
                   <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-[8px] font-bold uppercase tracking-widest px-2 py-1 bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded">
                           {post.tag}
                        </span>
                        <span className="text-[10px] font-semibold text-[var(--text-muted)] line-clamp-1">{post.date}</span>
                      </div>
                      <h3 className="text-lg font-bold group-hover:text-[var(--brand-primary)] transition-colors leading-snug">
                         {post.title}
                      </h3>
                   </div>
                   <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[var(--text-primary)] hover:text-[var(--brand-primary)] transition-colors mt-6">
                      Read Full Brief <ArrowRight size={14} />
                   </button>
                </div>
             </article>
           ))}
        </div>
      </div>
    </div>
  );
}
