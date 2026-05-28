"use client";
import { useState, useMemo } from "react";
import { Search, MapPin, Briefcase, Filter, X, ArrowRight, CheckCircle, Upload, User, Mail, Phone, Calendar, ArrowLeft, Zap, DollarSign } from "lucide-react";
import { DB, Job } from "@/data/database";
import { useApp } from "@/context/AppContext";
import { motion, AnimatePresence } from "framer-motion";

export default function JobsPage() {
  const { t } = useApp();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedJob, setSelectedJob] = useState<Job>(DB.jobs[0]);
  const [applicationStep, setApplicationStep] = useState(0); 
  const [isSyncing, setIsSyncing] = useState(false);

  const filteredJobs = useMemo(() => {
    return DB.jobs.filter(j => {
      const matchSearch = j.title.toLowerCase().includes(search.toLowerCase()) || 
                          j.company.toLowerCase().includes(search.toLowerCase());
      const matchCategory = activeCategory === "all" || j.category_id === activeCategory;
      return matchSearch && matchCategory;
    });
  }, [search, activeCategory]);

  return (
    <div className="bg-[var(--bg-soft)] min-h-screen pt-24">
      {/* PORTAL SEARCH HUB - PRETTY UI */}
      <section className="bg-[var(--bg-main)] border-b border-[var(--border-soft)] pt-12 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary)] opacity-[0.02] rounded-full blur-3xl" />
        
        <div className="container-full space-y-12">
          <div className="max-w-4xl space-y-6 reveal">
            <div className="emerald-badge">{t.jobs.sync}</div>
            <h1 className="text-[var(--primary)] font-display">
              {t.jobs.title} <span className="text-[var(--accent)] italic-accent text-3xl md:text-5xl">Engine.</span>
            </h1>
            <p className="text-xl text-[var(--text-dim)] font-medium max-w-2xl">{t.jobs.subtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-12 gap-4 reveal" style={{ animationDelay: '0.2s' }}>
            <div className="md:col-span-8 relative group">
               <div className="absolute inset-0 bg-[var(--primary)]/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
               <div className="relative glass-ui p-2 rounded-3xl border-2 border-[var(--border-soft)] focus-within:border-[var(--primary)] transition-all flex items-center shadow-lux">
                  <Search className="ml-5 text-[var(--primary)]" size={20} />
                  <input 
                    className="w-full py-5 px-5 bg-transparent font-bold text-sm focus:outline-none placeholder:text-[var(--text-dim)]/50"
                    placeholder="Search titles, industries, or keywords..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
               </div>
            </div>
            <div className="md:col-span-4 flex items-center gap-4 p-5 glass-ui rounded-3xl border border-[var(--border-soft)] shadow-lux">
               <div className="w-10 h-10 rounded-xl bg-[var(--bg-ghost)] flex items-center justify-center text-[var(--accent)]"><MapPin size={20}/></div>
               <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-[var(--text-dim)]">Prime Location</div>
                  <div className="text-xs font-bold text-[var(--text-main)]">Addis Ababa, ET</div>
               </div>
            </div>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar reveal" style={{ animationDelay: '0.4s' }}>
            <button 
              onClick={() => setActiveCategory("all")}
              className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all whitespace-nowrap ${activeCategory === "all" ? "bg-[var(--primary)] text-white border-[var(--primary)] shadow-xl" : "bg-white text-[var(--text-dim)] border-[var(--border-soft)] hover:border-[var(--primary)]"}`}
            >
              All Roles
            </button>
            {DB.categories.map(cat => (
              <button 
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all whitespace-nowrap ${activeCategory === cat.id ? "bg-[var(--primary)] text-white border-[var(--primary)] shadow-xl" : "bg-white text-[var(--text-dim)] border-[var(--border-soft)] hover:border-[var(--primary)]"}`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PORTAL GRID - PERFECT RESPONSIVITY */}
      <section className="container-full py-16">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* JOBS LIST - LEFT */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between mb-2 px-2">
               <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--text-dim)]">{filteredJobs.length} Live Vacancies</span>
               <div className="flex items-center gap-2 px-3 py-1 bg-emerald-50 text-[var(--primary)] rounded-full border border-emerald-100">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
                  <span className="text-[9px] font-black uppercase tracking-wider">Sync Active</span>
               </div>
            </div>

            <div className="space-y-4">
              <AnimatePresence mode="popLayout">
                {filteredJobs.map((job) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    key={job.id}
                    onClick={() => setSelectedJob(job)}
                    className={`card-luxury p-8 cursor-pointer relative overflow-hidden transition-all duration-500 transform ${selectedJob.id === job.id ? 'border-[var(--accent)] ring-4 ring-[var(--accent)]/5 -translate-y-1' : 'hover:border-[var(--primary)]'}`}
                  >
                    <div className="flex justify-between items-start">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-xl lg:text-2xl mb-1 tracking-tight">{job.title}</h3>
                          <div className="flex items-center gap-2">
                             <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                             <p className="text-[10px] font-black text-[var(--primary)] uppercase tracking-widest">{job.company}</p>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                           <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--bg-ghost)] rounded-lg text-[10px] font-bold text-[var(--text-dim)] border border-[var(--border-soft)] group-hover:border-[var(--primary)] transition-all">
                              <MapPin size={12} className="text-[var(--primary)]" /> {job.location}
                           </span>
                           <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--bg-ghost)] rounded-lg text-[10px] font-bold text-[var(--text-dim)] border border-[var(--border-soft)]">
                              <Briefcase size={12} className="text-[var(--primary)]" /> {job.type}
                           </span>
                           {job.salary_range && (
                             <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 rounded-lg text-[10px] font-bold text-[var(--primary)] border border-emerald-100">
                               <DollarSign size={12} /> {job.salary_range}
                             </span>
                           )}
                        </div>
                      </div>
                      <div className={`p-4 rounded-2xl transition-all ${selectedJob.id === job.id ? 'bg-[var(--primary)] text-white shadow-xl rotate-0' : 'bg-[var(--bg-ghost)] text-[var(--primary)] rotate-[-15deg] group-hover:rotate-0'}`}>
                        <ArrowRight size={22} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* JOB INSPECION - RIGHT (Sticky) */}
          <div className="lg:col-span-5 h-fit sticky top-32">
             <motion.div 
               key={selectedJob.id}
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               className="card-luxury p-10 bg-white border-b-8 border-b-[var(--primary)]"
              >
                <div className="space-y-8">
                   <div className="space-y-4">
                      <div className="emerald-badge">Intelligence Brief</div>
                      <h2 className="text-3xl leading-tight">{selectedJob.title}</h2>
                      <div className="p-4 bg-[var(--bg-ghost)] rounded-2xl flex items-center justify-between border border-[var(--border-soft)]">
                         <div className="space-y-1">
                            <div className="text-[9px] font-black uppercase tracking-widest text-[var(--text-dim)]">Department</div>
                            <div className="text-xs font-bold">{selectedJob.department}</div>
                         </div>
                         <div className="w-px h-8 bg-[var(--border-soft)]" />
                         <div className="space-y-1 text-right">
                            <div className="text-[9px] font-black uppercase tracking-widest text-[var(--text-dim)]">Listing ID</div>
                            <div className="text-xs font-bold text-[var(--primary)]">{selectedJob.id}</div>
                         </div>
                      </div>
                   </div>

                   <div className="space-y-6">
                      <div className="space-y-3">
                         <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--text-dim)] border-l-2 border-[var(--accent)] pl-4">Objective</h4>
                         <p className="text-sm text-[var(--text-dim)] leading-relaxed font-medium">{selectedJob.description}</p>
                      </div>
                      <div className="space-y-4">
                         <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--text-dim)] border-l-2 border-[var(--accent)] pl-4">Requirements</h4>
                         <div className="grid gap-3">
                            {selectedJob.requirements.map((req, i) => (
                              <div key={i} className="flex gap-4 p-4 bg-[var(--bg-soft)] border border-[var(--border-soft)] rounded-2xl group hover:border-[var(--primary)] transition-all">
                                 <Zap size={16} className="text-[var(--accent)] shrink-0 group-hover:scale-125 transition-all" />
                                 <span className="text-xs font-bold text-[var(--text-main)]">{req}</span>
                              </div>
                            ))}
                         </div>
                      </div>
                   </div>

                   <button 
                     onClick={() => setApplicationStep(1)}
                     className="btn-elite btn-primary-elite w-full py-5 text-sm"
                   >
                     {t.jobs.apply} <ArrowRight size={18} />
                   </button>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* MULTI-STEP APPLICATION SHROUD */}
      <AnimatePresence>
        {applicationStep > 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-[var(--primary)]/95 backdrop-blur-3xl"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="card-luxury max-w-2xl w-full bg-white relative overflow-hidden flex flex-col p-0 border-none shadow-2xl"
            >
               {/* MODAL HEADER */}
               <div className="bg-[var(--bg-ghost)] p-10 border-b border-[var(--border-soft)] flex justify-between items-start">
                  <div className="space-y-2">
                     <div className="text-[10px] font-black uppercase tracking-widest text-[var(--accent)]">Gateway Security Active</div>
                     <h2 className="text-3xl text-[var(--primary)] tracking-tight">Recruitment Application</h2>
                     <p className="text-xs font-bold text-[var(--text-dim)] uppercase tracking-wider">Applying for: {selectedJob.title}</p>
                  </div>
                  <button 
                    onClick={() => setApplicationStep(0)}
                    className="w-12 h-12 rounded-2xl bg-white border border-[var(--border-soft)] flex items-center justify-center text-[var(--primary)] hover:rotate-90 transition-all shadow-lux"
                  >
                    <X size={24} />
                  </button>
               </div>

               {/* PROGRESS INDICATOR */}
               {applicationStep < 4 && (
                 <div className="px-10 py-6 bg-white flex items-center gap-3">
                    {[1,2,3].map(step => (
                      <div key={step} className={`h-1.5 flex-1 rounded-full transition-all duration-700 ${applicationStep >= step ? 'bg-[var(--primary)]' : 'bg-[var(--bg-ghost)]'}`} />
                    ))}
                    <span className="text-[9px] font-black text-[var(--text-dim)] uppercase ml-4">Step {applicationStep}/3</span>
                 </div>
               )}

               {/* STEP CONTENT WRAPPER */}
               <div className="p-10 min-h-[400px]">
                  <AnimatePresence mode="wait">
                    {applicationStep === 1 && (
                      <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }} className="space-y-8">
                         <div className="space-y-6">
                            <div className="grid grid-cols-2 gap-8">
                               <div className="space-y-2">
                                  <label className="text-[10px] font-black uppercase tracking-widest text-[var(--text-dim)]">First Legal Name</label>
                                  <input className="w-full px-5 py-4 bg-white border-2 border-[var(--border-soft)] rounded-2xl text-sm font-bold focus:border-[var(--primary)] transition-all" placeholder="E.g. Abebe" />
                               </div>
                               <div className="space-y-2">
                                  <label className="text-[10px] font-black uppercase tracking-widest text-[var(--text-dim)]">Last Legal Name</label>
                                  <input className="w-full px-5 py-4 bg-white border-2 border-[var(--border-soft)] rounded-2xl text-sm font-bold focus:border-[var(--primary)] transition-all" placeholder="E.g. Kebede" />
                               </div>
                            </div>
                            <div className="space-y-2">
                               <label className="text-[10px] font-black uppercase tracking-widest text-[var(--text-dim)]">Email Identity</label>
                               <input type="email" className="w-full px-5 py-4 bg-white border-2 border-[var(--border-soft)] rounded-2xl text-sm font-bold focus:border-[var(--primary)] transition-all" placeholder="name@company.com" />
                            </div>
                         </div>
                         <button onClick={() => setApplicationStep(2)} className="btn-elite btn-primary-elite w-full py-5">Validate Identity</button>
                      </motion.div>
                    )}

                    {applicationStep === 2 && (
                      <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }} className="space-y-8">
                        <div className="space-y-6">
                           <div className="space-y-2">
                              <label className="text-[10px] font-black uppercase tracking-widest text-[var(--text-dim)]">Primary Industry Expertise</label>
                              <select className="w-full px-5 py-4 bg-white border-2 border-[var(--border-soft)] rounded-2xl text-sm font-bold focus:border-[var(--primary)] transition-all appearance-none cursor-pointer">
                                 <option>Professional Services</option>
                                 <option>Technical & Engineering</option>
                                 <option>International NGO</option>
                                 <option>Security & Protection</option>
                              </select>
                           </div>
                           <div className="space-y-2">
                              <label className="text-[10px] font-black uppercase tracking-widest text-[var(--text-dim)]">Years in Domain</label>
                              <input type="number" className="w-full px-5 py-4 bg-white border-2 border-[var(--border-soft)] rounded-2xl text-sm font-bold focus:border-[var(--primary)] transition-all" placeholder="0" />
                           </div>
                        </div>
                        <div className="flex gap-4">
                           <button onClick={() => setApplicationStep(1)} className="btn-elite btn-accent-elite flex-1">Back</button>
                           <button onClick={() => setApplicationStep(3)} className="btn-elite btn-primary-elite flex-[2]">Establish Competency</button>
                        </div>
                      </motion.div>
                    )}

                    {applicationStep === 3 && (
                      <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }} className="space-y-8 text-center">
                        <div className="p-12 border-4 border-dashed border-[var(--bg-ghost)] rounded-[3rem] space-y-6 group hover:border-[var(--primary)] cursor-pointer transition-all">
                           <div className="w-24 h-24 rounded-3xl bg-[var(--bg-ghost)] flex items-center justify-center mx-auto text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-all shadow-lux">
                              <Upload size={40} />
                           </div>
                           <div className="space-y-2">
                              <h4 className="text-xl font-bold">Resume Artifact</h4>
                              <p className="text-xs text-[var(--text-dim)] uppercase font-black tracking-widest">PDF, DOCX (Max 15MB)</p>
                           </div>
                        </div>
                        <div className="flex gap-4">
                           <button onClick={() => setApplicationStep(2)} className="btn-elite btn-accent-elite flex-1">Back</button>
                           <button 
                             onClick={() => { setIsSyncing(true); setTimeout(() => { setIsSyncing(false); setApplicationStep(4); }, 2000); }} 
                             className="btn-elite btn-primary-elite flex-[2]"
                            >
                             {isSyncing ? "Syncing Logic..." : "Commit Application"}
                           </button>
                        </div>
                      </motion.div>
                    )}

                    {applicationStep === 4 && (
                      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="space-y-10 text-center py-6">
                        <div className="w-32 h-32 rounded-full bg-emerald-50 text-[var(--primary)] flex items-center justify-center mx-auto border-8 border-white shadow-2xl relative">
                           <div className="absolute inset-0 rounded-full border border-[var(--accent)] animate-ping opacity-20" />
                           <CheckCircle size={56} />
                        </div>
                        <div className="space-y-4">
                           <h2 className="text-4xl text-[var(--primary)]">Transmission Unified.</h2>
                           <p className="text-sm font-bold text-[var(--text-dim)] uppercase tracking-widest max-w-sm mx-auto leading-relaxed">
                              Your candidate profile has been ingested into the Edomias Enterprise Ledger.
                           </p>
                        </div>
                        <div className="p-8 bg-[var(--bg-ghost)] rounded-3xl space-y-3 text-left">
                           <div className="flex justify-between items-center text-[10px] font-black uppercase text-[var(--text-dim)]">
                             <span>Recruitment ID</span>
                             <span className="text-[var(--primary)] underline underline-offset-4 decoration-[var(--accent)]">EDM-092-2026-X</span>
                           </div>
                           <div className="h-px bg-[var(--border-soft)] w-full" />
                           <p className="text-[10px] font-semibold text-[var(--text-main)] italic">Check your private dashboard for status phases and interview schedules.</p>
                        </div>
                        <button onClick={() => setApplicationStep(0)} className="btn-elite btn-primary-elite w-full py-5 text-sm">Return to Repository</button>
                      </motion.div>
                    )}
                  </AnimatePresence>
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
