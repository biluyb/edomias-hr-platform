"use client";
import { useState } from "react";
import { LayoutDashboard, Briefcase, Clock, Bell, User, Settings, LogOut, ChevronRight, Activity } from "lucide-react";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-[var(--bg-secondary)] pt-16 flex">
      {/* Sidebar - Minimalist */}
      <aside className="hidden lg:flex w-64 bg-[var(--bg-primary)] border-r border-[var(--border-color)] flex-col p-6 sticky top-16 h-[calc(100vh-64px)]">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-xl gradient-green flex items-center justify-center font-bold text-white tracking-tighter">JD</div>
          <div>
            <div className="font-bold text-sm">John Doe</div>
            <div className="text-[9px] text-[var(--text-muted)] uppercase tracking-widest font-bold">Candidate App</div>
          </div>
        </div>

        <nav className="flex flex-col gap-1 flex-1">
          {[
            { id: "overview", label: "Analytics", icon: <Activity size={16}/> },
            { id: "applications", label: "Applications", icon: <Briefcase size={16}/> },
            { id: "interviews", label: "Schedules", icon: <Clock size={16}/> },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-xs font-bold transition-all ${activeTab === item.id ? "bg-[var(--accent-pale)] text-[var(--brand-primary)]" : "text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"}`}
            >
              {item.icon} {item.label}
            </button>
          ))}
        </nav>

        <div className="mt-auto border-t border-[var(--border-color)] pt-6 space-y-1">
          <button className="flex items-center gap-3 px-4 py-2 text-xs font-bold text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-all w-full text-left">
            <Settings size={16}/> Preferences
          </button>
          <button className="flex items-center gap-3 px-4 py-2 text-xs font-bold text-[var(--brand-secondary)] hover:bg-[var(--brand-secondary)]/5 transition-all w-full text-left">
            <LogOut size={16}/> Terminate Session
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 lg:p-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <h1 className="text-2xl font-bold">Portal Insights</h1>
            <p className="text-xs text-[var(--text-muted)] mt-1 font-semibold uppercase tracking-wider">Metrics and Application Status</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { label: "Active Tracking", value: "3", color: "text-[var(--brand-primary)]" },
              { label: "Interview Cycles", value: "1", color: "text-[var(--brand-secondary)]" },
              { label: "Profile Integrity", value: "85%", color: "text-[var(--text-primary)]" }
            ].map((stat, i) => (
              <div key={i} className="card p-6">
                <div className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider mb-2">{stat.label}</div>
                <div className={`text-3xl font-display font-extrabold ${stat.color}`}>{stat.value}</div>
              </div>
            ))}
          </div>

          <div className="card overflow-hidden">
            <div className="p-6 border-b border-[var(--border-color)] bg-[var(--bg-secondary)]/50 flex justify-between items-center">
               <h3 className="text-sm font-bold">Transaction History</h3>
               <span className="text-[9px] font-bold text-[var(--text-muted)] uppercase tracking-widest">Encrypted Logs</span>
            </div>
            <div className="divide-y divide-[var(--border-color)]">
               {[
                 { id: "TX-901", job: "Cleaning Supervisor", status: "Evaluation" },
                 { id: "TX-902", job: "Security Systems", status: "Interview" },
                 { id: "TX-903", job: "General Logistics", status: "Closed" }
               ].map(tx => (
                 <div key={tx.id} className="p-4 flex items-center justify-between hover:bg-[var(--bg-secondary)] transition-colors">
                    <div className="flex gap-4 items-center">
                       <div className="text-[10px] font-bold text-[var(--text-muted)] bg-[var(--bg-tertiary)] px-2 py-1 rounded">{tx.id}</div>
                       <div>
                          <div className="text-xs font-bold">{tx.job}</div>
                          <div className="text-[10px] text-[var(--text-muted)] uppercase font-bold tracking-tight">Status: {tx.status}</div>
                       </div>
                    </div>
                    <ChevronRight size={14} className="text-[var(--text-muted)]" />
                 </div>
               ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
