"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, ShieldCheck } from "lucide-react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="bg-[var(--bg-secondary)] min-h-screen pt-32 pb-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Metadata & Info */}
          <div className="lg:col-span-5">
             <span className="text-[10px] font-bold text-[var(--brand-primary)] uppercase tracking-wider">Inquiry Gateway</span>
             <h1 className="text-4xl font-display font-extrabold mt-4 mb-6">Partner with <span className="text-[var(--brand-primary)]">Edomias</span></h1>
             <p className="text-[var(--text-secondary)] leading-relaxed mb-12">
                Connect with our strategic relations team to discuss institutional staffing, facility management, or compliance auditing requirements.
             </p>

             <div className="space-y-8">
                <div className="flex gap-4">
                   <div className="w-10 h-10 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] flex items-center justify-center text-[var(--brand-primary)]">
                      <MapPin size={20} />
                   </div>
                   <div>
                      <h4 className="text-sm font-bold">Addis Ababa HQ</h4>
                      <p className="text-xs text-[var(--text-secondary)]">Mexico Square, K Kare Building, 5th Floor</p>
                   </div>
                </div>
                <div className="flex gap-4">
                   <div className="w-10 h-10 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] flex items-center justify-center text-[var(--brand-primary)]">
                      <Phone size={20} />
                   </div>
                   <div>
                      <h4 className="text-sm font-bold">Operations Support</h4>
                      <p className="text-xs text-[var(--text-secondary)]">+251 115 50 79 05</p>
                   </div>
                </div>
                <div className="flex gap-4">
                   <div className="w-10 h-10 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] flex items-center justify-center text-[var(--brand-primary)]">
                      <Mail size={20} />
                   </div>
                   <div>
                      <h4 className="text-sm font-bold">Email Communications</h4>
                      <p className="text-xs text-[var(--text-secondary)]">info@hroutsourcingethiopia.net</p>
                   </div>
                </div>
             </div>
          </div>

          {/* Secure Form */}
          <div className="lg:col-span-7">
             <div className="card p-8 md:p-12">
                {sent ? (
                  <div className="text-center py-12">
                     <div className="w-16 h-16 rounded-full bg-[var(--accent-pale)] text-[var(--brand-primary)] flex items-center justify-center mx-auto mb-6">
                        <CheckCircle size={32} />
                     </div>
                     <h3 className="text-xl font-bold mb-2">Inquiry Received</h3>
                     <p className="text-sm text-[var(--text-secondary)] max-w-xs mx-auto">Our strategic relations team will contact you within one business cycle.</p>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-6">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                           <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">Full Name</label>
                           <input required placeholder="Enter name" className="w-full p-4 text-xs bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl focus:outline-none focus:border-[var(--brand-primary)]" />
                        </div>
                        <div className="space-y-2">
                           <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">Corporate Email</label>
                           <input required type="email" placeholder="email@company.com" className="w-full p-4 text-xs bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl focus:outline-none focus:border-[var(--brand-primary)]" />
                        </div>
                     </div>
                     <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">Area of Interest</label>
                        <select className="w-full p-4 text-xs bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl focus:outline-none focus:border-[var(--brand-primary)] appearance-none cursor-pointer">
                           <option>Staffing & Outsourcing</option>
                           <option>Facility Management</option>
                           <option>Compliance Auditing</option>
                           <option>General Support</option>
                        </select>
                     </div>
                     <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)]">Message Brief</label>
                        <textarea rows={5} placeholder="Describe your requirements..." className="w-full p-4 text-xs bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl focus:outline-none focus:border-[var(--brand-primary)] resize-none" />
                     </div>
                     <button type="submit" className="btn btn-primary w-full gap-2">
                        Submit Inquiry <Send size={16} />
                     </button>
                  </form>
                )}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
