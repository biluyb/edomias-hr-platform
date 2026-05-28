"use client";
import { useState, useMemo } from "react";
import { Search, MapPin, Briefcase, Filter, X, ArrowRight, CheckCircle, Upload, Zap, DollarSign, History } from "lucide-react";
import { DB, Job } from "@/data/database";
import { useApp } from "@/context/AppContext";
import { motion, AnimatePresence } from "framer-motion";

export default function JobsPage() {
  const { t } = useApp();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedJob, setSelectedJob] = useState<Job>(DB.jobs[0]);
  const [showApply, setShowApply] = useState(false);

  const filteredJobs = useMemo(() => {
    return DB.jobs.filter(j => {
      const matchSearch = j.title.toLowerCase().includes(search.toLowerCase()) || 
                          j.company.toLowerCase().includes(search.toLowerCase());
      const matchCategory = activeCategory === "all" || j.category_id === activeCategory;
      return matchSearch && matchCategory;
    });
  }, [search, activeCategory]);

  return (
    <div className="bg-[var(--bg-soft)] min-h-screen pt-32 pb-20">
      <div className="container-full">
        {/* PORTAL HEADER */}
        <div className="max-w-4xl mb-16 space-y-8 reveal">
          <div className="emerald-badge">Recruitment Intelligence</div>
          <h1 className="text-[var(--primary)] font-display leading-tight">
            {t.jobs.title} <span className="text-[var(--secondary)] italic-accent text-3xl md:text-5xl">Hub.</span>
          </h1>
          <p className="text-xl text-[var(--text-dim)] font-medium max-w-2xl">{t.jobs.subtitle}</p>
        </div>

        {/* SEARCH & FILTER TERMINAL */}
        <div className="grid lg:grid-cols-12 gap-6 mb-12 items-center reveal" style={{ animationDelay: '0.1s' }}>
           <div className="lg:col-span-8 relative group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-[var(--primary)] opacity-50" size={20} />
              <input 
                className="w-full h-20 pl-16 pr-8 bg-white border border-[var(--border)] rounded-3xl text-sm font-bold focus:border-[var(--primary)] transition-all shadow-xl outline-none"
                placeholder="Search by role, skill, or industry..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
           </div>
           <div className="lg:col-span-4 flex items-center justify-between h-20 px-8 bg-[var(--primary)] text-white rounded-3xl shadow-xl overflow-hidden relative group cursor-pointer">
              <div className="flex flex-col">
                 <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Listing Status</span>
                 <span className="text-sm font-bold">5+ Live Opportunities</span>
              </div>
              <Zap className="text-[var(--secondary)] animate-pulse" />
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-1 transition-opacity pointer-events-none" />
           </div>
        </div>

        {/* FILTER CHIPS */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar reveal" style={{ animationDelay: '0.2s' }}>
           <button 
             onClick={() => setActiveCategory("all")}
             className={`px-10 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all border ${activeCategory === "all" ? "bg-[var(--primary)] text-white border-[var(--primary)] shadow-xl" : "bg-white text-[var(--text-dim)] border-[var(--border)] hover:border-[var(--primary)]"}`}
           >
             All Sectors
           </button>
           {DB.categories.map(cat => (
             <button 
               key={cat.id}
               onClick={() => setActiveCategory(cat.id)}
               className={`px-10 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all border ${activeCategory === cat.id ? "bg-[var(--primary)] text-white border-[var(--primary)] shadow-xl" : "bg-white text-[var(--text-dim)] border-[var(--border)] hover:border-[var(--primary)]"}`}
             >
               {cat.name}
             </button>
           ))}
        </div>

        {/* JOBS GRID */}
        <div className="grid lg:grid-cols-12 gap-10">
           
           {/* LIST SIDE */}
           <div className="lg:col-span-7 space-y-6">
              {filteredJobs.map((job) => (
                <motion.div 
                  layout
                  key={job.id}
                  onClick={() => setSelectedJob(job)}
                  className={`card-glass p-8 cursor-pointer relative overflow-hidden transition-all duration-500 border-2 ${selectedJob.id === job.id ? 'border-[var(--primary)] bg-white shadow-2xl scale-[1.02]' : 'border-transparent opacity-80'}`}
                >
                   <div className="flex justify-between items-start">
                      <div className="space-y-4">
                         <div className="space-y-1">
                            <h3 className="text-2xl font-bold tracking-tight text-[var(--primary)]">{job.title}</h3>
                            <div className="flex items-center gap-2 text-[10px] font-black uppercase text-[var(--secondary)] tracking-widest">{job.company}</div>
                         </div>
                         <div className="flex flex-wrap gap-3">
                            <span className="flex items-center gap-2 text-xs font-bold text-[var(--text-dim)]"><MapPin size={14}/> {job.location}</span>
                            <span className="flex items-center gap-2 text-xs font-bold text-[var(--text-dim)]"><Briefcase size={14}/> {job.type}</span>
                            <span className="flex items-center gap-2 text-xs font-bold text-[var(--primary)]"><Zap size={14}/> {job.salary_range}</span>
                         </div>
                      </div>
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${selectedJob.id === job.id ? 'bg-[var(--primary)] text-white' : 'bg-[var(--bg-ghost)] text-[var(--primary)]'}`}>
                         <ArrowRight size={20} />
                      </div>
                   </div>
                </motion.div>
              ))}
           </div>

           {/* DETAILS SIDE */}
           <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={selectedJob.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="card-glass p-12 bg-white relative overflow-hidden border-b-8 border-b-[var(--secondary)]"
                >
                   <div className="space-y-10">
                      <div className="space-y-4">
                         <div className="emerald-badge">Job Insight</div>
                         <h2 className="text-3xl font-display text-[var(--primary)]">{selectedJob.title}</h2>
                         <div className="flex items-center gap-3 p-4 bg-[var(--bg-ghost)] rounded-2xl text-[11px] font-black uppercase text-[var(--text-dim)]">
                            <History size={16} className="text-[var(--secondary)]" /> Posted Recently
                         </div>
                      </div>

                      <div className="space-y-8">
                         <div className="space-y-4">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--text-muted)] border-l-2 border-[var(--secondary)] pl-4">Description</h4>
                            <p className="text-sm font-medium leading-relaxed text-[var(--text-dim)]">{selectedJob.description}</p>
                         </div>
                         <div className="space-y-4">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--text-muted)] border-l-2 border-[var(--secondary)] pl-4">Key Criteria</h4>
                            <ul className="grid gap-3">
                               {selectedJob.requirements.map((req, i) => (
                                 <li key={i} className="flex items-center gap-4 p-4 bg-[var(--bg-soft)] border border-[var(--border)] rounded-2xl text-xs font-bold group hover:border-[var(--primary)] transition-all">
                                    <CheckCircle size={16} className="text-[var(--primary)] shrink-0 group-hover:scale-125 transition-all" />
                                    {req}
                                 </li>
                               ))}
                            </ul>
                         </div>
                      </div>

                      <button 
                        onClick={() => setShowApply(true)}
                        className="w-full py-6 bg-[var(--primary)] text-white rounded-2xl font-black uppercase text-xs tracking-widest shadow-2xl hover:scale-[1.02] active:scale-95 transition-all"
                      >
                        Initiate Application
                      </button>
                   </div>
                </motion.div>
              </AnimatePresence>
           </div>

        </div>
      </div>
    </div>
  );
}
