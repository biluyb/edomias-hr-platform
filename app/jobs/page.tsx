"use client";
import { useState, useMemo } from "react";
import { 
  Search, MapPin, Briefcase, X, ArrowRight, CheckCircle, Upload, Zap, 
  DollarSign, History, Heart, Share2, Star, Clock, ShieldCheck, 
  User, LayoutDashboard, Settings, Phone, Globe, Award, Calendar,
  FileText, Mail, Info, FileStack, Users, ChevronRight, Filter, AlertCircle
} from "lucide-react";
import { DB, Job, Application } from "@/data/database";
import { useApp } from "@/context/AppContext";
import { motion, AnimatePresence } from "framer-motion";

export default function JobsPage() {
  const { t } = useApp();
  const [view, setView] = useState<"feed" | "profile">("feed");
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeLevel, setActiveLevel] = useState("all");
  const [activeLocation, setActiveLocation] = useState("all");
  const [selectedJob, setSelectedJob] = useState<Job>(DB.jobs[0] as Job);
  const [showApply, setShowApply] = useState(false);
  const [savedJobs, setSavedJobs] = useState<string[]>([]);
  const [appStep, setAppStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [appliedJobs, setAppliedJobs] = useState<string[]>(DB.applications.map(a => a.job_id));

  // Advanced Filter Logic
  const filteredJobs = useMemo(() => {
    return (DB.jobs as Job[]).filter(j => {
      const matchSearch = j.title.toLowerCase().includes(search.toLowerCase()) || 
                          j.company.toLowerCase().includes(search.toLowerCase());
      const matchCategory = activeCategory === "all" || j.category_id === activeCategory;
      const matchLocation = activeLocation === "all" || j.location.includes(activeLocation);
      return matchSearch && matchCategory && matchLocation;
    });
  }, [search, activeCategory, activeLocation]);

  const toggleSave = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSavedJobs(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const submitApplication = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setAppliedJobs(prev => [...prev, selectedJob.id]);
      setIsSubmitting(false);
      setAppStep(3);
    }, 2000);
  };

  return (
    <div className="bg-[var(--bg-soft)] min-h-screen pt-28 pb-40">
      <div className="container-full">
        
        {/* PHASE 2: UPPER COMMAND BAR - PROFILE & DASHBOARD TOGGLE */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6 bg-[var(--glass)] backdrop-blur-xl p-3 rounded-[2rem] border border-[var(--border)] shadow-sm sticky top-24 z-[50]">
           <div className="flex gap-1 p-1 bg-[var(--bg-ghost)] rounded-2xl w-full md:w-auto border border-[var(--border)]">
              <button 
                onClick={() => setView("feed")}
                className={`flex-1 md:flex-none flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${view === "feed" ? "bg-[var(--primary)] text-[var(--bg-main)] shadow-lg" : "text-[var(--text-dim)] hover:bg-[var(--bg-main)]"}`}
              >
                 <LayoutDashboard size={16} /> {view === "feed" ? "Job Terminal" : "Feed"}
              </button>
              <button 
                onClick={() => setView("profile")}
                className={`flex-1 md:flex-none flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${view === "profile" ? "bg-[var(--primary)] text-[var(--bg-main)] shadow-lg" : "text-[var(--text-dim)] hover:bg-[var(--bg-main)]"}`}
              >
                 <User size={16} /> Candidate Dashboard
              </button>
           </div>
           
           <div className="flex items-center gap-5 px-6 w-full md:w-auto justify-end">
              <div className="text-right hidden sm:block">
                 <div className="text-[9px] font-black text-[var(--primary)] uppercase tracking-widest">Authenticated Candidate</div>
                 <div className="text-[11px] font-bold text-[var(--text-dim)]">#BILI-SY-2026</div>
              </div>
              <div className="w-11 h-11 rounded-2xl bg-[var(--primary)] text-[var(--bg-main)] flex items-center justify-center font-black shadow-lg">B</div>
           </div>
        </div>

        <AnimatePresence mode="wait">
          {view === "feed" ? (
            <motion.div key="feed" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
              
              {/* PHASE 1: SEARCH & FILTERS SECTION */}
              <div className="grid lg:grid-cols-12 gap-6 mb-12 items-end">
                 <div className="lg:col-span-12 space-y-4 mb-4">
                    <div className="emerald-badge">Institutional Recruitment Hub</div>
                    <h1 className="text-[var(--primary)] font-display text-4xl md:text-7xl tracking-tighter">
                      Professional <span className="text-[var(--secondary)] italic-accent">Opportunities.</span>
                    </h1>
                 </div>
                 
                 <div className="lg:col-span-8 space-y-4">
                    <div className="relative group">
                       <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-[var(--primary)] opacity-40 group-focus-within:opacity-100 transition-all" size={24} />
                       <input 
                         className="w-full h-20 pl-16 pr-8 bg-[var(--bg-main)] border border-[var(--border)] rounded-[1.5rem] text-sm font-bold focus:border-[var(--primary)] transition-all shadow-xl outline-none placeholder:font-medium text-[var(--text-main)]"
                         placeholder="Search by job title, department, or keyword..."
                         value={search}
                         onChange={(e) => setSearch(e.target.value)}
                       />
                    </div>
                 </div>

                 <div className="lg:col-span-4 grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                       <label className="text-[9px] font-black uppercase text-[var(--text-muted)] ml-4">Region</label>
                       <select 
                         onChange={(e) => setActiveLocation(e.target.value)}
                         className="w-full h-14 px-6 bg-[var(--bg-main)] border border-[var(--border)] rounded-xl text-[10px] font-bold outline-none appearance-none cursor-pointer text-[var(--text-main)]"
                       >
                          <option value="all">All Locations</option>
                          <option value="Addis Ababa">Addis Ababa</option>
                          <option value="Dukem">Dukem / Oromia</option>
                          <option value="Dire Dawa">Dire Dawa / East</option>
                       </select>
                    </div>
                    <div className="space-y-2">
                       <label className="text-[9px] font-black uppercase text-[var(--text-muted)] ml-4">Level</label>
                       <select 
                         onChange={(e) => setActiveLevel(e.target.value)}
                         className="w-full h-14 px-6 bg-[var(--bg-main)] border border-[var(--border)] rounded-xl text-[10px] font-bold outline-none appearance-none cursor-pointer text-[var(--text-main)]"
                       >
                          <option value="all">All Experience</option>
                          <option value="entry">Entry Level</option>
                          <option value="mid">Mid-Senior</option>
                          <option value="executive">Executive</option>
                       </select>
                    </div>
                 </div>
              </div>

              {/* CATEGORY CHIPS */}
              <div className="flex gap-2 overflow-x-auto pb-6 mb-12 no-scrollbar">
                 <button 
                   onClick={() => setActiveCategory("all")}
                   className={`shrink-0 px-8 py-3.5 rounded-xl text-[9px] font-black uppercase tracking-widest border-2 transition-all ${activeCategory === "all" ? "bg-[var(--primary)] text-[var(--bg-main)] border-[var(--primary)] shadow-md" : "bg-[var(--bg-main)] text-[var(--text-dim)] border-transparent hover:border-[var(--border)]"}`}
                 >
                   All Departments
                 </button>
                 {DB.categories.map(cat => (
                   <button 
                     key={cat.id}
                     onClick={() => setActiveCategory(cat.id)}
                     className={`shrink-0 px-8 py-3.5 rounded-xl text-[9px] font-black uppercase tracking-widest border-2 transition-all ${activeCategory === cat.id ? "bg-[var(--primary)] text-[var(--bg-main)] border-[var(--primary)] shadow-md" : "bg-[var(--bg-main)] text-[var(--text-dim)] border-transparent hover:border-[var(--border)]"}`}
                   >
                     {cat.name}
                   </button>
                 ))}
              </div>

              {/* PHASE 1: JOB LISTING GRID */}
              <div className="grid lg:grid-cols-12 gap-8">
                 {/* FEED AREA */}
                 <div className="lg:col-span-7 space-y-6">
                    {filteredJobs.length === 0 ? (
                      <div className="py-20 text-center space-y-6 opacity-40">
                         <Search className="mx-auto" size={64} />
                         <p className="text-sm font-black uppercase tracking-widest">No matching vacancies found</p>
                         <button onClick={() => { setSearch(""); setActiveCategory("all"); setActiveLocation("all"); }} className="text-[var(--primary)] underline font-bold text-xs">Reset All Filters</button>
                      </div>
                    ) : (
                      filteredJobs.map((job) => (
                        <motion.div 
                          layout key={job.id} onClick={() => setSelectedJob(job)}
                          className={`group relative p-8 md:p-10 rounded-[2.5rem] border-2 transition-all duration-500 cursor-pointer ${selectedJob.id === job.id ? 'bg-[var(--bg-main)] border-[var(--primary)] shadow-2xl scale-[1.02]' : 'bg-[var(--bg-main)]/40 border-transparent hover:border-[var(--border)]'}`}
                        >
                           <div className="flex flex-col sm:flex-row justify-between items-start gap-8">
                              <div className="space-y-6 flex-1">
                                 <div className="space-y-2">
                                    <div className="flex items-center gap-3">
                                       <h3 className="text-2xl md:text-3xl font-display font-black text-[var(--primary)] leading-tight">{job.title}</h3>
                                       {appliedJobs.includes(job.id) && <CheckCircle size={20} className="text-emerald-500 shrink-0" />}
                                       {job.is_urgent && <span className="px-3 py-1 bg-red-500/10 text-red-500 text-[8px] font-black uppercase rounded-lg border border-red-500/30">Urgent</span>}
                                    </div>
                                    <div className="text-[10px] font-black uppercase text-[var(--secondary)] tracking-widest flex items-center gap-2">
                                       <Globe size={12}/> {job.company}
                                    </div>
                                 </div>
                                 <div className="flex flex-wrap gap-3">
                                    <span className="px-4 py-2 bg-[var(--bg-ghost)] rounded-xl text-[10px] font-bold text-[var(--text-dim)] border border-[var(--border)] flex items-center gap-2 pr-6"><MapPin size={14} className="text-[var(--primary)]"/> {job.location}</span>
                                    <span className="px-4 py-2 bg-[var(--bg-ghost)] rounded-xl text-[10px] font-bold text-[var(--text-dim)] border border-[var(--border)] flex items-center gap-2 pr-6"><Briefcase size={14} className="text-[var(--primary)]"/> {job.type}</span>
                                    <span className="px-4 py-2 bg-[var(--primary)]/10 rounded-xl text-[10px] font-bold text-[var(--primary)] border border-[var(--primary)]/30 flex items-center gap-2 pr-6"><DollarSign size={14}/> {job.salary_range}</span>
                                 </div>
                                 <div className="flex items-center gap-6 pt-2">
                                    <div className="flex items-center gap-2 text-[9px] font-black uppercase text-[var(--text-muted)]"><Calendar size={14}/> Posted: {job.posted_at}</div>
                                    <div className="flex items-center gap-2 text-[9px] font-black uppercase text-red-400 font-bold"><Clock size={14}/> Deadline: {job.deadline}</div>
                                 </div>
                              </div>
                              
                              <div className="flex sm:flex-col gap-3 w-full sm:w-auto">
                                 <button 
                                   onClick={(e) => toggleSave(job.id, e)}
                                   className={`flex-1 sm:w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${savedJobs.includes(job.id) ? 'bg-red-500/10 text-red-500 shadow-inner' : 'bg-[var(--bg-ghost)] text-[var(--text-muted)] hover:bg-[var(--bg-main)]'}`}
                                 >
                                    <Heart size={24} fill={savedJobs.includes(job.id) ? "currentColor" : "none"} />
                                 </button>
                                 <button className="flex-1 sm:w-14 h-14 bg-[var(--primary)] text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-[var(--secondary)] transition-all">
                                    <ChevronRight size={24} />
                                 </button>
                              </div>
                           </div>
                        </motion.div>
                      ))
                    )}
                 </div>

                 {/* JOB DETAIL PANEL */}
                 <div className="lg:col-span-5 lg:sticky lg:top-48 h-fit hidden lg:block">
                    <AnimatePresence mode="wait">
                       <motion.div 
                         key={selectedJob.id} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                         className="bg-[var(--bg-main)] rounded-[3rem] p-12 border border-[var(--border)] shadow-2xl space-y-12 relative overflow-hidden"
                       >
                          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary)] opacity-[0.02] rounded-full blur-3xl" />
                          
                          <div className="space-y-8 relative z-10">
                             <div className="flex justify-between items-start">
                                <div className="px-5 py-2 bg-[var(--bg-ghost)] rounded-full text-[9px] font-black uppercase text-[var(--primary)] tracking-widest border border-[var(--border)] flex items-center gap-2">
                                   <ShieldCheck size={14}/> Strategic Insight
                                </div>
                                <Share2 size={20} className="text-[var(--text-muted)] cursor-pointer hover:text-[var(--primary)] transition-colors" />
                             </div>
                             
                             <div className="space-y-4">
                                <h2 className="text-5xl font-display text-[var(--primary)] leading-tight tracking-tighter">{selectedJob.title}</h2>
                                <div className="text-xs font-bold text-[var(--secondary)] uppercase tracking-[0.2em]">{selectedJob.department}</div>
                             </div>

                             <div className="p-6 bg-[var(--bg-soft)] rounded-[2rem] border border-[var(--border)] text-sm font-medium text-[var(--text-dim)] leading-relaxed">
                                {selectedJob.description}
                             </div>

                             <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-[var(--bg-ghost)] rounded-2xl border border-[var(--border)]">
                                   <div className="text-[8px] font-black uppercase text-[var(--text-muted)] mb-1">Contract Status</div>
                                   <div className="text-xs font-bold">{selectedJob.type}</div>
                                </div>
                                <div className="p-4 bg-[var(--bg-ghost)] rounded-2xl border border-[var(--border)]">
                                   <div className="text-[8px] font-black uppercase text-[var(--text-muted)] mb-1">Reporting Region</div>
                                   <div className="text-xs font-bold">{selectedJob.location.split(',')[0]}</div>
                                </div>
                             </div>
                          </div>

                          <div className="space-y-10 relative z-10">
                             <div className="space-y-6">
                                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--secondary)] border-l-4 border-[var(--secondary)] pl-4">Institutional Requirements</h4>
                                <div className="grid gap-3">
                                   {selectedJob.requirements.map((req, i) => (
                                     <div key={i} className="flex gap-4 items-start group">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-1.5 shrink-0 group-hover:scale-150 transition-all" />
                                        <span className="text-xs font-bold leading-relaxed">{req}</span>
                                     </div>
                                   ))}
                                </div>
                             </div>

                             <div className="space-y-6">
                                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--primary)] border-l-4 border-[var(--primary)] pl-4">Prime Responsibilities</h4>
                                <div className="grid gap-3">
                                   {selectedJob.responsibilities?.map((item, i) => (
                                     <div key={i} className="flex gap-4 items-start group">
                                        <Zap size={14} className="text-[var(--secondary)] mt-0.5 shrink-0" />
                                        <span className="text-xs font-medium text-[var(--text-dim)] leading-relaxed">{item}</span>
                                     </div>
                                   ))}
                                </div>
                             </div>

                             <div className="space-y-6">
                                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-600 border-l-4 border-emerald-500 pl-4">Compensation & Synergy</h4>
                                <div className="flex flex-wrap gap-2">
                                   {selectedJob.benefits?.map((ben, i) => (
                                     <span key={i} className="px-4 py-2 bg-[var(--primary)]/10 text-[var(--primary)] text-[10px] font-bold rounded-xl border border-[var(--primary)]/20">{ben}</span>
                                   ))}
                                </div>
                             </div>
                          </div>

                          <div className="pt-4 relative z-10">
                             <button 
                               onClick={() => setShowApply(true)}
                               disabled={appliedJobs.includes(selectedJob.id)}
                               className={`w-full py-7 rounded-[2rem] font-black uppercase tracking-[0.2em] shadow-3xl active:scale-95 transition-all flex items-center justify-center gap-4 text-xs ${appliedJobs.includes(selectedJob.id) ? 'bg-[var(--bg-ghost)] text-[var(--text-muted)] cursor-not-allowed shadow-none' : 'bg-[var(--primary)] text-white hover:bg-[var(--secondary)]'}`}
                             >
                               {appliedJobs.includes(selectedJob.id) ? "Transmission Unified" : "Initiate Professional Application"} 
                               {!appliedJobs.includes(selectedJob.id) && <ArrowRight size={20}/>}
                             </button>
                          </div>
                       </motion.div>
                    </AnimatePresence>
                 </div>
              </div>
            </motion.div>
          ) : (
            /* PHASE 2: CANDIDATE DASHBOARD */
            <motion.div key="profile" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="space-y-8">
               <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {[
                    { l: "Active Transmissions", v: appliedJobs.length, i: <Zap size={24}/>, c: "text-[var(--primary)]" },
                    { l: "Shortlisted Roles", v: "02", i: <Star size={24}/>, c: "text-[var(--secondary)]" },
                    { l: "Interview Syncs", v: "01", i: <Users size={24}/>, c: "text-emerald-500" },
                    { l: "Profile Integrity", v: "94%", i: <ShieldCheck size={24}/>, c: "text-blue-500" }
                  ].map((stat, i) => (
                    <div key={i} className="card-glass p-8 space-y-4">
                       <div className={`w-12 h-12 rounded-2xl bg-[var(--bg-ghost)] border border-[var(--border)] flex items-center justify-center ${stat.c}`}>{stat.i}</div>
                       <div>
                          <div className="text-3xl font-display font-black text-[var(--primary)]">{stat.v}</div>
                          <div className="text-[10px] font-black uppercase text-[var(--text-muted)] tracking-widest">{stat.l}</div>
                       </div>
                    </div>
                  ))}
               </div>

               <div className="grid lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-8 space-y-8">
                     <div className="card-glass p-12 space-y-12">
                        <div className="flex justify-between items-center">
                           <h3 className="text-2xl font-bold flex items-center gap-4">
                              <History className="text-[var(--primary)]" /> Application Ledger
                           </h3>
                           <div className="text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)] border-b-2 border-[var(--secondary)] pb-1">Real-time Tracking Active</div>
                        </div>

                        <div className="space-y-12">
                           {DB.applications.map((app) => {
                             const job = DB.jobs.find(j => j.id === app.job_id);
                             return (
                               <div key={app.id} className="space-y-10 p-8 bg-[var(--bg-ghost)] rounded-[2.5rem] border border-[var(--border)] relative overflow-hidden">
                                  <div className="flex flex-col sm:flex-row justify-between items-start gap-6">
                                     <div className="space-y-2">
                                        <div className="text-xl font-bold text-[var(--primary)]">{job?.title}</div>
                                        <div className="text-[10px] font-black uppercase text-[var(--secondary)] tracking-widest">{job?.company} — Ref: {app.id}</div>
                                     </div>
                                     <div className="px-5 py-2 bg-[var(--bg-main)] rounded-full text-[10px] font-black uppercase text-[var(--primary)] border border-[var(--border)] shadow-sm">
                                        Status: {app.status}
                                     </div>
                                  </div>

                                  <div className="relative pt-12">
                                     <div className="absolute top-2.5 left-0 right-0 h-1 bg-[var(--border)] rounded-full" />
                                     <div className="grid grid-cols-4 gap-4">
                                        {[
                                          { s: "Application Received", complete: true },
                                          { s: "CV Review", complete: app.timeline.length >= 2 },
                                          { s: "Interview", complete: app.timeline.length >= 3 },
                                          { s: "Final Decision", complete: app.timeline.length >= 4 }
                                        ].map((step, idx) => (
                                          <div key={idx} className="relative flex flex-col items-center text-center space-y-4">
                                             <div className={`w-6 h-6 rounded-full border-4 border-[var(--bg-main)] shadow-md relative z-10 transition-all ${step.complete ? 'bg-[var(--primary)] scale-125' : 'bg-[var(--border)]'}`}>
                                                {step.complete && <CheckCircle className="absolute -top-6 -right-6 text-emerald-500" size={14} />}
                                             </div>
                                             <div className={`text-[8px] font-black uppercase tracking-widest ${step.complete ? 'text-[var(--primary)]' : 'text-[var(--text-muted)]'}`}>{step.s}</div>
                                          </div>
                                        ))}
                                     </div>
                                  </div>

                                  <div className="flex justify-end gap-3 pt-4 border-t border-[var(--border)]/50">
                                     <button className="px-6 py-2 bg-[var(--bg-main)] rounded-xl text-[9px] font-black uppercase border border-[var(--border)] hover:bg-[var(--bg-soft)] transition-all">Withdraw</button>
                                     <button className="px-6 py-2 bg-[var(--primary)] text-white rounded-xl text-[9px] font-black uppercase shadow-lg">View Profile Artifacts</button>
                                  </div>
                               </div>
                             );
                           })}
                        </div>
                     </div>
                  </div>

                  <div className="lg:col-span-4 space-y-8">
                     <div className="card-glass p-12 bg-[var(--primary)] text-[var(--bg-main)] flex flex-col items-center text-center space-y-8 relative overflow-hidden">
                        <div className="w-32 h-32 rounded-[3rem] bg-[var(--bg-main)] text-[var(--primary)] flex items-center justify-center text-4xl font-black shadow-2xl relative z-10">B</div>
                        <div className="space-y-2 relative z-10">
                           <h3 className="text-2xl font-bold">Bililign Yidnekachew</h3>
                           <p className="text-sm opacity-70 font-medium">Strategic Talent ID: EDM-99201-B</p>
                        </div>
                        <button className="w-full py-4 bg-[var(--secondary)] text-[var(--primary)] rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl relative z-10 group hover:scale-[1.02] transition-all">
                           Synchronize Global Profile
                        </button>
                        <ShieldCheck className="absolute -left-10 -bottom-10 w-48 h-48 opacity-10 text-[var(--bg-main)]" />
                     </div>

                     <div className="card-glass p-8 space-y-6">
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)] flex items-center gap-2 pr-2">
                           <FileStack size={14} /> Artifact Hub
                        </h4>
                        <div className="space-y-3">
                           <div className="p-4 bg-[var(--bg-ghost)] rounded-2xl border border-[var(--border)] flex justify-between items-center group cursor-pointer hover:border-[var(--primary)] transition-all">
                              <div className="flex items-center gap-3">
                                 <FileText size={18} className="text-[var(--primary)]" />
                                 <div className="text-[10px] font-bold">Candidate_Resume.pdf</div>
                              </div>
                              <ArrowRight size={14} className="opacity-40 group-hover:opacity-100 transition-all" />
                           </div>
                           <div className="p-4 bg-[var(--bg-ghost)] rounded-2xl border border-[var(--border)] flex justify-between items-center group cursor-pointer hover:border-[var(--primary)] transition-all">
                              <div className="flex items-center gap-3">
                                 <Award size={18} className="text-[var(--secondary)]" />
                                 <div className="text-[10px] font-bold">Certification_Vault.zip</div>
                              </div>
                              <ArrowRight size={14} className="opacity-40 group-hover:opacity-100 transition-all" />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* PHASE 1 & 2: REFINED MULTI-STEP MODAL */}
      <AnimatePresence>
        {showApply && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] flex items-center justify-center p-4 bg-[var(--primary)]/90 backdrop-blur-3xl overflow-y-auto"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 30 }}
              className="w-full max-w-5xl bg-[var(--bg-main)] rounded-[3.5rem] shadow-4xl overflow-hidden relative my-8"
            >
               <button onClick={() => { setShowApply(false); setAppStep(1); }} className="absolute top-8 right-8 w-14 h-14 rounded-2xl bg-[var(--bg-ghost)] flex items-center justify-center text-[var(--primary)] hover:rotate-90 transition-all z-[100]">
                 <X size={28} />
               </button>

               <div className="grid lg:grid-cols-12 min-h-[700px]">
                  <div className="lg:col-span-4 bg-[var(--bg-ghost)] p-12 border-r border-[var(--border)] flex flex-col justify-between space-y-20">
                     <div className="space-y-10">
                        <div className="space-y-3">
                           <div className="text-[10px] font-black uppercase text-[var(--secondary)] tracking-[0.4em]">Apply Step {appStep}/2</div>
                           <h2 className="text-4xl font-display font-black text-[var(--primary)] leading-tight">Professional <br/>Identity Sync.</h2>
                        </div>
                        <div className="p-8 bg-[var(--bg-main)] shadow-xl rounded-[2.5rem] border border-[var(--border)] space-y-4">
                           <div className="text-[9px] font-black uppercase text-[var(--text-muted)] tracking-widest">Active Application For:</div>
                           <div className="text-base font-bold text-[var(--primary)] leading-tight underline decoration-[var(--secondary)]">{selectedJob.title}</div>
                        </div>
                     </div>
                     
                     <div className="space-y-8">
                        {[
                          { s: 1, t: "Profile Artifacts" },
                          { s: 2, t: "Verification Hub" }
                        ].map((step) => (
                           <div key={step.s} className={`flex items-center gap-6 transition-all ${appStep === step.s ? 'translate-x-4 opacity-100' : 'opacity-40'}`}>
                              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm ${appStep >= step.s ? 'bg-[var(--primary)] text-[var(--bg-main)] shadow-xl' : 'bg-[var(--bg-main)] border border-[var(--border)]'}`}>
                                 {step.s}
                              </div>
                              <span className="text-[10px] font-black uppercase tracking-widest">{step.t}</span>
                           </div>
                        ))}
                     </div>
                  </div>

                  <div className="lg:col-span-8 p-12 md:p-20 overflow-y-auto">
                     <AnimatePresence mode="wait">
                        {appStep === 1 ? (
                          <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-12">
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                                <div className="space-y-3 col-span-full">
                                   <label className="text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)] ml-3">Full Identity (As Per Passport)</label>
                                   <input className="w-full h-16 px-8 bg-[var(--bg-ghost)] border-2 border-transparent focus:border-[var(--primary)] rounded-2xl font-bold outline-none text-base transition-all" placeholder="E.g. Bililign Yidnekachew" />
                                </div>
                                <div className="space-y-3">
                                   <label className="text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)] ml-3">Communication Email</label>
                                   <input className="w-full h-16 px-8 bg-[var(--bg-ghost)] border-2 border-transparent focus:border-[var(--primary)] rounded-2xl font-bold outline-none text-base transition-all" placeholder="communications@node.net" />
                                </div>
                                <div className="space-y-3">
                                   <label className="text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)] ml-3">Mobile Endpoint</label>
                                   <input className="w-full h-16 px-8 bg-[var(--bg-ghost)] border-2 border-transparent focus:border-[var(--primary)] rounded-2xl font-bold outline-none text-base transition-all" placeholder="+251 ..." />
                                </div>
                                <div className="space-y-3">
                                   <label className="text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)] ml-3">Educational Tenure</label>
                                   <select className="w-full h-16 px-8 bg-[var(--bg-ghost)] border-2 border-transparent focus:border-[var(--primary)] rounded-2xl font-bold outline-none text-base transition-all appearance-none cursor-pointer">
                                      <option>Masters Degree +</option>
                                      <option>Bachelors Degree</option>
                                      <option>Technical Diploma (Level IV)</option>
                                   </select>
                                </div>
                                <div className="space-y-3">
                                   <label className="text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)] ml-3">Current / Last Employer</label>
                                   <input className="w-full h-16 px-8 bg-[var(--bg-ghost)] border-2 border-transparent focus:border-[var(--primary)] rounded-2xl font-bold outline-none text-base transition-all" placeholder="Organization / Corp Name" />
                                </div>
                                
                                <div className="space-y-3 col-span-full">
                                   <label className="text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)] ml-3">Experience Summary (Mission Critical Roles)</label>
                                   <textarea rows={4} className="w-full p-8 bg-[var(--bg-ghost)] border-2 border-transparent focus:border-[var(--primary)] rounded-2xl font-bold outline-none text-base transition-all resize-none" placeholder="Briefly define your industry impact..." />
                                </div>

                                <div className="space-y-3">
                                   <label className="text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)] ml-3">LinkedIn / Global Repositiory</label>
                                   <input className="w-full h-14 px-8 bg-[var(--bg-ghost)] border-2 border-transparent focus:border-[var(--primary)] rounded-xl font-bold outline-none text-sm transition-all" placeholder="https://linkedin.com/..." />
                                </div>
                                <div className="space-y-3">
                                   <label className="text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)] ml-3">Portfolio / Personal Site</label>
                                   <input className="w-full h-14 px-8 bg-[var(--bg-ghost)] border-2 border-transparent focus:border-[var(--primary)] rounded-xl font-bold outline-none text-sm transition-all" placeholder="https://domain.com" />
                                </div>
                             </div>

                             <div className="grid md:grid-cols-2 gap-8">
                                <div className="p-10 border-4 border-dashed border-[var(--border)] rounded-[2.5rem] text-center space-y-4 group hover:border-[var(--primary)] transition-all cursor-pointer bg-[var(--bg-ghost)]">
                                   <Upload size={32} className="mx-auto text-[var(--primary)]" />
                                   <div className="text-[10px] font-black uppercase tracking-widest">Inject Certified CV</div>
                                </div>
                                <div className="p-10 border-4 border-dashed border-[var(--border)] rounded-[2.5rem] text-center space-y-4 group hover:border-[var(--primary)] transition-all cursor-pointer bg-[var(--bg-ghost)]">
                                   <Upload size={32} className="mx-auto text-[var(--secondary)]" />
                                   <div className="text-[10px] font-black uppercase tracking-widest">Optional Cover Letter</div>
                                </div>
                             </div>

                             <button onClick={() => setAppStep(2)} className="w-full py-8 bg-[var(--primary)] text-[var(--bg-main)] rounded-[2rem] font-black uppercase tracking-[0.3em] shadow-3xl hover:scale-[1.02] active:scale-95 transition-all text-xs">
                                Confirm & Move to Identity Verification
                             </button>
                          </motion.div>
                        ) : appStep === 2 ? (
                          <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-12 py-20">
                             <div className="p-12 bg-[var(--bg-ghost)] rounded-[3rem] border border-[var(--border)] space-y-8">
                                <div className="flex gap-6 items-center">
                                   <div className="w-16 h-16 rounded-2xl bg-[var(--bg-main)] flex items-center justify-center text-[var(--primary)] shadow-lg"><ShieldCheck size={32}/></div>
                                   <h3 className="text-2xl font-bold">Verification Declaration</h3>
                                </div>
                                <p className="text-sm font-medium text-[var(--text-dim)] leading-relaxed uppercase tracking-tighter">
                                   I hereby certify that all artifacts and data provided are authentic and represent my actual professional tenure. Edomias International Plc is authorized to perform institutional vetting.
                                </p>
                             </div>
                             <div className="flex gap-4">
                                <button onClick={() => setAppStep(1)} className="flex-1 py-7 bg-[var(--bg-main)] border border-[var(--border)] rounded-2xl font-black uppercase tracking-widest text-[9px]">Back</button>
                                <button onClick={submitApplication} className="flex-[2] py-7 bg-[var(--primary)] text-[var(--bg-main)] rounded-2xl font-black uppercase tracking-widest shadow-2xl transition-all">Establish Secure Sync</button>
                             </div>
                          </motion.div>
                        ) : (
                          <motion.div key="s3" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="space-y-12 text-center py-20">
                             <div className="w-40 h-40 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full flex items-center justify-center mx-auto border-[10px] border-[var(--bg-main)] shadow-3xl relative">
                                <CheckCircle size={64} />
                                <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }} transition={{ duration: 2, repeat: Infinity }} className="absolute inset-0 bg-[var(--primary)]/30 rounded-full" />
                             </div>
                             <div className="space-y-6">
                                <h2 className="text-5xl font-display text-[var(--primary)] tracking-tighter leading-tight">Application <br/>Submitted Successfully.</h2>
                                <p className="text-base font-bold text-[var(--text-dim)] uppercase tracking-widest">Institutional Transmission Unified.</p>
                             </div>
                             <div className="p-10 bg-[var(--bg-ghost)] rounded-[3rem] space-y-4 border border-[var(--border)] relative overflow-hidden">
                                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--secondary)]">Vault Reference Number:</div>
                                <div className="text-2xl font-black text-[var(--primary)] tracking-widest">EDO-2026-00451</div>
                                <div className="absolute top-0 right-0 p-4 opacity-5"><ShieldCheck size={80}/></div>
                             </div>
                             <button onClick={() => { setShowApply(false); setAppStep(1); }} className="w-full py-8 bg-[var(--primary)] text-[var(--bg-main)] rounded-[2rem] font-black uppercase tracking-widest shadow-3xl hover:scale-105 active:scale-95 transition-all">
                                Return to Intelligence Dashboard
                             </button>
                             <div className="flex items-center justify-center gap-3 text-[10px] font-bold text-emerald-500 animate-pulse">
                                <Mail size={14}/> Confirmation Sync Sent to b****@node.net
                             </div>
                          </motion.div>
                        )}
                     </AnimatePresence>

                     {isSubmitting && (
                       <div className="absolute inset-0 bg-[var(--bg-main)]/95 backdrop-blur-2xl z-50 flex flex-col items-center justify-center space-y-8 rounded-[3.5rem]">
                          <div className="w-20 h-20 border-8 border-[var(--bg-ghost)] border-t-[var(--primary)] rounded-full animate-spin shadow-xl" />
                          <div className="text-sm font-black uppercase tracking-[0.5em] text-[var(--primary)] animate-pulse">Establishing E-TLS Sync...</div>
                       </div>
                     )}
                  </div>
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
