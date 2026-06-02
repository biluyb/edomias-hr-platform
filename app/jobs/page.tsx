"use client";
import { useState, useMemo } from "react";
import { 
  Search, MapPin, Briefcase, X, ArrowRight, CheckCircle, Upload, Zap, 
  DollarSign, History, Heart, Share2, Star, Clock, ShieldCheck, 
  User, LayoutDashboard, Settings, Phone, Globe, Award, Calendar,
  FileText, Mail, Info, FileStack, Users, ChevronRight, Filter, AlertCircle, Edit3, Trash2, Plus
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
  const [withdrawConfirmId, setWithdrawConfirmId] = useState<string | null>(null);
  const [isMobileDetailOpen, setIsMobileDetailOpen] = useState(false);

  // Profile Management State
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Bililign Yidnekachew",
    id: "EDM-99201-B",
    email: "bililign@node.net",
    phone: "+251 900 000 000",
    skills: ["React", "TypeScript", "Node.js", "Strategic HR"],
    experience: "Senior Full-Stack Engineer at Google Deepmind (2024 - Present)"
  });

  const [editForm, setEditForm] = useState(profileData);

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

  const withdrawApplication = (jobId: string) => {
    setAppliedJobs(prev => prev.filter(id => id !== jobId));
    setWithdrawConfirmId(null);
  };

  const submitApplication = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setAppliedJobs(prev => [...prev, selectedJob.id]);
      setIsSubmitting(false);
      setAppStep(3);
    }, 2000);
  };

  const saveProfile = () => {
    setProfileData(editForm);
    setIsEditingProfile(false);
  };

  return (
    <div className="bg-[var(--bg-soft)] min-h-screen pt-28 pb-40">
      <div className="container-full">
        
        {/* PHASE 2: UPPER COMMAND BAR */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6 bg-[var(--glass)] backdrop-blur-xl p-3 rounded-[2rem] border border-[var(--border)] shadow-sm sticky top-24 z-[50]">
           <div className="flex gap-1 p-1 bg-[var(--bg-ghost)] rounded-2xl w-full md:w-auto border border-[var(--border)]">
              <button 
                onClick={() => setView("feed")}
                className={`flex-1 md:flex-none flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${view === "feed" ? "bg-[var(--primary)] text-[var(--bg-main)] shadow-lg" : "text-[var(--text-dim)] hover:bg-[var(--bg-main)]"}`}
              >
                 <LayoutDashboard size={16} /> Job Terminal
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
                 <div className="text-[11px] font-bold text-[var(--text-dim)]">#{profileData.id}</div>
              </div>
              <div className="w-11 h-11 rounded-2xl bg-[var(--primary)] text-[var(--bg-main)] flex items-center justify-center font-black shadow-lg">B</div>
           </div>
        </div>

        <AnimatePresence mode="wait">
          {view === "feed" ? (
            <motion.div key="feed" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
              
              {/* SEARCH & FILTERS SECTION */}
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

              {/* JOB LISTING GRID */}
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
                          layout key={job.id} 
                          onClick={() => { 
                            setSelectedJob(job);
                            if (window.innerWidth < 1024) setIsMobileDetailOpen(true);
                          }}
                          className={`group relative p-8 md:p-10 rounded-[2.5rem] border-2 transition-all duration-500 cursor-pointer ${selectedJob.id === job.id ? 'bg-[var(--bg-main)] border-[var(--primary)] shadow-2xl scale-[1.02]' : 'bg-[var(--bg-main)]/40 border-transparent hover:border-[var(--border)]'}`}
                        >
                           <div className="flex flex-col sm:flex-row justify-between items-start gap-8">
                              <div className="space-y-6 flex-1">
                                 <div className="space-y-2">
                                    <div className="flex items-center gap-3">
                                       <h3 className="text-2xl md:text-3xl font-display font-black text-[var(--primary)] leading-tight">
                                          {(t as any).locale === 'am' && job.title_am ? job.title_am : job.title}
                                       </h3>
                                       {appliedJobs.includes(job.id) && <CheckCircle size={20} className="text-[var(--primary)] shrink-0" />}
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
                                   className={`flex-1 sm:w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${savedJobs.includes(job.id) ? 'bg-red-500/10 text-red-500 shadow-inner' : 'btn-secondary-glass'}`}
                                 >
                                    <Heart size={24} fill={savedJobs.includes(job.id) ? "currentColor" : "none"} />
                                 </button>
                                 <button 
                                   onClick={(e) => {
                                      e.stopPropagation();
                                      setSelectedJob(job);
                                      if (window.innerWidth < 1024) setIsMobileDetailOpen(true);
                                   }}
                                   className="flex-1 sm:w-14 h-14 btn-primary-glow rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-all"
                                 >
                                    <ChevronRight size={24} className="text-[#0B0F14]" />
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
                                <h2 className="text-5xl font-display text-[var(--primary)] leading-tight tracking-tighter">
                                   {(t as any).locale === 'am' && selectedJob.title_am ? selectedJob.title_am : selectedJob.title}
                                </h2>
                                <div className="text-xs font-bold text-[var(--secondary)] uppercase tracking-[0.2em]">{selectedJob.department}</div>
                             </div>

                             <div className="p-6 bg-[var(--bg-soft)] rounded-[2rem] border border-[var(--border)] text-sm font-medium text-[var(--text-dim)] leading-relaxed">
                                {(t as any).locale === 'am' && selectedJob.description_am ? selectedJob.description_am : selectedJob.description}
                             </div>

                             <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-[var(--bg-ghost)] rounded-2xl border border-[var(--border)]">
                                   <div className="text-[8px] font-black uppercase text-[var(--text-muted)] mb-1">{t.jobs.contractStatus}</div>
                                   <div className="text-xs font-bold">{selectedJob.type}</div>
                                </div>
                                <div className="p-4 bg-[var(--bg-ghost)] rounded-2xl border border-[var(--border)]">
                                   <div className="text-[8px] font-black uppercase text-[var(--text-muted)] mb-1">{t.jobs.reportingRegion}</div>
                                   <div className="text-xs font-bold">{selectedJob.location.split(',')[0]}</div>
                                </div>
                             </div>
                          </div>

                          <div className="space-y-10 relative z-10">
                             <div className="space-y-6">
                                 <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--secondary)] border-l-4 border-[var(--secondary)] pl-4">{t.jobs.requirements}</h4>
                                 <div className="grid gap-3">
                                    {( (t as any).locale === 'am' && selectedJob.requirements_am ? selectedJob.requirements_am : selectedJob.requirements ).map((req, i) => (
                                      <div key={i} className="flex gap-4 items-start group">
                                         <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-1.5 shrink-0 group-hover:scale-150 transition-all" />
                                         <span className="text-xs font-bold leading-relaxed">{req}</span>
                                      </div>
                                    ))}
                                 </div>
                             </div>

                             <div className="space-y-6">
                                 <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--primary)] border-l-4 border-[var(--primary)] pl-4">{t.jobs.responsibilities}</h4>
                                 <div className="grid gap-3">
                                    {( (t as any).locale === 'am' && selectedJob.responsibilities_am ? selectedJob.responsibilities_am : selectedJob.responsibilities ).map((item, i) => (
                                      <div key={i} className="flex gap-4 items-start group">
                                         <Zap size={14} className="text-[var(--secondary)] mt-0.5 shrink-0" />
                                         <span className="text-xs font-medium text-[var(--text-dim)] leading-relaxed">{item}</span>
                                      </div>
                                    ))}
                                 </div>
                             </div>

                             <div className="space-y-6">
                                 <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500 border-l-4 border-emerald-500 pl-4">{t.jobs.compensation}</h4>
                                 <div className="flex flex-wrap gap-2">
                                    {( (t as any).locale === 'am' && selectedJob.benefits_am ? selectedJob.benefits_am : selectedJob.benefits ).map((ben, i) => (
                                      <span key={i} className="px-4 py-2 bg-[var(--primary)]/10 text-[var(--primary)] text-[10px] font-bold rounded-xl border border-[var(--primary)]/20">{ben}</span>
                                    ))}
                                 </div>
                             </div>
                          </div>

                          <div className="pt-4 relative z-10">
                             <button 
                               onClick={() => setShowApply(true)}
                               disabled={appliedJobs.includes(selectedJob.id)}
                               className={`w-full py-5 rounded-2xl font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-4 text-xs ${appliedJobs.includes(selectedJob.id) ? 'bg-[var(--bg-ghost)] text-[var(--text-muted)] cursor-not-allowed shadow-none' : 'btn-primary-glow text-[var(--bg-main)]'}`}
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
            /* CANDIDATE DASHBOARD */
            <motion.div key="profile" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="space-y-8">
               <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {[
                    { l: "Active Transmissions", v: appliedJobs.length, i: <Zap size={24}/>, c: "text-[var(--primary)]" },
                    { l: "Shortlisted Roles", v: "02", i: <Star size={24}/>, c: "text-[var(--secondary)]" },
                    { l: "Interview Syncs", v: "01", i: <Users size={24}/>, c: "text-[var(--primary)]" },
                    { l: "Profile Integrity", v: isEditingProfile ? "100%" : "94%", i: <ShieldCheck size={24}/>, c: "text-blue-500" }
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
                  <div className="lg:col-span-7 xl:col-span-8 space-y-8">
                     <div className="card-glass p-8 md:p-12 space-y-12">
                        <div className="flex justify-between items-center">
                           <h3 className="text-2xl font-bold flex items-center gap-4 text-[var(--primary)]">
                              <History className="text-[var(--primary)]" /> {t.jobs.applicationLedger}
                           </h3>
                           <div className="text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)] border-b-2 border-[var(--secondary)] pb-1 hidden sm:block">{t.jobs.trackingActive}</div>
                        </div>

                        <div className="space-y-8">
                           {DB.applications.filter(app => appliedJobs.includes(app.job_id)).map((app) => {
                             const job = DB.jobs.find(j => j.id === app.job_id);
                             return (
                               <div key={app.id} className="space-y-8 p-6 md:p-8 bg-[var(--bg-ghost)] rounded-[2rem] border border-[var(--border)] relative overflow-hidden">
                                  <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                                     <div className="space-y-1">
                                        <div className="text-lg font-bold text-[var(--text-main)] w-full truncate">{job?.title}</div>
                                        <div className="text-[9px] font-black uppercase text-[var(--secondary)] tracking-widest">{job?.company} — Ref: {app.id}</div>
                                     </div>
                                     <div className="px-4 py-1.5 bg-[var(--bg-main)] rounded-full text-[9px] font-black uppercase text-[var(--primary)] border border-[var(--border)] shadow-sm">
                                        Status: {app.status}
                                     </div>
                                  </div>

                                  <div className="relative pt-8 hidden sm:block">
                                     <div className="absolute top-2.5 left-0 right-0 h-1 bg-[var(--bg-main)] border border-[var(--border)] rounded-full" />
                                     <div className="grid grid-cols-4 gap-2">
                                        {[
                                          { s: "Application Received", complete: true },
                                          { s: "CV Review", complete: app.timeline.length >= 2 },
                                          { s: "Interview", complete: app.timeline.length >= 3 },
                                          { s: "Final Decision", complete: app.timeline.length >= 4 }
                                        ].map((step, idx) => (
                                          <div key={idx} className="relative flex flex-col items-center text-center space-y-3">
                                             <div className={`w-6 h-6 rounded-full border-4 border-[var(--bg-main)] shadow-md relative z-10 transition-all ${step.complete ? 'bg-[var(--primary)] scale-110' : 'bg-[var(--border)]'}`}>
                                                {step.complete && <CheckCircle className="absolute -top-6 -right-6 text-[var(--primary)]" size={14} />}
                                             </div>
                                             <div className={`text-[8px] font-black uppercase tracking-widest ${step.complete ? 'text-[var(--text-main)]' : 'text-[var(--text-muted)]'}`}>{step.s}</div>
                                          </div>
                                        ))}
                                     </div>
                                  </div>

                                  <div className="flex justify-end gap-3 pt-4 border-t border-[var(--border)]">
                                     <button onClick={() => setWithdrawConfirmId(job?.id || "")} className="px-5 py-2 bg-red-500/10 text-red-500 rounded-xl text-[9px] font-black uppercase border border-red-500/20 hover:bg-red-500/20 transition-all">Withdraw</button>
                                  </div>
                               </div>
                             );
                           })}
                        </div>
                     </div>
                  </div>

                  {/* PROFILE MANAGEMENT COLUMN */}
                  <div className="lg:col-span-5 xl:col-span-4 space-y-8">
                     {isEditingProfile ? (
                       <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="card-glass p-8 bg-[var(--bg-main)] space-y-6">
                          <h3 className="text-xl font-bold text-[var(--primary)] flex items-center gap-3">
                            <Settings size={20} /> Edit Profile Data
                          </h3>
                          <div className="space-y-4">
                             <div className="space-y-2">
                               <label className="text-[9px] font-black uppercase text-[var(--text-muted)]">Full Name</label>
                               <input value={editForm.name} onChange={(e) => setEditForm({...editForm, name: e.target.value})} className="w-full h-12 px-4 bg-[var(--bg-ghost)] border border-[var(--border)] rounded-xl font-bold text-sm text-[var(--text-main)] outline-none focus:border-[var(--primary)]" />
                             </div>
                             <div className="space-y-2">
                               <label className="text-[9px] font-black uppercase text-[var(--text-muted)]">Email</label>
                               <input value={editForm.email} onChange={(e) => setEditForm({...editForm, email: e.target.value})} className="w-full h-12 px-4 bg-[var(--bg-ghost)] border border-[var(--border)] rounded-xl font-bold text-sm text-[var(--text-main)] outline-none focus:border-[var(--primary)]" />
                             </div>
                             <div className="space-y-2">
                               <label className="text-[9px] font-black uppercase text-[var(--text-muted)]">Phone Number</label>
                               <input value={editForm.phone} onChange={(e) => setEditForm({...editForm, phone: e.target.value})} className="w-full h-12 px-4 bg-[var(--bg-ghost)] border border-[var(--border)] rounded-xl font-bold text-sm text-[var(--text-main)] outline-none focus:border-[var(--primary)]" />
                             </div>
                             <div className="space-y-2">
                               <label className="text-[9px] font-black uppercase text-[var(--text-muted)]">Primary Experience</label>
                               <input value={editForm.experience} onChange={(e) => setEditForm({...editForm, experience: e.target.value})} className="w-full h-12 px-4 bg-[var(--bg-ghost)] border border-[var(--border)] rounded-xl font-bold text-sm text-[var(--text-main)] outline-none focus:border-[var(--primary)]" />
                             </div>
                             <div className="space-y-2">
                               <label className="text-[9px] font-black uppercase text-[var(--text-muted)]">Skills (Comma separated)</label>
                               <input value={editForm.skills.join(', ')} onChange={(e) => setEditForm({...editForm, skills: e.target.value.split(',').map(s=>s.trim())})} className="w-full h-12 px-4 bg-[var(--bg-ghost)] border border-[var(--border)] rounded-xl font-bold text-sm text-[var(--text-main)] outline-none focus:border-[var(--primary)]" />
                             </div>
                          </div>
                          <div className="flex gap-3 pt-4 border-t border-[var(--border)]">
                             <button onClick={() => setIsEditingProfile(false)} className="flex-1 py-3 bg-[var(--bg-ghost)] border border-[var(--border)] rounded-xl font-black text-[9px] uppercase hover:bg-[var(--bg-soft)]">Cancel</button>
                             <button onClick={saveProfile} className="flex-1 py-3 bg-[var(--primary)] text-[var(--bg-main)] rounded-xl font-black text-[9px] uppercase shadow-lg hover:bg-[var(--secondary)] transition-all">Save Matrix</button>
                          </div>
                       </motion.div>
                     ) : (
                       <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="card-glass p-8 bg-[var(--primary)] text-[var(--bg-main)] flex flex-col items-center text-center space-y-8 relative overflow-hidden">
                          <button onClick={() => setIsEditingProfile(true)} className="absolute top-6 right-6 w-10 h-10 bg-[var(--bg-main)]/10 flex items-center justify-center rounded-xl hover:bg-[var(--bg-main)]/20 transition-all z-20">
                            <Edit3 size={18} />
                          </button>
                          
                          <div className="w-24 h-24 rounded-[2rem] bg-[var(--bg-main)] text-[var(--primary)] flex items-center justify-center text-3xl font-black shadow-2xl relative z-10">
                            {profileData.name.charAt(0)}
                          </div>
                          <div className="space-y-2 relative z-10">
                             <h3 className="text-xl font-bold">{profileData.name}</h3>
                             <p className="text-[10px] opacity-70 font-medium tracking-widest">{profileData.email} • {profileData.phone}</p>
                          </div>

                          <div className="w-full space-y-4 text-left border-t border-[var(--bg-main)]/10 pt-6 relative z-10">
                             <div className="space-y-1">
                                <div className="text-[8px] font-black uppercase text-[var(--secondary)] tracking-widest">Experience</div>
                                <div className="text-xs font-bold">{profileData.experience}</div>
                             </div>
                             <div className="space-y-2 pt-2">
                                <div className="text-[8px] font-black uppercase text-[var(--secondary)] tracking-widest">Core Proficiencies</div>
                                <div className="flex flex-wrap gap-2">
                                  {profileData.skills.map((skill, i) => (
                                    <span key={i} className="px-3 py-1 bg-[var(--bg-main)]/10 rounded-lg text-[9px] font-bold">{skill}</span>
                                  ))}
                                </div>
                             </div>
                          </div>

                          <button className="w-full py-4 bg-[var(--secondary)] text-[var(--primary)] rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl relative z-10 group hover:scale-[1.02] transition-all">
                             Synchronize Integrations
                          </button>
                          <ShieldCheck className="absolute -left-10 -bottom-10 w-48 h-48 opacity-10 text-[var(--bg-main)]" />
                       </motion.div>
                     )}

                     <div className="card-glass p-8 space-y-6">
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-[var(--text-muted)] flex items-center gap-2 pr-2">
                           <FileStack size={14} /> Artifact Hub
                        </h4>
                        <div className="space-y-3">
                           <div className="p-4 bg-[var(--bg-ghost)] rounded-2xl border border-[var(--border)] flex justify-between items-center group cursor-pointer hover:border-[var(--primary)] transition-all">
                              <div className="flex items-center gap-3">
                                 <FileText size={18} className="text-[var(--primary)]" />
                                 <div className="text-[10px] font-bold text-[var(--text-main)]">Candidate_Resume.pdf</div>
                              </div>
                              <ArrowRight size={14} className="opacity-40 group-hover:opacity-100 transition-all text-[var(--text-main)]" />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* REFINED MULTI-STEP MODAL - ADDRESSED UI CONSTRAINTS (viewport scrolling, size fixes) */}
      <AnimatePresence>
        {showApply && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] flex items-start justify-center pt-8 pb-16 px-4 bg-[var(--bg-main)]/80 backdrop-blur-md overflow-y-auto"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 30 }}
              className="w-full max-w-4xl bg-[var(--bg-main)] rounded-[2.5rem] shadow-4xl relative border border-[var(--border)] overflow-hidden"
            >
               <button onClick={() => { setShowApply(false); setAppStep(1); }} className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[var(--bg-ghost)] flex items-center justify-center text-[var(--text-main)] hover:bg-[var(--border)] transition-all z-[100]">
                 <X size={20} />
               </button>

               <div className="grid lg:grid-cols-12 min-h-[600px]">
                  {/* MODAL SIDEBAR */}
                  <div className="lg:col-span-4 bg-[var(--bg-ghost)] p-8 md:p-10 border-r border-[var(--border)] flex flex-col justify-between space-y-12">
                     <div className="space-y-8">
                        <div className="space-y-2">
                           <div className="text-[9px] font-black uppercase text-[var(--secondary)] tracking-[0.3em]">Apply Step {appStep}/2</div>
                           <h2 className="text-3xl font-display font-black text-[var(--primary)] leading-tight">Identity Sync.</h2>
                        </div>
                        <div className="p-6 bg-[var(--bg-main)] shadow-sm rounded-2xl border border-[var(--border)] space-y-2">
                           <div className="text-[8px] font-black uppercase text-[var(--text-muted)] tracking-widest">Target Role</div>
                           <div className="text-sm font-bold text-[var(--primary)] leading-tight">{selectedJob.title}</div>
                        </div>
                     </div>
                     
                     <div className="space-y-6 hidden lg:block">
                        {[
                          { s: 1, t: "Profile Artifacts" },
                          { s: 2, t: "Verification Hub" }
                        ].map((step) => (
                           <div key={step.s} className={`flex items-center gap-4 transition-all ${appStep === step.s ? 'translate-x-2 opacity-100' : 'opacity-40'}`}>
                              <div className={`w-10 h-10 rounded-2xl flex items-center justify-center font-black text-xs ${appStep >= step.s ? 'bg-[var(--primary)] text-[var(--bg-main)] shadow-md' : 'bg-[var(--bg-main)] border border-[var(--border)] text-[var(--text-main)]'}`}>
                                 {step.s}
                              </div>
                              <span className="text-[9px] font-black uppercase tracking-widest text-[var(--text-main)]">{step.t}</span>
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* MODAL CONTENT AREA */}
                  <div className="lg:col-span-8 p-8 md:p-12">
                     <AnimatePresence mode="wait">
                        {appStep === 1 ? (
                          <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                                <div className="space-y-2 col-span-full">
                                   <label className="text-[9px] font-black uppercase tracking-widest text-[var(--text-muted)] ml-2">Full Identity</label>
                                   <input className="w-full h-12 px-6 bg-[var(--bg-ghost)] border border-[var(--border)] focus:border-[var(--primary)] rounded-xl font-bold outline-none text-sm text-[var(--text-main)] transition-all" placeholder="E.g. Bililign Yidnekachew" />
                                </div>
                                <div className="space-y-2">
                                   <label className="text-[9px] font-black uppercase tracking-widest text-[var(--text-muted)] ml-2">Email Address</label>
                                   <input className="w-full h-12 px-6 bg-[var(--bg-ghost)] border border-[var(--border)] focus:border-[var(--primary)] rounded-xl font-bold outline-none text-sm text-[var(--text-main)] transition-all" placeholder="communications@node.net" />
                                </div>
                                <div className="space-y-2">
                                   <label className="text-[9px] font-black uppercase tracking-widest text-[var(--text-muted)] ml-2">Mobile Endpoint</label>
                                   <input className="w-full h-12 px-6 bg-[var(--bg-ghost)] border border-[var(--border)] focus:border-[var(--primary)] rounded-xl font-bold outline-none text-sm text-[var(--text-main)] transition-all" placeholder="+251 ..." />
                                </div>
                                <div className="space-y-2">
                                   <label className="text-[9px] font-black uppercase tracking-widest text-[var(--text-muted)] ml-2">Educational Tenure</label>
                                   <select className="w-full h-12 px-6 bg-[var(--bg-ghost)] border border-[var(--border)] focus:border-[var(--primary)] rounded-xl font-bold outline-none text-sm text-[var(--text-main)] transition-all appearance-none cursor-pointer">
                                      <option>Masters Degree +</option>
                                      <option>Bachelors Degree</option>
                                      <option>Technical Diploma (Level IV)</option>
                                   </select>
                                </div>
                                <div className="space-y-2">
                                   <label className="text-[9px] font-black uppercase tracking-widest text-[var(--text-muted)] ml-2">Last Employer</label>
                                   <input className="w-full h-12 px-6 bg-[var(--bg-ghost)] border border-[var(--border)] focus:border-[var(--primary)] rounded-xl font-bold outline-none text-sm text-[var(--text-main)] transition-all" placeholder="Organization Name" />
                                </div>
                                
                                <div className="space-y-2 col-span-full">
                                   <label className="text-[9px] font-black uppercase tracking-widest text-[var(--text-muted)] ml-2">Experience Summary</label>
                                   <textarea rows={3} className="w-full p-6 bg-[var(--bg-ghost)] border border-[var(--border)] focus:border-[var(--primary)] rounded-xl font-bold outline-none text-sm text-[var(--text-main)] transition-all resize-none" placeholder="Briefly define your industry impact..." />
                                </div>
                             </div>

                             <div className="grid grid-cols-2 gap-4 pt-2">
                                <div className="p-6 border-2 border-dashed border-[var(--border)] rounded-2xl text-center space-y-2 group hover:border-[var(--primary)] transition-all cursor-pointer bg-[var(--bg-ghost)]">
                                   <Upload size={24} className="mx-auto text-[var(--primary)]" />
                                   <div className="text-[9px] font-black uppercase tracking-widest text-[var(--text-main)]">Upload CV</div>
                                </div>
                                <div className="p-6 border-2 border-dashed border-[var(--border)] rounded-2xl text-center space-y-2 group hover:border-[var(--primary)] transition-all cursor-pointer bg-[var(--bg-ghost)]">
                                   <Upload size={24} className="mx-auto text-[var(--secondary)]" />
                                   <div className="text-[9px] font-black uppercase tracking-widest text-[var(--text-main)]">Cover Letter</div>
                                </div>
                             </div>

                             <button onClick={() => setAppStep(2)} className="w-full py-4 btn-primary-glow text-[var(--bg-main)] rounded-xl font-black uppercase tracking-[0.2em] shadow-md transition-all text-[10px]">
                                Confirm & Proceed
                             </button>
                          </motion.div>
                        ) : appStep === 2 ? (
                          <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-10 py-10">
                             <div className="p-8 bg-[var(--bg-ghost)] rounded-[2rem] border border-[var(--border)] space-y-6">
                                <div className="flex gap-4 items-center">
                                   <div className="w-14 h-14 rounded-2xl bg-[var(--bg-main)] flex items-center justify-center text-[var(--primary)] shadow-sm border border-[var(--border)]"><ShieldCheck size={28}/></div>
                                   <h3 className="text-xl font-bold text-[var(--text-main)]">Verification Declaration</h3>
                                </div>
                                <p className="text-sm font-medium text-[var(--text-dim)] leading-relaxed uppercase tracking-widest">
                                   I hereby certify that all artifacts and data provided are authentic and represent my actual professional tenure. Edomias is authorized to perform vetting.
                                </p>
                             </div>
                             <div className="flex gap-3">
                                <button onClick={() => setAppStep(1)} className="flex-1 py-4 btn-secondary-glass rounded-xl font-black uppercase tracking-widest text-[9px] text-[var(--text-main)]">Back</button>
                                <button onClick={submitApplication} className="flex-[2] py-4 btn-primary-glow rounded-xl font-black uppercase tracking-widest shadow-lg transition-all text-[10px]">Establish Secure Sync</button>
                             </div>
                          </motion.div>
                        ) : (
                          <motion.div key="s3" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="space-y-10 text-center py-10">
                             <div className="w-32 h-32 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full flex items-center justify-center mx-auto border-[8px] border-[var(--bg-main)] shadow-xl relative mt-4">
                                <CheckCircle size={48} />
                             </div>
                             <div className="space-y-4">
                                <h2 className="text-4xl font-display text-[var(--primary)] tracking-tighter leading-tight font-black">Application <br/>Submitted.</h2>
                                <p className="text-sm font-bold text-[var(--text-dim)] uppercase tracking-widest">Institutional Transmission Unified.</p>
                             </div>
                             <div className="p-6 bg-[var(--bg-ghost)] rounded-2xl space-y-2 border border-[var(--border)] relative mx-auto max-w-sm">
                                <div className="text-[9px] font-black uppercase tracking-[0.3em] text-[var(--secondary)]">Vault Reference:</div>
                                <div className="text-xl font-black text-[var(--primary)] tracking-widest">EDO-2026-00451</div>
                             </div>
                             <button onClick={() => { setShowApply(false); setAppStep(1); }} className="w-full max-w-sm mx-auto block py-4 bg-[var(--primary)] text-[var(--bg-main)] rounded-xl font-black uppercase tracking-widest shadow-md hover:scale-105 active:scale-95 transition-all text-[10px]">
                                Return to Intelligence Dashboard
                             </button>
                             <div className="flex items-center justify-center gap-2 text-[9px] font-bold text-[var(--primary)] pt-4">
                                <Mail size={14}/> Confirmation Sync Sent
                             </div>
                          </motion.div>
                        )}
                     </AnimatePresence>

                     {isSubmitting && (
                       <div className="absolute inset-0 bg-[var(--bg-main)]/95 backdrop-blur-md z-50 flex flex-col items-center justify-center space-y-6">
                          <div className="w-16 h-16 border-4 border-[var(--bg-ghost)] border-t-[var(--primary)] rounded-full animate-spin shadow-md" />
                          <div className="text-xs font-black uppercase tracking-[0.4em] text-[var(--primary)] animate-pulse">Establishing Sync...</div>
                       </div>
                     )}
                  </div>
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* WITHDRAWAL CONFIRMATION MODAL */}
      <AnimatePresence>
        {withdrawConfirmId && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[11000] flex items-center justify-center p-4 bg-[var(--bg-main)]/90 backdrop-blur-xl"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
              className="w-full max-w-md bg-[var(--bg-ghost)] rounded-[2.5rem] p-10 border border-[var(--border)] shadow-4xl text-center space-y-8"
            >
               <div className="w-20 h-20 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center mx-auto border border-red-500/20">
                  <AlertCircle size={40} />
               </div>
               <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-[var(--text-main)]">{t.jobs.withdrawConfirmTitle}</h3>
                  <p className="text-sm font-medium text-[var(--text-muted)] leading-relaxed">{t.jobs.withdrawConfirmMessage}</p>
               </div>
               <div className="flex flex-col gap-3">
                  <button 
                    onClick={() => withdrawApplication(withdrawConfirmId)}
                    className="w-full py-4 bg-red-500 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-lg shadow-red-500/20"
                  >
                    {t.jobs.withdrawConfirmYes}
                  </button>
                  <button 
                    onClick={() => setWithdrawConfirmId(null)}
                    className="w-full py-4 bg-[var(--bg-main)] text-[var(--text-dim)] border border-[var(--border)] rounded-2xl font-black uppercase tracking-widest text-[10px]"
                  >
                    {t.jobs.withdrawConfirmNo}
                  </button>
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MOBILE DETAIL MODAL */}
      <AnimatePresence>
        {isMobileDetailOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9000] bg-[var(--bg-main)] overflow-y-auto lg:hidden"
          >
             <div className="container-full py-20 space-y-12">
                <button onClick={() => setIsMobileDetailOpen(false)} className="fixed top-6 right-6 w-12 h-12 bg-[var(--bg-ghost)] rounded-full flex items-center justify-center border border-[var(--border)] z-50">
                  <X size={20} />
                </button>

                <div className="space-y-8 pt-8">
                   <div className="px-5 py-2 w-fit bg-[var(--bg-ghost)] rounded-full text-[9px] font-black uppercase text-[var(--primary)] tracking-widest border border-[var(--border)] flex items-center gap-2">
                      <ShieldCheck size={14}/> {t.jobs.strategicInsight}
                   </div>
                   <h2 className="text-5xl font-display text-[var(--primary)] leading-tight tracking-tighter">
                      {(t as any).locale === 'am' && selectedJob.title_am ? selectedJob.title_am : selectedJob.title}
                   </h2>
                </div>

                <div className="p-6 bg-[var(--bg-soft)] rounded-[2rem] border border-[var(--border)] text-sm font-medium text-[var(--text-dim)] leading-relaxed">
                   {(t as any).locale === 'am' && selectedJob.description_am ? selectedJob.description_am : selectedJob.description}
                </div>

                <div className="grid grid-cols-2 gap-4">
                   <div className="p-4 bg-[var(--bg-ghost)] rounded-2xl border border-[var(--border)]">
                      <div className="text-[8px] font-black uppercase text-[var(--text-muted)] mb-1">{t.jobs.contractStatus}</div>
                      <div className="text-xs font-bold">{selectedJob.type}</div>
                   </div>
                   <div className="p-4 bg-[var(--bg-ghost)] rounded-2xl border border-[var(--border)]">
                      <div className="text-[8px] font-black uppercase text-[var(--text-muted)] mb-1">{t.jobs.reportingRegion}</div>
                      <div className="text-xs font-bold">{selectedJob.location.split(',')[0]}</div>
                   </div>
                </div>

                <div className="space-y-10">
                   <div className="space-y-6">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--secondary)] border-l-4 border-[var(--secondary)] pl-4">{t.jobs.requirements}</h4>
                      <div className="grid gap-4">
                         {( (t as any).locale === 'am' && selectedJob.requirements_am ? selectedJob.requirements_am : selectedJob.requirements ).map((req, i) => (
                           <div key={i} className="flex gap-4 items-start">
                              <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-1.5 shrink-0" />
                              <span className="text-xs font-bold leading-relaxed">{req}</span>
                           </div>
                         ))}
                      </div>
                   </div>

                   <div className="space-y-6">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[var(--primary)] border-l-4 border-[var(--primary)] pl-4">{t.jobs.responsibilities}</h4>
                      <div className="grid gap-4">
                         {( (t as any).locale === 'am' && selectedJob.responsibilities_am ? selectedJob.responsibilities_am : selectedJob.responsibilities ).map((item, i) => (
                           <div key={i} className="flex gap-4 items-start">
                              <Zap size={14} className="text-[var(--secondary)] mt-0.5 shrink-0" />
                              <span className="text-xs font-medium text-[var(--text-dim)] leading-relaxed">{item}</span>
                           </div>
                         ))}
                      </div>
                   </div>
                </div>

                <div className="pt-12 pb-20 sticky bottom-0 bg-[var(--bg-main)]">
                   <button 
                     onClick={() => { setIsMobileDetailOpen(false); setShowApply(true); }}
                     disabled={appliedJobs.includes(selectedJob.id)}
                     className={`w-full py-6 rounded-2xl font-black uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-4 text-xs ${appliedJobs.includes(selectedJob.id) ? 'bg-[var(--bg-ghost)] text-[var(--text-muted)]' : 'btn-primary-glow text-[var(--bg-main)] shadow-2xl shadow-[var(--primary)]/20'}`}
                   >
                     {appliedJobs.includes(selectedJob.id) ? t.jobs.applied : t.jobs.applyButton} 
                     {!appliedJobs.includes(selectedJob.id) && <ArrowRight size={20}/>}
                   </button>
                </div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
