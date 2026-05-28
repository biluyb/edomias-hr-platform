"use client";
import { useState } from "react";
import { LayoutDashboard, Briefcase, Clock, Bell, User, Settings, LogOut, ChevronRight, Activity, ShieldCheck, PieChart, Layers, Search, Zap, Star } from "lucide-react";
import { DB } from "@/data/database";
import { motion, AnimatePresence } from "framer-motion";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const stats = [
    { label: "Active Tracking", value: DB.applications.length, icon: <Activity size={24}/>, color: "text-emerald-600" },
    { label: "Talent Score", value: "96", icon: <Star size={24}/>, color: "text-[var(--accent)]" },
    { label: "Compliance Tier", value: "Tier 1", icon: <ShieldCheck size={24}/>, color: "text-blue-600" }
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-ghost)] pt-24 flex flex-col lg:flex-row">
      {/* PERFECT DASHBOARD SIDEBAR */}
      <aside className="lg:w-80 bg-[var(--bg-main)] border-r border-[var(--border-soft)] flex flex-col p-8 lg:sticky lg:top-24 lg:h-[calc(100vh-96px)] z-30 transition-all">
        <div className="flex items-center gap-5 p-6 bg-[var(--bg-ghost)] rounded-[2.5rem] border border-[var(--border-soft)] mb-12 group hover:border-[var(--primary)] transition-all">
           <div className="w-14 h-14 rounded-2xl bg-[var(--primary)] flex items-center justify-center text-white font-display font-black text-2xl shadow-xl shadow-emerald-900/20 group-hover:rotate-6 transition-all">
             A
           </div>
           <div>
              <div className="font-display font-bold text-sm">Abebe Kebede</div>
              <div className="text-[9px] font-black uppercase tracking-[0.2em] text-[var(--accent)]">Professional Verified</div>
           </div>
        </div>

        <nav className="flex-1 space-y-2">
           {[
             { id: "overview", label: "Intelligence Grid", icon: <LayoutDashboard size={20}/> },
             { id: "applications", label: "Engagement Hub", icon: <Briefcase size={20}/> },
             { id: "profile", label: "Digital Persona", icon: <User size={20}/> },
             { id: "notifications", label: "Institutional Feed", icon: <Bell size={20}/> },
           ].map((item) => (
             <button
               key={item.id}
               onClick={() => setActiveTab(item.id)}
               className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-[11px] font-bold uppercase tracking-widest transition-all ${
                 activeTab === item.id ? "bg-[var(--primary)] text-white shadow-xl translate-x-2" : "text-[var(--text-dim)] hover:bg-[var(--bg-ghost)] hover:text-[var(--primary)]"
               }`}
             >
               {item.icon} {item.label}
             </button>
           ))}
        </nav>

        <div className="mt-10 pt-8 border-t border-[var(--border-soft)] space-y-2">
          <button className="flex items-center gap-4 px-6 py-3 text-[10px] font-bold text-[var(--text-dim)] hover:text-[var(--primary)] transition-all w-full">
            <Settings size={18}/> Access Config
          </button>
          <button className="flex items-center gap-4 px-6 py-3 text-[10px] font-bold text-red-500 hover:bg-red-50 rounded-xl transition-all w-full">
            <LogOut size={18}/> Close Session
          </button>
        </div>
      </aside>

      {/* CORE INTELLIGENCE WORKSPACE */}
      <main className="flex-1 p-6 lg:p-16 overflow-x-hidden">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* WELCOME SECTION */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 reveal">
             <div className="space-y-2">
                <div className="emerald-badge">Candidate Workspace</div>
                <h1 className="text-[var(--primary)]">Institutional <span className="text-[var(--accent)] italic-accent text-3xl">Brief.</span></h1>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--text-dim)]">Status Update: Operational Intelligence Active</p>
             </div>
             <div className="flex items-center gap-3 p-4 glass-ui rounded-3xl shadow-lux">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[var(--primary)] flex items-center justify-center animate-bounce"><Zap size={20}/></div>
                <div>
                   <div className="text-[9px] font-black uppercase text-[var(--text-dim)]">Last Sync</div>
                   <div className="text-xs font-bold">2 Minutes Ago</div>
                </div>
             </div>
          </div>

          {/* METRIC GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {stats.map((stat, i) => (
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: i * 0.1 }}
                 key={i} 
                 className="card-luxury p-10 bg-white border-none shadow-lux relative overflow-hidden group"
               >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--bg-ghost)] rounded-full translate-x-12 -translate-y-12 transition-transform duration-700 group-hover:scale-150" />
                  <div className="relative z-10 space-y-6">
                     <div className={`p-4 bg-[var(--bg-ghost)] ${stat.color} rounded-2xl w-fit group-hover:rotate-12 transition-transform`}>{stat.icon}</div>
                     <div className="space-y-1">
                        <div className="text-[10px] font-black uppercase tracking-widest text-[var(--text-dim)]">{stat.label}</div>
                        <div className="text-4xl font-display font-black text-[var(--primary)]">{stat.value}</div>
                     </div>
                  </div>
               </motion.div>
             ))}
          </div>

          {/* ACTIVE APPLICATIONS TRACKER */}
          <section className="space-y-8 reveal" style={{ animationDelay: '0.4s' }}>
             <div className="flex justify-between items-center px-4">
                <h3 className="text-2xl font-display tracking-tight text-[var(--primary)]">Engagement Lifecycle</h3>
                <div className="flex items-center gap-2 group cursor-pointer">
                   <span className="text-[10px] font-black uppercase tracking-widest text-[var(--text-dim)] group-hover:text-[var(--primary)] transition-colors">Request Feedback</span>
                   <ChevronRight size={14} className="text-[var(--accent)]" />
                </div>
             </div>

             <div className="grid gap-6">
                <AnimatePresence>
                   {DB.applications.map((app, idx) => {
                     const job = DB.jobs.find(j => j.id === app.job_id);
                     return (
                       <motion.div 
                         initial={{ opacity: 0, x: -20 }}
                         animate={{ opacity: 1, x: 0 }}
                         transition={{ delay: 0.5 + idx * 0.1 }}
                         key={app.id} 
                         className="card-luxury p-10 bg-white border-l-8 border-l-[var(--primary)] flex flex-col md:flex-row items-center gap-10 hover:border-r-8 hover:border-r-[var(--accent)] transition-all"
                       >
                          <div className="w-20 h-20 bg-[var(--bg-ghost)] rounded-3xl flex items-center justify-center font-display font-black text-3xl text-[var(--primary)] shrink-0 shadow-inner">
                            0{idx+1}
                          </div>
                          
                          <div className="flex-1 space-y-2 text-center md:text-left">
                             <h4 className="text-2xl font-bold tracking-tight">{job?.title}</h4>
                             <div className="flex flex-wrap justify-center md:justify-start gap-4">
                                <span className="text-[10px] font-black uppercase text-[var(--text-dim)] flex items-center gap-2">
                                   <Briefcase size={12} className="text-[var(--accent)]" /> {job?.company}
                                </span>
                                <span className="text-[10px] font-black uppercase text-[var(--text-dim)] flex items-center gap-2">
                                   <Clock size={12} className="text-[var(--accent)]" /> Applied {app.applied_at}
                                </span>
                             </div>
                          </div>

                          <div className="flex-1 w-full max-w-sm space-y-4">
                             <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest px-1">
                                <span className="text-[var(--primary)]">{app.status}</span>
                                <span className="text-[var(--text-dim)] opacity-50">Operational Phase</span>
                             </div>
                             <div className="h-2.5 bg-[var(--bg-ghost)] rounded-full overflow-hidden flex p-0.5 gap-1 border border-[var(--border-soft)]">
                                <div className={`flex-1 rounded-full transition-all duration-1000 ${['Submitted', 'Under Review', 'Interview Scheduled', 'Completed'].includes(app.status) ? 'bg-[var(--primary)]' : 'bg-white'}`} />
                                <div className={`flex-1 rounded-full transition-all duration-1000 delay-200 ${['Under Review', 'Interview Scheduled', 'Completed'].includes(app.status) ? 'bg-[var(--primary)]' : 'bg-white'}`} />
                                <div className={`flex-1 rounded-full transition-all duration-1000 delay-500 ${['Interview Scheduled', 'Completed'].includes(app.status) ? 'bg-[var(--accent)]' : 'bg-white'}`} />
                                <div className={`flex-1 rounded-full transition-all duration-1000 delay-700 ${['Completed'].includes(app.status) ? 'bg-emerald-600' : 'bg-white'}`} />
                             </div>
                          </div>

                          <div className="w-14 h-14 rounded-2xl bg-[var(--bg-ghost)] flex items-center justify-center text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-all cursor-pointer">
                             <ChevronRight size={24} />
                          </div>
                       </motion.div>
                     )
                   })}
                </AnimatePresence>
             </div>
          </section>

          {/* INSIGHTS CAROUSEL OVERLAY */}
          <div className="p-16 bg-[var(--primary)] rounded-[4rem] text-white relative overflow-hidden reveal shadow-2xl" style={{ animationDelay: '0.8s' }}>
             <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent)] opacity-10 rounded-full blur-3xl translate-x-32 -translate-y-32" />
             <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                   <div className="emerald-badge bg-white/10 text-white border-white/20">Career Strategy</div>
                   <h2 className="text-white text-3xl">Refine your digital <span className="text-[var(--accent)]">Professional Persona.</span></h2>
                   <p className="text-white/70 font-medium italic-accent">"Organizations in the Professional Services sector are currently seeking candidates with your specific compliance background."</p>
                </div>
                <div className="flex justify-end">
                   <button className="btn-elite hover:bg-white bg-[var(--accent)] text-[var(--primary)] border-none">Update Profile Artifacts</button>
                </div>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
}
