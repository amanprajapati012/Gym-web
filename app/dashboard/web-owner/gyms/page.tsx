"use client";

import { 
  ShieldCheck, 
  Globe, 
  LayoutGrid, 
  Activity, 
  AlertCircle, 
  Map, 
  Database, 
  Server,
  Zap,
  Filter,
  Search,
  ArrowRight
} from "lucide-react";

export default function SaaSWebOwnerSections() {
  const gymSegments = [
    { name: "Active Licenses", count: "112", status: "Healthy", color: "text-green-500" },
    { name: "Trial Periods", count: "45", status: "Follow-up", color: "text-blue-500" },
    { name: "Expired/Churned", count: "08", status: "Critical", color: "text-red-500" },
    { name: "Global Traffic", count: "8.2k", status: "Live", color: "text-orange-500" },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white p-6 space-y-10">
      
      {/* 1. INFRASTRUCTURE HEALTH SECTION */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <Server className="text-orange-500" size={24} />
          <h2 className="text-2xl font-black italic uppercase tracking-tighter">System Infrastructure</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {gymSegments.map((seg, i) => (
            <div key={i} className="bg-[#0b1220] p-6 rounded-3xl border border-white/5 hover:border-orange-500/20 transition-all group">
              <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest">{seg.name}</p>
              <div className="flex items-baseline gap-2 mt-2">
                <h3 className="text-3xl font-black">{seg.count}</h3>
                <span className={`text-[10px] font-bold ${seg.color}`}>{seg.status}</span>
              </div>
              <div className="mt-4 h-1 bg-white/5 rounded-full overflow-hidden">
                <div className={`h-full bg-orange-500 w-[65%] group-hover:w-[80%] transition-all duration-700`} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. ALL GYMS DIRECTORY (Master List) */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-2">
            <LayoutGrid className="text-blue-500" size={24} />
            <h2 className="text-2xl font-black italic uppercase tracking-tighter">Global Gym Directory</h2>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
              <input 
                type="text" 
                placeholder="Search by Gym ID, Owner, or City..." 
                className="w-full bg-[#0b1220] border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-xs focus:outline-none focus:border-orange-500 transition"
              />
            </div>
            <button className="bg-[#0b1220] p-3 rounded-2xl border border-white/10 text-gray-400 hover:text-white">
              <Filter size={18} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {[
            { name: "Titan Fitness", id: "Z-1001", city: "Delhi", revenue: "₹4.2L", health: 98 },
            { name: "Muscle Factory", id: "Z-1002", city: "Mumbai", revenue: "₹2.8L", health: 85 },
            { name: "Yoga Soul", id: "Z-1003", city: "Bangalore", revenue: "₹1.5L", health: 72 },
            { name: "The Iron Room", id: "Z-1004", city: "Lucknow", revenue: "₹3.1L", health: 92 },
            { name: "Peak Performance", id: "Z-1005", city: "Pune", revenue: "₹5.6L", health: 100 },
            { name: "Genz Fitness", id: "Z-1006", city: "Fatehpur", revenue: "₹1.2L", health: 64 },
          ].map((gym, i) => (
            <div key={i} className="bg-[#0b1220] border border-white/5 rounded-[2rem] p-6 hover:translate-y-[-5px] transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Database size={80} />
              </div>
              
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h4 className="text-lg font-bold">{gym.name}</h4>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{gym.id} • {gym.city}</p>
                </div>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-xs ${gym.health > 90 ? 'bg-green-500/10 text-green-500' : 'bg-orange-500/10 text-orange-500'}`}>
                  {gym.health}%
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-black/40 p-3 rounded-2xl border border-white/5">
                  <p className="text-[10px] text-gray-500 font-bold uppercase">All-time Rev</p>
                  <p className="text-sm font-black">{gym.revenue}</p>
                </div>
                <div className="bg-black/40 p-3 rounded-2xl border border-white/5">
                  <p className="text-[10px] text-gray-500 font-bold uppercase">DB Status</p>
                  <p className="text-sm font-black text-green-400">Linked</p>
                </div>
              </div>

              <button className="w-full py-3 bg-white/5 hover:bg-orange-500 hover:text-black rounded-xl text-xs font-black uppercase tracking-tighter transition-all flex items-center justify-center gap-2">
                Manage Database <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PLATFORM LOGS & SECURITY */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* LOGS SECTION */}
        <div className="bg-[#0b1220] rounded-[2.5rem] border border-white/5 p-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold italic flex items-center gap-2">
              <Activity className="text-orange-500" size={20} /> Platform Activity
            </h3>
            <span className="text-[10px] font-bold text-gray-500 bg-white/5 px-3 py-1 rounded-full">Real-time</span>
          </div>
          <div className="space-y-4">
            {[
              { msg: "New Gym Registration: Peak Performance", time: "2 mins ago", icon: Zap },
              { msg: "Subscription Renewed: Gold's Gym", time: "15 mins ago", icon: ShieldCheck },
              { msg: "Database Backup Completed", time: "1 hour ago", icon: Database },
              { msg: "Failed Login Attempt: Titan Fitness", time: "3 hours ago", icon: AlertCircle },
            ].map((log, i) => (
              <div key={i} className="flex items-start gap-4 p-3 hover:bg-white/[0.02] rounded-2xl transition">
                <div className="p-2 bg-white/5 rounded-lg text-gray-400">
                  <log.icon size={16} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-300">{log.msg}</p>
                  <p className="text-[10px] text-gray-500 mt-1">{log.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* REVENUE DISTRIBUTION MAP (Placeholder Concept) */}
        <div className="bg-gradient-to-br from-[#0f172a] to-[#020617] rounded-[2.5rem] border border-white/5 p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold italic flex items-center gap-2 mb-2">
              <Map className="text-blue-500" size={20} /> Market Reach
            </h3>
            <p className="text-xs text-gray-500">Your SaaS is currently active in 12 major cities.</p>
          </div>
          
          <div className="py-10 flex flex-wrap gap-3">
             {["Delhi", "Mumbai", "Lucknow", "Bangalore", "Pune", "Fatehpur", "Patna", "Chennai"].map((city, i) => (
               <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest hover:border-orange-500 transition cursor-default">
                 {city}
               </span>
             ))}
          </div>

          <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-3xl">
            <h4 className="text-xs font-black uppercase text-blue-400 mb-1">Scale Strategy</h4>
            <p className="text-[10px] text-gray-400 leading-relaxed">
              Expand your Zyrafit marketing in Tier-2 cities. Data shows 40% growth potential in these regions.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}