"use client";
import { useState } from "react";
import { 
  Users, Briefcase, FileText, Search, MoreVertical, Plus, 
  ExternalLink, CheckCircle, XCircle, Clock, PieChart, BarChart3,
  Filter, Download, Eye, Edit3, Trash2, ArrowRight, ShieldCheck, 
  Layers, Package, CheckCircle2, AlertCircle
} from "lucide-react";
import { DB, Job } from "@/data/database";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<"pipeline" | "jobs" | "candidates">("pipeline");
  const [pipelineFilter, setPipelineFilter] = useState("all");

  const pipelines = [
    { id: "new", name: "New Applications", count: 45, color: "blue", apps: DB.applications.filter(a => a.status === "New") },
    { id: "review", name: "Under Review", count: 20, color: "amber", apps: DB.applications.filter(a => a.status === "Under Review") },
    { id: "interview", name: "Interview Phase", count: 8, color: "emerald", apps: DB.applications.filter(a => a.status === "Interview Scheduled") },
    { id: "hired", name: "Hired / Placed", count: 12, color: "indigo", apps: DB.applications.filter(a => a.status === "Hired") }
  ];

  return (
    <div className="bg-[var(--bg-soft)] min-h-screen pt-32 pb-40">
      <div className="container-full">
        
        {/* HEADER AREA */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
           <div className="space-y-2">
              <div className="px-4 py-1.5 bg-indigo-500/10 text-indigo-400 text-[9px] font-black uppercase tracking-widest rounded-full border border-indigo-500/20 flex items-center gap-2 w-fit">
                 <ShieldCheck size={14}/> HR Intelligence Command
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-black text-[var(--primary)]">Recruitment <span className="text-[var(--secondary)]">Control Center.</span></h1>
           </div>
           <div className="flex gap-4">
              <button className="h-14 px-8 bg-[var(--bg-main)] border border-[var(--border)] rounded-2xl flex items-center gap-3 text-xs font-bold hover:shadow-lg transition-all text-[var(--text-main)]">
                 <Download size={18} /> Export Analytics
              </button>
              <button className="h-14 px-8 bg-[var(--primary)] text-white rounded-2xl flex items-center gap-3 text-xs font-bold shadow-2xl hover:bg-[var(--secondary)] transition-all">
                 <Plus size={18} /> Create New Requisition
              </button>
           </div>
        </div>

        {/* NAVIGATION TABS */}
        <div className="flex gap-1 p-1 bg-[var(--bg-ghost)]/50 backdrop-blur-md rounded-2xl w-fit mb-12 border border-[var(--border)]">
           {[
             { id: "pipeline", name: "Recruitment Pipeline", i: <Layers size={16}/> },
             { id: "jobs", name: "Vacancy Management", i: <Package size={16}/> },
             { id: "candidates", name: "Global Talent Archive", i: <Users size={16}/> }
           ].map(tab => (
             <button 
               key={tab.id}
               onClick={() => setActiveTab(tab.id as any)}
               className={`flex items-center gap-3 px-8 py-3.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === tab.id ? "bg-[var(--bg-main)] text-[var(--primary)] shadow-lg" : "text-[var(--text-dim)] hover:text-[var(--text-main)]"}`}
             >
               {tab.i} {tab.name}
             </button>
           ))}
        </div>

        <AnimatePresence mode="wait">
           {activeTab === "pipeline" && (
             <motion.div key="pipeline" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                {/* PIPELINE VISUAL BOARD */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                   {pipelines.map((pipe) => (
                     <div key={pipe.id} className="space-y-6">
                        <div className="flex justify-between items-center px-4">
                           <h3 className="text-xs font-black uppercase tracking-widest text-[var(--primary)] flex items-center gap-2">
                              <div className={`w-2 h-2 rounded-full bg-${pipe.color}-500`} />
                              {pipe.name}
                           </h3>
                           <span className="text-xs font-black text-[var(--text-dim)]">{pipe.count}</span>
                        </div>
                        
                        <div className="space-y-4 min-h-[500px] p-4 bg-[var(--bg-ghost)] border-2 border-dashed border-[var(--border)] rounded-[2rem]">
                           {pipe.apps.length === 0 ? (
                             <div className="py-12 text-center opacity-30 italic text-[10px] font-medium text-[var(--text-main)]">No candidates in this phase</div>
                           ) : (
                             pipe.apps.map(app => {
                               const job = DB.jobs.find(j => j.id === app.job_id);
                               return (
                                 <motion.div 
                                   whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.05)" }}
                                   key={app.id} 
                                   className="bg-[var(--bg-main)] p-6 rounded-2xl border border-[var(--border)] shadow-sm cursor-grab active:cursor-grabbing group"
                                 >
                                    <div className="space-y-4">
                                       <div className="flex justify-between items-start">
                                          <div className="w-10 h-10 rounded-xl bg-[var(--bg-soft)] flex items-center justify-center font-black text-[var(--primary)] text-xs border border-[var(--border)]">B</div>
                                          <MoreVertical size={16} className="text-[var(--border)] group-hover:text-[var(--text-dim)] transition-all" />
                                       </div>
                                       <div>
                                          <div className="text-sm font-bold text-[var(--text-main)]">Bililign Yidnekachew</div>
                                          <div className="text-[9px] font-black uppercase text-[var(--secondary)] tracking-widest truncate">{job?.title}</div>
                                       </div>
                                       <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
                                          <div className="text-[8px] font-bold text-[var(--text-dim)]">ID: {app.id}</div>
                                          <div className="flex items-center gap-1 text-emerald-500 font-black text-[8px] uppercase tracking-tighter">
                                             <CheckCircle2 size={10}/> Score: 92%
                                          </div>
                                       </div>
                                    </div>
                                 </motion.div>
                               );
                             })
                           )}
                           <button className="w-full py-4 border-2 border-dashed border-[var(--border)] rounded-2xl flex items-center justify-center gap-2 text-[var(--text-muted)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all text-[9px] font-black uppercase tracking-widest">
                              <Plus size={14}/> Sourcing Logic
                           </button>
                        </div>
                     </div>
                   ))}
                </div>
             </motion.div>
           )}

           {activeTab === "jobs" && (
             <motion.div key="jobs" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                {/* VACANCY MANAGEMENT TABLE */}
                <div className="bg-[var(--bg-main)] rounded-[2.5rem] border border-[var(--border)] overflow-hidden shadow-sm">
                   <div className="p-8 border-b border-[var(--border)] flex justify-between items-center bg-[var(--bg-ghost)]">
                      <div className="relative w-96">
                         <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" size={18} />
                         <input className="w-full h-12 pl-12 pr-6 bg-[var(--bg-main)] border border-[var(--border)] rounded-xl text-xs font-bold outline-none text-[var(--text-main)] focus:border-[var(--primary)] transition-all" placeholder="Search vacancies by title or ID..." />
                      </div>
                      <div className="flex gap-4">
                         <button className="p-3 bg-[var(--bg-main)] border border-[var(--border)] rounded-xl text-[var(--text-dim)] hover:text-[var(--primary)]"><Filter size={18}/></button>
                         <button className="px-6 py-3 bg-[var(--primary)] text-white rounded-xl text-[9px] font-black uppercase tracking-widest shadow-xl">New Post</button>
                      </div>
                   </div>
                   <div className="overflow-x-auto">
                      <table className="w-full text-left">
                         <thead>
                            <tr className="bg-[var(--bg-main)] text-[9px] font-black uppercase tracking-widest text-[var(--text-muted)] border-b border-[var(--border)]">
                               <th className="px-10 py-6">Reference ID</th>
                               <th className="px-10 py-6">Job Title</th>
                               <th className="px-10 py-6">Applicants</th>
                               <th className="px-10 py-6">Deadline</th>
                               <th className="px-10 py-6">Status</th>
                               <th className="px-10 py-6">Actions</th>
                            </tr>
                         </thead>
                         <tbody className="divide-y divide-[var(--border)]">
                            {DB.jobs.map(job => (
                              <tr key={job.id} className="hover:bg-[var(--bg-ghost)] transition-all cursor-pointer">
                                 <td className="px-10 py-6 text-xs font-black text-indigo-400">#{job.id}</td>
                                 <td className="px-10 py-6">
                                    <div className="text-sm font-bold text-[var(--text-main)]">{job.title}</div>
                                    <div className="text-[10px] font-bold text-[var(--text-dim)]">{job.department}</div>
                                 </td>
                                 <td className="px-10 py-6 text-xs font-bold">
                                    <span className="px-3 py-1 bg-[var(--bg-soft)] border border-[var(--border)] rounded-lg">24 Qualified</span>
                                 </td>
                                 <td className="px-10 py-6 text-xs font-bold">{job.deadline}</td>
                                 <td className="px-10 py-6">
                                    <span className="px-4 py-1.5 bg-emerald-500/10 text-emerald-500 text-[8px] font-black uppercase rounded-full border border-emerald-500/20">Live</span>
                                 </td>
                                 <td className="px-10 py-6">
                                    <div className="flex gap-4 text-[var(--text-muted)]">
                                       <button className="hover:text-indigo-400"><Eye size={18}/></button>
                                       <button className="hover:text-amber-500"><Edit3 size={18}/></button>
                                       <button className="hover:text-red-500"><Trash2 size={18}/></button>
                                    </div>
                                 </td>
                              </tr>
                            ))}
                         </tbody>
                      </table>
                   </div>
                </div>
             </motion.div>
           )}

           {activeTab === "candidates" && (
             <motion.div key="candidates" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8 text-center py-20 opacity-40">
                <Users size={64} className="mx-auto text-[var(--text-dim)]" />
                <h3 className="text-xl font-bold">Candidate Archive</h3>
                <p className="text-xs font-medium max-w-xs mx-auto">This section integrates with the global talent pool for advanced search and sourcing logic.</p>
             </motion.div>
           )}
        </AnimatePresence>

        {/* ANALYTICS PREVIEW FOOTER */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="card-glass p-10 bg-[var(--bg-main)] shadow-sm flex items-center gap-8">
              <div className="w-16 h-16 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20"><BarChart3 size={32}/></div>
              <div>
                 <div className="text-sm font-black text-[var(--text-muted)] uppercase tracking-widest">Time to Hire</div>
                 <div className="text-2xl font-black text-[var(--primary)]">14.2 Days</div>
              </div>
           </div>
           <div className="card-glass p-10 bg-[var(--bg-main)] shadow-sm flex items-center gap-8">
              <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 border border-amber-500/20"><PieChart size={32}/></div>
              <div>
                 <div className="text-sm font-black text-[var(--text-muted)] uppercase tracking-widest">Offer Accept Rate</div>
                 <div className="text-2xl font-black text-[var(--primary)]">88.5%</div>
              </div>
           </div>
           <div className="card-glass p-10 bg-[var(--primary)] text-white flex items-center gap-8">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-[var(--secondary)]"><AlertCircle size={32}/></div>
              <div>
                 <div className="text-sm font-black opacity-60 uppercase tracking-widest">Pending Approvals</div>
                 <div className="text-2xl font-black">03 Requests</div>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
}
