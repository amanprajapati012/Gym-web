"use client";

import {
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  CreditCard,
  BarChart3,
  Calendar,
  Download,
  Percent,
  Wallet,
  Zap,
  ChevronRight
} from "lucide-react";

export default function SaaSRevenueDashboard() {
  const revenueStats = [
    { label: "Platform MRR", value: "₹8,50,000", growth: "+12.5%", color: "text-green-500" },
    { label: "Annual Revenue", value: "₹1.2Cr", growth: "+8%", color: "text-blue-500" },
    { label: "Avg. Revenue/Gym", value: "₹6,640", growth: "+2.4%", color: "text-orange-500" },
    { label: "Net Profit (After Server Cost)", value: "₹6,80,000", growth: "+15%", color: "text-purple-500" },
  ];

  return (
    <div className="space-y-8 text-white p-2">
      
      {/* FINANCIAL HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black italic tracking-tighter uppercase">Revenue Analytics</h1>
          <p className="text-gray-400 text-sm">Real-time financial performance across all registered gym licenses.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-[#0b1220] border border-white/10 px-5 py-2.5 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-white/5 transition flex items-center gap-2">
            <Download size={16} /> Tax Reports
          </button>
          <button className="bg-orange-500 text-black px-5 py-2.5 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-orange-600 transition flex items-center gap-2 shadow-lg shadow-orange-500/20">
            <Calendar size={16} /> Filter Date
          </button>
        </div>
      </div>

      {/* REVENUE KPI GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {revenueStats.map((stat, i) => (
          <div key={i} className="bg-[#0b1220] p-6 rounded-[2.5rem] border border-white/5 relative group overflow-hidden">
            <div className="absolute -right-2 -top-2 opacity-5 group-hover:opacity-10 transition-opacity">
              <TrendingUp size={80} />
            </div>
            <p className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em] mb-2">{stat.label}</p>
            <div className="flex items-end justify-between">
              <h2 className="text-2xl font-black">{stat.value}</h2>
              <span className={`text-[10px] font-bold px-2 py-1 rounded-lg bg-white/5 ${stat.color} flex items-center gap-1`}>
                <ArrowUpRight size={10} /> {stat.growth}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* REVENUE BY SUBSCRIPTION TIER */}
        <div className="lg:col-span-2 bg-[#0b1220] rounded-[3rem] border border-white/5 p-8">
          <div className="flex justify-between items-center mb-10">
            <h3 className="text-xl font-bold italic flex items-center gap-2">
              <BarChart3 className="text-orange-500" size={20} /> Revenue by Plan Tier
            </h3>
            <div className="flex gap-2">
               <div className="flex items-center gap-2 text-[10px] text-gray-500 uppercase font-black">
                 <span className="w-2 h-2 rounded-full bg-orange-500"></span> Enterprise
               </div>
               <div className="flex items-center gap-2 text-[10px] text-gray-500 uppercase font-black">
                 <span className="w-2 h-2 rounded-full bg-blue-500"></span> Pro
               </div>
            </div>
          </div>

          {/* CUSTOM BAR GRAPH CONCEPT */}
          <div className="h-64 flex items-end gap-4 px-4 border-b border-white/5 pb-2">
            {[60, 85, 45, 95, 70, 80, 100].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2 group cursor-pointer">
                <div className="w-full flex items-end gap-1 h-full">
                   <div className="flex-1 bg-blue-500/40 group-hover:bg-blue-500 transition-all rounded-t-md" style={{ height: `${h * 0.4}%` }}></div>
                   <div className="flex-1 bg-orange-500/40 group-hover:bg-orange-500 transition-all rounded-t-md" style={{ height: `${h}%` }}></div>
                </div>
                <span className="text-[10px] text-gray-600 font-bold uppercase">Oct {20+i}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-between items-center text-xs text-gray-500">
             <p>Average conversion from Basic to Pro: <span className="text-green-400 font-bold">14%</span></p>
             <button className="text-orange-500 font-bold hover:underline">View Detailed Breakdown</button>
          </div>
        </div>

        {/* CHURN & PAYOUTS SIDEBAR */}
        <div className="space-y-6">
          <div className="bg-[#0b1220] p-8 rounded-[3rem] border border-white/5">
             <h3 className="text-lg font-bold italic mb-6">Churn Analytics</h3>
             <div className="flex items-center justify-between p-4 bg-red-500/5 border border-red-500/10 rounded-2xl mb-4">
                <div>
                   <p className="text-[10px] text-red-400 font-black uppercase">Churn Rate</p>
                   <h4 className="text-xl font-black">3.2%</h4>
                </div>
                <ArrowDownRight className="text-green-500" /> {/* Churn down is good, so green */}
             </div>
             <p className="text-[10px] text-gray-500 leading-relaxed italic">
                *3.2% of gyms did not renew their license last month. Primary reason: Business Closure.
             </p>
          </div>

          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-8 rounded-[3rem] shadow-2xl shadow-indigo-500/20 relative overflow-hidden group">
            <Zap className="absolute -right-4 -bottom-4 text-white/10" size={120} />
            <h3 className="text-xl font-black italic text-white uppercase leading-tight">Payout<br/>Gateway</h3>
            <p className="text-xs text-white/70 mt-3 font-medium">Ready to transfer your platform share to your bank account?</p>
            <div className="mt-6">
               <p className="text-[10px] text-white/50 uppercase font-bold tracking-widest">Available Balance</p>
               <h2 className="text-3xl font-black">₹3,42,000</h2>
            </div>
            <button className="mt-6 w-full py-3 bg-white text-indigo-600 rounded-2xl text-[10px] font-black uppercase hover:scale-105 transition-all">
              Withdraw Funds
            </button>
          </div>
        </div>

      </div>

      {/* RECENT SETTLEMENTS TABLE */}
      <div className="bg-[#0b1220] rounded-[3rem] border border-white/5 overflow-hidden">
        <div className="p-8 border-b border-white/5">
           <h3 className="text-xl font-bold italic uppercase tracking-tighter">Recent Subscription Payments</h3>
        </div>
        <table className="w-full text-left">
           <thead className="bg-black/20 text-[10px] text-gray-500 font-black uppercase tracking-[0.2em]">
              <tr>
                 <th className="px-8 py-4">Gym Client</th>
                 <th className="px-8 py-4">Plan Tier</th>
                 <th className="px-8 py-4">Date</th>
                 <th className="px-8 py-4">Tax (GST)</th>
                 <th className="px-8 py-4 text-right">Amount</th>
              </tr>
           </thead>
           <tbody className="divide-y divide-white/5 text-sm">
              {[
                { name: "Power House Gym", plan: "Enterprise", date: "22 April", tax: "₹8,100", amount: "₹45,000" },
                { name: "Iron Paradise", plan: "Pro", date: "21 April", tax: "₹3,960", amount: "₹22,000" },
                { name: "Genz Fitness", plan: "Basic", date: "20 April", tax: "₹2,160", amount: "₹12,000" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-white/[0.02] transition">
                   <td className="px-8 py-5 font-bold">{row.name}</td>
                   <td className="px-8 py-5">
                      <span className="text-[10px] font-black uppercase text-orange-500 px-2 py-1 bg-orange-500/5 rounded-md border border-orange-500/20">{row.plan}</span>
                   </td>
                   <td className="px-8 py-5 text-gray-500 font-medium">{row.date}</td>
                   <td className="px-8 py-5 text-gray-500">{row.tax}</td>
                   <td className="px-8 py-5 text-right font-black text-green-400">{row.amount}</td>
                </tr>
              ))}
           </tbody>
        </table>
      </div>

    </div>
  );
}