"use client";

import {
  BarChart3,
  PieChart,
  LineChart,
  Calendar,
  Download,
  ArrowUpRight,
  ArrowDownRight,
  Users,
  Target,
  Trophy,
  Zap
} from "lucide-react";

export default function AdminReports() {
  const performanceData = [
    { label: "New Admissions", value: "+24%", trend: "up" },
    { label: "Revenue Growth", value: "+18%", trend: "up" },
    { label: "Member Churn", value: "-5%", trend: "down" },
    { label: "Lead Conversion", value: "32%", trend: "up" },
  ];

  return (
    <div className="space-y-8 text-white p-2">
      
      {/* REPORT HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black italic tracking-tighter">ZYRA-ANALYTICS</h1>
          <p className="text-gray-400 text-sm">Deep dive into your gym's performance and growth metrics.</p>
        </div>
        <div className="flex items-center gap-3 bg-[#0b1220] p-1.5 rounded-2xl border border-white/5">
          <button className="px-4 py-2 bg-white/5 rounded-xl text-xs font-bold hover:bg-white/10 transition">Last 30 Days</button>
          <button className="px-4 py-2 text-xs font-bold text-gray-500 hover:text-white transition flex items-center gap-2">
            <Calendar size={14} /> Custom Date
          </button>
        </div>
      </div>

      {/* INSIGHT CARDS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {performanceData.map((stat, i) => (
          <div key={i} className="bg-[#0b1220] p-5 rounded-[2rem] border border-white/5 group hover:border-orange-500/30 transition-all">
            <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1">{stat.label}</p>
            <div className="flex items-end justify-between">
              <h2 className="text-2xl font-black">{stat.value}</h2>
              {stat.trend === 'up' ? (
                <ArrowUpRight className="text-green-500 mb-1" size={20} />
              ) : (
                <ArrowDownRight className="text-red-500 mb-1" size={20} />
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* REVENUE GRAPH PLACEHOLDER (Using CSS for Visual representation) */}
        <div className="lg:col-span-2 bg-[#0b1220] rounded-[2.5rem] border border-white/5 p-8">
          <div className="flex justify-between items-center mb-10">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-orange-500/10 rounded-2xl text-orange-500">
                <BarChart3 size={20} />
              </div>
              <h3 className="text-xl font-bold italic">Revenue Forecast</h3>
            </div>
            <button className="p-2 bg-white/5 rounded-full text-gray-400 hover:text-white transition"><Download size={16}/></button>
          </div>

          <div className="h-64 flex items-end gap-3 sm:gap-6 px-2">
            {[40, 70, 45, 90, 65, 80, 95].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-3 group">
                <div 
                  className="w-full bg-gradient-to-t from-orange-600 to-orange-400 rounded-t-xl group-hover:from-orange-400 group-hover:to-white transition-all duration-500 relative"
                  style={{ height: `${h}%` }}
                >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        {h}k
                    </div>
                </div>
                <span className="text-[10px] text-gray-500 font-bold">Month {i+1}</span>
              </div>
            ))}
          </div>
        </div>

        {/* TOP PERFORMERS LIST */}
        <div className="bg-gradient-to-b from-[#0f172a] to-[#020617] rounded-[2.5rem] border border-white/5 p-8 flex flex-col">
          <div className="flex items-center gap-3 mb-8">
            <Trophy className="text-yellow-500" size={24} />
            <h3 className="text-xl font-bold italic">Top Trainers</h3>
          </div>
          
          <div className="space-y-6 flex-1">
            {[
              { name: "Aman Raj", score: "98%", rev: "₹1.2L" },
              { name: "Sneha Kapoor", score: "94%", rev: "₹95k" },
              { name: "Arjun Dixit", score: "88%", rev: "₹82k" },
            ].map((t, i) => (
              <div key={i} className="flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-black text-xs group-hover:bg-orange-500 transition-colors">
                    {i+1}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold">{t.name}</h4>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-tighter">Performance: {t.score}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs font-black text-orange-400">{t.rev}</p>
                  <p className="text-[10px] text-gray-600">Contribution</p>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-8 w-full py-4 bg-[#0b1220] hover:bg-white/5 border border-white/5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all">
            Full Staff Audit
          </button>
        </div>

      </div>

      {/* QUICK STATS & TARGETS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#0b1220] rounded-[2.5rem] border border-white/5 p-8">
          <div className="flex items-center gap-3 mb-6">
            <Target className="text-blue-500" size={24} />
            <h3 className="text-xl font-bold italic">Monthly Goal</h3>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold mb-2">
              <span className="text-gray-400 uppercase tracking-widest">Revenue Target</span>
              <span className="text-blue-400">₹8,00,000 / ₹10,00,000</span>
            </div>
            <div className="h-4 bg-[#020617] rounded-full p-1 border border-white/5">
              <div className="h-full bg-blue-500 rounded-full transition-all duration-1000" style={{ width: '80%' }} />
            </div>
            <p className="text-[10px] text-gray-500 text-right mt-2 font-bold uppercase">80% Achieved</p>
          </div>
        </div>

        <div className="bg-orange-500 rounded-[2.5rem] p-8 flex items-center justify-between shadow-2xl shadow-orange-500/20 group">
          <div className="space-y-1">
            <h3 className="text-2xl font-black italic text-black uppercase">Ready for Audit?</h3>
            <p className="text-orange-950/70 text-xs font-bold max-w-[200px]">Generate a comprehensive financial and operational report for the current fiscal year.</p>
          </div>
          <button className="w-16 h-16 bg-black rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
            <Zap className="text-orange-500 fill-orange-500" size={28} />
          </button>
        </div>
      </div>

    </div>
  );
}