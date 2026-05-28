"use client";
import { useState } from "react";
import Link from "next/link";
import { 
  LayoutDashboard, 
  Briefcase, 
  Clock, 
  Bell, 
  User, 
  Settings, 
  LogOut, 
  CheckCircle, 
  Timer, 
  FileText,
  ChevronRight,
  TrendingUp,
  Search
} from "lucide-react";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const APPLICATIONS = [
    { id: "APP-001", job: "Cleaning Supervisor", company: "East Africa Bottling", status: "In Review", date: "2 days ago", color: "blue" },
    { id: "APP-002", job: "Security Officer", company: "Huawei Technologies", status: "Interview Scheduled", date: "5 days ago", color: "orange" },
    { id: "APP-003", job: "Skilled Labor", company: "Lufthansa Airlines", status: "Completed", date: "2 weeks ago", color: "green" },
  ];

  return (
    <div className="min-h-screen bg-bg2 pt-[72px] flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex w-72 bg-white border-r border-border flex-col p-6 sticky top-[72px] h-[calc(100vh-72px)]">
        <div className="flex items-center gap-4 mb-10 p-2">
          <div className="w-12 h-12 rounded-2xl gradient-green flex items-center justify-center text-white text-xl font-bold font-display">JD</div>
          <div>
            <div className="font-bold text-dark text-sm">John Doe</div>
            <div className="text-[10px] text-gray uppercase tracking-widest font-bold">Candidate Profile</div>
          </div>
        </div>

        <nav className="flex flex-col gap-1 flex-1">
          {[
            { id: "overview", label: "Overview", icon: <LayoutDashboard size={18}/> },
            { id: "applications", label: "My Applications", icon: <Briefcase size={18}/> },
            { id: "interviews", label: "Interviews", icon: <Clock size={18}/> },
            { id: "notifications", label: "Notifications", icon: <Bell size={18}/> },
            { id: "profile", label: "My Profile", icon: <User size={18}/> },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${activeTab === item.id ? "bg-green-pale text-green-dark" : "text-gray hover:bg-bg2 hover:text-dark"}`}
            >
              {item.icon} {item.label}
            </button>
          ))}
        </nav>

        <div className="mt-auto flex flex-col gap-1 border-t border-border pt-6">
          <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-gray hover:bg-bg2 hover:text-dark transition-all">
            <Settings size={18}/> Settings
          </button>
          <Link href="/" className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-orange hover:bg-orange-pale transition-all">
            <LogOut size={18}/> Sign Out
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 lg:p-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div>
              <h1 className="text-2xl font-extrabold font-display text-dark">Welcome back, John!</h1>
              <p className="text-sm text-gray mt-1">Here's what's happening with your recruitment process.</p>
            </div>
            <div className="flex items-center gap-3">
               <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-light" size={16}/>
                  <input placeholder="Search applications..." className="pl-10 pr-4 py-2.5 bg-white border border-border rounded-xl text-sm focus:outline-none focus:border-green transition-all" />
               </div>
               <button className="p-2.5 bg-white border border-border rounded-xl text-gray hover:text-green hover:border-green transition-all relative">
                  <Bell size={20}/>
                  <div className="absolute top-2 right-2 w-2 h-2 bg-orange rounded-full border-2 border-white"/>
               </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { label: "Active Applications", value: "3", icon: <Briefcase/>, color: "bg-green", trend: "+1 this week" },
              { label: "Interviews", value: "1", icon: <Clock/>, color: "bg-orange", trend: "Upcoming: Friday" },
              { label: "Profile Score", value: "85%", icon: <TrendingUp/>, color: "bg-dark", trend: "Complete your skills" }
            ].map((stat, i) => (
              <div key={i} className="bg-white border border-border rounded-3xl p-6 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-xl ${stat.color} text-white flex items-center justify-center`}>{stat.icon}</div>
                  <div className="text-[10px] font-bold text-green uppercase tracking-wide">{stat.trend}</div>
                </div>
                <div className="text-3xl font-extrabold text-dark font-display">{stat.value}</div>
                <div className="text-sm text-gray mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Applications Table */}
          <div className="bg-white border border-border rounded-3xl overflow-hidden shadow-sm">
             <div className="p-6 border-b border-border flex items-center justify-between">
                <h3 className="font-bold text-dark">Recent Applications</h3>
                <Link href="/jobs" className="text-xs font-bold text-green hover:underline">Browse More Jobs</Link>
             </div>
             <div className="overflow-x-auto">
                <table className="w-full text-left">
                   <thead className="bg-bg2 text-[10px] uppercase tracking-widest font-bold text-gray">
                      <tr>
                         <th className="px-6 py-4">Application ID</th>
                         <th className="px-6 py-4">Job / Company</th>
                         <th className="px-6 py-4">Status</th>
                         <th className="px-6 py-4">Date Applied</th>
                         <th className="px-6 py-4">Actions</th>
                      </tr>
                   </thead>
                   <tbody className="divide-y divide-border">
                      {APPLICATIONS.map((app) => (
                         <tr key={app.id} className="hover:bg-bg2/50 transition-colors">
                            <td className="px-6 py-6 text-xs font-bold text-dark">{app.id}</td>
                            <td className="px-6 py-6">
                               <div className="font-bold text-dark text-[13px]">{app.job}</div>
                               <div className="text-xs text-gray">{app.company}</div>
                            </td>
                            <td className="px-6 py-6 font-bold">
                               <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] ${
                                  app.status === 'Completed' ? 'bg-green-pale text-green-dark' : 
                                  app.status === 'Interview Scheduled' ? 'bg-orange-pale text-orange-dark' : 
                                  'bg-blue-50 text-blue-600'
                               }`}>
                                  <div className={`w-1 h-1 rounded-full ${
                                     app.status === 'Completed' ? 'bg-green' : 
                                     app.status === 'Interview Scheduled' ? 'bg-orange' : 
                                     'bg-blue-600'
                                  }`}/>
                                  {app.status}
                               </div>
                            </td>
                            <td className="px-6 py-6 text-xs text-gray">{app.date}</td>
                            <td className="px-6 py-6">
                               <button className="w-8 h-8 rounded-lg bg-bg2 border border-border flex items-center justify-center text-gray hover:text-green hover:border-green transition-all">
                                  <ChevronRight size={14}/>
                                </button>
                            </td>
                         </tr>
                      ))}
                   </tbody>
                </table>
             </div>
          </div>

          {/* Next Steps / Notifications */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
             <div className="bg-white border border-border rounded-3xl p-8">
                <h3 className="font-bold text-dark mb-6">Upcoming Interview</h3>
                <div className="bg-orange-pale border border-orange/10 rounded-2xl p-6 relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-4 opacity-10"><Clock size={64}/></div>
                   <div className="relative">
                      <div className="text-xs font-bold text-orange-dark uppercase tracking-widest mb-4">Zoom Meeting</div>
                      <h4 className="text-lg font-bold text-dark mb-1">Security Officer Interview</h4>
                      <p className="text-sm text-gray mb-4">Huawei Technologies Ethiopia</p>
                      <div className="flex items-center gap-6 mb-6">
                         <div>
                            <div className="text-[10px] uppercase font-bold text-gray-light">Date</div>
                            <div className="text-sm font-bold text-dark">Friday, May 29</div>
                         </div>
                         <div>
                            <div className="text-[10px] uppercase font-bold text-gray-light">Time</div>
                            <div className="text-sm font-bold text-dark">10:30 AM</div>
                         </div>
                      </div>
                      <button className="px-6 py-2.5 bg-orange text-white text-xs font-bold rounded-full shadow-lg shadow-orange/20">Join Meeting</button>
                   </div>
                </div>
             </div>

             <div className="bg-white border border-border rounded-3xl p-8">
                <h3 className="font-bold text-dark mb-6">Profile Completion</h3>
                <div className="flex flex-col gap-4">
                   {[
                     { l: "Basic Information", s: true },
                     { l: "Upload Latest CV", s: true },
                     { l: "Experience Details", s: true },
                     { l: "Skills & Certifications", s: false },
                     { l: "Portfolio / LinkedIn", s: false }
                   ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-bg2 rounded-xl">
                         <div className="flex items-center gap-3">
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${item.s ? 'bg-green text-white' : 'bg-white border border-border text-gray-light'}`}>
                               {item.s ? '✓' : ''}
                            </div>
                            <span className={`text-xs font-semibold ${item.s ? 'text-dark' : 'text-gray'}`}>{item.l}</span>
                         </div>
                         {!item.s && <button className="text-[10px] font-bold text-green hover:underline">Add Now</button>}
                      </div>
                   ))}
                </div>
                <div className="mt-6 flex items-center gap-4">
                   <div className="flex-1 h-2 bg-bg2 rounded-full overflow-hidden">
                      <div className="w-[85%] h-full gradient-green"/>
                   </div>
                   <span className="text-xs font-bold text-dark">85%</span>
                </div>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function TrendingUp(props: any) {
  return (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
  );
}
