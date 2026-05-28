"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, ShieldCheck, Globe, Zap, Headphones, MessageSquareText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="bg-[var(--bg-main)] min-h-screen pt-48 pb-24">
      <div className="container-full">
        <div className="grid lg:grid-cols-12 gap-20 items-start">
          
          {/* INSTITUTIONAL INTEL - LEFT */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 space-y-16"
          >
             <div className="space-y-8">
                <div className="emerald-badge">Engagement Terminal</div>
                <h1 className="text-[var(--primary)] lowercase tracking-tighter">Initiate <span className="text-[var(--accent)] italic-accent text-4xl lg:text-7xl">Dialogue.</span></h1>
                <p className="text-xl text-[var(--text-dim)] font-medium leading-relaxed">
                   Establish strategic communication regarding institutional human resource auditing, multi-sector staffing, or facility logistics across East Africa.
                </p>
             </div>

             <div className="space-y-6">
                {[
                  { t: "Global HQ - Addis Ababa", d: "Mexico Sq, K Kare Bldg, 5th Floor", i: <MapPin size={24}/>, c: "Addis Ababa, ET" },
                  { t: "Operations Hotline", d: "+251 115 50 79 05", i: <Phone size={24}/>, c: "24/7 Strategic Support" },
                  { t: "Direct Repository", d: "info@edomias.net", i: <Mail size={24}/>, c: "Encrypted Communication" }
                ].map((item, i) => (
                  <motion.div 
                    whileHover={{ x: 10 }}
                    key={i} 
                    className="flex gap-6 p-8 bg-[var(--bg-ghost)] border border-[var(--border-soft)] rounded-[2rem] hover:border-[var(--primary)] transition-all shadow-lux group"
                  >
                     <div className="w-16 h-16 rounded-2xl bg-white border border-[var(--border-soft)] text-[var(--primary)] flex items-center justify-center group-hover:bg-[var(--primary)] group-hover:text-white transition-all shadow-lux">
                        {item.i}
                     </div>
                     <div className="space-y-1">
                        <div className="flex items-center gap-2">
                           <h4 className="text-sm font-bold tracking-tight">{item.t}</h4>
                           <span className="text-[8px] font-black uppercase text-[var(--accent)] tracking-widest">{item.c}</span>
                        </div>
                        <p className="text-sm font-medium text-[var(--text-dim)]">{item.d}</p>
                     </div>
                  </motion.div>
                ))}
             </div>

             <div className="p-8 bg-[var(--primary)] rounded-[2.5rem] border-none text-white flex items-center gap-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent)] opacity-10 blur-3xl translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-1000" />
                <div className="p-3 bg-white/10 rounded-xl text-[var(--accent)]"><Zap size={24} className="animate-pulse" /></div>
                <div className="space-y-1">
                   <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--accent)]">Protocol Status</div>
                   <p className="text-xs font-bold leading-relaxed">Typical response processing time: <span className="text-[var(--accent)]">Under 240 Minutes</span></p>
                </div>
             </div>
          </motion.div>

          {/* SECURE ENQUIRY TERMINAL - RIGHT */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7"
          >
             <div className="card-luxury p-10 md:p-16 bg-white border-none shadow-2xl relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--primary)] opacity-[0.02] rounded-full blur-3xl" />
                
                <AnimatePresence mode="wait">
                  {sent ? (
                    <motion.div 
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-center py-20 space-y-10"
                    >
                       <div className="w-32 h-32 rounded-full bg-emerald-50 text-[var(--primary)] flex items-center justify-center mx-auto border-8 border-white shadow-2xl relative">
                          <div className="absolute inset-0 rounded-full border-4 border-[var(--accent)] animate-ping opacity-20" />
                          <CheckCircle size={56} />
                       </div>
                       <div className="space-y-4">
                          <h2 className="text-4xl text-[var(--primary)] italic-accent">Transmission Unified.</h2>
                          <p className="text-sm font-black text-[var(--text-dim)] uppercase tracking-widest max-w-sm mx-auto leading-relaxed">
                             Your requirements have been synced with the Strategic Relations Office.
                          </p>
                       </div>
                       <button 
                         onClick={() => setSent(false)} 
                         className="btn-elite btn-primary-elite px-12"
                       >
                          Return to Terminal
                       </button>
                    </motion.div>
                  ) : (
                    <form 
                      onSubmit={(e) => { e.preventDefault(); setSent(true); }} 
                      className="space-y-10"
                    >
                       <div className="space-y-3">
                          <div className="emerald-badge">Proposal Request E-TLS v1.3</div>
                          <h2 className="text-4xl leading-tight">Construct <span className="text-[var(--accent)] italic-accent">Enquiry.</span></h2>
                       </div>

                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-2">
                             <label className="text-[10px] font-black uppercase tracking-widest text-[var(--text-dim)]">Full Identity</label>
                             <div className="relative">
                                <Headphones className="absolute left-5 top-1/2 -translate-y-1/2 text-[var(--primary)] opacity-30" size={18} />
                                <input required placeholder="E.g. Dr. John Doe" className="w-full pl-14 pr-6 py-5 bg-[var(--bg-ghost)] border-2 border-[var(--border-soft)] rounded-2xl text-sm font-bold focus:border-[var(--primary)] transition-all outline-none" />
                             </div>
                          </div>
                          <div className="space-y-2">
                             <label className="text-[10px] font-black uppercase tracking-widest text-[var(--text-dim)]">Corporate Email</label>
                             <div className="relative">
                                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-[var(--primary)] opacity-30" size={18} />
                                <input required type="email" placeholder="name@corporation.com" className="w-full pl-14 pr-6 py-5 bg-[var(--bg-ghost)] border-2 border-[var(--border-soft)] rounded-2xl text-sm font-bold focus:border-[var(--primary)] transition-all outline-none" />
                             </div>
                          </div>
                       </div>

                       <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-[var(--text-dim)]">Strategic Domain of Interest</label>
                          <div className="relative">
                             <div className="absolute left-5 top-1/2 -translate-y-1/2 text-[var(--primary)] opacity-30"><Globe size={18}/></div>
                             <select className="w-full pl-14 pr-8 py-5 bg-[var(--bg-ghost)] border-2 border-[var(--border-soft)] rounded-2xl text-sm font-bold focus:border-[var(--primary)] transition-all appearance-none cursor-pointer outline-none">
                                <option>Institutional Staffing & Recruitment</option>
                                <option>Integrated Facility Management</option>
                                <option>Relational Labor Compliance Audit</option>
                                <option>Other Strategic Logistics</option>
                             </select>
                          </div>
                       </div>

                       <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-[var(--text-dim)]">Brief / Requirements</label>
                          <div className="relative">
                             <MessageSquareText className="absolute left-5 top-6 text-[var(--primary)] opacity-30" size={18} />
                             <textarea rows={6} placeholder="Define your institutional requirements..." className="w-full pl-14 pr-6 py-6 bg-[var(--bg-ghost)] border-2 border-[var(--border-soft)] rounded-2xl text-sm font-bold focus:border-[var(--primary)] transition-all outline-none resize-none" />
                          </div>
                       </div>

                       <div className="p-6 bg-slate-50 rounded-2xl flex items-start gap-4 border border-slate-100 italic-accent">
                          <ShieldCheck size={20} className="text-[var(--primary)] shrink-0" />
                          <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest leading-loose">
                            Institutional Data Protection Active. By submitting, you consent to our secure data handling protocols under international GDPR benchmarks.
                          </p>
                       </div>

                       <button 
                         type="submit" 
                         className="btn-elite btn-primary-elite w-full py-5 text-sm shadow-2xl active:scale-95 transition-all"
                       >
                          Commit Enquiry Transmission <Send size={18} className="ml-2" />
                       </button>
                    </form>
                  )}
                </AnimatePresence>
             </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
