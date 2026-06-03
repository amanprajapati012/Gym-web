"use client";

import {
  LayoutDashboard,
  Building2,
  Users,
  CreditCard,
  Zap,
  Globe,
  ShieldCheck,
  Server,
  Activity,
  ArrowUpRight,
  Plus,
  Search,
  MoreHorizontal
} from "lucide-react";

export default function SaaSAdminDashboard() {
  const platformsStats = [
    { label: "Total Gyms", value: "128", growth: "+12", icon: Building2, color: "text-blue-500" },
    { label: "Total Users", value: "14.2k", growth: "+850", icon: Users, color: "text-orange-500" },
    { label: "Monthly MRR", value: "₹8.5L", growth: "+15%", icon: CreditCard, color: "text-green-500" },
    { label: "Server Uptime", value: "99.9%", growth: "Stable", icon: Server, color: "text-purple-500" },
  ];

  const recentGyms = [
    { name: "Power House Gym", owner: "Amit Negi", plan: "Enterprise", status: "Active", revenue: "₹45k" },
    { name: "Gold's Fitness", owner: "Sumit Vyas", plan: "Pro", status: "Active", revenue: "₹22k" },
    { name: "Iron Paradise", owner: "Karan Singh", plan: "Basic", status: "Expired", revenue: "₹0" },
    { name: "Oxygen Gym", owner: "Neha Dixit", plan: "Enterprise", status: "Active", revenue: "₹45k" },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white p-6 space-y-8">
      
      {/* SUPER ADMIN HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Zap className="text-orange-500 fill-orange-500" size={20} />
            <span className="text-xs font-black uppercase tracking-[0.3em] text-orange-500">SaaS Command Center</span>
          </div>
          <h1 className="text-4xl font-black italic tracking-tighter">ZYRAFIT <span className="text-gray-500">SUPER-ADMIN</span></h1>
        </div>
        
        <div className="flex items-center gap-4 bg-[#0b1220] p-2 rounded-2xl border border-white/5">
          <div className="flex items-center gap-3 px-4">
            <Activity className="text-green-500 animate-pulse" size={18} />
            <div className="text-right">
              <p className="text-[10px] text-gray-500 font-bold uppercase">System Status</p>
              <p className="text-xs font-bold text-green-400">All Systems Operational</p>
            </div>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 p-3 rounded-xl transition shadow-lg shadow-orange-500/20">
            <Plus size={20} className="text-black stroke-[3px]" />
          </button>
        </div>
      </div>

      {/* PLATFORM WIDE METRICS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {platformsStats.map((stat, i) => (
          <div key={i} className="bg-[#0b1220] p-6 rounded-[2.5rem] border border-white/5 relative group hover:border-white/20 transition-all">
            <div className={`p-3 rounded-2xl bg-white/5 w-fit mb-4 ${stat.color}`}>
              <stat.icon size={24} />
            </div>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">{stat.label}</p>
            <div className="flex items-end justify-between mt-1">
              <h2 className="text-3xl font-black">{stat.value}</h2>
              <span className="text-[10px] font-bold text-green-400 bg-green-500/10 px-2 py-1 rounded-lg">
                {stat.growth}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* GYM MANAGEMENT TABLE */}
        <div className="lg:col-span-2 bg-[#0b1220] rounded-[3rem] border border-white/5 overflow-hidden">
          <div className="p-8 border-b border-white/5 flex justify-between items-center">
            <h3 className="text-xl font-bold italic flex items-center gap-2">
              <Building2 className="text-orange-500" size={20} /> Registered Gyms
            </h3>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={14} />
              <input 
                type="text" 
                placeholder="Search Gym or Owner..." 
                className="bg-[#020617] border border-white/10 rounded-full py-2 pl-10 pr-4 text-xs focus:outline-none focus:border-orange-500 w-64"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-black/20 text-[10px] text-gray-500 font-black uppercase tracking-widest">
                <tr>
                  <th className="px-8 py-4">Gym Name</th>
                  <th className="px-8 py-4">Owner</th>
                  <th className="px-8 py-4">Plan</th>
                  <th className="px-8 py-4">Status</th>
                  <th className="px-8 py-4 text-right">Revenue</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {recentGyms.map((gym, i) => (
                  <tr key={i} className="hover:bg-white/[0.02] transition group">
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center font-bold text-orange-500">
                          {gym.name[0]}
                        </div>
                        <p className="font-bold text-sm">{gym.name}</p>
                      </div>
                    </td>
                    <td className="px-8 py-5 text-sm text-gray-400">{gym.owner}</td>
                    <td className="px-8 py-5">
                      <span className={`text-[10px] font-black px-2 py-1 rounded-md border ${
                        gym.plan === 'Enterprise' ? 'border-purple-500/30 text-purple-400 bg-purple-500/5' : 'border-blue-500/30 text-blue-400 bg-blue-500/5'
                      }`}>
                        {gym.plan}
                      </span>
                    </td>
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${gym.status === 'Active' ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]' : 'bg-red-500'}`} />
                        <span className="text-xs font-medium">{gym.status}</span>
                      </div>
                    </td>
                    <td className="px-8 py-5 text-right font-black text-sm">{gym.revenue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button className="w-full py-5 text-[10px] font-black text-gray-500 hover:text-white border-t border-white/5 tracking-[0.2em] transition-all">
            VIEW ALL REGISTERED ENTITIES
          </button>
        </div>

        {/* SIDEBAR ANALYTICS */}
        <div className="space-y-8">
          
          {/* SUBSCRIPTION MIX */}
          <div className="bg-[#0b1220] p-8 rounded-[3rem] border border-white/5">
            <h3 className="font-bold italic mb-6">Subscription Mix</h3>
            <div className="space-y-6">
              {[
                { label: "Basic (Free/Cheap)", val: 20, color: "bg-blue-500" },
                { label: "Pro (Growth)", val: 55, color: "bg-orange-500" },
                { label: "Enterprise (Custom)", val: 25, color: "bg-purple-500" },
              ].map((p, i) => (
                <div key={i}>
                  <div className="flex justify-between text-[10px] font-black uppercase mb-2">
                    <span className="text-gray-500">{p.label}</span>
                    <span>{p.val}%</span>
                  </div>
                  <div className="h-1.5 bg-black rounded-full overflow-hidden">
                    <div className={`h-full ${p.color} rounded-full`} style={{ width: `${p.val}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SERVER & API HEALTH */}
          <div className="bg-[#0b1220] p-8 rounded-[3rem] border border-white/5 relative overflow-hidden">
             <div className="flex items-center gap-3 mb-6">
                <Globe className="text-blue-400" size={20} />
                <h3 className="font-bold italic">Global Traffic</h3>
             </div>
             <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-2xl border border-white/5">
                    <span className="text-xs text-gray-400">API Latency</span>
                    <span className="text-xs font-black text-green-400">24ms</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-2xl border border-white/5">
                    <span className="text-xs text-gray-400">Storage Used</span>
                    <span className="text-xs font-black text-orange-400">42%</span>
                </div>
             </div>
          </div>

          {/* ADMIN CALL TO ACTION */}
          <div className="bg-gradient-to-br from-orange-600 to-red-700 p-8 rounded-[3rem] shadow-2xl shadow-orange-500/20">
            <h3 className="text-2xl font-black italic uppercase leading-none">Security<br/>Audit Required</h3>
            <p className="text-sm text-white/70 mt-3 font-medium">3 gyms have failed their last payment cycle. Review and suspend access?</p>
            <button className="mt-6 w-full py-3 bg-black text-white rounded-2xl text-xs font-black uppercase hover:bg-white hover:text-black transition-all">
              Launch Review
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}