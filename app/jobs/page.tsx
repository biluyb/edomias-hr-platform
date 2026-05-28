"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, MapPin, Briefcase, Filter, X, ArrowRight, Upload, CheckCircle, Star } from "lucide-react";
import { JOBS } from "@/data";

type Job = typeof JOBS[0];

const CATEGORIES = ["All", "Cleaning", "Security", "Landscaping", "Skilled Labor", "General Labor", "HR & Recruitment"];
const TYPES = ["All Types", "Full-time", "Part-time", "Contract"];
const LOCATIONS = ["All Locations", "Addis Ababa", "Gondar", "Multiple Locations", "Remote"];

// ── Apply Modal
function ApplyModal({ job, onClose }: { job: Job; onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [filename, setFilename] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="fixed inset-0 bg-dark/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 fade-in">
      <div className="bg-white rounded-3xl p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto relative shadow-2xl">
        <button onClick={onClose} className="absolute top-5 right-5 w-8 h-8 rounded-lg bg-bg2 border border-border flex items-center justify-center text-gray hover:bg-dark hover:text-white transition-all">
          <X size={16} />
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-xl font-extrabold font-display text-dark mb-2">Application Submitted!</h3>
            <p className="text-gray text-sm mb-4">Your application has been received and added to our ERP recruitment pipeline. We'll contact you within 3–5 business days.</p>
            <div className="inline-flex items-center gap-2 bg-green-pale border border-green/25 rounded-full px-4 py-2 text-xs font-bold text-green-dark mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-green animate-pulse-dot" />
              Application ID: APP-2026-{Math.floor(Math.random() * 9000 + 1000)}
            </div>
            <br />
            <button onClick={onClose} className="px-6 py-3 rounded-full text-sm font-bold text-white gradient-green shadow-lg">
              Browse More Jobs
            </button>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <div className="text-xs font-bold uppercase tracking-widest text-gray-light mb-1">Applying for</div>
              <h2 className="text-xl font-extrabold font-display text-dark">{job.title}</h2>
              <p className="text-sm text-gray">{job.company} · {job.location}</p>
            </div>

            {/* Step indicators */}
            <div className="flex items-center gap-2 mb-7">
              {[1, 2].map((s) => (
                <>
                  <div key={s} className={`flex items-center gap-2`}>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${s < step ? "bg-green-dark text-white" : s === step ? "bg-green text-white" : "bg-bg2 border border-border text-gray"}`}>
                      {s < step ? "✓" : s}
                    </div>
                    <span className={`text-xs font-semibold ${s === step ? "text-dark" : "text-gray"}`}>
                      {s === 1 ? "Personal Info" : "CV & Cover"}
                    </span>
                  </div>
                  {s < 2 && <div className="flex-1 h-px bg-border" />}
                </>
              ))}
            </div>

            <form onSubmit={handleSubmit}>
              {step === 1 ? (
                <>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wide text-gray mb-2">First Name *</label>
                      <input required placeholder="First name" className="w-full bg-bg2 border border-border rounded-xl px-4 py-3 text-sm text-dark focus:border-green focus:bg-white focus:outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wide text-gray mb-2">Last Name *</label>
                      <input required placeholder="Last name" className="w-full bg-bg2 border border-border rounded-xl px-4 py-3 text-sm text-dark focus:border-green focus:bg-white focus:outline-none transition-all" />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-xs font-bold uppercase tracking-wide text-gray mb-2">Email Address *</label>
                    <input type="email" required placeholder="your@email.com" className="w-full bg-bg2 border border-border rounded-xl px-4 py-3 text-sm text-dark focus:border-green focus:bg-white focus:outline-none transition-all" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-xs font-bold uppercase tracking-wide text-gray mb-2">Phone Number *</label>
                    <input placeholder="+251..." className="w-full bg-bg2 border border-border rounded-xl px-4 py-3 text-sm text-dark focus:border-green focus:bg-white focus:outline-none transition-all" />
                  </div>
                  <div className="mb-6">
                    <label className="block text-xs font-bold uppercase tracking-wide text-gray mb-2">Years of Experience</label>
                    <select className="w-full bg-bg2 border border-border rounded-xl px-4 py-3 text-sm text-dark focus:border-green focus:outline-none transition-all cursor-pointer">
                      <option>0–1 years</option><option>1–3 years</option><option>3–5 years</option><option>5+ years</option>
                    </select>
                  </div>
                  <button type="button" onClick={() => setStep(2)} className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full text-sm font-bold text-white gradient-green shadow-lg">
                    Next: Upload CV <ArrowRight size={15} />
                  </button>
                </>
              ) : (
                <>
                  <div
                    className="border-2 border-dashed border-border rounded-2xl p-8 text-center cursor-pointer hover:border-green hover:bg-green-pale transition-all mb-4"
                    onClick={() => document.getElementById("cv-upload")?.click()}>
                    <Upload className="mx-auto mb-3 text-gray-light" size={32} />
                    <p className="text-sm text-gray">Drop your CV here or <span className="text-green font-bold">click to browse</span></p>
                    <p className="text-xs text-gray-light mt-1">PDF, DOC, DOCX — max 5MB</p>
                    {filename && <p className="text-xs text-green font-semibold mt-2">✓ {filename}</p>}
                    <input id="cv-upload" type="file" className="hidden" accept=".pdf,.doc,.docx"
                      onChange={(e) => setFilename(e.target.files?.[0]?.name || "")} />
                  </div>
                  <div className="mb-6">
                    <label className="block text-xs font-bold uppercase tracking-wide text-gray mb-2">Cover Letter (Optional)</label>
                    <textarea rows={4} placeholder="Tell us why you're the right person for this role..." className="w-full bg-bg2 border border-border rounded-xl px-4 py-3 text-sm text-dark focus:border-green focus:bg-white focus:outline-none transition-all resize-none" />
                  </div>
                  <div className="bg-green-pale border border-green/20 rounded-xl p-3 mb-6 text-xs text-green-dark">
                    🔗 <strong>ERP Notice:</strong> Your application will be synced to the Edomias HR recruitment pipeline immediately upon submission.
                  </div>
                  <div className="flex gap-3">
                    <button type="button" onClick={() => setStep(1)} className="flex-1 py-3 rounded-full text-sm font-bold text-dark border-2 border-border hover:border-green hover:text-green transition-all">
                      ← Back
                    </button>
                    <button type="submit" className="flex-[2] flex items-center justify-center gap-2 py-3 rounded-full text-sm font-bold text-white gradient-green shadow-lg">
                      Submit Application ✓
                    </button>
                  </div>
                </>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
}

// ── Job detail panel
function JobDetail({ job, onApply }: { job: Job; onApply: () => void }) {
  return (
    <div className="bg-white border border-border rounded-2xl p-7 sticky top-[90px] max-h-[calc(100vh-110px)] overflow-y-auto">
      <div className="flex items-start justify-between mb-5">
        <div className="w-14 h-14 rounded-2xl bg-bg2 border border-border flex items-center justify-center text-3xl">{job.icon}</div>
        {job.featured && (
          <span className="flex items-center gap-1 text-xs font-bold bg-orange-pale text-orange-dark px-3 py-1 rounded-full">
            <Star size={11} /> Featured
          </span>
        )}
      </div>
      <h2 className="text-lg font-extrabold font-display text-dark mb-1">{job.title}</h2>
      <p className="text-sm text-gray mb-4">{job.company} · {job.location}</p>
      <div className="flex flex-wrap gap-2 mb-5">
        <span className="text-xs px-3 py-1.5 rounded-full bg-orange-pale text-orange-dark font-bold">{job.type}</span>
        <span className="text-xs px-3 py-1.5 rounded-full bg-green-pale text-green-dark font-bold">📍 {job.location}</span>
        <span className="text-xs px-3 py-1.5 rounded-full bg-bg3 text-gray font-semibold">💰 {job.salary}</span>
        <span className="text-xs px-3 py-1.5 rounded-full bg-bg3 text-gray font-semibold">🗂 {job.department}</span>
      </div>
      <div className="border-t border-border pt-5 mb-5">
        <h4 className="text-xs font-extrabold uppercase tracking-widest text-gray mb-3">Description</h4>
        <p className="text-sm text-gray leading-relaxed">{job.description}</p>
      </div>
      <div className="mb-5">
        <h4 className="text-xs font-extrabold uppercase tracking-widest text-gray mb-3">Responsibilities</h4>
        <ul className="flex flex-col gap-2">
          {job.responsibilities.map((r) => (
            <li key={r} className="flex items-start gap-2 text-sm text-dark2">
              <CheckCircle size={14} className="text-green mt-0.5 flex-shrink-0" />{r}
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-5">
        <h4 className="text-xs font-extrabold uppercase tracking-widest text-gray mb-3">Requirements</h4>
        <ul className="flex flex-col gap-2">
          {job.requirements.map((r) => (
            <li key={r} className="flex items-start gap-2 text-sm text-dark2">
              <div className="w-1.5 h-1.5 rounded-full bg-orange mt-2 flex-shrink-0" />{r}
            </li>
          ))}
        </ul>
      </div>
      {job.benefits && (
        <div className="mb-6">
          <h4 className="text-xs font-extrabold uppercase tracking-widest text-gray mb-3">Benefits</h4>
          <div className="flex flex-wrap gap-2">
            {job.benefits.map((b) => (
              <span key={b} className="text-xs px-3 py-1.5 bg-green-pale text-green-dark font-semibold rounded-full">✓ {b}</span>
            ))}
          </div>
        </div>
      )}
      <div className="text-xs text-gray-light mb-4">Deadline: {job.deadline} · Posted {job.posted}</div>
      <button onClick={onApply} className="w-full py-3.5 rounded-full text-sm font-bold text-white gradient-green shadow-lg hover:-translate-y-0.5 transition-all">
        Apply for This Position →
      </button>
    </div>
  );
}

export default function JobsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [type, setType] = useState("All Types");
  const [location, setLocation] = useState("All Locations");
  const [selectedJob, setSelectedJob] = useState<Job>(JOBS[0]);
  const [applyJob, setApplyJob] = useState<Job | null>(null);

  const filtered = useMemo(() => {
    return JOBS.filter((j) => {
      const q = search.toLowerCase();
      const matchSearch = !q || j.title.toLowerCase().includes(q) || j.company.toLowerCase().includes(q) || j.department.toLowerCase().includes(q);
      const matchCat = category === "All" || j.department === category;
      const matchType = type === "All Types" || j.type === type;
      const matchLoc = location === "All Locations" || j.location === location;
      return matchSearch && matchCat && matchType && matchLoc;
    });
  }, [search, category, type, location]);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-white via-bg2 to-green-pale pt-[120px] pb-14 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-pale border border-green/25 rounded-full px-3 py-1.5 text-xs font-bold text-green-dark mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-green animate-pulse-dot" />
                ERP HR Jobs Module · Live Data Feed
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold font-display text-dark leading-tight">
                Find Your Perfect <span className="gradient-text">Opportunity</span>
              </h1>
              <p className="text-gray mt-3 text-base max-w-md">
                Real-time vacancies sourced directly from our ERP system and partner companies across Ethiopia.
              </p>
            </div>
            <div className="flex flex-col items-end gap-2 flex-shrink-0">
              <Link href="#post-job" className="flex items-center gap-2 px-5 py-3 rounded-full text-sm font-bold text-white gradient-orange shadow-lg">
                + Post a Job
              </Link>
              <div className="text-xs text-gray-light">Last synced: <span className="text-green font-semibold">Just now</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Search bar */}
      <div className="bg-white border-b border-border shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex gap-3 flex-wrap">
            <div className="flex flex-1 min-w-[200px] items-center gap-2 bg-bg2 border border-border rounded-xl px-4 py-3 focus-within:border-green focus-within:bg-white transition-all">
              <Search size={16} className="text-gray-light flex-shrink-0" />
              <input className="bg-transparent text-sm text-dark placeholder-gray-light flex-1 outline-none"
                placeholder="Search job title, company, keyword..."
                value={search} onChange={(e) => setSearch(e.target.value)} />
              {search && <button onClick={() => setSearch("")}><X size={14} className="text-gray-light hover:text-dark" /></button>}
            </div>
            {[
              { val: location, set: setLocation, opts: LOCATIONS, icon: <MapPin size={14} className="text-gray-light flex-shrink-0" /> },
              { val: type, set: setType, opts: TYPES, icon: <Briefcase size={14} className="text-gray-light flex-shrink-0" /> },
            ].map((f, i) => (
              <div key={i} className="flex items-center gap-2 bg-bg2 border border-border rounded-xl px-4 py-3 min-w-[160px] focus-within:border-green transition-all">
                {f.icon}
                <select className="bg-transparent text-sm text-dark cursor-pointer outline-none" value={f.val} onChange={(e) => f.set(e.target.value)}>
                  {f.opts.map((o) => <option key={o}>{o}</option>)}
                </select>
              </div>
            ))}
            <button className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white gradient-green shadow-md">
              <Search size={15} /> Search
            </button>
          </div>
        </div>
      </div>

      {/* Main layout */}
      <div className="bg-bg2 min-h-screen">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex gap-4 flex-wrap mb-5">
            {CATEGORIES.map((c) => (
              <button key={c} onClick={() => setCategory(c)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${category === c ? "bg-green text-white shadow-md shadow-green/25" : "bg-white border border-border text-gray hover:border-green hover:text-green"}`}>
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6">
            {/* Jobs list */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm font-semibold text-dark">
                  <span className="text-green font-extrabold">{filtered.length}</span> positions found
                </div>
                <select className="bg-white border border-border rounded-lg px-3 py-2 text-sm text-dark cursor-pointer">
                  <option>Most Recent</option><option>Featured First</option>
                </select>
              </div>

              {filtered.length === 0 ? (
                <div className="bg-white border border-border rounded-2xl p-16 text-center">
                  <div className="text-5xl mb-4">🔍</div>
                  <h3 className="font-bold text-dark mb-2">No positions found</h3>
                  <p className="text-sm text-gray">Try adjusting your search or clearing the filters.</p>
                  <button onClick={() => { setSearch(""); setCategory("All"); setType("All Types"); setLocation("All Locations"); }}
                    className="mt-4 px-5 py-2.5 rounded-full text-sm font-bold text-white gradient-green">
                    Clear Filters
                  </button>
                </div>
              ) : (
                filtered.map((job) => (
                  <div key={job.id}
                    onClick={() => setSelectedJob(job)}
                    className={`bg-white border rounded-2xl p-5 mb-3 flex gap-4 cursor-pointer transition-all duration-200 ${selectedJob.id === job.id ? "border-green shadow-lg shadow-green/10" : "border-border hover:border-green hover:shadow-md hover:translate-x-0.5"} ${job.featured ? "border-l-4 border-l-green" : ""}`}>
                    <div className="w-12 h-12 rounded-xl bg-bg2 border border-border flex items-center justify-center text-2xl flex-shrink-0">
                      {job.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="font-bold text-dark text-[15px] flex items-center gap-2">
                            {job.title}
                            {job.featured && <span className="text-[10px] font-bold text-orange-dark bg-orange-pale px-2 py-0.5 rounded-full">⭐ Featured</span>}
                          </div>
                          <div className="text-sm text-gray mt-0.5">{job.company} · {job.location}</div>
                        </div>
                        <button className="w-8 h-8 rounded-lg bg-bg2 border border-border flex items-center justify-center text-sm hover:bg-orange hover:border-orange hover:text-white transition-all flex-shrink-0">
                          ♡
                        </button>
                      </div>
                      <p className="text-xs text-gray leading-relaxed my-2 line-clamp-2">{job.description}</p>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs px-2.5 py-1 rounded-full bg-orange-pale text-orange-dark font-bold">{job.type}</span>
                        <span className="text-xs px-2.5 py-1 rounded-full bg-green-pale text-green-dark font-semibold">📍 {job.location}</span>
                        <span className="text-xs px-2.5 py-1 rounded-full bg-bg3 text-gray font-semibold">💰 {job.salary}</span>
                        <span className="ml-auto text-xs text-gray-light">{job.posted}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Detail panel */}
            <div className="hidden lg:block">
              <JobDetail job={selectedJob} onApply={() => setApplyJob(selectedJob)} />
            </div>
          </div>
        </div>
      </div>

      {/* ═══ POST A JOB ═══ */}
      <section id="post-job" className="section-py bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="label"><div className="label-dot" /><span>For Employers</span></div>
              <h2 className="heading mt-2">Post a <span>Job Opening</span></h2>
              <p className="subheading mt-3">Partner companies can post vacancies directly — they sync to the Edomias ERP HR module automatically.</p>
              <div className="flex flex-col gap-4 mt-7">
                {[
                  { icon: "⚡", title: "Instant ERP Sync", desc: "Job posts go live in the ERP HR module immediately after review." },
                  { icon: "🎯", title: "Pre-Screened Candidates", desc: "We handle all screening — you only receive qualified applicants." },
                  { icon: "🔒", title: "Free Replacement Guarantee", desc: "Not satisfied in 3 months? We replace at no extra cost." },
                ].map((p) => (
                  <div key={p.title} className="flex gap-4 p-4 rounded-xl border border-border bg-white hover:border-green hover:shadow-sm transition-all">
                    <div className="w-10 h-10 rounded-xl bg-green-pale flex items-center justify-center text-lg flex-shrink-0">{p.icon}</div>
                    <div>
                      <h4 className="text-sm font-bold text-dark">{p.title}</h4>
                      <p className="text-xs text-gray mt-0.5">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-border rounded-3xl p-8 shadow-lg">
              <div className="flex items-center gap-4 bg-green-pale border border-green/20 rounded-2xl p-4 mb-7">
                <div className="w-11 h-11 rounded-xl gradient-green flex items-center justify-center text-xl flex-shrink-0">🔗</div>
                <div className="flex-1">
                  <div className="text-sm font-bold text-dark">ERP HR Jobs Module — Connected</div>
                  <div className="text-xs text-gray mt-0.5">Submissions sync automatically to the Edomias ERP system</div>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-green">
                  <div className="w-1.5 h-1.5 rounded-full bg-green animate-pulse-dot" />Live
                </div>
              </div>

              <PostJobForm />
            </div>
          </div>
        </div>
      </section>

      {/* Apply modal */}
      {applyJob && <ApplyModal job={applyJob} onClose={() => setApplyJob(null)} />}
    </>
  );
}

function PostJobForm() {
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);

  const STEPS = ["Job Details", "Requirements", "Contact"];

  if (done) return (
    <div className="text-center py-8">
      <div className="text-5xl mb-4">🎉</div>
      <h3 className="text-xl font-extrabold font-display text-dark mb-2">Job Submitted!</h3>
      <p className="text-sm text-gray mb-4">Your posting has been sent for review and will be synced to the ERP system within 2 business hours.</p>
      <div className="inline-flex items-center gap-2 bg-green-pale border border-green/25 rounded-full px-4 py-2 text-xs font-bold text-green-dark mb-5">
        <div className="w-1.5 h-1.5 rounded-full bg-green animate-pulse-dot" />
        ERP Sync Queued — Ref: ERP-2026-{Math.floor(Math.random() * 9000 + 1000)}
      </div>
      <br />
      <button onClick={() => { setDone(false); setStep(1); }} className="px-6 py-3 rounded-full text-sm font-bold text-white gradient-green shadow-lg">
        Post Another Job
      </button>
    </div>
  );

  return (
    <>
      {/* Step bar */}
      <div className="flex items-center mb-7">
        {STEPS.map((s, i) => (
          <>
            <div key={s} className="flex items-center gap-2">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${i < step - 1 ? "bg-green-dark text-white" : i === step - 1 ? "bg-green text-white" : "bg-bg2 border border-border text-gray"}`}>
                {i < step - 1 ? "✓" : i + 1}
              </div>
              <span className={`text-xs font-semibold hidden sm:block ${i === step - 1 ? "text-dark" : "text-gray"}`}>{s}</span>
            </div>
            {i < 2 && <div className="flex-1 h-px bg-border mx-2" />}
          </>
        ))}
      </div>

      {step === 1 && (
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-3">
            <div><label className="block text-xs font-bold uppercase tracking-wide text-gray mb-2">Job Title *</label>
              <input placeholder="e.g. Security Officer" className="w-full bg-bg2 border border-border rounded-xl px-4 py-3 text-sm text-dark focus:border-green focus:outline-none transition-all" /></div>
            <div><label className="block text-xs font-bold uppercase tracking-wide text-gray mb-2">Company *</label>
              <input placeholder="Organisation name" className="w-full bg-bg2 border border-border rounded-xl px-4 py-3 text-sm text-dark focus:border-green focus:outline-none transition-all" /></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div><label className="block text-xs font-bold uppercase tracking-wide text-gray mb-2">Category</label>
              <select className="w-full bg-bg2 border border-border rounded-xl px-4 py-3 text-sm text-dark cursor-pointer focus:border-green focus:outline-none transition-all">
                <option>Cleaning</option><option>Security</option><option>Landscaping</option><option>Skilled Labor</option><option>General Labor</option><option>HR & Recruitment</option>
              </select></div>
            <div><label className="block text-xs font-bold uppercase tracking-wide text-gray mb-2">Type</label>
              <select className="w-full bg-bg2 border border-border rounded-xl px-4 py-3 text-sm text-dark cursor-pointer focus:border-green focus:outline-none transition-all">
                <option>Full-time</option><option>Part-time</option><option>Contract</option>
              </select></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div><label className="block text-xs font-bold uppercase tracking-wide text-gray mb-2">Location</label>
              <input placeholder="e.g. Addis Ababa" className="w-full bg-bg2 border border-border rounded-xl px-4 py-3 text-sm text-dark focus:border-green focus:outline-none transition-all" /></div>
            <div><label className="block text-xs font-bold uppercase tracking-wide text-gray mb-2">Salary Range</label>
              <input placeholder="e.g. ETB 10,000–15,000" className="w-full bg-bg2 border border-border rounded-xl px-4 py-3 text-sm text-dark focus:border-green focus:outline-none transition-all" /></div>
          </div>
          <div><label className="block text-xs font-bold uppercase tracking-wide text-gray mb-2">Job Description *</label>
            <textarea rows={3} placeholder="Describe duties and responsibilities..." className="w-full bg-bg2 border border-border rounded-xl px-4 py-3 text-sm text-dark focus:border-green focus:outline-none transition-all resize-none" /></div>
          <button onClick={() => setStep(2)} className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full text-sm font-bold text-white gradient-green shadow-lg">
            Next <ArrowRight size={15} />
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="flex flex-col gap-4">
          <div><label className="block text-xs font-bold uppercase tracking-wide text-gray mb-2">Education Level</label>
            <select className="w-full bg-bg2 border border-border rounded-xl px-4 py-3 text-sm text-dark cursor-pointer focus:border-green focus:outline-none">
              <option>Any</option><option>High School</option><option>TVET/Vocational</option><option>Bachelor's Degree</option><option>Master's Degree</option>
            </select></div>
          <div><label className="block text-xs font-bold uppercase tracking-wide text-gray mb-2">Experience Required</label>
            <select className="w-full bg-bg2 border border-border rounded-xl px-4 py-3 text-sm text-dark cursor-pointer focus:border-green focus:outline-none">
              <option>No experience required</option><option>0–1 years</option><option>1–3 years</option><option>3–5 years</option><option>5+ years</option>
            </select></div>
          <div><label className="block text-xs font-bold uppercase tracking-wide text-gray mb-2">Key Requirements</label>
            <textarea rows={3} placeholder="List required skills or certifications..." className="w-full bg-bg2 border border-border rounded-xl px-4 py-3 text-sm text-dark focus:border-green focus:outline-none resize-none" /></div>
          <div><label className="block text-xs font-bold uppercase tracking-wide text-gray mb-2">Number of Positions</label>
            <input type="number" defaultValue={1} min={1} className="w-full bg-bg2 border border-border rounded-xl px-4 py-3 text-sm text-dark focus:border-green focus:outline-none" /></div>
          <div className="flex gap-3">
            <button onClick={() => setStep(1)} className="flex-1 py-3 rounded-full text-sm font-bold border-2 border-border text-dark hover:border-green hover:text-green transition-all">← Back</button>
            <button onClick={() => setStep(3)} className="flex-[2] flex items-center justify-center gap-2 py-3 rounded-full text-sm font-bold text-white gradient-green shadow-lg">Next <ArrowRight size={14} /></button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-3">
            <div><label className="block text-xs font-bold uppercase tracking-wide text-gray mb-2">Contact Person *</label>
              <input placeholder="Full name" className="w-full bg-bg2 border border-border rounded-xl px-4 py-3 text-sm text-dark focus:border-green focus:outline-none transition-all" /></div>
            <div><label className="block text-xs font-bold uppercase tracking-wide text-gray mb-2">Job Title</label>
              <input placeholder="e.g. HR Manager" className="w-full bg-bg2 border border-border rounded-xl px-4 py-3 text-sm text-dark focus:border-green focus:outline-none transition-all" /></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div><label className="block text-xs font-bold uppercase tracking-wide text-gray mb-2">Email *</label>
              <input type="email" placeholder="hr@company.com" className="w-full bg-bg2 border border-border rounded-xl px-4 py-3 text-sm text-dark focus:border-green focus:outline-none transition-all" /></div>
            <div><label className="block text-xs font-bold uppercase tracking-wide text-gray mb-2">Phone *</label>
              <input placeholder="+251..." className="w-full bg-bg2 border border-border rounded-xl px-4 py-3 text-sm text-dark focus:border-green focus:outline-none transition-all" /></div>
          </div>
          <div><label className="block text-xs font-bold uppercase tracking-wide text-gray mb-2">Application Deadline</label>
            <input type="date" className="w-full bg-bg2 border border-border rounded-xl px-4 py-3 text-sm text-dark focus:border-green focus:outline-none" /></div>
          <div className="flex gap-3">
            <button onClick={() => setStep(2)} className="flex-1 py-3 rounded-full text-sm font-bold border-2 border-border text-dark hover:border-green hover:text-green transition-all">← Back</button>
            <button onClick={() => setDone(true)} className="flex-[2] flex items-center justify-center gap-2 py-3 rounded-full text-sm font-bold text-white gradient-orange shadow-lg">
              Submit to ERP ↑
            </button>
          </div>
        </div>
      )}
    </>
  );
}
