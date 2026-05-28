"use client";
import { useState, useMemo } from "react";
import { Search, MapPin, Briefcase, Filter, X, ArrowRight, CheckCircle, ShieldBox } from "lucide-react";
import { JOBS } from "@/data";
import { useApp } from "@/context/AppContext";

type Job = typeof JOBS[0];

export default function JobsPage() {
  const { t } = useApp();
  const [search, setSearch] = useState("");
  const [selectedJob, setSelectedJob] = useState<Job>(JOBS[0]);
  const [showApply, setShowApply] = useState(false);

  const filteredJobs = useMemo(() => {
    return JOBS.filter(j => 
       j.title.toLowerCase().includes(search.toLowerCase()) || 
       j.company.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="bg-[var(--bg-secondary)] min-h-screen pt-16">
      {/* Search Header */}
      <div className="bg-[var(--bg-primary)] border-b border-[var(--border-color)] py-8">
        <div className="container-custom">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-display font-extrabold mb-4">Enterprise Opportunity Gateway</h1>
            <div className="relative flex items-center">
              <Search className="absolute left-4 text-[var(--text-muted)]" size={18} />
              <input 
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)] focus:outline-none focus:border-[var(--brand-primary)] focus:bg-[var(--bg-primary)] transition-all"
                placeholder="Search jobs, companies, or keywords..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* List Section */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider">{filteredJobs.length} Results Found</span>
              <div className="flex gap-2">
                <button className="text-[10px] font-bold text-[var(--brand-primary)] border border-[var(--brand-primary)]/20 px-3 py-1 rounded-full bg-[var(--accent-pale)]">Live From ERP</button>
              </div>
            </div>

            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <div 
                  key={job.id} 
                  onClick={() => setSelectedJob(job)}
                  className={`card cursor-pointer group transition-all ${selectedJob.id === job.id ? 'border-[var(--brand-primary)] ring-4 ring-[var(--brand-primary)]/5' : ''}`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-[var(--text-primary)] mb-1">{job.title}</h4>
                      <p className="text-xs text-[var(--text-secondary)] mb-4">{job.company}</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[var(--text-muted)] bg-[var(--bg-tertiary)] px-2 py-1 rounded">
                          <MapPin size={10} /> {job.location}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[var(--text-muted)] bg-[var(--bg-tertiary)] px-2 py-1 rounded">
                          <Briefcase size={10} /> {job.type}
                        </span>
                      </div>
                    </div>
                    <ArrowRight size={16} className={`text-[var(--text-muted)] group-hover:text-[var(--brand-primary)] transition-transform ${selectedJob.id === job.id ? 'translate-x-1 text-[var(--brand-primary)]' : ''}`} />
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-20 card border-dashed">
                <p className="text-[var(--text-muted)]">No matching positions found.</p>
              </div>
            )}
          </div>

          {/* Detail Section */}
          <div className="lg:col-span-5 h-fit sticky top-24">
            <div className="card animate-fade-in">
              <h3 className="text-xl font-bold mb-2">{selectedJob.title}</h3>
              <p className="text-sm text-[var(--brand-primary)] font-semibold mb-6">{selectedJob.company}</p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                 <div>
                    <p className="text-[10px] font-bold text-[var(--text-muted)] uppercase mb-1">Employment</p>
                    <p className="text-xs font-semibold">{selectedJob.type}</p>
                 </div>
                 <div>
                    <p className="text-[10px] font-bold text-[var(--text-muted)] uppercase mb-1">Location</p>
                    <p className="text-xs font-semibold">{selectedJob.location}</p>
                 </div>
                 <div>
                    <p className="text-[10px] font-bold text-[var(--text-muted)] uppercase mb-1">Department</p>
                    <p className="text-xs font-semibold">{selectedJob.department}</p>
                 </div>
              </div>

              <div className="space-y-6 mb-8">
                 <div>
                    <h5 className="text-[10px] font-bold text-[var(--text-muted)] uppercase mb-3">Overview</h5>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{selectedJob.description}</p>
                 </div>
                 <div>
                    <h5 className="text-[10px] font-bold text-[var(--text-muted)] uppercase mb-3">Requirements</h5>
                    <ul className="space-y-2">
                       {selectedJob.requirements.map((req, i) => (
                         <li key={i} className="flex gap-2 text-xs text-[var(--text-secondary)]">
                            <CheckCircle size={14} className="text-[var(--brand-primary)] flex-shrink-0" />
                            <span>{req}</span>
                         </li>
                       ))}
                    </ul>
                 </div>
              </div>

              <button 
                onClick={() => setShowApply(true)}
                className="btn btn-primary w-full"
              >
                Apply for Position
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Simplified Modal */}
      {showApply && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fade-in">
          <div className="card max-w-md w-full relative">
            <button onClick={() => setShowApply(false)} className="absolute top-4 right-4 text-[var(--text-muted)] hover:text-[var(--text-primary)]">
              <X size={20} />
            </button>
            <h3 className="text-lg font-bold mb-2">Application Form</h3>
            <p className="text-xs text-[var(--text-secondary)] mb-6">Submitting for {selectedJob.title}</p>
            
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input placeholder="First Name" className="w-full p-3 text-xs bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg focus:outline-none focus:border-[var(--brand-primary)]" />
                <input placeholder="Last Name" className="w-full p-3 text-xs bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg focus:outline-none focus:border-[var(--brand-primary)]" />
              </div>
              <input placeholder="Email Address" type="email" className="w-full p-3 text-xs bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg focus:outline-none focus:border-[var(--brand-primary)]" />
              <div className="p-4 border border-dashed border-[var(--border-color)] rounded-lg text-center text-[10px] text-[var(--text-muted)]">
                 Drag and drop your CV (PDF only)
              </div>
              <button type="button" className="btn btn-primary w-full text-xs">Verify & Submit</button>
              <div className="flex items-center justify-center gap-2 text-[10px] text-[var(--text-muted)]">
                 <div className="w-1 h-1 rounded-full bg-[var(--brand-primary)] animate-pulse" />
                 Securely Encrypted Session
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

function ShieldBox({ size }: { size: number }) {
  return <div className="p-2 bg-[var(--accent-pale)] rounded-lg text-[var(--brand-primary)]"><Search size={size} /></div>;
}
