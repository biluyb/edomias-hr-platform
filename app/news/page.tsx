"use client";
import { ArrowRight, Calendar, Bookmark, Search, Newspaper, Activity } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function NewsPage() {
  const posts = [
    {
      id: 1,
      title: "18 Years of Operational Resilience: The Evolution of HR in the Ethiopian Industrial Sector",
      tag: "Institutional",
      date: "May 28, 2026",
      brief: "Exploring the critical role of standardized human capital management in driving Ethiopia's rapid industrial park expansion and FDI success.",
      img: "/images/homepage_top_1779972966551.png"
    },
    {
      id: 2,
      title: "Digital Integration: How Edomias is Leveraging ERP Systems for Real-Time Talent Mapping",
      tag: "Technology",
      date: "May 24, 2026",
      brief: "A technical brief on our new integrated recruiter-to-candidate dashboard and its impact on placement efficiency across East Africa.",
      img: "/images/homepage_mid_1779972981736.png"
    },
    {
      id: 3,
      title: "Security & Protection: Scaling Workforce Safety for International NGOs in Field Operations",
      tag: "Operations",
      date: "May 15, 2026",
      brief: "A strategic overview of our field security coordination for development projects in high-complexity regional landscapes.",
      img: "/images/security_service.png"
    }
  ];

  return (
    <div className="bg-[var(--bg-soft)] min-h-screen pt-48 pb-24">
      <div className="container-full space-y-24">
        {/* INTELLIGENCE HEADER */}
        <div className="max-w-4xl space-y-8 reveal">
          <div className="emerald-badge">Corporate Intelligence</div>
          <h1 className="text-[var(--primary)] uppercase tracking-tight">Intelligence <span className="text-[var(--accent)] italic-accent text-3xl lg:text-7xl">Archive.</span></h1>
          <p className="text-xl text-[var(--text-dim)] font-medium leading-relaxed max-w-2xl">
             Standardized bulletins, industry analytics, and strategic announcements curated by the Edomias Executive Council.
          </p>
        </div>

        {/* FEATURE FEED */}
        <div className="grid lg:grid-cols-1 gap-12">
           {posts.map((post, idx) => (
             <motion.article 
               initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
               key={post.id} 
               className="card-luxury p-4 group bg-white flex flex-col lg:flex-row gap-12 hover:border-[var(--primary)] transition-all"
             >
                <div className="w-full lg:w-[450px] h-[350px] relative shrink-0 rounded-[2rem] overflow-hidden shadow-xl">
                   <Image 
                     src={post.img} 
                     alt={post.title} 
                     fill 
                     className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[2s]" 
                   />
                   <div className="absolute top-6 left-6">
                      <span className="px-5 py-2 bg-[var(--primary)] text-white text-[9px] font-black uppercase tracking-[0.3em] rounded-full shadow-2xl">
                        {post.tag}
                      </span>
                   </div>
                </div>
                
                <div className="flex-1 flex flex-col justify-center space-y-8 p-6 lg:p-10">
                   <div className="space-y-6">
                      <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-[var(--text-dim)]">
                        <Calendar size={14} className="text-[var(--accent)]" /> {post.date}
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--border-soft)]" />
                        <span className="flex items-center gap-2"><Activity size={12}/> 4 Min Analysis</span>
                      </div>
                      <h3 className="text-3xl lg:text-4xl tracking-tight leading-none group-hover:text-[var(--primary)] transition-colors">
                         {post.title}
                      </h3>
                      <p className="text-lg text-[var(--text-dim)] leading-relaxed font-medium line-clamp-3">
                         {post.brief}
                      </p>
                   </div>
                   <button className="flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.4em] text-[var(--primary)] hover:text-[var(--accent)] transition-all group/btn w-fit">
                      Analyze Brief <ArrowRight size={18} className="group-hover/btn:translate-x-3 transition-transform" />
                   </button>
                </div>
             </motion.article>
           ))}
        </div>

        {/* ARCHIVE UTILITY */}
        <div className="pt-24 border-t border-[var(--border-soft)] grid lg:grid-cols-2 gap-12 items-center reveal">
           <div className="flex flex-col md:flex-row items-center gap-8">
              <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[var(--text-dim)] shrink-0">Search The Repository</span>
              <div className="relative w-full">
                 <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-[var(--primary)]" size={20} />
                 <input className="w-full pl-16 pr-8 py-6 bg-white border-2 border-[var(--border-soft)] rounded-[2rem] text-sm font-bold focus:border-[var(--primary)] outline-none shadow-lux transition-all" placeholder="Enter keywords..." />
              </div>
           </div>
           <div className="flex justify-center lg:justify-end items-center gap-6">
               <div className="text-right">
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--text-dim)]">Archive Size</div>
                  <div className="text-xl font-display font-black text-[var(--primary)]">1,240+ Briefs</div>
               </div>
               <div className="w-16 h-16 bg-white border border-[var(--border-soft)] rounded-2xl flex items-center justify-center text-[var(--primary)] shadow-lux">
                  <Newspaper size={28} />
               </div>
           </div>
        </div>
      </div>
    </div>
  );
}
