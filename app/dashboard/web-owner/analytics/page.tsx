"use client";

import {
  Activity,
  Users,
  MousePointer2,
  Clock,
  Globe2,
  Zap,
  HardDrive,
  Cpu,
  ArrowUpRight,
  MonitorSmartphone,
  ShieldCheck,
  Search
} from "lucide-react";

export default function SaaSAnalytics() {
  const performanceLogs = [
    { metric: "Avg. Session Time", value: "18m 42s", change: "+12%", status: "Good" },
    { metric: "Peak Concurrent Users", value: "1,240", change: "+5.2%", status: "Stable" },
    { metric: "Feature Usage (Attendance)", value: "88%", change: "+2%", status: "High" },
    { metric: "Mobile App Installs", value: "4.8k", change: "+18%", status: "Excellent" },
  ];

  return (
    <div className="space-y-8 text-white p-2">
      
      {/* ANALYTICS HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black italic tracking-tighter uppercase">Platform Analytics</h1>
          <p className="text-gray-400 text-sm italic">Tracking user behavior and system performance across Zyrafit Node-1.</p>
        </div>
        <div className="flex items-center gap-2 bg-[#0b1220] px-4 py-2 rounded-2xl border border-white/5">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-widest text-green-400">Live Data Feed</span>
        </div>
      </div>

      {/* BEHAVIORAL METRICS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {performanceLogs.map((log, i) => (
          <div key={i} className="bg-[#0b1220] p-6 rounded-[2.5rem] border border-white/5 group hover:bg-white/[0.02] transition-all">
            <div className="flex justify-between items-start mb-4">
               <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest">{log.metric}</p>
               <span className="text-[10px] font-bold text-blue-400">{log.status}</span>
            </div>
            <div className="flex items-end justify-between">
              <h2 className="text-3xl font-black">{log.value}</h2>
              <div className="flex items-center text-xs font-bold text-green-400">
                {log.change} <ArrowUpRight size={14} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* TRAFFIC & USAGE GRAPH (VISUAL CONCEPT) */}
        <div className="lg:col-span-2 bg-[#0b1220] rounded-[3rem] border border-white/5 p-8 relative overflow-hidden">
          <div className="flex justify-between items-center mb-10">
            <h3 className="text-xl font-bold italic flex items-center gap-2 uppercase tracking-tighter">
              <Activity className="text-orange-500" size={20} /> User Activity Heatmap
            </h3>
            <select className="bg-black/50 border border-white/10 rounded-xl px-3 py-1 text-[10px] font-bold outline-none">
               <option>Daily View</option>
               <option>Weekly View</option>
            </select>
          </div>

          {/* SIMULATED AREA CHART USING CSS */}
          <div className="h-64 flex items-end w-full relative group">
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <Users size={150} />
            </div>
            <div className="w-full h-full flex items-end gap-[2px]">
              {Array.from({ length: 48 }).map((_, i) => (
                <div 
                  key={i} 
                  className="flex-1 bg-gradient-to-t from-orange-500/20 to-orange-500 rounded-t-sm hover:from-white hover:to-white transition-all cursor-crosshair"
                  style={{ height: `${Math.random() * 80 + 20}%` }}
                />
              ))}
            </div>
          </div>
          <div className="mt-4 flex justify-between text-[10px] text-gray-600 font-black uppercase tracking-[0.3em]">
             <span>00:00 AM</span>
             <span>12:00 PM</span>
             <span>11:59 PM</span>
          </div>
        </div>

        {/* SERVER LOAD & STATUS SIDEBAR */}
        <div className="space-y-6">
          <div className="bg-[#0b1220] p-8 rounded-[3rem] border border-white/5">
             <h3 className="text-lg font-bold italic mb-6 flex items-center gap-2">
                <HardDrive className="text-blue-500" size={18} /> Resource Usage
             </h3>
             <div className="space-y-6">
                <div>
                   <div className="flex justify-between text-[10px] font-black uppercase mb-2">
                      <span className="text-gray-500">Database Load</span>
                      <span className="text-blue-400">42%</span>
                   </div>
                   <div className="h-1 bg-black rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 w-[42%]" />
                   </div>
                </div>
                <div>
                   <div className="flex justify-between text-[10px] font-black uppercase mb-2">
                      <span className="text-gray-500">CPU (Node-1)</span>
                      <span className="text-orange-500">28%</span>
                   </div>
                   <div className="h-1 bg-black rounded-full overflow-hidden">
                      <div className="h-full bg-orange-500 w-[28%]" />
                   </div>
                </div>
             </div>
          </div>

          <div className="bg-gradient-to-br from-[#020617] to-[#0f172a] p-8 rounded-[3rem] border border-white/5">
             <div className="flex items-center gap-3 mb-6">
                <Globe2 className="text-purple-500 font-bold" size={20} />
                <h3 className="text-lg font-bold italic">Top Regions</h3>
             </div>
             <div className="space-y-4">
                {[
                  { city: "New Delhi", count: "4.2k" },
                  { city: "Mumbai", count: "3.1k" },
                  { city: "Fatehpur", count: "1.8k" }
                ].map((region, i) => (
                  <div key={i} className="flex justify-between items-center text-sm font-medium">
                    <span className="text-gray-400">{region.city}</span>
                    <span className="font-black text-white">{region.count}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>

      </div>

      {/* FEATURE POPULARITY LIST */}
      <div className="bg-[#0b1220] rounded-[3rem] border border-white/5 p-8">
        <h3 className="text-xl font-bold italic mb-8 uppercase tracking-tighter">Feature Engagement Audit</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Attendance QR", score: 94, icon: Zap, color: "text-yellow-500" },
            { name: "Payment Invoicing", score: 78, icon: ShieldCheck, color: "text-green-500" },
            { name: "Trainer Dashboard", score: 62, icon: MonitorSmartphone, color: "text-blue-500" },
          ].map((feature, i) => (
            <div key={i} className="flex items-center gap-6 p-4 rounded-3xl bg-white/[0.02] border border-white/5 group hover:border-white/10 transition-all">
              <div className={`p-4 rounded-2xl bg-black/50 ${feature.color}`}>
                <feature.icon size={24} />
              </div>
              <div>
                <h4 className="font-bold text-sm">{feature.name}</h4>
                <p className="text-xs text-gray-500 font-bold">{feature.score}% Adoption</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}